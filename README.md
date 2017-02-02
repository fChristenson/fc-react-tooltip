# fc-react-tooltip

A tooltip component made in react

## Install
`npm install fc-react-tooltip`

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