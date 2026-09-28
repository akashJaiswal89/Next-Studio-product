export const metadata={title:"Contact Tanisa Enterprises",description:"Enquire with Tanisa Enterprises on WhatsApp for photography equipment wholesale, bulk orders and customization requirements."};

const WHATSAPP_NUMBER="918076900434";
const message="Hello Tanisa Enterprises, I would like to enquire about your photography equipment products. Please share the wholesale details, availability and customization options.";
const whatsapp=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function Contact(){return <main><section className="page-hero"><div className="container"><div className="breadcrumb">Home / Contact</div><h1>Enquire with Tanisa Enterprises</h1><p className="muted">For product availability, wholesale requirements, bulk orders and customization, contact us directly on WhatsApp.</p></div></section><section className="section"><div className="container"><div className="contact-box" style={{maxWidth:700,margin:"0 auto",textAlign:"center"}}><div className="eyebrow">WhatsApp Enquiry</div><h2>Let's discuss your requirement.</h2><p className="muted">Send your product name, required quantity, size, colour, configuration or other customization requirements directly on WhatsApp.</p><a className="btn primary whatsapp-btn" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a></div></div></section></main>}
