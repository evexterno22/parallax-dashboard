document.addEventListener('vue-cargado', function() {
  var sidenav = document.querySelectorAll('.sidenav');
  var sidenav1 = document.querySelectorAll('#sidenav-1');
  var dropdown1 = document.querySelectorAll('.dropdown-trigger');
  var tooltip=document.querySelectorAll('.tooltipped');
  var parallax = document.querySelectorAll('.parallax');
  var scrollspy = document.querySelectorAll('.scrollspy');

  var instDropdown1=M.Dropdown.init(dropdown1,{});
  var instSidenav = M.Sidenav.init(sidenav, {});
  var instSidenav1 = M.Sidenav.init(sidenav1,{ edge: 'left' });
  var instTooltip = M.Tooltip.init(tooltip, {});
  var instParallax = M.Parallax.init(parallax, {});
  var instScrollypsy = M.ScrollSpy.init(scrollspy, {});


});
