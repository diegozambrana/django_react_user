#!/bin/bash
yarn build

# css
cp build/static/css/main.*.css ../server/static/css/main.css
cp build/static/css/main.*.css.map ../server/static/css/main.css.map
cp build/static/css/[0-9].*.css ../server/static/css/style.css
cp build/static/css/[0-9].*.css.map ../server/static/css/style.css.map

# js
cp build/static/js/runtime-main.*.js ../server/static/js/runtime-main.js
cp build/static/js/runtime-main.*.js.map ../server/static/js/runtime-main.js.map
cp build/static/js/main.*.js ../server/static/js/main.js
cp build/static/js/main.*.js.map ../server/static/js/main.js.map
cp build/static/js/[0-9].*.js ../server/static/js/script.js
cp build/static/js/[0-9].*.js.map ../server/static/js/script.js.map
cp build/static/js/[0-9].*.js.LICENSE.txt ../server/static/js/script.js.LICENSE.txt

