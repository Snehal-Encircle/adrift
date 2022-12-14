

gsap.registerPlugin(ScrollTrigger)
const boxes = gsap.utils.toArray('#innerData');

boxes.forEach((innerData, i) => {
    const anim = gsap.fromTo(innerData, { autoAlpha: 0, y: 90 }, { duration: 1, autoAlpha: 1, y: 0 });
    // const anim1 = gsap.fromTo(Img, { autoAlpha: 0, x: 90 }, { duration: 1, autoAlpha: 1, x: 0 });
    ScrollTrigger.create({
        trigger: innerData,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
    });
});

