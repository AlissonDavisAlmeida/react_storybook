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
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/Mylabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: {
            control: "select",
            options: ["normal", "h1", "h2", "h3"]
        },
        color: { control: "select" }
    }
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args)); };
export var Basic = Template.bind({});
Basic.args = {
    title: 'Hello World Man',
    allCaps: false
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    title: 'HELLO WORLD',
    allCaps: true
};
export var Secondary = Template.bind({});
Secondary.args = {
    title: 'Hello World',
    color: 'secondary'
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    title: 'Hello World',
    color: 'tertiary'
};
export var CustomLabel = Template.bind({});
CustomLabel.args = {
    title: 'Hello World',
    size: "h1"
};
