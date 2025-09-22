import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainBox from "@/components/main/MainBox";

export default function Home() {
  return (
    <div className="min-h-screen flex"
      style={{
        backgroundImage: `url('/bg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[rgba(46,46,46,0.5)] bg-opacity-50 z-0"></div>
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="p-4 flex justify-center mt-20 w-full">
        <MainBox />
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
