'use strict';

var version = {
  build: 0,
  major: 3,
  minor: 0,
  revision: 0
};

var sections = [{
  id: 'WDEV',
  name: 'Web Development',
  contains: ['HTML', 'CSS', 'JS', 'TS']
}, {
  id: 'MLANG',
  name: 'Main Languages',
  contains: ['CPP', 'CS', 'JAVA', 'ARD']
}, {
  id: 'SCRPT',
  name: 'Scripting Languages',
  contains: ['PY', 'SH']
}, {
  id: 'DLANG',
  name: 'Data Languages',
  contains: ['JSON', 'XML']
}, {
  id: 'APIS',
  name: 'Language API\'s',
  contains: ['UE4', 'UNITY', 'GLSL']
}, {
  id: 'MISC',
  name: 'Miscellaneous',
  contains: ['DP', 'GIT']
}];

// Object key must be identical to the id!
var modules = {
  HTML: {
    id: 'HTML',
    abbr: 'HTML',
    displayname: 'HTML',
    path: 'langs/html.json',
    defaultPrism: "lang-html",
    enabled: true
  },
  CSS: {
    id: 'CSS',
    abbr: 'CSS',
    displayname: 'CSS',
    path: 'langs/css.json',
    defaultPrism: "lang-scss",
    enabled: true
  },
  JS: {
    id: 'JS',
    abbr: 'JS',
    displayname: 'JavaScript',
    path: 'langs/js.json',
    defaultPrism: "lang-js",
    verified: true,
    enabled: true
  },
  TS: {
    id: 'TS',
    abbr: 'TS',
    displayname: 'TypeScript',
    path: 'langs/ts.json',
    defaultPrism: "lang-typescript",
    enabled: false
  },
  CS: {
    id: 'CS',
    abbr: 'C#',
    displayname: 'C#',
    path: 'langs/cs.json',
    defaultPrism: "lang-csharp",
    enabled: true
  },
  CPP: {
    id: 'CPP',
    abbr: 'C++',
    displayname: 'C++',
    path: 'langs/cpp.json',
    defaultPrism: "lang-cpp",
    enabled: true
  },
  JAVA: {
    id: 'JAVA',
    abbr: 'Java',
    displayname: 'Java',
    path: 'langs/java.json',
    defaultPrism: "lang-java",
    enabled: true
  },
  PY: {
    id: 'PY',
    abbr: 'Python',
    displayname: 'Python',
    path: 'langs/py.json',
    defaultPrism: "lang-python",
    enabled: true
  },
  ARD: {
    id: 'ARD',
    abbr: 'Arduino',
    displayname: 'Arduino',
    path: 'langs/ard.json',
    defaultPrism: "lang-arduino",
    enabled: true
  },
  SH: {
    id: 'SH',
    abbr: 'Bash',
    displayname: 'Bash',
    path: 'langs/sh.json',
    defaultPrism: "lang-bash",
    enabled: true
  },
  DP: {
    id: 'DP',
    abbr: 'Design Patterns',
    displayname: 'Design Patterns',
    path: 'langs/dp.json',
    defaultPrism: "lang-cpp",
    enabled: true
  },
  GIT: {
    id: 'GIT',
    abbr: 'GIT',
    displayname: 'GIT',
    path: 'langs/git.json',
    defaultPrism: "lang-git",
    enabled: true
  },
  MOBILE: {
    id: 'MOBILE',
    abbr: 'Mobile',
    displayname: 'Mobile Development',
    path: 'langs/mobile.json',
    defaultPrism: "lang-java",
    enabled: false
  },
  US: {
    id: 'US',
    abbr: 'Useful Sites',
    displayname: 'Useful Sites',
    path: 'langs/US.json',
    defaultPrism: "lang-html",
    enabled: false
  },
  JSON: {
    id: 'JSON',
    abbr: 'JSON',
    displayname: 'JSON',
    path: 'langs/json.json',
    defaultPrism: "lang-json",
    enabled: false
  },
  XML: {
    id: 'XML',
    abbr: 'XML',
    displayname: 'XML',
    path: 'langs/xml.json',
    defaultPrism: "lang-xml",
    enabled: false
  },
  WPF: {
    id: 'WPF',
    abbr: 'XAML',
    displayname: 'XAML',
    path: 'langs/wpf.json',
    defaultPrism: "lang-xml",
    enabled: false
  },
  UE4: {
    id: 'UE4',
    abbr: 'UE4 API',
    displayname: 'UE4 API',
    path: 'langs/UE4.json',
    defaultPrism: "lang-cpp",
    enabled: true
  },
  UNITY: {
    id: 'UNITY',
    abbr: 'UNITY API',
    displayname: 'UNITY API',
    path: 'langs/unity.json',
    defaultPrism: "lang-csharp",
    enabled: false
  },
  GL: {
    id: 'GL',
    abbr: 'OpenGL',
    displayname: 'OpenGL',
    path: 'langs/gl.json',
    defaultPrism: "lang-cpp",
    enabled: false
  },
  GLSL: {
    id: 'GLSL',
    abbr: 'GLSL',
    displayname: 'Graphics Library Shading Language',
    path: 'langs/glsl.json',
    defaultPrism: "lang-glsl",
    enabled: true
  },
  DIRECTX: {
    id: 'DIRECTX',
    abbr: 'DIRECTX API',
    displayname: 'DIRECTX API',
    path: 'langs/DirectX.json',
    defaultPrism: "lang-cpp",
    enabled: false
  }
};