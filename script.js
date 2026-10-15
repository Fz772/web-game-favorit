const games = [
  {
    name: "Minecraft",
    category: "Sandbox",
    description: "Bangun dunia dan berkreasi sesuai imajinasimu."
  },
  {
    name: "Roblox",
    category: "Adventure & Creation",
    description: "Jelajahi berbagai pengalaman dan dunia buatan komunitas."
  },
  {
    name: "eFootball",
    category: "Sports",
    description: "Nikmati permainan sepak bola dan susun tim favoritmu."
  }
];

let indeksTerakhir = -1;

const tombolLihat = document.getElementById("tombol-lihat");
const tombolPilih = document.getElementById("tombol-pilih");
const bagianDaftarGame = document.getElementById("daftar-game");

const pesanAwal = document.getElementById("pesan-awal");
const detailHasil = document.getElementById("detail-hasil");
const hasilNama = document.getElementById("hasil-nama");
const hasilKategori = document.getElementById("hasil-kategori");
const hasilDeskripsi = document.getElementById("hasil-deskripsi");

tombolLihat.addEventListener("click", function () {
  bagianDaftarGame.scrollIntoView({ behavior: "smooth" });
});

tombolPilih.addEventListener("click", function () {
  let indeksAcak = Math.floor(Math.random() * games.length);

  if (indeksAcak === indeksTerakhir) {
    indeksAcak = (indeksAcak + 1) % games.length;
  }
  indeksTerakhir = indeksAcak;

  const gameTerpilih = games[indeksAcak];

  pesanAwal.classList.add("tersembunyi");
  detailHasil.classList.remove("tersembunyi");

  hasilNama.textContent = gameTerpilih.name;
  hasilKategori.textContent = gameTerpilih.category;
  hasilDeskripsi.textContent = gameTerpilih.description;
});
