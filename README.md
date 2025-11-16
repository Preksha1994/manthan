# PLY to 3D Mesh Converter

A specialized tool for converting PLY (Polygon File Format) files to various 3D mesh formats with advanced facial mesh optimization algorithms.

## Features

- **Multi-format PLY Support**: ASCII and Binary (little/big endian) PLY files
- **Multiple Export Formats**: OBJ, STL (ASCII/Binary), JSON, PLY
- **Facial Mesh Optimization**:
  - Automatic facial landmark detection (nose tip, chin, forehead, ears)
  - Laplacian mesh smoothing for noise reduction
  - Bilateral facial symmetry enforcement
  - Topology optimization (degenerate face removal)
  - Mesh decimation for complexity reduction
  - Hole detection and filling
- **Vertex Normal Computation**: Automatic smooth normal calculation
- **Color and Property Preservation**: Maintains vertex colors and metadata

## Installation

### Requirements
- Python 3.7 or higher
- NumPy
- PyInstaller (for building executable)

### Install Dependencies
```bash
pip install -r requirements.txt
```

## Building the Executable

### Windows
```batch
build_exe.bat
```
Or:
```bash
python build_exe.py
```

### Linux/macOS
```bash
chmod +x build_exe.sh
./build_exe.sh
```

The executable will be created in the `dist/` directory.

## Usage

### Basic Conversion
```bash
# Convert PLY to OBJ
ply_to_mesh input.ply -o output.obj

# Convert PLY to STL
ply_to_mesh scan.ply -o model.stl

# Convert PLY to JSON (includes all metadata)
ply_to_mesh face.ply -o data.json
```

### Facial Optimization
```bash
# Apply smoothing for noise reduction
ply_to_mesh face_scan.ply -o smooth_face.obj --smooth --iterations 5

# Detect facial landmarks
ply_to_mesh face.ply -o face.obj --detect-landmarks --verbose

# Enforce facial symmetry
ply_to_mesh asymmetric_face.ply -o symmetric.obj --symmetry

# Full facial optimization pipeline
ply_to_mesh raw_scan.ply -o optimized.obj \
  --smooth --iterations 3 \
  --detect-landmarks \
  --symmetry \
  --optimize-topology \
  --verbose
```

### Mesh Simplification
```bash
# Reduce mesh to 50% of original vertices
ply_to_mesh large_mesh.ply -o simplified.obj --decimate --ratio 0.5

# Aggressive decimation (30%)
ply_to_mesh detailed.ply -o low_poly.stl --decimate --ratio 0.3
```

### Binary Export
```bash
# Binary STL (smaller file size)
ply_to_mesh model.ply -o model.stl --binary

# Binary PLY
ply_to_mesh input.ply -o optimized.ply --binary --smooth
```

### Information Display
```bash
# Show mesh statistics
ply_to_mesh face.ply -o output.obj --info --verbose
```

## Command Line Options

| Option | Description |
|--------|-------------|
| `input` | Input PLY file path |
| `-o, --output` | Output file path (required) |
| `--smooth` | Apply Laplacian smoothing |
| `--iterations N` | Smoothing iterations (default: 3) |
| `--detect-landmarks` | Detect facial landmarks |
| `--symmetry` | Enforce bilateral symmetry |
| `--optimize-topology` | Remove degenerate faces |
| `--fill-holes` | Detect and mark mesh holes |
| `--decimate` | Reduce mesh complexity |
| `--ratio N` | Decimation ratio (default: 0.5) |
| `--binary` | Use binary format for STL/PLY |
| `--info` | Display mesh information |
| `--verbose` | Enable detailed output |

## Output Formats

### OBJ (Wavefront)
- Industry standard 3D format
- Supports vertices, normals, and faces
- Human-readable ASCII format
- Compatible with most 3D software

### STL (Stereolithography)
- Common for 3D printing
- ASCII or binary format
- Triangulated mesh output
- Widely supported

### JSON
- Full mesh data with metadata
- Includes facial landmarks
- Color and confidence data
- Easy for web applications

### PLY
- Re-export after optimization
- Preserves all properties
- ASCII or binary format

## Facial Mesh Processing

### Landmark Detection
The converter automatically identifies key facial features:
- **Nose tip**: Furthest point from face center
- **Chin**: Lowest point on the mesh
- **Forehead**: Highest point on the mesh
- **Ear regions**: Lateral extremes

### Smoothing Algorithm
Uses Laplacian smoothing to:
- Reduce scanning noise
- Preserve facial features
- Maintain mesh integrity

### Symmetry Enforcement
Enforces bilateral symmetry typical of human faces by:
- Finding the center plane
- Matching symmetric vertices
- Blending positions

### Topology Optimization
- Removes degenerate (zero-area) faces
- Detects boundary edges
- Identifies mesh holes

## Example Workflow

```bash
# 1. Load and analyze raw face scan
ply_to_mesh raw_scan.ply -o temp.obj --info --verbose

# 2. Apply comprehensive optimization
ply_to_mesh raw_scan.ply -o optimized_face.obj \
  --smooth --iterations 5 \
  --detect-landmarks \
  --optimize-topology \
  --verbose

# 3. Create low-poly version for real-time rendering
ply_to_mesh optimized_face.obj -o low_poly.stl \
  --decimate --ratio 0.3 \
  --binary

# 4. Export with full metadata
ply_to_mesh optimized_face.ply -o face_data.json \
  --detect-landmarks
```

## File Structure

```
.
├── ply_to_mesh_converter.py  # Main converter script
├── build_exe.py              # Python build script
├── build_exe.bat             # Windows build script
├── build_exe.sh              # Linux/macOS build script
├── requirements.txt          # Python dependencies
├── sample_face.ply           # Sample facial mesh
├── README.md                 # This file
└── dist/                     # Built executables (after build)
    └── ply_to_mesh.exe       # Windows executable
```

## Technical Details

### PLY Format Support
- ASCII 1.0
- Binary Little-Endian
- Binary Big-Endian
- Custom properties

### Supported Vertex Properties
- Position (x, y, z)
- Normal (nx, ny, nz)
- Color (red, green, blue, alpha)
- Confidence values

### Mesh Processing
- Face triangulation for STL export
- Vertex clustering for decimation
- Edge-based hole detection
- Feature-preserving smoothing

## Performance

- Handles meshes with millions of vertices
- Optimized NumPy operations
- Memory-efficient processing
- Fast binary I/O

## Limitations

- Hole filling is detection-only (marks but doesn't fill)
- Decimation uses simple clustering (not edge collapse)
- No texture coordinate support
- Single mesh per file

## Future Enhancements

- Deep learning-based facial feature detection
- Texture mapping support
- More decimation algorithms (QEM)
- Animation/rigging support
- Batch processing

## License

Open source - free for personal and commercial use.

## Contributing

Contributions welcome! Please submit issues and pull requests.
