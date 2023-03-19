

/// <reference types="cypress" />

describe('before each', () => {
  beforeEach(() => {
      cy.visit('https://coffee-cart.netlify.app/')
      cy.wait(1000)
  });

  describe("example to-do app", () => {
    it("visiting coffe homepage", () => {
      cy.visit('https://coffee-cart.netlify.app/');
    });

it("Adding multiple Espresso cups to cart", () => {
  cy.get('data cy-"Espresso"]').click();
  cy.get('data cy-"Espresso"]').click();
  cy.get('data cy-"Espresso"]').click();
});

it("Expect discount Modal to appear", () => {
  cy.get(".promo").should("be visible");
});
});
it("Add an item to a cart", () => {
cy.get('[data.cy="Mocha"]').click();
cy.get('ul[data-v-c5c1969c=""] > :nth-child(2)').click();
cy.get(".delete").click();
});
it("Check if an article can be added to the cart", () => {
cy.get('[data.cy="Espresso"]').click();
cy.get('ul[data-v-c5c1969="""]> :nth-child(2)').click();
cy.get(".delete").click();
});
it("Check if an article can be removed from the cart", () => {
cy.get('ul[data-v-c5c1969c=""] > :nth-child(2)').click();
cy.get(".delete").click();
});
it("Check if user can add multiple items to the cart", () => {
cy.get('[data-cy="Espresso"]').click();
cy.get('[data cy="Espresso-Macchiato]').click();
cy.get(':nth-child(2) > a').click();
cy.get(".delete").click();
});
it("Click on Espresso", () => {
cy.get('[data-cy="Espresso"]').click();
});
it("Click on Total button and fill in the payment details", () => {
cy.get('[data-test="checkout"]').click();
cy.get('#name').type('user');
cy.get('#email').type('user.name@gmail.com');
cy.get('#submit-payment').click();
cy.get('.snackbar').should('be.visible');
});

//TCO3
it("Check if the checkout is working correctly", () => {
cy.get('[data-test="add=sauce-labs-backpack'),
  cy.get('.shopping_cart_badge').contains('1'),
  cy.get('.shopping_cart_link').click(),
  cy.get('.cart_item').should('be.visible'),
  cy.get('[data-test="checkout"]').click(),
  cy.get('[data-test="firstName"]').type('user'),
  cy.get('[data-test="lastName"]').type('name'),
  cy.get('[data-test="postalCode"]').type('88000')
  cy.get('#checkout_summary_contains').should('be.visible'),
  cy.get('[data-test="finish"]').click(),

  it('Add an item to the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
      cy.get('.shopping_cart_badge').contains('1'),
      cy.get('.shopping_cart_link').click(),
      cy.get('.cart_item').should('be.visible');
  })
});

it('Remove an item from the cart', () => {
cy.get('data-test="add-to-cart-sauce-labs-backpack"]')
cy.get('.shopping_cart_badge').contains('1')
cy.get('.shopping_cart_link').click()
cy.get('.cart_item').should('be.visible')
cy.get('[data-test="remove-sauce-labs-backpack"]').contains('0')
cy.get('.cart_item').should('not.exist')
});

it("Click on cart and click plus on Esspresso", () => {
cy.get(':nth-child(2)>a').click();
cy.get('[aria-label="Add one Espresso"]').click();
cy.get('[aria-label="Add one Espresso"]').click();
});


it("Visit page", () => {
cy.visit("https://coffe-cart.netlify.app/");
});
it("Check if user can add multiple items to the cart", () => {
cy.get('[data-cy="Espresso"]').click();
cy.get('[data-cy="Espresso-Macchiato"]').click();
cy.get('nth-child(2) > a').click();
});



/// <reference types="cypress"/>
describe("Check if user will get discount with every third purchase of coffee he makes from the cart page", () => {
it("Visit page", () => {
  cy.visit("https://coffee-cart.netlify.app/");
});
it("Click on Espresso", () => {
  cy.get('[data-cy="Espresso"]').click();
});
it("Click on cart and click plus on Espresso", () => {
  cy.get(':nth-child(2) > a').click();
  cy.get('[aria-label="Add one Espresso"]').click();
  cy.get('[aria-label="Add one Espresso"]').click();
  cy.get('.list-item').should('be.visible');
});
});
///<reference types="cypress"/>
describe("Check if user will get discount with every third purchase of coffee he makes from the cart page", () => {
it("Visit page", () => {
  cy.visit('https://coffee-cart.netlify.app/')
});
it("Click on Espresso", () => {
  cy.get('[data-cy="Espresso"]').click();
});
it("Click on Total button and fill in the payment details", () => {
  cy.get('[data-test="checkout"]').click();
  cy.get('#name').type('user');
  cy.get('#email').type('user@gmail.ba');
  cy.get('#submit-payment').click();
  cy.get('.snackbar').should('be.visible');
})
})
})