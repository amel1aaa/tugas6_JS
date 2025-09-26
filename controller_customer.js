import { customers } from "./data_customer.js";

// Menampilkan Seluruh data customer
export function index() {
  const list = document.getElementById("customer-list");
  list.innerHTML = "";

  customers.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = `${c.nama} | ${c.umur} th | ${c.alamat} | ${c.email}`;
    list.appendChild(li);
  });
}

// Menambahkan data baru ke array 
export function store(customer) {
  customers.push(customer); 
  index();
}

// Menghapus customer berdasarkan nama
export function destroy(nama) {

// Cari index data dengan nama yang sesuai
const idx = customers.findIndex(c => c.nama.toLowerCase() === nama.toLowerCase());

  if (idx !== -1) {
    customers.splice(index, 1); // Hapus data pada index
    alert(`Customer dengan nama ${nama} berhasil dihapus`);
  } else {
    alert(`Customer dengan nama ${nama} tidak ditemukan`);
  }

  index(); // refresh tampilan
}
