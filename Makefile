all: template-standalone.js template-bundled.js

.PHONY: all

template-%.js:
	node_modules/rollup/bin/rollup -c "$*".rollup.config.js
