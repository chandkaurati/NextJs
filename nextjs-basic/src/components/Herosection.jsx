import Link from "next/link";
import React from "react";

function Herosection() {
  return (
    <div
    className="h-auto md:h-[40rem] 
    w-full rounded-md flex flex-col items-center 
    justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <div className="p-4 relative z-10 w-full text-center">
        <h1>Master the art of music</h1>
        <p>
          Dive into out comprehensive music cources and transform your musical
          journy today. Wether you're a biginner of looking to refine your
          skills, join us to unlock your true potential
        </p>
          <div className="mt-4">
            <Link href="/cources">Explore our cources</Link>
          </div>
      </div>
    </div>
  );
}

export default Herosection;
