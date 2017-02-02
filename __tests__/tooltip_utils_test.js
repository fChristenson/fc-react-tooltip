import U from '../tooltip_utils';
import {expect} from 'chai';

describe('Tooltip utils test', function () {
  it('has a module', function () {
    expect(U).to.be.ok;
  });

  describe('getTooltipPosition', function () {
    it('sets a default position', function () {
      const window = {};
      const dims = {};
      const targetDims = {};
      const expected = {
        left: 0,
        top: 0
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a top position', function () {
      const window = {innerWidth: 100, innerHeight: 100};
      const dims = {top: 0, left: 0, height: 1, width: 1};
      const targetDims = {top: 20, left: 8, height: 1, width: 1};
      const expected = {
        left: targetDims.left,
        top: targetDims.top - (dims.height + U.SPACE_BETWEEN_ELEMENTS)
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a top right position', function () {
      const window = {innerWidth: 100, innerHeight: 100};
      const dims = {top: 0, left: 0, height: 2, width: 2};
      const targetDims = {top: 100, left: 0, height: 1, width: 1};
      const expected = {
        left: targetDims.left + targetDims.width + U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top - dims.height - U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a right position', function () {
      const window = {innerWidth: 100, innerHeight: 100};
      const dims = {top: 0, left: 0, height: 1, width: 1};
      const targetDims = {top: 8, left: 8, height: 1, width: 1};
      const expected = {
        left: targetDims.left + dims.width + U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a bottom right position', function () {
      const window = {innerWidth: 100, innerHeight: 100};
      const dims = {top: 0, left: 0, height: 2, width: 2};
      const targetDims = {top: 0, left: 0, height: 1, width: 1};
      const expected = {
        left: targetDims.left + targetDims.width + U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top + targetDims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a bottom position', function () {
      const window = {innerWidth: 100, innerHeight: 100};
      const dims = {top: 0, left: 0, height: 1, width: 1};
      const targetDims = {top: 0, left: 91, height: 1, width: 1};
      const expected = {
        left: targetDims.left,
        top: targetDims.top + dims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a bottom left position', function () {
      const window = {innerWidth: 100, innerHeight: 100};
      const dims = {top: 0, left: 0, height: 2, width: 2};
      const targetDims = {top: 0, left: 100, height: 1, width: 1};
      const expected = {
        left: targetDims.left - dims.width - U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top + targetDims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a left position', function () {
      const window = {innerWidth: 100, innerHeight: 100};
      const dims = {top: 0, left: 0, height: 1, width: 1};
      const targetDims = {top: 0, left: 100, height: 1, width: 1};
      const expected = {
        left: targetDims.left - (dims.width + U.SPACE_BETWEEN_ELEMENTS),
        top: targetDims.top + dims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a top left position', function () {
      const window = {innerWidth: 100, innerHeight: 100};
      const dims = {top: 0, left: 0, height: 2, width: 2};
      const targetDims = {top: 100, left: 100, height: 1, width: 1};
      const expected = {
        left: targetDims.left - dims.width - U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top - dims.height - U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a mobile top position', function () {
      const window = {innerWidth: 18, innerHeight: 18};
      const dims = {top: 0, left: 0, height: 1, width: 200};
      const targetDims = {top: 18, left: 0, height: 1, width: 1};
      const expected = {
        left: U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top - dims.height - U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });

    it('sets a mobile bottom position if top is blocked', function () {
      const window = {innerWidth: 18, innerHeight: 18};
      const dims = {top: 0, left: 0, height: 1, width: 200};
      const targetDims = {top: 0, left: 0, height: 1, width: 1};
      const expected = {
        left: U.SPACE_BETWEEN_ELEMENTS,
        top: targetDims.top + targetDims.height + U.SPACE_BETWEEN_ELEMENTS
      };
      expect(U.getTooltipPosition(dims, targetDims, window)).to.deep.equal(expected);
    });
  });
});
