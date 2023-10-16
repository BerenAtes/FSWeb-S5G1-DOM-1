const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const sinif = document.querySelectorAll(".container header nav a");
sinif.forEach((element) => {
  element.classList.add("italic");
});

sinif[0].textContent = siteContent.nav["nav-item-1"];
sinif[1].textContent = siteContent.nav["nav-item-2"];
sinif[2].textContent = siteContent.nav["nav-item-3"];
sinif[3].textContent = siteContent.nav["nav-item-4"];
sinif[4].textContent = siteContent.nav["nav-item-5"];
sinif[5].textContent = siteContent.nav["nav-item-6"];

const image = document.querySelector("header img");
image.setAttribute("src", siteContent.images["logo-img"]);

const text = document.querySelector(".container .cta .cta-text h1");
text.textContent = siteContent.cta.h1;

const text2 = document.querySelector(".container .cta .cta-text button");
text2.textContent = siteContent.cta.button;

const img2 = document.querySelector(".container .cta img");
img2.setAttribute("src", siteContent.images["cta-img"]);

const mainText = document.querySelectorAll(
  ".container .main-content .top-content .text-content h4"
);
const mainText2 = document.querySelectorAll(
  ".container .main-content .top-content .text-content p"
);
mainText[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
mainText2[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
mainText[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
mainText2[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const mainImg = document.querySelector(".main-content img");
mainImg.setAttribute("src", siteContent.images["accent-img"]);

const bottomText = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
);
const bottomText2 = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
);

bottomText[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomText2[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomText[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomText2[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomText[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];
bottomText2[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];

document.querySelectorAll(".contact p")[0].textContent =
  siteContent.iletisim["adres"];
document.querySelectorAll(".contact p")[1].textContent =
  siteContent.iletisim["telefon"];
document.querySelectorAll(".contact p")[2].textContent =
  siteContent.iletisim["email"];

const footer = document.querySelector("footer a");
footer.classList.add("bold");
footer.textContent = siteContent.footer.copyright;
