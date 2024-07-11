gdjs.Level_324Code = {};
gdjs.Level_324Code.GDAwkCowObjects1= [];
gdjs.Level_324Code.GDAwkCowObjects2= [];
gdjs.Level_324Code.GDAwkCowObjects3= [];
gdjs.Level_324Code.GDAwkCowObjects4= [];
gdjs.Level_324Code.GDAwkCowObjects5= [];
gdjs.Level_324Code.GDTestBlockObjects1= [];
gdjs.Level_324Code.GDTestBlockObjects2= [];
gdjs.Level_324Code.GDTestBlockObjects3= [];
gdjs.Level_324Code.GDTestBlockObjects4= [];
gdjs.Level_324Code.GDTestBlockObjects5= [];
gdjs.Level_324Code.GDTestBlock2Objects1= [];
gdjs.Level_324Code.GDTestBlock2Objects2= [];
gdjs.Level_324Code.GDTestBlock2Objects3= [];
gdjs.Level_324Code.GDTestBlock2Objects4= [];
gdjs.Level_324Code.GDTestBlock2Objects5= [];
gdjs.Level_324Code.GDBoxObjects1= [];
gdjs.Level_324Code.GDBoxObjects2= [];
gdjs.Level_324Code.GDBoxObjects3= [];
gdjs.Level_324Code.GDBoxObjects4= [];
gdjs.Level_324Code.GDBoxObjects5= [];
gdjs.Level_324Code.GDBlubaObjects1= [];
gdjs.Level_324Code.GDBlubaObjects2= [];
gdjs.Level_324Code.GDBlubaObjects3= [];
gdjs.Level_324Code.GDBlubaObjects4= [];
gdjs.Level_324Code.GDBlubaObjects5= [];
gdjs.Level_324Code.GDGrassObjects1= [];
gdjs.Level_324Code.GDGrassObjects2= [];
gdjs.Level_324Code.GDGrassObjects3= [];
gdjs.Level_324Code.GDGrassObjects4= [];
gdjs.Level_324Code.GDGrassObjects5= [];
gdjs.Level_324Code.GDDirtObjects1= [];
gdjs.Level_324Code.GDDirtObjects2= [];
gdjs.Level_324Code.GDDirtObjects3= [];
gdjs.Level_324Code.GDDirtObjects4= [];
gdjs.Level_324Code.GDDirtObjects5= [];
gdjs.Level_324Code.GDDirt_9595JumpthruObjects1= [];
gdjs.Level_324Code.GDDirt_9595JumpthruObjects2= [];
gdjs.Level_324Code.GDDirt_9595JumpthruObjects3= [];
gdjs.Level_324Code.GDDirt_9595JumpthruObjects4= [];
gdjs.Level_324Code.GDDirt_9595JumpthruObjects5= [];
gdjs.Level_324Code.GDLevelBorderObjects1= [];
gdjs.Level_324Code.GDLevelBorderObjects2= [];
gdjs.Level_324Code.GDLevelBorderObjects3= [];
gdjs.Level_324Code.GDLevelBorderObjects4= [];
gdjs.Level_324Code.GDLevelBorderObjects5= [];
gdjs.Level_324Code.GDWhiteFadeOutObjects1= [];
gdjs.Level_324Code.GDWhiteFadeOutObjects2= [];
gdjs.Level_324Code.GDWhiteFadeOutObjects3= [];
gdjs.Level_324Code.GDWhiteFadeOutObjects4= [];
gdjs.Level_324Code.GDWhiteFadeOutObjects5= [];
gdjs.Level_324Code.GDBlackFadeObjects1= [];
gdjs.Level_324Code.GDBlackFadeObjects2= [];
gdjs.Level_324Code.GDBlackFadeObjects3= [];
gdjs.Level_324Code.GDBlackFadeObjects4= [];
gdjs.Level_324Code.GDBlackFadeObjects5= [];
gdjs.Level_324Code.GDFlagObjects1= [];
gdjs.Level_324Code.GDFlagObjects2= [];
gdjs.Level_324Code.GDFlagObjects3= [];
gdjs.Level_324Code.GDFlagObjects4= [];
gdjs.Level_324Code.GDFlagObjects5= [];
gdjs.Level_324Code.GDSpikeObjects1= [];
gdjs.Level_324Code.GDSpikeObjects2= [];
gdjs.Level_324Code.GDSpikeObjects3= [];
gdjs.Level_324Code.GDSpikeObjects4= [];
gdjs.Level_324Code.GDSpikeObjects5= [];
gdjs.Level_324Code.GDWhiteFadeInObjects1= [];
gdjs.Level_324Code.GDWhiteFadeInObjects2= [];
gdjs.Level_324Code.GDWhiteFadeInObjects3= [];
gdjs.Level_324Code.GDWhiteFadeInObjects4= [];
gdjs.Level_324Code.GDWhiteFadeInObjects5= [];
gdjs.Level_324Code.GDMenuButtonObjects1= [];
gdjs.Level_324Code.GDMenuButtonObjects2= [];
gdjs.Level_324Code.GDMenuButtonObjects3= [];
gdjs.Level_324Code.GDMenuButtonObjects4= [];
gdjs.Level_324Code.GDMenuButtonObjects5= [];
gdjs.Level_324Code.GDTrunkObjects1= [];
gdjs.Level_324Code.GDTrunkObjects2= [];
gdjs.Level_324Code.GDTrunkObjects3= [];
gdjs.Level_324Code.GDTrunkObjects4= [];
gdjs.Level_324Code.GDTrunkObjects5= [];
gdjs.Level_324Code.GDRaccoon1Objects1= [];
gdjs.Level_324Code.GDRaccoon1Objects2= [];
gdjs.Level_324Code.GDRaccoon1Objects3= [];
gdjs.Level_324Code.GDRaccoon1Objects4= [];
gdjs.Level_324Code.GDRaccoon1Objects5= [];
gdjs.Level_324Code.GDRaccoon2Objects1= [];
gdjs.Level_324Code.GDRaccoon2Objects2= [];
gdjs.Level_324Code.GDRaccoon2Objects3= [];
gdjs.Level_324Code.GDRaccoon2Objects4= [];
gdjs.Level_324Code.GDRaccoon2Objects5= [];
gdjs.Level_324Code.GDRaccoonKingObjects1= [];
gdjs.Level_324Code.GDRaccoonKingObjects2= [];
gdjs.Level_324Code.GDRaccoonKingObjects3= [];
gdjs.Level_324Code.GDRaccoonKingObjects4= [];
gdjs.Level_324Code.GDRaccoonKingObjects5= [];


gdjs.Level_324Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_324Code.GDAwkCowObjects2, gdjs.Level_324Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects3[k] = gdjs.Level_324Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(gdjs.Level_324Code.GDAwkCowObjects2, gdjs.Level_324Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects3[k] = gdjs.Level_324Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.Level_324Code.GDAwkCowObjects2, gdjs.Level_324Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects3[k] = gdjs.Level_324Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects3[k] = gdjs.Level_324Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationSpeedScale(3);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(gdjs.Level_324Code.GDAwkCowObjects2, gdjs.Level_324Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects3[k] = gdjs.Level_324Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.Level_324Code.GDAwkCowObjects2, gdjs.Level_324Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects3[k] = gdjs.Level_324Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].flipX(true);
}
}}

}


{

gdjs.copyArray(gdjs.Level_324Code.GDAwkCowObjects2, gdjs.Level_324Code.GDAwkCowObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects3[k] = gdjs.Level_324Code.GDAwkCowObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_324Code.GDFlagObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDFlagObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDFlagObjects3[i].getVariableBoolean(gdjs.Level_324Code.GDFlagObjects3[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDFlagObjects3[k] = gdjs.Level_324Code.GDFlagObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDFlagObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_324Code.GDAwkCowObjects2, gdjs.Level_324Code.GDAwkCowObjects3);

{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationSpeedScale(1);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].activateBehavior("PlatformerObject", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_324Code.GDAwkCowObjects2, gdjs.Level_324Code.GDAwkCowObjects3);

{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Level_324Code.GDAwkCowObjects2, gdjs.Level_324Code.GDAwkCowObjects3);

{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.Level_324Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects2[i].getVariableBoolean(gdjs.Level_324Code.GDAwkCowObjects2[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects2[k] = gdjs.Level_324Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects2[i].getVariableBoolean(gdjs.Level_324Code.GDAwkCowObjects2[i].getVariables().getFromIndex(2), false) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects2[k] = gdjs.Level_324Code.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_324Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level_324Code.asyncCallback12973116 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects2);

{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.Level_324Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level_324Code.GDAwkCowObjects1) asyncObjectsList.addObject("AwkCow", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level_324Code.asyncCallback12973116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_324Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects1[i].getVariableBoolean(gdjs.Level_324Code.GDAwkCowObjects1[i].getVariables().getFromIndex(2), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects1[k] = gdjs.Level_324Code.GDAwkCowObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects1[i].setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects1[i].setColor("255;107;107");
}
}
{ //Subevents
gdjs.Level_324Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Level_324Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_324Code.eventsList1(runtimeScene);
}


{


gdjs.Level_324Code.eventsList3(runtimeScene);
}


};gdjs.Level_324Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_324Code.GDRaccoon1Objects3, gdjs.Level_324Code.GDRaccoon1Objects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDRaccoon1Objects4.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDRaccoon1Objects4[i].getX() == 718 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDRaccoon1Objects4[k] = gdjs.Level_324Code.GDRaccoon1Objects4[i];
        ++k;
    }
}
gdjs.Level_324Code.GDRaccoon1Objects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDRaccoon1Objects4 */
{for(var i = 0, len = gdjs.Level_324Code.GDRaccoon1Objects4.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoon1Objects4[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDRaccoon1Objects4.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoon1Objects4[i].getBehavior("Pathfinding").moveTo(runtimeScene, 166, (gdjs.Level_324Code.GDRaccoon1Objects4[i].getPointY("")));
}
}}

}


{

/* Reuse gdjs.Level_324Code.GDRaccoon1Objects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDRaccoon1Objects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDRaccoon1Objects3[i].getX() == 166 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDRaccoon1Objects3[k] = gdjs.Level_324Code.GDRaccoon1Objects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDRaccoon1Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDRaccoon1Objects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDRaccoon1Objects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoon1Objects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDRaccoon1Objects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoon1Objects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, 718, (gdjs.Level_324Code.GDRaccoon1Objects3[i].getPointY("")));
}
}}

}


};gdjs.Level_324Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Raccoon1"), gdjs.Level_324Code.GDRaccoon1Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDRaccoon1Objects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDRaccoon1Objects3[i].getVariableBoolean(gdjs.Level_324Code.GDRaccoon1Objects3[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDRaccoon1Objects3[k] = gdjs.Level_324Code.GDRaccoon1Objects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDRaccoon1Objects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_324Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDRaccoon1Objects3Objects = Hashtable.newFrom({"Raccoon1": gdjs.Level_324Code.GDRaccoon1Objects3});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects3Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_324Code.GDAwkCowObjects3});
gdjs.Level_324Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects3);
gdjs.copyArray(runtimeScene.getObjects("Raccoon1"), gdjs.Level_324Code.GDRaccoon1Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDRaccoon1Objects3Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setVariableBoolean(gdjs.Level_324Code.GDAwkCowObjects3[i].getVariables().getFromIndex(2), true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Level_324Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level_324Code.eventsList6(runtimeScene);
}


{


gdjs.Level_324Code.eventsList7(runtimeScene);
}


};gdjs.Level_324Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_324Code.GDRaccoon2Objects3, gdjs.Level_324Code.GDRaccoon2Objects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDRaccoon2Objects4.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDRaccoon2Objects4[i].getX() == 718 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDRaccoon2Objects4[k] = gdjs.Level_324Code.GDRaccoon2Objects4[i];
        ++k;
    }
}
gdjs.Level_324Code.GDRaccoon2Objects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDRaccoon2Objects4 */
{for(var i = 0, len = gdjs.Level_324Code.GDRaccoon2Objects4.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoon2Objects4[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDRaccoon2Objects4.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoon2Objects4[i].getBehavior("Pathfinding").moveTo(runtimeScene, 95, (gdjs.Level_324Code.GDRaccoon2Objects4[i].getPointY("")));
}
}}

}


{

/* Reuse gdjs.Level_324Code.GDRaccoon2Objects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDRaccoon2Objects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDRaccoon2Objects3[i].getX() == 95 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDRaccoon2Objects3[k] = gdjs.Level_324Code.GDRaccoon2Objects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDRaccoon2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDRaccoon2Objects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDRaccoon2Objects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoon2Objects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDRaccoon2Objects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoon2Objects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, 718, (gdjs.Level_324Code.GDRaccoon2Objects3[i].getPointY("")));
}
}}

}


};gdjs.Level_324Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Raccoon2"), gdjs.Level_324Code.GDRaccoon2Objects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDRaccoon2Objects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDRaccoon2Objects3[i].getVariableBoolean(gdjs.Level_324Code.GDRaccoon2Objects3[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDRaccoon2Objects3[k] = gdjs.Level_324Code.GDRaccoon2Objects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDRaccoon2Objects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDRaccoon2Objects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDRaccoon2Objects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoon2Objects3[i].setAnimationSpeedScale(2);
}
}
{ //Subevents
gdjs.Level_324Code.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDRaccoon2Objects2Objects = Hashtable.newFrom({"Raccoon2": gdjs.Level_324Code.GDRaccoon2Objects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects2Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_324Code.GDAwkCowObjects2});
gdjs.Level_324Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("Raccoon2"), gdjs.Level_324Code.GDRaccoon2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDRaccoon2Objects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects2[i].setVariableBoolean(gdjs.Level_324Code.GDAwkCowObjects2[i].getVariables().getFromIndex(2), true);
}
}}

}


};gdjs.Level_324Code.eventsList12 = function(runtimeScene) {

{


gdjs.Level_324Code.eventsList10(runtimeScene);
}


{


gdjs.Level_324Code.eventsList11(runtimeScene);
}


};gdjs.Level_324Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_324Code.GDRaccoonKingObjects3, gdjs.Level_324Code.GDRaccoonKingObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDRaccoonKingObjects4.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDRaccoonKingObjects4[i].getX() == 535 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDRaccoonKingObjects4[k] = gdjs.Level_324Code.GDRaccoonKingObjects4[i];
        ++k;
    }
}
gdjs.Level_324Code.GDRaccoonKingObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDRaccoonKingObjects4 */
{for(var i = 0, len = gdjs.Level_324Code.GDRaccoonKingObjects4.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoonKingObjects4[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDRaccoonKingObjects4.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoonKingObjects4[i].getBehavior("Pathfinding").moveTo(runtimeScene, 140, (gdjs.Level_324Code.GDRaccoonKingObjects4[i].getPointY("")));
}
}}

}


{

/* Reuse gdjs.Level_324Code.GDRaccoonKingObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDRaccoonKingObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDRaccoonKingObjects3[i].getX() == 140 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDRaccoonKingObjects3[k] = gdjs.Level_324Code.GDRaccoonKingObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDRaccoonKingObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDRaccoonKingObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDRaccoonKingObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoonKingObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDRaccoonKingObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoonKingObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, 535, (gdjs.Level_324Code.GDRaccoonKingObjects3[i].getPointY("")));
}
}}

}


};gdjs.Level_324Code.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDAwkCowObjects4.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDAwkCowObjects4[i].getY() <= 317 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDAwkCowObjects4[k] = gdjs.Level_324Code.GDAwkCowObjects4[i];
        ++k;
    }
}
gdjs.Level_324Code.GDAwkCowObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12981668);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RaccoonKing"), gdjs.Level_324Code.GDRaccoonKingObjects4);
{for(var i = 0, len = gdjs.Level_324Code.GDRaccoonKingObjects4.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoonKingObjects4[i].setVariableBoolean(gdjs.Level_324Code.GDRaccoonKingObjects4[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RaccoonKing"), gdjs.Level_324Code.GDRaccoonKingObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDRaccoonKingObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDRaccoonKingObjects3[i].getVariableBoolean(gdjs.Level_324Code.GDRaccoonKingObjects3[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDRaccoonKingObjects3[k] = gdjs.Level_324Code.GDRaccoonKingObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDRaccoonKingObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDRaccoonKingObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDRaccoonKingObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDRaccoonKingObjects3[i].setAnimationSpeedScale(2);
}
}
{ //Subevents
gdjs.Level_324Code.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDRaccoonKingObjects2Objects = Hashtable.newFrom({"RaccoonKing": gdjs.Level_324Code.GDRaccoonKingObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects2Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_324Code.GDAwkCowObjects2});
gdjs.Level_324Code.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("RaccoonKing"), gdjs.Level_324Code.GDRaccoonKingObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDRaccoonKingObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects2[i].setVariableBoolean(gdjs.Level_324Code.GDAwkCowObjects2[i].getVariables().getFromIndex(2), true);
}
}}

}


};gdjs.Level_324Code.eventsList16 = function(runtimeScene) {

{


gdjs.Level_324Code.eventsList14(runtimeScene);
}


{


gdjs.Level_324Code.eventsList15(runtimeScene);
}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSpikeObjects2Objects = Hashtable.newFrom({"Spike": gdjs.Level_324Code.GDSpikeObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects2Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_324Code.GDAwkCowObjects2});
gdjs.Level_324Code.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_324Code.GDSpikeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDSpikeObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects2[i].setVariableBoolean(gdjs.Level_324Code.GDAwkCowObjects2[i].getVariables().getFromIndex(2), true);
}
}}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects3Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_324Code.GDAwkCowObjects3});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDLevelBorderObjects3Objects = Hashtable.newFrom({"LevelBorder": gdjs.Level_324Code.GDLevelBorderObjects3});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects2Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_324Code.GDAwkCowObjects2});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDLevelBorderObjects2Objects = Hashtable.newFrom({"LevelBorder": gdjs.Level_324Code.GDLevelBorderObjects2});
gdjs.Level_324Code.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_324Code.GDLevelBorderObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDLevelBorderObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDLevelBorderObjects3[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects3);
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_324Code.GDLevelBorderObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects3Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDLevelBorderObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects2);
gdjs.copyArray(runtimeScene.getObjects("LevelBorder"), gdjs.Level_324Code.GDLevelBorderObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects2Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDLevelBorderObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}}

}


};gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects3Objects = Hashtable.newFrom({"AwkCow": gdjs.Level_324Code.GDAwkCowObjects3});
gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDFlagObjects3Objects = Hashtable.newFrom({"Flag": gdjs.Level_324Code.GDFlagObjects3});
gdjs.Level_324Code.eventsList19 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 4;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}}

}


};gdjs.Level_324Code.asyncCallback12990644 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Test", false);
}
{ //Subevents
gdjs.Level_324Code.eventsList19(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Level_324Code.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Level_324Code.asyncCallback12990644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_324Code.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects3);
gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_324Code.GDFlagObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDAwkCowObjects3Objects, gdjs.Level_324Code.mapOfGDgdjs_9546Level_9595324Code_9546GDFlagObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDFlagObjects3 */
gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_324Code.GDWhiteFadeOutObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDFlagObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDFlagObjects3[i].setVariableBoolean(gdjs.Level_324Code.GDFlagObjects3[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDWhiteFadeOutObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDWhiteFadeOutObjects3[i].setVariableBoolean(gdjs.Level_324Code.GDWhiteFadeOutObjects3[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.Level_324Code.GDFlagObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDFlagObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDFlagObjects2[i].getVariableBoolean(gdjs.Level_324Code.GDFlagObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDFlagObjects2[k] = gdjs.Level_324Code.GDFlagObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDFlagObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDFlagObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDFlagObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDFlagObjects2[i].setAnimationName("finished");
}
}
{ //Subevents
gdjs.Level_324Code.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.Level_324Code.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setVariableBoolean(gdjs.Level_324Code.GDAwkCowObjects3[i].getVariables().getFromIndex(1), false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects3[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFadeIn"), gdjs.Level_324Code.GDWhiteFadeInObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDWhiteFadeInObjects3.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDWhiteFadeInObjects3[i].getOpacity() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDWhiteFadeInObjects3[k] = gdjs.Level_324Code.GDWhiteFadeInObjects3[i];
        ++k;
    }
}
gdjs.Level_324Code.GDWhiteFadeInObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDWhiteFadeInObjects3 */
{for(var i = 0, len = gdjs.Level_324Code.GDWhiteFadeInObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDWhiteFadeInObjects3[i].setOpacity(gdjs.Level_324Code.GDWhiteFadeInObjects3[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 3));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFadeIn"), gdjs.Level_324Code.GDWhiteFadeInObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDWhiteFadeInObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDWhiteFadeInObjects2[i].getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDWhiteFadeInObjects2[k] = gdjs.Level_324Code.GDWhiteFadeInObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDWhiteFadeInObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12993932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Level_324Code.GDAwkCowObjects2);
{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects2[i].setVariableBoolean(gdjs.Level_324Code.GDAwkCowObjects2[i].getVariables().getFromIndex(1), true);
}
}{for(var i = 0, len = gdjs.Level_324Code.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDAwkCowObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.Level_324Code.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12995268);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_324Code.GDWhiteFadeOutObjects3);
{for(var i = 0, len = gdjs.Level_324Code.GDWhiteFadeOutObjects3.length ;i < len;++i) {
    gdjs.Level_324Code.GDWhiteFadeOutObjects3[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_324Code.GDWhiteFadeOutObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDWhiteFadeOutObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDWhiteFadeOutObjects2[i].getVariableBoolean(gdjs.Level_324Code.GDWhiteFadeOutObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDWhiteFadeOutObjects2[k] = gdjs.Level_324Code.GDWhiteFadeOutObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDWhiteFadeOutObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDWhiteFadeOutObjects2.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDWhiteFadeOutObjects2[i].getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDWhiteFadeOutObjects2[k] = gdjs.Level_324Code.GDWhiteFadeOutObjects2[i];
        ++k;
    }
}
gdjs.Level_324Code.GDWhiteFadeOutObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDWhiteFadeOutObjects2 */
{for(var i = 0, len = gdjs.Level_324Code.GDWhiteFadeOutObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDWhiteFadeOutObjects2[i].setOpacity(gdjs.Level_324Code.GDWhiteFadeOutObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 1));
}
}}

}


};gdjs.Level_324Code.asyncCallback12997212 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), true);
}}
gdjs.Level_324Code.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Level_324Code.asyncCallback12997212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_324Code.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12997092);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_324Code.GDWhiteFadeOutObjects2);
{for(var i = 0, len = gdjs.Level_324Code.GDWhiteFadeOutObjects2.length ;i < len;++i) {
    gdjs.Level_324Code.GDWhiteFadeOutObjects2[i].setVariableBoolean(gdjs.Level_324Code.GDWhiteFadeOutObjects2[i].getVariables().getFromIndex(0), true);
}
}
{ //Subevents
gdjs.Level_324Code.eventsList24(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteFadeOut"), gdjs.Level_324Code.GDWhiteFadeOutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDWhiteFadeOutObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDWhiteFadeOutObjects1[i].getVariableBoolean(gdjs.Level_324Code.GDWhiteFadeOutObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDWhiteFadeOutObjects1[k] = gdjs.Level_324Code.GDWhiteFadeOutObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDWhiteFadeOutObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDWhiteFadeOutObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDWhiteFadeOutObjects1[i].getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDWhiteFadeOutObjects1[k] = gdjs.Level_324Code.GDWhiteFadeOutObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDWhiteFadeOutObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_324Code.GDWhiteFadeOutObjects1 */
{for(var i = 0, len = gdjs.Level_324Code.GDWhiteFadeOutObjects1.length ;i < len;++i) {
    gdjs.Level_324Code.GDWhiteFadeOutObjects1[i].setOpacity(gdjs.Level_324Code.GDWhiteFadeOutObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 2.5));
}
}}

}


};gdjs.Level_324Code.eventsList26 = function(runtimeScene) {

{


gdjs.Level_324Code.eventsList8(runtimeScene);
}


{


gdjs.Level_324Code.eventsList12(runtimeScene);
}


{


gdjs.Level_324Code.eventsList16(runtimeScene);
}


{


gdjs.Level_324Code.eventsList17(runtimeScene);
}


{


gdjs.Level_324Code.eventsList18(runtimeScene);
}


{


gdjs.Level_324Code.eventsList21(runtimeScene);
}


{


gdjs.Level_324Code.eventsList22(runtimeScene);
}


{


gdjs.Level_324Code.eventsList23(runtimeScene);
}


{


gdjs.Level_324Code.eventsList25(runtimeScene);
}


};gdjs.Level_324Code.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Level_324Code.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_324Code.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.Level_324Code.GDMenuButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_324Code.GDMenuButtonObjects1[k] = gdjs.Level_324Code.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.Level_324Code.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.Level_324Code.eventsList28 = function(runtimeScene) {

{


gdjs.Level_324Code.eventsList4(runtimeScene);
}


{


gdjs.Level_324Code.eventsList26(runtimeScene);
}


{


gdjs.Level_324Code.eventsList27(runtimeScene);
}


};

gdjs.Level_324Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_324Code.GDAwkCowObjects1.length = 0;
gdjs.Level_324Code.GDAwkCowObjects2.length = 0;
gdjs.Level_324Code.GDAwkCowObjects3.length = 0;
gdjs.Level_324Code.GDAwkCowObjects4.length = 0;
gdjs.Level_324Code.GDAwkCowObjects5.length = 0;
gdjs.Level_324Code.GDTestBlockObjects1.length = 0;
gdjs.Level_324Code.GDTestBlockObjects2.length = 0;
gdjs.Level_324Code.GDTestBlockObjects3.length = 0;
gdjs.Level_324Code.GDTestBlockObjects4.length = 0;
gdjs.Level_324Code.GDTestBlockObjects5.length = 0;
gdjs.Level_324Code.GDTestBlock2Objects1.length = 0;
gdjs.Level_324Code.GDTestBlock2Objects2.length = 0;
gdjs.Level_324Code.GDTestBlock2Objects3.length = 0;
gdjs.Level_324Code.GDTestBlock2Objects4.length = 0;
gdjs.Level_324Code.GDTestBlock2Objects5.length = 0;
gdjs.Level_324Code.GDBoxObjects1.length = 0;
gdjs.Level_324Code.GDBoxObjects2.length = 0;
gdjs.Level_324Code.GDBoxObjects3.length = 0;
gdjs.Level_324Code.GDBoxObjects4.length = 0;
gdjs.Level_324Code.GDBoxObjects5.length = 0;
gdjs.Level_324Code.GDBlubaObjects1.length = 0;
gdjs.Level_324Code.GDBlubaObjects2.length = 0;
gdjs.Level_324Code.GDBlubaObjects3.length = 0;
gdjs.Level_324Code.GDBlubaObjects4.length = 0;
gdjs.Level_324Code.GDBlubaObjects5.length = 0;
gdjs.Level_324Code.GDGrassObjects1.length = 0;
gdjs.Level_324Code.GDGrassObjects2.length = 0;
gdjs.Level_324Code.GDGrassObjects3.length = 0;
gdjs.Level_324Code.GDGrassObjects4.length = 0;
gdjs.Level_324Code.GDGrassObjects5.length = 0;
gdjs.Level_324Code.GDDirtObjects1.length = 0;
gdjs.Level_324Code.GDDirtObjects2.length = 0;
gdjs.Level_324Code.GDDirtObjects3.length = 0;
gdjs.Level_324Code.GDDirtObjects4.length = 0;
gdjs.Level_324Code.GDDirtObjects5.length = 0;
gdjs.Level_324Code.GDDirt_9595JumpthruObjects1.length = 0;
gdjs.Level_324Code.GDDirt_9595JumpthruObjects2.length = 0;
gdjs.Level_324Code.GDDirt_9595JumpthruObjects3.length = 0;
gdjs.Level_324Code.GDDirt_9595JumpthruObjects4.length = 0;
gdjs.Level_324Code.GDDirt_9595JumpthruObjects5.length = 0;
gdjs.Level_324Code.GDLevelBorderObjects1.length = 0;
gdjs.Level_324Code.GDLevelBorderObjects2.length = 0;
gdjs.Level_324Code.GDLevelBorderObjects3.length = 0;
gdjs.Level_324Code.GDLevelBorderObjects4.length = 0;
gdjs.Level_324Code.GDLevelBorderObjects5.length = 0;
gdjs.Level_324Code.GDWhiteFadeOutObjects1.length = 0;
gdjs.Level_324Code.GDWhiteFadeOutObjects2.length = 0;
gdjs.Level_324Code.GDWhiteFadeOutObjects3.length = 0;
gdjs.Level_324Code.GDWhiteFadeOutObjects4.length = 0;
gdjs.Level_324Code.GDWhiteFadeOutObjects5.length = 0;
gdjs.Level_324Code.GDBlackFadeObjects1.length = 0;
gdjs.Level_324Code.GDBlackFadeObjects2.length = 0;
gdjs.Level_324Code.GDBlackFadeObjects3.length = 0;
gdjs.Level_324Code.GDBlackFadeObjects4.length = 0;
gdjs.Level_324Code.GDBlackFadeObjects5.length = 0;
gdjs.Level_324Code.GDFlagObjects1.length = 0;
gdjs.Level_324Code.GDFlagObjects2.length = 0;
gdjs.Level_324Code.GDFlagObjects3.length = 0;
gdjs.Level_324Code.GDFlagObjects4.length = 0;
gdjs.Level_324Code.GDFlagObjects5.length = 0;
gdjs.Level_324Code.GDSpikeObjects1.length = 0;
gdjs.Level_324Code.GDSpikeObjects2.length = 0;
gdjs.Level_324Code.GDSpikeObjects3.length = 0;
gdjs.Level_324Code.GDSpikeObjects4.length = 0;
gdjs.Level_324Code.GDSpikeObjects5.length = 0;
gdjs.Level_324Code.GDWhiteFadeInObjects1.length = 0;
gdjs.Level_324Code.GDWhiteFadeInObjects2.length = 0;
gdjs.Level_324Code.GDWhiteFadeInObjects3.length = 0;
gdjs.Level_324Code.GDWhiteFadeInObjects4.length = 0;
gdjs.Level_324Code.GDWhiteFadeInObjects5.length = 0;
gdjs.Level_324Code.GDMenuButtonObjects1.length = 0;
gdjs.Level_324Code.GDMenuButtonObjects2.length = 0;
gdjs.Level_324Code.GDMenuButtonObjects3.length = 0;
gdjs.Level_324Code.GDMenuButtonObjects4.length = 0;
gdjs.Level_324Code.GDMenuButtonObjects5.length = 0;
gdjs.Level_324Code.GDTrunkObjects1.length = 0;
gdjs.Level_324Code.GDTrunkObjects2.length = 0;
gdjs.Level_324Code.GDTrunkObjects3.length = 0;
gdjs.Level_324Code.GDTrunkObjects4.length = 0;
gdjs.Level_324Code.GDTrunkObjects5.length = 0;
gdjs.Level_324Code.GDRaccoon1Objects1.length = 0;
gdjs.Level_324Code.GDRaccoon1Objects2.length = 0;
gdjs.Level_324Code.GDRaccoon1Objects3.length = 0;
gdjs.Level_324Code.GDRaccoon1Objects4.length = 0;
gdjs.Level_324Code.GDRaccoon1Objects5.length = 0;
gdjs.Level_324Code.GDRaccoon2Objects1.length = 0;
gdjs.Level_324Code.GDRaccoon2Objects2.length = 0;
gdjs.Level_324Code.GDRaccoon2Objects3.length = 0;
gdjs.Level_324Code.GDRaccoon2Objects4.length = 0;
gdjs.Level_324Code.GDRaccoon2Objects5.length = 0;
gdjs.Level_324Code.GDRaccoonKingObjects1.length = 0;
gdjs.Level_324Code.GDRaccoonKingObjects2.length = 0;
gdjs.Level_324Code.GDRaccoonKingObjects3.length = 0;
gdjs.Level_324Code.GDRaccoonKingObjects4.length = 0;
gdjs.Level_324Code.GDRaccoonKingObjects5.length = 0;

gdjs.Level_324Code.eventsList28(runtimeScene);

return;

}

gdjs['Level_324Code'] = gdjs.Level_324Code;
