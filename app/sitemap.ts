
import {MetadataRoute} from "next";
import {products,categories} from "../data/products";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{
 const base="https://www.tanisaenterprises.com";
 return [
  "", "/products","/services","/about","/contact",
  ...categories.map(c=>`/categories/${c.slug}`),
  ...products.map(p=>`/products/${p.slug}`)
 ].map(path=>({url:base+path,lastModified:new Date(),changeFrequency:"monthly",priority:path===""?1:.7}));
}
