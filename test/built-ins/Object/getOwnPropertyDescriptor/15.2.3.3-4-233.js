// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-233
description: >
    Object.getOwnPropertyDescriptor - ensure that 'enumerable'
    property of returned object is data property with correct
    'enumerable' attribute
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "property": "ownDataProperty" };

        var desc = Object.getOwnPropertyDescriptor(obj, "property");
        var accessed = false;

        for (var props in desc) {
            if (props === "enumerable") {
                accessed = true;
            }
        }

        return accessed;
    }
runTestCase(testcase);