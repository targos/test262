// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-10-4
description: Array.prototype.filter doesn't visit expandos
includes: [runTestCase.js]
---*/

function testcase() {

  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    callCnt++;
  }
  var srcArr = [1,2,3,4,5];
  srcArr["i"] = 10;
  srcArr[true] = 11;

  var resArr = srcArr.filter(callbackfn);
  if(callCnt == 5)
  {
    return true;
  }

 }
runTestCase(testcase);