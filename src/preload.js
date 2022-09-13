// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { Titlebar } = require("custom-electron-titlebar");

window.addEventListener('DOMContentLoaded', () => {
  // Title bar implemenation
  new Titlebar();
});