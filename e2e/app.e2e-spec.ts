import { AnnasPortfolioPage } from './app.po';

describe('annas-portfolio App', () => {
  let page: AnnasPortfolioPage;

  beforeEach(() => {
    page = new AnnasPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
