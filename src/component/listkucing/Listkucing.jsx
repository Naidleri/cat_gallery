import React from "react";

const KucingRas = () => {
  const listKucing = [
    {
      ras: "Persia",
      gambar: "/images/persia.jpg",
      deskripsi: "Kucing dengan bulu panjang dan wajah pesek",
    },
    {
      ras: "Maine Coon",
      gambar: "/images/maine-coon.jpg",
      deskripsi: "Kucing dengan ukuran tubuh besar dan bulu tebal",
    },
    // ... dan seterusnya
  ];

  const handleSearch = (keyword) => {
    // Logika pencarian berdasarkan keyword (misalnya nama ras) di sini
    // Anda dapat mengatur state atau melakukan operasi lain sesuai kebutuhan aplikasi
  };

  return (
    <div>
      <h2>Daftar Ras Kucing</h2>
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Cari ras kucing"
      />
      <ul>
        {listKucing.map((kucing, index) => (
          <li key={index}>
            <img src={kucing.gambar} alt={kucing.ras} />
            <h3>{kucing.ras}</h3>
            <p>{kucing.deskripsi}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KucingRas;
