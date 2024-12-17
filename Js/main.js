gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"),
  tween;
document.querySelectorAll(".anchor").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    console.log("click");
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = cont.scrollWidth - innerWidth;
      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false
      },
      duration: 1
    });
  });
});

/* Panels */
const cont = document.querySelector("#panels-container");
const panels = gsap.utils.toArray("#panels-container .panel");

tween = gsap.to(panels, {
  x: () => -1 * (cont.scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    end: () => "+=" + (cont.scrollWidth - innerWidth),
    onUpdate: (self) => {
     console.log(self.progress)
    }
  }
});

lottie.loadAnimation({
  container: document.getElementById('lottie-container'), // Conteneur cible
  path: './assets/Joconde.json', // Chemin vers votre fichier .lottie
  renderer: 'svg', // Type de rendu (svg, canvas, html)
  loop: true,      // Animation en boucle
  autoplay: true   // Démarrage automatique
});

const cont2 = document.querySelector("#second-panels-container");
 const panels2 = gsap.utils.toArray("#second-panels-container .panel");

gsap.to(panels2, {
  x: () => -1 * (cont2.scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#second-panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    end: () => "+=" + (cont2.scrollWidth - innerWidth),
    onUpdate: (self) => {
      console.log(self.progress);
    }
  }
});

//la fonction suivante a pour but de faire bouger Bob en fonction du scroll le contenu de #bob devra changer à chaque fois que l'utilisateur scroll. il devra y avoir soit  <img src="Assets/BOB_char_walking.svg" style="position: relative;" alt=""> soit <img src="Assets/BOB_char.svg" style="position: relative; transform: scaleX(-1);" alt=""> ces deux dernieres balises devront etre dans le div #bob et devront s'alterner chaque fois que l'utilisateur scroll

function translateBobOnScroll() {
  let bob = document.querySelector("#bob");
  let isWalking = true;
  let lastChangeTime = 0;
  let scrollTimeout;
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let currentTime = Date.now();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentTime - lastChangeTime > 200) {
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (isWalking) {
          bob.innerHTML = '<img src="Assets/BOB_char_walking.svg" style="position: relative;" alt="">';
        } else {
          bob.innerHTML = '<img src="Assets/BOB_char.svg" style="position: relative;" alt="">';
        }
      } else {
        // Scrolling up
        if (isWalking) {
          bob.innerHTML = '<img src="Assets/BOB_char_walking.svg" style="position: relative; transform: scaleX(-1);" alt="">';
        } else {
          bob.innerHTML = '<img src="Assets/BOB_char.svg" style="position: relative; transform: scaleX(-1);" alt="">';
        }
      }
      isWalking = !isWalking;
      lastChangeTime = currentTime;
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      bob.innerHTML = '<img src="Assets/BOB_char_walking.svg" style="position: relative;" alt="">';
    }, 500); // 500ms after the user stops scrolling
  });
}

translateBobOnScroll();