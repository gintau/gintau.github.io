define(['jquery', 'Main', 'Translator'], function ($, Main, Translator) {

    var headerContainer = $('#header');

    function loadHeader() {
        // Load header
        return $.get('header.html').done(function(header) {
            $(headerContainer).html(header);

            // Translate.
            Translator.translate('zh-tw');

            
            // Bind locale change event.
        });
    }

    Main.appReady(loadHeader);

    return {
        setHeaderContiner: function (elem) {
            headerContainer = elem;
        },
        loadHeader: loadHeader
    };
});