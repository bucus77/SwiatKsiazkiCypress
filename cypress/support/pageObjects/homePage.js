class HomePage {
    getLeftNavBarLinks() {
        return cy.get(".space-base .level0 > .menu-link span");
    }

    getTopNav(){
        return cy.get('[id*="menu-10"] [class*="level0"] .menu-link >span');
    }

}
export default HomePage;
