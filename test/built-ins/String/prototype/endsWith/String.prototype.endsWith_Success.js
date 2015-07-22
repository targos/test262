// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: >
    endsWith should return true when called on 'word' and passed 'd'
    and with no endPosition (defaults to 4).
includes: [runTestCase.js]
features: [String#endsWith]
---*/

function testcase() {
  if('word'.endsWith('d') === true) {
  	return true;
  }
 }
runTestCase(testcase);