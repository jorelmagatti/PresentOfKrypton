gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDCoinsObjects1= [];
gdjs.Game_32SceneCode.GDCoinsObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595VerticalObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595VerticalObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595VerticalInvertObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595VerticalInvertObjects2= [];
gdjs.Game_32SceneCode.GDblocoEObjects1= [];
gdjs.Game_32SceneCode.GDblocoEObjects2= [];
gdjs.Game_32SceneCode.GDpainelObjects1= [];
gdjs.Game_32SceneCode.GDpainelObjects2= [];
gdjs.Game_32SceneCode.GDbackgroundObjects1= [];
gdjs.Game_32SceneCode.GDbackgroundObjects2= [];
gdjs.Game_32SceneCode.GDblocoDObjects1= [];
gdjs.Game_32SceneCode.GDblocoDObjects2= [];
gdjs.Game_32SceneCode.GDdoorObjects1= [];
gdjs.Game_32SceneCode.GDdoorObjects2= [];
gdjs.Game_32SceneCode.GDpresetObjects1= [];
gdjs.Game_32SceneCode.GDpresetObjects2= [];
gdjs.Game_32SceneCode.GDStarShipObjects1= [];
gdjs.Game_32SceneCode.GDStarShipObjects2= [];
gdjs.Game_32SceneCode.GDJorElObjects1= [];
gdjs.Game_32SceneCode.GDJorElObjects2= [];
gdjs.Game_32SceneCode.GDsupermomObjects1= [];
gdjs.Game_32SceneCode.GDsupermomObjects2= [];
gdjs.Game_32SceneCode.GDNewTextObjects1= [];
gdjs.Game_32SceneCode.GDNewTextObjects2= [];
gdjs.Game_32SceneCode.GDlightExtensionObjects1= [];
gdjs.Game_32SceneCode.GDlightExtensionObjects2= [];
gdjs.Game_32SceneCode.GDlightFinalAreaObjects1= [];
gdjs.Game_32SceneCode.GDlightFinalAreaObjects2= [];
gdjs.Game_32SceneCode.GDSurpriseObjects1= [];
gdjs.Game_32SceneCode.GDSurpriseObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJorElObjects1Objects = Hashtable.newFrom({"JorEl": gdjs.Game_32SceneCode.GDJorElObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_32SceneCode.GDCoinsObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJorElObjects1Objects = Hashtable.newFrom({"JorEl": gdjs.Game_32SceneCode.GDJorElObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.Game_32SceneCode.GDdoorObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpresetObjects1Objects = Hashtable.newFrom({"preset": gdjs.Game_32SceneCode.GDpresetObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.Game_32SceneCode.GDdoorObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpresetObjects1Objects = Hashtable.newFrom({"preset": gdjs.Game_32SceneCode.GDpresetObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.Game_32SceneCode.GDdoorObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJorElObjects1Objects = Hashtable.newFrom({"JorEl": gdjs.Game_32SceneCode.GDJorElObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpresetObjects1Objects = Hashtable.newFrom({"preset": gdjs.Game_32SceneCode.GDpresetObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpresetObjects1Objects = Hashtable.newFrom({"preset": gdjs.Game_32SceneCode.GDpresetObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDsupermomObjects1Objects = Hashtable.newFrom({"supermom": gdjs.Game_32SceneCode.GDsupermomObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Background", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_32SceneCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("JorEl"), gdjs.Game_32SceneCode.GDJorElObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJorElObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JorEl"), gdjs.Game_32SceneCode.GDJorElObjects1);
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.Game_32SceneCode.GDdoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJorElObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdoorObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdoorObjects1[i].getBehavior("Animation").setAnimationName("Open Gate");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.Game_32SceneCode.GDdoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("preset"), gdjs.Game_32SceneCode.GDpresetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpresetObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdoorObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdoorObjects1[i].getBehavior("Animation").setAnimationName("Open Gate");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.Game_32SceneCode.GDdoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("preset"), gdjs.Game_32SceneCode.GDpresetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpresetObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDpresetObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDpresetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDpresetObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JorEl"), gdjs.Game_32SceneCode.GDJorElObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJorElObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJorElObjects1[k] = gdjs.Game_32SceneCode.GDJorElObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJorElObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJorElObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJorElObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("Animation").setAnimationName("pulando direito");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JorEl"), gdjs.Game_32SceneCode.GDJorElObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJorElObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJorElObjects1[k] = gdjs.Game_32SceneCode.GDJorElObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJorElObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJorElObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJorElObjects1[k] = gdjs.Game_32SceneCode.GDJorElObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJorElObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJorElObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJorElObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("Animation").setAnimationName("Parado Direito");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JorEl"), gdjs.Game_32SceneCode.GDJorElObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJorElObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJorElObjects1[k] = gdjs.Game_32SceneCode.GDJorElObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJorElObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJorElObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJorElObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("Animation").setAnimationName("pulando direito");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JorEl"), gdjs.Game_32SceneCode.GDJorElObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJorElObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJorElObjects1[k] = gdjs.Game_32SceneCode.GDJorElObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJorElObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJorElObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJorElObjects1[k] = gdjs.Game_32SceneCode.GDJorElObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJorElObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJorElObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJorElObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("Animation").setAnimationName("Andando Direito");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJorElObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JorEl"), gdjs.Game_32SceneCode.GDJorElObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJorElObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJorElObjects1[k] = gdjs.Game_32SceneCode.GDJorElObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJorElObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDJorElObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDJorElObjects1[k] = gdjs.Game_32SceneCode.GDJorElObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDJorElObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJorElObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJorElObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("Animation").setAnimationName("Andando Direito");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDJorElObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJorElObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JorEl"), gdjs.Game_32SceneCode.GDJorElObjects1);
gdjs.copyArray(runtimeScene.getObjects("preset"), gdjs.Game_32SceneCode.GDpresetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJorElObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpresetObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDpresetObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDpresetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDpresetObjects1[i].addForce(1, 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.Game_32SceneCode.GDdoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdoorObjects1[i].getBehavior("Animation").getAnimationName() == "Open Gate" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdoorObjects1[k] = gdjs.Game_32SceneCode.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdoorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDdoorObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDdoorObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDdoorObjects1[k] = gdjs.Game_32SceneCode.GDdoorObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDdoorObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdoorObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdoorObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdoorObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("preset"), gdjs.Game_32SceneCode.GDpresetObjects1);
gdjs.copyArray(runtimeScene.getObjects("supermom"), gdjs.Game_32SceneCode.GDsupermomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDpresetObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDsupermomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDpresetObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDpresetObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDpresetObjects1[i].clearForces();
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595VerticalObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595VerticalObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595VerticalInvertObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595VerticalInvertObjects2.length = 0;
gdjs.Game_32SceneCode.GDblocoEObjects1.length = 0;
gdjs.Game_32SceneCode.GDblocoEObjects2.length = 0;
gdjs.Game_32SceneCode.GDpainelObjects1.length = 0;
gdjs.Game_32SceneCode.GDpainelObjects2.length = 0;
gdjs.Game_32SceneCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDblocoDObjects1.length = 0;
gdjs.Game_32SceneCode.GDblocoDObjects2.length = 0;
gdjs.Game_32SceneCode.GDdoorObjects1.length = 0;
gdjs.Game_32SceneCode.GDdoorObjects2.length = 0;
gdjs.Game_32SceneCode.GDpresetObjects1.length = 0;
gdjs.Game_32SceneCode.GDpresetObjects2.length = 0;
gdjs.Game_32SceneCode.GDStarShipObjects1.length = 0;
gdjs.Game_32SceneCode.GDStarShipObjects2.length = 0;
gdjs.Game_32SceneCode.GDJorElObjects1.length = 0;
gdjs.Game_32SceneCode.GDJorElObjects2.length = 0;
gdjs.Game_32SceneCode.GDsupermomObjects1.length = 0;
gdjs.Game_32SceneCode.GDsupermomObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDlightExtensionObjects1.length = 0;
gdjs.Game_32SceneCode.GDlightExtensionObjects2.length = 0;
gdjs.Game_32SceneCode.GDlightFinalAreaObjects1.length = 0;
gdjs.Game_32SceneCode.GDlightFinalAreaObjects2.length = 0;
gdjs.Game_32SceneCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32SceneCode.GDSurpriseObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595VerticalObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595VerticalObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595VerticalInvertObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595VerticalInvertObjects2.length = 0;
gdjs.Game_32SceneCode.GDblocoEObjects1.length = 0;
gdjs.Game_32SceneCode.GDblocoEObjects2.length = 0;
gdjs.Game_32SceneCode.GDpainelObjects1.length = 0;
gdjs.Game_32SceneCode.GDpainelObjects2.length = 0;
gdjs.Game_32SceneCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDblocoDObjects1.length = 0;
gdjs.Game_32SceneCode.GDblocoDObjects2.length = 0;
gdjs.Game_32SceneCode.GDdoorObjects1.length = 0;
gdjs.Game_32SceneCode.GDdoorObjects2.length = 0;
gdjs.Game_32SceneCode.GDpresetObjects1.length = 0;
gdjs.Game_32SceneCode.GDpresetObjects2.length = 0;
gdjs.Game_32SceneCode.GDStarShipObjects1.length = 0;
gdjs.Game_32SceneCode.GDStarShipObjects2.length = 0;
gdjs.Game_32SceneCode.GDJorElObjects1.length = 0;
gdjs.Game_32SceneCode.GDJorElObjects2.length = 0;
gdjs.Game_32SceneCode.GDsupermomObjects1.length = 0;
gdjs.Game_32SceneCode.GDsupermomObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDlightExtensionObjects1.length = 0;
gdjs.Game_32SceneCode.GDlightExtensionObjects2.length = 0;
gdjs.Game_32SceneCode.GDlightFinalAreaObjects1.length = 0;
gdjs.Game_32SceneCode.GDlightFinalAreaObjects2.length = 0;
gdjs.Game_32SceneCode.GDSurpriseObjects1.length = 0;
gdjs.Game_32SceneCode.GDSurpriseObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
