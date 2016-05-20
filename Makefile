all: circle-standalone.js circle-bundled.js circle-bundled-importing-d3-transition.js

.PHONY: all

circle-%.js:
	node_modules/rollup/bin/rollup -c "$*".rollup.config.js
