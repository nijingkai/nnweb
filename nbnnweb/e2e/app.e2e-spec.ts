import { NbnnwebPage } from './app.po';

describe('nbnnweb App', () => {
  let page: NbnnwebPage;

  beforeEach(() => {
    page = new NbnnwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
