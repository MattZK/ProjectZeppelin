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
    version: version,
    content: content,
    elements: []
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
      app.activePage = 'HTML';
      setTimeout(function () {
        Prism.highlightAll();
      }, 10);
    });
  }
});