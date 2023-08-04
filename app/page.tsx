"use client";
import Image from "next/image";

import "./globals.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <p className="flex justify-center text-3xl mt-2 mb-6">
          Select Template
        </p>
      </div>
      <div className="grid justify-center grid-cols-4">
        <Link
          href="/resumeblue"
          className="flex items-center flex-col hover:scale-[102%] duration-200"
        >
          {" "}
          <Image
          className='h-[350px]'
            src="/assets/template-blue.png"
            alt="template-blue"
            width={250}
            height={300}
          ></Image>
          <span className="text-xl">Go Create</span>
        </Link>
        <Link
          href="/resumeorange"
          className="flex items-center flex-col hover:scale-[102%] duration-200"
        >
          {" "}
          <Image
          className='h-[350px]'
            src="/assets/orange.png"
            alt="template-blue"
            width={250}
            height={300}
          ></Image>
          <span className="text-xl">Go Create</span>
        </Link>
      </div>
    
    </>
  );
}
