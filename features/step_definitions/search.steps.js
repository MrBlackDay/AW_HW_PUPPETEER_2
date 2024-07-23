const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { getText, clickElement } = require("../../lib/command.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("the user open the title page of movie web-site", async function () {
  return await this.page.goto("https://qamid.tmweb.ru/client/payment.php", {
    setTimeout: 20000,
  });
});

When("the user choose day_4", async function () {
  return (
    await clickElement(this.page, "body > nav > a:nth-child(4)"),
    {
      setTimeout: 20000,
    }
  );
});

When("the user choose movieHoll_90 and session time", async function () {
  return (
    await clickElement(
      this.page,
      "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
    ),
    {
      setTimeout: 20000,
    }
  );
});

When(
  "the user selects an empty seat_7_8 in the cinema hall",
  async function () {
    return (
      await clickElement(
        this.page,
        "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(7) > span:nth-child(8)"
      ),
      {
        setTimeout: 20000,
      }
    );
  }
);

When("the user click accept buttom", async function () {
  return (
    clickElement(this.page, "body > main > section > button"),
    {
      setTimeout: 20000,
    }
  );
});

Then("the seat is booked", async function () {
  const actual = await getText(
    this.page,
    "body > main > section > div > p:nth-child(8)"
  );
  const expected =
    "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.";
  expect(actual).contains(expected);
});

//------------------------------------------------------------------------------------------------

When("the user choose day_6", async function () {
  return (
    await clickElement(this.page, "body > nav > a:nth-child(6)"),
    {
      setTimeout: 20000,
    }
  );
});

When("the user choose movieHoll_1 and session time", async function () {
  return (
    await clickElement(
      this.page,
      "body > main > section:nth-child(3) > div.movie-seances__hall > ul > li > a"
    ),
    {
      setTimeout: 20000,
    }
  );
});

When(
  "the user selects an empty seat_1_10 in the cinema hall",
  async function () {
    return (
      await clickElement(
        this.page,
        "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(10)"
      ),
      {
        setTimeout: 20000,
      }
    );
  }
);

//--------------------------------------------------------------------------------------------------------

When("the user choose movieHoll_2 and session time", async function () {
  return (
    await clickElement(
      this.page,
      "body > main > section:nth-child(2) > div:nth-child(2) > ul > li"
    ),
    {
      setTimeout: 20000,
    }
  );
});

Then("the seat is unbooked", async function () {
  const actual = await getText(
    this.page,
    "body > main > section:nth-child(1) > div.movie__info > div.movie__description > h2"
  );
  const expected = "Сталкер(1979)";
  expect(actual).contains(expected);
});
