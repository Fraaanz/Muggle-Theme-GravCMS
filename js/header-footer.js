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
  
  document.getElementById("nav-menubutton").addEventListener("click", openNav);

  document.getElementById("nav-closebutton").addEventListener("click", closeNav);

  document.getElementById("nav-closearea").addEventListener("click", closeNav);

  function openNav() {
    var elementWrapper = document.getElementById("nav-wrapper");
    var elementMenuButton = document.getElementById("nav-menubutton");
    var elementCloseButton = document.getElementById("nav-closebutton");
    elementWrapper.classList.remove("nav-wrapper-close");
    elementMenuButton.classList.add("nav-menubutton-ani");
    elementCloseButton.classList.remove("nav-closebutton-ani");
    var elementNav = document.getElementById("nav");
    setTimeout(function() {
      elementNav.classList.remove("nav-close");
    }, 10);
    
  }

  function closeNav() {
    var elementWrapper = document.getElementById("nav-wrapper");
    var elementMenuButton = document.getElementById("nav-menubutton");
    var elementCloseButton = document.getElementById("nav-closebutton");
    elementMenuButton.classList.remove("nav-menubutton-ani");
    elementCloseButton.classList.add("nav-closebutton-ani");
    setTimeout(function() {
      elementWrapper.classList.add("nav-wrapper-close");
    }, 250);
    var elementNav = document.getElementById("nav");
    elementNav.classList.add("nav-close");
    

  }
  
});