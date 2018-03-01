'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = new Vue({
  el: '#app',
  data: {
    page: 'home',
    currentModule: {
      displayname: 'Project Zeppelin'
    }
  },
  methods: {
    loadmodule: function loadmodule(module) {
      //app.$forceUpdate();
      fetch(module.path).then(function (res) {
        return res.json();
      }).then(function (value) {
        app.currentModule = module;
        app.currentModule.snippets = value;
      });
      app.page = 'module-' + module.id;
      window.scroll({
        top: 0
      });
    },
    scrollto: function scrollto(id) {
      // TODO: Webkit only -> all browser support
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    },
    toggleMenuSection: function toggleMenuSection(id) {
      if (document.getElementById(id).classList.contains('closed')) {
        document.getElementById(id).classList.remove('closed');
      } else {
        document.getElementById(id).classList.add('closed');
      }
    }
  },
  mounted: function mounted() {
    setTimeout(function () {
      if ((typeof Storage === 'undefined' ? 'undefined' : _typeof(Storage)) && localStorage.getItem('currentModuleId')) {
        var module = modules[localStorage.getItem('currentModuleId')];
        fetch(module.path).then(function (res) {
          return res.json();
        }).then(function (value) {
          app.currentModule = module;
          app.currentModule.snippets = value;
        });
        app.page = 'module-' + module.id;
        sections.forEach(function (item) {
          if (item.contains.includes(module.id)) {
            document.getElementById(item.id).classList.remove('closed');
          }
        });
      }
    }, 1);
  },
  watch: {
    currentModule: function currentModule() {
      if (typeof Storage === 'undefined' ? 'undefined' : _typeof(Storage)) {
        localStorage.setItem('currentModuleId', app.currentModule.id);
      }
      setTimeout(function () {
        Prism.highlightAll();
      }, 10);
    }
  }
});

var menu = {
  init: function init() {
    document.querySelector('aside .dimmer').addEventListener('click', function () {
      menu.close();
    });
    document.querySelector('nav .header').addEventListener('click', function () {
      menu.close();
    });
    document.querySelector('header .menu').addEventListener('click', function () {
      menu.open();
    });
    window.addEventListener('scroll', function () {
      if (window.scrollY > 2) {
        document.querySelector('header').classList.add('shadow');
      } else {
        document.querySelector('header').classList.remove('shadow');
      }
    });
  },
  close: function close() {
    document.querySelector('aside .dimmer').style.opacity = 0;
    document.querySelector('aside .dimmer').style.pointerEvents = 'none';
    document.querySelector('aside nav').style.transform = 'translate(-100%, 0)';
    setTimeout(function () {
      document.querySelector('aside').style.display = 'none';
    }, 200);
    document.body.classList.remove('noscroll');
  },
  open: function open() {
    document.querySelector('aside').style.display = 'block';
    setTimeout(function () {
      document.querySelector('aside .dimmer').style.opacity = 1;
      document.querySelector('aside .dimmer').style.pointerEvents = 'visible';
      document.querySelector('aside nav').style.transform = 'translate(0, 0)';
    }, 50);
    document.body.classList.add('noscroll');
  }
};

window.addEventListener('DOMContentLoaded', function () {
  menu.init();
});