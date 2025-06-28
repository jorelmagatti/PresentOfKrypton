gdjs.Game_32FinalCode = {};
gdjs.Game_32FinalCode.localVariables = [];
gdjs.Game_32FinalCode.GDtela_9595finalObjects1= [];
gdjs.Game_32FinalCode.GDtela_9595finalObjects2= [];
gdjs.Game_32FinalCode.GDpresentObjects1= [];
gdjs.Game_32FinalCode.GDpresentObjects2= [];
gdjs.Game_32FinalCode.GDexitObjects1= [];
gdjs.Game_32FinalCode.GDexitObjects2= [];
gdjs.Game_32FinalCode.GDjorel_9595profileObjects1= [];
gdjs.Game_32FinalCode.GDjorel_9595profileObjects2= [];
gdjs.Game_32FinalCode.GDfinalFrase1Objects1= [];
gdjs.Game_32FinalCode.GDfinalFrase1Objects2= [];
gdjs.Game_32FinalCode.GDfinalFrase2Objects1= [];
gdjs.Game_32FinalCode.GDfinalFrase2Objects2= [];
gdjs.Game_32FinalCode.GDfinalFrase3Objects1= [];
gdjs.Game_32FinalCode.GDfinalFrase3Objects2= [];
gdjs.Game_32FinalCode.GDfinalFrase4Objects1= [];
gdjs.Game_32FinalCode.GDfinalFrase4Objects2= [];
gdjs.Game_32FinalCode.GDdavid_9595profile2Objects1= [];
gdjs.Game_32FinalCode.GDdavid_9595profile2Objects2= [];
gdjs.Game_32FinalCode.GDfinalFrase5Objects1= [];
gdjs.Game_32FinalCode.GDfinalFrase5Objects2= [];
gdjs.Game_32FinalCode.GDSurpriseObjects1= [];
gdjs.Game_32FinalCode.GDSurpriseObjects2= [];


gdjs.Game_32FinalCode.mapOfGDgdjs_9546Game_959532FinalCode_9546GDpresentObjects1Objects = Hashtable.newFrom({"present": gdjs.Game_32FinalCode.GDpresentObjects1});
gdjs.Game_32FinalCode.mapOfGDgdjs_9546Game_959532FinalCode_9546GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.Game_32FinalCode.GDexitObjects1});
gdjs.Game_32FinalCode.mapOfGDgdjs_9546Game_959532FinalCode_9546GDpresentObjects1Objects = Hashtable.newFrom({"present": gdjs.Game_32FinalCode.GDpresentObjects1});
gdjs.Game_32FinalCode.mapOfGDgdjs_9546Game_959532FinalCode_9546GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.Game_32FinalCode.GDexitObjects1});
gdjs.Game_32FinalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.Game_32FinalCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32FinalCode.GDexitObjects1.length;i<l;++i) {
    if ( gdjs.Game_32FinalCode.GDexitObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32FinalCode.GDexitObjects1[k] = gdjs.Game_32FinalCode.GDexitObjects1[i];
        ++k;
    }
}
gdjs.Game_32FinalCode.GDexitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jorel_profile"), gdjs.Game_32FinalCode.GDjorel_9595profileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32FinalCode.GDjorel_9595profileObjects1.length;i<l;++i) {
    if ( gdjs.Game_32FinalCode.GDjorel_9595profileObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32FinalCode.GDjorel_9595profileObjects1[k] = gdjs.Game_32FinalCode.GDjorel_9595profileObjects1[i];
        ++k;
    }
}
gdjs.Game_32FinalCode.GDjorel_9595profileObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/jorel_magatti/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.Game_32FinalCode.GDexitObjects1);
gdjs.copyArray(runtimeScene.getObjects("present"), gdjs.Game_32FinalCode.GDpresentObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Game_32FinalCode.mapOfGDgdjs_9546Game_959532FinalCode_9546GDpresentObjects1Objects, "Physics2", gdjs.Game_32FinalCode.mapOfGDgdjs_9546Game_959532FinalCode_9546GDexitObjects1Objects, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("finalFrase3"), gdjs.Game_32FinalCode.GDfinalFrase3Objects1);
gdjs.copyArray(runtimeScene.getObjects("finalFrase5"), gdjs.Game_32FinalCode.GDfinalFrase5Objects1);
{for(var i = 0, len = gdjs.Game_32FinalCode.GDfinalFrase3Objects1.length ;i < len;++i) {
    gdjs.Game_32FinalCode.GDfinalFrase3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32FinalCode.GDfinalFrase5Objects1.length ;i < len;++i) {
    gdjs.Game_32FinalCode.GDfinalFrase5Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.Game_32FinalCode.GDexitObjects1);
gdjs.copyArray(runtimeScene.getObjects("present"), gdjs.Game_32FinalCode.GDpresentObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.areObjectsColliding(gdjs.Game_32FinalCode.mapOfGDgdjs_9546Game_959532FinalCode_9546GDpresentObjects1Objects, "Physics2", gdjs.Game_32FinalCode.mapOfGDgdjs_9546Game_959532FinalCode_9546GDexitObjects1Objects, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Surprise"), gdjs.Game_32FinalCode.GDSurpriseObjects1);
gdjs.copyArray(runtimeScene.getObjects("finalFrase3"), gdjs.Game_32FinalCode.GDfinalFrase3Objects1);
gdjs.copyArray(runtimeScene.getObjects("finalFrase5"), gdjs.Game_32FinalCode.GDfinalFrase5Objects1);
{for(var i = 0, len = gdjs.Game_32FinalCode.GDfinalFrase3Objects1.length ;i < len;++i) {
    gdjs.Game_32FinalCode.GDfinalFrase3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32FinalCode.GDSurpriseObjects1.length ;i < len;++i) {
    gdjs.Game_32FinalCode.GDSurpriseObjects1[i].getBehavior("Animation").setAnimationName("surprise");
}
}{for(var i = 0, len = gdjs.Game_32FinalCode.GDfinalFrase5Objects1.length ;i < len;++i) {
    gdjs.Game_32FinalCode.GDfinalFrase5Objects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "song17.mp3", false, 55, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("david_profile2"), gdjs.Game_32FinalCode.GDdavid_9595profile2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32FinalCode.GDdavid_9595profile2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32FinalCode.GDdavid_9595profile2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32FinalCode.GDdavid_9595profile2Objects1[k] = gdjs.Game_32FinalCode.GDdavid_9595profile2Objects1[i];
        ++k;
    }
}
gdjs.Game_32FinalCode.GDdavid_9595profile2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/david_xd_xp/", runtimeScene);
}}

}


};

gdjs.Game_32FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32FinalCode.GDtela_9595finalObjects1.length = 0;
gdjs.Game_32FinalCode.GDtela_9595finalObjects2.length = 0;
gdjs.Game_32FinalCode.GDpresentObjects1.length = 0;
gdjs.Game_32FinalCode.GDpresentObjects2.length = 0;
gdjs.Game_32FinalCode.GDexitObjects1.length = 0;
gdjs.Game_32FinalCode.GDexitObjects2.length = 0;
gdjs.Game_32FinalCode.GDjorel_9595profileObjects1.length = 0;
gdjs.Game_32FinalCode.GDjorel_9595profileObjects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase1Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase1Objects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase2Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase2Objects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase3Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase3Objects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase4Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase4Objects2.length = 0;
gdjs.Game_32FinalCode.GDdavid_9595profile2Objects1.length = 0;
gdjs.Game_32FinalCode.GDdavid_9595profile2Objects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase5Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase5Objects2.length = 0;
gdjs.Game_32FinalCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32FinalCode.GDSurpriseObjects2.length = 0;

gdjs.Game_32FinalCode.eventsList0(runtimeScene);
gdjs.Game_32FinalCode.GDtela_9595finalObjects1.length = 0;
gdjs.Game_32FinalCode.GDtela_9595finalObjects2.length = 0;
gdjs.Game_32FinalCode.GDpresentObjects1.length = 0;
gdjs.Game_32FinalCode.GDpresentObjects2.length = 0;
gdjs.Game_32FinalCode.GDexitObjects1.length = 0;
gdjs.Game_32FinalCode.GDexitObjects2.length = 0;
gdjs.Game_32FinalCode.GDjorel_9595profileObjects1.length = 0;
gdjs.Game_32FinalCode.GDjorel_9595profileObjects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase1Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase1Objects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase2Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase2Objects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase3Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase3Objects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase4Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase4Objects2.length = 0;
gdjs.Game_32FinalCode.GDdavid_9595profile2Objects1.length = 0;
gdjs.Game_32FinalCode.GDdavid_9595profile2Objects2.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase5Objects1.length = 0;
gdjs.Game_32FinalCode.GDfinalFrase5Objects2.length = 0;
gdjs.Game_32FinalCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32FinalCode.GDSurpriseObjects2.length = 0;


return;

}

gdjs['Game_32FinalCode'] = gdjs.Game_32FinalCode;
