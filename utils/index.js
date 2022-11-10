'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var waitForScrollEnd = function () {
    var last_changed_frame = 0;
    var last_x = window.scrollX;
    var last_y = window.scrollY;
    return new Promise(function (resolve) {
        function tick(frames) {
            // We requestAnimationFrame either for 500 frames or until 20 frames with
            // no change have been observed.
            if (frames >= 10 || frames - last_changed_frame > 50) {
                resolve();
                // console.log("scroll end");
            }
            else {
                if (window.scrollX != last_x || window.scrollY != last_y) {
                    last_changed_frame = frames;
                    last_x = window.scrollX;
                    last_y = window.scrollY;
                }
                requestAnimationFrame(tick.bind(null, frames + 1));
            }
        }
        tick(0);
    });
};

var gradients = [
    ["#f6d365", "#fda085"],
    ["#85D1BF", "#78B8B0"],
    ["#FBB199", "#FFD12E"],
    ["#77A3FA", "#C3ECB5"],
    ["#E2ECA6", "#E58784"],
    ["#E2ECA6", "#77A3FA"],
    ["#A7A0EF", "#77A3FA"],
    ["#F89D81", "#E7B7C5"],
    ["#F1DCFC", "#C999CC"],
    ["#5D6AD8", "#85D1BF"],
    ["#FBB199", "#78B8B0"],
    ["#E36C6C", "#FFB6B4"],
    ["#B988D8", "#C3ECB5"],
    ["#A7A0EF", "#88D6F8"],
    ["#A6ECE8", "#DF8BD7"],
    ["#EF819C", "#FADD77"],
    ["#81CDF8", "#8D56AE"],
    ["#FDCEBE", "#D981C0"],
    ["#8CE8B1", "#4885E0"],
    ["#9780D8", "#E3C8A0"],
    ["#94BE39", "#FFF3B4"],
    ["#F6ED96", "#727EF1"],
    ["#EFA0E7", "#88D6F8"],
    ["#DEA6EC", "#DFB48B"],
    ["#FFA4A4", "#737ABB"],
    ["#F8819D", "#A3E598"],
    ["#FDCEBE", "#818AD9"],
    ["#B17DC3", "#FFCFF2"],
];
var stringToGradient = function (string) {
    var trimmedString = string.toUpperCase().trim().replace(/\s/g, "");
    var startHash = trimmedString
        .split("")
        .reduce(function (acc, char) { return acc + char.charCodeAt(0); }, 0);
    var gradient = startHash % gradients.length;
    return "linear-gradient(45deg, ".concat(gradients[gradient][0], " 15%, ").concat(gradients[gradient][1], " 90%)");
};

exports.stringToGradient = stringToGradient;
exports.waitForScrollEnd = waitForScrollEnd;
//# sourceMappingURL=index.js.map