# qiankun

[快速上手](https://qiankun.umijs.org/zh/guide/getting-started)

## 项目实践

以react为基座：

一、主应用（main）

1. 安装 qiankun
```
npx create-react-app main
cd main
yarn add qiankun # 或者 npm i qiankun -S
```

2. 在主应用中注册微应用
src/index.js
```
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app/react',
  },
  {
    name: 'vue app',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app/vue',
  },
  {
    name: 'angular app',
    entry: '//localhost:4200',
    container: '#container',
    activeRule: '/app/angular',
  },
]);

start();
```

src/App.js
```
<div id='container' />
```

3. 启动
```
npm start
```

二、微应用（app_react）

```
npx create-react-app app_react
cd app_react
npm i -S react-router-dom@5
npm i -D @rescripts/cli
```

```
1. 在 src 目录新增 public-path.js
2. 设置 history 模式路由的 base
3. 入口文件 index.js 修改，为了避免根 id #root 与其他的 DOM 冲突，需要限制查找范围。
4. 修改 webpack 配置
```

```
npm run start
```

src/public-path.js
```
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
```

package.json
```
  "eslintConfig": {
    ...
    "globals": {
      "__webpack_public_path__": true
    }
  },
```

src/index.js
```
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container ? props.container.querySelector('#root') : document.getElementById('root'),
  );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props);
}
```

webpack.config.js.bak
```
const packageName = require('./package.json').name;

module.exports = {
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`,
  },
};
```

三、微应用（app_vue）

版本：vue2

```
vue create app_vue
cd app_vue
npm i vue-router@3 -S

npm run serve
```
