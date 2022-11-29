import React from "react";

function AboutUs() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black pl-5 text-white">
      <h1 className="mt-10 mb-20 self-center text-3xl font-bold text-gray-400 lg:text-4xl">
        About Us
      </h1>
      <h2 className="self center font-bold">
        THIS IS OUR PROJECT CREATED BY LAS VEGAS DEVELOPMENT{" "}
      </h2>
      <br></br>
      <p className="font-bold">Groups Member :</p>
      <p className="">1. Yasin, Saylendra Myheart (INFORMATIKA)</p>
      <p className="">2. Tamboto, Andre (INFORMATIKA)</p>
      <p className="">3. Tjia, Ovel Richy Maramis (INFORMATIKA) </p>
      <p className="">4. Dengah, Jofanly Stevanus (INFORMATIKA)</p>
      <p className="">5. Rampen, Gerard (INFORMATIKA)</p>
      <p className="">6. Deeng, Anggreiny (INFORMATIKA)</p>
      <br></br>

      <p className="mt-20  italic">UNIVERSITAS KLABAT</p>
      <p className=" italic">COMPUTER SCIENCE</p>
      <p className=" italic">FRONT-END DEVELOPMENT</p>
    </div>
  );
}

export default AboutUs;
