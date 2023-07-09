import React from "react";
import Persia from "../../images/home/persia-home.jpg";
export const Home = () => {
  return (
    <div>
      <div className="desc relative mx-auto max-w-[1500px] top-20 text-center">
        <h1 className="mx-auto text-xl font-semibold  md:text-6xl  mb-6">
          Selamat Datang di web Cat Gallery!
        </h1>
        <p>
          Temukan galeri foto kucing yang menarik dan nikmati pengalaman
          browsing kami.
        </p>
        <p>
          Kami menyediakan berbagai koleksi foto kucing dari berbagai ras dan
          pose yang lucu.
        </p>
        <p>Manjakan mata Anda dengan gambar-gambar kucing yang menggemaskan.</p>
        <p>
          Jelajahi kategori-kategori kucing, cari tahu lebih banyak tentang ras
          kucing favorit Anda, dan temukan gambar-gambar yang menarik perhatian
          Anda.
        </p>
        <p>
          Terima kasih telah berkunjung dan semoga Anda menikmati pengalaman di
          Cat Gallery!
        </p>
        <h1 className="relative top-10 text-4xl font-semibold">
          Berbagai macam ras kucing yang ada
        </h1>
      </div>
      <div className="ras-image relative bg-orange-950 max-w-[1700px] mx-auto top-40 grid grid-cols-3 gap-4">
        <div className="persia bg-slate-300 mx-auto  ">
          <img src={Persia} alt="" className="w-12" />
          <h1>Persia</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
