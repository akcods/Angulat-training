import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('The title of the app is Testing application');
  });

  it('should match the expected length',()=>{
     page.navigateTo();
     console.log("##############");
     
     page.getLi().then((elements)=>{
        expect(elements.length).toEqual(6);
     })
     
  });
  
  it('Button click event should work',()=>{
      page.setValue();
      page.clickButton();
      page.getLi().then((elements)=>{
        expect(elements.length).toEqual(7);
     })
  });

  it('new Value should be added',()=>{
     page.getLi().then((elements)=>{
       expect(elements[6].getText()).toEqual('Ravichandran');
     })   
  });
});
