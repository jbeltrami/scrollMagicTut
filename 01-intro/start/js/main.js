$(document)
  .ready(function () {
    // Init img_scrollmagic
    const controller = new ScrollMagic.Controller()

    const pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0,
        duration: '30%'
      })
      .setPin('#intro', {
        pushFollowers: false
      })
      .addTo(controller);

    const pinIntroSceneEnd = new ScrollMagic.Scene({
        triggerElement: '#project01',
        triggerHook: 0.4
      })
      .setPin('#intro', {
        pushFollowers: false
      })
      .addTo(controller);

    // loop to each .project element
    $('.project')
      .each(function () {
        // build a Scene
        const ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.75 // this is how close to the bottom you want the trigger to be. 0 means at the top of viewport and 1 is the bottom
          })
          .setClassToggle(this, 'fade-in')
          .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695',
            colorEnd: 'pink'
          }) // This requires a plugin called addIndicators, that can be found in scrollMagic's docs
          .addTo(controller)
      })
  })
