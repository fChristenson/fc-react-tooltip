var React = require('react');
var ReactDOM = require('react-dom');
var Tooltip = require('./tooltip');

module.exports = React.createClass({

  displayName: 'TooltipInitializer',

  propTypes: {
    children: React.PropTypes.node,
    selector: React.PropTypes.string,
    overlayStyles: React.PropTypes.object,
    tooltipStyles: React.PropTypes.object
  },

  componentDidMount: function() {
    this.node = document.createElement('div');
    document.body.appendChild(this.node);

    ReactDOM.render(
    <Tooltip 
      selector={this.props.selector}
      overlayStyles={this.props.overlayStyles}
      tooltipStyles={this.props.tooltipStyles}> 
      {this.props.children} 
      </Tooltip>
      , this.node);
  },

  componentWillUnmount: function() {
    ReactDOM.unmountComponentAtNode(this.node);
    this.node.parentNode && this.node.parentNode.removeChild(this.node);
  },

  render: function() {
    return <script />;
  }

});
