#!/bin/bash
# Usage: ./scripts/preview-all.sh
# Builds all themes and serves a side-by-side comparison page

set -e

THEMES=("minimal" "editorial" "builder" "company" "consultant" "blogger" "educator" "educator2")
PREVIEW_DIR="site/public/_preview"
CONFIG="site/hugo.toml"
PORT="${1:-1313}"

# Save current theme
ORIGINAL_THEME=$(grep '^theme = ' "$CONFIG" | sed 's/theme = "\(.*\)"/\1/')

echo "Building all themes..."

# Build each theme
for theme in "${THEMES[@]}"; do
  echo "  Building: ${theme}"
  sed -i '' "s/^theme = .*/theme = \"${theme}\"/" "$CONFIG"
  (cd site && hugo --quiet --destination "public/_preview/${theme}" --baseURL "/${theme}/")
done

# Restore original theme
sed -i '' "s/^theme = .*/theme = \"${ORIGINAL_THEME}\"/" "$CONFIG"

# Generate comparison page
cat > "${PREVIEW_DIR}/index.html" << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Theme Preview</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #111;
    color: #eee;
  }
  .toolbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: #1a1a1a;
    border-bottom: 1px solid #333;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .toolbar h1 {
    font-size: 16px;
    font-weight: 600;
    margin-right: auto;
  }
  .toolbar label {
    font-size: 13px;
    color: #aaa;
  }
  .toolbar select, .toolbar button {
    font-size: 13px;
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #444;
    background: #222;
    color: #eee;
    cursor: pointer;
  }
  .toolbar button:hover { background: #333; }
  .toolbar button.active { background: #4a4a4a; border-color: #888; }
  .grid {
    display: grid;
    gap: 20px;
    padding: 20px;
  }
  .grid.cols-2 { grid-template-columns: 1fr 1fr; }
  .grid.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
  .grid.cols-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
  .grid.cols-1 { grid-template-columns: 1fr; }
  .card {
    background: #1a1a1a;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #333;
    transition: border-color 0.2s;
  }
  .card:hover { border-color: #666; }
  .card__header {
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #333;
    background: #222;
  }
  .card__name {
    font-size: 14px;
    font-weight: 600;
  }
  .card__actions {
    display: flex;
    gap: 8px;
  }
  .card__action {
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid #444;
    background: #2a2a2a;
    color: #ccc;
    cursor: pointer;
    text-decoration: none;
  }
  .card__action:hover { background: #333; color: #fff; }
  .card iframe {
    width: 100%;
    border: none;
    background: #fff;
  }
  .hidden { display: none !important; }
</style>
</head>
<body>

<div class="toolbar">
  <h1>Theme Preview</h1>
  <label>Columns:</label>
  <button onclick="setCols(1)">1</button>
  <button onclick="setCols(2)" class="active">2</button>
  <button onclick="setCols(3)">3</button>
  <button onclick="setCols(4)">4</button>
  <label>Height:</label>
  <select onchange="setHeight(this.value)">
    <option value="600">600px</option>
    <option value="800" selected>800px</option>
    <option value="1000">1000px</option>
    <option value="1200">1200px</option>
  </select>
  <label>Page:</label>
  <select id="page-select" onchange="setPage(this.value)">
    <option value="index.html">Home</option>
    <option value="posts/index.html">Posts</option>
  </select>
</div>

<div class="grid cols-2" id="grid"></div>

<script>
HTMLEOF

# Inject theme list into JS
echo "var THEMES = [" >> "${PREVIEW_DIR}/index.html"
for theme in "${THEMES[@]}"; do
  echo "  '${theme}'," >> "${PREVIEW_DIR}/index.html"
done
echo "];" >> "${PREVIEW_DIR}/index.html"

cat >> "${PREVIEW_DIR}/index.html" << 'HTMLEOF'
var currentPage = 'index.html';
var currentHeight = 800;

function render() {
  var grid = document.getElementById('grid');
  grid.innerHTML = '';
  THEMES.forEach(function(theme) {
    var card = document.createElement('div');
    card.className = 'card';
    card.id = 'card-' + theme;
    card.innerHTML =
      '<div class="card__header">' +
        '<span class="card__name">' + theme + '</span>' +
        '<div class="card__actions">' +
          '<a class="card__action" href="/' + theme + '/' + currentPage + '" target="_blank">Open ↗</a>' +
        '</div>' +
      '</div>' +
      '<iframe src="/' + theme + '/' + currentPage + '" height="' + currentHeight + '" loading="lazy"></iframe>';
    grid.appendChild(card);
  });
}

function setCols(n) {
  var grid = document.getElementById('grid');
  grid.className = 'grid cols-' + n;
  document.querySelectorAll('.toolbar button').forEach(function(b) {
    b.classList.remove('active');
  });
  event.target.classList.add('active');
}

function setHeight(h) {
  currentHeight = parseInt(h);
  document.querySelectorAll('.card iframe').forEach(function(f) {
    f.height = currentHeight;
  });
}

function setPage(p) {
  currentPage = p;
  document.querySelectorAll('.card iframe').forEach(function(f) {
    var theme = f.closest('.card').id.replace('card-', '');
    f.src = '/' + theme + '/' + p;
  });
  document.querySelectorAll('.card__action').forEach(function(a) {
    var theme = a.closest('.card').id.replace('card-', '');
    a.href = '/' + theme + '/' + p;
  });
}

render();
</script>
</body>
</html>
HTMLEOF

echo ""
echo "✓ All themes built to ${PREVIEW_DIR}/"
echo ""
echo "Starting preview server on http://localhost:${PORT}/_preview/"
echo "  Compare all:  http://localhost:${PORT}/_preview/"
echo ""

cd "${PREVIEW_DIR}" && python3 -m http.server "${PORT}"
