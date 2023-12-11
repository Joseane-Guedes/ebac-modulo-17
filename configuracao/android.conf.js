import { config } from './wdio.conf.js';
import { deviceName, platformVersion, app } from './android.info.js';
import { resolve } from 'path';

config.capabilities = [
    {
        platformName: 'Android',
        "appium:automationName": 'uiautomator2',
        maxInstances: 1,
        "appium:noReset": true,
        "appium:fullReset": false,
        "appium:deviceName": deviceName,
        "appium:platformVersion": platformVersion,
        "appium:app": resolve('app/' + app),
        "appium:appWaitActivity": "*"
    }
];

config.specs = [
    '../src/specs/*.js'
];

const _config = config;
export { _config as config };