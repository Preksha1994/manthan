#!/usr/bin/env python3
"""
Build script for creating PLY to Mesh Converter executable.
Uses PyInstaller to create a standalone .exe file.
"""

import subprocess
import sys
import os
from pathlib import Path


def install_requirements():
    """Install required packages."""
    print("Installing requirements...")
    subprocess.check_call([
        sys.executable, "-m", "pip", "install", "-r", "requirements.txt"
    ])


def build_executable():
    """Build the executable using PyInstaller."""
    print("Building executable...")

    # PyInstaller options for creating a single executable
    pyinstaller_args = [
        "pyinstaller",
        "--onefile",                    # Create single executable
        "--name", "ply_to_mesh",        # Name of the executable
        "--console",                    # Console application (for CLI)
        "--clean",                      # Clean build
        "--noconfirm",                  # Don't confirm overwrite
        "--add-data", f"README.md{os.pathsep}.",  # Include README if exists
        "ply_to_mesh_converter.py"      # Main script
    ]

    # Check if README exists
    if not Path("README.md").exists():
        pyinstaller_args = [arg for arg in pyinstaller_args
                            if "README.md" not in arg and arg != "--add-data"]

    subprocess.check_call(pyinstaller_args)

    print("\n" + "=" * 50)
    print("Build complete!")
    print("=" * 50)

    # Platform-specific message
    if sys.platform == "win32":
        exe_path = Path("dist/ply_to_mesh.exe")
        print(f"\nExecutable created at: {exe_path}")
    else:
        exe_path = Path("dist/ply_to_mesh")
        print(f"\nExecutable created at: {exe_path}")
        print("\nNote: For Windows .exe, run this script on a Windows machine")
        print("or use a cross-compilation tool.")

    print(f"\nFile size: {exe_path.stat().st_size / (1024*1024):.2f} MB")

    # Usage instructions
    print("\nUsage:")
    print(f"  {exe_path} input.ply -o output.obj")
    print(f"  {exe_path} face.ply -o face.stl --smooth --detect-landmarks")
    print(f"  {exe_path} --help")


def main():
    """Main build process."""
    print("PLY to Mesh Converter - Build Script")
    print("=" * 50)

    # Check Python version
    if sys.version_info < (3, 7):
        print("Error: Python 3.7 or higher is required")
        sys.exit(1)

    try:
        # Install requirements
        install_requirements()

        # Build executable
        build_executable()

        print("\nBuild successful!")

    except subprocess.CalledProcessError as e:
        print(f"\nBuild failed: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"\nUnexpected error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
