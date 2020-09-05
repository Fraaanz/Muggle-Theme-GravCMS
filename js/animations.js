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
        elementAnimation(document.querySelector(".scrolldetector"), 0);
    }

    var elementAnimation = function(scrollElement, scrollVariation) {
        offsetTop = scrollElement.getBoundingClientRect().bottom;
        outVal = 0;
        if (offsetTop < scrollVariation) {
            outVal = -offsetTop+scrollVariation;
            document.querySelector(".header").classList.add("header-sticky");
        } else {
          document.querySelector(".header").classList.remove("header-sticky");
        }
        //console.log(outVal);
    }

    window.addEventListener("scroll", updateStyles);
    
}); 


