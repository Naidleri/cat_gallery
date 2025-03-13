import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

export const About = () => {
  return (
    <div>
      <Navbar />
      <section className="py-8 mx-auto max-w-[1500px] justify-center text-center">
        <h2 className="text-2xl font-semibold mb-4">Tentang Kami</h2>
        <p>
          Cat Gallery adalah situs yang menyediakan koleksi foto-foto kucing
          dari beberapa ras dan jenis. Tujuan saya adalah untuk menyajikan
          foto-foto kucing yang indah dan menggemaskan, serta memberikan
          informasi yang berguna tentang beberapa ras kucing.
        </p>
        <p>
          Saya membuat website ini sebagai portofolio dalam membuat webiste menggunakan React 
        </p>
        <p>
          Terima kasih telah mengunjungi Cat Gallery dan kami berharap Anda
          menikmati penjelajahan situs kucing saya
        </p>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
