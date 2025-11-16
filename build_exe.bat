@echo off
REM Windows batch script to build PLY to Mesh Converter executable

echo PLY to Mesh Converter - Windows Build Script
echo ==================================================

REM Check Python installation
python --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed or not in PATH
    pause
    exit /b 1
)

REM Install requirements
echo Installing requirements...
python -m pip install -r requirements.txt
if errorlevel 1 (
    echo Error: Failed to install requirements
    pause
    exit /b 1
)

REM Build executable
echo Building executable...
pyinstaller --onefile --name ply_to_mesh --console --clean --noconfirm ply_to_mesh_converter.py
if errorlevel 1 (
    echo Error: Build failed
    pause
    exit /b 1
)

echo.
echo ==================================================
echo Build complete!
echo ==================================================
echo.
echo Executable created at: dist\ply_to_mesh.exe
echo.
echo Usage:
echo   dist\ply_to_mesh.exe input.ply -o output.obj
echo   dist\ply_to_mesh.exe face.ply -o face.stl --smooth --detect-landmarks
echo   dist\ply_to_mesh.exe --help
echo.
pause
