import React from "react";
import Image from "next/image";
import historiebryllupet from "../../public/historiebryllupet.jpeg";
import historiehallopaado from "../../public/historiehallopaado.jpeg";
import historievoldaivaarehjerter from "../../public/historievoldaivaarehjerter.jpeg";

function History() {
  return (
    <div
      id="history"
      className="bg-[#EDEDE9]"
    >
      <div className="w-full max-w-screen-sm mx-auto p-4 md:py-8 flex items-center justify-center">
      <div className="p-5 text-gray-600 z-[2] pt-20 pb-20">
        <h2 className=" text-6xl sm:text-7xl font-display pb-10">Litt historie</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            
            <h3 className="text-lg font-semibold text-gray-800 font-display">
              Volda i våre hjerter
            </h3>
            <p className="mb-4 text-base font-display text-gray-500">
              Vi må tilbake til Volda for å forstå hvor det hele startet. Volda
              er Siverts hjemsted, men også hvor Henriette studerte
              journalistikk fra 2011-2014. 17.mai 2012 var Henriette med sine
              venninner Amalie og Cecilie på Det Grøne Treet i Volda for å feire
              nasjonaldagen. Henriette var kledd i hallingbunad fra topp til tå.
              Denne dagen skulle tilfeldigvis også den lokale fotballhelten
              Sivert komme forbi Treet. Der ble hallingtausen beundret på
              avstand da forholdene på dette tidspunktet ikke lå til rette for
              et hei. Bilde av Henriette i hallingbunad ble derfor værende på
              netthinna. Over et år senere skulle Sivert skrive seg inn i
              Henriettes hjerte for godt. Høsten 2013 bidro kongen av Volda
              (Rasmus) og Stig til at Henriette og Sivert skulle møtes igjen. På
              Årneset beach kom det første "Hei-et" etterfulgt av et "Hallo" på
              Studenthuset Rokken samme kveld. Resten skriver vi ikke her, men
              stemningen ble etterhvert ganske god om man kan si det sånn. Etter
              at Henriette hadde sneket seg inn i Porsemyrvegen over en periode,
              samt kastet blomster på vinduet til Sivert for å oppnå kontakt på
              nattestid (før hun lærte at fotballspillere sover på natten), og
              vært gjennom enkelte misforståelser og uenigheter om når egentlig
              forholdet startet, så ble de altså kjærester
            </p>
            <Image
              className="object-scale-down md:h-auto md:max-w-lg"
              src={historievoldaivaarehjerter}
              alt=""
              layout=""
              objectFit=""
            />
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            
            <h3 className="text-lg font-semibold text-gray-800 font-display">
              Hallo på do
            </h3>
            <p className="text-base font-display text-gray-500  mb-4">
              Året var 2020. Måneden var februar. Henriette og Sivert hadde
              kjent hverandre lenge nå. Covid ulmet, oppkjøring til
              fotballsesongen i Elfsborg IF var godt i gang og Henriette og
              Sivert var inne i sitt 2. år med avstandsforhold. Sivert hadde på
              dette tidspunktet anskaffet seg en ring, og tanken om giftemål var
              et faktum. Sivert og Henriette hadde booket en tur til Roma og
              skulle fly fra Gøteborg. Henriette ankom derfor fra Bergen og
              skulle tilbringe en natt sammen med Sivert i leiligheten hans i
              Borås før avreisen til Roma påfølgende dag. Dette satte nervene
              til Sivert i helspenn og han ble fort utålmodig med frieriet. Da
              de ankom leiligheten skulle Sivert ut å kjøpe pepsi max kl.22 selv
              om Henriette ikke var nevneverdig keen på dette. Sånn ble det
              uansett, og Henriette så sitt snitt til å ta seg en tur på
              toalettet for å lette på reisemagen, selvsagt med døren åpen. 5
              minutter senere kom Sivert inn døren, møtt av Henriettes "NEEI",
              da hun åpenbart trodde hun hadde leiligheten og toalettet for seg
              selv. Dette stoppet ikke Sivert, og med "Jeg fant ikke pepsi, men
              jeg fant denne", gikk han ned på kne med ringen i hånda foran
              Henriette på doskåla. Etter Henriette fikk vurdert om hun skulle
              reise seg eller tørke seg, kom det et rungende ja sammen med et
              lite blodtrykksfall. Henriette hadde aldri sett for seg et frieri,
              men dette var helt i hennes gate. Det har dessverre gått 3 altfor
              lange år, men nå er dagen endelig kommet hvor Sivert og Henriette
              skal feire kjærligheten sammen med dere. Gleden er på størrelse
              med stemningen på toalettet i Borås i 2020.
            </p>
            <Image
              className="object-scale-down md:h-auto md:max-w-lg"
              src={historiehallopaado}
              alt=""
              layout=""
              objectFit=""
            />
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-800 font-display">
              Bryllup i Bergen
            </h3>
            <p className="text-base font-display text-gray-500 mb-4">
              Juni kan jo av og til bringe med seg finvær til Bergen, og det har
              vi også klokketro på bryllupsdagen. Uansett går vi for en real
              fest. Mer detaljert program oppdateres etterhvert på denne siden,
              men dere er alle velkommen til en samling fredag kveld 16.juni,
              med noe lett å bite i, drikke til for de som ønsker og litt
              ablegøyer. Lørdagen begynner vielsen klokken 14 i Mariakirken i
              Bergen. Deretter blir mottagelsen i gåavstand på Hotell Terminus
              hvor det blir velkomstdrink og noe lett mat. Det blir påfølgende
              middag og fest utover kvelden. Bruk påmeldingslinken til å
              fortelle oss om du kommer. Vi håper å se deg!
            </p>
            <Image
              className="object-scale-down md:h-auto md:max-w-lg"
              src={historiebryllupet}
              alt=""
              layout=""
              objectFit=""
            />
          </li>
        </ol>
      </div>
      </div>
    </div>
  );
}

export default History;

//<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              //March 2022
            //</time>