const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const nContent = document.querySelectorAll("nav a");
for (let i = 0; i < nContent.length; i++) {
    nContent[i].textContent = siteContent['nav'][`nav-item-${i}`];
}

const ctaContent = document.querySelector('.cta-text');
ctaContent.querySelector('h1').textContent = siteContent["cta"]["h1"];
ctaContent.querySelector('button').textContent = siteContent["cta"]["button"];

const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent['cta']["img-src"]);

const topText = document.querySelectorAll('.top-content .text-content');
topText[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
topText[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];

topText[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
topText[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];

const midImg = document.querySelector('.middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const btmText = document.querySelectorAll('.bottom-content .text-content');
btmText[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
btmText[0].querySelector('p').textContent = siteContent["main-content"]["services-content"];

btmText[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
btmText[1].querySelector('p').textContent = siteContent["main-content"]["product-content"];

btmText[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
btmText[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

const contactInfo = document.querySelector('section.contact');
contactInfo.querySelector('h4').textContent = siteContent['contact']['contact-h4'];
const contactInf = contactInfo.querySelectorAll('p');

contactInf[0].textContent = siteContent["contact"]["address"];
contactInf[1].textContent = siteContent["contact"]["phone"];
contactInf[2].textContent = siteContent["contact"]["email"];

const footerTxt = document.querySelector('footer p');
footerTxt.textContent = siteContent['footer']['copyright'];