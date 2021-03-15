const { assert } = require('console');
const Page = require('./page');
//const expectChai = require('chai').expect;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SprintBoard extends Page {
    
    get AddcardWentwell () { return $('//button[contains(@class,"border-success")]') }
    get AddcardNotwell () { return $('//button[contains(@class,"border-danger")]') }
    get inputTitle () { return $('input[placeholder="Required"]') }
    get inputDes () { return $('textarea[placeholder="Optional"]') }
    get btnSubmit () { return $('button[type="submit"]') }
    get vote () { return $('//div[contains(@class,"border-success")]/div/div/div/ul/li[@class="ml-3"]') }
   
    get deleteCard () { return $('//div[contains(@class,"border-danger")]/div/div/div/ul/li[2]') }
   
    get btnConfirm () { return $('button[class="btn btn-danger"]') }
    
 
    AddCardWell(title,des)
    {
        const addcardwellVerify = $('//div[contains(@class,"border-success")]/div/h6')
        this.AddcardWentwell.click();
         this.inputTitle.setValue(title);
        this.inputDes.setValue(des);
        this.btnSubmit.click();
        expect(addcardwellVerify).toHaveText(title);
      
}
AddCardNotWell(title,des)
    {
        const addcardnotwellVerify = $('//div[contains(@class,"border-danger")]/div/h6')
        this.AddcardNotwell.click();
         this.inputTitle.setValue(title);
        this.inputDes.setValue(des);
        this.btnSubmit.click();  
        expect(addcardnotwellVerify).toHaveText(title);    
}

voteUp()
{
this.vote.click();
browser.pause(1000)
const votecount = $('//div[contains(@class,"border-success")]/div/div/div/ul/li[@class="ml-3"]/button')
expect(votecount).toHaveText('1');
}

DeleteCard()
{
this.deleteCard.click();
browser.pause(1000)
this.btnConfirm.click();
browser.pause(3000)
const deletecardpresent = $('//div[contains(@class,"border-danger")]/div/div/div/ul/li[2]')
expect(browser.deletecardpresent).not.toBeDisplayed();

}

}
module.exports = new SprintBoard();