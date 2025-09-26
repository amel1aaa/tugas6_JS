import { index, store, destroy } from "./controller_customer.js";



const main = () => {
  index(); // menampilkan data awal

  // Tambahkan data baru
  document.getElementById("btnAddCustomer").addEventListener("click", () => {
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const alamat = document.getElementById("alamat").value;
    const email = document.getElementById("email").value;

    if (nama && umur && alamat && email) {
      store({ nama, umur: parseInt(umur), alamat, email });
    } else {
      alert("Lengkapi semua data customer terlebih dahulu!");
    }
  });

  // Hapus Customer Berdasarkan Nama 
  document.getElementById("btnRemoveCustomer").addEventListener("click", () => {
    const nama = prompt("Masukkan nama customer yang ingin dihapus:");
    if (nama) {
      destroy(nama);
    }
  });
};

main();