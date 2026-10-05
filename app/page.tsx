
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import {categories,products} from "../data/products";
const WHATSAPP_NUMBER="918076900434";

export default function Home(){
 const featured=products.slice(0,8);
 return <>
 <main>
  <section className="hero"><div className="ml-4 lg:ml-20 hero-grid"><div>
    <div className="eyebrow hero-brand">Tanisa Enterprises</div><h1 className="text-[30px] lg:text-[40px]">Photography & Studio Equipment <span>for Every Professional.</span></h1>
    <p className="hidden lg:block">Manufacturer, retailer and wholesaler of photography and studio equipment. From backdrops and lighting to essential accessories, we equip studios, businesses, institutions and creators across India.</p>
    <div className="stats"><div className="stat">✓ Manufacturer, retailer & wholesaler</div><div className="stat">✓ Quality equipment & support</div><div className="stat">✓ Retail and bulk orders</div></div>
  <div className="product-actions mr-4">
      <a className="btn whatsapp-btn"  href="https://wa.me/918076900434?text=Hello%20Tanisa%20Enterprises%2C%20I%20would%20like%20to%20enquire%20about%20photography%20and%20studio%20equipment." target="_blank" rel="noopener noreferrer">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.88 9.88 0 0 1-1.52-5.26c0-5.47 4.45-9.91 9.92-9.91a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.91-9.93 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/></svg>
      Enquire
     </a>
     <a className="btn call-btn" href={`tel:${WHATSAPP_NUMBER}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.19 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z"/></svg>
      Call
     </a>
    </div>
  </div></div></section>

  <ProjectsCarousel />

  <section className="section" aria-labelledby="categories-heading"><div className="container"><div className="catalogue-heading"><div><div className="eyebrow">Find your studio essentials</div><h2 id="categories-heading">Shop by Category<span>.</span></h2><p>Build your setup, one essential at a time. Explore backdrops, lighting and the supports that bring every shoot together.</p></div><Link className="catalogue-link" href="/products">View all products <ArrowRight size={16} aria-hidden="true" /></Link></div>
   <div className="grid4 category-grid">{categories.map(c=><Link className="category-card" href={`/categories/${c.slug}`} key={c.slug}><div className="category-image"><img src={c.image} alt={c.name} loading="lazy"/><span className="category-count">{c.count} products</span></div><div className="category-body"><h3>{c.name}</h3><p>{c.description}</p><div className="category-footer">Explore collection <span><ArrowUpRight size={18} aria-hidden="true" /></span></div></div></Link>)}</div>
  </div></section>

  <section className="section catalogue-section" aria-labelledby="products-heading"><div className="container"><div className="catalogue-heading"><div><div className="eyebrow">Equipment behind every great shoot</div><h2 id="products-heading">Our Products<span>.</span></h2><p>From your first backdrop to a complete studio, discover equipment for portraits, product photography and video production.</p></div><Link className="catalogue-link" href="/products">Browse catalogue <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="product-grid">{featured.map(p=><ProductCard key={p.slug} p={p}/>)}</div></div></section>

  <section className="section"><div className="container"><div className="catalogue-heading"><div><div className="eyebrow">Bring your studio to life</div><h2>Studio Setup Services<span>.</span></h2><p>From equipment selection to installation, we help studios, classrooms and broadcast teams create a space ready for production.</p></div><Link className="catalogue-link" href="/services">View services <ArrowRight size={16} aria-hidden="true" /></Link></div>
   <div className="grid3 services-grid">{services.slice(0,6).map(service => <ServiceCard key={service.name} service={service} />)}</div>
  </div></section>

 </main></>
}
