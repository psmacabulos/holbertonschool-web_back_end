#!/bin/zsh

# Create task files
echo "Creating task files..."

touch 0-constants.js
touch 1-block-scoped.js
touch 2-arrow.js
touch 3-default-parameter.js
touch 4-rest-parameter.js
touch 5-spread-operator.js
touch 6-string-interpolation.js
touch 7-getBudgetObject.js
touch 8-getBudgetCurrentYear.js
touch 9-getFullBudget.js
touch 10-loops.js
touch 11-createEmployeesObject.js
touch 12-createReportObject.js

# Add basic boilerplate to each file
echo "Adding boilerplate code..."

for file in *.js; do
cat <<EOL > $file
#!/usr/bin/node

export default function placeholder() {
  return null;
}
EOL
done

# Create README.md
echo "Creating README.md..."

cat <<EOL > README.md
# ES6 JavaScript Project

## 📚 Description
This project covers modern JavaScript (ES6) features including:
- Block-scoped variables (let, const)
- Arrow functions
- Default parameters
- Rest and spread operators
- Template literals
- Object enhancements
- Iterators and for...of loops

## 🎯 Learning Objectives
By the end of this project, you should be able to explain:

- What ES6 is
- New features introduced in ES6
- Difference between const and let
- Block scoping
- Arrow functions
- Rest and spread parameters
- String templating
- Object property shorthand
- Iterators and loops

## ⚙️ Requirements
- Node.js 20.x
- npm 9.x
- Jest
- Babel
- ESLint

## 🧪 Testing
\`\`\`bash
npm run test
\`\`\`

## 🧹 Lint
\`\`\`bash
npm run lint
\`\`\`

## 📁 Files
Each file corresponds to a specific ES6 concept.

EOL

echo "Done ✅ Project structure created."