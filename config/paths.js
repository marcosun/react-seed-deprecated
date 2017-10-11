const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appDist: resolveApp('dist'),
  appSrc: resolveApp('src'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
};