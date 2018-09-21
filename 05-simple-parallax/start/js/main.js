$(document).ready(function () {
  // Init ScrollMagic
  const controller = new ScrollMagic.Controller()

  // pin the intro
  const pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#intro',
    triggerHook: 0,
    duration: '30%'
  })
    .setPin('#intro')
    .addTo(controller)

  // parallax scene
  var parallaxTl = new TimelineMax();
  parallaxTl
    .from('.content-wrapper', 0.4, {autoAlpha: 0, ease: Power0.easeNone}, 0.4)
    .from('.bcg', 2, {y: '-50%', ease: Power0.easeNone}, 0)
    ;

  const slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '100%'
  })
    .setTween(parallaxTl)
    .addTo(controller)

  // const showParallaxText = new ScrollMagic.Scene({
  //   triggerElement: '.content-wrapper',
  //   triggerHook: 0.75
  // })
  //   .setClassToggle('.content-wrapper', 'fade-in')
  //   .addIndicators({
  //     name: 'show text',
  //     colorTrigger: 'blue',
  //     colorStart: 'red',
  //     colorEnd: 'green'
  //   })
  //   .addTo(controller)

  // loop through each .project element
  $('.project').each(function () {
    // build a scene
    const ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9
    })
      .setClassToggle(this, 'fade-in') // add class to project01
      .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'
      }) // this requires a plugin
      .addTo(controller)
  })
})
