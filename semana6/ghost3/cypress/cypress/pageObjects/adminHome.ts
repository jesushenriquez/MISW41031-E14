class AdminHome {
    private cy;
    constructor(cy){
        this.cy = cy;
    }
    get menuButtonTop(){
        return this.cy.get('.ember-basic-dropdown-trigger');
    }
    get singnout(){
        return this.cy.get('a[href="#/signout/"]');
    }

    public openMenuTop(){
        this.menuButtonTop.click();
    }

    public checkSigoutExits(){
        this.singnout.should("exist");
    }

}