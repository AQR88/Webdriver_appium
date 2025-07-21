import { browser, $, $$ } from "@wdio/globals";

class CalculatorPage {
  private btn0 = "~0";
  private btn1 = "~1";
  private btn2 = "~2";
  private btn3 = "~3";
  private btn4 = "~4";
  private btn5 = "~5";
  private btn6 = "~6";
  private btn7 = "~7";
  private btn8 = "~8";
  private btn9 = "~9";
  private btnPlus = "~додати";
  private btnMinus = "~відняти";
  private btnMultiply = "~помножити";
  private btnDivide = "~поділити";
  private btnEqual = "~дорівнює";
  private btnClear = "~очистити";
  private resultField = "id:com.google.android.calculator:id/result_final";

  private async click(text: string): Promise<void> {
    await $(text).click();
  }

  public async enterNumber(number: string): Promise<void> {
    for (const digit of number) {
      await this.click(`~${digit}`);
    }
  }

  public async performOperation(
    a: string,
    operatorBtn: string,
    b: string
  ): Promise<void> {
    await this.click(this.btnClear);
    await this.enterNumber(a);
    await this.click(operatorBtn);
    await this.enterNumber(b);
    await this.click(this.btnEqual);
  }

  public async getResult(): Promise<string> {
    return (await $(this.resultField)).getText();
  }
  public async verifyDivisionByZero(): Promise<void> {
    await this.click(this.btnClear);
    await this.enterNumber("8");
    await this.click(this.btnDivide);
    await this.enterNumber("0");
    await this.click(this.btnEqual);

    const previewResult = await $(
      "id:com.google.android.calculator:id/result_preview"
    );

    const message = await previewResult.getText();
    if (message !== "Не можна ділити на 0") {
      throw new Error(
        `❌ Expected: "Не можна ділити на 0", but we get: "${message}"`
      );
    }
  }
}

export default new CalculatorPage();
