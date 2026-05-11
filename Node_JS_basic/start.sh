#!/bin/bash

# =========================================================
# Holberton Node.js Getting Started - Project Bootstrapper
# =========================================================

echo "🚀 Initializing Holberton Node.js project structure..."

TASKS=(
  "0-console.js"
  "1-stdin.js"
  "2-read_file.js"
  "3-read_file_async.js"
  "4-http.js"
  "5-http.js"
  "6-http_express.js"
  "7-http_express.js"
  "full_server/"
)

for task in "${TASKS[@]}"
do
  if [[ "$task" == */ ]]; then
    mkdir -p "$task"
    echo "📁 Created directory: $task"
  else
    touch "$task"
    echo "📄 Created file: $task"
  fi
done

# Create package.json if missing
if [ ! -f package.json ]; then
cat > package.json <<EOF
{
  "name": "holberton-node-js",
  "version": "1.0.0",
  "description": "Holberton Node.js Getting Started",
  "main": "0-console.js",
  "scripts": {
    "start": "node 0-console.js",
    "dev": "nodemon 0-console.js",
    "test": "mocha"
  },
  "author": "",
  "license": "ISC"
}
EOF
echo "📦 package.json created"
fi

# Create .gitignore
cat > .gitignore <<EOF
node_modules/
dist/
.env
EOF

echo "🛡️  .gitignore created"

# Create README if missing
if [ ! -f README.md ]; then
cat > README.md <<EOF
# Node.js Getting Started

This repository contains solutions and exercises for the Holberton School Node.js Getting Started project.

EOF
echo "📘 README.md created"
fi

echo ""
echo "✅ Project scaffold completed successfully."
echo ""
echo "Next steps:"
echo "1. npm init -y"
echo "2. npm install"
echo "3. chmod +x start.sh"
echo "4. ./start.sh"
