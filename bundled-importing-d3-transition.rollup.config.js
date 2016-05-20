var nodeResolve = require("rollup-plugin-node-resolve");

export default {
  entry: "index-importing-d3-transition.js",
  format: "iife",
  moduleName: "circle",
  dest: "circle-bundled-importing-d3-transition.js",

  // d3 relies on the node-resolve plugin
  plugins: [
    nodeResolve({ jsnext: true }),
  ]
};
