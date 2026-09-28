
import ProductCard from "../../components/ProductCard";
import {products} from "../../data/products";
export const metadata={title:"Photography Equipment Products",description:"Browse Tanisa Enterprises photography equipment, studio backdrops, lights, stands and backdrop accessories."};
export default function Products(){return <main><section className="page-hero"><div className="container"><div className="breadcrumb">Home / Products</div><h1>Photography Equipment Products</h1><p className="muted">Browse our wholesale catalogue across backdrops, backdrop accessories, lights and stands.</p></div></section><section className="section"><div className="container"><div className="product-grid">{products.map(p=><ProductCard key={p.slug} p={p}/>)}</div></div></section></main>}
