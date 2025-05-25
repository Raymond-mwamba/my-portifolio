# Vercel Deployment Checklist

## Common Issues and Solutions:

### 1. TypeScript Errors
- Vercel is stricter than local development
- Check for any TypeScript warnings/errors

### 2. Import Paths
- Ensure all imports use correct case sensitivity
- Check for missing file extensions

### 3. Environment Variables
- If using any environment variables, set them in Vercel dashboard
- Go to Project Settings > Environment Variables

### 4. Build Configuration
- Framework: Should auto-detect as "Vite"
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 5. Node.js Version
- We've set it to >= 18.0.0 in package.json
- Vercel should respect this

### 6. Static Files
- All assets should be in public/ folder
- Images should be accessible via relative paths

## Deployment Commands:
```bash
# Test build locally first
npm run build
npm run preview

# If successful, deploy to Vercel
```

## If still failing, try:
1. Delete node_modules and package-lock.json
2. Run npm install
3. Try deploying again
