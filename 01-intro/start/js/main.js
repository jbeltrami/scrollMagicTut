$(document).ready(function() {
  // Init img_scrollmagic
  const controller = new ScrollMagic.Controller()

  // loop to each .project element
  $('.project').each(function () {

    console.log(this)
    // build a Scene
    const ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.75, // this is how close to the bottom you want the trigger to be. 0 means at the top of viewport and 1 is the bottom
      reverse: false
    })
      .setClassToggle(this, 'fade-in')
      .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        colorStart: '#75C695',
        colorEnd: 'pink'})// This requires a plugin called addIndicators, that can be found in scrollMagic's docs
      .addTo(controller)
  })
})
