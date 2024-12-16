const fs = require('fs-extra');
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + '/set.env'
  });
}
const path = require('path');
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "mungai",
  'PREFIXE': process.env.PREFIX || '~',
  'OWNER_NAME': process.env.OWNER_NAME || "mungai",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || 'yobih',
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "Yobih_MD",
  'URL': process.env.BOT_MENU_LINKS || "https://telegra.ph/file/d0cd3c82fbbc120f38ac4.jpg",
  'MODE': process.env.PUBLIC_MODE || "yes",
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME || null,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY || null,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'DP': process.env.STARTING_BOT_MESSAGE || 'yes',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'HEROKU': process.env.HEROKU || "yes",
  'ANTI_VV': process.env.ANTI_VIEW_ONCE || 'no',
  'ANTI_CMD_SPAM': process.env.ANTI_COMMAND_SPAM || 'no',
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
