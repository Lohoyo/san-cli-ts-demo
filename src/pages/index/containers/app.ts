/**
 * @file 容器组件
 * @author Lohoyo
 */

import {Component} from 'san';
import './app.less';

export default class App extends Component {

    static template = `
        <div class="main">
            <h1>\{\{title}}</h1>
            <h2>Hello world, I am OK~</h2>
        </div>
    `;

    initData():object {
        return {
            title: 'San CLI'
        };
    }
}

/* san-hmr component */
