var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 3,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true,
});

var slide_hero = new Swiper(".slide-principal", {
  effect: "fade",
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const allFilters = document.querySelectorAll(".js-nav-games li a");
const tabPane = document.querySelectorAll(".tab-pane-games");

allFilters.forEach((filter, index) => {
  filter.addEventListener("click", (e) => {
    e.preventDefault();

    allFilters.forEach((item) => {
      item.classList.remove("active");
    });

    tabPane.forEach((item) => {
      item.classList.remove("active");
    });

    tabPane[index].classList.add("active");

    filter.classList.add("active");
  });
});

const btnOpenModal = document.querySelector(".js-open-modal");
const btnCloseModal = document.querySelector(".js-close");
const overlayModal = document.querySelector(".js-close-overlay");

btnOpenModal.addEventListener("click", (e) => {
  e.preventDefault();
  document.documentElement.classList.add("show-modal");
});

function closeModal() {
  document.documentElement.classList.toggle("show-modal");
}

btnCloseModal.addEventListener("click", closeModal);

overlayModal.addEventListener("click", closeModal);

const btnMenu = document.querySelectorAll(".js-btn-menu");
const menuSite = document.querySelectorAll(".js-menu");

btnMenu.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    menuSite.forEach((item) => {
      item.classList.remove("active");
      item.addEventListener("mouseleave", () => {
        item.classList.remove("active");
        btnMenu.forEach((item) => {
          item.classList.remove("active");
        });
      });
    });

    btnMenu.forEach((item) => {
      item.classList.remove("active");
    });

    btn.classList.add("active");

    menuSite[index].classList.add("active");
  });
});
