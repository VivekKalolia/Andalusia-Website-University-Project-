// The below function gives a scrolling effect to the circle PNGs attached on the home & contact pages
document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var circles = document.querySelectorAll('.animated-circle');

  circles.forEach(function(circle) {
    var speed = circle.getAttribute('data-speed');
    
    // Calculate the offset for each circle based on its speed
    var circleOffset = scrollPosition * speed;
    
    // Set the new position of each circle
    circle.style.transform = 'translateY(' + circleOffset + 'px)';
  });
});
