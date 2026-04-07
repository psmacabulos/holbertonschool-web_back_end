#!/bin/bash

echo "🔧 Fixing shebangs from task 2 onward..."

# List of target files
files=(
  "2-floor.py"
  "3-to_str.py"
  "4-define_variables.py"
  "5-sum_list.py"
  "6-sum_mixed_list.py"
  "7-to_kv.py"
  "8-make_multiplier.py"
  "9-element_length.py"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    # Replace first line with correct shebang
    sed -i '1s|.*|#!/usr/bin/env python3|' "$file"
    echo "✅ Updated $file"
  else
    echo "⚠️ Skipped $file (not found)"
  fi
done

echo "🚀 Done fixing shebangs."