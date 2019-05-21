let roundDown = document.getElementById('round-down');
let roundUp = document.getElementById('round-up');
let round = document.getElementById('round');
let ups = document.querySelectorAll('.vp-up, .cp-up');
let downs = document.querySelectorAll('.vp-down, .cp-down');
let roundpress;

roundDown.addEventListener('click', function() {
  if (round.innerHTML > 1) {
    round.innerHTML--;
  }
});

roundUp.addEventListener('click', function() {
  if (round.innerHTML < 6) {
    round.innerHTML++;
  }
});

ups.forEach(function(e) {
  e.addEventListener('click', function(e) {
    let points = this.nextElementSibling.firstElementChild;
    if (points.innerHTML < 99) {
      points.innerHTML++;
    }
  });
});

downs.forEach(function(e) {
  e.addEventListener('click', function(e) {
    let points = this.previousElementSibling.firstElementChild;
    if (points.innerHTML > 0) {
      points.innerHTML--;
    }
  });
});

round.addEventListener('touchstart', function() {
  roundpress = true;
  setTimeout(function() {
    if (roundpress) {
      let points = document.querySelectorAll('.points');
      points.forEach(function(e) {
        e.innerHTML = 0;
      });
      round.innerHTML = 1;
      
    }
  }, 1000);
});

round.addEventListener('touchend', function() {
  roundpress = false;
});