// ImAPNG · Expressões em massa
// Selecione propriedades (ex.: Position de várias camadas) e aplique a mesma expressão em todas de uma vez.
(function () {
    var comp = app.project.activeItem;
    if (!(comp && comp instanceof CompItem)) { alert("Abra uma composição primeiro."); return; }
    var props = comp.selectedProperties;
    var targets = [];
    for (var i = 0; i < props.length; i++) if (props[i].canSetExpression) targets.push(props[i]);
    if (!targets.length) { alert("Selecione uma ou mais propriedades (ex.: aperte P numa camada e clique em Position)."); return; }

    var PRONTAS = {
        "(escrever a minha)": "",
        "wiggle (tremida)": "wiggle(3, 20)",
        "loop infinito": "loopOut(\"cycle\")",
        "loop vai-e-volta": "loopOut(\"pingpong\")",
        "girar sem parar": "time * 90",
        "pulsar (escala)": "s = 100 + Math.sin(time * 6) * 5; [s, s]",
        "quique (inertia)": "amp = .06; freq = 2.5; decay = 5;\nn = 0; if (numKeys > 0) { n = nearestKey(time).index; if (key(n).time > time) n--; }\nif (n > 0) { t = time - key(n).time; v = velocityAtTime(key(n).time - thisComp.frameDuration / 10); value + v * amp * Math.sin(freq * t * 2 * Math.PI) / Math.exp(decay * t); } else value",
        "remover expressão": null
    };
    var w = new Window("dialog", "Expressões em massa · " + targets.length + " propriedade(s)");
    w.alignChildren = "fill";
    var names = [];
    for (var k in PRONTAS) names.push(k);
    var dd = w.add("dropdownlist", undefined, names);
    dd.selection = 1;
    var et = w.add("edittext", undefined, PRONTAS[names[1]], { multiline: true });
    et.preferredSize = [420, 140];
    dd.onChange = function () { var v = PRONTAS[dd.selection.text]; et.text = v === null ? "" : v; et.enabled = v !== null; };
    var g = w.add("group");
    g.alignment = "right";
    g.add("button", undefined, "Aplicar", { name: "ok" });
    g.add("button", undefined, "Cancelar", { name: "cancel" });
    if (w.show() !== 1) return;

    var remove = PRONTAS[dd.selection.text] === null;
    app.beginUndoGroup("Expressões em massa");
    var fails = 0;
    for (var j = 0; j < targets.length; j++) {
        try { targets[j].expression = remove ? "" : et.text; } catch (e) { fails++; }
    }
    app.endUndoGroup();
    if (fails) alert(fails + " propriedade(s) não aceitaram a expressão.");
})();
