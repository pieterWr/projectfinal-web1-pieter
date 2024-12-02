document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const errorMessage = document.getElementById('errorMessage'); // Menggunakan elemen yang sudah ada

    // Validasi Nama
    function validateName(name) {
        return name.trim().length > 0 && name.length <= 40;
    }

    // Validasi Nomor Telepon
    function validatePhone(phone) {
        return /^\d{1,15}$/.test(phone);
    }

    // Validasi Email
    function validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    // Validasi Password
    function validatePassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/.test(password);
    }

    // Menampilkan Pesan Kesalahan
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
    }

    // Menyembunyikan Pesan Kesalahan
    function hideError() {
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');
    }

    // Event Listener untuk Form Submit
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah default submit

        // Ambil nilai dari form
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validasi setiap input
        if (!validateName(name)) {
            showError('Nama harus antara 1-40 karakter.');
            return;
        }

        if (!validatePhone(phone)) {
            showError('Nomor telepon harus 1-15 digit.');
            return;
        }

        if (!validateEmail(email)) {
            showError('Format email tidak valid.');
            return;
        }

        if (!validatePassword(password)) {
            showError('Kata sandi harus 8-16 karakter, mengandung huruf besar, huruf kecil, dan angka.');
            return;
        }

        hideError(); 
        alert('Pendaftaran Berhasil!');
        form.reset(); 
    });
});
