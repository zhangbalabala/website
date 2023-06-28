export {};

const REDEEM_CODE_API = Cypress.config().baseUrl + '/api/redeem-code';

const uniqueCode = {
  techCult: {
    codes: {
      elegible: '5tb_redeem_code', //REDEEMED: FALSE
      nonElegible: '2tb_code_redeem', //REDEEMED: TRUE
      doesntExist: 'doesnt_exist',
    },
    provider: 'TECHCULT',
  },
  stackCommerce: {
    codes: {
      elegible: '5tb_redeem_code', //REDEEMED: FALSE
      nonElegible: '2tb_code_redeem', //REDEEMED: TRUE
      doesntExist: 'doesnt_exist',
    },
    provider: 'STACKCOMMERCE',
  },
};

describe('Redeem Codes', () => {
  describe('Redeem Code API call', () => {
    describe('Redeem codes for TechCult page', () => {
      it("We should get 'Code available' from the API", () => {
        cy.request({
          method: 'POST',
          url: REDEEM_CODE_API,
          body: {
            code: uniqueCode.techCult.codes.elegible,
            provider: uniqueCode.techCult.provider,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message', 'Code available');
        });
      });

      it("We should get 'Code already applied' from the API", () => {
        cy.request({
          method: 'POST',
          url: REDEEM_CODE_API,
          body: {
            code: uniqueCode.techCult.codes.nonElegible,
            provider: uniqueCode.techCult.provider,
          },
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('message', 'Code already applied');
        });
      });

      it("We should get 'Invalid code provided' from the API", () => {
        cy.request({
          method: 'POST',
          url: REDEEM_CODE_API,
          body: {
            code: uniqueCode.techCult.codes.doesntExist,
            provider: uniqueCode.techCult.provider,
          },
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('message', 'Invalid code provided');
        });
      });
    });

    describe('Redeem codes for StackCommerce page', () => {
      it("We should get 'Code available' from the API", () => {
        cy.request({
          method: 'POST',
          url: REDEEM_CODE_API,
          body: {
            code: uniqueCode.stackCommerce.codes.elegible,
            provider: uniqueCode.stackCommerce.provider,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message', 'Code available');
        });
      });

      it("We should get 'Code already applied' from the API", () => {
        cy.request({
          method: 'POST',
          url: REDEEM_CODE_API,
          body: {
            code: uniqueCode.stackCommerce.codes.nonElegible,
            provider: uniqueCode.stackCommerce.provider,
          },
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('message', 'Code already applied');
        });
      });

      it("We should get 'Invalid code provided' from the API", () => {
        cy.request({
          method: 'POST',
          url: REDEEM_CODE_API,
          body: {
            code: uniqueCode.stackCommerce.codes.doesntExist,
            provider: uniqueCode.stackCommerce.provider,
          },
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('message', 'Invalid code provided');
        });
      });
    });
  });
});
