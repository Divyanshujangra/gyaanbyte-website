# Deployment Guide for GyaanByte Labs Website

## Vercel Deployment Setup

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect Repository to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project

### Step 3: Configure Environment Variables (CRITICAL!)
Before deploying, you MUST add the Web3Forms API key:

1. In Vercel project settings, go to **"Environment Variables"**
2. Add the following variable:
   - **Name:** `VITE_WEB3FORMS_KEY`
   - **Value:** `944e4bd4-2bb9-4b37-9602-d49123049dcf`
   - **Environments:** Check all (Production, Preview, Development)

3. Click "Save"

### Step 4: Deploy
- Click "Deploy"
- Vercel will build and deploy your site
- Your site will be live at: `https://your-project-name.vercel.app`

### Step 5: Verify Contact Form
After deployment:
1. Visit your live site
2. Go to Contact page
3. Submit a test form
4. Check if you receive the email at your configured address

---

## Important Notes

### Environment Variables
- Never commit `.env` files to GitHub (already in `.gitignore`)
- Always add environment variables in Vercel dashboard
- If you add more environment variables later, add them to Vercel too

### Custom Domain (Optional)
To use `www.gyaanbytelabs.com`:
1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Build Settings (Auto-configured by Vercel)
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

---

## Troubleshooting

### Contact Form Not Working
**Symptom:** Form submits but no email received

**Solution:**
1. Check Vercel environment variables are set correctly
2. Verify `VITE_WEB3FORMS_KEY` exists in environment variables
3. Check Web3Forms dashboard for submission logs
4. Re-deploy after adding environment variables

### Build Failures
**Symptom:** Deployment fails during build

**Solutions:**
1. Check build logs in Vercel dashboard
2. Ensure `package.json` dependencies are correct
3. Try building locally: `npm run build`
4. Check for TypeScript/ESLint errors

### 404 Errors on Routes
**Symptom:** Direct navigation to routes like `/about` gives 404

**Solution:**
- Vercel auto-configures SPA routing for Vite/React
- If issues persist, create `vercel.json` with rewrites (see below)

---

## Optional: vercel.json Configuration

Create `vercel.json` in project root if needed:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all routes work correctly in production.

---

## Quick Reference

### Web3Forms API Key
```
VITE_WEB3FORMS_KEY=944e4bd4-2bb9-4b37-9602-d49123049dcf
```

### Vercel CLI (Optional)
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Post-Deployment Checklist

- [ ] Environment variables configured in Vercel
- [ ] Site deployed successfully
- [ ] All pages load correctly
- [ ] Contact form sends emails
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (auto by Vercel)
- [ ] Test on mobile devices
- [ ] Check Google Search Console
- [ ] Submit sitemap to search engines

---

**For support:** Contact Vercel support or check [Vercel Documentation](https://vercel.com/docs)
