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
          dari berbagai ras dan jenis. Tujuan kami adalah untuk menyajikan
          foto-foto kucing yang indah dan menggemaskan, serta memberikan
          informasi yang berguna tentang setiap ras kucing.
        </p>
        <p>
          Tim kami terdiri dari para pecinta kucing yang antusias, yang
          berkomitmen untuk memberikan pengalaman terbaik kepada pengunjung
          situs ini. Jika Anda memiliki pertanyaan atau masukan, jangan ragu
          untuk menghubungi kami melalui alamat email berikut:
          contact@catgallery.com.
        </p>
        <p>
          Terima kasih telah mengunjungi Cat Gallery dan kami berharap Anda
          menikmati penjelajahan Anda di situs kami!
        </p>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
