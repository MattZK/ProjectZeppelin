var list = [];

// Initiate Vue app
var app = new Vue({
  el: '#app',
  data: {
    authors: [
      'Matthias Willemsen',
      'Tom Meyers'
    ],
    activePage: undefined,
    activePageName: 'Home |',
    activePageContent: undefined,
    allPageContent: [],
    version: version
  },
  methods: {},
  watch: {
    activePage: function () {
      this.activePageName = modules.langs[this.activePage].displayname;
      /*fetch(modules.langs[this.activePage].path).then(function (res) {
        return res.json();
      }).then(function (value) {
        app.activePageContent = [];
        app.activePageContent = value;
        setTimeout(function () {
          Prism.highlightAll();
        }, 10);
      });*/
    }
  },
  mounted: function(){
    modules.subdevs.forEach(function (subdev) {
      modules[subdev].contains.forEach(function (lang) {
        list.push(
          fetch(modules.langs[lang].path).then(function (res) {
            return res.json();
          }).then(function (value) {
            list[lang] = value;
          })
        )
      });
    });
    Promise.all(list).then(function () {
      console.log('Loaded External JSON Files.');
      console.log('Total amount: ' + list.length);
      allPageContent = list;
      app.activePage = 'CPP';
      
      setTimeout(function () {
        Prism.highlightAll();
      }, 10);
    });
  }
});

var x = {
  mounted: function(){
    window.addEventListener('scroll', this.handleScroll);
    content.forEach(function (lang, index) {
      list.push(
        fetch(lang.path).then(function (res) {
          return res.json();
        }).then(function (value) {
          results[lang.name] = value;
        })
      )
    });
    Promise.all(list).then(function () {
      console.log('Loaded External JSON Files.');
      console.log('Total amount: ' + list.length);
      this.elements = results;
      app.activePage = 'C++';
      setTimeout(function () {
        Prism.highlightAll();
      }, 10);
    });
  }
};