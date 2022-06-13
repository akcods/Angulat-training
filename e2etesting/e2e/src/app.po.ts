import { browser, by, element } from 'protractor';
import { ParseSourceSpan } from '@angular/compiler';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getLi(){
    return element.all(by.css('app-root ul li'));
  }
  setValue()
  {
    let ele=element(by.css('[type="text"]'));
    ele.sendKeys('Ravinchandran');
  }
  clickButton(){
     let ele= element(by.css('button'));
     ele.click();
  }
}
