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

const skewTWindStaffArea = {
    x: skewTArea.x + skewTArea.width,
    y: 0,
    width: 100,
    height: skewTArea.height + skewTLabelPadding.height + upperPadding
};

const hodographArea = {
    x: skewTWindStaffArea.x + skewTWindStaffArea.width,
    y: upperPadding,
    width: skewTArea.width / 1.33,
    height: skewTArea.height / 1.33
};

const skewTLabelArea = {
    x: 0,
    y: 0,
    width: skewTWindStaffArea.x + skewTWindStaffArea.width,
    height: skewTLabelPadding.y + skewTLabelPadding.height + upperPadding + skewTArea.height
}

const containerWidth = skewTLabelPadding.width + skewTArea.width + skewTWindStaffArea.width + hodographArea.width + rightPadding;
const containerHeight = Math.max(skewTLabelPadding.height, skewTArea.height, skewTWindStaffArea.height, hodographArea.height) + upperPadding;

export {
    skewTLabelPadding,
    skewTLabelArea,
    skewTArea,
    skewTWindStaffArea,
    upperPadding,
    hodographArea,
    containerWidth,
    containerHeight
}