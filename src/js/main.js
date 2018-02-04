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
    navbarState: true, // True = Open
    version: version,
    content: content,
    elements: []
  },
  methods: {
    toggleSidebar: function (force) {
      if(force === null) {
        if (this.navbarState) {
          document.getElementById('navigation').style.display = 'none';
        } else {
          document.getElementById('navigation').style.display = 'grid';
        }
        this.navbarState = !this.navbarState;
      }
    }
  },
  mounted: function(){
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
});