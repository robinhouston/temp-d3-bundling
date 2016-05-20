var path = require("path");

export default {
  entry: "index.js",
  format: "iife",
  moduleName: "template",
  dest: "template-standalone.js",
  external: [ "d3" ],
  globals: { "d3": "d3" },
};
