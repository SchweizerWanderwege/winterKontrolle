var wms_layers = [];


    var projection_LandeskarteWinter_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_LandeskarteWinter_0 = projection_LandeskarteWinter_0.getExtent();
    var size_LandeskarteWinter_0 = ol.extent.getWidth(projectionExtent_LandeskarteWinter_0) / 256;
    var resolutions_LandeskarteWinter_0 = new Array(25);
    var matrixIds_LandeskarteWinter_0 = new Array(25);
    for (var z = 0; z < 25; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_LandeskarteWinter_0[z] = size_LandeskarteWinter_0 / Math.pow(2, z);
        matrixIds_LandeskarteWinter_0[z] = z;
    }
    var lyr_LandeskarteWinter_0 = new ol.layer.Tile({
                            source: new ol.source.XYZ(({
                                url: "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe-winter/default/current/3857/{z}/{x}/{y}.jpeg",
                                attributions: '© <a href="https://www.swisstopo.admin.ch/">Swisstopo</a>',
                                
              projection: projection_LandeskarteWinter_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_LandeskarteWinter_0),
                resolutions: resolutions_LandeskarteWinter_0,
                matrixIds: matrixIds_LandeskarteWinter_0
              }),
              style: 'ch.swisstopo.pixelkarte-farbe-winter',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Landeskarte Winter',
                            opacity: 1.0,
                            
                            
                          });
var format_Schneeschuhwanderwege_1 = new ol.format.GeoJSON();
var features_Schneeschuhwanderwege_1 = format_Schneeschuhwanderwege_1.readFeatures(json_Schneeschuhwanderwege_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schneeschuhwanderwege_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schneeschuhwanderwege_1.addFeatures(features_Schneeschuhwanderwege_1);
var lyr_Schneeschuhwanderwege_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schneeschuhwanderwege_1, 
                style: style_Schneeschuhwanderwege_1,
                popuplayertitle: 'Schneeschuhwanderwege',
                interactive: true,
    title: 'Schneeschuhwanderwege<br />\
    <img src="styles/legend/Schneeschuhwanderwege_1_0.png" /> Best-of<br />\
    <img src="styles/legend/Schneeschuhwanderwege_1_1.png" /> Basisnetz<br />' });
var format_WinterWeg_2 = new ol.format.GeoJSON();
var features_WinterWeg_2 = format_WinterWeg_2.readFeatures(json_WinterWeg_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WinterWeg_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WinterWeg_2.addFeatures(features_WinterWeg_2);
var lyr_WinterWeg_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WinterWeg_2,
maxResolution:14.00223307613098,
 
                style: style_WinterWeg_2,
                popuplayertitle: 'WinterWeg',
                interactive: false,
    title: 'WinterWeg<br />\
    <img src="styles/legend/WinterWeg_2_0.png" /> SSR leicht<br />\
    <img src="styles/legend/WinterWeg_2_1.png" /> SSR mittel<br />\
    <img src="styles/legend/WinterWeg_2_2.png" /> SSR schwer<br />\
    <img src="styles/legend/WinterWeg_2_3.png" /> Winterwanderwege<br />' });
var format_Winterwanderwege_3 = new ol.format.GeoJSON();
var features_Winterwanderwege_3 = format_Winterwanderwege_3.readFeatures(json_Winterwanderwege_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Winterwanderwege_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Winterwanderwege_3.addFeatures(features_Winterwanderwege_3);
var lyr_Winterwanderwege_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Winterwanderwege_3, 
                style: style_Winterwanderwege_3,
                popuplayertitle: 'Winterwanderwege',
                interactive: true,
    title: 'Winterwanderwege<br />\
    <img src="styles/legend/Winterwanderwege_3_0.png" /> Best-of<br />\
    <img src="styles/legend/Winterwanderwege_3_1.png" /> Basisnetz<br />' });

var format_GemeindenKopie_5 = new ol.format.GeoJSON();
var features_GemeindenKopie_5 = format_GemeindenKopie_5.readFeatures(json_GemeindenKopie_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GemeindenKopie_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GemeindenKopie_5.addFeatures(features_GemeindenKopie_5);
var lyr_GemeindenKopie_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GemeindenKopie_5,
                maxResolution: 50, 
                style: style_GemeindenKopie_5,
                popuplayertitle: 'Gemeinden',
                interactive: true,
                title: '<img src="styles/legend/GemeindenKopie_5.png" /> Gemeinden'
            });

lyr_LandeskarteWinter_0.setVisible(true);lyr_Schneeschuhwanderwege_1.setVisible(true);lyr_WinterWeg_2.setVisible(true);lyr_Winterwanderwege_3.setVisible(true);lyr_GemeindenKopie_5.setVisible(true);
var layersList = [lyr_LandeskarteWinter_0,lyr_Schneeschuhwanderwege_1,lyr_WinterWeg_2,lyr_Winterwanderwege_3,lyr_GemeindenKopie_5];
lyr_Schneeschuhwanderwege_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Abwicklung': 'Abwicklung', 'AOrt': 'Ausgangs Ort', 'AuspraegR': 'AuspraegR', 'BeschreibR': 'Von - Bis', 'Change_Dt': 'Change_Dt', 'GueltigJ': 'GueltigJ', 'HoeheAbR': 'Abstieg', 'HoeheAufR': 'Aufstieg', 'HoeheMaxR': 'HoeheMaxR', 'HoeheMinR': 'HoeheMinR', 'KonditionR': 'Konditionelle Schwierigkeit', 'LaengeR': 'Distanz [m]', 'LVRoute_ID': 'LVRoute_ID', 'ReStR': 'ReStR', 'Richtung': 'Signalisationsrichtung', 'Routenart': 'Routenart', 'TechnikR': 'TechnikR', 'NameR': 'Name', 'NrR_ID': 'RoutenID FA LV', 'Typ_TR': 'Typ_TR', 'ZeitStZiR': 'Zeit Start - Ziel [min]', 'ZeitZiStR': 'Zeit Ziel - Start [min]', 'ZOrt': 'Zielort', 'NichtPubFhg': 'NichtPubFhg', 'UnsEtpZiel': 'UnsEtpZiel', 'NrR': 'Routennummer', 'LvArt': 'LvArt', 'Traeger': 'Trägerschaft', 'TraegerBem': 'TraegerBem', 'IsCHM': 'IsCHM', 'SHAPE_Length': 'SHAPE_Length', });
lyr_WinterWeg_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BelagTLM': 'BelagTLM', 'Bverb': 'Bverb', 'BverbE': 'BverbE', 'BverbQ': 'BverbQ', 'Change_Dt': 'Change_Dt', 'LVWeg_ID': 'LVWeg_ID', 'ReStWeg': 'ReStWeg', 'TLM_ID': 'TLM_ID', 'VerkehrM': 'VerkehrM', 'Zustand': 'Zustand', 'GeigenE': 'GeigenE', 'IsGEigen': 'IsGEigen', 'Netzhier': 'Netzhier', 'ZustTx': 'ZustTx', 'IsWinter': 'IsWinter', 'ObjektArt': 'ObjektArt', 'Kunstbaute': 'Kunstbaute', 'WegKat': 'WegKat', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Winterwanderwege_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Abwicklung': 'Abwicklung', 'AOrt': 'Ausgangs Ort', 'AuspraegR': 'AuspraegR', 'BeschreibR': 'Von - Bis', 'Change_Dt': 'Change_Dt', 'GueltigJ': 'GueltigJ', 'HoeheAbR': 'Abstieg', 'HoeheAufR': 'Aufstieg', 'HoeheMaxR': 'HoeheMaxR', 'HoeheMinR': 'HoeheMinR', 'KonditionR': 'Konditionelle Schwierigkeit', 'LaengeR': 'Distanz [m]', 'LVRoute_ID': 'LVRoute_ID', 'ReStR': 'ReStR', 'Richtung': 'Signalisationsrichtung', 'Routenart': 'Routenart', 'TechnikR': 'TechnikR', 'NameR': 'Name', 'NrR_ID': 'RoutenID FA LV', 'Typ_TR': 'Typ_TR', 'ZeitStZiR': 'Zeit Start - Ziel [min]', 'ZeitZiStR': 'Zeit Ziel - Start [min]', 'ZOrt': 'Zielort', 'NichtPubFhg': 'NichtPubFhg', 'UnsEtpZiel': 'UnsEtpZiel', 'NrR': 'Routennummer', 'LvArt': 'LvArt', 'Traeger': 'Trägerschaft', 'TraegerBem': 'TraegerBem', 'IsCHM': 'IsCHM', 'SHAPE_Length': 'SHAPE_Length', });
lyr_GemeindenKopie_5.set('fieldAliases', {'UUID': 'UUID', 'NAME': 'NAME', });
lyr_Schneeschuhwanderwege_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Abwicklung': 'TextEdit', 'AOrt': 'TextEdit', 'AuspraegR': 'TextEdit', 'BeschreibR': 'TextEdit', 'Change_Dt': 'DateTime', 'GueltigJ': 'TextEdit', 'HoeheAbR': 'TextEdit', 'HoeheAufR': 'TextEdit', 'HoeheMaxR': 'TextEdit', 'HoeheMinR': 'TextEdit', 'KonditionR': 'TextEdit', 'LaengeR': 'TextEdit', 'LVRoute_ID': 'TextEdit', 'ReStR': 'TextEdit', 'Richtung': 'TextEdit', 'Routenart': 'TextEdit', 'TechnikR': 'TextEdit', 'NameR': 'TextEdit', 'NrR_ID': 'TextEdit', 'Typ_TR': 'TextEdit', 'ZeitStZiR': 'TextEdit', 'ZeitZiStR': 'TextEdit', 'ZOrt': 'TextEdit', 'NichtPubFhg': 'Range', 'UnsEtpZiel': 'Range', 'NrR': 'TextEdit', 'LvArt': 'TextEdit', 'Traeger': 'TextEdit', 'TraegerBem': 'TextEdit', 'IsCHM': 'Range', 'SHAPE_Length': 'TextEdit', });
lyr_WinterWeg_2.set('fieldImages', {'OBJECTID': '', 'BelagTLM': 'TextEdit', 'Bverb': 'TextEdit', 'BverbE': 'TextEdit', 'BverbQ': 'TextEdit', 'Change_Dt': 'DateTime', 'LVWeg_ID': 'TextEdit', 'ReStWeg': 'TextEdit', 'TLM_ID': 'TextEdit', 'VerkehrM': 'TextEdit', 'Zustand': 'TextEdit', 'GeigenE': 'TextEdit', 'IsGEigen': 'TextEdit', 'Netzhier': 'TextEdit', 'ZustTx': 'TextEdit', 'IsWinter': 'Range', 'ObjektArt': 'TextEdit', 'Kunstbaute': 'TextEdit', 'WegKat': 'TextEdit', 'SHAPE_Length': '', });
lyr_Winterwanderwege_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Abwicklung': 'TextEdit', 'AOrt': 'TextEdit', 'AuspraegR': 'TextEdit', 'BeschreibR': 'TextEdit', 'Change_Dt': 'DateTime', 'GueltigJ': 'TextEdit', 'HoeheAbR': 'TextEdit', 'HoeheAufR': 'TextEdit', 'HoeheMaxR': 'TextEdit', 'HoeheMinR': 'TextEdit', 'KonditionR': 'TextEdit', 'LaengeR': 'TextEdit', 'LVRoute_ID': 'TextEdit', 'ReStR': 'TextEdit', 'Richtung': 'TextEdit', 'Routenart': 'TextEdit', 'TechnikR': 'TextEdit', 'NameR': 'TextEdit', 'NrR_ID': 'TextEdit', 'Typ_TR': 'TextEdit', 'ZeitStZiR': 'TextEdit', 'ZeitZiStR': 'TextEdit', 'ZOrt': 'TextEdit', 'NichtPubFhg': 'Range', 'UnsEtpZiel': 'Range', 'NrR': 'TextEdit', 'LvArt': 'TextEdit', 'Traeger': 'TextEdit', 'TraegerBem': 'TextEdit', 'IsCHM': 'Range', 'SHAPE_Length': 'TextEdit', });
lyr_GemeindenKopie_5.set('fieldImages', {'UUID': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Schneeschuhwanderwege_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Abwicklung': 'hidden field', 'AOrt': 'hidden field', 'AuspraegR': 'hidden field', 'BeschreibR': 'inline label - visible with data', 'Change_Dt': 'hidden field', 'GueltigJ': 'hidden field', 'HoeheAbR': 'inline label - visible with data', 'HoeheAufR': 'inline label - visible with data', 'HoeheMaxR': 'hidden field', 'HoeheMinR': 'hidden field', 'KonditionR': 'hidden field', 'LaengeR': 'inline label - visible with data', 'LVRoute_ID': 'hidden field', 'ReStR': 'hidden field', 'Richtung': 'hidden field', 'Routenart': 'hidden field', 'TechnikR': 'inline label - visible with data', 'NameR': 'inline label - visible with data', 'NrR_ID': 'hidden field', 'Typ_TR': 'hidden field', 'ZeitStZiR': 'inline label - visible with data', 'ZeitZiStR': 'hidden field', 'ZOrt': 'hidden field', 'NichtPubFhg': 'hidden field', 'UnsEtpZiel': 'hidden field', 'NrR': 'inline label - visible with data', 'LvArt': 'hidden field', 'Traeger': 'hidden field', 'TraegerBem': 'hidden field', 'IsCHM': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_WinterWeg_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'BelagTLM': 'no label', 'Bverb': 'no label', 'BverbE': 'no label', 'BverbQ': 'no label', 'Change_Dt': 'no label', 'LVWeg_ID': 'no label', 'ReStWeg': 'no label', 'TLM_ID': 'no label', 'VerkehrM': 'no label', 'Zustand': 'no label', 'GeigenE': 'no label', 'IsGEigen': 'no label', 'Netzhier': 'no label', 'ZustTx': 'no label', 'IsWinter': 'no label', 'ObjektArt': 'no label', 'Kunstbaute': 'no label', 'WegKat': 'no label', 'SHAPE_Length': 'no label', });
lyr_Winterwanderwege_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Abwicklung': 'hidden field', 'AOrt': 'hidden field', 'AuspraegR': 'hidden field', 'BeschreibR': 'inline label - visible with data', 'Change_Dt': 'hidden field', 'GueltigJ': 'hidden field', 'HoeheAbR': 'inline label - visible with data', 'HoeheAufR': 'inline label - visible with data', 'HoeheMaxR': 'hidden field', 'HoeheMinR': 'hidden field', 'KonditionR': 'hidden field', 'LaengeR': 'inline label - visible with data', 'LVRoute_ID': 'hidden field', 'ReStR': 'hidden field', 'Richtung': 'hidden field', 'Routenart': 'hidden field', 'TechnikR': 'hidden field', 'NameR': 'inline label - visible with data', 'NrR_ID': 'hidden field', 'Typ_TR': 'hidden field', 'ZeitStZiR': 'inline label - visible with data', 'ZeitZiStR': 'hidden field', 'ZOrt': 'hidden field', 'NichtPubFhg': 'hidden field', 'UnsEtpZiel': 'hidden field', 'NrR': 'inline label - visible with data', 'LvArt': 'hidden field', 'Traeger': 'hidden field', 'TraegerBem': 'hidden field', 'IsCHM': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_Winterwanderwege_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
lyr_GemeindenKopie_5.set('fieldLabels', {'UUID': 'hidden field', 'NAME': 'inline label - always visible', });

