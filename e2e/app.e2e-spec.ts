import { GoafPage } from './app.po';

describe('goaf App', function() {
  let page: GoafPage;

  beforeEach(() => {
    page = new GoafPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
