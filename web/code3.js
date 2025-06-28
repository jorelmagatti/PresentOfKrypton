gdjs.Game_32Pre_32SceneCode = {};
gdjs.Game_32Pre_32SceneCode.localVariables = [];
gdjs.Game_32Pre_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32Pre_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32Pre_32SceneCode.GDpresentObjects1= [];
gdjs.Game_32Pre_32SceneCode.GDpresentObjects2= [];
gdjs.Game_32Pre_32SceneCode.GDfraseObjects1= [];
gdjs.Game_32Pre_32SceneCode.GDfraseObjects2= [];
gdjs.Game_32Pre_32SceneCode.GDIniciarObjects1= [];
gdjs.Game_32Pre_32SceneCode.GDIniciarObjects2= [];
gdjs.Game_32Pre_32SceneCode.GDobjetivoObjects1= [];
gdjs.Game_32Pre_32SceneCode.GDobjetivoObjects2= [];
gdjs.Game_32Pre_32SceneCode.GDSurpriseObjects1= [];
gdjs.Game_32Pre_32SceneCode.GDSurpriseObjects2= [];


gdjs.Game_32Pre_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Iniciar"), gdjs.Game_32Pre_32SceneCode.GDIniciarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Pre_32SceneCode.GDIniciarObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Pre_32SceneCode.GDIniciarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Pre_32SceneCode.GDIniciarObjects1[k] = gdjs.Game_32Pre_32SceneCode.GDIniciarObjects1[i];
        ++k;
    }
}
gdjs.Game_32Pre_32SceneCode.GDIniciarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Rise of spirit.ogg", false, 30, 1);
}}

}


};

gdjs.Game_32Pre_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Pre_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDpresentObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDpresentObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDfraseObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDfraseObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDIniciarObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDIniciarObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDobjetivoObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDobjetivoObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDSurpriseObjects2.length = 0;

gdjs.Game_32Pre_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32Pre_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDpresentObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDpresentObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDfraseObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDfraseObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDIniciarObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDIniciarObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDobjetivoObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDobjetivoObjects2.length = 0;
gdjs.Game_32Pre_32SceneCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32Pre_32SceneCode.GDSurpriseObjects2.length = 0;


return;

}

gdjs['Game_32Pre_32SceneCode'] = gdjs.Game_32Pre_32SceneCode;
