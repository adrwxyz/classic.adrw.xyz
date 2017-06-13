'use strict';

/**
 * Demo.
 */
var demo = (function (window) {

    /**
     * Enum of CSS selectors.
     */
    var SELECTORS = {
        pattern: '.pattern'
    };

    /**
     * Enum of CSS classes.
     */
    var CLASSES = {
        patternHidden: 'pattern--hidden',
        polygon: 'polygon',
        polygonHidden: 'polygon--hidden'
    };

    var ATTRIBUTES = {
        index: 'data-index',
        id: 'data-id'
    };

    /**
     * Map of svg paths and points.
     */
    var polygonMap = {
        paths: null,
        points: null
    };

    /**
     * Initialise demo.
     */
    var init = function () {

        // For options see: https://github.com/qrohlf/Trianglify
        var pattern = Trianglify({
            width: window.innerWidth,
            height: window.innerHeight,
            cell_size: 90,
            variance: 1,
            stroke_width: 1,
            x_colors: 'random',
            y_colors: 'random'
        }).svg(); // Render as SVG.

        _mapPolygons(pattern);
    };

    /**
     * Store path elements, map coordinates and sizes.
     * @param {Element} pattern The SVG Element generated with Trianglify.
     * @private
     */
    var _mapPolygons = function (pattern) {

        // Append SVG to pattern container.
        $(SELECTORS.pattern).append(pattern);

        // Convert nodelist to array,
        // Used `.childNodes` because IE doesn't support `.children` on SVG.
        polygonMap.paths = [].slice.call(pattern.childNodes);

        polygonMap.points = [];

        polygonMap.paths.forEach(function (polygon) {

            // Hide polygons by adding CSS classes to each svg path (used attrs because of IE).
            $(polygon).attr('class', CLASSES.polygon);

            var rect = polygon.getBoundingClientRect();

            var point = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };

            polygonMap.points.push(point);
        });

        // All polygons are hidden now, display the pattern container.
        $(SELECTORS.pattern).removeClass(CLASSES.patternHidden);
    };

    // Expose methods.
    return {
        init: init
    };

})(window);

// Kickstart Demo.
window.onload = demo.init;
