const fs = require('fs');
const path = require('path');

// Function to fix the index file
function fixIndex() {
  const indexPath = path.join(__dirname, '../src/content/index.ts');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Fix plant imports
  content = content.replace(/from '\.\/s\//g, "from './plants/");
  
  // Fix remedy imports
  content = content.replace(/from '\.\/Remedys\//g, "from './remedies/");
  
  // Write the fixed content
  fs.writeFileSync(indexPath, content);
  
  console.log('Fixed import paths in index.ts');
}

// Run the fix
fixIndex();
