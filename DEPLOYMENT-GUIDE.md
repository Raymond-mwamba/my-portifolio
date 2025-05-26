# Portfolio Deployment Guide

## Option 1: GitHub + Vercel (Recommended)

### Step 1: Push to GitHub
1. Create a new GitHub repository
2. Initialize Git in your project:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy from GitHub
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
   - Install Command: npm install
   - Root Directory: ./
5. Click "Deploy"

### Step 3: Configure Domain (Optional)
1. Go to your project settings in Vercel dashboard
2. Select "Domains"
3. Add your custom domain

## Option 2: Direct Upload (Alternative)

If GitHub method fails, try uploading the build folder directly:

1. Run the build locally:
```bash
npm run build
```

2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy using Vercel CLI:
```bash
vercel login
cd dist
vercel --prod
```

## Option 3: Use Netlify as Alternative

1. Sign up for [Netlify](https://www.netlify.com/)
2. Drag and drop your dist folder to the Netlify dashboard
3. Configure your site name and domain

## Common Issues and Solutions:

### 1. TypeScript Errors
- Vercel is stricter than local development
- Check for any TypeScript warnings/errors

### 2. Import Paths
- Ensure all imports use correct case sensitivity
- Check for missing file extensions 

### 3. Network Issues
- If experiencing network errors during npm install:
  - Try using a VPN or different network connection
  - Consider using a personal hotspot from your phone
  - Use the direct upload method with pre-built files

### 4. Node.js Version
- We've set it to >= 18.0.0 in package.json
- Vercel should respect this

### 5. Static Files
- All assets should be in public/ folder or imported correctly in your code
- Images should be accessible via relative paths
