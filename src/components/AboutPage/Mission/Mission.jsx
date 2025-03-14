import React from "react";
import TextWithImg from "../../shared/TextWithImg/TextWithImg";

function Mission() {
  const data = {
    header: { text: "MISSION", fontSize: "xl" },
    imgFirst: false,
    bgColor: "secondGray",
    img: "/about/mission.webp",

    normalText: [
      "Wolsey Structural Engineering is committed to delivering world-class structural designs providing  innovative, sustainable, and precise designs. Our client-focused approach ensures cost-effective solutions that exceed expectations while prioritizing safety, quality, and environmental responsibility.",
    ],
  };
  return (
    <>
      <TextWithImg data={data} />
    </>
  );
}

export default Mission;
