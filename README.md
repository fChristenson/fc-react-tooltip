# fc-react-tooltip

A tooltip component made in react.
The tooltip can be styled and figures out on it's own where to place itself 
based on the available screen space relative to the trigger element.

## Install
`npm install fc-react-tooltip`

## Demo

![Demo](https://github.com/fChristenson/fc-react-tooltip/blob/master/demo.gif)

[Try the online example](https://fchristenson.github.io/fc-react-tooltip/)

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
Pass a unique selector for the element that will trigger the tooltip on click to the `selector` property.

You can set the inline styles for the tooltip by passing your styles in the `tooltipStyles` property.

You can also style the tooltip's overlay that covers the screen to catch the click that removes the tooltip by
passing styles to `overlayStyles`.

If you want to approach the styling using css use `.fc-overlay` and `.fc-tooltip` to do your styling.
