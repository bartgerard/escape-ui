import { EscapeUiPage } from './app.po';

describe('escape-ui App', () => {
  let page: EscapeUiPage;

  beforeEach(() => {
    page = new EscapeUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
