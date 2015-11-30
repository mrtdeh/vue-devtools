var self = require('sdk/self');
const { Tool } = require('dev/toolbox');
const { VuePanel } = require ('./main/VuePanel')

var pageMod = require('sdk/page-mod');

// Install the global backend hook sloppily here right now
pageMod.PageMod({
  include: ['*', 'file://*'],
  contentScriptFile: './build/backend.js',
  contentScriptWhen: 'start',
});

const VueDevTools = new Tool({
  name: 'Vue Devtools',
  panels: {
  	vue: VuePanel
  },
});


function main(options, callbacks) {

}

function onUnload(reason) {

}

// Exports from this module
exports.main = main;
exports.onUnload = onUnload;


