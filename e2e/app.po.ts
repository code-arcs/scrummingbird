export class AngularAttackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-attack-app h1')).getText();
  }
}
