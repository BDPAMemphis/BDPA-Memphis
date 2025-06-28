// ✅ 1. Your slides data
const slidesData = [
  {
    img: "assets/image-1.jpg",
    alt: "Image 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur facilis, quis veritatis modi asperiores voluptatem ex! Laudantium, minus quaerat.",
    name: "Sarah Malik",
    role: "Graphic Designer",
    slideClass: "slide-1",
  },
  {
    img: "assets/image-2.jpg",
    alt: "Image 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur facilis, quis veritatis modi asperiores voluptatem ex! Laudantium, minus quaerat.",
    name: "Sarah Malik",
    role: "Graphic Designer",
    slideClass: "slide-2",
  },
  {
    img: "assets/image-3.webp",
    alt: "Image 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur facilis, quis veritatis modi asperiores voluptatem ex! Laudantium, minus quaerat.",
    name: "Sarah Malik",
    role: "Graphic Designer",
    slideClass: "slide-3",
  },
];

// ✅ 2. Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const slidesList = document.getElementById("slides-list");
  
  slidesData.forEach((slide) => {
    const li = document.createElement("li");
    li.className = `swiper-slide ${slide.slideClass}`;
    li.innerHTML = `
      <div class="wrapper">
        <div class="thumbnail">
          <img src="${slide.img}" alt="${slide.alt}">
        </div>
        <div class="aside">
          <p>${slide.text}</p>
          <div class="name">
            <h4>${slide.name}</h4>
            <p>${slide.role}</p>
          </div>
        </div>
      </div>
    `;
    slidesList.appendChild(li);
  });

  // ✅ 3. Initialize Swiper AFTER slides exist
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
