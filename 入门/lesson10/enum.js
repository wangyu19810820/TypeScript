var enum1;
(function (enum1) {
    enum1[enum1["a"] = 0] = "a";
    enum1[enum1["b"] = 1] = "b";
    enum1[enum1["c"] = 2] = "c";
})(enum1 || (enum1 = {}));
;
console.log(enum1.a);
console.log(enum1.b);
