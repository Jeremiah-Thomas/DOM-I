const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// Setting up nav
//Setting the href and text values for the nav
const navHrefs = [];
Object.values(siteContent.nav).forEach((item) => navHrefs.push(item));
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link, i) => {
  link.href = `#${navHrefs[i]}`;
  link.textContent = navHrefs[i];
});
//Setting nav logo
const navLogoImg = document.querySelector(".logo");
navLogoImg.src = siteContent.images["logo-img"];

// Setting up the cta section
//Title and Button
document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
//Image
document.querySelector(".cta img").src = siteContent.images["cta-img"];

// Setting up main content
//Titles and paragraphs
const mainTitles = [];
const mainPElems = [];
Object.values(siteContent["main-content"]).forEach((item) => {
  if (item.split(" ").length === 1) {
    mainTitles.push(item);
  } else {
    mainPElems.push(item);
  }
});
const mainContent = document.querySelector(".main-content");
const mainContentText = mainContent.querySelectorAll(
  ".main-content .text-content"
);
mainContentText.forEach((item, i) => {
  item.querySelector("h4").textContent = mainTitles[i];
  item.querySelector("p").textContent = mainPElems[i];
});
//Images
mainContent.querySelector("img").src = siteContent.images["accent-img"];

// Setting up contact and footer
//Contact
const contactInfo = [];
Object.values(siteContent.contact).forEach((item) => {
  contactInfo.push(item);
});

Array.from(document.querySelector(".contact").children).forEach((child, i) => {
  child.textContent = contactInfo[i];
});
//Footer
document.querySelector("footer a").textContent = siteContent.footer.copyright;

// Adding class names to a elements
document
  .querySelectorAll("nav a")
  .forEach((elem) => elem.classList.add("italic"));
document.querySelector("footer a").classList.add("bold");
console.log("project wired!");
