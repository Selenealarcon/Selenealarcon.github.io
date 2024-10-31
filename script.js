(function () {
  emailjs.init({
    publicKey: "DWlnFa_GK4jR1rJU4",
  });
})();


function showSection(section) {
  document.querySelectorAll(".carousel-item").forEach((item) => {
      item.classList.remove("active");
  });
  document.querySelectorAll(".row li").forEach((li) => {
      li.classList.remove("active");
  });
  document.getElementById(section).classList.add("active");
  document.querySelector(`button[id="btn-${section}"]`).parentElement.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      emailjs
        .send("service_l5y6815", "template_cld7dx6", {
          from_name: name,
          from_email: email,
          message: message,
          to_name: "Selene",
        })
        .then(
          function (response) {
            alert("Mensaje enviado con éxito!");
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            alert("Error al enviar el mensaje.");
            console.log("FAILED...", error);
          }
        );
    });
});

const i = {};

window.onload = function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const id = carousel.id;
        i[id] = 0;
        showImg(id);
    });
};

function showImg(carouselId) {
    const images = document.querySelectorAll(`#${carouselId} .carousel-imagenes img`);
    const totalImg = images.length;
    const currentIndex = i[carouselId];

    images.forEach((img) => {
        img.classList.remove('active');
    });

    images[currentIndex].classList.add('active');
}

function changeImg(n, carouselId) {
    const images = document.querySelectorAll(`#${carouselId} .carousel-imagenes img`);
    const totalImg = images.length;

    i[carouselId] = (i[carouselId] + n + totalImg) % totalImg;
    showImg(carouselId);
}

