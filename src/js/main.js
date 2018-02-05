var list = [];

// Initiate Vue app
var app = new Vue({
  el: '#app',
  data: {
    authors: [
      'Matthias Willemsen',
      'Tom Meyers'
    ],
    version: version,
    activePage: undefined,
    activePageName: 'Home |',
    activePageContent: undefined,
    allPageContent: [],
    allLangs: [],
    allLangsSections: [],
    allLangsPaths: []
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
    for(var key in modules) {
      this.allLangsSections.push(key);
    }
    var langs = [];
    this.allLangsSections.forEach(function (section) {
      console.log(Object.keys(modules[section].content));
      langs.concat(Object.keys(modules[section].content));
    });
    this.allLangs = langs;
    //app.allLangsSections = keys;
    
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
var y = {
  y: function () {
    keys.forEach(function (subdev) {
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
};

console.log('------------------');
console.log(app.allLangs);
console.log(app.allLangsSections);
console.log(app.allLangsPaths);
