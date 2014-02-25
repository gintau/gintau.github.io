define(['jquery', 'bootstrap'], function ($) {
    var readyCallbacks = [];

    function appReady(fn) {
        readyCallbacks.push(fn);
    }

    $(function () {
        $.each(readyCallbacks, function (idx, readyCallback) {
            readyCallback();
        });
    });

    return {
        appReady: appReady
    };
});