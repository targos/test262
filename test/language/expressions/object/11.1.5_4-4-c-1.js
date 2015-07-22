// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5_4-4-c-1
description: >
    Object literal - No SyntaxError if a get accessor property definition
    is followed by a data property definition with the same name
includes: [runTestCase.js]
---*/

function testcase() {
  eval("({get foo(){}, foo : 1});");
  return true;
}
runTestCase(testcase);