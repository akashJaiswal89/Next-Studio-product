
import {notFound} from "next/navigation";
import Link from "next/link";
import ProductCard from "../../../components/ProductCard";
import {categories,products} from "../../../data/products";
export function generateStaticParams(){return categories.map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=categories.find(x=>x.slug===slug);return c?{title:`${c.name} Wholesale`,description:c.description}:{title:"Category"}}
export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=categories.find(x=>x.slug===slug);if(!c)notFound();const ps=products.filter(p=>p.categorySlug===c.slug);return <main><section className="page-hero"><div className="container"><div className="breadcrumb"><Link href="/products">Products</Link> / {c.name}</div><h1>{c.name}</h1><p className="muted">{c.description}</p></div></section><section className="section"><div className="container"><div className="product-grid">{ps.map(p=><ProductCard key={p.slug} p={p}/>)}</div></div></section></main>}
