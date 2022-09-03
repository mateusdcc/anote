/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")({
  options: {},
});
module.exports = removeImports();
