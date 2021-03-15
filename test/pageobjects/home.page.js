const { BROWSER } = require('ua-parser-js');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    
    get linkCreateBoard () { return $('*=Create') }
   
    createBoardlink ()
    {
        
        this.linkCreateBoard.click();

}



}
module.exports = new HomePage();
