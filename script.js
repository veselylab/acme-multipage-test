(function() {
    var t = document.getElementById('menuToggle');
    var d = document.getElementById('mobileDrawer');
    if (t && d) {
      t.addEventListener('click', function() {
        var open = d.classList.toggle('open');
        t.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
  })();