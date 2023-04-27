const fs = require('fs');
const path = require('path');

const [,, routeName] = process.argv;

if (!routeName) {
  console.error('Please provide a route name as argument');
  return;
}

const templatePath = path.join(__dirname, '..', 'routes', 'template.js');
const targetPath = path.join(__dirname, '..', 'routes', `${routeName}.js`);

try {
  const content = fs.readFileSync(templatePath, 'utf-8').replace(/Template/g, routeName);
  fs.writeFileSync(targetPath, content);
  console.log(`Route ${routeName} created successfully`);
} catch (error) {
  console.error(`Failed to create route ${routeName}: ${error}`);
}
