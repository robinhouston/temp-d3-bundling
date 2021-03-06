var nodeResolve = require("rollup-plugin-node-resolve");

export default {
  entry: "index.js",
  format: "iife",
  moduleName: "circle",
  dest: "circle-bundled.js",

  // d3 relies on the node-resolve plugin
  plugins: [
    nodeResolve({ jsnext: true }),
  ]
};
