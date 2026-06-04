document.addEventListener("DOMContentLoaded", () => {

    const welcome = document.getElementById("welcome");

    if (welcome) {

        const text = "Selamat Datang di Website Desa Karangturi";

        let i = 0;

        function ketik() {

            if (i < text.length) {

                welcome.innerHTML += text.charAt(i);
                i++;

                setTimeout(ketik, 60);

            }

        }

        ketik();

    }

});

const salam = document.getElementById("salam");

if (salam) {

    const jam = new Date().getHours();

    let pesan = "";

    if (jam < 11) {
        pesan = "Selamat Pagi";
    }
    else if (jam < 15) {
        pesan = "Selamat Siang";
    }
    else if (jam < 18) {
        pesan = "Selamat Sore";
    }
    else {
        pesan = "Selamat Malam";
    }

    salam.textContent = pesan;

}
