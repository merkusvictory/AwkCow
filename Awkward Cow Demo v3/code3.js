gdjs.Level_321Code = {};
gdjs.Level_321Code.GDAwkCowObjects1= [];
gdjs.Level_321Code.GDAwkCowObjects2= [];
gdjs.Level_321Code.GDAwkCowObjects3= [];
gdjs.Level_321Code.GDTestBlockObjects1= [];
gdjs.Level_321Code.GDTestBlockObjects2= [];
gdjs.Level_321Code.GDTestBlockObjects3= [];
gdjs.Level_321Code.GDTestBlock2Objects1= [];
gdjs.Level_321Code.GDTestBlock2Objects2= [];
gdjs.Level_321Code.GDTestBlock2Objects3= [];
gdjs.Level_321Code.GDBoxObjects1= [];
gdjs.Level_321Code.GDBoxObjects2= [];
gdjs.Level_321Code.GDBoxObjects3= [];
gdjs.Level_321Code.GDBlubaObjects1= [];
gdjs.Level_321Code.GDBlubaObjects2= [];
gdjs.Level_321Code.GDBlubaObjects3= [];
gdjs.Level_321Code.GDGrassObjects1= [];
gdjs.Level_321Code.GDGrassObjects2= [];
gdjs.Level_321Code.GDGrassObjects3= [];
gdjs.Level_321Code.GDDirtObjects1= [];
gdjs.Level_321Code.GDDirtObjects2= [];
gdjs.Level_321Code.GDDirtObjects3= [];
gdjs.Level_321Code.GDDirt_9595JumpthruObjects1= [];
gdjs.Level_321Code.GDDirt_9595JumpthruObjects2= [];
gdjs.Level_321Code.GDDirt_9595JumpthruObjects3= [];
gdjs.Level_321Code.GDLevelBorderObjects1= [];
gdjs.Level_321Code.GDLevelBorderObjects2= [];
gdjs.Level_321Code.GDLevelBorderObjects3= [];
gdjs.Level_321Code.GDWhiteFadeOutObjects1= [];
gdjs.Level_321Code.GDWhiteFadeOutObjects2= [];
gdjs.Level_321Code.GDWhiteFadeOutObjects3= [];
gdjs.Level_321Code.GDBlackFadeObjects1= [];
gdjs.Level_321Code.GDBlackFadeObjects2= [];
gdjs.Level_321Code.GDBlackFadeObjects3= [];
gdjs.Level_321Code.GDFlagObjects1= [];
gdjs.Level_321Code.GDFlagObjects2= [];
gdjs.Level_321Code.GDFlagObjects3= [];
gdjs.Level_321Code.GDSpikeObjects1= [];
gdjs.Level_321Code.GDSpikeObjects2= [];
gdjs.Level_321Code.GDSpikeObjects3= [];
gdjs.Level_321Code.GDWhiteFadeInObjects1= [];
gdjs.Level_321Code.GDWhiteFadeInObjects2= [];
gdjs.Level_321Code.GDWhiteFadeInObjects3= [];
gdjs.Level_321Code.GDMenuButtonObjects1= [];
gdjs.Level_321Code.GDMenuButtonObjects2= [];
gdjs.Level_321Code.GDMenuButtonObjects3= [];
gdjs.Level_321Code.GDTrunkObjects1= [];
gdjs.Level_321Code.GDTrunkObjects2= [];
gdjs.Level_321Code.GDTrunkObjects3= [];
gdjs.Level_321Code.GDHouseObjects1= [];
gdjs.Level_321Code.GDHouseObjects2= [];
gdjs.Level_321Code.GDHouseObjects3= [];


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackFade"), gdjs.Level_321Code.GDBlackFadeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDBlackFadeObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDBlackFadeObjects2[i].getOpacity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDBlackFadeObjects2[k] = gdjs.Level_321Code.GDBlackFadeObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDBlackFadeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBlackFadeObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDBlackFadeObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBlackFadeObjects2[i].setOpacity(gdjs.Level_321Code.GDBlackFadeObjects2[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 3));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackFade"), gdjs.Level_321Code.GDBlackFadeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDBlackFadeObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDBlackFadeObjects1[i].getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDBlackFadeObjects1[k] = gdjs.Level_321Code.GDBlackFadeObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDBlackFadeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321Code.GDAwkCowObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects1[i].setVariableBoolean(gdjs.Level_321Code.GDAwkCowObjects1[i].getVariables().getFromIndex(1), true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects1[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_321Code.GDAwkCowObjects1, gdjs.Level_321Code.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAwkCowObjects2[k] = gdjs.Level_321Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDAwkCowObjects1, gdjs.Level_321Code.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAwkCowObjects2[k] = gdjs.Level_321Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDAwkCowObjects1, gdjs.Level_321Code.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAwkCowObjects2[k] = gdjs.Level_321Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAwkCowObjects2[k] = gdjs.Level_321Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAwkCowObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].setAnimationSpeedScale(3);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDAwkCowObjects1, gdjs.Level_321Code.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAwkCowObjects2[k] = gdjs.Level_321Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDAwkCowObjects1, gdjs.Level_321Code.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAwkCowObjects2[k] = gdjs.Level_321Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDAwkCowObjects1, gdjs.Level_321Code.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAwkCowObjects2[k] = gdjs.Level_321Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].setAnimationName("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_321Code.GDAwkCowObjects1, gdjs.Level_321Code.GDAwkCowObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_321Code.GDAwkCowObjects1, gdjs.Level_321Code.GDAwkCowObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAwkCowObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321Code.GDAwkCowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAwkCowObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAwkCowObjects1[i].getVariableBoolean(gdjs.Level_321Code.GDAwkCowObjects1[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAwkCowObjects1[k] = gdjs.Level_321Code.GDAwkCowObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAwkCowObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDAwkCowObjects2Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_321Code.GDAwkCowObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLevelBorderObjects2Objects = Hashtable.newFrom({"LevelBorder": gdjs.Level_321Code.GDLevelBorderObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDAwkCowObjects1Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_321Code.GDAwkCowObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLevelBorderObjects1Objects = Hashtable.newFrom({"LevelBorder": gdjs.Level_321Code.GDLevelBorderObjects1});
gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321Code.GDAwkCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_321Code.GDLevelBorderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDAwkCowObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLevelBorderObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321Code.GDAwkCowObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_321Code.GDLevelBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDAwkCowObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDLevelBorderObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAwkCowObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321Code.GDAwkCowObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects2[i].setPosition(1270,450);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAwkCowObjects2[i].getX() >= 1280 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAwkCowObjects2[k] = gdjs.Level_321Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 1.2");
}}

}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Level_321Code.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMenuButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDMenuButtonObjects1[k] = gdjs.Level_321Code.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321Code.GDAwkCowObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects1[i].setVariableBoolean(gdjs.Level_321Code.GDAwkCowObjects1[i].getVariables().getFromIndex(1), false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAwkCowObjects1[i].setAnimationSpeedScale(1);
}
}}

}


{


gdjs.Level_321Code.eventsList0(runtimeScene);
}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


{


gdjs.Level_321Code.eventsList4(runtimeScene);
}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDAwkCowObjects1.length = 0;
gdjs.Level_321Code.GDAwkCowObjects2.length = 0;
gdjs.Level_321Code.GDAwkCowObjects3.length = 0;
gdjs.Level_321Code.GDTestBlockObjects1.length = 0;
gdjs.Level_321Code.GDTestBlockObjects2.length = 0;
gdjs.Level_321Code.GDTestBlockObjects3.length = 0;
gdjs.Level_321Code.GDTestBlock2Objects1.length = 0;
gdjs.Level_321Code.GDTestBlock2Objects2.length = 0;
gdjs.Level_321Code.GDTestBlock2Objects3.length = 0;
gdjs.Level_321Code.GDBoxObjects1.length = 0;
gdjs.Level_321Code.GDBoxObjects2.length = 0;
gdjs.Level_321Code.GDBoxObjects3.length = 0;
gdjs.Level_321Code.GDBlubaObjects1.length = 0;
gdjs.Level_321Code.GDBlubaObjects2.length = 0;
gdjs.Level_321Code.GDBlubaObjects3.length = 0;
gdjs.Level_321Code.GDGrassObjects1.length = 0;
gdjs.Level_321Code.GDGrassObjects2.length = 0;
gdjs.Level_321Code.GDGrassObjects3.length = 0;
gdjs.Level_321Code.GDDirtObjects1.length = 0;
gdjs.Level_321Code.GDDirtObjects2.length = 0;
gdjs.Level_321Code.GDDirtObjects3.length = 0;
gdjs.Level_321Code.GDDirt_9595JumpthruObjects1.length = 0;
gdjs.Level_321Code.GDDirt_9595JumpthruObjects2.length = 0;
gdjs.Level_321Code.GDDirt_9595JumpthruObjects3.length = 0;
gdjs.Level_321Code.GDLevelBorderObjects1.length = 0;
gdjs.Level_321Code.GDLevelBorderObjects2.length = 0;
gdjs.Level_321Code.GDLevelBorderObjects3.length = 0;
gdjs.Level_321Code.GDWhiteFadeOutObjects1.length = 0;
gdjs.Level_321Code.GDWhiteFadeOutObjects2.length = 0;
gdjs.Level_321Code.GDWhiteFadeOutObjects3.length = 0;
gdjs.Level_321Code.GDBlackFadeObjects1.length = 0;
gdjs.Level_321Code.GDBlackFadeObjects2.length = 0;
gdjs.Level_321Code.GDBlackFadeObjects3.length = 0;
gdjs.Level_321Code.GDFlagObjects1.length = 0;
gdjs.Level_321Code.GDFlagObjects2.length = 0;
gdjs.Level_321Code.GDFlagObjects3.length = 0;
gdjs.Level_321Code.GDSpikeObjects1.length = 0;
gdjs.Level_321Code.GDSpikeObjects2.length = 0;
gdjs.Level_321Code.GDSpikeObjects3.length = 0;
gdjs.Level_321Code.GDWhiteFadeInObjects1.length = 0;
gdjs.Level_321Code.GDWhiteFadeInObjects2.length = 0;
gdjs.Level_321Code.GDWhiteFadeInObjects3.length = 0;
gdjs.Level_321Code.GDMenuButtonObjects1.length = 0;
gdjs.Level_321Code.GDMenuButtonObjects2.length = 0;
gdjs.Level_321Code.GDMenuButtonObjects3.length = 0;
gdjs.Level_321Code.GDTrunkObjects1.length = 0;
gdjs.Level_321Code.GDTrunkObjects2.length = 0;
gdjs.Level_321Code.GDTrunkObjects3.length = 0;
gdjs.Level_321Code.GDHouseObjects1.length = 0;
gdjs.Level_321Code.GDHouseObjects2.length = 0;
gdjs.Level_321Code.GDHouseObjects3.length = 0;

gdjs.Level_321Code.eventsList6(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
