
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
export default function Footer(){
 return <footer className="footer"><div className="container footer-grid">
  <div><div style={{background:"#fff",borderRadius:10,padding:"6px 10px",width:230}}><img src="/assets/logo-photo-video.webp" alt="Tanisa Enterprises - Photo and Video Equipment" style={{width:210,height:65,objectFit:"contain",objectPosition:"left"}}/></div><p>Wholesale photography instruments and studio equipment for retailers, resellers, studios, institutions and professional creators.</p></div>
  <div><h3>Quick Links</h3><p><Link href="/">Home</Link><br/><Link href="/products">Products</Link><br/><Link href="/services">Services</Link><br/><Link href="/about">About Us</Link><br/><Link href="/contact">Contact</Link></p></div>
  <div><h3>Contact Us</h3><p>For product enquiries, wholesale orders and customization requirements.</p><a className="btn" href="https://wa.me/918076900434?text=Hello%20Tanisa%20Enterprises%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20photography%20equipment%20products." target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a></div>
  <div className="footer-connect">
   <h3>Visit &amp; Follow</h3>
   <div className="footer-connect-links">
    <a className="footer-connect-card footer-location" href="https://maps.app.goo.gl/twHdqgdyUUHGCgMU8?g_st=iw" target="_blank" rel="noopener noreferrer">
     <span className="footer-connect-icon"><MapPin size={20} aria-hidden="true" /></span>
     <span className="footer-connect-copy">
      <strong>Visit our store</strong>
      <span className="footer-street-address">D3/6A, near Lakkarpur Railway Crossing,<br />Shiv Durga Vihar, Faridabad</span>
      <span className="footer-directions">Get directions<span className="sr-only"> on Google Maps (opens in a new tab)</span></span>
     </span>
     <ArrowUpRight className="footer-connect-arrow" size={16} aria-hidden="true" />
    </a>
    <a className="footer-connect-card footer-instagram" href="https://www.instagram.com/tanisa_enterprises_?cplk=MTUzMWpucmxnYW5yNA==" target="_blank" rel="noopener noreferrer" aria-label="Follow @tanisa_enterprises_ on Instagram (opens in a new tab)">
     <span className="footer-connect-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></span>
     <span className="footer-connect-copy"><strong>Instagram</strong><span>@tanisa_enterprises_</span></span>
     <ArrowUpRight className="footer-connect-arrow" size={16} aria-hidden="true" />
    </a>
   </div>
  </div>
 </div><div className="container copyright">© 2026 Tanisa Enterprises. All rights reserved. · Made in India</div></footer>
}
