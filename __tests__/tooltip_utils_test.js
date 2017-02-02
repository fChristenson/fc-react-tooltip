var U = require('../src/tooltip_utils');
var expect = require('chai').expect;

describe('Tooltip utils test', function() {
  it('has a module', function() {
    expect(U).to.be.ok;
  });

  describe('getTooltipPosition', function() {
    it('sets a default position', function() {
      var window = {};
      var dims = {};
      var targetDims = {};
      var expected = {
        left: 0,
        top: 0
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a top position', function() {
      var window = {innerWidth: 100, innerHeight: 100};
      var dims = {top: 0, left: 0, height: 1, width: 1};
      var targetDims = {top: 20, left: 8, height: 1, width: 1};
      var expected = {
        left: targetDims.left,
        top: targetDims.top - (dims.height + U.SPACE_BETWEEN_ELEMENTS)
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a top right position', function() {
      var window = {innerWidth: 100, innerHeight: 100};
      var dims = {top: 0, left: 0, height: 2, width: 2};
      var targetDims = {top: 100, left: 0, height: 1, width: 1};
      var expected = {
        left: targetDims.left + targetDims.width + U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top - dims.height - U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a right position', function() {
      var window = {innerWidth: 100, innerHeight: 100};
      var dims = {top: 0, left: 0, height: 1, width: 1};
      var targetDims = {top: 8, left: 8, height: 1, width: 1};
      var expected = {
        left: targetDims.left + dims.width + U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a bottom right position', function() {
      var window = {innerWidth: 100, innerHeight: 100};
      var dims = {top: 0, left: 0, height: 2, width: 2};
      var targetDims = {top: 0, left: 0, height: 1, width: 1};
      var expected = {
        left: targetDims.left + targetDims.width + U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top + targetDims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a bottom position', function() {
      var window = {innerWidth: 100, innerHeight: 100};
      var dims = {top: 0, left: 0, height: 1, width: 1};
      var targetDims = {top: 0, left: 91, height: 1, width: 1};
      var expected = {
        left: targetDims.left,
        top: targetDims.top + dims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a bottom left position', function() {
      var window = {innerWidth: 100, innerHeight: 100};
      var dims = {top: 0, left: 0, height: 2, width: 2};
      var targetDims = {top: 0, left: 100, height: 1, width: 1};
      var expected = {
        left: targetDims.left - dims.width - U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top + targetDims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a left position', function() {
      var window = {innerWidth: 100, innerHeight: 100};
      var dims = {top: 0, left: 0, height: 1, width: 1};
      var targetDims = {top: 0, left: 100, height: 1, width: 1};
      var expected = {
        left: targetDims.left - (dims.width + U.SPACE_BETWEEN_ELEMENTS),
        top: targetDims.top + dims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a top left position', function() {
      var window = {innerWidth: 100, innerHeight: 100};
      var dims = {top: 0, left: 0, height: 2, width: 2};
      var targetDims = {top: 100, left: 100, height: 1, width: 1};
      var expected = {
        left: targetDims.left - dims.width - U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top - dims.height - U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a mobile top position', function() {
      var window = {innerWidth: 18, innerHeight: 18};
      var dims = {top: 0, left: 0, height: 1, width: 200};
      var targetDims = {top: 18, left: 0, height: 1, width: 1};
      var expected = {
        left: U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top - dims.height - U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a mobile bottom position if top is blocked', function() {
      var window = {innerWidth: 18, innerHeight: 18};
      var dims = {top: 0, left: 0, height: 1, width: 200};
      var targetDims = {top: 0, left: 0, height: 1, width: 1};
      var expected = {
        left: U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top + targetDims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });
  });
});
