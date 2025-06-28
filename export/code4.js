gdjs.Game_32Pre_32FinalCode = {};
gdjs.Game_32Pre_32FinalCode.localVariables = [];
gdjs.Game_32Pre_32FinalCode.GDtelaObjects1= [];
gdjs.Game_32Pre_32FinalCode.GDtelaObjects2= [];
gdjs.Game_32Pre_32FinalCode.GDprontosObjects1= [];
gdjs.Game_32Pre_32FinalCode.GDprontosObjects2= [];
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595rosaObjects1= [];
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595rosaObjects2= [];
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595azulObjects1= [];
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595azulObjects2= [];
gdjs.Game_32Pre_32FinalCode.GDSurpriseObjects1= [];
gdjs.Game_32Pre_32FinalCode.GDSurpriseObjects2= [];


gdjs.Game_32Pre_32FinalCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "esperaFinal") > 10;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Final", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "esperaFinal") > 8;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "esperaFinal");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "cielo244718.mp3", false, 25, 1);
}}

}


};

gdjs.Game_32Pre_32FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Pre_32FinalCode.GDtelaObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDtelaObjects2.length = 0;
gdjs.Game_32Pre_32FinalCode.GDprontosObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDprontosObjects2.length = 0;
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595rosaObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595rosaObjects2.length = 0;
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595azulObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595azulObjects2.length = 0;
gdjs.Game_32Pre_32FinalCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDSurpriseObjects2.length = 0;

gdjs.Game_32Pre_32FinalCode.eventsList0(runtimeScene);
gdjs.Game_32Pre_32FinalCode.GDtelaObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDtelaObjects2.length = 0;
gdjs.Game_32Pre_32FinalCode.GDprontosObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDprontosObjects2.length = 0;
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595rosaObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595rosaObjects2.length = 0;
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595azulObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDchocalho_9595azulObjects2.length = 0;
gdjs.Game_32Pre_32FinalCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32Pre_32FinalCode.GDSurpriseObjects2.length = 0;


return;

}

gdjs['Game_32Pre_32FinalCode'] = gdjs.Game_32Pre_32FinalCode;
