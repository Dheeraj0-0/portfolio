# Dheeraj Parihar - Static Portfolio Website

This is a completely static version of Dheeraj Parihar's portfolio website. It requires no backend server and can be deployed to any static hosting service.

## Features

✅ **Fully Static** - No server dependencies
✅ **Professional Design** - Modern, responsive layout
✅ **Contact Form** - Opens email client with pre-filled data
✅ **Resume Download** - Downloads resume as text file with credential URLs
✅ **Social Links** - Direct links to LinkedIn, GitHub, and email
✅ **Certification Links** - Clickable badges linking to credential verification
✅ **Fast Loading** - Optimized static assets

## Deployment Options

### 1. Static Hosting Services
- **Netlify**: Drag and drop the `dist-static` folder
- **Vercel**: Connect GitHub repo and deploy
- **GitHub Pages**: Upload files to gh-pages branch
- **Surge.sh**: `surge dist-static`

### 2. Local Preview
```bash
# Serve locally for testing
npx serve dist-static
# or
python -m http.server 8000 # in dist-static directory
```

## File Structure
```
dist-static/
├── index.html          # Main HTML file
├── assets/
│   ├── index-[hash].js  # Bundled JavaScript
│   ├── index-[hash].css # Bundled CSS
│   └── images/          # Optimized images
└── vite.svg            # Favicon
```

## Contact Form Behavior

The contact form now opens the user's default email client with:
- Pre-filled recipient (workwithdheeraj@outlook.com)
- Subject line with sender's name
- Formatted message body

## Resume Download

Clicking "Download Resume" generates and downloads a text file containing:
- Complete contact information
- Skills and certifications
- Project descriptions
- Education details

## Customization

To update content:
1. Edit React components in `client/src/components/`
2. Run `cd client && vite build --outDir ../dist-static`
3. Upload new `dist-static` folder to hosting service

## SEO Features

- Meta tags for search engines
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading for better rankings

This static version maintains all the visual appeal and functionality of the original while being completely self-contained and easy to deploy anywhere.