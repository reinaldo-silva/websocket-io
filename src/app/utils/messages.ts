import fs from "fs";

const locales = {};

const loadLocales = async () => {
  fs.readdir("./src/lang", (err, files) => {
    files.forEach(async (file) => {
      if (err) {
        console.log(err);
      }
      const fileName = file.split(".");
      locales[fileName[0]] = JSON.parse(
        fs.readFileSync(`./src/lang/${file}`) as any
      );
    });
  });
};

const checkLocale = async (locale) => (locale in locales ? locale : "pt_BR");

loadLocales();
export { locales, loadLocales, checkLocale };
