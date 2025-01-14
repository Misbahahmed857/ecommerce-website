
import Hero from "@/components/Hero";
// import FontShowcase from "@/components/Retangle";
// import NewArivel from "../components/arrivals";
//import BestSelling from "../components/Selling";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/Customer";
import Products from "./products/page";
import Fonts from "@/components/ui/fonts";
// import Top_sell from "./product/sell";


export default function Home() {
  return (
   <div>
   
    <Hero/>
    {/* <FontShowcase/> */}
    {/* <NewArivel/>
    <BestSelling/> */}
    <Fonts />
    <Products/>
    <Dress/>
    <CustomerCarousel/>
    
   </div> 
  );
}