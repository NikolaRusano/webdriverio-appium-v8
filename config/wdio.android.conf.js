const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/login.mjs')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "TestDevice",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "./app/android/ForaMobileAndroid-1.36.3-google-mtest-fora.apk"),
    "appium:appPackage": "ua.fora.android.mtest",
    "appium:appActivity": "ua.fora.android.ui.activity.WelcomeActivity",
    //"appium:language": "uk",
    //"appium:locale": "uk",
    "appium:unicodeKeyboard": true,
    "appium:enableVNC": true,
    "appium:noReset": true,
    "appium:newCommandTimeout": 120,
    "appium:autoGrantPermissions": true,
    "appium:autoAcceptAlerts": true,
    //"appium:autoDissmissAlerts": true,
    "appium:nativeWebScreenshot": true,
    "appium:gpsEnabled": true,

  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './'
}]];

exports.config = config;