#!/usr/bin/env bash
# Bootstrap script for Pagination project
# Creates task files, makes them executable, and generates README.md

set -e

echo "Creating task files..."

# Task files (adjust if your checker uses different names)
files=(
  "0-simple_helper_function.py"
  "1-simple_pagination.py"
  "2-hypermedia_pagination.py"
  "3-hypermedia_del_pagination.py"
  "server.py"
)

for f in "${files[@]}"; do
  if [ ! -f "$f" ]; then
    cat <<'EOF' > "$f"
#!/usr/bin/env python3
"""Module placeholder"""

from typing import List, Dict, Any, Optional


# TODO: implement
EOF
    echo "Created $f"
  else
    echo "$f already exists, skipping"
  fi

  chmod +x "$f"
done

echo "Creating README.md..."

cat <<'EOF' > README.md
# Pagination Project (REST API Design)

## Overview
This project covers:
- Basic pagination (page, page_size)
- Hypermedia pagination (HATEOAS)
- Deletion-resilient pagination

## Learning Objectives
- Implement pagination using slicing
- Provide API navigation metadata
- Handle data mutations safely

## Concepts

### Basic Pagination
Formula:
    start = (page - 1) * page_size
    end = page * page_size

### Hypermedia (HATEOAS)
Return metadata:
- page
- page_size
- next_page
- prev_page
- total_pages

### Deletion-Resilient Pagination
Use indexed dataset instead of list slicing to avoid skipping items after deletion.

## File Structure
- 0-simple_helper_function.py
- 1-simple_pagination.py
- 2-hypermedia_pagination.py
- 3-hypermedia_del_pagination.py
- server.py

## Data Source
Popular_Baby_Names.csv

## Requirements
- Python 3.9
- pycodestyle (2.5)
- All functions type-annotated
- Proper documentation for modules and functions

## Notes
- Validate inputs
- Avoid off-by-one errors
- Cache dataset for performance
EOF

echo "README.md created"

echo "Done. All files created and executable."
