/* eslint-disable no-unused-vars */
import React from 'react';
import "./work.css";

const Work = () => {
  // Data pribadi
  const personalData = {
    name: "Nama Anda",
    age: "Usia Anda",
    profession: "Frontend Developer",
    location: "Lokasi Anda",
    favoriteFood: "Mie Goreng",
    hobbies: ["Coding", "Membaca Buku", "Bermain Game"],
  };

  return (
    <section className="work section" id='portfolio'>
      <h2 className="section__title">Tentang Saya 🧑🏻‍💻</h2>
      <span className="section__subtitle">Data Pribadi</span>

      <div className="personal__info">
        <h3>Nama: Delon Bart Cliver Puiya</h3>
        <p>Usia: 20 tahun</p>
        <p>Status: mahasiswa tingkat 3</p>
        <p>Alamat: Jl. Arnold Mononutu, Airmadidi, Minahasa Utara, Sulawesi Utara, 95371, asrama kristal</p>
        <p>Makanan Favorit:ikan bakar rica</p>
        <h4>Hobi:</h4>
        <ul>
          {personalData.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
