import { Angular2CliProjectPage } from './app.po';

describe('angular2-cli-project App', () => {
  let page: Angular2CliProjectPage;

  beforeEach(() => {
    page = new Angular2CliProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
