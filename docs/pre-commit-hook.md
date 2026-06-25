# Pre-commit Hook

This project includes a local pre-commit hook located in `.git/hooks/pre-commit`.

The hook runs automatically before each commit and performs a real ESLint check on the codebase.  
If the linter detects any errors, the commit is blocked to ensure code quality.

## Hook content

```sh
#!/bin/sh

echo "Running ESLint before commit..."

npm run lint
status=$?

if [ $status -ne 0 ]; then
  echo "❌ Lint errors detected. Commit aborted."
  exit 1
fi

echo "✅ Lint passed. Proceeding with commit."
exit 0
```

