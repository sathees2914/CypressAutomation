class SearchPage {
   
    searchProduct() {
        cy.get('#twotabsearchtextbox').type('Mobiles under 15000{enter}');
    }
    MobilesCostassertion(){
        cy.get('[class="a-color-state a-text-bold"]').should('include.text', 'Mobiles under 15000')
    }
    ApplyingFillter() {
        cy.get('[id="p_n_feature_twenty-nine_browse-bin/81332998031"]').find('[class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"]').click();
    }
     validateHomePage() {
        cy.get('#nav-logo-sprites').should('be.visible');  // Positive Case 1
        cy.get('#nav-cart-count').should('be.visible');  // Positive Case 2
        cy.get('#twotabsearchtextbox').should('exist');
        cy.get('.non-existing-element').should('not.exist');  // Negative Case
    }
    fliterSamsung(Samsung){
        cy.get('#brandsRefinements').contains(Samsung).click({ force: true });

    }
    fliterMotorola(motorola){
        cy.get('#brandsRefinements').contains(motorola).click({ force: true }); 
    }
}
export const searchPage = new SearchPage;
