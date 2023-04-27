const fs = require('fs');
const path = require('path');

const [,, middlewareName] = process.argv;

if (!middlewareName) {
  console.error('Please provide a middleware name as argument');
  return;
}

const templatePath = path.join(__dirname, '..', 'middlewares', 'template.js');
const targetPath = path.join(__dirname, '..', 'middlewares', `${middlewareName}.js`);

try {
  const content = fs.readFileSync(templatePath, 'utf-8').replace(/Template/g, middlewareName);
  fs.writeFileSync(targetPath, content);
  console.log(`Middleware ${middlewareName} created successfully`);
} catch (error) {
  console.error(`Failed to create middleware ${middlewareName}: ${error}`);
}
