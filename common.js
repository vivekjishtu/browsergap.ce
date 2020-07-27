import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

import branchName from 'current-git-branch';
import {FRAME_CONTROL, IMAGE_FORMAT} from './public/translateVoodooCRDP.js';

export const DEBUG = {
  mode: 'dev',
  goSecure: true,
  noAudio: false,
  legacyShots: !FRAME_CONTROL,      /* until enableBeginFrameControl can be set for any target
    whether created with createTarget or simply spawning, 
    we must use legacy shots */
  IMAGE_FORMAT,                     /* JPEG, PNG, or WEBP (if supported (so not Safari)) */
  commands: false,
  shotDebug: false,
  noShot: false,
  dev: false,
  val: 0,
  low: 1,
  med: 3,
  high: 5
};

// test for webpack
//export const APP_ROOT = path.dirname(fileURLToPath(import.meta.url));
export const APP_ROOT = __dirname;
export const GO_SECURE = fs.existsSync(path.resolve(APP_ROOT, 'sslcert', 'master', 'privkey.pem'));

export const STAGING = branchName() == 'staging';
export const MASTER = branchName() == 'master';
export const BRANCH = branchName();

export const version = 'v1';
export const COOKIENAME = `litewait-${version}-userauth-${GO_SECURE?'sec':'nonsec'}`;

export const SECURE_VIEW_SCRIPT = path.join(__dirname, 'zombie-lord', 'scripts', 'get_download_view_url.sh');

export async function throwAfter(ms, command, port) {
  await sleep(ms);
  throw new Error(`Timed out after ${ms}. ${port} : ${JSON.stringify(command,null,2)}`);
}

export async function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

export const CONNECTION_ID_URL = "data:text,DoNotDeleteMe";
