#!/bin/bash
# Usage: ./scripts/switch-theme.sh [minimal|editorial|builder|company|consultant]
# Switches the active Hugo theme and launches the dev server

set -e

THEME="${1:-minimal}"
VALID_THEMES=("minimal" "editorial" "builder" "builder2" "company" "consultant" "blogger" "educator" "educator2")

if [[ ! " ${VALID_THEMES[*]} " =~ " ${THEME} " ]]; then
  echo "Error: Invalid theme '${THEME}'"
  echo "Usage: ./scripts/switch-theme.sh [minimal|editorial|builder|builder2|company|consultant|blogger|educator|educator2]"
  exit 1
fi

CONFIG="site/hugo.toml"

# Update theme in hugo.toml
sed -i '' "s/^theme = .*/theme = \"${THEME}\"/" "$CONFIG"

echo "✓ Switched to theme: ${THEME}"
echo "  Config updated: ${CONFIG}"
echo ""
echo "Starting Hugo dev server..."
echo "  Preview: http://localhost:1313/"
echo ""

cd site && hugo server -D
