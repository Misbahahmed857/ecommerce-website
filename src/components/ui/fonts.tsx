import {Playfair_Display,Cinzel, Bodoni_Moda, Prata,Montserrat} from "next/font/google"
const Playfair = Playfair_Display({subsets:["latin"]});
const Cinze = Cinzel ({subsets:["latin"]});
const Badoni = Bodoni_Moda ({subsets:["latin"]});
const Prat = Prata ({subsets:["latin"],weight:"400"});
const Montserra = Montserrat({subsets:["latin"]});
    
export default function Fonts () {
    return(
        <div className=" bg-[#000000] w-full
h-[122px] flex space-x-4 justify-center md:justify-between items-center px-6 flex-wrap  ;

">
            <h1 className={`${Playfair.className} text-white text-2xl md:text-4xl`}>VERSACE</h1>
            <h1 className={`${Cinze.className} text-white text-2xl md:text-4xl`}>ZARA</h1>
            <h1 className={`${Badoni.className} text-white text-2xl md:text-4xl`}>GUCCI</h1>
            <h1 className={`${Prat.className} text-white text-2xl md:text-4xl`}>PRADA</h1>
            <h1 className={`${Montserra.className} text-white text-2xl md:text-4xl`}>Calvin Klein</h1>
        </div>
    )
}