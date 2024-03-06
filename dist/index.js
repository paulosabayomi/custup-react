import { jsx } from 'react/jsx-runtime';
import React from 'react';
import MCustUp from 'custup';
import 'custup/src/all.min.css';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var CustUp = React.memo(React.forwardRef(function (options, ref) {
    var _instance_Ref = React.useRef(null);
    var _initialize_custup = React.useCallback(function () {
        var _a;
        if (_instance_Ref.current != null)
            return _instance_Ref.current;
        _instance_Ref.current = new MCustUp(__assign(__assign({}, options), { targetRootElement: "#" + options.id }));
        (_a = options.on) === null || _a === void 0 ? void 0 : _a.forEach(function (ev) { var _a; return (_a = _instance_Ref.current) === null || _a === void 0 ? void 0 : _a.on(ev.type, ev.callbackFn); });
        return _instance_Ref.current;
    }, [_instance_Ref.current]);
    React.useLayoutEffect(function () {
        if (!ref)
            _initialize_custup();
    }, []);
    React.useImperativeHandle(ref, function () {
        return _initialize_custup();
    }, []);
    return (jsx("div", __assign({ id: options.id }, { children: "CustUp: hmm looks like there is a conflicting id, please change the id of the current component." })));
}));

export { CustUp as default };
//# sourceMappingURL=index.js.map
