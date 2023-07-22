import Authorization from "../../screenobjects/android/authorization";



describe("AuthorizationTests", () => {
  beforeEach(function () {
    // Add a wait using a promise
    return new Promise((resolve) => {
      setTimeout(resolve, 5000); // Wait for 10 seconds
    });
  });

  it("Sample Test", async () => {

  
await Authorization.authBeforeTestWithTestNumbAndOtp40WithCardCheck();
Authorization.waitUntilElementDisplayed(Authorization.bottomBarMainBtn,40000);
await expect(Authorization.bottomBarMainBtn).toBeDisplayed();




  });
    
    
});

//npm run login
//"sample": "npx playwright test ./test/specs/sample.js"
