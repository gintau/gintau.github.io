define(['jquery', 'Mustache', 'bootstrap'], function ($, Mustache) {

    var data = {
        projects: [
            {
                name: 'Colfusion',
                description_key: 'COLFUSION_DESC',
                videos: [
                    { src: '//www.youtube.com/embed/-uKMoqzx6NE', type: 'mp4' }
                ],
                images: [
                    { src: 'data_preview.png', caption: 'COLFUSION_IMG_PREIVEW' },
                    { src: 'rel_editing.png', caption: 'COLFUSION_IMG_REL' },
                    { src: 'rel_graph.png', caption: 'COLFUSION_IMG_PATH' },
                    { src: 'visual.png', caption: 'COLFUSION_IMG_VISUAL' }
                ],
                technologies: ['PHP5', 'Javascript', 'Knockout.js', 'Google Chart', 'MySQL', 'Pentaho Kettle ETL tool']
            },
            {
                name: 'SALT',
                description_key: 'SALT_DESC',
                images: [
                    { src: 'action.png', caption: 'SALT_IMG_ACT' },
                    { src: 'editor.png', caption: 'SALT_IMG_CREATE' },
                    { src: 'lesslets.png', caption: 'SALT_IMG_TOPIC' },
                    { src: 'lesslet.png', caption: 'SALT_IMG_LESSLET' },
                    { src: 'lesslet-2.png', caption: 'SALT_IMG_EXAMPLE' }
                ],
                technologies: ['ASP.NET MVC 4', 'C# .NET 4.5', 'Entity Framework 4', 'Websockets', 'Javascript', 'SQL Server 2008 R2']
            },
            {
                name: 'Courena',
                description_key: 'COURENA_DESC',
                images: [
                    { src: 'image003.png', caption: 'COURENA_IMG_MENU' },
                    { src: 'image027.png', caption: 'COURENA_IMG_ARENA' },
                    { src: 'image017.png', caption: 'COURENA_IMG_GAME' }
                ],
                technologies: ['Java EE 1.6', 'Websockets', 'Javascript', 'MySQL']
            }
        ]
    };

    // Add index to project objects, and their images.
    $.each(data.projects, function (project_idx, project) {
        project['@index'] = project_idx;
        project['isFirst'] = project_idx == 0;

        var hasVideo = false;
        if (project.videos && project.videos.length > 0) {
            hasVideo = true;
            $.each(project.videos, function (vd_idx, video) {
                video['@index'] = vd_idx;
                video['isFirst'] = vd_idx == 0;
            });
        }

        $.each(project.images, function (img_idx, image) {
            image['@index'] = img_idx;
            image['isFirst'] = !hasVideo && img_idx == 0;
        });
    });

    var projectContainer = $('#content');
    var template = $('#project-template');

    return {
        setProjectContainer: function (elem) {
            projectContainer = elem;
        },
        setTemplate: function (elem) {
            template = elem;
        },
        renderProjects: function () {
            var output = Mustache.render($(template).html(), data);
            $(projectContainer).html(output);
            $(projectContainer).find('.carousel').carousel({ interval: false });
        }
    };
});