describe("Android Elements Tests", () => {
  it("find element by accessibility id", async () => {
    const appOption = await $("~App");

    await appOption.click();

    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element by class name", async () => {
    const className = await $("android.widget.TextView");

    await expect(className).toHaveText("API Demos");
  });

  xit("Find elements by Xpath", async () => {
    // xpath - (//tagname[@attribute=value])
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    // find by resourceId
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();

    // find by text
    await $('//android.widget.TextView[@text="Command two"]').click();

    // find by class - assertion
    const textAssertion = await $("//android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });

  it("Find elements by UIAutomator", async () => {
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it("Find multiple elements", async () => {
    const expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    const actualList = [];

    const textList = await $$("android.widget.TextView");

    for (const element of textList) {
      actualList.push(await element.getText());
    }

    await expect(actualList).toEqual(expectedList);
  });


  it.only("Find multiple elements", async () => {
    await $('~Views').click();
    await $('//*[@text="Auto Complete"]').click();

    await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click(); 

    const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    await textField.addValue('Canada');

    await expect(textField).toHaveText('Canada');
  });
});
