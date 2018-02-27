const version = {
  build: 0,
  major: 3,
  minor: 0,
  revision: 0
};

const modules = [
  {
    id: 'HTML',
    abbr: 'HTLM',
    displayname: 'HTML',
    path: 'langs/web/html.json',
    defaultPrism: "lang-html",
    enabled: true
  },
  {
    id: 'CSS',
    abbr: 'CSS',
    displayname: 'CSS',
    path: 'langs/web/css.json',
    defaultPrism: "lang-scss",
    enabled: true
  },
  {
    id: 'JS',
    abbr: 'JS',
    displayname: 'JavaScript',
    path: 'langs/web/js.json',
    defaultPrism: "lang-js",
    enabled: true
  },
  {
    id: 'TS',
    abbr: 'TS',
    displayname: 'TypeScript',
    path: 'langs/web/ts.json',
    defaultPrism: "lang-typescript",
    enabled: false
  },
  {
    id: 'CS',
    abbr: 'C#',
    displayname: 'C#',
    path: 'langs/main/cs.json',
    defaultPrism: "lang-csharp",
    enabled: true
  },
  {
    id: 'CPP',
    abbr: 'C++',
    displayname: 'C++',
    path: 'langs/main/cpp.json',
    defaultPrism: "lang-cpp",
    enabled: false
  },
  {
    id: 'JAVA',
    abbr: 'Java',
    displayname: 'Java',
    path: 'langs/main/java.json',
    defaultPrism: "lang-java",
    enabled: false
  },
  {
    id: 'PY',
    abbr: 'Python',
    displayname: 'Python',
    path: 'langs/main/py.json',
    defaultPrism: "lang-python",
    enabled: false
  },
  {
    id: 'ARD',
    abbr: 'Arduino',
    displayname: 'Arduino',
    path: 'langs/main/ard.json',
    defaultPrism: "lang-arduino",
    enabled: false
  },
  {
    id: 'SH',
    abbr: 'Bash',
    displayname: 'Bash',
    path: 'langs/main/sh.json',
    defaultPrism: "lang-bash",
    enabled: true
  },
  {
    id: 'DP',
    abbr: 'Design Patterns',
    displayname: 'Design Patterns',
    path: 'langs/etc/dp.json',
    defaultPrism: "lang-cpp",
    enabled: false
  },
  {
    id: 'GIT',
    abbr: 'GIT',
    displayname: 'GIT',
    path: 'langs/etc/git.json',
    defaultPrism: "lang-git",
    enabled: false
  },
  {
    id: 'MOBILE',
    abbr: 'Mobile',
    displayname: 'Mobile Development',
    path: 'langs/etc/mobile.json',
    defaultPrism: "lang-java",
    enabled: false
  },
  {
    id: 'US',
    abbr: 'Useful Sites',
    displayname: 'Useful Sites',
    path: 'langs/etc/US.json',
    defaultPrism: "lang-html",
    enabled: false
  },
  {
    id: 'JSON',
    abbr: 'JSON',
    displayname: 'JSON',
    path: 'langs/data/json.json',
    defaultPrism: "lang-json",
    enabled: false
  },
  {
    id: 'XML',
    abbr: 'XML',
    displayname: 'XML',
    path: 'langs/data/xml.json',
    defaultPrism: "lang-xml",
    enabled: false
  },
  {
    id: 'WPF',
    abbr: 'XAML',
    displayname: 'XAML',
    path: 'langs/data/wpf.json',
    defaultPrism: "lang-xml",
    enabled: false
  },
  {
    id: 'UE4',
    abbr: 'UE4 API',
    displayname: 'UE4 API',
    path: 'langs/API/UE4.json',
    defaultPrism: "lang-cpp",
    enabled: false
  },
  {
    id: 'UNITY',
    abbr: 'UNITY API',
    displayname: 'UNITY API',
    path: 'langs/API/unity.json',
    defaultPrism: "lang-csharp",
    enabled: false
  },
  {
    id: 'GL',
    abbr: 'OpenGL',
    displayname: 'OpenGL',
    path: 'langs/Render/gl.json',
    defaultPrism: "lang-cpp",
    enabled: false
  },
  {
    id: 'GLSL',
    abbr: 'GLSL',
    displayname: 'Graphics Library Shading Language',
    path: 'langs/Render/glsl.json',
    defaultPrism: "lang-glsl",
    enabled: false
  },
  {
    id: 'DIRECTX',
    abbr: 'DIRECTX API',
    displayname: 'DIRECTX API',
    path: 'langs/Render/DirectX.json',
    defaultPrism: "lang-cpp",
    enabled: false
  }
]
