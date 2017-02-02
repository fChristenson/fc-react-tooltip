var React = require('react');
var ReactDOM = require('react-dom');
var Tooltip = require('./tooltip');

module.exports = React.createClass({

  displayName: 'TooltipInitializer',

  propTypes: {
    children: React.PropTypes.node.isRequired,
    selector: React.PropTypes.string.isRequired,
    overlayStyles: React.PropTypes.object,
    tooltipStyles: React.PropTypes.object
  },

  componentDidMount: function () {
    var div = document.createElement('div');
    document.body.appendChild(div);

    ReactDOM.render(React.createElement(
      Tooltip,
      {
        selector: this.props.selector,
        overlayStyles: this.props.overlayStyles,
        tooltipStyles: this.props.tooltipStyles },
      this.props.children
    ), div);
  },

  render: function () {
    return React.createElement('script', null);
  }

});