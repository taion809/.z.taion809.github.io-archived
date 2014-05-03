(function() {
    var location = window.location.hostname;
    if(location.indexOf('redstalker') == -1) {
        var section = document.createElement('section');
        section.className = 'panel panel-default';

        var heading = document.createElement('div');
        heading.className = 'panel-heading';

        var title = document.createElement('h3');
        title.className = 'panel-title';
        title.innerHTML = "Development Site";
        heading.appendChild(title);
        section.appendChild(heading);

        var content = document.createElement('div');
        content.className = 'panel-body';

        var innerContent = document.createElement('p');
        innerContent.innerHTML = "&nbsp;This is a dev site, try <a href='http://redstalker.com'>the live site.</a>";

        content.appendChild(innerContent);
        section.appendChild(content);

        document.getElementsByClassName('sidebar')[0].appendChild(section);
    }
})();
