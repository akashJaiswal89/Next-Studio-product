
import Link from "next/link";
export default function Footer(){
 return <footer className="footer"><div className="container footer-grid">
  <div><div style={{background:"#fff",borderRadius:10,padding:"6px 10px",width:230}}><img src="/assets/logo.jpg" alt="Tanisa Enterprises" style={{width:210,height:65,objectFit:"contain",objectPosition:"left"}}/></div><p>Wholesale photography instruments and studio equipment for retailers, resellers, studios, institutions and professional creators.</p></div>
  <div><h3>Quick Links</h3><p><Link href="/">Home</Link><br/><Link href="/products">Products</Link><br/><Link href="/services">Services</Link><br/><Link href="/about">About Us</Link><br/><Link href="/contact">Contact</Link></p></div>
  <div><h3>Contact Us</h3><p>For product enquiries, wholesale orders and customization requirements.</p><a className="btn" href="https://wa.me/918076900434?text=Hello%20Tanisa%20Enterprises%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20photography%20equipment%20products." target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a></div>
  
 </div><div className="container copyright">© 2026 Tanisa Enterprises. All rights reserved. · Made in India</div></footer>
}
