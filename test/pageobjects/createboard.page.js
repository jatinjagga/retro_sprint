const { BROWSER } = require('ua-parser-js');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Createboard extends Page {
    
    get sessionName () { return $('input[placeholder="Session Name"]') }
    get SelectOwner () { return $('//select[@class="custom-select"]') }
    get btnSubmit () { return $('button[type="submit"]') }
 

    createBoardDetails(sessionName)
    {
    
         this.sessionName.setValue(sessionName);
         this.SelectOwner.click();
         this.SelectOwner.selectByVisibleText('Sennder')
         this.btnSubmit.click();
         
         
}



}
module.exports = new Createboard();