import React from "react";
import Persia from "../../images/home/persia.jpg";
import Siamese from "../../images/home/siamese.jpg";
import Bengal from "../../images/home/bengal.jpg";
import Ragdoll from "../../images/home/ragdoll.jpg";
import Norwegian from "../../images/home/norwegianforest.jpg";
import Scottfish from "../../images/home/scottish-fold.jpg";
import { Link } from "react-router-dom";

const images = [
  { src: Persia, jenis: "persia", caption: "Persia" },
  { src: Siamese, jenis: "siamese", caption: "Siamese" },
  { src: Bengal, jenis: "bengal", caption: "Bengal" },
  { src: Ragdoll, jenis: "ragdoll", caption: "Ragdoll" },
  { src: Norwegian, jenis: "norwegian", caption: "Norwegian Forest" },
  { src: Scottfish, jenis: "scottish", caption: "Scottish Fold" },
];

const Galleryhome = () => {
  return (
    <div>
      <div className="desc relative mx-auto max-w-[1500px] top-20 text-center p-3">
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
          {" "}
          Macam - macam kucing ras
        </h1>
      </div>
      <div className="ras-image relative  max-w-[1200px] mx-auto top-40  md:grid grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="list  mx-auto  items-center">
            <Link to={`/detailkucing/${image.jenis}`}>
              <div className="flex justify-center">
                <img
                  src={image.src}
                  alt=""
                  className="object-cover w-[300px] h-[300px]"
                />
              </div>
            </Link>
            <h1 className="text-center font-medium pt-1">{image.caption}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleryhome;
