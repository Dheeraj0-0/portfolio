#!/bin/bash

echo "🚀 Building static portfolio website..."

# Build frontend only (without server)
vite build --outDir dist-static

echo "✅ Static build complete!"
echo "📂 Files ready in: dist-static/"
echo ""
echo "🌐 Deploy options:"
echo "   • Vercel: npx vercel --prod"
echo "   • Netlify: drag dist-static/ to netlify.com/drop"
echo "   • Local test: cd dist-static && python3 -m http.server 8000"