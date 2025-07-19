#!/bin/bash

# Static Website Deployment Script for Dheeraj Parihar's Portfolio

echo "🚀 Building Static Portfolio Website..."

# Build the static version
echo "📦 Building static assets..."
npm run build

# Copy to static directory
echo "📁 Copying files to dist-static..."
rm -rf dist-static
mkdir -p dist-static
cp -r dist/public/* dist-static/

echo "✅ Static website built successfully!"
echo ""
echo "📂 Files are ready in: dist-static/"
echo "🌐 Preview locally: cd dist-static && python3 -m http.server 8000"
echo ""
echo "🚀 Deployment Options:"
echo "   • Netlify: Drag dist-static folder to netlify.com/drop"
echo "   • Vercel: vercel --prod dist-static"
echo "   • GitHub Pages: Upload dist-static contents to gh-pages branch"
echo "   • Surge: cd dist-static && surge"
echo ""
echo "📧 Contact form opens email client with: workwithdheeraj@outlook.com"
echo "📄 Resume downloads as text file automatically"