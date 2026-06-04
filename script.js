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
