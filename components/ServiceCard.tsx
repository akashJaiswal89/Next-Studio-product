import { MessageCircle, Phone } from "lucide-react";
import type { StudioService } from "../data/services";

export default function ServiceCard({ service }: { service: StudioService }) {
  const message = `Hello Tanisa Enterprises, I am interested in ${service.name}. Please share the options, installation details and a quotation.`;
  return (
    <article className="card service-card">
      <div className="card-img"><img src={service.image} alt={service.name} width={1200} height={800} loading="lazy" decoding="async" /></div>
      <div className="card-body">
        <span className="service-category">{service.category}</span>
        <h3>{service.name}</h3>
        <p className="muted">{service.description}</p>
        <div className="product-actions">
          <a className="btn whatsapp-btn" href={`https://wa.me/918076900434?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label={`Enquire on WhatsApp about ${service.name}`}>
            <MessageCircle aria-hidden="true" /> WhatsApp
          </a>
          <a className="btn call-btn" href="tel:+918076900434" aria-label={`Call about ${service.name}`}>
            <Phone aria-hidden="true" /> Call
          </a>
        </div>
      </div>
    </article>
  );
}
