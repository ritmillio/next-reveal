import { __awaiter, __generator } from "tslib";
import React, { useRef, useEffect, createRef } from 'react';
import { reveal } from './reveal';
var RevealList = function (_a) {
    var children = _a.children, className = _a.className, interval = _a.interval, origin = _a.origin, distance = _a.distance, duration = _a.duration, delay = _a.delay, reset = _a.reset, easing = _a.easing, opacity = _a.opacity, rotate = _a.rotate, scale = _a.scale, cleanup = _a.cleanup, desktop = _a.desktop, mobile = _a.mobile, useDelay = _a.useDelay, viewFactor = _a.viewFactor, viewOffset = _a.viewOffset;
    var listRefs = useRef([]);
    var Origin = origin === undefined || null ? reveal.origin : origin;
    var Distance = distance === undefined || null ? reveal.distance : distance;
    var Duration = duration === undefined || null ? reveal.duration : duration;
    var Reset = reset === undefined || null ? reveal.reset : reset;
    var Easing = easing === undefined || null ? reveal.easing : easing;
    var Opacity = opacity === undefined || null ? reveal.opacity : opacity;
    var Rotate = rotate === undefined || null ? reveal.rotate : rotate;
    var Scale = scale === undefined || null ? reveal.scale : scale;
    var Cleanup = cleanup === undefined || null ? reveal.cleanup : cleanup;
    var Desktop = desktop === undefined || null ? reveal.desktop : desktop;
    var Mobile = mobile === undefined || null ? reveal.mobile : mobile;
    var UseDelay = useDelay === undefined || null ? reveal.useDelay : useDelay;
    var ViewFactor = viewFactor === undefined || null ? reveal.viewFactor : viewFactor;
    var ViewOffset = viewOffset === undefined || null ? reveal.viewOffset : viewOffset;
    var revealList = React.Children.map(children, function (child, index) {
        var currentIndex = index;
        React.cloneElement(child, {
            ref: createRef()
        });
    });
    useEffect(function () {
        function revElement() {
            return __awaiter(this, void 0, void 0, function () {
                var sr, Interval, baseDelay;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, require('scrollreveal')];
                        case 1:
                            sr = (_a.sent())["default"](reveal);
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
    return (React.createElement("div", { className: className }, revealList));
};
export default RevealList;
//# sourceMappingURL=RevealList.js.map