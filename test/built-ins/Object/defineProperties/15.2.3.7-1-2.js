// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-1-2
description: Object.defineProperties throws TypeError if 'O' is null
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Object.defineProperties(null, {});
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);