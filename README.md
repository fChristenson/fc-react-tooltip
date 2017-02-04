# fc-react-tooltip

A tooltip component made in react.
The tooltip can be styled and figures out on it's own where to place itself 
based on the available screen space relative to the trigger element.

## Install
`npm install fc-react-tooltip`

## Demo

![Demo](https://github.com/fChristenson/fc-react-tooltip/blob/master/demo.gif)

## Usage

```
var ReactDOM = require('react-dom');
var React = require('react');
var Tooltip = require('fc-react-tooltip');

var Example = React.createClass({

  render: function() {
    return (
      <div>
        <button id="foo">Show Tooltip</button>
        
        <Tooltip selector="#foo" overlayStyles={{}} tooltipStyles={{color: 'red'}}>
            Hello World!
        </Tooltip>
      </div>
    );
  }
});

ReactDOM.render(<Example />, document.getElementById('container'));
```
