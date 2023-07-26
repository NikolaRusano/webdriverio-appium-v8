
import Authorization from "../../../screenobjects/android/authorization";
import LogSender from "../../../loginconstansts/logsender";
import { expect as expectChai } from 'chai';
const reportportal = require('wdio-reportportal-reporter');

let logSender = LogSender;
logSender.reportportal = reportportal;

beforeEach(function () {
    // Add a wait using a promise
    return new Promise((resolve) => {
      setTimeout(resolve, 5000); // Wait for 10 seconds
    });
  });

describe("Authorization Splash Activity Tests", () => {
  

  it("Test Authorization buttons", async () => {
    driver.pause(5000);
    
    const isSkipButtonPresent = await Authorization.isElementPresent(Authorization.skipAuthPageOwnCount);
    const isNextButtonPresent = await Authorization.isElementPresent(Authorization.authFirstScreensNextBtn);

    // Making separate assertions for each conditions
    logSender.sendLog(test, 'info', 'Проверка первого слайда - наличия кнопки пропустить кнопки и отсутствует кнопка далее');
    expect(isSkipButtonPresent).toBe(true,"Проверка наличия кнопки пропустить");
    expect(isNextButtonPresent).toBe(false, "Проверка наличия кнопки далее");
  });

  it("Test Authorization field 1", async () => {
    driver.pause(5000);
    const actualText = await Authorization.authTopText.getText();
    
    logSender.sendLog(test, 'info', 'Проверка первого слайда текста сообщений окна первого поля');

    // Making separate assertions for each conditions
    expectChai(actualText).to.equal("Картка Фора club");
    
  });

  it("Test Authorization field 2", async () => {
    driver.pause(5000);
    const authContentText = await Authorization.authContentText.getText();
    
    logSender.sendLog(test, 'info', 'Проверка первого слайда текста сообщений окна второго поля');

    // Making separate assertions for each conditions
    expectChai(authContentText).to.equal("Електронна картка завжди під рукою. Прощавайте, зайвий пластик та папір!");
    
  });

});



/*describe("Authorization Splash Activity Tests2", () => {

  
  it("Test Authorization button Page 2", async () => {
    driver.pause(5000);
    await Authorization.scrollElementIntoViewToLeftWithNoElements(1);

    const isSkipButtonPresent = await Authorization.isElementPresent(Authorization.skipAuthPageOwnCount);
    const isNextButtonPresent = await Authorization.isElementPresent(Authorization.authFirstScreensNextBtn);

    // Making separate assertions for each conditions
    logger.info("Проверка второго слайда кнопки - наличия кнопки пропустить кнопки и отсутствует кнопка далее");
    expect(isSkipButtonPresent).toBe(true,"Проверка наличия кнопки пропустить");
    expect(isNextButtonPresent).toBe(false, "Проверка наличия кнопки далее");

  });


  it("Test Authorization field 1 Page 2", async () => {
    driver.pause(5000);
    //await Authorization.scrollElementIntoViewToLeftWithNoElements(1);
    const actualText = await Authorization.authTopText.getText();
    
    logger.info("Проверка второго слайда текста сообщений окна первого поля");
    expectChai(actualText).to.equal("Кешбек бонуси та персональні пропозиції");
    
  });

  it("Test Authorization field 2 Page 2", async () => {
    driver.pause(5000);
    //await Authorization.scrollElementIntoViewToLeftWithNoElements(1);
    const authContentText = await Authorization.authContentText.getText();
    
    logger.info("Проверка второго слайда текста сообщений окна второго поля");
    expectChai(authContentText).to.equal("Усі бали, кешбек бонуси та персональні пропозиції відтепер у додатку.");
    
  });


});


describe("Authorization Splash Activity Tests3", () => {
it("Test Authorization button Page 3", async () => {
    driver.pause(5000);

    //await Authorization.scrollElementIntoViewToLeftWithNoElements(2);
    await Authorization.scrollElementIntoViewToLeftWithNoElements(1);

    const isSkipButtonPresent = await Authorization.isElementPresent(Authorization.skipAuthPageOwnCount);
    const isNextButtonPresent = await Authorization.isElementPresent(Authorization.authFirstScreensNextBtn);

    // Making separate assertions for each conditions
    logger.info("Проверка третьего слайда кнопки - наличия кнопки пропустить кнопки и отсутствует кнопка далее");
    expect(isSkipButtonPresent).toBe(true,"Проверка наличия кнопки пропустить");
    expect(isNextButtonPresent).toBe(false, "Проверка наличия кнопки далее");

  });

  it("Test Authorization field 1 Page 3", async () => {
    driver.pause(5000);
    //await Authorization.scrollElementIntoViewToLeftWithNoElements(2);
    const actualText = await Authorization.authTopText.getText();
    
    logger.info("Проверка третьего слайда текста сообщений окна первого поля");
    expectChai(actualText).to.equal("Акції");
    
  });

  it("Test Authorization field 2 Page 3", async () => {
    driver.pause(5000);
    //await Authorization.scrollElementIntoViewToLeftWithNoElements(2);
    const authContentText = await Authorization.authContentText.getText();
    
    logger.info("Проверка третьего слайда текста сообщений окна второго поля");
    expectChai(authContentText).to.equal("Тут щотижня оновлюються акції Фора. Плануйте покупки та заощаджуйте.");
    
  }); 

});


describe("Authorization Splash Activity Tests3", () => {
  
  it("Test Authorization button Page 4", async () => {
    driver.pause(5000);

    //await Authorization.scrollElementIntoViewToLeftWithNoElements(3);
    await Authorization.scrollElementIntoViewToLeftWithNoElements(1);

    const isSkipButtonPresent = await Authorization.isElementPresent(Authorization.skipAuthPageOwnCount);
    const isNextButtonPresent = await Authorization.isElementPresent(Authorization.authFirstScreensNextBtn);

    // Making separate assertions for each conditions
    logger.info("Проверка наличия кнопки Далее и отсутствует кнопка пропустить");
    expect(isSkipButtonPresent).toBe(false,"Проверка наличия кнопки пропустить");
    expect(isNextButtonPresent).toBe(true, "Проверка наличия кнопки далее");

  });

  it("Test Authorization field 1 Page 4", async () => {
    driver.pause(5000);
    //await Authorization.scrollElementIntoViewToLeftWithNoElements(3);
    const actualText = await Authorization.authTopText.getText();
    
    logger.info("Проверка четвертого слайда текста сообщений окна первого поля");
    expectChai(actualText).to.equal("Оплата платіжною карткою");
    
  });

 it("Test Authorization field 2 Page 4", async () => {
    driver.pause(5000);
    //await Authorization.scrollElementIntoViewToLeftWithNoElements(3);
    const authContentText = await Authorization.authContentText.getText();
    
    logger.info("Проверка четвертого слайда текста сообщений окна второго поля");
    expectChai(authContentText).to.equal("Сплачуй за покупки та отримуй додаткову винагороду");
    
  });

});*/