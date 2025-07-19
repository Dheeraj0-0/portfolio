# Deploy to Vercel - Step by Step Guide

## Method 1: Vercel CLI (Recommended)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy from project root
```bash
# From the main project directory
vercel --prod
```

Vercel will automatically:
- Detect the `vercel.json` configuration
- Build using `npm run build` 
- Deploy the `dist-static` folder
- Provide you with a live URL

## Method 2: GitHub + Vercel Dashboard

### 1. Push to GitHub
```bash
git add .
git commit -m "Add static portfolio website"
git push origin main
```

### 2. Connect to Vercel
- Go to https://vercel.com/dashboard
- Click "Add New Project"
- Import your GitHub repository
- Vercel will auto-detect the configuration

### 3. Deploy Settings (if needed)
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist-static`
- Root Directory: `./` (leave empty)

## Method 3: Direct Upload

### 1. Build the static site
```bash
npm run build
cp -r dist/public/* dist-static/
```

### 2. Upload to Vercel
- Go to https://vercel.com/new
- Drag and drop the `dist-static` folder
- Click "Deploy"

## After Deployment

Your portfolio will be available at:
- `https://your-project-name.vercel.app`
- You can add a custom domain in Vercel dashboard

## Features Working on Vercel:
✅ Fast global CDN delivery
✅ Automatic HTTPS
✅ Contact form opens email client
✅ Resume download works
✅ All certification links functional
✅ Social media links working
✅ Mobile responsive design

## Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Domains" tab
3. Add your custom domain
4. Follow DNS configuration instructions

Your static portfolio is now ready for professional use!