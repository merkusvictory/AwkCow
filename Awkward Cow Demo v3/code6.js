gdjs.Level_323Code = {};
gdjs.Level_323Code.GDAwkCowObjects1= [];
gdjs.Level_323Code.GDAwkCowObjects2= [];
gdjs.Level_323Code.GDAwkCowObjects3= [];
gdjs.Level_323Code.GDAwkCowObjects4= [];
gdjs.Level_323Code.GDTestBlockObjects1= [];
gdjs.Level_323Code.GDTestBlockObjects2= [];
gdjs.Level_323Code.GDTestBlockObjects3= [];
gdjs.Level_323Code.GDTestBlockObjects4= [];
gdjs.Level_323Code.GDTestBlock2Objects1= [];
gdjs.Level_323Code.GDTestBlock2Objects2= [];
gdjs.Level_323Code.GDTestBlock2Objects3= [];
gdjs.Level_323Code.GDTestBlock2Objects4= [];
gdjs.Level_323Code.GDBoxObjects1= [];
gdjs.Level_323Code.GDBoxObjects2= [];
gdjs.Level_323Code.GDBoxObjects3= [];
gdjs.Level_323Code.GDBoxObjects4= [];
gdjs.Level_323Code.GDBlubaObjects1= [];
gdjs.Level_323Code.GDBlubaObjects2= [];
gdjs.Level_323Code.GDBlubaObjects3= [];
gdjs.Level_323Code.GDBlubaObjects4= [];
gdjs.Level_323Code.GDGrassObjects1= [];
gdjs.Level_323Code.GDGrassObjects2= [];
gdjs.Level_323Code.GDGrassObjects3= [];
gdjs.Level_323Code.GDGrassObjects4= [];
gdjs.Level_323Code.GDDirtObjects1= [];
gdjs.Level_323Code.GDDirtObjects2= [];
gdjs.Level_323Code.GDDirtObjects3= [];
gdjs.Level_323Code.GDDirtObjects4= [];
gdjs.Level_323Code.GDDirt_9595JumpthruObjects1= [];
gdjs.Level_323Code.GDDirt_9595JumpthruObjects2= [];
gdjs.Level_323Code.GDDirt_9595JumpthruObjects3= [];
gdjs.Level_323Code.GDDirt_9595JumpthruObjects4= [];
gdjs.Level_323Code.GDLevelBorderObjects1= [];
gdjs.Level_323Code.GDLevelBorderObjects2= [];
gdjs.Level_323Code.GDLevelBorderObjects3= [];
gdjs.Level_323Code.GDLevelBorderObjects4= [];
gdjs.Level_323Code.GDWhiteFadeOutObjects1= [];
gdjs.Level_323Code.GDWhiteFadeOutObjects2= [];
gdjs.Level_323Code.GDWhiteFadeOutObjects3= [];
gdjs.Level_323Code.GDWhiteFadeOutObjects4= [];
gdjs.Level_323Code.GDBlackFadeObjects1= [];
gdjs.Level_323Code.GDBlackFadeObjects2= [];
gdjs.Level_323Code.GDBlackFadeObjects3= [];
gdjs.Level_323Code.GDBlackFadeObjects4= [];
gdjs.Level_323Code.GDFlagObjects1= [];
gdjs.Level_323Code.GDFlagObjects2= [];
gdjs.Level_323Code.GDFlagObjects3= [];
gdjs.Level_323Code.GDFlagObjects4= [];
gdjs.Level_323Code.GDSpikeObjects1= [];
gdjs.Level_323Code.GDSpikeObjects2= [];
gdjs.Level_323Code.GDSpikeObjects3= [];
gdjs.Level_323Code.GDSpikeObjects4= [];
gdjs.Level_323Code.GDWhiteFadeInObjects1= [];
gdjs.Level_323Code.GDWhiteFadeInObjects2= [];
gdjs.Level_323Code.GDWhiteFadeInObjects3= [];
gdjs.Level_323Code.GDWhiteFadeInObjects4= [];
gdjs.Level_323Code.GDMenuButtonObjects1= [];
gdjs.Level_323Code.GDMenuButtonObjects2= [];
gdjs.Level_323Code.GDMenuButtonObjects3= [];
gdjs.Level_323Code.GDMenuButtonObjects4= [];
gdjs.Level_323Code.GDTrunkObjects1= [];
gdjs.Level_323Code.GDTrunkObjects2= [];
gdjs.Level_323Code.GDTrunkObjects3= [];
gdjs.Level_323Code.GDTrunkObjects4= [];


gdjs.Level_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_323Code.GDAwkCowObjects2, gdjs.Level_323Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects3[k] = gdjs.Level_323Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(gdjs.Level_323Code.GDAwkCowObjects2, gdjs.Level_323Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects3[k] = gdjs.Level_323Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.Level_323Code.GDAwkCowObjects2, gdjs.Level_323Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects3[k] = gdjs.Level_323Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects3[k] = gdjs.Level_323Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationSpeedScale(3);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(gdjs.Level_323Code.GDAwkCowObjects2, gdjs.Level_323Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects3[k] = gdjs.Level_323Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.Level_323Code.GDAwkCowObjects2, gdjs.Level_323Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects3[k] = gdjs.Level_323Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(gdjs.Level_323Code.GDAwkCowObjects2, gdjs.Level_323Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects3[k] = gdjs.Level_323Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_323Code.GDFlagObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDFlagObjects3.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDFlagObjects3[i].getVariableBoolean(gdjs.Level_323Code.GDFlagObjects3[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDFlagObjects3[k] = gdjs.Level_323Code.GDFlagObjects3[i];
        ++k;
    }
}
gdjs.Level_323Code.GDFlagObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_323Code.GDAwkCowObjects2, gdjs.Level_323Code.GDAwkCowObjects3);

{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationSpeedScale(1);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].activateBehavior("PlatformerObject", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_323Code.GDAwkCowObjects2, gdjs.Level_323Code.GDAwkCowObjects3);

{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_323Code.GDAwkCowObjects2, gdjs.Level_323Code.GDAwkCowObjects3);

{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.Level_323Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_323Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDAwkCowObjects2[i].getVariableBoolean(gdjs.Level_323Code.GDAwkCowObjects2[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects2[k] = gdjs.Level_323Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDAwkCowObjects2[i].getVariableBoolean(gdjs.Level_323Code.GDAwkCowObjects2[i].getVariables().getFromIndex(2), false) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects2[k] = gdjs.Level_323Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_323Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level_323Code.asyncCallback12929916 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("AwkCow"), gdjs.Level_323Code.GDAwkCowObjects2);

{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Level_323Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level_323Code.GDAwkCowObjects1) asyncObjectsList.addObject("AwkCow", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level_323Code.asyncCallback12929916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_323Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_323Code.GDAwkCowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDAwkCowObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDAwkCowObjects1[i].getVariableBoolean(gdjs.Level_323Code.GDAwkCowObjects1[i].getVariables().getFromIndex(2), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDAwkCowObjects1[k] = gdjs.Level_323Code.GDAwkCowObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDAwkCowObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects1[i].setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects1[i].setColor("255;107;107");
}
}
{ //Subevents
gdjs.Level_323Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Level_323Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_323Code.eventsList1(runtimeScene);
}


{


gdjs.Level_323Code.eventsList3(runtimeScene);
}


};gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDSpikeObjects2Objects = Hashtable.newFrom({"Spike": gdjs.Level_323Code.GDSpikeObjects2});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDAwkCowObjects2Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_323Code.GDAwkCowObjects2});
gdjs.Level_323Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_323Code.GDAwkCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_323Code.GDSpikeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDSpikeObjects2Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDAwkCowObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects2[i].setVariableBoolean(gdjs.Level_323Code.GDAwkCowObjects2[i].getVariables().getFromIndex(2), true);
}
}}

}


};gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDAwkCowObjects3Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_323Code.GDAwkCowObjects3});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLevelBorderObjects3Objects = Hashtable.newFrom({"LevelBorder": gdjs.Level_323Code.GDLevelBorderObjects3});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDAwkCowObjects2Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_323Code.GDAwkCowObjects2});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLevelBorderObjects2Objects = Hashtable.newFrom({"LevelBorder": gdjs.Level_323Code.GDLevelBorderObjects2});
gdjs.Level_323Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_323Code.GDLevelBorderObjects3);
{for(var i = 0, len = gdjs.Level_323Code.GDLevelBorderObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDLevelBorderObjects3[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_323Code.GDAwkCowObjects3);
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_323Code.GDLevelBorderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDAwkCowObjects3Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLevelBorderObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_323Code.GDAwkCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_323Code.GDLevelBorderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDAwkCowObjects2Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDLevelBorderObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}

}


};gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDAwkCowObjects3Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_323Code.GDAwkCowObjects3});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDFlagObjects3Objects = Hashtable.newFrom({"Flag": gdjs.Level_323Code.GDFlagObjects3});
gdjs.Level_323Code.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 3;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


};gdjs.Level_323Code.asyncCallback12935316 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", false);
}
{ //Subevents
gdjs.Level_323Code.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Level_323Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Level_323Code.asyncCallback12935316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_323Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_323Code.GDAwkCowObjects3);
gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_323Code.GDFlagObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDAwkCowObjects3Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDFlagObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDFlagObjects3 */
gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_323Code.GDWhiteFadeOutObjects3);
{for(var i = 0, len = gdjs.Level_323Code.GDFlagObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDFlagObjects3[i].setVariableBoolean(gdjs.Level_323Code.GDFlagObjects3[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDWhiteFadeOutObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDWhiteFadeOutObjects3[i].setVariableBoolean(gdjs.Level_323Code.GDWhiteFadeOutObjects3[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_323Code.GDFlagObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDFlagObjects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDFlagObjects2[i].getVariableBoolean(gdjs.Level_323Code.GDFlagObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDFlagObjects2[k] = gdjs.Level_323Code.GDFlagObjects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDFlagObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDFlagObjects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDFlagObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDFlagObjects2[i].setAnimationName("finished");
}
}
{ //Subevents
gdjs.Level_323Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Level_323Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_323Code.GDAwkCowObjects3);
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setVariableBoolean(gdjs.Level_323Code.GDAwkCowObjects3[i].getVariables().getFromIndex(1), false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects3[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFadeIn"), gdjs.Level_323Code.GDWhiteFadeInObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDWhiteFadeInObjects3.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDWhiteFadeInObjects3[i].getOpacity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDWhiteFadeInObjects3[k] = gdjs.Level_323Code.GDWhiteFadeInObjects3[i];
        ++k;
    }
}
gdjs.Level_323Code.GDWhiteFadeInObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDWhiteFadeInObjects3 */
{for(var i = 0, len = gdjs.Level_323Code.GDWhiteFadeInObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDWhiteFadeInObjects3[i].setOpacity(gdjs.Level_323Code.GDWhiteFadeInObjects3[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 3));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFadeIn"), gdjs.Level_323Code.GDWhiteFadeInObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDWhiteFadeInObjects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDWhiteFadeInObjects2[i].getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDWhiteFadeInObjects2[k] = gdjs.Level_323Code.GDWhiteFadeInObjects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDWhiteFadeInObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12938556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_323Code.GDAwkCowObjects2);
{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects2[i].setVariableBoolean(gdjs.Level_323Code.GDAwkCowObjects2[i].getVariables().getFromIndex(1), true);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDAwkCowObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.Level_323Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12939892);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_323Code.GDWhiteFadeOutObjects3);
{for(var i = 0, len = gdjs.Level_323Code.GDWhiteFadeOutObjects3.length ;i < len;++i) {
    gdjs.Level_323Code.GDWhiteFadeOutObjects3[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_323Code.GDWhiteFadeOutObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDWhiteFadeOutObjects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDWhiteFadeOutObjects2[i].getVariableBoolean(gdjs.Level_323Code.GDWhiteFadeOutObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDWhiteFadeOutObjects2[k] = gdjs.Level_323Code.GDWhiteFadeOutObjects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDWhiteFadeOutObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDWhiteFadeOutObjects2.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDWhiteFadeOutObjects2[i].getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDWhiteFadeOutObjects2[k] = gdjs.Level_323Code.GDWhiteFadeOutObjects2[i];
        ++k;
    }
}
gdjs.Level_323Code.GDWhiteFadeOutObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDWhiteFadeOutObjects2 */
{for(var i = 0, len = gdjs.Level_323Code.GDWhiteFadeOutObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDWhiteFadeOutObjects2[i].setOpacity(gdjs.Level_323Code.GDWhiteFadeOutObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 1));
}
}}

}


};gdjs.Level_323Code.asyncCallback12941868 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), true);
}}
gdjs.Level_323Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Level_323Code.asyncCallback12941868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_323Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12941748);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_323Code.GDWhiteFadeOutObjects2);
{for(var i = 0, len = gdjs.Level_323Code.GDWhiteFadeOutObjects2.length ;i < len;++i) {
    gdjs.Level_323Code.GDWhiteFadeOutObjects2[i].setVariableBoolean(gdjs.Level_323Code.GDWhiteFadeOutObjects2[i].getVariables().getFromIndex(0), true);
}
}
{ //Subevents
gdjs.Level_323Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_323Code.GDWhiteFadeOutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDWhiteFadeOutObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDWhiteFadeOutObjects1[i].getVariableBoolean(gdjs.Level_323Code.GDWhiteFadeOutObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDWhiteFadeOutObjects1[k] = gdjs.Level_323Code.GDWhiteFadeOutObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDWhiteFadeOutObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDWhiteFadeOutObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDWhiteFadeOutObjects1[i].getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDWhiteFadeOutObjects1[k] = gdjs.Level_323Code.GDWhiteFadeOutObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDWhiteFadeOutObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDWhiteFadeOutObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDWhiteFadeOutObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDWhiteFadeOutObjects1[i].setOpacity(gdjs.Level_323Code.GDWhiteFadeOutObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 2.5));
}
}}

}


};gdjs.Level_323Code.eventsList14 = function(runtimeScene) {

{


gdjs.Level_323Code.eventsList5(runtimeScene);
}


{


gdjs.Level_323Code.eventsList6(runtimeScene);
}


{


gdjs.Level_323Code.eventsList9(runtimeScene);
}


{


gdjs.Level_323Code.eventsList10(runtimeScene);
}


{


gdjs.Level_323Code.eventsList11(runtimeScene);
}


{


gdjs.Level_323Code.eventsList13(runtimeScene);
}


};gdjs.Level_323Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Level_323Code.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDMenuButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDMenuButtonObjects1[k] = gdjs.Level_323Code.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.Level_323Code.eventsList16 = function(runtimeScene) {

{


gdjs.Level_323Code.eventsList4(runtimeScene);
}


{


gdjs.Level_323Code.eventsList14(runtimeScene);
}


{


gdjs.Level_323Code.eventsList15(runtimeScene);
}


};

gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_323Code.GDAwkCowObjects1.length = 0;
gdjs.Level_323Code.GDAwkCowObjects2.length = 0;
gdjs.Level_323Code.GDAwkCowObjects3.length = 0;
gdjs.Level_323Code.GDAwkCowObjects4.length = 0;
gdjs.Level_323Code.GDTestBlockObjects1.length = 0;
gdjs.Level_323Code.GDTestBlockObjects2.length = 0;
gdjs.Level_323Code.GDTestBlockObjects3.length = 0;
gdjs.Level_323Code.GDTestBlockObjects4.length = 0;
gdjs.Level_323Code.GDTestBlock2Objects1.length = 0;
gdjs.Level_323Code.GDTestBlock2Objects2.length = 0;
gdjs.Level_323Code.GDTestBlock2Objects3.length = 0;
gdjs.Level_323Code.GDTestBlock2Objects4.length = 0;
gdjs.Level_323Code.GDBoxObjects1.length = 0;
gdjs.Level_323Code.GDBoxObjects2.length = 0;
gdjs.Level_323Code.GDBoxObjects3.length = 0;
gdjs.Level_323Code.GDBoxObjects4.length = 0;
gdjs.Level_323Code.GDBlubaObjects1.length = 0;
gdjs.Level_323Code.GDBlubaObjects2.length = 0;
gdjs.Level_323Code.GDBlubaObjects3.length = 0;
gdjs.Level_323Code.GDBlubaObjects4.length = 0;
gdjs.Level_323Code.GDGrassObjects1.length = 0;
gdjs.Level_323Code.GDGrassObjects2.length = 0;
gdjs.Level_323Code.GDGrassObjects3.length = 0;
gdjs.Level_323Code.GDGrassObjects4.length = 0;
gdjs.Level_323Code.GDDirtObjects1.length = 0;
gdjs.Level_323Code.GDDirtObjects2.length = 0;
gdjs.Level_323Code.GDDirtObjects3.length = 0;
gdjs.Level_323Code.GDDirtObjects4.length = 0;
gdjs.Level_323Code.GDDirt_9595JumpthruObjects1.length = 0;
gdjs.Level_323Code.GDDirt_9595JumpthruObjects2.length = 0;
gdjs.Level_323Code.GDDirt_9595JumpthruObjects3.length = 0;
gdjs.Level_323Code.GDDirt_9595JumpthruObjects4.length = 0;
gdjs.Level_323Code.GDLevelBorderObjects1.length = 0;
gdjs.Level_323Code.GDLevelBorderObjects2.length = 0;
gdjs.Level_323Code.GDLevelBorderObjects3.length = 0;
gdjs.Level_323Code.GDLevelBorderObjects4.length = 0;
gdjs.Level_323Code.GDWhiteFadeOutObjects1.length = 0;
gdjs.Level_323Code.GDWhiteFadeOutObjects2.length = 0;
gdjs.Level_323Code.GDWhiteFadeOutObjects3.length = 0;
gdjs.Level_323Code.GDWhiteFadeOutObjects4.length = 0;
gdjs.Level_323Code.GDBlackFadeObjects1.length = 0;
gdjs.Level_323Code.GDBlackFadeObjects2.length = 0;
gdjs.Level_323Code.GDBlackFadeObjects3.length = 0;
gdjs.Level_323Code.GDBlackFadeObjects4.length = 0;
gdjs.Level_323Code.GDFlagObjects1.length = 0;
gdjs.Level_323Code.GDFlagObjects2.length = 0;
gdjs.Level_323Code.GDFlagObjects3.length = 0;
gdjs.Level_323Code.GDFlagObjects4.length = 0;
gdjs.Level_323Code.GDSpikeObjects1.length = 0;
gdjs.Level_323Code.GDSpikeObjects2.length = 0;
gdjs.Level_323Code.GDSpikeObjects3.length = 0;
gdjs.Level_323Code.GDSpikeObjects4.length = 0;
gdjs.Level_323Code.GDWhiteFadeInObjects1.length = 0;
gdjs.Level_323Code.GDWhiteFadeInObjects2.length = 0;
gdjs.Level_323Code.GDWhiteFadeInObjects3.length = 0;
gdjs.Level_323Code.GDWhiteFadeInObjects4.length = 0;
gdjs.Level_323Code.GDMenuButtonObjects1.length = 0;
gdjs.Level_323Code.GDMenuButtonObjects2.length = 0;
gdjs.Level_323Code.GDMenuButtonObjects3.length = 0;
gdjs.Level_323Code.GDMenuButtonObjects4.length = 0;
gdjs.Level_323Code.GDTrunkObjects1.length = 0;
gdjs.Level_323Code.GDTrunkObjects2.length = 0;
gdjs.Level_323Code.GDTrunkObjects3.length = 0;
gdjs.Level_323Code.GDTrunkObjects4.length = 0;

gdjs.Level_323Code.eventsList16(runtimeScene);

return;

}

gdjs['Level_323Code'] = gdjs.Level_323Code;
