/// <reference types="Cypress" />
import HomePage from "../pageObjects/homePage";
import Helper from "../helper/helper";

import commonLiterals from "../../fixtures/Literals/common/commonLiterals.td";

describe('Common Tests', () => {
    it('Open site ', () => {
        cy.visit('https://www.swiatksiazki.pl/');
    });
    it('TEST1 ', () => {
        cy.title().should('equal', 'Księgarnia internetowa swiatksiazki.pl z dostawą 0 zł do Księgarń Świat Książki');
    });

    it('TEST2 ', () => {
        const homePage = new HomePage();
        const helper = new Helper();
        cy.wait(1000);
        helper.areElementsInList(homePage.getLeftNavBarLinks(), Object.values(commonLiterals.leftNavigation))
    });

    it('TEST3 ', () => {
        const homePage = new HomePage();
        const helper = new Helper();
        cy.wait(1000);
        helper.areElementsInList(homePage.getTopNav(), Object.values(commonLiterals.topNavigation))
    })
});
