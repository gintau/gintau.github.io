define(['jquery', 'Translator'], function ($, Translator) {

    function loadHeader(container) {
        // Load header
        return $.ajax({
            url: 'header.html',
            success: function (header) {
                $(container).html(header);

                // Bind locale seletor event.
                $('#locale-translate')
                    .val(Translator.getLocale())
                    .on('change', function () {
                        console.log('change locale');
                        var chosenLocale = $(this).val();
                        Translator.setLocale(chosenLocale);
                    });
            }
        });
    }

    return {
        loadHeader: loadHeader
    };
});