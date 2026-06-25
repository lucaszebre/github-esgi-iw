# Pre-commit Hook

This project includes a local pre-commit hook located in `.git/hooks/pre-commit`.

The hook runs automatically before each commit and simulates a lint check by printing a message in the terminal.

## Hook content

```sh
#!/bin/sh
echo "Analysing code before commit..."
exit 0
