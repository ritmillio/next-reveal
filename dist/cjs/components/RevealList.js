"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var reveal_1 = require("./reveal");
var RevealList = function (_a) {
    var children = _a.children, className = _a.className, interval = _a.interval, origin = _a.origin, distance = _a.distance, duration = _a.duration, delay = _a.delay, reset = _a.reset, easing = _a.easing, opacity = _a.opacity, rotate = _a.rotate, scale = _a.scale, cleanup = _a.cleanup, desktop = _a.desktop, mobile = _a.mobile, useDelay = _a.useDelay, viewFactor = _a.viewFactor, viewOffset = _a.viewOffset;
    var listRefs = (0, react_1.useRef)([]);
    var Origin = origin === undefined || null ? reveal_1.reveal.origin : origin;
    var Distance = distance === undefined || null ? reveal_1.reveal.distance : distance;
    var Duration = duration === undefined || null ? reveal_1.reveal.duration : duration;
    var Reset = reset === undefined || null ? reveal_1.reveal.reset : reset;
    var Easing = easing === undefined || null ? reveal_1.reveal.easing : easing;
    var Opacity = opacity === undefined || null ? reveal_1.reveal.opacity : opacity;
    var Rotate = rotate === undefined || null ? reveal_1.reveal.rotate : rotate;
    var Scale = scale === undefined || null ? reveal_1.reveal.scale : scale;
    var Cleanup = cleanup === undefined || null ? reveal_1.reveal.cleanup : cleanup;
    var Desktop = desktop === undefined || null ? reveal_1.reveal.desktop : desktop;
    var Mobile = mobile === undefined || null ? reveal_1.reveal.mobile : mobile;
    var UseDelay = useDelay === undefined || null ? reveal_1.reveal.useDelay : useDelay;
    var ViewFactor = viewFactor === undefined || null ? reveal_1.reveal.viewFactor : viewFactor;
    var ViewOffset = viewOffset === undefined || null ? reveal_1.reveal.viewOffset : viewOffset;
    var revealList = react_1["default"].Children.map(children, function (child) {
        return react_1["default"].cloneElement(child, {
            ref: (0, react_1.createRef)()
        });
    });
    (0, react_1.useEffect)(function () {
        function revElement() {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var sr, Interval, baseDelay;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, require('scrollreveal')];
                        case 1:
                            sr = (_a.sent())["default"](reveal_1.reveal);
                            Interval = interval != 0 ? interval : 50;
                            baseDelay = delay != 0 || undefined || null ? delay : 300;
                            revealList.forEach(function (e, index) {
                                listRefs[index] = e.ref;
                                var currentIntervalDelay = Interval * index;
                                if (listRefs[index].current) {
                                    sr.reveal(listRefs[index].current, {
                                        delay: baseDelay + currentIntervalDelay,
                                        origin: Origin,
                                        distance: Distance,
                                        duration: Duration,
                                        reset: Reset,
                                        easing: Easing,
                                        opacity: Opacity,
                                        rotate: Rotate,
                                        scale: Scale,
                                        cleanup: Cleanup,
                                        desktop: Desktop,
                                        mobile: Mobile,
                                        useDelay: UseDelay,
                                        viewFactor: ViewFactor,
                                        viewOffset: ViewOffset
                                    });
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        }
        revElement();
    }, []);
    return react_1["default"].createElement("div", { className: className }, revealList);
};
exports["default"] = RevealList;
//# sourceMappingURL=RevealList.js.map