import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer> {(context) => {
        const { isLightTheme, light, dark } = context;
    const theme = isLightTheme ? light : dark;
          return (
<nav style= {{background: theme.ui, color: theme.syntax}}>

<h1> Context App </h1>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/">About</a></li>
  <li><a href="/">Contact</a></li>
</ul>
      </nav>
          )
      } }</ThemeContext.Consumer>
    )
  }
}

export default Navbar;