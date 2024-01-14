import React from "react";
import Card from "./Card";
import { GrGroup } from "react-icons/gr";

const Cards = () => {
  const data = [
    {
      title: "Web development",
      price: "149",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex facere veritatis dolorem dolor eius veniam, tempora excepturi? Blanditiis odit dolorem quia quidem consequuntur eius sunt, earum numquam beatae porro alias error eos quisquam animi.",

    },
    {
      title: "Digital Marketing",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex facere veritatis dolorem dolor eius veniam, tempora excepturi? Blanditiis odit dolorem quia quidem consequuntur eius sunt, earum numquam beatae porro alias error eos quisquam animi.",

    },
    {
      title: "App Development",
      price: "209",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex facere veritatis dolorem dolor eius veniam, tempora excepturi? Blanditiis odit dolorem quia quidem consequuntur eius sunt, earum numquam beatae porro alias error eos quisquam animi.",

    },
  ];
  return (
    <div
      className="mt-10 max-w-screen-xl p-[1px] mx-auto h-[95vh]
       md:flex gap-2 "
    >
      {data.map((items,index)=><Card value={items} index={index} />)}
    </div>
  );
};

export default Cards;
