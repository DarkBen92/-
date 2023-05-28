// Тест на оформление заказа и проверки указанных данных

describe("Запуск сайта", () => {
  it("bodo", () => {
    cy.viewport(1920, 1080);
    cy.visit("https://bodo.vsem-edu-oblako.ru/");
    cy.contains('Пицца').click();
    cy.contains('Пицца Охотничья').click();
    cy.get(':nth-child(1) > .mt-auto > .justify-between > .btn').click()
    cy.get('.ml-5 > .btn').click()
    cy.contains('Оформить заказ').click()
    cy.contains('Самовывоз').click()
    cy.get(':nth-child(1) > .form-control').type('Данииль')
    cy.get(':nth-child(2) > .form-control').type('9991234567')
    cy.contains('Далее').click()
    cy.get(':nth-child(1) > .text-base').should('have.text','Данииль')
    cy.get(':nth-child(2) > .text-base').should('have.text', '+7 (999) 123-45-67')
  });
});
