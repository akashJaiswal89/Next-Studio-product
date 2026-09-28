# Tanisa Enterprises — Next.js Static SEO Website

A static-export Next.js website for Tanisa Enterprises.

## Run
```bash
npm install
npm run dev
```

## Production static build
```bash
npm run build
```
The exported static site is generated in `out/`.

## Edit products
All categories and products live in `data/products.ts`. Product/category images are under `public/assets/`.

## Important before launch
- Replace the WhatsApp number used in the product/contact CTAs if it differs from the actual business number.
- Replace the domain in `app/sitemap.ts` and `app/robots.ts` with the final production domain.
- Product and contact enquiries open WhatsApp with a pre-filled enquiry message containing the selected product title where applicable.


## Image licensing note
The product/category visuals in this build were generated specifically for this project rather than copied from a third-party stock library. The supplied Tanisa Enterprises logo is the client-provided asset.
