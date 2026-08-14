#!/bin/bash
set -e

VAULT="../KaoyanVault"
DEST="./content"

echo "Syncing 99-题库..."
rsync -a --delete --exclude='_images' "$VAULT/99-题库/" "$DEST/99-题库/"

echo "Syncing _images..."
rsync -a --delete "$VAULT/_images/" "$DEST/_images/"

# Ensure the _images symlink exists inside 99-题库 for Quartz wikilink resolution
ln -sfn ../_images "$DEST/99-题库/_images"

echo "Done. $(find "$DEST/99-题库" -name '*.md' | wc -l | tr -d ' ') files synced."
