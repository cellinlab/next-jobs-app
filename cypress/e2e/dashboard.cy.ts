import { testData } from '../../src/testing/test-data';

const user = testData.users[0];
const job = testData.jobs[0];

describe('Dashboard', () => {
  it("should authenticate into the dashboard", () => {
    console.log('start test');
    cy.clearCookies();
    cy.clearLocalStorage();

    console.log('visit');

    cy.visit('http://localhost:3000/dashboard/jobs');

    cy.wait(1000);

    cy.url().should(
      'equal',
      'http://localhost:3000/auth/login?redirect=/dashboard/jobs'
    );

    cy.findByRole('textbox', { name: /email/i }).type(user.email);

    cy.findByLabelText(/password/i).type(user.password.toLowerCase());

    cy.findByRole('button', { name: /log in/i }).click();

    cy.findByRole('heading', { name: /jobs/i }).should('exist');
  });
});