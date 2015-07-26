import React from 'react';
import Duoshuo from '../src/index';

require('./demo.less');

React.render(
  <Duoshuo thread="/blog/2015/05/15/react-and-webpack/" url="http://lingyu.wang/2015/05/15/react-and-webpack/" shortName="skyinlayer"/>,
  document.getElementById('duoshuo')
);
