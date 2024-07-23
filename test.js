const { clickElement, putText, getText } = require("./lib/command.js");
//const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("HappyPath", () => {
  test("SuccessfulTicketBookingToHallHall_90", async () => {
    await clickElement(page, "body > nav > a:nth-child(4)");
    await clickElement(
      page,
      "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(7) > span:nth-child(8)"
    );
    await clickElement(page, ".acceptin-button");
    const actual = await getText(
      page,
      "body > main > section > div > p:nth-child(8)"
    );
    expect(actual).toContain(
      "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал."
    );
  }, 60000);

  test("SuccessfulTicketBookingToHallHall_1", async () => {
    await clickElement(page, "body > nav > a:nth-child(6)");
    await clickElement(
      page,
      "body > main > section:nth-child(3) > div.movie-seances__hall > ul > li > a"
    );
    await clickElement(
      page,
      "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(10)"
    );
    await clickElement(page, ".acceptin-button");
    const actual = await getText(
      page,
      "body > main > section > div > p:nth-child(8)"
    );
    expect(actual).toContain(
      "После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал."
    );
  }, 60000);
});
//------------------------------------------------------------------------------
describe("SadPath", () => {
  test("UnsuccessfulTicketBookingToHallHall_2", async () => {
    await clickElement(
      page,
      "body > main > section:nth-child(2) > div:nth-child(2) > ul > li"
    );
    const actual = await getText(
      page,
      "body > main > section:nth-child(1) > div.movie__info > div.movie__description > h2"
    );
    expect(actual).toContain("Сталкер(1979)");
  }, 60000);
});
