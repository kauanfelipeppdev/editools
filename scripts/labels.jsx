// ImAPNG · Labels
// Pinta a cor (label) de cada camada da comp ativa de acordo com o tipo:
// texto, forma, sólido, ajuste, null, câmera/luz, vídeo, imagem, áudio e pré-comp.
(function () {
    var comp = app.project.activeItem;
    if (!(comp && comp instanceof CompItem)) { alert("Abra uma composição primeiro."); return; }
    // números das cores padrão do AE (Preferences > Labels)
    var C = { text: 1, shape: 8, solid: 4, adjust: 5, nul: 16, camlight: 6, video: 9, image: 2, audio: 3, precomp: 11 };
    var onlySel = comp.selectedLayers.length > 0;
    app.beginUndoGroup("Labels por tipo");
    for (var i = 1; i <= comp.numLayers; i++) {
        var L = comp.layer(i);
        if (onlySel && !L.selected) continue;
        var c;
        if (L instanceof TextLayer) c = C.text;
        else if (L instanceof ShapeLayer) c = C.shape;
        else if (L instanceof CameraLayer || L instanceof LightLayer) c = C.camlight;
        else if (L.nullLayer) c = C.nul;
        else if (L.adjustmentLayer) c = C.adjust;
        else if (L.source instanceof CompItem) c = C.precomp;
        else if (L.source && L.source.mainSource instanceof SolidSource) c = C.solid;
        else if (L.source && !L.hasVideo && L.hasAudio) c = C.audio;
        else if (L.source && L.source.mainSource && L.source.mainSource.isStill) c = C.image;
        else c = C.video;
        L.label = c;
    }
    app.endUndoGroup();
})();
