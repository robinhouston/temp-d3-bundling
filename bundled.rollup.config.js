var nodeResolve = require("rollup-plugin-node-resolve");

export default {
  entry: "index.js",
  format: "iife",
  moduleName: "template",
  dest: "template-bundled.js",

  // d3 relies on the node-resolve plugin
  plugins: [
    nodeResolve({ jsnext: true }),
  ]
};
