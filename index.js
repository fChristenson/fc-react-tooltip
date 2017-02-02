import React from 'react';
import ReactDOM from 'react-dom';
import U from './tooltip_utils';
import assign from 'lodash/assign';

module.exports = React.createClass({

  displayName: 'TooltipInitializer',

  propTypes: {
    children: React.PropTypes.node,
    selector: React.PropTypes.string
  },

  componentDidMount () {
    const div = document.createElement('div');
    document.body.appendChild(div);

    ReactDOM.render(<Tooltip selector={this.props.selector}> {this.props.children} </Tooltip>, div);
  },


  render () {
    return <script />;
  }

});

const Tooltip = React.createClass({

  displayName: 'Tooltip',

  propTypes: {
    children: React.PropTypes.node,
    selector: React.PropTypes.string
  },

  componentDidMount () {
    const element = document.querySelector(this.props.selector);
    element.addEventListener('click', this.updateDims);

    this.refs.overlay.addEventListener('click', this.hideTooltip);
  },

  componentWillUnmount () {
    const element = document.querySelector(this.props.selector);
    element.removeEventListener('click', this.updateDims);
    this.refs.overlay.removeEventListener('click', this.hideTooltip);
  },

  hideTooltip (e) {
    this.setState(this.getInitialState());
  },

  updateDims (e) {
    this.setState(assign({}, this.state, {
      overlayStyles: assign({}, this.state.overlayStyles, {display: 'inherit'})
    }));

    const targetDims = e.target.getBoundingClientRect();
    const selfDims = this.refs.tooltip.getBoundingClientRect();
    const transforms = U.getTooltipPosition(selfDims, targetDims, window);

    const newStyles = {
      transform: `translate(${transforms.left}px, ${transforms.top}px)`,
      MozTransform: `translate(${transforms.left}px, ${transforms.top}px)`,
      WebkitTransform: `translate(${transforms.left}px, ${transforms.top}px)`,
      msTransform: `translate(${transforms.left}px, ${transforms.top}px)`,
      OTransform: `translate(${transforms.left}px, ${transforms.top}px)`
    };

    this.setState(assign({}, this.state, {
      tooltipStyles: assign({}, this.state.tooltipStyles, newStyles)
    }));
  },

  getInitialState () {
    return {
      overlayStyles: {
        display: 'none'
      },
      tooltipStyles: {
        transform: 'translate(0px, 0px)',
        MozTransform: 'translate(0px, 0px)',
        WebkitTransform: 'translate(0px, 0px)',
        msTransform: 'translate(0px, 0px)',
        OTransform: 'translate(0px, 0px)'
      }
    };
  },

  render () {
    return (
      <div ref="overlay" className="c-tooltip_overlay" style={this.state.overlayStyles}>
        <div ref="tooltip" className="c-tooltip" style={this.state.tooltipStyles}>
          {this.props.children}
        </div>
      </div>
    );
  }

});
