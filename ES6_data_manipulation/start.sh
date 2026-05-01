#!/usr/bin/env bash

# Exit immediately if a command fails
set -e

echo "🚀 Initializing ES6 Data Structures project..."

# Create files (adjust count if needed)
FILES=(
  "0-get_list_students.js"
  "1-get_list_student_ids.js"
  "2-get_students_by_loc.js"
  "3-get_ids_sum.js"
  "4-update_grade_by_city.js"
  "5-typed_arrays.js"
  "6-set.js"
  "7-has_array_values.js"
  "8-clean_set.js"
  "9-groceries_list.js"
  "10-update_uniq_items.js"
  "README.md"
)

# Create files with basic template
for file in "${FILES[@]}"; do
  if [ ! -f "$file" ]; then
    touch "$file"
    echo "📄 Created $file"
  else
    echo "⚠️  $file already exists, skipping..."
  fi
done

# Add JS boilerplate to JS files
for file in *.js; do
  if [ "$file" != "README.md" ]; then
    cat > "$file" <<EOF
#!/usr/bin/env node
/**
 * File: $file
 * Description:
 */

export default function ${file%%.*}() {

}
EOF
  fi
done

# Make files executable (optional)
chmod +x *.js

# Initialize npm project if not exists
if [ ! -f "package.json" ]; then
  npm init -y > /dev/null 2>&1
  echo "📦 Initialized npm project"
fi

echo "✅ Project setup complete!"