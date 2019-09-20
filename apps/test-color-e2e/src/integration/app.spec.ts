import { getGreeting } from '../support/app.po';

describe('test-color', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to test-color!');
  });
});
