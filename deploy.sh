#!/bin/bash
set -e
cd "$(dirname "$0")"

# 1. Sync content from vault
./sync.sh

# 2. Stage and commit
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi
git commit -m "${1:-update content}"

# 3. Push
git push
echo "Pushed. GitHub Actions will deploy in ~2 minutes."
