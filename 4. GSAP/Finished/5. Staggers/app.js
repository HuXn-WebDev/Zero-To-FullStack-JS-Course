// ------------------- NOTES -----------------------
// stagger: { amount:0, from: 0 }

// amount: The total amount of time (in seconds) that gets split up among all the staggers.

// each: The amount of time (in seconds) between each sub-tween's start time.

// from: The position in the array from which the stagger will emanate.

// 👉 https://greensock.com/docs/v3/Staggers

// Multiple selection in useRef 👇
// https://adics.hashnode.dev/using-useref-to-multiple-elements-in-react-js
// --------------------------------------------------

gsap.set(".box", {
  borderRadius: 0,
});

gsap.to(".box", {
  borderRadius: 100,
  duration: 1,
  y: -100,
  ease: "power1",
  yoyo: true,
  repeat: -1,
  stagger: {
    amount: 4,
    each: 0.5,
    from: 0,
  },
});
