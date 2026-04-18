#!/usr/bin/env bash
# Bootstrap script for Holberton NoSQL project

set -e

echo "🚀 Creating MongoDB shell files..."

mongo_files=(
"0-list_databases"
"1-use_or_create_database"
"2-insert"
"3-all"
"4-match"
"5-count"
"6-update"
"7-delete"
"8-all"
"9-insert_school"
"10-update_topics"
"11-schools_by_topic"
"12-log_stats"
)

for file in "${mongo_files[@]}"
do
    if [ ! -f "$file" ]; then
        echo "// $file" > "$file"
        echo "Created $file"
    fi
done

echo "🐍 Creating Python files..."

python_files=(
"100-find"
"101-students"
"102-log_stats"
)

for file in "${python_files[@]}"
do
    pyfile="$file.py"
    if [ ! -f "$pyfile" ]; then
        cat <<EOF > "$pyfile"
#!/usr/bin/env python3
\"\"\"$file module\"\"\"


def main():
    \"\"\"Main function for $file\"\"\"
    pass


if __name__ == "__main__":
    main()
EOF
        chmod +x "$pyfile"
        echo "Created $pyfile"
    fi
done

echo "📝 Creating README.md..."

if [ ! -f "README.md" ]; then
cat <<EOF > README.md
# NoSQL - MongoDB

## 📚 Description
This project introduces NoSQL databases using MongoDB and PyMongo.

## 🎯 Learning Objectives

- What NoSQL means
- SQL vs NoSQL
- ACID principles
- Document storage
- NoSQL types
- CRUD operations in MongoDB
- Aggregation
- Using MongoDB with Python

## 🛠 Requirements

### MongoDB
- Ubuntu 20.04
- MongoDB 4.4
- Files start with: // comment
- Files end with newline

### Python
- Python 3.9
- PyMongo 4.8.0
- Shebang required
- Docstrings required
- PEP8 compliant

## 🚀 Usage

Run MongoDB file:
\`\`\`bash
cat 0-list_databases | mongo
\`\`\`

Run Python file:
\`\`\`bash
python3 100-find.py
\`\`\`

EOF
echo "Created README.md"
fi

echo "✅ All correct files created!"