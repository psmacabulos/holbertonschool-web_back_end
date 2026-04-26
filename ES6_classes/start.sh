#!/usr/bin/env bash

# Exit on error
set -e

echo "🚀 Initializing ES6 Classes & Metaprogramming project..."

# Create files
FILES=(
  "0-classroom.js"
  "1-make_classrooms.js"
  "2-hbtn_course.js"
  "3-currency.js"
  "4-pricing.js"
  "5-building.js"
  "6-sky_high.js"
  "7-airport.js"
  "8-hbtn_class.js"
  "9-hoisting.js"
  "10-car.js"
)

for file in "${FILES[@]}"; do
  touch "$file"

  cat <<EOF > "$file"
#!/usr/bin/env node

/**
 * $file
 * Description: TODO - Implement feature
 */

export default function placeholder() {
  // TODO: Implement
}
EOF

  chmod +x "$file"
done

# Create README
touch README.md

echo "✅ Files created successfully."