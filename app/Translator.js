define(['jquery', 'lib/jquery-cookie'], function ($) {

    var localeDir = 'app/locale';
    var localeObjects = {};
    var cookieKey = 'locale';
    var currentLocale = $.cookie(cookieKey) || window.navigator.language || window.navigator.userLanguage || 'en-us';

    function loadLocaleFile(locale) {
        return $.ajax({
            url: localeDir + '/' + locale + '.json',
            dataType: 'json',
            success: function (localeObject) {
                localeObjects[locale] = localeObject;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                throw ('Errors occur when loading locale file.');
            }
        });
    }

    // Locale file should be loaded before translate.
    function translate(locale) {
        var localeObject = localeObjects[locale];
        if (!localeObject) throw ('Locale ' + locale + ' is not supported.');

        $(document).find('[data-translate]').each(function (idx, element) {           
            console.log(localeObject[$(element).data('translate')]);
            $(element).text(localeObject[$(element).data('translate')]);
        });
    }

    return {
        translate: function (locale) {
            if (!localeObjects[locale]) {
                loadLocaleFile(locale).done(function () { translate(locale); });
            } else {
                translate(locale);
            }
        },

        setLocale: function (locale) {
            locale = locale || currentLocale;
            locale = locale.toLowerCase();
            currentLocale = locale;
            $.cookie(cookieKey, locale);
            this.translate(locale);
        },

        getLocale: function () {
            return currentLocale;
        }
    };
});