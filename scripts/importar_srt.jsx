// EdiTools · Importar SRT
// Lê um arquivo de legenda .srt e cria uma camada de texto para cada fala, já no tempo certo.
(function () {
    var comp = app.project.activeItem;
    if (!(comp && comp instanceof CompItem)) { alert("Abra uma composição primeiro."); return; }
    var f = File.openDialog("Escolha o arquivo .srt", "Legendas:*.srt");
    if (!f) return;
    f.encoding = "UTF-8";
    f.open("r");
    var txt = f.read();
    f.close();

    function toSec(s) {
        var m = s.match(/(\d+):(\d+):(\d+)[,\.](\d+)/);
        return m ? (+m[1]) * 3600 + (+m[2]) * 60 + (+m[3]) + (+m[4]) / 1000 : 0;
    }
    var blocks = txt.replace(/\r/g, "").split(/\n\s*\n/);
    var subs = [];
    for (var i = 0; i < blocks.length; i++) {
        var lines = blocks[i].split("\n");
        for (var j = 0; j < lines.length; j++) {
            var tm = lines[j].match(/(\S+)\s*-->\s*(\S+)/);
            if (tm) {
                var body = lines.slice(j + 1).join("\r").replace(/<[^>]+>/g, "");
                if (body) subs.push({ a: toSec(tm[1]), b: toSec(tm[2]), t: body });
                break;
            }
        }
    }
    if (!subs.length) { alert("Não encontrei legendas nesse arquivo."); return; }

    app.beginUndoGroup("Importar SRT");
    for (var k = subs.length - 1; k >= 0; k--) {
        var s = subs[k];
        var layer = comp.layers.addText(s.t);
        var prop = layer.property("ADBE Text Properties").property("ADBE Text Document");
        var doc = prop.value;
        doc.fontSize = Math.round(comp.height * 0.05);
        doc.fillColor = [1, 1, 1];
        doc.applyStroke = true;
        doc.strokeColor = [0, 0, 0];
        doc.strokeWidth = Math.max(2, Math.round(comp.height * 0.004));
        doc.justification = ParagraphJustification.CENTER_JUSTIFY;
        prop.setValue(doc);
        layer.property("ADBE Transform Group").property("ADBE Position").setValue([comp.width / 2, comp.height * 0.85]);
        layer.inPoint = s.a;
        layer.outPoint = s.b;
        layer.name = (k + 1) + " · " + s.t.substr(0, 30);
    }
    app.endUndoGroup();
    alert(subs.length + " legendas importadas!");
})();
