// ------------------- NOTES -----------------------

// ------ GSAP OBJECT

// A tween is a single movement in an animation.
// SYNTAX: gsap.method(element, vars object)
// ------------------------------------------------------------

// The gsap object serves as the access point for most of GSAP's functionality. It's just a generic object with various methods and properties that create and control Tweens and Timelines (the key players in all of GSAP).
// ------------------------------------------------------------

// ------ gsap.to()
// The most common type of animation is a to() tween because it allows you to define the destination values (and most people think in terms of animating (to)certain values)

// GSAP figures out the current values automatically (you don't need to define starting values
// ------------------------------------------------------------

// duration: how much time?
// x: transformX(value)
// y: transformY(value)
// repeat -1: repeat infinite times.
// yoyo: Go back and forth
// --------------------------------------------------

gsap.to(".box", {
  duration: 2,
  y: 100,
  repeat: -1,
  yoyo: true,
});
