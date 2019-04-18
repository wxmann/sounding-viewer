import {
  skewTWindStaffArea
} from './container';

const windBarbConfig = (() => {
  var barbLengthBase = skewTWindStaffArea.width / 2.75;
  var barbConfig = {
      barbLength: barbLengthBase,
      longBarbHeight: barbLengthBase / 3,
      shortBarbHeight: barbLengthBase / 6,
      flagWidth: barbLengthBase / 6,
      barbSpacing: barbLengthBase / 8,
      deltaBarb: 40
  };
  return barbConfig;
  
})();

export default windBarbConfig;