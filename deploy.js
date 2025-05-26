// A simple build script to help with local deployment

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

console.log(`${colors.bright}${colors.blue}=== Portfolio Deployment Helper ===${colors.reset}\n`);

// Step 1: Clean environment
try {
    console.log(`${colors.cyan}Step 1: Cleaning environment...${colors.reset}`);

    // Check if node_modules exists and remove it
    if (fs.existsSync(path.join(__dirname, 'node_modules'))) {
        console.log('Removing node_modules directory...');
        fs.rmSync(path.join(__dirname, 'node_modules'), { recursive: true, force: true });
    }

    // Check if package-lock.json exists and remove it
    if (fs.existsSync(path.join(__dirname, 'package-lock.json'))) {
        console.log('Removing package-lock.json...');
        fs.unlinkSync(path.join(__dirname, 'package-lock.json'));
    }

    // Check if dist directory exists and remove it
    if (fs.existsSync(path.join(__dirname, 'dist'))) {
        console.log('Removing dist directory...');
        fs.rmSync(path.join(__dirname, 'dist'), { recursive: true, force: true });
    }

    console.log(`${colors.green}✓ Environment cleaned${colors.reset}\n`);
} catch (error) {
    console.error(`${colors.red}Error cleaning environment:${colors.reset}`, error);
    process.exit(1);
}

// Step 2: Install dependencies
try {
    console.log(`${colors.cyan}Step 2: Installing dependencies...${colors.reset}`);
    console.log('This may take a few minutes...');

    execSync('npm install', { stdio: 'inherit' });

    console.log(`${colors.green}✓ Dependencies installed${colors.reset}\n`);
} catch (error) {
    console.error(`${colors.red}Error installing dependencies.${colors.reset}\n`);
    console.log(`${colors.yellow}Attempting offline installation...${colors.reset}`);

    try {
        execSync('npm install --offline', { stdio: 'inherit' });
        console.log(`${colors.green}✓ Offline installation completed${colors.reset}\n`);
    } catch (offlineError) {
        console.error(`${colors.red}Offline installation failed.${colors.reset}\n`);
        console.log(`${colors.yellow}Try manually installing dependencies:${colors.reset}`);
        console.log('1. Connect to a different network (like mobile hotspot)');
        console.log('2. Run: npm install\n');
        process.exit(1);
    }
}

// Step 3: Build the project
try {
    console.log(`${colors.cyan}Step 3: Building the project...${colors.reset}`);

    execSync('npm run build', { stdio: 'inherit' });

    console.log(`${colors.green}✓ Build completed successfully${colors.reset}\n`);
} catch (error) {
    console.error(`${colors.red}Error building the project:${colors.reset}`, error);
    process.exit(1);
}

// Step 4: Provide deployment instructions
console.log(`${colors.bright}${colors.green}=== Build Successful! ====${colors.reset}\n`);
console.log(`${colors.bright}Deployment Options:${colors.reset}\n`);

console.log(`${colors.yellow}Option 1: GitHub + Vercel (Recommended)${colors.reset}`);
console.log('1. Push your code to GitHub');
console.log('2. Import your repository in Vercel\n');

console.log(`${colors.yellow}Option 2: Direct Upload${colors.reset}`);
console.log('1. Install Vercel CLI: npm install -g vercel');
console.log('2. Run: vercel login');
console.log('3. Navigate to dist folder: cd dist');
console.log('4. Run: vercel --prod\n');

console.log(`${colors.yellow}Option 3: Netlify${colors.reset}`);
console.log('1. Drag and drop your dist folder to Netlify\n');

console.log(`${colors.bright}${colors.blue}For detailed instructions, see DEPLOYMENT-GUIDE.md${colors.reset}\n`);
