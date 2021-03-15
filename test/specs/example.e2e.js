const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const Createboard = require('../pageobjects/createboard.page');
const SprintBoard = require('../pageobjects/sprintboard.page');
import allureReporter from '@wdio/allure-reporter'
//const { addFeature } = require('@wdio/allure-reporter').default

describe('My Retro application', () => {
    it('should login with valid credentials',  () => {
        LoginPage.open();

        LoginPage.login('sennderqa3@gmail.com', 'n*H7A7f@&ikbwu');
      
      expect(browser).toHaveTitle('Online Retrospective Tool for Agile Scrum Developers – Sprint Boards'); 
      
     
    });

    it('should Create board', () => {
     HomePage.createBoardlink();
    Createboard.createBoardDetails('My first board');
    expect(browser).toHaveUrlContaining('sprintboards.io/boards')
  });

  
  it('should able to add and delete cards', () => {
   
    SprintBoard.AddCardWell('Goal was achieved','Sprint was well planned');  
  
    SprintBoard.AddCardNotWell('Goal was not achieved','')  
  
    SprintBoard.voteUp();
   
    SprintBoard.DeleteCard();
   
 
 });
});


