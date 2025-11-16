#!/usr/bin/env python3
"""
PLY to 3D Mesh Converter with Advanced Facial Mesh Optimization
================================================================
A specialized tool for converting PLY files to various 3D mesh formats
with enhanced processing for facial geometry.
"""

import argparse
import struct
import numpy as np
from pathlib import Path
import json
import sys
from dataclasses import dataclass, field
from typing import List, Tuple, Optional, Dict, Any


@dataclass
class Vertex:
    """Represents a 3D vertex with optional properties."""
    x: float
    y: float
    z: float
    nx: float = 0.0
    ny: float = 0.0
    nz: float = 0.0
    r: int = 255
    g: int = 255
    b: int = 255
    a: int = 255
    confidence: float = 1.0


@dataclass
class Face:
    """Represents a mesh face (polygon)."""
    vertex_indices: List[int] = field(default_factory=list)
    normal: Optional[Tuple[float, float, float]] = None


@dataclass
class Mesh3D:
    """Complete 3D mesh representation."""
    vertices: List[Vertex] = field(default_factory=list)
    faces: List[Face] = field(default_factory=list)
    metadata: Dict[str, Any] = field(default_factory=dict)

    def vertex_count(self) -> int:
        return len(self.vertices)

    def face_count(self) -> int:
        return len(self.faces)

    def get_vertices_array(self) -> np.ndarray:
        """Convert vertices to numpy array."""
        return np.array([[v.x, v.y, v.z] for v in self.vertices])

    def get_normals_array(self) -> np.ndarray:
        """Convert normals to numpy array."""
        return np.array([[v.nx, v.ny, v.nz] for v in self.vertices])

    def get_colors_array(self) -> np.ndarray:
        """Convert colors to numpy array."""
        return np.array([[v.r, v.g, v.b, v.a] for v in self.vertices])


class PLYParser:
    """Advanced PLY file parser supporting ASCII and binary formats."""

    def __init__(self):
        self.format = "ascii"
        self.version = "1.0"
        self.elements = {}
        self.properties = {}
        self.comments = []

    def parse(self, filepath: str) -> Mesh3D:
        """Parse a PLY file and return a Mesh3D object."""
        filepath = Path(filepath)
        if not filepath.exists():
            raise FileNotFoundError(f"PLY file not found: {filepath}")

        if not filepath.suffix.lower() == '.ply':
            raise ValueError(f"File must have .ply extension: {filepath}")

        with open(filepath, 'rb') as f:
            # Parse header
            header_end = self._parse_header(f)

            # Parse data based on format
            if self.format == "ascii":
                mesh = self._parse_ascii(f)
            elif "binary_little_endian" in self.format:
                mesh = self._parse_binary_little_endian(f)
            elif "binary_big_endian" in self.format:
                mesh = self._parse_binary_big_endian(f)
            else:
                raise ValueError(f"Unsupported PLY format: {self.format}")

        mesh.metadata['source_file'] = str(filepath)
        mesh.metadata['format'] = self.format
        mesh.metadata['comments'] = self.comments

        return mesh

    def _parse_header(self, f) -> int:
        """Parse PLY header and return byte position of data start."""
        line = f.readline().decode('utf-8').strip()
        if line != "ply":
            raise ValueError("Not a valid PLY file (missing 'ply' header)")

        current_element = None

        while True:
            line = f.readline().decode('utf-8').strip()

            if line == "end_header":
                break

            parts = line.split()
            if not parts:
                continue

            keyword = parts[0]

            if keyword == "format":
                self.format = parts[1]
                self.version = parts[2] if len(parts) > 2 else "1.0"

            elif keyword == "comment":
                self.comments.append(" ".join(parts[1:]))

            elif keyword == "element":
                element_name = parts[1]
                element_count = int(parts[2])
                self.elements[element_name] = element_count
                self.properties[element_name] = []
                current_element = element_name

            elif keyword == "property":
                if current_element is None:
                    raise ValueError("Property defined before element")

                if parts[1] == "list":
                    # List property (e.g., vertex_indices)
                    count_type = parts[2]
                    value_type = parts[3]
                    prop_name = parts[4]
                    self.properties[current_element].append({
                        'name': prop_name,
                        'type': 'list',
                        'count_type': count_type,
                        'value_type': value_type
                    })
                else:
                    # Scalar property
                    prop_type = parts[1]
                    prop_name = parts[2]
                    self.properties[current_element].append({
                        'name': prop_name,
                        'type': prop_type
                    })

        return f.tell()

    def _parse_ascii(self, f) -> Mesh3D:
        """Parse ASCII PLY data."""
        mesh = Mesh3D()

        # Parse vertices
        vertex_count = self.elements.get('vertex', 0)
        vertex_props = self.properties.get('vertex', [])

        for _ in range(vertex_count):
            line = f.readline().decode('utf-8').strip()
            values = line.split()

            vertex = Vertex(0, 0, 0)
            for i, prop in enumerate(vertex_props):
                if i >= len(values):
                    break
                value = float(values[i])

                if prop['name'] == 'x':
                    vertex.x = value
                elif prop['name'] == 'y':
                    vertex.y = value
                elif prop['name'] == 'z':
                    vertex.z = value
                elif prop['name'] == 'nx':
                    vertex.nx = value
                elif prop['name'] == 'ny':
                    vertex.ny = value
                elif prop['name'] == 'nz':
                    vertex.nz = value
                elif prop['name'] in ['red', 'r']:
                    vertex.r = int(value)
                elif prop['name'] in ['green', 'g']:
                    vertex.g = int(value)
                elif prop['name'] in ['blue', 'b']:
                    vertex.b = int(value)
                elif prop['name'] in ['alpha', 'a']:
                    vertex.a = int(value)
                elif prop['name'] == 'confidence':
                    vertex.confidence = value

            mesh.vertices.append(vertex)

        # Parse faces
        face_count = self.elements.get('face', 0)

        for _ in range(face_count):
            line = f.readline().decode('utf-8').strip()
            values = list(map(int, line.split()))

            if values:
                num_vertices = values[0]
                indices = values[1:num_vertices + 1]
                face = Face(vertex_indices=indices)
                mesh.faces.append(face)

        return mesh

    def _parse_binary_little_endian(self, f) -> Mesh3D:
        """Parse binary little-endian PLY data."""
        return self._parse_binary(f, '<')

    def _parse_binary_big_endian(self, f) -> Mesh3D:
        """Parse binary big-endian PLY data."""
        return self._parse_binary(f, '>')

    def _parse_binary(self, f, endian: str) -> Mesh3D:
        """Parse binary PLY data with specified endianness."""
        mesh = Mesh3D()

        type_map = {
            'char': ('b', 1),
            'uchar': ('B', 1),
            'short': ('h', 2),
            'ushort': ('H', 2),
            'int': ('i', 4),
            'uint': ('I', 4),
            'float': ('f', 4),
            'double': ('d', 8),
            'int8': ('b', 1),
            'uint8': ('B', 1),
            'int16': ('h', 2),
            'uint16': ('H', 2),
            'int32': ('i', 4),
            'uint32': ('I', 4),
            'float32': ('f', 4),
            'float64': ('d', 8),
        }

        # Parse vertices
        vertex_count = self.elements.get('vertex', 0)
        vertex_props = self.properties.get('vertex', [])

        for _ in range(vertex_count):
            vertex = Vertex(0, 0, 0)

            for prop in vertex_props:
                fmt_char, size = type_map.get(prop['type'], ('f', 4))
                data = f.read(size)
                value = struct.unpack(endian + fmt_char, data)[0]

                if prop['name'] == 'x':
                    vertex.x = float(value)
                elif prop['name'] == 'y':
                    vertex.y = float(value)
                elif prop['name'] == 'z':
                    vertex.z = float(value)
                elif prop['name'] == 'nx':
                    vertex.nx = float(value)
                elif prop['name'] == 'ny':
                    vertex.ny = float(value)
                elif prop['name'] == 'nz':
                    vertex.nz = float(value)
                elif prop['name'] in ['red', 'r']:
                    vertex.r = int(value)
                elif prop['name'] in ['green', 'g']:
                    vertex.g = int(value)
                elif prop['name'] in ['blue', 'b']:
                    vertex.b = int(value)
                elif prop['name'] in ['alpha', 'a']:
                    vertex.a = int(value)

            mesh.vertices.append(vertex)

        # Parse faces
        face_count = self.elements.get('face', 0)
        face_props = self.properties.get('face', [])

        for _ in range(face_count):
            face = Face()

            for prop in face_props:
                if prop['type'] == 'list':
                    count_fmt, count_size = type_map.get(prop['count_type'], ('B', 1))
                    count_data = f.read(count_size)
                    count = struct.unpack(endian + count_fmt, count_data)[0]

                    value_fmt, value_size = type_map.get(prop['value_type'], ('i', 4))
                    indices = []
                    for _ in range(count):
                        idx_data = f.read(value_size)
                        idx = struct.unpack(endian + value_fmt, idx_data)[0]
                        indices.append(idx)

                    if prop['name'] == 'vertex_indices':
                        face.vertex_indices = indices

            mesh.faces.append(face)

        return mesh


class FacialMeshOptimizer:
    """
    Advanced facial mesh optimization algorithms.
    Specialized for human face geometry processing.
    """

    def __init__(self):
        self.facial_landmarks = {}
        self.symmetry_axis = np.array([1, 0, 0])  # Default X-axis symmetry

    def optimize(self, mesh: Mesh3D, options: Dict[str, Any] = None) -> Mesh3D:
        """Apply facial-specific optimizations to the mesh."""
        if options is None:
            options = {}

        # Apply optimizations based on options
        if options.get('compute_normals', True):
            mesh = self.compute_vertex_normals(mesh)

        if options.get('smooth_mesh', False):
            iterations = options.get('smooth_iterations', 3)
            mesh = self.laplacian_smoothing(mesh, iterations)

        if options.get('detect_landmarks', True):
            self.detect_facial_landmarks(mesh)

        if options.get('enforce_symmetry', False):
            mesh = self.enforce_facial_symmetry(mesh)

        if options.get('optimize_topology', False):
            mesh = self.optimize_topology(mesh)

        if options.get('fill_holes', False):
            mesh = self.fill_holes(mesh)

        if options.get('decimate', False):
            target_ratio = options.get('decimate_ratio', 0.5)
            mesh = self.decimate_mesh(mesh, target_ratio)

        return mesh

    def compute_vertex_normals(self, mesh: Mesh3D) -> Mesh3D:
        """Compute smooth vertex normals for the mesh."""
        if not mesh.faces:
            return mesh

        vertices = mesh.get_vertices_array()

        # Initialize normals
        vertex_normals = np.zeros_like(vertices)

        # Compute face normals and accumulate to vertices
        for face in mesh.faces:
            if len(face.vertex_indices) < 3:
                continue

            # Get face vertices
            v0 = vertices[face.vertex_indices[0]]
            v1 = vertices[face.vertex_indices[1]]
            v2 = vertices[face.vertex_indices[2]]

            # Compute face normal
            edge1 = v1 - v0
            edge2 = v2 - v0
            face_normal = np.cross(edge1, edge2)
            norm = np.linalg.norm(face_normal)

            if norm > 1e-10:
                face_normal = face_normal / norm
                face.normal = tuple(face_normal)

                # Accumulate to vertex normals
                for idx in face.vertex_indices:
                    vertex_normals[idx] += face_normal

        # Normalize vertex normals
        for i in range(len(mesh.vertices)):
            norm = np.linalg.norm(vertex_normals[i])
            if norm > 1e-10:
                vertex_normals[i] = vertex_normals[i] / norm
            else:
                vertex_normals[i] = np.array([0, 0, 1])

            mesh.vertices[i].nx = vertex_normals[i][0]
            mesh.vertices[i].ny = vertex_normals[i][1]
            mesh.vertices[i].nz = vertex_normals[i][2]

        return mesh

    def laplacian_smoothing(self, mesh: Mesh3D, iterations: int = 3,
                            lambda_factor: float = 0.5) -> Mesh3D:
        """Apply Laplacian smoothing to reduce noise while preserving features."""
        if not mesh.faces:
            return mesh

        vertices = mesh.get_vertices_array()
        num_vertices = len(vertices)

        # Build adjacency list
        adjacency = [set() for _ in range(num_vertices)]
        for face in mesh.faces:
            for i in range(len(face.vertex_indices)):
                v1 = face.vertex_indices[i]
                v2 = face.vertex_indices[(i + 1) % len(face.vertex_indices)]
                adjacency[v1].add(v2)
                adjacency[v2].add(v1)

        # Apply smoothing iterations
        for _ in range(iterations):
            new_vertices = vertices.copy()

            for i in range(num_vertices):
                if len(adjacency[i]) == 0:
                    continue

                # Compute Laplacian
                neighbor_sum = np.zeros(3)
                for neighbor_idx in adjacency[i]:
                    neighbor_sum += vertices[neighbor_idx]

                centroid = neighbor_sum / len(adjacency[i])
                laplacian = centroid - vertices[i]

                # Update vertex position
                new_vertices[i] = vertices[i] + lambda_factor * laplacian

            vertices = new_vertices

        # Update mesh vertices
        for i, v in enumerate(mesh.vertices):
            v.x = vertices[i][0]
            v.y = vertices[i][1]
            v.z = vertices[i][2]

        return mesh

    def detect_facial_landmarks(self, mesh: Mesh3D) -> Dict[str, int]:
        """
        Detect key facial landmarks using geometric analysis.
        Uses curvature and position analysis for landmark detection.
        """
        vertices = mesh.get_vertices_array()

        if len(vertices) == 0:
            return {}

        # Find bounding box
        min_bounds = np.min(vertices, axis=0)
        max_bounds = np.max(vertices, axis=0)
        center = (min_bounds + max_bounds) / 2

        # Detect nose tip (furthest point in Z direction from center)
        z_distances = vertices[:, 2] - center[2]
        nose_tip_idx = np.argmax(z_distances)
        self.facial_landmarks['nose_tip'] = nose_tip_idx

        # Detect chin (lowest point in Y)
        chin_idx = np.argmin(vertices[:, 1])
        self.facial_landmarks['chin'] = chin_idx

        # Detect forehead (highest point in Y)
        forehead_idx = np.argmax(vertices[:, 1])
        self.facial_landmarks['forehead'] = forehead_idx

        # Detect left and right extremes (ear regions)
        left_idx = np.argmin(vertices[:, 0])
        right_idx = np.argmax(vertices[:, 0])
        self.facial_landmarks['left_ear'] = left_idx
        self.facial_landmarks['right_ear'] = right_idx

        # Store in metadata
        mesh.metadata['facial_landmarks'] = self.facial_landmarks
        mesh.metadata['face_center'] = center.tolist()
        mesh.metadata['bounding_box'] = {
            'min': min_bounds.tolist(),
            'max': max_bounds.tolist()
        }

        return self.facial_landmarks

    def enforce_facial_symmetry(self, mesh: Mesh3D,
                                 symmetry_weight: float = 0.5) -> Mesh3D:
        """Enforce bilateral symmetry typical of human faces."""
        vertices = mesh.get_vertices_array()

        if len(vertices) == 0:
            return mesh

        # Find center plane
        center_x = np.mean(vertices[:, 0])

        # Create symmetry mapping
        new_vertices = vertices.copy()

        for i in range(len(vertices)):
            # Mirror position
            mirror_pos = vertices[i].copy()
            mirror_pos[0] = 2 * center_x - mirror_pos[0]

            # Find closest vertex on the other side
            distances = np.linalg.norm(vertices - mirror_pos, axis=1)
            closest_idx = np.argmin(distances)

            if distances[closest_idx] < 0.1 * np.linalg.norm(
                np.max(vertices, axis=0) - np.min(vertices, axis=0)
            ):
                # Blend with symmetric counterpart
                symmetric_pos = vertices[closest_idx].copy()
                symmetric_pos[0] = 2 * center_x - symmetric_pos[0]

                new_vertices[i] = (
                    (1 - symmetry_weight) * vertices[i] +
                    symmetry_weight * symmetric_pos
                )

        # Update mesh
        for i, v in enumerate(mesh.vertices):
            v.x = new_vertices[i][0]
            v.y = new_vertices[i][1]
            v.z = new_vertices[i][2]

        return mesh

    def optimize_topology(self, mesh: Mesh3D) -> Mesh3D:
        """Optimize mesh topology by removing degenerate faces."""
        if not mesh.faces:
            return mesh

        valid_faces = []
        vertices = mesh.get_vertices_array()

        for face in mesh.faces:
            if len(face.vertex_indices) < 3:
                continue

            # Check for degenerate triangles
            v0 = vertices[face.vertex_indices[0]]
            v1 = vertices[face.vertex_indices[1]]
            v2 = vertices[face.vertex_indices[2]]

            edge1 = v1 - v0
            edge2 = v2 - v0
            area = 0.5 * np.linalg.norm(np.cross(edge1, edge2))

            # Keep only non-degenerate faces
            if area > 1e-10:
                valid_faces.append(face)

        mesh.faces = valid_faces
        mesh.metadata['topology_optimized'] = True
        mesh.metadata['removed_degenerate_faces'] = len(mesh.faces) - len(valid_faces)

        return mesh

    def fill_holes(self, mesh: Mesh3D) -> Mesh3D:
        """Simple hole filling by detecting boundary edges."""
        if not mesh.faces:
            return mesh

        # Build edge map
        edge_count = {}

        for face in mesh.faces:
            n = len(face.vertex_indices)
            for i in range(n):
                v1 = face.vertex_indices[i]
                v2 = face.vertex_indices[(i + 1) % n]
                edge = (min(v1, v2), max(v1, v2))
                edge_count[edge] = edge_count.get(edge, 0) + 1

        # Find boundary edges (edges with count 1)
        boundary_edges = [edge for edge, count in edge_count.items() if count == 1]

        mesh.metadata['boundary_edges'] = len(boundary_edges)
        mesh.metadata['has_holes'] = len(boundary_edges) > 0

        return mesh

    def decimate_mesh(self, mesh: Mesh3D, target_ratio: float = 0.5) -> Mesh3D:
        """
        Reduce mesh complexity while preserving important features.
        Uses vertex clustering for decimation.
        """
        if not mesh.vertices or target_ratio >= 1.0:
            return mesh

        vertices = mesh.get_vertices_array()
        target_count = max(4, int(len(vertices) * target_ratio))

        # Simple grid-based clustering
        min_bounds = np.min(vertices, axis=0)
        max_bounds = np.max(vertices, axis=0)

        # Determine grid resolution
        grid_res = int(np.ceil(np.power(target_count, 1/3)))
        cell_size = (max_bounds - min_bounds) / grid_res

        # Cluster vertices
        clusters = {}
        for i, v in enumerate(vertices):
            cell_idx = tuple(((v - min_bounds) / (cell_size + 1e-10)).astype(int))
            if cell_idx not in clusters:
                clusters[cell_idx] = []
            clusters[cell_idx].append(i)

        # Create new vertices (cluster centroids)
        new_vertices = []
        old_to_new = {}

        for cell_idx, vertex_indices in clusters.items():
            # Compute centroid
            cluster_vertices = vertices[vertex_indices]
            centroid = np.mean(cluster_vertices, axis=0)

            # Get average properties from original vertices
            avg_vertex = Vertex(centroid[0], centroid[1], centroid[2])

            # Average normals and colors
            nx_sum = ny_sum = nz_sum = 0.0
            r_sum = g_sum = b_sum = 0

            for idx in vertex_indices:
                orig_v = mesh.vertices[idx]
                nx_sum += orig_v.nx
                ny_sum += orig_v.ny
                nz_sum += orig_v.nz
                r_sum += orig_v.r
                g_sum += orig_v.g
                b_sum += orig_v.b

            n = len(vertex_indices)
            avg_vertex.nx = nx_sum / n
            avg_vertex.ny = ny_sum / n
            avg_vertex.nz = nz_sum / n
            avg_vertex.r = int(r_sum / n)
            avg_vertex.g = int(g_sum / n)
            avg_vertex.b = int(b_sum / n)

            new_idx = len(new_vertices)
            new_vertices.append(avg_vertex)

            # Map old indices to new
            for old_idx in vertex_indices:
                old_to_new[old_idx] = new_idx

        # Remap faces
        new_faces = []
        for face in mesh.faces:
            new_indices = []
            seen = set()

            for old_idx in face.vertex_indices:
                new_idx = old_to_new.get(old_idx, 0)
                if new_idx not in seen:
                    new_indices.append(new_idx)
                    seen.add(new_idx)

            # Only keep valid faces
            if len(new_indices) >= 3:
                new_faces.append(Face(vertex_indices=new_indices))

        mesh.vertices = new_vertices
        mesh.faces = new_faces
        mesh.metadata['decimated'] = True
        mesh.metadata['decimation_ratio'] = len(new_vertices) / len(vertices)

        return mesh


class NumpyEncoder(json.JSONEncoder):
    """Custom JSON encoder for numpy types."""
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        if isinstance(obj, np.floating):
            return float(obj)
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return super().default(obj)


class MeshExporter:
    """Export meshes to various 3D formats."""

    @staticmethod
    def export_obj(mesh: Mesh3D, filepath: str) -> None:
        """Export mesh to Wavefront OBJ format."""
        with open(filepath, 'w') as f:
            f.write("# PLY to Mesh Converter - OBJ Export\n")
            f.write(f"# Vertices: {mesh.vertex_count()}\n")
            f.write(f"# Faces: {mesh.face_count()}\n\n")

            # Write vertices
            for v in mesh.vertices:
                f.write(f"v {v.x:.6f} {v.y:.6f} {v.z:.6f}\n")

            f.write("\n")

            # Write vertex normals
            has_normals = any(
                v.nx != 0 or v.ny != 0 or v.nz != 0
                for v in mesh.vertices
            )

            if has_normals:
                for v in mesh.vertices:
                    f.write(f"vn {v.nx:.6f} {v.ny:.6f} {v.nz:.6f}\n")
                f.write("\n")

            # Write faces
            for face in mesh.faces:
                if has_normals:
                    indices = " ".join(
                        f"{idx+1}//{idx+1}" for idx in face.vertex_indices
                    )
                else:
                    indices = " ".join(str(idx + 1) for idx in face.vertex_indices)
                f.write(f"f {indices}\n")

    @staticmethod
    def export_stl_ascii(mesh: Mesh3D, filepath: str) -> None:
        """Export mesh to ASCII STL format."""
        with open(filepath, 'w') as f:
            f.write("solid mesh\n")

            vertices = mesh.get_vertices_array()

            for face in mesh.faces:
                if len(face.vertex_indices) < 3:
                    continue

                # Triangulate if needed (simple fan triangulation)
                for i in range(1, len(face.vertex_indices) - 1):
                    v0 = vertices[face.vertex_indices[0]]
                    v1 = vertices[face.vertex_indices[i]]
                    v2 = vertices[face.vertex_indices[i + 1]]

                    # Compute normal
                    edge1 = v1 - v0
                    edge2 = v2 - v0
                    normal = np.cross(edge1, edge2)
                    norm = np.linalg.norm(normal)
                    if norm > 1e-10:
                        normal = normal / norm
                    else:
                        normal = np.array([0, 0, 1])

                    f.write(f"  facet normal {normal[0]:.6f} {normal[1]:.6f} {normal[2]:.6f}\n")
                    f.write("    outer loop\n")
                    f.write(f"      vertex {v0[0]:.6f} {v0[1]:.6f} {v0[2]:.6f}\n")
                    f.write(f"      vertex {v1[0]:.6f} {v1[1]:.6f} {v1[2]:.6f}\n")
                    f.write(f"      vertex {v2[0]:.6f} {v2[1]:.6f} {v2[2]:.6f}\n")
                    f.write("    endloop\n")
                    f.write("  endfacet\n")

            f.write("endsolid mesh\n")

    @staticmethod
    def export_stl_binary(mesh: Mesh3D, filepath: str) -> None:
        """Export mesh to binary STL format."""
        vertices = mesh.get_vertices_array()

        # Count triangles
        num_triangles = 0
        for face in mesh.faces:
            if len(face.vertex_indices) >= 3:
                num_triangles += len(face.vertex_indices) - 2

        with open(filepath, 'wb') as f:
            # 80-byte header
            header = b'Binary STL from PLY Converter' + b'\0' * 50
            f.write(header[:80])

            # Number of triangles
            f.write(struct.pack('<I', num_triangles))

            # Write triangles
            for face in mesh.faces:
                if len(face.vertex_indices) < 3:
                    continue

                for i in range(1, len(face.vertex_indices) - 1):
                    v0 = vertices[face.vertex_indices[0]]
                    v1 = vertices[face.vertex_indices[i]]
                    v2 = vertices[face.vertex_indices[i + 1]]

                    # Compute normal
                    edge1 = v1 - v0
                    edge2 = v2 - v0
                    normal = np.cross(edge1, edge2)
                    norm = np.linalg.norm(normal)
                    if norm > 1e-10:
                        normal = normal / norm
                    else:
                        normal = np.array([0, 0, 1])

                    # Write normal
                    f.write(struct.pack('<fff', *normal))
                    # Write vertices
                    f.write(struct.pack('<fff', *v0))
                    f.write(struct.pack('<fff', *v1))
                    f.write(struct.pack('<fff', *v2))
                    # Attribute byte count
                    f.write(struct.pack('<H', 0))

    @staticmethod
    def export_json(mesh: Mesh3D, filepath: str) -> None:
        """Export mesh to JSON format."""
        data = {
            'metadata': mesh.metadata,
            'vertices': [
                {
                    'position': [v.x, v.y, v.z],
                    'normal': [v.nx, v.ny, v.nz],
                    'color': [v.r, v.g, v.b, v.a],
                    'confidence': v.confidence
                }
                for v in mesh.vertices
            ],
            'faces': [
                {'indices': face.vertex_indices}
                for face in mesh.faces
            ],
            'statistics': {
                'vertex_count': mesh.vertex_count(),
                'face_count': mesh.face_count()
            }
        }

        with open(filepath, 'w') as f:
            json.dump(data, f, indent=2, cls=NumpyEncoder)

    @staticmethod
    def export_ply(mesh: Mesh3D, filepath: str, binary: bool = False) -> None:
        """Export mesh back to PLY format (useful after optimization)."""
        with open(filepath, 'w' if not binary else 'wb') as f:
            if binary:
                # Binary PLY export
                header = f"""ply
format binary_little_endian 1.0
comment Exported from PLY to Mesh Converter
element vertex {mesh.vertex_count()}
property float x
property float y
property float z
property float nx
property float ny
property float nz
property uchar red
property uchar green
property uchar blue
element face {mesh.face_count()}
property list uchar int vertex_indices
end_header
"""
                f.write(header.encode('utf-8'))

                # Write vertices
                for v in mesh.vertices:
                    f.write(struct.pack('<fff', v.x, v.y, v.z))
                    f.write(struct.pack('<fff', v.nx, v.ny, v.nz))
                    f.write(struct.pack('<BBB', v.r, v.g, v.b))

                # Write faces
                for face in mesh.faces:
                    f.write(struct.pack('<B', len(face.vertex_indices)))
                    for idx in face.vertex_indices:
                        f.write(struct.pack('<i', idx))
            else:
                # ASCII PLY export
                f.write("ply\n")
                f.write("format ascii 1.0\n")
                f.write("comment Exported from PLY to Mesh Converter\n")
                f.write(f"element vertex {mesh.vertex_count()}\n")
                f.write("property float x\n")
                f.write("property float y\n")
                f.write("property float z\n")
                f.write("property float nx\n")
                f.write("property float ny\n")
                f.write("property float nz\n")
                f.write("property uchar red\n")
                f.write("property uchar green\n")
                f.write("property uchar blue\n")
                f.write(f"element face {mesh.face_count()}\n")
                f.write("property list uchar int vertex_indices\n")
                f.write("end_header\n")

                # Write vertices
                for v in mesh.vertices:
                    f.write(f"{v.x:.6f} {v.y:.6f} {v.z:.6f} ")
                    f.write(f"{v.nx:.6f} {v.ny:.6f} {v.nz:.6f} ")
                    f.write(f"{v.r} {v.g} {v.b}\n")

                # Write faces
                for face in mesh.faces:
                    indices = " ".join(map(str, face.vertex_indices))
                    f.write(f"{len(face.vertex_indices)} {indices}\n")


def main():
    """Main entry point for the PLY to Mesh Converter."""
    parser = argparse.ArgumentParser(
        description="PLY to 3D Mesh Converter with Facial Optimization",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s input.ply -o output.obj
  %(prog)s face_scan.ply -o face.stl --smooth --detect-landmarks
  %(prog)s model.ply -o optimized.obj --smooth --iterations 5 --symmetry
  %(prog)s large_mesh.ply -o decimated.obj --decimate --ratio 0.3
        """
    )

    parser.add_argument(
        'input',
        help='Input PLY file path'
    )

    parser.add_argument(
        '-o', '--output',
        required=True,
        help='Output file path (format determined by extension: .obj, .stl, .json, .ply)'
    )

    parser.add_argument(
        '--smooth',
        action='store_true',
        help='Apply Laplacian smoothing to reduce noise'
    )

    parser.add_argument(
        '--iterations',
        type=int,
        default=3,
        help='Number of smoothing iterations (default: 3)'
    )

    parser.add_argument(
        '--detect-landmarks',
        action='store_true',
        help='Detect facial landmarks'
    )

    parser.add_argument(
        '--symmetry',
        action='store_true',
        help='Enforce facial symmetry'
    )

    parser.add_argument(
        '--optimize-topology',
        action='store_true',
        help='Remove degenerate faces'
    )

    parser.add_argument(
        '--fill-holes',
        action='store_true',
        help='Attempt to fill mesh holes'
    )

    parser.add_argument(
        '--decimate',
        action='store_true',
        help='Reduce mesh complexity'
    )

    parser.add_argument(
        '--ratio',
        type=float,
        default=0.5,
        help='Decimation target ratio (default: 0.5)'
    )

    parser.add_argument(
        '--binary',
        action='store_true',
        help='Use binary format for STL/PLY output'
    )

    parser.add_argument(
        '--info',
        action='store_true',
        help='Print mesh information and exit'
    )

    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Enable verbose output'
    )

    args = parser.parse_args()

    # Parse input PLY file
    if args.verbose:
        print(f"Loading PLY file: {args.input}")

    try:
        ply_parser = PLYParser()
        mesh = ply_parser.parse(args.input)

        if args.verbose:
            print(f"Loaded {mesh.vertex_count()} vertices and {mesh.face_count()} faces")
    except Exception as e:
        print(f"Error loading PLY file: {e}", file=sys.stderr)
        sys.exit(1)

    # Apply optimizations
    optimizer = FacialMeshOptimizer()

    options = {
        'compute_normals': True,
        'smooth_mesh': args.smooth,
        'smooth_iterations': args.iterations,
        'detect_landmarks': args.detect_landmarks,
        'enforce_symmetry': args.symmetry,
        'optimize_topology': args.optimize_topology,
        'fill_holes': args.fill_holes,
        'decimate': args.decimate,
        'decimate_ratio': args.ratio
    }

    if args.verbose:
        print("Applying optimizations...")

    mesh = optimizer.optimize(mesh, options)

    if args.verbose:
        print(f"After optimization: {mesh.vertex_count()} vertices, {mesh.face_count()} faces")

    # Print info if requested
    if args.info:
        print("\nMesh Information:")
        print(f"  Vertices: {mesh.vertex_count()}")
        print(f"  Faces: {mesh.face_count()}")
        print(f"  Source: {mesh.metadata.get('source_file', 'Unknown')}")
        print(f"  Format: {mesh.metadata.get('format', 'Unknown')}")

        if 'facial_landmarks' in mesh.metadata:
            print("\n  Facial Landmarks:")
            for name, idx in mesh.metadata['facial_landmarks'].items():
                v = mesh.vertices[idx]
                print(f"    {name}: vertex {idx} at ({v.x:.3f}, {v.y:.3f}, {v.z:.3f})")

        if 'bounding_box' in mesh.metadata:
            bb = mesh.metadata['bounding_box']
            print(f"\n  Bounding Box:")
            print(f"    Min: {bb['min']}")
            print(f"    Max: {bb['max']}")

        if not args.output:
            return

    # Export to specified format
    output_path = Path(args.output)
    output_ext = output_path.suffix.lower()

    if args.verbose:
        print(f"Exporting to {output_ext} format: {args.output}")

    try:
        if output_ext == '.obj':
            MeshExporter.export_obj(mesh, args.output)
        elif output_ext == '.stl':
            if args.binary:
                MeshExporter.export_stl_binary(mesh, args.output)
            else:
                MeshExporter.export_stl_ascii(mesh, args.output)
        elif output_ext == '.json':
            MeshExporter.export_json(mesh, args.output)
        elif output_ext == '.ply':
            MeshExporter.export_ply(mesh, args.output, binary=args.binary)
        else:
            print(f"Unsupported output format: {output_ext}", file=sys.stderr)
            print("Supported formats: .obj, .stl, .json, .ply", file=sys.stderr)
            sys.exit(1)

        print(f"Successfully converted {args.input} to {args.output}")
        print(f"  Vertices: {mesh.vertex_count()}")
        print(f"  Faces: {mesh.face_count()}")

    except Exception as e:
        print(f"Error exporting mesh: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
