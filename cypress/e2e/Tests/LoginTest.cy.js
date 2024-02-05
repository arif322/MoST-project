import open_Url from "../BaseDriver/BaseDriver"
import login from "../Pages/loginPage"


describe('Most Project',()=>{
    const openUrl =new open_Url()
    const loginPage = new login()
    it('BSTFT Test',()=>{
        openUrl.openUrl()
        loginPage.loginProcess()
    })
})