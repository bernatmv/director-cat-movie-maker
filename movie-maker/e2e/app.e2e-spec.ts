import { MovieMakerPage } from './app.po';

describe('movie-maker App', function() {
  let page: MovieMakerPage;

  beforeEach(() => {
    page = new MovieMakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
