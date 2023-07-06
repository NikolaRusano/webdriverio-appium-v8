import Authorization from './test/specs/login.test.mjs'
describe('AuthorizationTests', () => {
    it('Sample Test', async () => {
      const auth = new Authorization();
      await auth.authBeforeTestWithTestNumbAndOtp40WithCardCheck();
      console.log('Hello');
    });
  });

  //npm run login
 //"sample": "npx playwright test ./test/specs/sample.js"