import { Phone } from "lucide-react";
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
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.88 9.88 0 0 1-1.52-5.26c0-5.47 4.45-9.91 9.92-9.91a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.91-9.93 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.28-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/></svg> WhatsApp
          </a>
          <a className="btn call-btn" href="tel:+918076900434" aria-label={`Call about ${service.name}`}>
            <Phone aria-hidden="true" /> Call
          </a>
        </div>
      </div>
    </article>
  );
}
