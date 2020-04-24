

Vue.component('sidenav-component',{
  props:['options'],
  template:'#sidenav-component',
  data: function(){
    return{
     
    }
  }
});



Vue.component('home-component',{
  template: '#home-component',
  data(){
    return {
      whiteSections:[
          {key: 0,id:'home', title:'Home',img:"back-2.png",
            simpleContent: {
                row1KPI: [
                  {key: 0, id: 'homeKPI',size:'s6 m4 l3',keyApp:0,qlik:'qamd', title: 'Créditos',style:'kpi-xs', download: false,
                  /* kpiIn:{
                      row1KPIN:[
                            { key: 0, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s12 m12 l12',keyApp:0,qlik:'NrHfp', title: '',style:'kpiin-xs', download: false}
                          ]
                      , row2KPIN:[
                            { key: 1, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Periodo Anterior',style:'kpiin-xs', download: false}
                          , { key: 2, id: 'homeKPIN',icon:'fas fa-dollar-sign i-tiny',size:'s6 m6 l6',keyApp:0,qlik:'ajMAEu', title: 'Año Anterior',style:'kpiin-xs', download: false}
      
                          ]}*/
                  }
                , { key: 1, id: 'homeKPI',size:'s6 m4 l3',keyApp:0,qlik:'JcJvj', title: 'Capital',style:'kpi-xs', download: false,}
                , { key: 2, id: 'homeKPI',size:'s6 m4 l3',keyApp:0,qlik:'WJYuPN', title: 'Interés',style:'kpi-xs', download: false,}
                , { key: 3, id: 'homeKPI',size:'s6 m4 l3',keyApp:0,qlik:'WJYuPN', title: 'Total',style:'kpi-xs', download: false,}
                ]
              }
            
          }      
        , {key: 1,id:'section', title:'Section 1',img:"back-3.png",
            collapsibleContent:[
                  {key:0 ,title:'' ,icon:'',content:[
                              { key: 0, id: 'sectionKPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 1',style:'kpi-xs', download: false,}
                          ,   { key: 1, id: 'sectionKPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 2',style:'kpi-xs', download: false,}
                          ]},
                  {key:0 ,title:'' ,icon:'', content:[
                              { key: 2, id: 'sectionKPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 3',style:'kpi-xs', download: false,}
                          ,   { key: 3, id: 'sectionKPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 4',style:'kpi-xs', download: false,}
                          ]
                  }
                ]
          }      
        , {key: 2,id:'section', title:'Section 2',img:"back-4.png"}      
      ]
    }
  }
});

Vue.component('white-section-component',{
  props:['section'],
  template:'#white-section-component',
  methods:{
    collapsed(content){
      let key=0;
      let kpi={};
      while(content.length>key){
        kpi=content[key];
        window.appQlik[kpi.keyApp].getObject(kpi.id+kpi.key,kpi.qlik);
        key++;
      }
    }
  },

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

