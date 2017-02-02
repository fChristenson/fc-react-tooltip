var SPACE_BETWEEN_ELEMENTS = 8;

function getTopOffset(dims, targetDims) {
  return targetDims.top - getElementHeightDiff(dims, targetDims) / 2;
}

function getElementWidthDiff(dims, targetDims) {
  return Math.abs(dims.width - targetDims.width);
}

function getElementHeightDiff(dims, targetDims) {
  return Math.abs(dims.height - targetDims.height);
}

function getLeftOffset(dims, targetDims) {
  if(targetDims.width > dims.width) return targetDims.left + getElementWidthDiff(dims, targetDims) / 2;
  if(targetDims.width < dims.width) return targetDims.left - getElementWidthDiff(dims, targetDims) / 2;

  return targetDims.left;
}

function getTooltipPosition(dims, targetDims, window) {
  if(canFitAboveTarget(dims, targetDims) && !elementTooWide(dims, targetDims, window)) {
    return getAboveCenterTargetPosition(dims, targetDims);
  }

  if(canFitTopRightOfTarget(dims, targetDims, window)) return getTopRightOfTargetPosition(dims, targetDims);

  if(canFitRightOfTarget(dims, targetDims, window) && !elementTooHigh(dims, targetDims, window)) {
    return getRightOfTargetPosition(dims, targetDims);
  }

  if(canFitBottomRightOfTarget(dims, targetDims, window)) return getBottomRightOfTargetPosition(targetDims);

  if(canFitBelowTarget(dims, targetDims, window) && !elementTooWide(dims, targetDims, window)) {
    return getBelowCenterTargetPosition(dims, targetDims);
  }

  if(canFitBottomLeftOfTarget(dims, targetDims, window)) return getBottomLeftOfTargetPosition(dims, targetDims);

  if(canFitLeftOfTarget(dims, targetDims) && !elementTooHigh(dims, targetDims, window)) {
    return getLeftOfTargetPosition(dims, targetDims);
  }

  if(canFitTopLeftOfTarget(dims, targetDims)) return getTopLeftOfTargetPosition(dims, targetDims);

  // assume mobile
  if(canFitAboveTarget(dims, targetDims)) return getAboveTargetPosition(dims, targetDims);
  if(canFitBelowTarget(dims, targetDims, window)) return getBelowTargetPosition(dims, targetDims);

  return {
    top: 0,
    left: 0
  };
}

function canFitTopLeftOfTarget(dims, targetDims) {
  return canFitAboveTarget(dims, targetDims) && canFitLeftOfTarget(dims, targetDims);
}

function canFitBottomLeftOfTarget(dims, targetDims, window) {
  return canFitBelowTarget(dims, targetDims, window) && canFitLeftOfTarget(dims, targetDims);
}

function canFitBottomRightOfTarget(dims, targetDims, window) {
  return canFitBelowTarget(dims, targetDims, window) && canFitRightOfTarget(dims, targetDims, window);
}

function canFitTopRightOfTarget(dims, targetDims, window) {
  return canFitAboveTarget(dims, targetDims) && canFitRightOfTarget(dims, targetDims, window);
}

function getTopLeftOfTargetPosition(dims, targetDims) {
  return {
    top: targetDims.top - dims.height - SPACE_BETWEEN_ELEMENTS,
    left: targetDims.left - dims.width - SPACE_BETWEEN_ELEMENTS
  };
}

function getBottomLeftOfTargetPosition(dims, targetDims) {
  return {
    top: targetDims.top + targetDims.height + SPACE_BETWEEN_ELEMENTS,
    left: targetDims.left - dims.width - SPACE_BETWEEN_ELEMENTS
  };
}

function getBottomRightOfTargetPosition(targetDims) {
  return {
    top: targetDims.top + targetDims.height + SPACE_BETWEEN_ELEMENTS,
    left: targetDims.left + targetDims.width + SPACE_BETWEEN_ELEMENTS
  };
}

function getTopRightOfTargetPosition(dims, targetDims) {
  return {
    top: targetDims.top - dims.height - SPACE_BETWEEN_ELEMENTS,
    left: targetDims.left + targetDims.width + SPACE_BETWEEN_ELEMENTS
  };
}

function getAboveTargetPosition(dims, targetDims) {
  var elementPosition = dims.height + SPACE_BETWEEN_ELEMENTS;

  return {
    top: targetDims.top - elementPosition,
    left: SPACE_BETWEEN_ELEMENTS
  };
}

function getAboveCenterTargetPosition(dims, targetDims) {
  var elementPosition = dims.height + SPACE_BETWEEN_ELEMENTS;

  return {
    top: targetDims.top - elementPosition,
    left: getLeftOffset(dims, targetDims)
  };
}

function getLeftOfTargetPosition(dims, targetDims) {
  var elementPosition = dims.width + SPACE_BETWEEN_ELEMENTS * 2;

  return {
    top: getTopOffset(dims, targetDims),
    left: targetDims.left - elementPosition
  };
}

function getBelowTargetPosition(dims, targetDims) {
  var targetEndPosition = targetDims.top + targetDims.height;

  return {
    top: targetEndPosition + SPACE_BETWEEN_ELEMENTS,
    left: SPACE_BETWEEN_ELEMENTS
  };
}

function getBelowCenterTargetPosition(dims, targetDims) {
  var targetEndPosition = targetDims.top + targetDims.height;

  return {
    top: targetEndPosition + SPACE_BETWEEN_ELEMENTS,
    left: getLeftOffset(dims, targetDims)
  };
}

function getRightOfTargetPosition(dims, targetDims) {
  var targetEndPosition = targetDims.left + targetDims.width;

  return {
    top: getTopOffset(dims, targetDims),
    left: targetEndPosition + SPACE_BETWEEN_ELEMENTS
  };
}

function canFitRightOfTarget(dims, targetDims, window) {
  var targetEndPosition = targetDims.left + targetDims.width;
  var elementTotalWidth = dims.width + SPACE_BETWEEN_ELEMENTS * 2;

  return targetEndPosition + elementTotalWidth <= window.innerWidth;
}

function elementTooHigh(dims, targetDims, window) {
  return getTopOffset(dims, targetDims) <= 0 || getTopOffset(dims, targetDims) + dims.height >= window.innerHeight;
}

function elementTooWide(dims, targetDims, window) {
  return getLeftOffset(dims, targetDims) <= 0 || getLeftOffset(dims, targetDims) + dims.width >= window.innerWidth;
}

function canFitLeftOfTarget(dims, targetDims) {
  var neededArea = dims.width + SPACE_BETWEEN_ELEMENTS * 2;
  return targetDims.left - neededArea >= 0;
}

function canFitBelowTarget(dims, targetDims, window) {
  var targetBottomPosition = targetDims.top + targetDims.height;
  var neededArea = dims.height +(SPACE_BETWEEN_ELEMENTS * 2);

  return  targetBottomPosition + neededArea <= window.innerHeight;
}

function canFitAboveTarget(dims, targetDims) {
  var areaNeeded = targetDims.top - dims.height -(SPACE_BETWEEN_ELEMENTS * 2);
  return areaNeeded >= 0;
}

module.exports = {
  SPACE_BETWEEN_ELEMENTS: SPACE_BETWEEN_ELEMENTS,
  getTooltipPosition: getTooltipPosition
};
