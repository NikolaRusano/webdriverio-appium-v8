import {mPhone, otp} from './test/loginconstansts/logincontstantsfile.mjs'

class Authorization{
    get latestUpdateInstallBtn(){
        return $('//*[@resource-id="android:id/button1"]');
    }
    get latestUpdateCancelBtn(){
        return $('//*[@resource-id="android:id/button2"]');
    }
    get gmailStartSkipBtn(){
        return $('//*[@resource-id="com.google.android.gm:id/welcome_tour_skip"]');
    }
    get gmailStartInfoMSG(){
        return $('//*[@resource-id="android:id/message"]');
    }
    get settingsAllowCheckBox(){
        return $('//*[@resource-id="android:id/switch_widget"]');
    }
    get backFromSettingsMenuBtn(){
        return $('//android.widget.ImageButton[@content-desc="Back"]');
    }
    get allowHMSNotificationMSG(){
        return $('//*[@resource-id="com.android.permissioncontroller:id/permission_message"]');
    }
    get allowHMSNotificationAllowBtn(){
        return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
    }
    get allowHMSNotificationDenyBtn(){
        return $('//*[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]');
    }
    get recapchaAnchorCheckBox(){
        return $('//*[@resource-id="recaptcha-anchor"]');
    }
    get mPhomeInputField(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/edit_phone"]');
    }
    get otpCodeField(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/edit_code"]');
    }
    get nextBtnOtpCodePg(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/button_ok"]');
    }
    get skipAuthPageOwnCount(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/tv_skip"]');
    }
    get checkboc18Years(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/check_private"]');
    }
    get finishAuthOKBtn(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/button_ok"]');
    }
    get finishCloseMerryCristmasImage(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/buttonClose"]');
    }
    get nextBtnAfterAuth(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/action_menu"]');
    }
    get authIncorrectCodeBig(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/text_confirmation_otp"]');
    }
    get authIncorrectCodeFullMsg(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/text_check_again"]');
    }
    get authIncorrectMsgAfter3Input(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/snackbar_text"]');
    }
    get authTopText(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/landing_txt_title"]');
    }
    get authContentText(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/landing_txt_hint"]');
    }
    get authFirstScreensNextBtn(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/tv_main"]');
    }
    get authPageCardNumbInput(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/text_info_number_vr"]');
    }
    get authCardNumbInputField(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/edit_card"]');
    }
    get authCardNumbInputFieldTextInfo(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/text_info_card"]');
    }
    get authNoCardInfiLink(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/text_no_card"]');
    }
    get authPhoneInputFieldError(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/textinput_error"]');
    }
    get authPushMsgError(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/snackbar_text"]');
    }
    get authSendCodeAgainLinkBtn(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/button_send_again"]');
    }
    get authRecptcha(){
        return $('//*[@resource-id="recaptcha-anchor"]');
    }
    get electroCheckBannerWrapper(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/newFeatureWrapper"]');
    }
    get electroCheckBanneruaCloseBtn(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/ivFeatureClose"]');
    }

        //AuthorizationForaClubCard

    get authForaCardTitleText(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/text_info_number_vr"]');
    }
    get authForaCardInputNumField(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/edit_card"]');
    }
    get authForaCardNoCardBtn(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/text_no_card"]');
    }
    get authForaCardScanCardCodeBtn(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/button_scanner"]');
    }
    get authForaCardInfoUnderCardField(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/text_info_card"]');
    }
    get bottomBarNavigationLineMenu(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/action_menu"]');
    }

    //MainPAge

    get bottomBarNavigationLineMain(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/action_main"]');
    }
    get bottomBarNavigationLineDelivery(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/action_ecomm"]');
    }
    get bottomBarNavigationLineHistory(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/action_calendar"]');
    }
    get MainEditStoreBtn(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/change_address_img"]');
    }
    get MainEditStoreDeleteAddressBtn(){
        return $('//*[@resource-id="ua.fora.android.mtest:id/iv_delete_filial"]');
    }



    async readAndroidElement(element) {
        await element.toBeDisplayed();
        const elementText = await element.getText();
        return elementText;
      }

    async tapAndroidElement(element) {
        await element.textOption.click();
    }

      async sendKeysAndroidElementOtpCode(otpCode){
        for(let i =0; i < otp.length; i++) {
            switch(otpCode[i]){
                case 0:
                    await driver.pressKey('0');
                    break;
                case 1:
                    await driver.pressKey('1');
                    break;
                case 2:
                    await driver.pressKey('2');
                    break;
                case 3:
                    await driver.pressKey('3');
                    break;
                case 4:
                    await driver.pressKey('4');
                    break;
                case 5:
                    await driver.pressKey('5');
                    break;
                case 6:
                    await driver.pressKey('6');
                    break;
                case 7:
                    await driver.pressKey('7');
                    break;
                case 8:
                    await driver.pressKey('8');
                    break;
                case 9:
                    await driver.pressKey('9');
                    break;
            }
           
        }
      }

      async isElementPresent(element) {
        try {
          await element.isDisplayed(); // Assuming this is a valid method in your JavaScript framework/library
          return true;
        } catch (error) {
          return false;
        }
      }
      

      async authBeforeTestWithTestNumbAndOtp40WithCardCheck (){
        driver.pause(15000);
        await mPhomeInputField.toBeDisplayed;
        //екран вводу телефону
        tapAndroidElement(mPhomeInputField);
        await mPhomeInputField.noteHeading.addValue(mPhone);
        await checkboc18Years.textOption.click();
        await finishAuthOKBtn.textOption.click();
//екран вводу отп
        await finishAuthOKBtn.textOption.click();
        await sendKeysAndroidElementOtpCode(otpCode);
        await nextBtnOtpCodePg.textOption.click();
        await isElementPresent(authForaCardInputNumField);

        tapAndroidElement(finishAuthOKBtn);
      }

}
