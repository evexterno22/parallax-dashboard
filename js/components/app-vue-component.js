let headerComponent ={
  template:'#header-component',
  data: function(){
    return {
      options:[
        {key:0,url:'homeSection',title:'Home',tooltip:'Home',icon:'fas fa-home i-tiny', styleIcon:''}
       ,{key:1,url:'homeSection',title:'Fujos',tooltip:'Fujos',icon:'fas fa-funnel-dollar i-tiny', styleIcon:''}
       ,{key:2,url:'homeSection',title:'Incumplimiento',tooltip:'Incumplimiento',icon:'fas fa-praying-hands i-tiny', styleIcon:''}
     ]
    }
  }
};
let mainComponent={
  template:'#main-component'
};
let footerComponent={
  template:'#footer-component'
};

document.addEventListener("qlik-cargado", () => {
	window.mashupVue = new Vue({
   // router: router,
    components:{
      'header-component': headerComponent,
      'main-component': mainComponent,
      'footer-component': footerComponent,
      //'home-component': homeComponent
    },
    mounted(){
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
    }
  }).$mount('#mashup-vue');
  let evento = new Event("vue-cargado");
	document.dispatchEvent(evento);
})
