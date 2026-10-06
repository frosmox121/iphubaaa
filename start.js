const path = require('path'), fs = require('fs');
try { require('dotenv').config({ path: path.join(__dirname, '.env'), override: false }); } catch (_) {}
const st = {};
const old = path.join(__dirname, 'db.json');
if (fs.existsSync(old)) { try { Object.assign(st, JSON.parse(fs.readFileSync(old, 'utf8'))); } catch (_) {} }
global.__IPHUB_STATE = st;
require('./server');
