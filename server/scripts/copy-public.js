const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'public');
const targetDir = path.join(__dirname, '..', 'dist', 'public');

// Create target directory if it doesn't exist
if (!fs.existsSync(path.dirname(targetDir))) {
    fs.mkdirSync(path.dirname(targetDir), { recursive: true });
}

// Copy public directory
function copyDir(src, dest) {
    if (!fs.existsSync(src)) {
        console.log(`Source directory ${src} does not exist, skipping...`);
        return;
    }
    
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

try {
    copyDir(sourceDir, targetDir);
    console.log('Public directory copied successfully to dist/');
} catch (error) {
    console.error('Error copying public directory:', error);
    process.exit(1);
}
