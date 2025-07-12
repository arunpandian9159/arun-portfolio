# Deployment Guide

This guide covers deployment options and best practices for the Arunpandian C Portfolio website.

## 🚀 Quick Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project settings:
     - Framework: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`

3. **Environment Variables** (Optional)
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=.next
   ```

### GitHub Pages (Static Export)

1. **Configure Next.js for static export**
   ```javascript
   // next.config.js
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. **Build and deploy**
   ```bash
   npm run build
   # Upload the 'out' folder to GitHub Pages
   ```

## 🔧 Advanced Deployment

### Custom Domain Setup

1. **Add Custom Domain**
   - In Vercel dashboard: Settings → Domains
   - Add your domain (e.g., `arunpandian.dev`)

2. **Configure DNS**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### SSL Certificate
- Automatically handled by Vercel
- Custom certificates can be uploaded in dashboard

### Performance Optimization

1. **Enable Analytics**
   ```javascript
   // vercel.json
   {
     "analytics": {
       "enable": true
     }
   }
   ```

2. **Configure Caching**
   ```javascript
   // next.config.js
   const nextConfig = {
     async headers() {
       return [
         {
           source: '/images/(.*)',
           headers: [
             {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable',
             },
           ],
         },
       ]
     },
   }
   ```

## 🔒 Security Configuration

### Environment Variables

**Production Variables:**
```bash
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NODE_ENV=production
```

**Development Variables:**
```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DEV_MODE=true
NODE_ENV=development
```

### Security Headers

Already configured in `next.config.js`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()

## 📊 Monitoring & Analytics

### Performance Monitoring

1. **Vercel Analytics**
   - Automatically enabled for Vercel deployments
   - View in Vercel dashboard

2. **Google Analytics** (Optional)
   ```javascript
   // Add to .env.local
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Core Web Vitals**
   - Monitored automatically
   - View in browser DevTools or Vercel dashboard

### Error Tracking

1. **Sentry Integration** (Optional)
   ```bash
   npm install @sentry/nextjs
   ```

2. **Configure Sentry**
   ```javascript
   // sentry.client.config.js
   import * as Sentry from "@sentry/nextjs"
   
   Sentry.init({
     dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
   })
   ```

## 🔄 CI/CD Pipeline

### GitHub Actions

The repository includes a comprehensive CI/CD pipeline:

1. **Lint and Type Check**
   - ESLint validation
   - TypeScript type checking

2. **Build and Test**
   - Production build verification
   - Artifact generation

3. **Security Scan**
   - npm audit
   - Snyk security scanning

4. **Lighthouse Audit**
   - Performance testing
   - Accessibility validation
   - SEO optimization check

5. **Automated Deployment**
   - Preview deployments for PRs
   - Production deployment on main branch

### Required Secrets

Add these to your GitHub repository secrets:

```
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id
SNYK_TOKEN=your-snyk-token (optional)
```

## 🛠️ Maintenance

### Regular Updates

1. **Dependencies**
   ```bash
   npm update
   npm audit fix
   ```

2. **Security Patches**
   ```bash
   npm audit
   npm audit fix --force
   ```

3. **Performance Monitoring**
   - Check Lighthouse scores monthly
   - Monitor Core Web Vitals
   - Review analytics data

### Content Updates

1. **Personal Information**
   - Update `lib/constants.ts`
   - Replace images in `public/images/`
   - Update resume in `public/`

2. **Projects and Skills**
   - Modify `PROJECTS_DATA` in constants
   - Update `SKILLS` array
   - Add new certificates to `public/`

### Backup Strategy

1. **Code Repository**
   - GitHub serves as primary backup
   - Consider GitLab mirror for redundancy

2. **Assets**
   - Store original images separately
   - Backup certificates and documents
   - Version control all content

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and rebuild
   rm -rf .next
   npm run build
   ```

2. **Image Loading Issues**
   - Check image paths in `public/`
   - Verify Next.js Image configuration
   - Ensure proper file formats

3. **Performance Issues**
   - Run Lighthouse audit
   - Check bundle analyzer: `npm run build:analyze`
   - Optimize images and assets

### Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Issues](https://github.com/arunpandian9159/arun-portfolio/issues)

---

For additional support or questions, contact: arunpandiancse25@gmail.com