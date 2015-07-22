// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-4-159
description: >
    Object.defineProperty - 'O' is an Array, 'name' is the length
    property of 'O', set the [[Value]] field of 'desc' to a value
    greater than the existing value of length (15.4.5.1 step 3.f)
includes: [runTestCase.js]
---*/

function testcase() {

        var arrObj = [0, , 2];

        Object.defineProperty(arrObj, "length", {
            value: 5
        });

        return arrObj.length === 5 && arrObj[0] === 0 &&
            !arrObj.hasOwnProperty("1") && arrObj[2] === 2 &&
            !arrObj.hasOwnProperty("4");
    }
runTestCase(testcase);