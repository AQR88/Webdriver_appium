import { expect } from "chai";
import calculator from "../pageobjects/calculatorPage.js";

describe("Calculator tests", () => {
  it("should add 2 + 3 = 5", async () => {
    await calculator.performOperation("2", "~додати", "3");
    expect(await calculator.getResult()).to.equal("5");
  });

  it("should subtract 7 - 4 = 3", async () => {
    await calculator.performOperation("7", "~відняти", "4");
    expect(await calculator.getResult()).to.equal("3");
  });

  it("should multiply 6 * 9 = 54", async () => {
    await calculator.performOperation("6", "~помножити", "9");
    expect(await calculator.getResult()).to.equal("54");
  });

  it("should divide 12 / 4 = 3", async () => {
    await calculator.performOperation("12", "~поділити", "4");
    expect(await calculator.getResult()).to.equal("3");
  });

  it("should display error or handle divide by zero", async () => {
    await calculator.verifyDivisionByZero();
  });
});
