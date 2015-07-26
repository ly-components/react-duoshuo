# React Duoshuo

一个展示Duoshuo评论的React组件

## Install

```bash
$ npm install --save react-duoshuo
```

## Usage

由于多说官方运行库依赖jQuery，请保证全局下有jQuery...

```javascript
import React from 'react';
import Duoshuo from 'react-duoshuo';

React.render(
  <Duoshuo thread="/blog/2015/05/15/react-and-webpack/" url="http://lingyu.wang/2015/05/15/react-and-webpack/" shortName="skyinlayer"/>,
  document.getElementById('duoshuo')
);
```

## Properties

```javascript
thread: React.PropTypes.string, //同多说的data-thread-key
shortName: React.PropTypes.string, //多说的short_name
url: React.PropTypes.string //同多说的data-url
```


## Development

```bash
$ npm start
$ open http://127.0.0.1:3000/demo/demo.html
```

## License
The MIT License (MIT)

Copyright (c) 2015 天镶

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
