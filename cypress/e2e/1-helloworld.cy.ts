describe("empty spec", () => {
    it("passes", () => {
      cy.log("hello world");
    });
    it("Typescript Introduction", () => {
      cy.log("Variables types")
      let stringVariable: string = "9";
      let numberVariable: number = 0;
      let booleanVariable: boolean = true;
      let anyVariable: any = false;
      cy.log("How to use Function using TypeScript")
      function addTwoNumbers(a: number, b: number): number {
        return a + b;
      }

      interface User {
        username: string;
        password: string;
      }

      function returningUserInformation(user: User): void {
        console.log("This is the user name" + user.username);
        console.log("This is the password" + user.password);
      }
    });
  });