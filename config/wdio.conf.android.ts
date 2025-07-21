import { config as sharedConfig } from "./wdio.conf.js";
import { join } from "path";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

export const config = {
  ...sharedConfig,
  hostname: "127.0.0.1",
  port: 4723,
  services: [
    [
      "appium",
      {
        command: "C:\\Users\\Hp\\AppData\\Roaming\\npm\\appium.cmd",
      },
    ],
  ],
  // services: ["appium"],
  // appium: {
  //   // For options see
  //   // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
  //   args: ["--allow-insecure"],
  // },
  capabilities: [
    {
      // capabilities for local Appium web tests on an Android Emulator or Real device
      platformName: "Android",
      "appium:deviceName": "PT99652AA1182501068",

      "appium:app": join(
        process.cwd(),
        "apps",
        "android",
        "calculator-7-8-271241277.apk"
      ),

      "appium:platformVersion": "13.0",
      "appium:automationName": "UiAutomator2",
    },
  ],
};
