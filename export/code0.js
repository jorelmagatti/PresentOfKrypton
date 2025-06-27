gdjs.Game_32_32MenuCode = {};
gdjs.Game_32_32MenuCode.localVariables = [];
gdjs.Game_32_32MenuCode.GDFundoObjects1= [];
gdjs.Game_32_32MenuCode.GDFundoObjects2= [];
gdjs.Game_32_32MenuCode.GDStartEventObjects1= [];
gdjs.Game_32_32MenuCode.GDStartEventObjects2= [];
gdjs.Game_32_32MenuCode.GDExitEventObjects1= [];
gdjs.Game_32_32MenuCode.GDExitEventObjects2= [];
gdjs.Game_32_32MenuCode.GDSurpriseObjects1= [];
gdjs.Game_32_32MenuCode.GDSurpriseObjects2= [];


gdjs.Game_32_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartEvent"), gdjs.Game_32_32MenuCode.GDStartEventObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_32MenuCode.GDStartEventObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_32MenuCode.GDStartEventObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_32MenuCode.GDStartEventObjects1[k] = gdjs.Game_32_32MenuCode.GDStartEventObjects1[i];
        ++k;
    }
}
gdjs.Game_32_32MenuCode.GDStartEventObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game Scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitEvent"), gdjs.Game_32_32MenuCode.GDExitEventObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32_32MenuCode.GDExitEventObjects1.length;i<l;++i) {
    if ( gdjs.Game_32_32MenuCode.GDExitEventObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32_32MenuCode.GDExitEventObjects1[k] = gdjs.Game_32_32MenuCode.GDExitEventObjects1[i];
        ++k;
    }
}
gdjs.Game_32_32MenuCode.GDExitEventObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.Game_32_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32_32MenuCode.GDFundoObjects1.length = 0;
gdjs.Game_32_32MenuCode.GDFundoObjects2.length = 0;
gdjs.Game_32_32MenuCode.GDStartEventObjects1.length = 0;
gdjs.Game_32_32MenuCode.GDStartEventObjects2.length = 0;
gdjs.Game_32_32MenuCode.GDExitEventObjects1.length = 0;
gdjs.Game_32_32MenuCode.GDExitEventObjects2.length = 0;
gdjs.Game_32_32MenuCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32_32MenuCode.GDSurpriseObjects2.length = 0;

gdjs.Game_32_32MenuCode.eventsList0(runtimeScene);
gdjs.Game_32_32MenuCode.GDFundoObjects1.length = 0;
gdjs.Game_32_32MenuCode.GDFundoObjects2.length = 0;
gdjs.Game_32_32MenuCode.GDStartEventObjects1.length = 0;
gdjs.Game_32_32MenuCode.GDStartEventObjects2.length = 0;
gdjs.Game_32_32MenuCode.GDExitEventObjects1.length = 0;
gdjs.Game_32_32MenuCode.GDExitEventObjects2.length = 0;
gdjs.Game_32_32MenuCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32_32MenuCode.GDSurpriseObjects2.length = 0;


return;

}

gdjs['Game_32_32MenuCode'] = gdjs.Game_32_32MenuCode;
