// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-4-1
description: Array.prototype.indexOf returns -1 if 'length' is 0 (empty array)
includes: [runTestCase.js]
---*/

function testcase() {
  var i = [].indexOf(42);
  if (i === -1) {
    return true;
  }
 }
runTestCase(testcase);