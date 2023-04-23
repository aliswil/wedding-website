import Image from "next/image";

import bilde4 from "../../public/4.jpeg";

export default function Accommodationl() {
  return (
    <div className="relative">
      <a
        href="https://www.radissonhotels.com/no-no/varemerke/radisson-blu?facilitatorId=RHGSEM&cid=a:ps+b:ggl+c:emea+i:brand+e:rdb+r:tlb+f:no-NO+g:cl+h:Multiple+v:cf&gclid=CjwKCAjw0N6hBhAUEiwAXab-TXMQ8FTFN9bvXj8AihoIV9kOzyyLgfV6eRSwt9RyqqlNS8LduDPQ7xoCyqwQAvD_BwE&gclsrc=aw.ds"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={bilde4}
          alt=""
          layout=""
          objectFit=""
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  );
}
