import { Angular2BreadcrumbPage } from './app.po';

describe('angular2-breadcrumb App', function() {
  let page: Angular2BreadcrumbPage;

  beforeEach(() => {
    page = new Angular2BreadcrumbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
