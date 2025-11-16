#!/bin/bash
# Linux/macOS build script for PLY to Mesh Converter

echo "PLY to Mesh Converter - Build Script"
echo "=================================================="

# Check Python installation
if ! command -v python3 &> /dev/null; then
    echo "Error: Python 3 is not installed"
    exit 1
fi

# Check Python version
PYTHON_VERSION=$(python3 -c 'import sys; print(f"{sys.version_info.major}.{sys.version_info.minor}")')
echo "Python version: $PYTHON_VERSION"

# Install requirements
echo "Installing requirements..."
python3 -m pip install -r requirements.txt
if [ $? -ne 0 ]; then
    echo "Error: Failed to install requirements"
    exit 1
fi

# Build executable
echo "Building executable..."
python3 -m PyInstaller --onefile --name ply_to_mesh --console --clean --noconfirm ply_to_mesh_converter.py
if [ $? -ne 0 ]; then
    echo "Error: Build failed"
    exit 1
fi

echo ""
echo "=================================================="
echo "Build complete!"
echo "=================================================="
echo ""
echo "Executable created at: dist/ply_to_mesh"
echo ""

# Show file size
if [ -f "dist/ply_to_mesh" ]; then
    SIZE=$(ls -lh dist/ply_to_mesh | awk '{print $5}')
    echo "File size: $SIZE"
fi

echo ""
echo "Usage:"
echo "  ./dist/ply_to_mesh input.ply -o output.obj"
echo "  ./dist/ply_to_mesh face.ply -o face.stl --smooth --detect-landmarks"
echo "  ./dist/ply_to_mesh --help"
echo ""

# Make executable
chmod +x dist/ply_to_mesh 2>/dev/null
