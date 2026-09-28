
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata = {
 title:{default:"Tanisa Enterprises | Wholesale Photography Equipment in India",template:"%s | Tanisa Enterprises"},
 description:"Tanisa Enterprises supplies photography and studio equipment wholesale in India, including backdrops, backdrop accessories, lights and stands.",
 keywords:["photography equipment wholesale India","studio backdrops wholesale","camera accessories Delhi","studio lights wholesale","photography stands","Tanisa Enterprises"],
 openGraph:{title:"Tanisa Enterprises | Wholesale Photography Equipment",description:"Photography instruments and studio equipment for retailers, studios, institutions and professional creators.",type:"website"},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
