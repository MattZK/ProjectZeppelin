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
        path: 'langs/main/java.json',
        defaultPrism: "lang-java",
        enabled: true
      },
      PY: {
        id: 'PY',
        abbr: 'Python',
        displayname: 'Python',
        path: 'langs/main/py.json',
        defaultPrism: "lang-python",
        enabled: true
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
        enabled: true
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
        path: 'langs/etc/US.json',
        defaultPrism: "lang-html",
        enabled: true
      }
    }
  },
  data: {
    name: 'Data Languages',
    info: 'Data formats',
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
    info: 'General API\'s',
    content: {
      UE4: {
        id: 'UE4',
        abbr: 'UE4 API',
        displayname: 'UE4 API',
        path: 'langs/API/UE4.json',
        defaultPrism: "lang-cpp",
        enabled: true
      },
      UNITY: {
        id: 'UNITY',
        abbr: 'UNITY API',
        displayname: 'UNITY API',
        path: 'langs/API/unity.json',
        defaultPrism: "lang-csharp",
        enabled: false
      }
    }
  },
    RENDERER: {
        name: 'RENDERER',
        info: 'Rendering API\'s including graphics card support',
        content: {
            GL: {
                id: 'GL',
                abbr: 'OpenGL',
                displayname: 'OpenGL',
                path: 'langs/Render/gl.json',
                defaultPrism: "lang-cpp",
                enabled: true
            },
            GLSL: {
                id: 'GLSL',
                abbr: 'GLSL',
                displayname: 'Graphics Library Shading Language',
                path: 'langs/Render/glsl.json',
                defaultPrism: "lang-glsl",
                enabled: true
            },
            DIRECTX: {
                id: 'DIRECTX',
                abbr: 'DIRECTX API',
                displayname: 'DIRECTX API',
                path: 'langs/Render/DirectX.json',
                defaultPrism: "lang-cpp",
                enabled: false
            }
        }
    }
};