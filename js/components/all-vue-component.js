

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

              { size:'s6',content:[ {key:0 ,active:'active',title:'Sección 1' ,icon:'fas fa-chart-line',content:[
                              { key: 0, id: 'collapsible1KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 1',style:'kpi-xs', download: false,}
                          ,   { key: 1, id: 'collapsible1KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 2',style:'kpi-xs', download: false,}
                          ]},
                          {key:1 ,active:'',title:'Sección 2' ,icon:'fas fa-coins', content:[
                                      { key: 2, id: 'collapsible1KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 3',style:'kpi-xs', download: false,}
                                  ,   { key: 3, id: 'collapsible1KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 4',style:'kpi-xs', download: false,}
                                  ]
                          }
                        ]
                },
                { size:'s6',content:[ {key:2 ,active:'',title:'Sección 3' ,icon:'fas fa-chart-line',content:[
                                { key: 4, id: 'collapsible2KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 1',style:'kpi-xs', download: false,}
                            ,   { key: 5, id: 'collapsible2KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 2',style:'kpi-xs', download: false,}
                            ]},
                            {key:3 ,active:'active',title:'Sección 4' ,icon:'fas fa-coins', content:[
                                        { key: 6, id: 'collapsible2KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 3',style:'kpi-xs', download: false,}
                                    ,   { key: 7, id: 'collapsible2KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 4',style:'kpi-xs', download: false,}
                                    ]
                            }
                          ]
                  }
                ]
          }      
        , {key: 2,id:'section', title:'Section 2',img:"back-4.png",
              tabsContent:[
                {key:0 ,id:'section1Tab',size:'s6',active:'',title:'Sección 1' ,icon:'fas fa-chart-line',content:[
                            { key: 0, id: 'tab1KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 1',style:'kpi-xs', download: false,}
                        ,   { key: 1, id: 'tab1KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 2',style:'kpi-xs', download: false,}
                        ]},
                {key:1 ,id:'section1Tab',size:'s6',active:'active',title:'Sección 2' ,icon:'fas fa-coins', content:[
                            { key: 2, id: 'tab1KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 3',style:'kpi-xs', download: false,}
                        ,   { key: 3, id: 'tab1KPI',size:'s6 m6 l6',keyApp:0,qlik:'JcJvj', title: 'Capital 4',style:'kpi-xs', download: false,}
                        ]
                }
              ]
          }      
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

