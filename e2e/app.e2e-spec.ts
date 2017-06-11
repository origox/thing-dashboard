import { ThingDashboardPage } from './app.po';

describe('thing-dashboard App', () => {
  let page: ThingDashboardPage;

  beforeEach(() => {
    page = new ThingDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
