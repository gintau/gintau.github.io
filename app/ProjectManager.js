define(['jquery', 'Mustache', 'bootstrap'], function ($, Mustache) {

    var data = {
        projects: [
            {
                name: 'Colfusion',
                description_key: 'COFUSION_DESC',
                temp: 'Col*Fusion (Collaborative Data Fusion) is an advanced infrastructure for systematic accumulation, integration and utilization of historical data. It aims to support large-scale interdisciplinary research, where a comprehensive picture of the subject requires large amounts of historical data from disparate data sources from a variety of disciplines.',
                videos: [
                    { src: '//www.youtube.com/embed/-uKMoqzx6NE', type: 'mp4' }
                ],
                images: [
                    { src: 'data_preview.png', caption: 'Datasets are merged based on pre-defined associations' },
                    { src: 'rel_editing.png', caption: 'Create, edit, and comment user-defined associations between datasets' },
                    { src: 'rel_graph.png', caption: 'Inspect association path using graphical tool' },
                    { src: 'visual.png', caption: 'Aggregate and visualize merged datasets' }
                ],
                technologies: ['PHP5', 'Javascript', 'Knockout.js', 'Google Chart', 'MySQL', 'Pentaho Kettle ETL tool']
            },
            {
                name: 'SALT',
                description_key: 'SALT_DESC',
                temp: 'Self Adaping Learning Through Teaching (SALT) is a social network for knowledge sharing. SALT emphasizes peer-to-peer learning, users learn from lessons (we call them lesslets) provided by others, and contribute their knowledge to SALT community.',
                images: [
                    { src: 'action.png', caption: 'To know what lessons your frineds are learning' },
                    { src: 'editor.png', caption: 'Create and edit a lesslet' },
                    { src: 'lesslets.png', caption: 'Lesslets are grouped by topics' },
                    { src: 'lesslet.png', caption: 'Learn, practice, and give feedback' },
                    { src: 'lesslet-2.png', caption: 'Use examples to clarify your concept' }
                ],
                technologies: ['ASP.NET MVC 4', 'C# .NET 4.5', 'Entity Framework 4', 'Websockets', 'Javascript', 'SQL Server 2008 R2']
            },
            {
                name: 'Courena',
                description_key: 'COURENA_DESC',
                temp: 'Courena is a teaching assitant for school courses. ' +
                    'For students, Courena helps master school courses by providing a real-time team-based competition game. ' +
                    'For instructors, Courena introduces an interactive assessment platform and useful statistical tools, helping instructors quickly get a picture of learning outcome.',
                images: [
                    { src: 'image003.png', caption: 'View courses you are participating' },
                    { src: 'image027.png', caption: 'Join, or spectate a game' },
                    { src: 'image017.png', caption: 'Compete with players using your knowledge' }
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