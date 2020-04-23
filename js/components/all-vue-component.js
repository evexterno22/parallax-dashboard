

Vue.component('sidenav-component',{
  template:'#sidenav-component',
  data: function(){
    return{
      options:[
         {key:0,url:'home',tooltip:'Home',icon:'fas fa-home i-medium', styleIcon:'padding: 0 6px;'}
        ,{key:1,url:'parallax2',tooltip:'Fujos',icon:'fas fa-funnel-dollar i-medium', styleIcon:''}
        ,{key:2,url:'parallax3',tooltip:'Incumplimiento',icon:'fas fa-praying-hands i-medium', styleIcon:''}
      ]
    }
  }
});



Vue.component('home-component',{
  template: '#home-component',
  data(){
    return {
      whiteSections:[
          {key: 0,id:'homeSection', title:'Home',img:"back-2.png"}      
        , {key: 1,id:'homeSection', title:'Section 1',img:"back-3.png"}      
        , {key: 2,id:'homeSection', title:'Section 2',img:"back-4.png"}      
      ]
    }
  }
});

Vue.component('white-section-component',{
  props:['section'],
  template:'#white-section-component',
});

Vue.component('kpi-component',{
  props:['kpi'],
  template:'#kpi-component',
  mounted() {
    window.appQlik[this.kpi.keyApp].getObject(this.kpi.id+this.kpi.key,this.kpi.qlik);
  },
  methods:{
    download(){
      //alert("hola mundo");
      window.appQlik[this.kpi.keyApp].getObject(this.kpi.qlik).then(model => {
        window.appQlik[this.kpi.keyApp].table(model).exportData({'format':'CSV_C','state':'A','filename': 'exportdata.csv','download': true});
      });
    }
  }
});

Vue.component('kpiin-component',{
  props:['kpiin'],
  template:'#kpiin-component',
  mounted() {
    window.appQlik[this.kpiin.keyApp].getObject(this.kpiin.id+this.kpiin.key,this.kpiin.qlik);
  },
  methods:{
    download(){
      //alert("hola mundo");
      window.appQlik[this.kpiin.keyApp].getObject(this.kpiin.qlik).then(model => {
        window.appQlik[this.kpiin.keyApp].table(model).exportData({'format':'CSV_C','state':'A','filename': 'exportdata.csv','download': true});
      });
    }
  }
});

