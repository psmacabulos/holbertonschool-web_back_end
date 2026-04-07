#!/bin/bash
set -e

echo "🚀 Creating minimal Holberton Type Annotation task files..."

# 0-add.py
cat <<EOF > 0-add.py
#!/usr/bin/python3
"""Module for adding two floats."""
EOF
chmod +x 0-add.py

# 1-concat.py
cat <<EOF > 1-concat.py
#!/usr/bin/python3
"""Module for concatenating strings."""
EOF
chmod +x 1-concat.py

# 2-floor.py
cat <<EOF > 2-floor.py
#!/usr/bin/python3
"""Module for flooring a float."""
EOF
chmod +x 2-floor.py

# 3-to_str.py
cat <<EOF > 3-to_str.py
#!/usr/bin/python3
"""Module for converting float to string."""
EOF
chmod +x 3-to_str.py

# 4-define_variables.py
cat <<EOF > 4-define_variables.py
#!/usr/bin/python3
"""Module defining annotated variables."""
EOF
chmod +x 4-define_variables.py

# 5-sum_list.py
cat <<EOF > 5-sum_list.py
#!/usr/bin/python3
"""Module for summing a list of floats."""
EOF
chmod +x 5-sum_list.py

# 6-sum_mixed_list.py
cat <<EOF > 6-sum_mixed_list.py
#!/usr/bin/python3
"""Module for summing mixed list."""
EOF
chmod +x 6-sum_mixed_list.py

# 7-to_kv.py
cat <<EOF > 7-to_kv.py
#!/usr/bin/python3
"""Module converting to key-value tuple."""
EOF
chmod +x 7-to_kv.py

# 8-make_multiplier.py
cat <<EOF > 8-make_multiplier.py
#!/usr/bin/python3
"""Module creating multiplier function."""
EOF
chmod +x 8-make_multiplier.py

# 9-element_length.py
cat <<EOF > 9-element_length.py
#!/usr/bin/python3
"""Module for element lengths."""
EOF
chmod +x 9-element_length.py

# README.md
cat <<EOF > README.md
# Python - Variable Annotations

This project introduces type annotations in Python.

## Concepts
- Function annotations
- Variable annotations
- Duck typing
- Static type checking with mypy

## Requirements
- Python 3.9
- pycodestyle 2.5

## Usage
pycodestyle .
mypy .
EOF

echo "✅ Minimal setup complete."
