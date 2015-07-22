// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.18
author: Ryan Lewis
description: Math.hypot should return 0 if called with all arguments being 0.
includes: [runTestCase.js]
---*/

function testcase() {
  if(Math.hypot(0, 0) === 0) {
  	return true;
  }
 }
runTestCase(testcase);