$(document).ready(function () {
  // Init img_scrollmagic
  const controller = new ScrollMagic.Controller()

  // build a Scene
  const ourScene = new ScrollMagic.Scene({
    triggerElement: '#project01 img',
    duration: '100%', // this value is based on the viewport height
    triggerHook: 0.9 // this is how close to the bottom you want the trigger to be. 0 means at the top of viewport and 1 is the bottom
  })
    .setClassToggle('#project01', 'fade-in')
    .addIndicators({ // This requires a plugin called addIndicators, that can be found in scrollMagic's docs
      name: 'fade scene',
      colorTrigger: 'black',
      colorStart: '#75C695',
      colorEnd: 'pink'
    })
    .addTo(controller)
})
