define(['jquery', 'Translator'], function ($, Translator) {
    
    function loadHeader(container) {      
        // Load header
        return $.ajax({
            url: 'header.html',
            success: function (header) {
                $(container).html(header);

                // Translate.
                Translator.translate('zh-tw');


                // Bind locale change event.
            }
        });
    }

    return {       
        loadHeader: loadHeader
    };
});