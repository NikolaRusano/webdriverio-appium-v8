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



  it.only('Find elements by Xpath', async () => {
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();

    await $('//android.widget.TextView[@text="Command two"]').click();

    const textAssertion = await $('//android.widget.TextView');

    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });
});
