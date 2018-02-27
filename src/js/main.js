var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    page: 'home',
    currentModule: {
      displayname: 'Project Zeppelin'
    }
  },
  methods: {
    loadmodule: (module) => {
      //app.$forceUpdate();
      fetch(module.path).then(function (res) {
        return res.json();
      }).then(function (value) {
        app.currentModule = module;
        app.currentModule.snippets = value;
      });
      app.page = 'module-' + module.id;
    }
  },
  mounted: () => {
    setTimeout(function () {
      if (typeof(Storage) && localStorage.getItem('currentModuleId')) {
        modules.forEach(module => {
          if(module.id == localStorage.getItem('currentModuleId')) {
            fetch(module.path).then(function (res) {
              return res.json();
            }).then(function (value) {
              app.currentModule = module;
              app.currentModule.snippets = value;
            });
            app.page = 'module-' + module.id;
          }
        });
      }
    }, 100);
    
  },
  watch: {
    currentModule: () => {
      if (typeof(Storage)) {
        localStorage.setItem('currentModuleId', app.currentModule.id);
      }
      setTimeout(function () {
        Prism.highlightAll();
      }, 10);
    }
  }
})

let menu = {
  init: () => {
    document.querySelector('aside .dimmer').addEventListener('click', () => { menu.close() });
    document.querySelector('nav .header').addEventListener('click', () => { menu.close() });
    document.querySelector('header .menu').addEventListener('click', () => { menu.open() });
    window.addEventListener('scroll', () => {
      if (window.scrollY > 2) {
        document.querySelector('header').classList.add('shadow');
      } else {
        document.querySelector('header').classList.remove('shadow');
      }
    });
  },
  close: () => {
    document.querySelector('aside .dimmer').style.opacity = 0;
    document.querySelector('aside .dimmer').style.pointerEvents = 'none';
    document.querySelector('aside nav').style.transform = 'translate(-100%, 0)';
    setTimeout(() => {
      document.querySelector('aside').style.display = 'none';
    }, 200);
    document.body.classList.remove('noscroll');
  },
  open: () => {
    document.querySelector('aside').style.display = 'block';
    setTimeout(() => {
      document.querySelector('aside .dimmer').style.opacity = 1;
      document.querySelector('aside .dimmer').style.pointerEvents = 'visible';
      document.querySelector('aside nav').style.transform = 'translate(0, 0)';
    }, 50);
    document.body.classList.add('noscroll');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  menu.init();
});
// Initiate Vue app
/*var app = new Vue({
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
    allLangsList: [],
    allLangsSections: [],
    loading: true
  },
  methods: {},
  watch: {
    activePage: function () {
      this.activePageName = this.allLangs[this.activePage].displayname;
      if (typeof(Storage)) {
        localStorage.setItem('activePage', this.activePage);
      }
      setTimeout(function () {
        Prism.highlightAll();
      }, 10);
    }
  },
  mounted: function(){
    for(var key in modules) {
      if (modules.hasOwnProperty(key)) {
        this.allLangsSections.push(key);
      }
    }
    var paths = [], langs = [];
    this.allLangsSections.forEach(function (section) {
      langs = langs.concat(Object.keys(modules[section].content));
      Object.keys(modules[section].content).forEach(function (lang) {
        paths[lang] = modules[section].content[lang];
      })
    });
    this.allLangsList = langs;
    this.allLangs = paths;
    var list = [], results = [];
    Object.keys(this.allLangs).forEach(function (lang) {
      list.push(
        fetch(paths[lang].path).then(function (res) {
          return res.json();
        }).then(function (value) {
          results[lang] = value;
        })
      )
    });
    Promise.all(list).then(function () {
      console.log('Loaded External JSON Files.');
      console.log('Total amount: ' + list.length);
      app.allPageContent = results;
      if (typeof(Storage) && localStorage.getItem('activePage')) {
        app.activePage = localStorage.getItem('activePage');
      }
      setTimeout(function () {
        Prism.highlightAll();
        setTimeout(function () {
          app.loading = false;
        }, 500);
      }, 10);
    });
  }
});

app = null;*/

/*
console.log('------- DEV START -------');
console.log(app.allLangs);
console.log(app.allLangsSections);
console.log('-------- DEV END --------');
*/