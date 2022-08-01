var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./mylabel.css";
export var MyLabel = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b, _c = _a.size, size = _c === void 0 ? "normal" : _c, _d = _a.allCaps, allCaps = _d === void 0 ? false : _d, _e = _a.color, color = _e === void 0 ? "primary" : _e, optional = _a.optional, fontColor = _a.fontColor;
    return (_jsxs("span", __assign({ style: {
            color: fontColor,
        }, className: "label ".concat(size, " ").concat(color) }, { children: [allCaps ? title.toUpperCase() : title, optional && _jsx("div", __assign({ className: "optional" }, { children: optional }))] })));
};
