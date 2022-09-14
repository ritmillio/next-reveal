"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var reveal_1 = require("./reveal");
var RevealWrapper = function (_a) {
    var children = _a.children, className = _a.className, origin = _a.origin, distance = _a.distance, duration = _a.duration, delay = _a.delay, reset = _a.reset, easing = _a.easing, opacity = _a.opacity, rotate = _a.rotate, scale = _a.scale, cleanup = _a.cleanup, desktop = _a.desktop, mobile = _a.mobile, useDelay = _a.useDelay, viewFactor = _a.viewFactor, viewOffset = _a.viewOffset;
    var ref = (0, react_1.useRef)(null);
    var Origin = origin === undefined || null ? reveal_1.reveal.origin : origin;
    var Distance = distance === undefined || null ? reveal_1.reveal.distance : distance;
    var Duration = duration === undefined || null ? reveal_1.reveal.duration : duration;
    var Delay = delay === undefined || null ? reveal_1.reveal.delay : delay;
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
    var revealOptionProps = {
        origin: Origin,
        distance: Distance,
        duration: Duration,
        delay: Delay,
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
    };
    (0, react_1.useEffect)(function () {
        function revElement() {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var sr;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, require('scrollreveal')];
                        case 1:
                            sr = (_a.sent())["default"](reveal_1.reveal);
                            //If you pass a custom scrollreveal object you need to specify at least the origin
                            if (revealOptionProps.origin != null && ref.current) {
                                sr.reveal(ref.current, revealOptionProps);
                            }
                            else if (ref.current) {
                                //if you don't pass any props
                                sr.reveal(ref.current);
                            }
                            else {
                                console.warn("next-scroll doesn't apply to your element");
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        revElement();
    }, []);
    return (react_1["default"].createElement("div", { ref: ref, className: className }, children));
};
exports["default"] = RevealWrapper;
//# sourceMappingURL=RevealWrapper.js.map