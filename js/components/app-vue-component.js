let headerComponent ={
  template:'#header-component',
  data: function(){
    return {
      options:[
        {key:0,url:'home',title:'Home',tooltip:'Home',icon:'fas fa-home i-tiny', styleIcon:''}
       ,{key:1,url:'section',title:'Section 1',tooltip:'Section 1',icon:'fas fa-funnel-dollar i-tiny', styleIcon:''}
       ,{key:2,url:'section',title:'Section 2',tooltip:'Section 2',icon:'fas fa-praying-hands i-tiny', styleIcon:''}
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
      var collapsible = document.querySelectorAll('.collapsible.expandable');
      var tabs = document.querySelectorAll('.tabs');
       
    
      var instDropdown1=M.Dropdown.init(dropdown1,{});
      var instSidenav = M.Sidenav.init(sidenav, {});
      var instSidenav1 = M.Sidenav.init(sidenav1,{ edge: 'left' });
      var instTooltip = M.Tooltip.init(tooltip, {});
      var instParallax = M.Parallax.init(parallax, {});
      var instScrollypsy = M.ScrollSpy.init(scrollspy, {});
      var instCollapsible = M.Collapsible.init(collapsible, {accordion: false});
      var instance = M.Tabs.init(tabs, {swipeable:true});
    }
  }).$mount('#mashup-vue');
  let evento = new Event("vue-cargado");
	document.dispatchEvent(evento);
})
