import React from "react";


import Image from "next/image";
import wakay from "../../public/wakay.jpg";

function Giftlist() {

  return (
    <div
      id="giftlist"
      className="bg-[#efe8db] pt-20"
    >
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex items-center justify-center" >
        <div className="text-gray-600 z-[2] pt-20 pb-20 m-3.5">
        <h2 className=" text-6xl sm:text-7xl font-light font-display">
          Gaveønsker
        </h2>
        <p className="py-5 text-xl font-display">Vi ønsker oss aller helst at du/dere kommer i bryllupet våres. Vi er heldige som har det meste vi trenger, men hvis du vil gi oss noe så ønsker vi oss bidrag til bryllupsreise og el-sykkel. Vi har lyst til å dra på bryllupsreise i desember når Sivert har fri, ellers ønsker vi oss el-sykkel med lastekasse, slik at Bo kan bli et skikkelig ‘kassebørn’.
</p>        
        <p className="py-5 text-xl font-display">Et vipps-nummer vil bli gitt til dagen.
</p>    
<Image
              className=""
              src={wakay}
              alt=""
              layout=""
              objectFit=""
            />
</div>
       </div>
    </div>
  );
}

export default Giftlist;