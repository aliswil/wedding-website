import React from "react";

function Info() {
  return (
    <div
      id="info"
      className="bg-[#e2ddd6] pt-28"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex items-center justify-center ">
      <div className=" text-gray-600 z-[2] pt-20 pb-20 m-3.5">
        <h2 className=" text-6xl sm:text-7xl font-light font-display">Overnatting</h2>
        <p className="py-5 text-xl font-display">For deg som ikke har funnet overnatting kan denne siden være til hjelp. Minner om 15% på hotellrom på Hotell Terminus. Minner også om at prisen stiger jo nærmere datoen vi kommer. Oppdatering fra hotellet sier også at hotellet begynner bli mer eller mindre fullt denne helgen. Zander K (du finner mer info  i slides), ligger bare et steinkast fra hotellet og kan være et godt alternativ i nærheten. Ta kontakt om du har problem med overnatting! 
</p>
       
        <h2 className=" text-6xl sm:text-7xl font-light font-display pb-5">Parkering og transport</h2>
        <h3 className="py-5 text-2xl font-display"> <p className=" font-bold">Hotell terminus (fredag og lørdag)</p> Zander Kaaes gate 6, 5015 Bergen.</h3>
        <h3 className="py-5 text-xl font-display"> <p className=" font-bold">Beliggenhet:</p> Hotellet ligger rett ved jernbanestasjonen og bystasjonen. Holdeplass bybane (Nonneseter), og taxi er like i nærheten. Nærmeste parkeringshus er ByGarasjen. Det er gangsavstand til byens mange attraksjoner.</h3>
        <h3 className="py-5 text-xl font-display"> <p className=" font-bold">Reisen hit:</p> Fra Flesland: Bybane til Nonneseter. Gåavstand 100 meter. Flybuss til Bystasjonen: Gåavstand 300 meter. Fra Bergen jernbanestasjon. Gåavstand 20 meter. Fra Strandkaiterminalen: Gåavstand 1 km. Taxiholdeplass på kaiområdet. Fra Hurtigruteterminalen: Gåavstand 1,3 km. Taxi ved bestilling. Bergen taxi tlf nr: 07000. Med bil: Ved bestilling på nett kan du booke parkeringsplass i vår garasje på hotellet dersom vi har ledig kapasitet. Nærmeste parkeringshus er ByGarasjen (gjester på Terminus får her 15% rabatt).”
</h3> 
        <div className="flex flex-col">
          <a href="https://www.grandterminus.no/om-hotellet/" className="font-display underline pb-5 hover:text-sky-900">Fra Hotell Terminus sine nettsider</a>
        <a href="https://bergenparkering.no/anlegg/bygarasjen/" className="font-display underline hover:text-sky-900">Link til Bygarasjen </a>
        </div>
  
          

        <h3 className="py-5 text-2xl font-display pt-10"><p className=" font-bold">Mariakirken</p>Dreggsallmenningen 15, 5003 Bergen.</h3>

        <p className="py-5 text-xl font-display"> Fra Mariakirken til hotell Terminus er det en gåavstand på ca. 15 minutter. </p>
        <p className="py-5 text-xl font-display"> Ved behov for taxi: 07000. </p>
        <div className="flex flex-col"><a href="https://www.google.com/maps/place/Mariakirken/@60.3988974,5.3186393,17z/data=!4m10!1m2!2m1!1smariakirken!3m6!1s0x463cfc1d8d23ff93:0x92c93347c52f8d90!8m2!3d60.3988974!4d5.3234029!15sCgttYXJpYWtpcmtlbloNIgttYXJpYWtpcmtlbpIBBmNodXJjaOABAA!16s%2Fm%2F03hg_88" className=" underline font-display pb-5 hover:text-sky-900">Link til kart
</a>
        <a href="https://www.google.com/search?q=parkering+bryggen&tbm=lcl&ei=frQ7ZOXjNcCQxc8Pn5Cn8AM&ved=0ahUKEwjlmpS3gK7-AhVASPEDHR_ICT4Q4dUDCAg&uact=5&oq=parkering+bryggen&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEANQAFgAYPECaABwAHgAgAEAiAEAkgEAmAEAwAEB&sclient=gws-wiz-local#rlfi=hd:;si:;mv:[[60.4000537,5.3256634],[60.396233,5.3217151]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:3" className=" underline font-display hover:text-sky-900">Link til parkeringer ved Mariakirken
</a></div>
        
        <h2 className=" text-6xl sm:text-7xl font-light font-display pt-10">Dresscode</h2>
        <p className="py-5 text-4xl font-display">Pent. Det er sommer - farger, mønstre, alt er lov. Du kommer i det du føler deg vel i.
</p>
      </div>
      </div>
    </div>
  );
}

export default Info;