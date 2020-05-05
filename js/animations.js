// check if document is ready

function ready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading')
          fn();
      });
    }
}
  
// run ->
  
window.ready(function() {
    
    var updateStyles = function() {
        elementAnimation(document.querySelector(".m-stage h1"), 220);
        elementAnimation(document.querySelector(".m-stage p"), 220);
        elementAnimation(document.querySelector(".m-stage picture"), 260);
        elementAnimation(document.querySelector(".m-stage"), 180);
    }

    var elementAnimation = function(scrollElement, scrollVariation) {
        offsetTop = scrollElement.getBoundingClientRect().bottom;
        outVal = 0;
        if (offsetTop < scrollVariation) {
            outVal = -offsetTop+scrollVariation;
            scrollElement.style.opacity = Math.max(0, (100-outVal*1)/100);
        } else {
            scrollElement.style.opacity = 1;
        }
    }

    window.addEventListener("scroll", updateStyles);
    
}); 


