import { createApp } from 'vue' // 从vue中加载创建app的模块
import './assets/alga.css' // 加载css文件
import App from './App.vue' // 加载vue视图组件

createApp(App).mount('#app') // 创建视图并将视图渲染到指定的标签内
