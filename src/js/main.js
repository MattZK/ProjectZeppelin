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
    navbarState: false, // True = Open
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
      } else {
        // TODO: Handle forced
      }
    },
    handleScroll: function () {
      /*var header = document.getElementById('header').style;
      var holder = document.getElementById('header-holder').style;
      var hero = document.getElementById('title-large').style;
      if (window.scrollY > 180) {
        header.height = '76px';
        header.position = 'fixed';
        holder.display = 'block';
        hero.lineHeight = '76px';
        hero.fontSize = '24px';
      } else {
        header.height = '256px';
        header.position = 'relative';
        holder.display = 'none';
        hero.display = 'inline-block';
        hero.lineHeight = '320px';
        hero.fontSize = '56px';
      }*/
    }
  },
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
});