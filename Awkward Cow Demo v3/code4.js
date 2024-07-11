gdjs.Level_321_462Code = {};
gdjs.Level_321_462Code.GDAwkCowObjects1= [];
gdjs.Level_321_462Code.GDAwkCowObjects2= [];
gdjs.Level_321_462Code.GDAwkCowObjects3= [];
gdjs.Level_321_462Code.GDAwkCowObjects4= [];
gdjs.Level_321_462Code.GDTestBlockObjects1= [];
gdjs.Level_321_462Code.GDTestBlockObjects2= [];
gdjs.Level_321_462Code.GDTestBlockObjects3= [];
gdjs.Level_321_462Code.GDTestBlockObjects4= [];
gdjs.Level_321_462Code.GDTestBlock2Objects1= [];
gdjs.Level_321_462Code.GDTestBlock2Objects2= [];
gdjs.Level_321_462Code.GDTestBlock2Objects3= [];
gdjs.Level_321_462Code.GDTestBlock2Objects4= [];
gdjs.Level_321_462Code.GDBoxObjects1= [];
gdjs.Level_321_462Code.GDBoxObjects2= [];
gdjs.Level_321_462Code.GDBoxObjects3= [];
gdjs.Level_321_462Code.GDBoxObjects4= [];
gdjs.Level_321_462Code.GDBlubaObjects1= [];
gdjs.Level_321_462Code.GDBlubaObjects2= [];
gdjs.Level_321_462Code.GDBlubaObjects3= [];
gdjs.Level_321_462Code.GDBlubaObjects4= [];
gdjs.Level_321_462Code.GDGrassObjects1= [];
gdjs.Level_321_462Code.GDGrassObjects2= [];
gdjs.Level_321_462Code.GDGrassObjects3= [];
gdjs.Level_321_462Code.GDGrassObjects4= [];
gdjs.Level_321_462Code.GDDirtObjects1= [];
gdjs.Level_321_462Code.GDDirtObjects2= [];
gdjs.Level_321_462Code.GDDirtObjects3= [];
gdjs.Level_321_462Code.GDDirtObjects4= [];
gdjs.Level_321_462Code.GDDirt_9595JumpthruObjects1= [];
gdjs.Level_321_462Code.GDDirt_9595JumpthruObjects2= [];
gdjs.Level_321_462Code.GDDirt_9595JumpthruObjects3= [];
gdjs.Level_321_462Code.GDDirt_9595JumpthruObjects4= [];
gdjs.Level_321_462Code.GDLevelBorderObjects1= [];
gdjs.Level_321_462Code.GDLevelBorderObjects2= [];
gdjs.Level_321_462Code.GDLevelBorderObjects3= [];
gdjs.Level_321_462Code.GDLevelBorderObjects4= [];
gdjs.Level_321_462Code.GDWhiteFadeOutObjects1= [];
gdjs.Level_321_462Code.GDWhiteFadeOutObjects2= [];
gdjs.Level_321_462Code.GDWhiteFadeOutObjects3= [];
gdjs.Level_321_462Code.GDWhiteFadeOutObjects4= [];
gdjs.Level_321_462Code.GDBlackFadeObjects1= [];
gdjs.Level_321_462Code.GDBlackFadeObjects2= [];
gdjs.Level_321_462Code.GDBlackFadeObjects3= [];
gdjs.Level_321_462Code.GDBlackFadeObjects4= [];
gdjs.Level_321_462Code.GDFlagObjects1= [];
gdjs.Level_321_462Code.GDFlagObjects2= [];
gdjs.Level_321_462Code.GDFlagObjects3= [];
gdjs.Level_321_462Code.GDFlagObjects4= [];
gdjs.Level_321_462Code.GDSpikeObjects1= [];
gdjs.Level_321_462Code.GDSpikeObjects2= [];
gdjs.Level_321_462Code.GDSpikeObjects3= [];
gdjs.Level_321_462Code.GDSpikeObjects4= [];
gdjs.Level_321_462Code.GDWhiteFadeInObjects1= [];
gdjs.Level_321_462Code.GDWhiteFadeInObjects2= [];
gdjs.Level_321_462Code.GDWhiteFadeInObjects3= [];
gdjs.Level_321_462Code.GDWhiteFadeInObjects4= [];
gdjs.Level_321_462Code.GDMenuButtonObjects1= [];
gdjs.Level_321_462Code.GDMenuButtonObjects2= [];
gdjs.Level_321_462Code.GDMenuButtonObjects3= [];
gdjs.Level_321_462Code.GDMenuButtonObjects4= [];
gdjs.Level_321_462Code.GDTrunkObjects1= [];
gdjs.Level_321_462Code.GDTrunkObjects2= [];
gdjs.Level_321_462Code.GDTrunkObjects3= [];
gdjs.Level_321_462Code.GDTrunkObjects4= [];


gdjs.Level_321_462Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDAwkCowObjects2[k] = gdjs.Level_321_462Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDAwkCowObjects2[k] = gdjs.Level_321_462Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDAwkCowObjects2[k] = gdjs.Level_321_462Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDAwkCowObjects2[k] = gdjs.Level_321_462Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDAwkCowObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].setAnimationSpeedScale(3);
}
}{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDAwkCowObjects2[k] = gdjs.Level_321_462Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDAwkCowObjects2[k] = gdjs.Level_321_462Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDAwkCowObjects2[k] = gdjs.Level_321_462Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_321_462Code.GDFlagObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDFlagObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDFlagObjects2[i].getVariableBoolean(gdjs.Level_321_462Code.GDFlagObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDFlagObjects2[k] = gdjs.Level_321_462Code.GDFlagObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDFlagObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].setAnimationSpeedScale(1);
}
}{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].activateBehavior("PlatformerObject", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects1);
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDAwkCowObjects3Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_321_462Code.GDAwkCowObjects3});
gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDLevelBorderObjects3Objects = Hashtable.newFrom({"LevelBorder": gdjs.Level_321_462Code.GDLevelBorderObjects3});
gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDAwkCowObjects2Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_321_462Code.GDAwkCowObjects2});
gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDLevelBorderObjects2Objects = Hashtable.newFrom({"LevelBorder": gdjs.Level_321_462Code.GDLevelBorderObjects2});
gdjs.Level_321_462Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_321_462Code.GDLevelBorderObjects3);
{for(var i = 0, len = gdjs.Level_321_462Code.GDLevelBorderObjects3.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDLevelBorderObjects3[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects3);
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_321_462Code.GDLevelBorderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDAwkCowObjects3Objects, gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDLevelBorderObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_321_462Code.GDLevelBorderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDAwkCowObjects2Objects, gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDLevelBorderObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}

}


};gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDAwkCowObjects3Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_321_462Code.GDAwkCowObjects3});
gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDFlagObjects3Objects = Hashtable.newFrom({"Flag": gdjs.Level_321_462Code.GDFlagObjects3});
gdjs.Level_321_462Code.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.Level_321_462Code.asyncCallback12868372 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}
{ //Subevents
gdjs.Level_321_462Code.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Level_321_462Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Level_321_462Code.asyncCallback12868372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_321_462Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects3);
gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_321_462Code.GDFlagObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDAwkCowObjects3Objects, gdjs.Level_321_462Code.mapOfGDgdjs_9546Level_9595321_9595462Code_9546GDFlagObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDFlagObjects3 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDFlagObjects3.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDFlagObjects3[i].setVariableBoolean(gdjs.Level_321_462Code.GDFlagObjects3[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_321_462Code.GDFlagObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDFlagObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDFlagObjects2[i].getVariableBoolean(gdjs.Level_321_462Code.GDFlagObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDFlagObjects2[k] = gdjs.Level_321_462Code.GDFlagObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDFlagObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDFlagObjects2 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDFlagObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDFlagObjects2[i].setAnimationName("finished");
}
}
{ //Subevents
gdjs.Level_321_462Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321_462Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12870324);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_321_462Code.GDWhiteFadeOutObjects2);
{for(var i = 0, len = gdjs.Level_321_462Code.GDWhiteFadeOutObjects2.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDWhiteFadeOutObjects2[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_321_462Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_321_462Code.GDWhiteFadeOutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDFlagObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDFlagObjects1[i].getVariableBoolean(gdjs.Level_321_462Code.GDFlagObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDFlagObjects1[k] = gdjs.Level_321_462Code.GDFlagObjects1[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDFlagObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDWhiteFadeOutObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDWhiteFadeOutObjects1[i].getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDWhiteFadeOutObjects1[k] = gdjs.Level_321_462Code.GDWhiteFadeOutObjects1[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDWhiteFadeOutObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321_462Code.GDWhiteFadeOutObjects1 */
{for(var i = 0, len = gdjs.Level_321_462Code.GDWhiteFadeOutObjects1.length ;i < len;++i) {
    gdjs.Level_321_462Code.GDWhiteFadeOutObjects1[i].setOpacity(gdjs.Level_321_462Code.GDWhiteFadeOutObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 1));
}
}}

}


};gdjs.Level_321_462Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_321_462Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDAwkCowObjects2[i].getX() <= -(75) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDAwkCowObjects2[k] = gdjs.Level_321_462Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.Level_321_462Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321_462Code.eventsList4(runtimeScene);
}


{


gdjs.Level_321_462Code.eventsList5(runtimeScene);
}


};gdjs.Level_321_462Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Level_321_462Code.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_462Code.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_462Code.GDMenuButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_462Code.GDMenuButtonObjects1[k] = gdjs.Level_321_462Code.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.Level_321_462Code.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.Level_321_462Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level_321_462Code.eventsList0(runtimeScene);
}


{


gdjs.Level_321_462Code.eventsList6(runtimeScene);
}


{


gdjs.Level_321_462Code.eventsList7(runtimeScene);
}


};

gdjs.Level_321_462Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321_462Code.GDAwkCowObjects1.length = 0;
gdjs.Level_321_462Code.GDAwkCowObjects2.length = 0;
gdjs.Level_321_462Code.GDAwkCowObjects3.length = 0;
gdjs.Level_321_462Code.GDAwkCowObjects4.length = 0;
gdjs.Level_321_462Code.GDTestBlockObjects1.length = 0;
gdjs.Level_321_462Code.GDTestBlockObjects2.length = 0;
gdjs.Level_321_462Code.GDTestBlockObjects3.length = 0;
gdjs.Level_321_462Code.GDTestBlockObjects4.length = 0;
gdjs.Level_321_462Code.GDTestBlock2Objects1.length = 0;
gdjs.Level_321_462Code.GDTestBlock2Objects2.length = 0;
gdjs.Level_321_462Code.GDTestBlock2Objects3.length = 0;
gdjs.Level_321_462Code.GDTestBlock2Objects4.length = 0;
gdjs.Level_321_462Code.GDBoxObjects1.length = 0;
gdjs.Level_321_462Code.GDBoxObjects2.length = 0;
gdjs.Level_321_462Code.GDBoxObjects3.length = 0;
gdjs.Level_321_462Code.GDBoxObjects4.length = 0;
gdjs.Level_321_462Code.GDBlubaObjects1.length = 0;
gdjs.Level_321_462Code.GDBlubaObjects2.length = 0;
gdjs.Level_321_462Code.GDBlubaObjects3.length = 0;
gdjs.Level_321_462Code.GDBlubaObjects4.length = 0;
gdjs.Level_321_462Code.GDGrassObjects1.length = 0;
gdjs.Level_321_462Code.GDGrassObjects2.length = 0;
gdjs.Level_321_462Code.GDGrassObjects3.length = 0;
gdjs.Level_321_462Code.GDGrassObjects4.length = 0;
gdjs.Level_321_462Code.GDDirtObjects1.length = 0;
gdjs.Level_321_462Code.GDDirtObjects2.length = 0;
gdjs.Level_321_462Code.GDDirtObjects3.length = 0;
gdjs.Level_321_462Code.GDDirtObjects4.length = 0;
gdjs.Level_321_462Code.GDDirt_9595JumpthruObjects1.length = 0;
gdjs.Level_321_462Code.GDDirt_9595JumpthruObjects2.length = 0;
gdjs.Level_321_462Code.GDDirt_9595JumpthruObjects3.length = 0;
gdjs.Level_321_462Code.GDDirt_9595JumpthruObjects4.length = 0;
gdjs.Level_321_462Code.GDLevelBorderObjects1.length = 0;
gdjs.Level_321_462Code.GDLevelBorderObjects2.length = 0;
gdjs.Level_321_462Code.GDLevelBorderObjects3.length = 0;
gdjs.Level_321_462Code.GDLevelBorderObjects4.length = 0;
gdjs.Level_321_462Code.GDWhiteFadeOutObjects1.length = 0;
gdjs.Level_321_462Code.GDWhiteFadeOutObjects2.length = 0;
gdjs.Level_321_462Code.GDWhiteFadeOutObjects3.length = 0;
gdjs.Level_321_462Code.GDWhiteFadeOutObjects4.length = 0;
gdjs.Level_321_462Code.GDBlackFadeObjects1.length = 0;
gdjs.Level_321_462Code.GDBlackFadeObjects2.length = 0;
gdjs.Level_321_462Code.GDBlackFadeObjects3.length = 0;
gdjs.Level_321_462Code.GDBlackFadeObjects4.length = 0;
gdjs.Level_321_462Code.GDFlagObjects1.length = 0;
gdjs.Level_321_462Code.GDFlagObjects2.length = 0;
gdjs.Level_321_462Code.GDFlagObjects3.length = 0;
gdjs.Level_321_462Code.GDFlagObjects4.length = 0;
gdjs.Level_321_462Code.GDSpikeObjects1.length = 0;
gdjs.Level_321_462Code.GDSpikeObjects2.length = 0;
gdjs.Level_321_462Code.GDSpikeObjects3.length = 0;
gdjs.Level_321_462Code.GDSpikeObjects4.length = 0;
gdjs.Level_321_462Code.GDWhiteFadeInObjects1.length = 0;
gdjs.Level_321_462Code.GDWhiteFadeInObjects2.length = 0;
gdjs.Level_321_462Code.GDWhiteFadeInObjects3.length = 0;
gdjs.Level_321_462Code.GDWhiteFadeInObjects4.length = 0;
gdjs.Level_321_462Code.GDMenuButtonObjects1.length = 0;
gdjs.Level_321_462Code.GDMenuButtonObjects2.length = 0;
gdjs.Level_321_462Code.GDMenuButtonObjects3.length = 0;
gdjs.Level_321_462Code.GDMenuButtonObjects4.length = 0;
gdjs.Level_321_462Code.GDTrunkObjects1.length = 0;
gdjs.Level_321_462Code.GDTrunkObjects2.length = 0;
gdjs.Level_321_462Code.GDTrunkObjects3.length = 0;
gdjs.Level_321_462Code.GDTrunkObjects4.length = 0;

gdjs.Level_321_462Code.eventsList8(runtimeScene);

return;

}

gdjs['Level_321_462Code'] = gdjs.Level_321_462Code;
