// 引入 selenium-webdriver
const { Builder, By, Key, until } = require('selenium-webdriver');
const readline = require('readline'); // 引入 readline 模組
const process = require('process');

// 等待用戶按下 Enter 鍵繼續
function waitForUserInput() {
  return new Promise((resolve) => {
    console.log('請輸入驗證碼後，按 Enter 鍵以繼續...');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.on('line', () => {
      rl.close();
      resolve();
    });
  });
}

(async function example() {
  // 創建一個新的 Chrome WebDriver 實例
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // 訪問 Google
    await driver.get('https://uatcms.pxpay.com.tw/login');

    let accountInput = await driver.wait(until.elementLocated(By.css('input[aria-label="帳號"]')), 10000);

    // 點擊帳號欄位以聚焦
    await accountInput.click();

    // 在帳號欄位中輸入帳號
    await accountInput.sendKeys('TonyLin');  // 替換為你的帳號


    let pwddInput = await driver.wait(until.elementLocated(By.css('input[aria-label="密碼"]')), 10000);

    // 點擊帳號欄位以聚焦
    await pwddInput.click();

    // 在帳號欄位中輸入帳號
    await pwddInput.sendKeys('111111');  // 替換為你的帳號

    // 等待 30 秒，讓你有時間輸入驗證碼
    await driver.sleep(10000);  // 30 秒

    // 找到並點擊登入按鈕
    let loginButton = await driver.findElement(By.css('button[class*="q-btn"]')); // 替換為登入按鈕的 CSS 選擇器
    await loginButton.click();

    // 等待直到指定的元素出現
    const menuItems = await driver.wait(until.elementsLocated(By.css('div.q-item__label.ellipsis.text-subtitle1.text-white')), 10000);

    // 點擊該元素
    const fourthMenuItem = menuItems[26];

    // 點擊該元素
    await fourthMenuItem.click();

    // 等待頁面加載完成，然後找到按鈕
    await driver.wait(until.elementLocated(By.css('.addBtn button')), 10000); // 等待按鈕出現
    const addButton = await driver.findElement(By.css('.addBtn button'));

    // 等待直到按鈕可被點擊
    await driver.wait(until.elementIsVisible(addButton), 10000);
    await driver.wait(until.elementIsEnabled(addButton), 10000);

    // 點擊新增按鈕
    await addButton.click();

    // 等待並找到輸入框
    const inputField = await driver.wait(until.elementLocated(By.css('input.q-field__native.q-placeholder')), 10000);
    // 等待直到輸入框可被點擊
    await driver.wait(until.elementIsVisible(inputField), 10000);
    // 輸入文字
    await inputField.sendKeys('我是我是標題標題標題'); // 替換為你要輸入的內容

    // 等待並找到 textarea
    const textArea = await driver.wait(until.elementLocated(By.tagName('textarea')), 20000);
    await textArea.sendKeys('我是我是內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容');

    // 等待並找到 type 為 number 的 input
    const numberInput = await driver.wait(until.elementLocated(By.css('input[type="number"]')), 20000);
    await numberInput.sendKeys('123');

    // 等待並找到包含 q-card__actions 的 div
    const cardActionsDiv = await driver.wait(until.elementLocated(By.css('div.q-card__actions')), 20000);

    // 在該 div 下找到所有 button
    const buttons = await cardActionsDiv.findElements(By.css('button.q-btn'));

    // 確保找到至少兩個 button
    if (buttons.length >= 2) {
      const secondButton = buttons[1]; // 獲取第二個 button
      await secondButton.click(); // 點擊第二個 button
    } else {
      console.log('未找到足夠的按鈕');
    }

    await driver.sleep(5000);
    // 等待並找到 .q-dialog-plugin
const dialog = await driver.wait(until.elementLocated(By.css('.q-dialog-plugin')), 3000);

// 在 .q-dialog-plugin 裡找到 justify-end
const justifyEndDiv = await dialog.findElement(By.css('.justify-end'));

// 在 justify-end 裡找到所有 button
const buttonss = await justifyEndDiv.findElements(By.tagName('button'));

// 確保找到至少兩個 button
if (buttonss.length >= 2) {
  console.log('點擊了第二個按鈕');
    const secondButton = buttonss[1]; // 獲取第二個 button
    await secondButton.click(); // 點擊第二個 button
} else {
    console.log('未找到足夠的按鈕');
}


    // // 等待頁面加載，並找到帳號輸入框（通過 id）
    // let emailInput = await driver.wait(until.elementLocated(By.className('inputtext _55r1 _6luy')), 10000);

    // // 在帳號輸入框中輸入帳號
    // await emailInput.sendKeys('pwert564408020@yahoo.com.tw');

    // // 等待頁面加載，並找到帳號輸入框（通過 id）
    // let pwdlInput = await driver.wait(until.elementLocated(By.id('pass')), 10000);

    // // 在密碼輸入框中輸入帳號
    // await pwdlInput.sendKeys('quiz1323');


    // let loginButton = await driver.wait(until.elementLocated(By.name('login')), 30000);
    // console.log(loginButton)
    // await loginButton.click();

    // // 等待一段時間，讓頁面登錄
    // await driver.wait(until.titleContains('Facebook'), 5000);
    // // 0053 0104
    // let x1oktzhs = await driver.wait(until.elementLocated(By.className('x1oktzhs')), 30000);
    // console.log(x1oktzhs)
    // await x1oktzhs.click();

    // let elements = await driver.wait(until.elementsLocated(By.className('x1i10hfl')), 50000);

    // let thirdElement = elements[4];
    // // 等待元素可見
    // await driver.wait(until.elementIsVisible(thirdElement), 10000);

    // // 確保 thirdElement 存在再進行點擊
    // if (thirdElement) {
    //     await thirdElement.click();
    //     console.log('已點擊第三個元素');
    // }

    // // let xxdpisx = await driver.wait(until.elementLocated(By.className('xxdpisx')), 30000);
    // // console.log(xxdpisx)
    // // await xxdpisx.click();

    // // 輸出當前頁面的標題
    // let title = await driver.getTitle();
    // console.log(title);
  } finally {
    // 關閉瀏覽器
    // await driver.quit();
  }
})();