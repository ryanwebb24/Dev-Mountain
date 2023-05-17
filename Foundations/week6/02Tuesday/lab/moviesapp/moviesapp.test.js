const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("test delete function", async () => {
    await driver.get("http://localhost:3000")
// find the text feild and add text
    await driver.findElement(By.id("add-movie-input")).sendKeys("spider-man", Key.RETURN)
// find the remove button click it 
    let deleteBtn = await driver.wait(until.elementLocated(By.className("delete-btn")))
    expect(await deleteBtn.getText()).toBe("Remove")
    await driver.findElement(By.className("delete-btn")).click()
// expect finding if the movie was removed
    let elementRemoved = false;
    try {
    await driver.findElement(By.className('delete-btn'));
    } catch (NoSuchElementError) {
        elementRemoved = true;
    }
    expect(elementRemoved).toBe(true);
    // expect(await driver.findElement(By.id("message")).getText()).toBe("spider-man deleted!")
});

test("test cross off movie function", async () => {
    await driver.get("http://localhost:3000")
    // find the text feild and add text
    await driver.findElement(By.id("add-movie-input")).sendKeys("spider-man", Key.RETURN)
    await driver.findElement(By.id("movie-0")).click()
    // let message = await driver.findElement(By.id("message"))
    expect(await driver.findElement(By.id("message")).getText()).toBe("Watched spider-man")

});
