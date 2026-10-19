// EdiTools · Organizador de projeto
// Joga cada item solto do painel Project na pasta certa: Comps, Vídeos, Áudios, Imagens, Sólidos e Outros.
(function () {
    var proj = app.project;
    if (!proj || proj.numItems === 0) { alert("O projeto está vazio."); return; }
    app.beginUndoGroup("Organizar projeto");

    var folders = {};
    function folder(name) {
        if (folders[name]) return folders[name];
        for (var i = 1; i <= proj.numItems; i++) {
            var it = proj.item(i);
            if (it instanceof FolderItem && it.name === name && it.parentFolder === proj.rootFolder) return (folders[name] = it);
        }
        return (folders[name] = proj.items.addFolder(name));
    }
    var IMG = /\.(png|jpe?g|gif|bmp|tiff?|psd|ai|eps|svg|webp|exr|tga)$/i;
    var AUD = /\.(wav|mp3|aac|m4a|aiff?|ogg|flac)$/i;

    var moved = 0, list = [];
    for (var i = 1; i <= proj.numItems; i++) list.push(proj.item(i));
    for (var j = 0; j < list.length; j++) {
        var it = list[j];
        if (it instanceof FolderItem || it.parentFolder !== proj.rootFolder) continue;
        var dest;
        if (it instanceof CompItem) dest = "01 Comps";
        else if (it instanceof FootageItem) {
            if (it.mainSource instanceof SolidSource) dest = "05 Sólidos";
            else if (it.mainSource instanceof PlaceholderSource) dest = "06 Outros";
            else {
                var name = it.file ? it.file.name : it.name;
                if (AUD.test(name) || (!it.hasVideo && it.hasAudio)) dest = "03 Áudios";
                else if (IMG.test(name) || it.mainSource.isStill) dest = "04 Imagens";
                else dest = "02 Vídeos";
            }
        } else dest = "06 Outros";
        it.parentFolder = folder(dest);
        moved++;
    }
    app.endUndoGroup();
    alert(moved + " item(ns) organizados.");
})();
