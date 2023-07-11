const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================

config.port = 4723;

// ============
// Specs
// ============
config.specs = [
  // ToDo: define location for spec files here
  './test/specs/android/delete-note-screen*.js'
];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android", // or "iOS"
    "appium:platformVersion": "11.0",
    "appium:deviceName": "TestDevice", // or "iPhone Simulator"
    "appium:automationName": "UIAutomator2", // or "XCUITest"
    "appium:app": path.join(process.cwd(),"app/android/ColorNote Notepad.apk"),
    "appium:autoGrantPermissions": true
  }
];

exports.config = config;
