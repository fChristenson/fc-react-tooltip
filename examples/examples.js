var ReactDOM = require('react-dom');
var React = require('react');
var Tooltip = require('../index');

var Example = React.createClass({

  render: function() {
    return (
      <div>
        <button style={{position: 'absolute', top: 0, left: 0}} id="foo">Show Tooltip</button>
        <button style={{position: 'absolute', top: 0, right: 0}} id="bar">Show Tooltip</button>
        <button style={{position: 'absolute', bottom: 0, left: 0}} id="baz">Show Tooltip</button>
        <button style={{position: 'absolute', bottom: 0, right: 0}} id="bax">Show Tooltip</button>
        <button style={{position: 'absolute', top: '50vh', left: '45vw'}} id="omg">Show Tooltip</button>
        <button style={{position: 'absolute', top: '10vh', left: 0}} id="foobar">Show Tooltip</button>
        <button style={{position: 'absolute', top: '90vh', right: 0}} id="barfoo">Show Tooltip</button>
        <button style={{position: 'absolute', top: 0, right: '45vw'}} id="baxfoo">Show Tooltip</button>
        
        <Tooltip selector="#foo" tooltipStyles={{color: 'red'}}>
            Hello World!
        </Tooltip>
        <Tooltip selector="#bar">
            Hello World!
        </Tooltip>
        <Tooltip selector="#baz">
            Hello World!
        </Tooltip>
        <Tooltip selector="#bax">
            Hello World!
        </Tooltip>
        <Tooltip selector="#omg">
            Hello World!
        </Tooltip>
        <Tooltip selector="#foobar">
            Hello World!
        </Tooltip>
        <Tooltip selector="#barfoo">
            Hello World!
        </Tooltip>
        <Tooltip selector="#baxfoo">
            Hello World!
        </Tooltip>
      </div>
    );
  }
});

ReactDOM.render(<Example />, document.getElementById('container'));