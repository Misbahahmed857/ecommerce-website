
import Hero from "@/components/Hero";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/Customer";
import Fonts from "@/components/ui/fonts";
 import Toastity from "@/components/addtocart";
import NewArrival from "./product/newArrival";
import TopSelling from "./product/topSell";





export default function HomePage() {
  return (
   <div>
   
    <Hero/> 
    <Fonts />
   <NewArrival />
  <TopSelling />
    <Toastity />
    <Dress/>
    <CustomerCarousel/>
    
   </div> 
  );
}