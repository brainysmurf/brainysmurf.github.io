#!/bin/bash
# Usage: ./scripts/cycle-themes.sh
# Cycles through all themes. Press Enter to switch to the next one.

THEMES=("minimal" "editorial" "builder" "builder2" "company" "consultant" "blogger" "educator" "educator2")
CONFIG="site/hugo.toml"
INDEX=0
TOTAL=${#THEMES[@]}
HUGO_PID=""

cleanup() {
  if [ -n "$HUGO_PID" ]; then
    kill "$HUGO_PID" 2>/dev/null || true
    wait "$HUGO_PID" 2>/dev/null || true
    HUGO_PID=""
  fi
  # Belt and suspenders: kill any hugo server we started
  pkill -f "hugo server -D --quiet" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

start_theme() {
  local theme="${THEMES[$INDEX]}"
  sed -i '' "s/^theme = .*/theme = \"${theme}\"/" "$CONFIG"

  cleanup
  hugo server -D --quiet -s site 2>/dev/null &
  HUGO_PID=$!

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  Theme: ${theme}  ($((INDEX + 1))/${TOTAL})"
  echo "  Preview: http://localhost:1313/"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""
  echo "  Enter  → next theme"
  echo "  p      → previous theme"
  echo "  q      → quit"
  echo ""
}

start_theme

while true; do
  read -r input || exit 0
  case "$input" in
    q|Q)
      echo "Stopped on theme: ${THEMES[$INDEX]}"
      exit 0
      ;;
    p|P)
      INDEX=$(( (INDEX - 1 + TOTAL) % TOTAL ))
      start_theme
      ;;
    *)
      INDEX=$(( (INDEX + 1) % TOTAL ))
      start_theme
      ;;
  esac
done
