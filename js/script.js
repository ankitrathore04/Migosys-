const openEl = document.querySelector('.btn-mobile-nav');
const closeEl = document.querySelector('.nav');

openEl.addEventListener('click', function (){
    closeEl.classList.toggle('nav-open');
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//texts

gsap.registerPlugin(ScrollTrigger);

let t2 = gsap.timeline();
t2.to("#scrollingText", {
  x: 1000,
  duration: 50,
  repeat: -1,
  ease: 'linear'
})
let t1 = gsap.timeline();
t1.to('#scrollingText', {
  xPercent: 15,
  scrollTrigger: {
    trigger: "#scrollingText",
    scrub: 1
  }
})


const container = document.getElementById('scrollingText2');
const containerWidth = container.offsetWidth;
const content = container.innerHTML;

// Duplicate the content to create a seamless loop
container.innerHTML += container.innerHTML;

let tl2 = gsap.timeline({
  onComplete: function () {
    gsap.set("#scrollingText2", { x: -0 }); // Reset the position to start
  },
});

tl2.to("#scrollingText2", {
  x: -containerWidth,
  duration: 30,
  repeat: -1,
  ease: 'linear',
});

// const containerWidth = document.getElementById('scrollingText2').offsetWidth;
// let tl2 = gsap.timeline();
// tl2.to("#scrollingText2", {
//   x: -containerWidth,
//   duration: 20,
//   repeat: -1,
//   ease: 'linear',
// });



// let tl2 = gsap.timeline();
// tl2.to("#scrollingText2", {
//   x: -1000,
//   duration: 20,
//   repeat: -1,
//   ease: 'linear'
// })
// let tl = gsap.timeline();
// tl.to('#scrollingText2', {
//   xPercent: 15,
//   scrollTrigger: {
//     trigger: "#scrollingText2",
//     scrub: 1
//   }
// })

// let tl5 = gsap.timeline();
// tl5.to("#card-slider-text", {
//   x: -1000,
//   duration: 5,
//   repeat: -1,
//   ease: 'linear',
// })
// let t5 = gsap.timeline();
// t5.to('#card-slider-text', {
//   xPercent: 15,
//   scrollTrigger: {
//     trigger: "#card-slider-text",
//     scrub: 2,
//   }
// })

//gallary

  // gsap.registerPlugin(ScrollTrigger);
  // let sections = gsap.utils.toArray(".gallary-img");

  // gsap.to(sections, {
  //   xPercent: -100 * (sections.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".gallary",
  //     pin: ".gallary",
  //     pinSpacing: true,
  //     scrub: 3,
  //     end: "+=3000",
  //   }
  // });

//cards

gsap.registerPlugin(ScrollTrigger);

gsap.to(".cards-text p", {
  backgroundPositionX: "5%",
  stagger: .8,
  scrollTrigger: {
    trigger: ".cards-text",
    scrub: 5,
    start: "top 70%",
    end: "bottom 70%"

  }
});


const t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    start: "50% 50%",
    end: "500% 80%",
    scrub: 2,
    pin: true,
  }
});

t6.
to("#project-top", {
  top: "-50%"
},'a')

t6.
to("#project-bottom", {
  bottom: "-50%"
},'a')

t6.
to("#top-heading", {
  top: "80%"
},'a')

t6.
to("#bottom-heading", {
  top: "10%"
},'a')

t6.
to("#center-heading", {
  marginTop: "0%"
},'a')

