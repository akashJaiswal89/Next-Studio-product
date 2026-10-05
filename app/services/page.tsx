import Link from "next/link";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../data/services";

export const metadata = {
  title: "Photography Studio Setup Services",
  description: "Automatic and manual backdrop changers, chroma backgrounds, lighting and studio setup support from Tanisa Enterprises.",
};

export default function Services() {
  return <main>
    <section className="page-hero"><div className="container">
      <div className="breadcrumb"><Link href="/">Home</Link> / Services</div>
      <div className="eyebrow">From equipment to installation</div>
      <h1>Photography Studio Setup Services</h1>
      <p className="muted">Automatic and manual backdrop systems, chroma backgrounds and practical setup support for your studio. Tell us about your space and we will help you choose the equipment.</p>
    </div></section>
    <section className="section"><div className="container grid3 services-grid">
      {services.map(service => <ServiceCard key={service.name} service={service} />)}
    </div></section>
    <section className="section soft"><div className="container"><div className="cta">
      <div className="eyebrow">Institutional & Bulk Requirements</div>
      <h2>Planning a studio or media setup?</h2>
      <p>Share your room size, preferred backdrop colours and equipment requirements so we can help plan your setup.</p>
      <Link className="btn primary" href="/contact">Talk to Tanisa Enterprises →</Link>
    </div></div></section>
  </main>;
}
