const fs = require('fs');

function PupLocal() {
  this.restoreLocalStorage = async (page, file) => {
    let json = JSON.parse(fs.readFileSync(file));
    await page.evaluate(json => {
      localStorage.clear();
      for (let key in json)
        localStorage.setItem(key, json[key]);
    }, json);
  }

  this.saveLocalStorage = async (page, file) => {
    const json = await page.evaluate(() => {
      let json = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        json[key] = localStorage.getItem(key);
      }
      return json;
    });
    fs.writeFileSync(file, JSON.stringify(json));
  }
}

module.exports = new PupLocal();
