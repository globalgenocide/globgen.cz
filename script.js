function showInfo() {
  document.getElementById("infobg").style.display = 'flex';
  document.getElementById("content").style.display = 'none';
}

function hideInfo() {
  document.getElementById("infobg").style.display = 'none';
  document.getElementById("content").style.display = 'block';
}

var images = [
  "img/albert-hyseni-iQAF4A0To1g-unsplash.jpg",
  "img/albert-hyseni-qG6QtyOaOGQ-unsplash.jpg",
  "img/albert-hyseni-Sy_8KuxLwBI-unsplash.jpg",
  "img/austin-filippi-m-RK4UxxZrE-unsplash.jpg",
  "img/bart-van-dijk-DqGIaY0K08o-unsplash.jpg",
  "img/curioso-photography-33JLhfRuqbk-unsplash.jpg",
  "img/curioso-photography-CBUaptfxvKY-unsplash.jpg",
  "img/daria-sukhorukova-I51HSIo8k-4-unsplash.jpg",
  "img/dominik-vanyi-1HEDPbH6HIE-unsplash.jpg",
  "img/dominik-vanyi-F1B0-iuAxO4-unsplash.jpg",
  "img/dominik-vanyi-Mk2ls9UBO2E-unsplash.jpg",
  "img/felix-tchverkin-aP5Xy--FZJ0-unsplash.jpg",
  "img/filippos-sdralias-V6e2PJf6mxU-unsplash.jpg",
  "img/ivan-bandura-D5kMHGxgZMI-unsplash.jpg",
  "img/ivan-bandura-ED6eLNiMWY8-unsplash.jpg",
  "img/joanne-francis-S9NQnIV4zOI-unsplash.jpg",
  "img/josh-berendes-yFi0kF-lR6A-unsplash.jpg",
  "img/landon-parenteau-QDFbLwy0hMY-unsplash.jpg",
  "img/landon-parenteau-YEsxGmZ4wLU-unsplash.jpg",
  "img/luke-flynt-9jErXqFwAYs-unsplash.jpg",
  "img/marcin-jozwiak-T-eDxGcn-Ok-unsplash.jpg",
  "img/marcin-jozwiak-YGPCYETKFw8-unsplash.jpg",
  "img/marcus-kauffman--iretlQZEU4-unsplash.jpg",
  "img/mika-baumeister-3R0MnV-2WqE-unsplash.jpg",
  "img/nick-herasimenka-rYGQ49W1wqc-unsplash.jpg",
  "img/shravan-k-acharya-UXQJ5PaRvgM-unsplash.jpg",
  "img/thom-milkovic-zpbzMHIe_NU-unsplash.jpg",
]

var img = images[Math.floor(Math.random() * images.length)];
img = "url(" + img + ")";
document.documentElement.style.backgroundImage = img;

