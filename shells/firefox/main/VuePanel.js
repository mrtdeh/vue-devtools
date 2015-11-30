const { Panel } = require('dev/panel.js');
const { extend } = require('sdk/core/heritage');

function VuePanel() {};

VuePanel.prototype = extend(Panel.prototype, {
  label: "Vue",
  tooltip: "Vue Devtools",
  icon: "./16.png",
  url: "./panel.html"
});

exports.VuePanel = VuePanel;