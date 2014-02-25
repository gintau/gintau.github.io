require.config({
    baseUrl: '/',
    paths: {
        Main: 'app/Main',
        ProjectManager: 'app/ProjectManager',
        Header: 'app/Header',
        Translator: 'app/Translator',
        jquery: 'lib/jquery-2.1.0.min',
        bootstrap: 'lib/bootstrap-2.3.2/js/bootstrap.min',
        Mustache: 'lib/mustache'
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        }
    }
});