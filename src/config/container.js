const upperPadding = 40, rightPadding = 10;

const skewTLabelPadding = {
    x: 0,
    y: 0,
    width: 50,
    height:50
};

const skewTArea = {
    x: skewTLabelPadding.x + skewTLabelPadding.width,
    y: upperPadding,
    width: 800,
    height: 800
};

const skewTWindBarbs = {
    x: skewTArea.x + skewTArea.width,
    y: upperPadding,
    width: 100,
    height: skewTArea.height + skewTLabelPadding.height
};

const hodographArea = {
    x: skewTWindBarbs.x + skewTWindBarbs.width,
    y: upperPadding,
    width: skewTArea.width / 1.33,
    height: skewTArea.height / 1.33
};

const skewTLabelArea = {
    x: 0,
    y: 0,
    width: skewTWindBarbs.x + skewTWindBarbs.width,
    height: skewTLabelPadding.y + skewTLabelPadding.height + upperPadding + skewTArea.height
}

const containerWidth = skewTLabelPadding.width + skewTArea.width + skewTWindBarbs.width + hodographArea.width + rightPadding;
const containerHeight = Math.max(skewTLabelPadding.height, skewTArea.height, skewTWindBarbs.height, hodographArea.height) + upperPadding;

export {
    skewTLabelPadding,
    skewTLabelArea,
    skewTArea,
    skewTWindBarbs,
    upperPadding,
    hodographArea,
    containerWidth,
    containerHeight
}