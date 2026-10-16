// ImAPNG · Script Manager
// Painel com um botão pra cada script .jsx da mesma pasta. Coloque esta pasta inteira em
// "Scripts/ScriptUI Panels" e abra pelo menu Window > script_manager.jsx (dá pra encaixar na interface).
(function (thisObj) {
    var here = File($.fileName).parent;
    var win = thisObj instanceof Panel ? thisObj : new Window("palette", "ImAPNG Scripts", undefined, { resizeable: true });
    win.orientation = "column";
    win.alignChildren = ["fill", "top"];
    win.spacing = 4;
    win.margins = 8;

    function build() {
        while (win.children.length) win.remove(win.children[0]);
        var files = here.getFiles("*.jsx");
        files.sort(function (a, b) { return a.name < b.name ? -1 : 1; });
        for (var i = 0; i < files.length; i++) {
            var f = files[i];
            if (f.name === File($.fileName).name) continue;
            var label = decodeURI(f.name).replace(/\.jsx$/i, "").replace(/_/g, " ");
            var b = win.add("button", undefined, label);
            b.file = f;
            b.onClick = function () { try { $.evalFile(this.file); } catch (e) { alert("Erro em " + this.text + ":\n" + e.toString()); } };
        }
        var r = win.add("button", undefined, "↻ atualizar lista");
        r.onClick = function () { build(); win.layout.layout(true); };
    }
    build();
    win.onResizing = win.onResize = function () { this.layout.resize(); };
    if (win instanceof Window) { win.center(); win.show(); } else win.layout.layout(true);
})(this);
