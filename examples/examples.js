var ReactDOM = require('react-dom');
var React = require('react');
var Tooltip = require('../src/index');

var Example = React.createClass({

  render: function() {
    return (
      <div>
        <Tooltip selector="#foo" tooltipStyles={{}}>
            Hello World!
        </Tooltip>
      </div>
    );
  }
});

ReactDOM.render(<Example />, document.getElementById('container'));