import { PalindromePage } from './app.po';

describe('palindrome App', () => {
  let page: PalindromePage;

  beforeEach(() => {
    page = new PalindromePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
