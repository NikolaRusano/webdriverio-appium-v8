import { mPhone, otp } from "../../loginconstansts/logincontstantsfile";
import { logger } from '../../../wdio.conf';


class Authorization {
  //Splash Tests Elements

  get skipAuthPageOwnCount() {
    return $('//*[@resource-id="ua.fora.android.mtest:id/tv_skip"]');
  }

  get authFirstScreensNextBtn() {
    return $('//*[@resource-id="ua.fora.android.mtest:id/tv_main"]');
  }

  get authTopText() {
    return $('//*[@resource-id="ua.fora.android.mtest:id/landing_txt_title"]');
  }

  get authContentText() {
    return $('//*[@resource-id="ua.fora.android.mtest:id/landing_txt_hint"]');
  }

  //Welcome Authorization Page
  get mPhomeInputField() {
    return $('//*[@resource-id="ua.fora.android.mtest:id/edit_phone"]');
  }

  get checkboc18Years() {
    return $('//*[@resource-id="ua.fora.android.mtest:id/check_private"]');
  }

  get finishAuthOKBtn() {
    return $('//*[@resource-id="ua.fora.android.mtest:id/button_ok"]');
  }

  get authForaCardInputNumField() {
    return $('//*[@resource-id="ua.fora.android.mtest:id/edit_card"]');
  }

  get bottomBarMainBtn() {
    return $('//*[@resource-id="ua.fora.android.mtest:id/action_main"]');
  }

  async waitUntilElementDisplayed(element, timeout) {
    await element.waitForDisplayed({
      timeout,
      timeoutMsg: `Expected ${element.selector} to be displayed within ${timeout}ms`,
    });
  }

  async waitUntilElementClickable(element, timeout) {
    await element.waitUntilElementClickable({
      timeout,
      timeoutMsg: `Expected ${element.selector} to be clickable within ${timeout}ms`,
    });
  }

  async sendKeysAndroidElementOtpCode(otpCode) {
    for (let i = 0; i < otpCode.length; i++) {
      const digit = otpCode[i];
      const keyCode = this.getKeyCodeForDigit(digit);
      await driver.pressKeyCode(keyCode);
      driver.pause(2000);
    }
  }

  getKeyCodeForDigit(digit) {
    switch (digit) {
      case "0":
        return 7; // KEYCODE_0
      case "1":
        return 8; // KEYCODE_1
      case "2":
        return 9; // KEYCODE_2
      case "3":
        return 10; // KEYCODE_3
      case "4":
        return 11; // KEYCODE_4
      case "5":
        return 12; // KEYCODE_5
      case "6":
        return 13; // KEYCODE_6
      case "7":
        return 14; // KEYCODE_7
      case "8":
        return 15; // KEYCODE_8
      case "9":
        return 16; // KEYCODE_9
      default:
        throw new Error(`Invalid digit: ${digit}`);
    }
  }

  async tapAndroidElement(element) {
    await element.click();
  }

  async sendAndroidElementKeys(element, textInput) {
    await element.setValue(textInput);
  }

  async isElementPresent(element) {
    try {
      const isDisplayed = await element.isDisplayed();
      console.log("isDisplayed:", isDisplayed); // Log the actual value
      logger.info("isDisplayed:", isDisplayed); // Log the actual value
      return isDisplayed;
    } catch (error) {
      console.error("Error while checking element visibility:", error);
      logger.info("Error while checking element visibility:");
      return false;
    }
  }

  /*async swipeScreenWithCoordinates(driver, startX, startY, endX, endY, duration = 1000) {
  // Создаем новое TouchAction
  const action = new TouchAction(driver);

  // Выполняем свайп, указывая стартовые и конечные координаты
  await action.press({ x: startX, y: startY }).wait(duration).moveTo({ x: endX, y: endY }).release().perform();
}*/

  async scrollElementIntoViewToLeft(element, counter) {
    for (let i = 0; i < counter; i++) {
      await driver.executeScript("mobile: scroll", {
        direction: "left",
        element: element.elementId,
      });
      await driver.pause(1000);
    }
  }

  async scrollElementIntoViewToLeftWithNoElements(counter) {
    for (let i = 0; i < counter; i++) {
      await $(
        "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
      );
      await driver.pause(1000);
    }
  }

  async scrollElementIntoViewToRight(element, counter) {
    for (let i = 0; i < counter; i++) {
      await driver.executeScript("mobile: scroll", {
        direction: "right",
        element: element.elementId,
      });
      await driver.pause(1000);
    }
  }

  async scrollElementIntoViewToRightWithNoElements(counter) {
    for (let i = 0; i < counter; i++) {
      await $(
        "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
      );
      await driver.pause(1000);
    }
  }

  async authBeforeTestWithTestNumbAndOtp40WithCardCheck() {
    await this.tapAndroidElement(this.mPhomeInputField);
    await this.sendAndroidElementKeys(this.mPhomeInputField, mPhone);

    await this.tapAndroidElement(this.checkboc18Years);
    await this.tapAndroidElement(this.finishAuthOKBtn);
    await driver.pause(7000);

    await this.sendKeysAndroidElementOtpCode(otp);
    await this.tapAndroidElement(this.finishAuthOKBtn);
    await driver.pause(9000);

    await this.isElementPresent(this.authForaCardInputNumField);
    await this.waitUntilElementDisplayed(this.finishAuthOKBtn);
    await this.tapAndroidElement(this.finishAuthOKBtn);
  }
}

module.exports = new Authorization();
