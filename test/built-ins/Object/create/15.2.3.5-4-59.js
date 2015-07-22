// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-59
description: >
    Object.create - one property in 'Properties' is a Function object
    which implements its own [[Get]] method to access the 'enumerable'
    property (8.10.5 step 3.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var descObj = function () { };

        descObj.enumerable = true;

        var newObj = Object.create({}, {
            prop: descObj 
        });
        for (var property in newObj) {
            if (property === "prop") {
                accessed = true;
            }
        }
        return accessed;
    }
runTestCase(testcase);