// ImAPNG · Letras recortadas
// Transforma a camada de texto selecionada em letras separadas, cada uma num "recorte de revista"
// (caixa colorida atrás, rotação e tamanho aleatórios). Tem tremida stop motion opcional.
(function () {
    var comp = app.project.activeItem;
    if (!(comp && comp instanceof CompItem)) { alert("Abra uma composição primeiro."); return; }
    var src = comp.selectedLayers[0];
    if (!(src instanceof TextLayer)) { alert("Selecione uma camada de texto."); return; }
    var shake = confirm("Adicionar tremida stop motion (8 fps)?");

    var PAPERS = [[[0.95, 0.92, 0.85], [0.07, 0.07, 0.07]], [[0.07, 0.07, 0.07], [1, 1, 1]], [[1, 0.84, 0.04], [0.07, 0.07, 0.07]],
        [[0.9, 0.22, 0.27], [1, 1, 1]], [[0.16, 0.44, 0.86], [1, 1, 1]], [[1, 1, 1], [0.76, 0.07, 0.12]], [[1, 0.56, 0.67], [0.24, 0.05, 0.07]]];
    var FONTS = ["Impact", "Georgia-Bold", "ArialMT", "TimesNewRomanPS-BoldMT", "CourierNewPS-BoldMT", "Arial-BoldMT", "Verdana-Bold"];

    var doc = src.property("ADBE Text Properties").property("ADBE Text Document").value;
    var text = doc.text, size = doc.fontSize;
    var pos = src.property("ADBE Transform Group").property("ADBE Position").value;
    app.beginUndoGroup("Letras recortadas");
    var x = pos[0], y = pos[1], startX = pos[0], made = 0;
    for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);
        if (ch === "\r" || ch === "\n") { x = startX; y += size * 1.4; continue; }
        if (ch === " ") { x += size * 0.45; continue; }
        var paper = PAPERS[Math.floor(Math.random() * PAPERS.length)];
        var k = 0.85 + Math.random() * 0.35;
        var L = comp.layers.addText(ch);
        var tp = L.property("ADBE Text Properties").property("ADBE Text Document");
        var d = tp.value;
        try { d.font = FONTS[Math.floor(Math.random() * FONTS.length)]; } catch (e) {}
        d.fontSize = size * k;
        d.fillColor = paper[1];
        d.applyStroke = false;
        d.justification = ParagraphJustification.CENTER_JUSTIFY;
        tp.setValue(d);
        L.name = "letra " + (made + 1) + " " + ch;
        // caixa de papel atrás, que acompanha o tamanho da letra
        var box = comp.layers.addShape();
        box.name = "papel " + (made + 1) + " " + ch;
        var vg = box.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group").property("ADBE Vectors Group");
        var rect = vg.addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").expression = "var r = thisLayer.parent.sourceRectAtTime(); [r.width + " + (size * 0.25) + ", r.height + " + (size * 0.25) + "]";
        rect.property("ADBE Vector Rect Position").expression = "var r = thisLayer.parent.sourceRectAtTime(); [r.left + r.width / 2, r.top + r.height / 2]";
        vg.addProperty("ADBE Vector Graphic - Fill").property("ADBE Vector Fill Color").setValue(paper[0]);
        box.moveAfter(L);
        box.parent = L;
        box.property("ADBE Transform Group").property("ADBE Position").setValue([0, 0]);
        var tr = L.property("ADBE Transform Group");
        tr.property("ADBE Position").setValue([x, y]);
        tr.property("ADBE Rotate Z").setValue((Math.random() - 0.5) * 14);
        if (shake) {
            tr.property("ADBE Position").expression = "posterizeTime(8); wiggle(8, " + Math.round(size * 0.03) + ")";
            tr.property("ADBE Rotate Z").expression = "posterizeTime(8); value + wiggle(8, 3) - value";
        }
        x += size * k * 0.75;
        made++;
    }
    src.enabled = false;
    app.endUndoGroup();
    alert(made + " letras criadas. A camada original foi escondida.");
})();
