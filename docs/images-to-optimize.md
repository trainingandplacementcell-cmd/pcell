public/home/home3.png
public/home/home2.png
public/home/home1.png
public/home/placement.webp
public/home/traning.webp
public/event/compito1.png
public/event/event4.webp
public/event/drive2.jpeg
public/event/drive1.png
public/event/workshop2.png
public/event/workshop1.png
public/event/seminar2.webp
public/event/seminar1.jpeg
public/event/prospect1.jpeg
public/teachers/varun.jpeg
public/teachers/richa.jpeg
public/teachers/dipak.jpeg
public/teachers/shraddha.jpeg
public/teachers/nidhi.jpg
public/teachers/rohit.jpg
public/teachers/ashani.jpg
public/teachers/ankit.jpg
public/teachers/pranav.jpg
public/teachers/kanika.jpg
public/teachers/pawan.jpg
public/teachers/nidhijain.jpg
public/teachers/Megha.jpg
public/recurit/rec3.jpg
public/recurit/rec2.webp
public/recurit/rec1.webp
public/team.png
public/carouselmaker_image_3.png
public/carouselmaker_image_2.png
public/carouselmaker_image_1.png
public/slccutout.png
public/home/3.png
public/home/2.png
public/home/1.png
public/home/placement.webp
public/home/traning.webp
public/avatar.png
public/pcell.webp
public/aboutlogo/ca.png
public/aboutlogo/ijaipuria.jpeg
public/aboutlogo/upriver.png
public/aboutlogo/rupeek.png
public/aboutlogo/carehealth.png
public/aboutlogo/HCLTECH.png
public/aboutlogo/Zomato.png
public/aboutlogo/Tata_Consultancy_Services.png
public/aboutlogo/EY.png
public/aboutlogo/Deloitte.png
public/aboutlogo/Tech Mahindra.png
public/teachers/nidhijain.jpg
public/teachers/Megha.jpg
public/logo/18.png
public/logo/17.png
public/logo/16.png
public/logo/15.png
public/logo/14.png
public/logo/13.png
public/logo/12.png
public/logo/11.png
public/logo/10.png
public/logo/9.png
public/logo/8.png
public/logo/7.png
public/logo/6.png
public/logo/5.png
public/logo/4.png
public/propgrow.png
public/colleges.png
public/shyamlal.png
public/event/event3.JPG
public/event/event2.JPG
public/event/event1.jpg

## How to implement image optimization (step-by-step)
- Target routes: static prerendered pages: /, /_not-found, /about, /admin, /admin/login, /drive, /events, /recruiter, /team
- Goal: convert key images to Next/Image without altering visuals; serve modern formats; preserve aspect ratios; enable lazy loading where appropriate.

### 1) Plan and identify priority images
- Open the list in this file and mark high-visibility images (hero, banners, logos, grid/gallery items).
- Start with 2–3 high-traffic pages (e.g., home, about, drive).

### 2) Convert images on a page to Next/Image (patch-ready example)
- Before (example):
```
<img src="/home/placement.webp" alt="Placement" width={1200} height={600} />
```
- After (example):
```js
import Image from 'next/image';
<Image src="/home/placement.webp" alt="Placement" width={1200} height={600} priority />
```
- Patch you can apply (illustrative):
```diff
*** Begin Patch
*** Update File: app/home/home.tsx
- <img src="/home/placement.webp" alt="Placement" width={1200} height={600} />
> +import Image from 'next/image';
> +<Image src="/home/placement.webp" alt="Placement" width={1200} height={600} priority />
*** End Patch
```

### 3) Apply to other images on static pages
- Repeat the above conversion for hero images, gallery items, logos, and inline illustrations.
- Use loading="lazy" or Next/Image default lazy behavior for non-critical assets.

### 4) Update Next.js configuration for images
- Update next.config.js to enable modern formats and edge optimization:
```js
// next.config.js (illustrative snippet)
module.exports = {
  images: {
    domains: ["your-domain.com", "images.example.com"],
    deviceSizes: [320, 420, 768, 1024, 1280],
    formats: ["image/avif", "image/webp", "image/jpeg"],
  },
};
```

### 5) Consider ISR for static pages with dynamic data
- If some static pages fetch data that can be cached, add:
```js
export const revalidate = 60; // seconds
```

### 6) Validation and testing
- Build locally: `npm run build`.
- Validate image loads: ensure browsers supporting WebP/AVIF fetch modern formats.
- Check for CLS and LCP improvements with Lighthouse.
- Enable Vercel Web Vitals analytics and compare before/after.

### 7) Rollout plan
- Phase 1: convert home/about/drive; Phase 2: remaining static routes.
- Use canary deployments to verify metrics before production rollout.

### 8) Accessibility notes
- Maintain alt text; decorative images may use empty alt if they convey no content.

If you want, I can generate per-page patches for all static routes you listed. Let me know which pages to start with.

## Next/Image best practices (specifics)
- Use Next/Image for all large/hero assets on app routes. It automatically serves AVIF/WebP when supported.
- Prefer explicit width/height for important images; use priority for above-the-fold visuals.
- For responsive images, use the wrapper with fill or use the sizes/width/height approach.
```tsx
import Image from 'next/image';
export default function Hero() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '56.25vw', maxHeight: '420px' }}>
      <Image src="/home/placement.webp" alt="Placement" fill style={{ objectFit: 'cover' }} priority />
    </div>
  );
}
```
- Use loading behavior: priority for critical, lazy for non-critical. In Next/Image, lazy is default; use priority only on essential images.
- If using dynamic routes with ISR, ensure the images render within the static content.
- Update next.config.js: enable formats ["image/avif", "image/webp"], add domains if using external hosts:
```js
module.exports = {
  images: {
    domains: ["your-domain.com","images.example.com"],
    formats: ["image/avif", "image/webp", "image/jpeg"],
    deviceSizes: [320, 420, 768, 1024, 1280],
  },
};
```
- Testing: verify Web Vitals via Lighthouse, ensure no CLS regressions, check browser support for AVIF/WebP.
