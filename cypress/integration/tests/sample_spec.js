/// <reference types="Cypress" />
import HomePage from "../../support/pageObjects/homePage";

let CommonLiterals = {};
describe('Common Tests', () => {
    before(function () {
        // runs once before all tests in the block
        cy.fixture('Literals/common/commonLiterals')
            .then((commonLiterals) => {
                cy.log(commonLiterals);
                CommonLiterals = commonLiterals;
            })
    });
    it('Open site ', () => {
        cy.visit('https://www.swiatksiazki.pl/');
    });
    it('TEST1 ', () => {
        cy.title().should('equal', 'Księgarnia internetowa swiatksiazki.pl z dostawą 0 zł do Księgarń Świat Książki');
    });

    it('TEST2 ', async () => {
        const homePage = new HomePage();
        //const helper = new Helper();
        cy.wait(1000);
        cy.areElementsInList(await homePage.getLeftNavBarLinks(), Object.values(CommonLiterals.leftNavigation))

    });

    it('TEST3 ', async () => {
        const homePage = new HomePage();
        //const helper = new Helper();
        cy.wait(1000);
        cy.areElementsInList(await homePage.getTopNav(), Object.values(CommonLiterals.topNavigation))
    })
});
