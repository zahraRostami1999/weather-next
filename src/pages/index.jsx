import React, { useState } from "react";
import LazyBackground from "@/components/lazy/LazyBackground";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainBox from "@/components/main/MainBox";

export default function Home() {
  return (
    <LazyBackground
      imageUrl="/bg1.jpg"
      className="min-h-screen flex flex-col"
    >
      <div className="absolute inset-0 bg-[rgba(46,46,46,0.5)] bg-opacity-50 z-0"></div>
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="p-4 flex justify-center mt-20 w-full h-4/5">
        <MainBox />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </LazyBackground>
  );
}
