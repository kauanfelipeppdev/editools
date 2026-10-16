// ImAPNG · Safe Zone
// Cria uma camada guia (não aparece no render) com as áreas seguras de TikTok, Reels e Shorts
// na composição ativa. Uso: selecione a comp e rode o script (File > Scripts > Run Script File).
(function () {
    var comp = app.project.activeItem;
    if (!(comp && comp instanceof CompItem)) { alert("Abra uma composição primeiro."); return; }

    // margens em % da altura/largura de uma tela 1080x1920
    var PRESETS = {
        "TikTok":  { top: 0.08, bottom: 0.23, left: 0.06, right: 0.17 },
        "Reels":   { top: 0.12, bottom: 0.20, left: 0.06, right: 0.12 },
        "Shorts":  { top: 0.08, bottom: 0.20, left: 0.06, right: 0.14 },
        "YouTube (16:9) título": { top: 0.05, bottom: 0.05, left: 0.05, right: 0.05 }
    };

    var w = new Window("dialog", "Safe Zone");
    w.add("statictext", undefined, "Plataforma:");
    var names = [];
    for (var k in PRESETS) names.push(k);
    var dd = w.add("dropdownlist", undefined, names);
    dd.selection = 0;
    var g = w.add("group");
    var ok = g.add("button", undefined, "Criar", { name: "ok" });
    g.add("button", undefined, "Cancelar", { name: "cancel" });
    if (w.show() !== 1) return;

    var p = PRESETS[dd.selection.text];
    app.beginUndoGroup("Safe Zone");
    var W = comp.width, H = comp.height;
    var layer = comp.layers.addShape();
    layer.name = "SAFE ZONE - " + dd.selection.text;
    layer.guideLayer = true;
    layer.label = 1;
    var contents = layer.property("ADBE Root Vectors Group");

    function addRect(name, x, y, rw, rh, color, opacity) {
        var grp = contents.addProperty("ADBE Vector Group");
        grp.name = name;
        var vecs = grp.property("ADBE Vectors Group");
        var rect = vecs.addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").setValue([rw, rh]);
        rect.property("ADBE Vector Rect Position").setValue([x + rw / 2 - W / 2, y + rh / 2 - H / 2]);
        var fill = vecs.addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").setValue(color);
        fill.property("ADBE Vector Fill Opacity").setValue(opacity);
    }
    var t = H * p.top, b = H * p.bottom, l = W * p.left, r = W * p.right;
    addRect("topo", 0, 0, W, t, [1, 0.2, 0.2], 35);
    addRect("baixo", 0, H - b, W, b, [1, 0.2, 0.2], 35);
    addRect("esquerda", 0, t, l, H - t - b, [1, 0.6, 0.1], 25);
    addRect("direita", W - r, t, r, H - t - b, [1, 0.6, 0.1], 25);
    layer.property("ADBE Transform Group").property("ADBE Position").setValue([W / 2, H / 2]);
    app.endUndoGroup();
})();
