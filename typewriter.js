function typeWrite(txt, pos = 0) {
	var speed = 400;

  if (pos < txt.length) {
      document.getElementById("typing").innerHTML += txt.charAt(pos);
      pos++;
      setTimeout(typeWrite, speed, txt, pos);
  }
}

function cursor_animation() {
    let cursor_timings = {
        duration: 700,
        iterations: Infinity,
        easing: 'cubic-bezier(0,.26,.44,.93)'
    }
    document.querySelector(".typewriter__cursor").animate([
        {opacity: 0},
        {opacity: 0, offset: 0.7},
        {opacity: 1}
    ], cursor_timings);
}

cursor_animation();
typeWrite(" friend,");

/* idea by James */