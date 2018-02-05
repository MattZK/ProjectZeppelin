var version = {
  build: 0,
  major: 3,
  minor: 0,
  revision: 0
};

var modules = {
  main: {
    name: 'Main Languages',
    info: 'Universal Languages used for PC',
    content: {
      CPP: {
        id: 'CPP',
        abbr: 'C++',
        displayname: 'C++',
        path: 'langs/main/cpp.json',
        defaultPrism: "lang-cpp",
        enabled: true
      },
      CS: {
        id: 'CS',
        abbr: 'C#',
        displayname: 'C#',
        path: 'langs/main/cs.json',
        defaultPrism: "lang-csharp",
        enabled: true
      },
      JAVA: {
        id: 'JAVA',
        abbr: 'Java',
        displayname: 'Java',
        path: 'langs/main/cs.json',
        defaultPrism: "lang-csharp",
        enabled: false
      },
      PY: {
        id: 'PY',
        abbr: 'Python',
        displayname: 'Paython',
        path: 'langs/main/py.json',
        defaultPrism: "lang-python",
        enabled: false
      },
      ARD: {
        id: 'ARD',
        abbr: 'Arduino',
        displayname: 'Arduino',
        path: 'langs/main/ard.json',
        defaultPrism: "lang-arduino",
        enabled: true
      },
      SH: {
        id: 'SH',
        abbr: 'Bash',
        displayname: 'Bash',
        path: 'langs/main/sh.json',
        defaultPrism: "lang-bash",
        enabled: true
      }
    }
  },
  web: {
    name: 'Web Languages',
    info: 'Web Languages used for Online Development',
    content: {
      HTML: {
        id: 'HTML',
        abbr: 'HTML',
        displayname: 'HTML',
        path: 'langs/web/html.json',
        defaultPrism: "lang-html",
        enabled: true
      },
      CSS: {
        id: 'CSS',
        abbr: 'CSS',
        displayname: 'CSS',
        path: 'langs/web/css.json',
        defaultPrism: "lang-scss",
        enabled: true
      },
      JS: {
        id: 'JS',
        abbr: 'JS',
        displayname: 'JavaScript',
        path: 'langs/web/js.json',
        defaultPrism: "lang-js",
        enabled: true
      },
      TS: {
        id: 'TS',
        abbr: 'TS',
        displayname: 'TypeScript',
        path: 'langs/web/ts.json',
        defaultPrism: "lang-typescript",
        enabled: false
      }
    }
  },
  etc: {
    name: 'ETC',
    info: '',
    content: {
      DP: {
        id: 'DP',
        abbr: 'Design Patterns',
        displayname: 'Design Patterns',
        path: 'langs/etc/dp.json',
        defaultPrism: "lang-cpp",
        enabled: false
      },
      GIT: {
        id: 'GIT',
        abbr: 'GIT',
        displayname: 'GIT',
        path: 'langs/etc/git.json',
        defaultPrism: "lang-git",
        enabled: true
      },
      MOBILE: {
        id: 'MOBILE',
        abbr: 'Mobile',
        displayname: 'Mobile Development',
        path: 'langs/etc/mobile.json',
        defaultPrism: "lang-java",
        enabled: false
      },
      US: {
        id: 'US',
        abbr: 'Useful Sites',
        displayname: 'Useful Sites',
        path: 'langs/etc/us.json',
        defaultPrism: "lang-html",
        enabled: false
      }
    }
  },
  data: {
    name: 'Data Languages',
    info: '',
    content: {
      JSON: {
        id: 'JSON',
        abbr: 'JSON',
        displayname: 'JSON',
        path: 'langs/data/json.json',
        defaultPrism: "lang-json",
        enabled: true
      },
      XML: {
        id: 'XML',
        abbr: 'XML',
        displayname: 'XML',
        path: 'langs/data/xml.json',
        defaultPrism: "lang-xml",
        enabled: false
      },
      WPF: {
        id: 'WPF',
        abbr: 'XAML',
        displayname: 'XAML',
        path: 'langs/data/wpf.json',
        defaultPrism: "lang-xml",
        enabled: false
      }
    }
  },
  API: {
    name: 'API',
    info: '',
    content: {
      GL: {
        id: 'GL',
        abbr: 'OpenGL',
        displayname: 'OpenGL',
        path: 'langs/api/gl.json',
        defaultPrism: "lang-cpp",
        enabled: false
      },
      UE4: {
        id: 'UE4',
        abbr: 'UE4 API',
        displayname: 'UE4 API',
        path: 'langs/api/UE4.json',
        defaultPrism: "lang-cpp",
        enabled: false
      },
      UNITY: {
        id: 'UNITY',
        abbr: 'UNITY API',
        displayname: 'UNITY API',
        path: 'langs/api/unity.json',
        defaultPrism: "lang-csharp",
        enabled: false
      }
    }
  }
};