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

const images = document.querySelectorAll("img");

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {

    img.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

});

const cards = document.querySelectorAll(".popup-card");

const popup = document.getElementById("card-popup");

const popupImage =
document.getElementById("popup-image");

const popupTitle =
document.getElementById("popup-title");

const popupDescription =
document.getElementById("popup-description");

const closePopup =
document.querySelector(".close-popup");


cards.forEach(card => {

    card.addEventListener("click", () => {

        popup.style.display = "flex";

        popupTitle.textContent =
            card.dataset.title;

        popupDescription.textContent =
            card.dataset.description;

        popupImage.src =
            card.dataset.image;

    });

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

});
