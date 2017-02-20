import { AsahiTodosPage } from './app.po';

describe('asahi-todos App', function() {
  let page: AsahiTodosPage;

  beforeEach(() => {
    page = new AsahiTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
