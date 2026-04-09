#!/bin/bash
# Holberton Async Comprehension Project Bootstrap Script

echo "Creating project structure..."

# Create README.md
cat << 'EOF' > README.md
# Python - Async Comprehension

## Description
This project introduces asynchronous generators and comprehensions in Python.

## Learning Objectives
- Write an asynchronous generator
- Use async comprehensions
- Type-annotate asynchronous generators

## Requirements
- Python 3.9
- Files must start with: #!/usr/bin/env python3
- Follow pycodestyle
- All files executable
- Proper documentation required

## Files
- 0-async_generator.py
- 1-async_comprehension.py
- 2-measure_runtime.py

## Usage
chmod +x start.sh
./start.sh
EOF

# Create Python files
FILES=(
"0-async_generator.py"
"1-async_comprehension.py"
"2-measure_runtime.py"
)

for file in "${FILES[@]}"
do
    echo "#!/usr/bin/env python3" > "$file"
    chmod +x "$file"
done

echo "Done. All files created and executable."
