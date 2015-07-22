// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-iii-4
description: >
    Array.prototype.some - return value of callbackfn is a boolean
    (value is true)
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return true;
        }

        var obj = { 0: 11, length: 2 };

        return Array.prototype.some.call(obj, callbackfn);
    }
runTestCase(testcase);