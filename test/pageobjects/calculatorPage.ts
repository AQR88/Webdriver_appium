import { browser, $, $$ } from "@wdio/globals";

// Nokia G 10

// class CalculatorPage {
//   private btn0 = "~0";
//   private btn1 = "~1";
//   private btn2 = "~2";
//   private btn3 = "~3";
//   private btn4 = "~4";
//   private btn5 = "~5";
//   private btn6 = "~6";
//   private btn7 = "~7";
//   private btn8 = "~8";
//   private btn9 = "~com.google.android.calculator:id/digit_9";
//   private btnPlus = "~додати";
//   private btnMinus = "~відняти";
//   private btnMultiply = "~помножити";
//   private btnDivide = "~поділити";
//   private btnEqual = "~дорівнює";
//   private btnClear = "~видалити";
//   private resultField = "id:com.google.android.calculator:id/result_final";

//   private async click(text: string): Promise<void> {
//     await $(text).click();
//   }

//   public async enterNumber(number: string): Promise<void> {
//     for (const digit of number) {
//       await this.click(`~${digit}`);
//     }
//   }

//   public async performOperation(
//     a: string,
//     operatorBtn: string,
//     b: string
//   ): Promise<void> {
//     await this.click(this.btnClear);
//     await this.enterNumber(a);
//     await this.click(operatorBtn);
//     await this.enterNumber(b);
//     await this.click(this.btnEqual);
//   }

//   public async getResult(): Promise<string> {
//     return (await $(this.resultField)).getText();
//   }

//   public async verifyDivisionByZero(): Promise<void> {
//     await this.click(this.btnClear);
//     await this.enterNumber("8");
//     await this.click(this.btnDivide);
//     await this.enterNumber("0");
//     await this.click(this.btnEqual);

//     const previewResult = await $(
//       "id:com.google.android.calculator:id/result_preview"
//     );

//     const message = await previewResult.getText();
//     if (message !== "Не можна ділити на 0") {
//       throw new Error(
//         `❌ Expected: "Не можна ділити на 0", but we get: "${message}"`
//       );
//     }
//   }
// }

// export default new CalculatorPage();

// Samsung Galaxy
class CalculatorPage {
  private btn0 = "id:com.google.android.calculator:id/digit_0";
  private btn1 = "id:com.google.android.calculator:id/digit_1";
  private btn2 = "id:com.google.android.calculator:id/digit_2";
  private btn3 = "id:com.google.android.calculator:id/digit_3";
  private btn4 = "id:com.google.android.calculator:id/digit_4";
  private btn5 = "id:com.google.android.calculator:id/digit_5";
  private btn6 = "id:com.google.android.calculator:id/digit_6";
  private btn7 = "id:com.google.android.calculator:id/digit_7";
  private btn8 = "id:com.google.android.calculator:id/digit_8";
  private btn9 = "id:com.google.android.calculator:id/digit_9";

  // private btnPlus = "~plus";
  // private btnMinus = "~minus";
  // private btnMultiply = "~multiply";
  // private btnDivide = "~divide";
  // private btnEqual = "~equals";
  // private btnClear = "~clear";
  private btnPlus = "accessibility id:plus";
  private btnMinus = "accessibility id:minus";
  private btnMultiply = "accessibility id:multiply";
  private btnDivide = "accessibility id:divide";
  private btnEqual = "accessibility id:equals";
  private btnClear = "id:com.google.android.calculator:id/del";

  private resultField = "id:com.google.android.calculator:id/result_final";

  private async click(selector: string): Promise<void> {
    const el = await $(selector);
    await el.waitForDisplayed({ timeout: 5000 });
    await el.click();
  }

  public async enterNumber(number: string): Promise<void> {
    for (const digit of number) {
      const selector = `id:com.google.android.calculator:id/digit_${digit}`;
      await this.click(selector);
    }
  }

  public async performOperation(
    a: string,
    operatorBtn: string,
    b: string
  ): Promise<void> {
    // await this.click(this.btnClear);
    await this.enterNumber(a);
    await this.click(operatorBtn);
    await this.enterNumber(b);
    await this.click(this.btnEqual);
  }

  public async getResult(): Promise<string> {
    const result = await $(this.resultField);
    await result.waitForDisplayed({ timeout: 5000 });
    return result.getText();
  }

  public async verifyDivisionByZero(): Promise<void> {
    // await this.click(this.btnClear);
    await this.enterNumber("8");
    await this.click(this.btnDivide);
    await this.enterNumber("0");
    await this.click(this.btnEqual);

    const previewResult = await $(
      "id:com.google.android.calculator:id/result_preview"
    );
    const message = await previewResult.getText();

    if (message !== "Can't divide by 0" && message !== "Не можна ділити на 0") {
      throw new Error(
        `❌ Expected divide-by-zero message, but got: "${message}"`
      );
    }
  }
}

export default new CalculatorPage();
