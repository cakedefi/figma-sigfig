function floorFixed(num:number, dec:number, maxDigits:number) {
  if (Math.log10(num) < maxDigits) {
    const calcDec = Math.pow(10, dec);
    return Math.trunc(num * calcDec) / calcDec;
  } else {
    return num;
  }
}

function friendlyNum(numStr:string, maxDigits:number) {
  numStr = removeCommas(numStr);
  let nonNumericPart = numStr.match(/[^\d.-]/g)?.join('');
  nonNumericPart = String(nonNumericPart) === "undefined" ? '' : nonNumericPart;
  console.log(nonNumericPart);
  const num = parseFloat(numStr);
  const order = Math.ceil(Math.log10(num));
  const decimalPoints = maxDigits - order;
  let rounded = floorFixed(num, decimalPoints, maxDigits);
  // return rounded;
  return addCommas(String(rounded) + nonNumericPart);
}

function removeCommas(numStr:string) {
  return numStr.replace(/,/g, '');
}

function addCommas(numStr:String) {
  numStr += '';
  var x = numStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

figma.showUI(__html__);

figma.ui.onmessage = async msg => {
  if (msg.type === 'round') {
    for (const node of figma.currentPage.selection) {
      if (node.type === "TEXT") {
        await Promise.all(
          node.getRangeAllFontNames(0, node.characters.length)
            .map(figma.loadFontAsync)
        );
        let rounded = friendlyNum(node.characters, msg.count);
        node.characters = String(rounded);
      }
    }
    figma.closePlugin();
  }

  figma.closePlugin();
};
