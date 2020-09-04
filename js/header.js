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
  
  var elementWrapper = document.getElementById("header-wrapper");
  var elementBtnOpen = document.getElementById("header-menubutton");
  var elementBtnClose = document.getElementById("header-closebutton");
  var elementWrapperBg = document.getElementById("header-wrapper-bg");

  elementBtnOpen.addEventListener("click", openNav);
  elementWrapperBg.addEventListener("click", closeNav);
  elementBtnClose.addEventListener("click", closeNav);

  function openNav() {
    elementWrapper.classList.remove("header-wrapper-closed");
    elementWrapperBg.classList.remove("header-wrapper-bg-closed");
  }

  function closeNav() {
    elementWrapper.classList.add("header-wrapper-closed");
    elementWrapperBg.classList.add("header-wrapper-bg-closed");
  }
  
});