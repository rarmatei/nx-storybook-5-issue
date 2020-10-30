describe('test2', () => {
  beforeEach(() => cy.visit('/iframe.html?id=maincomponent--primary'));

  it('should render the component', () => {
    cy.get('stores6-main').should('exist');
  });
});
