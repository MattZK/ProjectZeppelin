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
    allLangsSections: []
  },
  methods: {},
  watch: {
    activePage: function () {
      this.activePageName = this.allLangs[this.activePage].displayname;
    }
  },
  created: function(){
    for(var key in modules) {
      if (modules.hasOwnProperty(key)) {
        this.allLangsSections.push(key);
      }
    }
    var paths = [];
    this.allLangsSections.forEach(function (section) {
      Object.keys(modules[section].content).forEach(function (lang) {
        paths[lang] = modules[section].content[lang];
      })
    });
    this.allLangs = paths;
    var list = [], results = [];
    Object.keys(this.allLangs).forEach(function (lang) {
      list.push(
        fetch(paths[lang].path).then(function (res) {
          return res.json();
        }).then(function (value) {
          results[lang.name] = value;
        })
      )
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

console.log('------- DEV START -------');
console.log(app.allLangs);
console.log(app.allLangsSections);
console.log('-------- DEV END --------');