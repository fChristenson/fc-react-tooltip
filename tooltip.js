var React = require('react');
var U = require('./tooltip_utils');

var tooltilpBaseStyles = {
  boxSizing: 'border-box',
  width: 'calc(100vw - 16px)',
  position: 'absolute',
  border: '1px solid #dfe4e7',
  padding: '16px',
  fontSize: '14px',
  color: '#475058',
  letterSpacing: '0.3px',
  borderRadius: '4px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  maxWidth: '410px'
};

var overlayBaseStyles = {
  position: 'absolute',
  display: 'none',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 999
};

var tooltipInitTransforms = {
  transform: 'translate(0px, 0px)',
  MozTransform: 'translate(0px, 0px)',
  WebkitTransform: 'translate(0px, 0px)',
  msTransform: 'translate(0px, 0px)',
  OTransform: 'translate(0px, 0px)'
};

module.exports = React.createClass({

  displayName: 'Tooltip',

  propTypes: {
    children: React.PropTypes.node.isRequired,
    selector: React.PropTypes.string.isRequired,
    overlayStyles: React.PropTypes.object,
    tooltipStyles: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      overlayStyles: {},
      tooltipStyles: {}
    };
  },

  componentDidMount: function() {
    var element = document.querySelector(this.props.selector);
    element.addEventListener('click', this.updateDims);

    this.refs.overlay.addEventListener('click', this.hideTooltip);
  },

  componentWillUnmount: function() {
    var element = document.querySelector(this.props.selector);
    element.removeEventListener('click', this.updateDims);
    this.refs.overlay.removeEventListener('click', this.hideTooltip);
  },

  hideTooltip: function() {
    this.setState(this.getInitialState());
  },

  updateDims: function(e) {
    this.setState(Object.assign({}, this.state, {
      overlayStyles: Object.assign({}, this.state.overlayStyles, {display: 'inherit'})
    }));

    var targetDims = e.target.getBoundingClientRect();
    var selfDims = this.refs.tooltip.getBoundingClientRect();
    var transforms = U.getTooltipPosition(selfDims, targetDims, window);

    var newStyles = {
      transform: 'translate(' + transforms.left + 'px, ' + transforms.top + 'px)',
      MozTransform: 'translate(' + transforms.left + 'px, ' + transforms.top + 'px)',
      WebkitTransform: 'translate(' + transforms.left + 'px, ' + transforms.top + 'px)',
      msTransform: 'translate(' + transforms.left + 'px, ' + transforms.top + 'px)',
      OTransform: 'translate(' + transforms.left + 'px, ' + transforms.top + 'px)'
    };

    this.setState(Object.assign({}, this.state, {
      tooltipStyles: Object.assign({}, this.state.tooltipStyles, newStyles)
    }));
  },

  getInitialState: function() {
    var overlayStyles = Object.assign(
      {}, 
      overlayBaseStyles, 
      this.props.overlayStyles, 
      {display: 'none'}
    );
    
    var tooltipStyles = Object.assign(
        {}, 
        tooltilpBaseStyles, 
        this.props.tooltipStyles, 
        tooltipInitTransforms
    );

    return {
      overlayStyles: overlayStyles,
      tooltipStyles: tooltipStyles
    };
  },

  render: function() {
    return (
      <div ref="overlay" className="fc-tooltip_overlay" style={this.state.overlayStyles}>
        <div ref="tooltip" className="fc-tooltip" style={this.state.tooltipStyles}>
          {this.props.children}
        </div>
      </div>
    );
  }

});
