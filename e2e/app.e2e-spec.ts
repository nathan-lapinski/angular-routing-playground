import { RoutingAppPage } from './app.po';

describe('routing-app App', () => {
  let page: RoutingAppPage;

  beforeEach(() => {
    page = new RoutingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
