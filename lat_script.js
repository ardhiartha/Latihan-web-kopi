// -- Sapaan dinamis berdasasrkan waktu --
const now = new Date();
const hour = now.getHours();
let greeting;

if (hour < 12) {
    greeting = 'Selamat Pagi! ☀️';
} else if (hour < 18) {
    greeting = 'Selamat Siang! 🌤️';
} else {
    greeting = 'Selamat Malam! 🌙';
}

// Tampilkan alert sekali saja
alert(`${greeting}! Selamat datang di Website Kopi Nusantara - Cita Rasa Asli UMKM Lokal`);

// -- Menampilkan informasi di console --
const namaUMKM = 'Kopi Nusantara';
console.log('Website: ', namaUMKM);
console.log('Status script: berjalan dengan baik');

// -- Menampilkan pesan di halaman --
const heroSection = document.querySelector('.hero .container');
if (heroSection) {
    const greetingElement = document.createElement('p');
    greetingElement.textContent = `${greeeting}! Terima kasih telah mengunjungi website kami.`;
    greetingElement.style.fontStyle = 'italic';
    greetingElement.style.color = '#532a10';
    greetingElementstyle.marginTop = '10px';
    heroSection.appendChild(greetingElement);
}