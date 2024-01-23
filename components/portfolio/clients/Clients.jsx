import React from "react";
import { clients } from "./kalakritClients";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="w-full h-fit my-[3.69rem]">
      <div className="mx-auto w-[89%] h-fit grid grid-cols-3 gap-x-10">
        {clients?.data.map((client) => (
          <div key={client.id} className="col-span-1 h-full w-fit box-border">
            {client.id % 2 === 0 ? (
              <Image
                src={client.img}
                width={200}
                height={200}
                className="mt-24 box-border h-full w-fit"
                alt={client.name}
              />
            ) : (
              <Image
                src={client.img}
                width={200}
                height={200}
                className="mt-10 w-fit h-full box-border"
                alt={client.name}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
