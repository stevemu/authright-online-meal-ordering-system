import React from 'react';
import Menu from './Menu';
import Order from './Order';

export default class extends React.Component {

  render() {
    return <div>
      <Menu />
      <Order />
    </div>
  }
}
