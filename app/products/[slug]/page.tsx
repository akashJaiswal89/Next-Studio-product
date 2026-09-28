import {notFound} from "next/navigation";
import Link from "next/link";
import {products} from "../../../data/products";

const WHATSAPP_NUMBER="918076900434";

export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(x=>x.slug===slug);return p?{title:p.name,description:p.description}:{title:"Product"}}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const p=products.find(x=>x.slug===slug);
 if(!p)notFound();
 const message=`Hello Tanisa Enterprises, I am interested in ${p.name}. Please share the wholesale details, availability and customization options.`;
 const whatsapp=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
 return <main>
  <section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/products">Products</Link> / {p.name}</div><h1>{p.name}</h1></div></section>
  <section className="section"><div className="container split">
   <div className="large-img"><img src={p.image} alt={p.name}/></div>
   <div><span className="tag">{p.category}</span><h2>{p.name}</h2><p className="muted">{p.description}</p>
    <div className="product-enquiry"><strong>Need a different specification?</strong><p>Tell us your required size, colour, configuration, quantity or other customization where applicable, and we can discuss the available options.</p></div>
    <a className="btn primary whatsapp-btn" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a>
   </div>
  </div></section>
 </main>
}
