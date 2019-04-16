const upperPadding = 40, rightPadding = 10;

const skewTLabel = {
    x: 0,
    y: 0,
    width: 50,
    height:50
};

const skewTArea = {
    x: skewTLabel.x + skewTLabel.width,
    y: upperPadding,
    width: 800,
    height: 800
};

const skewTWindBarbs = {
    x: skewTArea.x + skewTArea.width,
    y: upperPadding,
    width: 100,
    height: skewTArea.height + skewTLabel.height
};

const hodographArea = {
    x: skewTWindBarbs.x + skewTWindBarbs.width,
    y: upperPadding,
    width: skewTArea.width / 1.33,
    height: skewTArea.height / 1.33
};

const containerWidth = skewTLabel.width + skewTArea.width + skewTWindBarbs.width + hodographArea.width + rightPadding;
const containerHeight = Math.max(skewTLabel.height, skewTArea.height, skewTWindBarbs.height, hodographArea.height) + upperPadding;

export {
    skewTLabel,
    skewTArea,
    skewTWindBarbs,
    upperPadding,
    hodographArea,
    containerWidth,
    containerHeight
}