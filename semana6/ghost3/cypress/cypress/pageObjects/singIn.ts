export class SingIn {
    private cy;
    get email(){
        return this.cy.get(".email[type='email']");
    }
    get password(){
        return  this.cy.get(".password[type='password']");
    }

    get submit(){
        return this.cy.get(".login[type='submit']");
    }

    constructor(cy){
        this.cy = cy;
    }

    public navigateToSingnin(){
        this.cy.visit('http://localhost:2369/ghost/#/signin');
    }
    public typeEmail(email){
        this.email.type(email);
    }
    public typePassword(password){
        this.password.type(password);
    }
    public clickSubmit(){
        this.submit.click();
    }
    public submitContainsRetry(){
        this.submit.contains('Retry');
    }
   
}