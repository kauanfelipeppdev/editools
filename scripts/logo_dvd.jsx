// EdiTools · Logo DVD
// Faz a camada selecionada quicar pelas bordas da composição igual ao descanso de tela do DVD,
// trocando de cor a cada batida (efeito Fill + expressão).
(function () {
    var comp = app.project.activeItem;
    if (!(comp && comp instanceof CompItem)) { alert("Abra uma composição primeiro."); return; }
    if (!comp.selectedLayers.length) { alert("Selecione a camada da logo."); return; }
    var speed = prompt("Velocidade (pixels por segundo):", "300");
    if (speed === null) return;
    speed = parseFloat(speed) || 300;

    var POS = [
        "var spd = " + speed + ";",
        "var r = sourceRectAtTime(time, false);",
        "var s = [transform.scale[0] / 100, transform.scale[1] / 100];",
        "var w = r.width * s[0], h = r.height * s[1];",
        "var ax = (transform.anchorPoint[0] - r.left) * s[0], ay = (transform.anchorPoint[1] - r.top) * s[1];",
        "var W = thisComp.width - w, H = thisComp.height - h;",
        "function tri(v, m) { var p = v % (2 * m); return p < m ? p : 2 * m - p; }",
        "var t = time + index * 1.7;",
        "[tri(t * spd + W * .3, W) + ax, tri(t * spd * .77 + H * .6, H) + ay];"
    ].join("\n");

    var COLOR = [
        "var spd = " + speed + ";",
        "var r = sourceRectAtTime(time, false);",
        "var s = [transform.scale[0] / 100, transform.scale[1] / 100];",
        "var W = thisComp.width - r.width * s[0], H = thisComp.height - r.height * s[1];",
        "var t = time + index * 1.7;",
        "var hits = Math.floor((t * spd + W * .3) / W) + Math.floor((t * spd * .77 + H * .6) / H);",
        "seedRandom(hits, true);",
        "hslToRgb([random(), 1, .55, 1]);"
    ].join("\n");

    app.beginUndoGroup("Logo DVD");
    for (var i = 0; i < comp.selectedLayers.length; i++) {
        var L = comp.selectedLayers[i];
        L.property("ADBE Transform Group").property("ADBE Position").expression = POS;
        var fx = L.property("ADBE Effect Parade").addProperty("ADBE Fill");
        fx.name = "Cor DVD";
        (fx.property("ADBE Fill-0002") || fx.property("Color")).expression = COLOR;
    }
    app.endUndoGroup();
})();
