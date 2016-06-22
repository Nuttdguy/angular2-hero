import { Angular2HeroPage } from './app.po';

describe('angular2-hero App', function() {
  let page: Angular2HeroPage;

  beforeEach(() => {
    page = new Angular2HeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
