// EdiTools · Exportar PNG
// Salva o frame atual da composição ativa como PNG (com transparência), sem passar pela fila de render.
(function () {
    var comp = app.project.activeItem;
    if (!(comp && comp instanceof CompItem)) { alert("Abra uma composição primeiro."); return; }
    var safe = comp.name.replace(/[\\\/:\*\?"<>\|]/g, "_");
    var frame = Math.round(comp.time / comp.frameDuration);
    var def = new File((app.project.file ? app.project.file.parent.fsName : Folder.desktop.fsName) + "/" + safe + "_" + frame + ".png");
    var f = def.saveDlg("Salvar frame como PNG", "PNG:*.png");
    if (!f) return;
    if (!/\.png$/i.test(f.name)) f = new File(f.fsName + ".png");
    try {
        comp.saveFrameToPng(comp.time, f);
    } catch (e) {
        // fallback: fila de render com o template PNG
        var item = app.project.renderQueue.items.add(comp);
        item.timeSpanStart = comp.time;
        item.timeSpanDuration = comp.frameDuration;
        var om = item.outputModule(1);
        try { om.applyTemplate("PNG Sequence"); } catch (e2) {}
        om.file = f;
        app.project.renderQueue.render();
    }
})();
