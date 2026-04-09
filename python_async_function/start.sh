#!/usr/bin/env bash
# start.sh - scaffold Holberton Python async project (tasks 0-4)

set -e

PROJECT_DIR="python_async_functions"

mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

echo "Creating project structure in $PROJECT_DIR..."

# Create README.md
cat << 'EOF' > README.md
# Python Async Functions

This project covers asynchronous programming in Python using asyncio.

## Tasks
0. The basics of async
1. Let's execute multiple coroutines at the same time with async
2. Measure the runtime
3. Tasks
4. Tasks with asyncio

## Requirements
- Python 3.9
- Ubuntu 20.04
- All files executable
- Type annotations required
- Docstrings required

## How to run
Each file is executable:

./0-basic_async_syntax.py
EOF

# Function to create python file
create_file () {
    FILE_NAME=$1
    DESCRIPTION=$2

    cat << EOF > "$FILE_NAME"
#!/usr/bin/env python3
"""$DESCRIPTION"""

import asyncio
from typing import List


async def placeholder() -> None:
    """Placeholder function for $FILE_NAME."""
    pass


if __name__ == "__main__":
    asyncio.run(placeholder())
EOF

    chmod +x "$FILE_NAME"
}

# Create task files
create_file "0-basic_async_syntax.py" "Task 0: Basic async syntax"
create_file "1-concurrent_coroutines.py" "Task 1: Execute multiple coroutines concurrently"
create_file "2-measure_runtime.py" "Task 2: Measure execution time of async functions"
create_file "3-tasks.py" "Task 3: Create asyncio tasks"
create_file "4-tasks_with_asyncio.py" "Task 4: Advanced asyncio task handling"

echo "All files created and made executable."
s