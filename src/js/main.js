var list = [], results = [];

// Initiate Vue app
var app = new Vue({
  el: '#app',
  data: {
    authors: [
      'Matthias Willemsen',
      'Tom Meyers'
    ],
    activePage: '',
    activePageName: 'Home |',
    activePageContent: [],
    version: version
  },
  methods: {},
  watch: {
    activePage: function () {
      this.activePageName = modules.langs[this.activePage].displayname;
      console.log(modules.langs[this.activePage].path);
      
      fetch(modules.langs[this.activePage].path).then(function (res) {
        return res.json();
      }).then(function (value) {
        console.log('Fetch Success');
        this.activePageContent = value;
        setTimeout(function () {
          Prism.highlightAll();
        }, 10);
      })
    }
  },
  mounted: function(){
    modules.subdevs.forEach(function (subdev) {
      modules[subdev].contains.forEach(function (value) {
        console.log(subdev + '.' + value);
      });
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