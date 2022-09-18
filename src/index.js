var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function (name) {
        var _a;
        return "Ol\u00E1 ".concat((_a = name === null || name === void 0 ? void 0 : name.toUpperCase()) !== null && _a !== void 0 ? _a : "Fulano", "!!!");
    };
    return Person;
}());
var p = new Person();
p.speak("kleber");
p.speak();
