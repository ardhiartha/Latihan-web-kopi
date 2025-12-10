import { formatPesan } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nama = document.getElementById("nama").ariaValueMax;
        const kategori = document.getElementById("kategori").ariaValueMax;
        const pesan = document.getElementById("pesan").ariaValueMax;

        const hasil = formatPesan(nama, kategori, pesan);
        alert(hasil);
    });
});