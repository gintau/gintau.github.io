require.config({
    baseUrl: '/',
    paths: {
        ProjectManager: 'app/ProjectManager',
        Header: 'app/Header',
        Translator: 'app/Translator',
        jquery: 'lib/jquery-2.1.0.min',
        bootstrap: 'lib/bootstrap-2.3.2/js/bootstrap.min',
        Mustache: 'lib/mustache',
    },
    shim: {
        "lib/jquery-cookie" : ["jquery"],
        bootstrap: {
            deps: ["jquery"]
        }
    }
});