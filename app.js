gsap.registerPlugin(ScrollTrigger);

// Récupère tous les éléments ayant la classe .panel sous la forme d'un tableau
let sections = gsap.utils.toArray(".panel");

// Crée un tween qui déplace les sections horizontalement
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 0.1,
    end: () => "+=" + document.querySelector(".container").scrollWidth, // Adjust this value to control the speed
  },
});


let sections2 = gsap.utils.toArray(".panel2");

let scrollTween2 = gsap.to(sections2, {
  xPercent: -100 * (sections2.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container2",
    pin: true, // Vérifiez si ce "pin" est nécessaire
    scrub: 0.1,
    start: "top top",
    end: () => "+=" + document.querySelector(".container").scrollWidth, // Ajustez la valeur pour limiter l'effet
  },
});
// section 1 : Simple Animation
// gsap.to(".box-1", {
//   y: -130,
//   duration: 2,
//   ease: "elastic",
//   scrollTrigger: {
//     trigger: ".box-1",
//     containerAnimation: scrollTween,
//     start: "center 80%",
//     end: "center 58%",
//     toggleActions: "play none none reset",
//     markers: { startColor: "white", endColor: "white" },
//   },
// });

// section 2 : Animation with scrub
// gsap.to(".box-2", {
//   y: -120,
//   backgroundColor: "#1e90ff",
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".box-2",
//     containerAnimation: scrollTween,
//     scrub: true,
//     start: "center 80%",
//     end: "center 58%",
//     markers: { startColor: "white", endColor: "white" },
//   },
// });

// section 3 : Toggle class
// ScrollTrigger.create({
//   trigger: ".box-3",
//   containerAnimation: scrollTween,
//   toggleClass: "active",
//   start: "center 80%",
//   end: "center 58%",
//   markers: { startColor: "white", endColor: "white" },
// });


ScrollTrigger.create({
  trigger: ".anim1",
  containerAnimation: scrollTween,
  toggleClass: "animetext",
  start: "center 80%",
  end: "center 0%",
  markers: { startColor: "white", endColor: "white" },
});

ScrollTrigger.create({
  trigger: ".anim2",
  containerAnimation: scrollTween,
  toggleClass: "animetextfade",
  start: "center 80%",
  end: "center 0%",
  markers: { startColor: "white", endColor: "white" },
});


// section 4 : Custom function
// ScrollTrigger.create({
//   trigger: ".final",
//   containerAnimation: scrollTween,
//   start: "center 80%",
//   end: "center 58%",
//   onEnter: () => console.log("enter"),
//   onLeave: () => console.log("leave"),
//   onEnterBack: () => console.log("enterBack"),
//   onLeaveBack: () => console.log("leaveBack"),
//   onToggle: (self) => console.log("active", self.isActive),
//   markers: { startColor: "white", endColor: "white" },
// });

// si déter finir le code en bas

// const container = document.querySelector(".container");
// if(container){
//   ScrollTrigger.create({
//     trigger: container,
//     containerAnimation: scrollTween,
//     // scrub: true,
//     start: "center 180%",
//     end: "center -180%",
//     horizontal: true,
//     markers: true,
//     onEnter: () => {console.log("enter")},
//     onLeave: () => {console.log("leave")},
//   });
// }

gsap.to("#counter", {
  duration: 2, // Duration of the animation in seconds
  innerText: 15725,
  snap: { innerText: 1 }, // Snap to whole numbers
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".counter",
    containerAnimation: scrollTween,
    scrub: true,
    start: "center 80%",
    end: "center 58%",
    markers: { startColor: "white", endColor: "white" },
  },
  onUpdate: function () {
    document.getElementById("counter").innerText = Math.floor(this.targets()[0].innerText);
  }
});


gsap.to("#counter2", {
  duration: 2, // Duration of the animation in seconds
  innerText: 15883,
  snap: { innerText: 1 }, // Snap to whole numbers
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".counter2",
    containerAnimation: scrollTween,
    scrub: true,
    start: "center 80%",
    end: "center 58%",
    markers: { startColor: "white", endColor: "white" },
  },
  onUpdate: function () {
    document.getElementById("counter2").innerText = Math.floor(this.targets()[0].innerText);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    "#biblio_graph",
    { opacity: 0, scale: 0.5, rotation: 0, transformOrigin: "50% 50%" },
    {
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 1.5,
      ease: "back.out(0.9)",
      scrollTrigger: {
        trigger: "#biblio_graph",
        containerAnimation: scrollTween,
        start: "0% 80%",
        end: "center 58%",
        toggleActions: "play none none reset",
        // markers: { startColor: "white", endColor: "white" },
      },
    }
  );
});


// utilise scrolltriger pour faire en sorte que #firstLottieBiblio n'apparaisse que lorsque l'élément #firstLottieBiblio est visible

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