# 🚀 Deployment Checklist

## Pre-Deployment Checks

### ✅ Local Testing
- [ ] `npm run lint` - No linting errors
- [ ] `npm run typecheck` - No TypeScript errors  
- [ ] `npm run build` - Build succeeds
- [ ] `npm run dev` - App runs locally

### ✅ Code Quality
- [ ] All imports use correct paths (`@/lib/content-loader`)
- [ ] No unused variables (check ESLint warnings)
- [ ] All property names match interfaces
- [ ] No `import.meta` usage in client code

### ✅ Content Validation
- [ ] All plant files have required properties
- [ ] All remedy files have required properties
- [ ] No broken links in content
- [ ] Images exist and are accessible

## Deployment Steps

### 1. Commit & Push
```bash
git add .
git commit -m "feat: [description of changes]"
git push origin main
```

### 2. Monitor CI
- [ ] GitHub Actions passes ✅
- [ ] Vercel deployment starts
- [ ] Build completes successfully

### 3. Post-Deployment
- [ ] Check live site: https://www.plantich.com/
- [ ] Test key pages:
  - [ ] Homepage
  - [ ] Plant pages (`/plants/ashwagandha`)
  - [ ] Remedy pages (`/remedies/anxiety`)
  - [ ] Search functionality
  - [ ] API endpoints

## Troubleshooting

### Build Fails
1. **Check Vercel logs** for specific errors
2. **Run locally**: `npm run build`
3. **Clear cache**: `rm -rf .next && npm run build`
4. **Check imports**: Ensure all use `@/lib/content-loader`

### TypeScript Errors
1. **Property not found**: Check interface definitions
2. **Import errors**: Verify path aliases in `tsconfig.json`
3. **Module not found**: Ensure barrel files export correctly

### Runtime Errors
1. **Check browser console** for client-side errors
2. **Check Vercel function logs** for API errors
3. **Verify environment variables** are set in Vercel

## Emergency Rollback
```bash
# Revert to last working commit
git revert HEAD
git push origin main
```

## Performance Monitoring
- [ ] Check Core Web Vitals in Vercel Analytics
- [ ] Monitor API response times
- [ ] Check for memory leaks in long-running functions

## Security Checklist
- [ ] No sensitive data in client code
- [ ] Environment variables properly set
- [ ] API routes have proper validation
- [ ] No console.log statements in production
