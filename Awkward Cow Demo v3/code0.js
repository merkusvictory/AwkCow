gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDAwkCowObjects1= [];
gdjs.Title_32ScreenCode.GDAwkCowObjects2= [];
gdjs.Title_32ScreenCode.GDAwkCowObjects3= [];
gdjs.Title_32ScreenCode.GDTestBlockObjects1= [];
gdjs.Title_32ScreenCode.GDTestBlockObjects2= [];
gdjs.Title_32ScreenCode.GDTestBlockObjects3= [];
gdjs.Title_32ScreenCode.GDTestBlock2Objects1= [];
gdjs.Title_32ScreenCode.GDTestBlock2Objects2= [];
gdjs.Title_32ScreenCode.GDTestBlock2Objects3= [];
gdjs.Title_32ScreenCode.GDBoxObjects1= [];
gdjs.Title_32ScreenCode.GDBoxObjects2= [];
gdjs.Title_32ScreenCode.GDBoxObjects3= [];
gdjs.Title_32ScreenCode.GDBlubaObjects1= [];
gdjs.Title_32ScreenCode.GDBlubaObjects2= [];
gdjs.Title_32ScreenCode.GDBlubaObjects3= [];
gdjs.Title_32ScreenCode.GDGrassObjects1= [];
gdjs.Title_32ScreenCode.GDGrassObjects2= [];
gdjs.Title_32ScreenCode.GDGrassObjects3= [];
gdjs.Title_32ScreenCode.GDDirtObjects1= [];
gdjs.Title_32ScreenCode.GDDirtObjects2= [];
gdjs.Title_32ScreenCode.GDDirtObjects3= [];
gdjs.Title_32ScreenCode.GDDirt_9595JumpthruObjects1= [];
gdjs.Title_32ScreenCode.GDDirt_9595JumpthruObjects2= [];
gdjs.Title_32ScreenCode.GDDirt_9595JumpthruObjects3= [];
gdjs.Title_32ScreenCode.GDLevelBorderObjects1= [];
gdjs.Title_32ScreenCode.GDLevelBorderObjects2= [];
gdjs.Title_32ScreenCode.GDLevelBorderObjects3= [];
gdjs.Title_32ScreenCode.GDWhiteFadeOutObjects1= [];
gdjs.Title_32ScreenCode.GDWhiteFadeOutObjects2= [];
gdjs.Title_32ScreenCode.GDWhiteFadeOutObjects3= [];
gdjs.Title_32ScreenCode.GDBlackFadeObjects1= [];
gdjs.Title_32ScreenCode.GDBlackFadeObjects2= [];
gdjs.Title_32ScreenCode.GDBlackFadeObjects3= [];
gdjs.Title_32ScreenCode.GDFlagObjects1= [];
gdjs.Title_32ScreenCode.GDFlagObjects2= [];
gdjs.Title_32ScreenCode.GDFlagObjects3= [];
gdjs.Title_32ScreenCode.GDSpikeObjects1= [];
gdjs.Title_32ScreenCode.GDSpikeObjects2= [];
gdjs.Title_32ScreenCode.GDSpikeObjects3= [];
gdjs.Title_32ScreenCode.GDWhiteFadeInObjects1= [];
gdjs.Title_32ScreenCode.GDWhiteFadeInObjects2= [];
gdjs.Title_32ScreenCode.GDWhiteFadeInObjects3= [];
gdjs.Title_32ScreenCode.GDMenuButtonObjects1= [];
gdjs.Title_32ScreenCode.GDMenuButtonObjects2= [];
gdjs.Title_32ScreenCode.GDMenuButtonObjects3= [];
gdjs.Title_32ScreenCode.GDTrunkObjects1= [];
gdjs.Title_32ScreenCode.GDTrunkObjects2= [];
gdjs.Title_32ScreenCode.GDTrunkObjects3= [];
gdjs.Title_32ScreenCode.GDLogoObjects1= [];
gdjs.Title_32ScreenCode.GDLogoObjects2= [];
gdjs.Title_32ScreenCode.GDLogoObjects3= [];
gdjs.Title_32ScreenCode.GDNewTextObjects1= [];
gdjs.Title_32ScreenCode.GDNewTextObjects2= [];
gdjs.Title_32ScreenCode.GDNewTextObjects3= [];
gdjs.Title_32ScreenCode.GDStartButtonObjects1= [];
gdjs.Title_32ScreenCode.GDStartButtonObjects2= [];
gdjs.Title_32ScreenCode.GDStartButtonObjects3= [];
gdjs.Title_32ScreenCode.GDQuitButtonObjects1= [];
gdjs.Title_32ScreenCode.GDQuitButtonObjects2= [];
gdjs.Title_32ScreenCode.GDQuitButtonObjects3= [];


gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Title_32ScreenCode.GDStartButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDStartButtonObjects2.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDStartButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDStartButtonObjects2[k] = gdjs.Title_32ScreenCode.GDStartButtonObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDStartButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.Title_32ScreenCode.GDMenuButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDMenuButtonObjects2[k] = gdjs.Title_32ScreenCode.GDMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDMenuButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.Title_32ScreenCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDQuitButtonObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDQuitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDQuitButtonObjects1[k] = gdjs.Title_32ScreenCode.GDQuitButtonObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDQuitButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Title_32ScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Title_32ScreenCode.GDAwkCowObjects1, gdjs.Title_32ScreenCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( !(gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDAwkCowObjects2[k] = gdjs.Title_32ScreenCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Title_32ScreenCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(gdjs.Title_32ScreenCode.GDAwkCowObjects1, gdjs.Title_32ScreenCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDAwkCowObjects2[k] = gdjs.Title_32ScreenCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Title_32ScreenCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.Title_32ScreenCode.GDAwkCowObjects1, gdjs.Title_32ScreenCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDAwkCowObjects2[k] = gdjs.Title_32ScreenCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDAwkCowObjects2[k] = gdjs.Title_32ScreenCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDAwkCowObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Title_32ScreenCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].setAnimationSpeedScale(3);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(gdjs.Title_32ScreenCode.GDAwkCowObjects1, gdjs.Title_32ScreenCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDAwkCowObjects2[k] = gdjs.Title_32ScreenCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Title_32ScreenCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.Title_32ScreenCode.GDAwkCowObjects1, gdjs.Title_32ScreenCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDAwkCowObjects2[k] = gdjs.Title_32ScreenCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Title_32ScreenCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(gdjs.Title_32ScreenCode.GDAwkCowObjects1, gdjs.Title_32ScreenCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDAwkCowObjects2[k] = gdjs.Title_32ScreenCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Title_32ScreenCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].setAnimationName("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Title_32ScreenCode.GDAwkCowObjects1, gdjs.Title_32ScreenCode.GDAwkCowObjects2);

{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Title_32ScreenCode.GDAwkCowObjects1, gdjs.Title_32ScreenCode.GDAwkCowObjects2);

{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
/* Reuse gdjs.Title_32ScreenCode.GDAwkCowObjects1 */
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.Title_32ScreenCode.eventsList2 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.eventsList1(runtimeScene);
}


};gdjs.Title_32ScreenCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.Title_32ScreenCode.GDAwkCowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32ScreenCode.GDAwkCowObjects1.length;i<l;++i) {
    if ( gdjs.Title_32ScreenCode.GDAwkCowObjects1[i].getVariableBoolean(gdjs.Title_32ScreenCode.GDAwkCowObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32ScreenCode.GDAwkCowObjects1[k] = gdjs.Title_32ScreenCode.GDAwkCowObjects1[i];
        ++k;
    }
}
gdjs.Title_32ScreenCode.GDAwkCowObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Title_32ScreenCode.GDAwkCowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Bluba"), gdjs.Title_32ScreenCode.GDBlubaObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDBlubaObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDAwkCowObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDBlubaObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDBlubaObjects1[i].setAnimationSpeedScale(1);
}
}
{ //Subevents
gdjs.Title_32ScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Title_32ScreenCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Title_32ScreenCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDLogoObjects1[i].setAnimationName("Bounce");
}
}}

}


{


gdjs.Title_32ScreenCode.eventsList0(runtimeScene);
}


{


gdjs.Title_32ScreenCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDAwkCowObjects1.length = 0;
gdjs.Title_32ScreenCode.GDAwkCowObjects2.length = 0;
gdjs.Title_32ScreenCode.GDAwkCowObjects3.length = 0;
gdjs.Title_32ScreenCode.GDTestBlockObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTestBlockObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTestBlockObjects3.length = 0;
gdjs.Title_32ScreenCode.GDTestBlock2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDTestBlock2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDTestBlock2Objects3.length = 0;
gdjs.Title_32ScreenCode.GDBoxObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBoxObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBoxObjects3.length = 0;
gdjs.Title_32ScreenCode.GDBlubaObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBlubaObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBlubaObjects3.length = 0;
gdjs.Title_32ScreenCode.GDGrassObjects1.length = 0;
gdjs.Title_32ScreenCode.GDGrassObjects2.length = 0;
gdjs.Title_32ScreenCode.GDGrassObjects3.length = 0;
gdjs.Title_32ScreenCode.GDDirtObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDirtObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDirtObjects3.length = 0;
gdjs.Title_32ScreenCode.GDDirt_9595JumpthruObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDirt_9595JumpthruObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDirt_9595JumpthruObjects3.length = 0;
gdjs.Title_32ScreenCode.GDLevelBorderObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLevelBorderObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLevelBorderObjects3.length = 0;
gdjs.Title_32ScreenCode.GDWhiteFadeOutObjects1.length = 0;
gdjs.Title_32ScreenCode.GDWhiteFadeOutObjects2.length = 0;
gdjs.Title_32ScreenCode.GDWhiteFadeOutObjects3.length = 0;
gdjs.Title_32ScreenCode.GDBlackFadeObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBlackFadeObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBlackFadeObjects3.length = 0;
gdjs.Title_32ScreenCode.GDFlagObjects1.length = 0;
gdjs.Title_32ScreenCode.GDFlagObjects2.length = 0;
gdjs.Title_32ScreenCode.GDFlagObjects3.length = 0;
gdjs.Title_32ScreenCode.GDSpikeObjects1.length = 0;
gdjs.Title_32ScreenCode.GDSpikeObjects2.length = 0;
gdjs.Title_32ScreenCode.GDSpikeObjects3.length = 0;
gdjs.Title_32ScreenCode.GDWhiteFadeInObjects1.length = 0;
gdjs.Title_32ScreenCode.GDWhiteFadeInObjects2.length = 0;
gdjs.Title_32ScreenCode.GDWhiteFadeInObjects3.length = 0;
gdjs.Title_32ScreenCode.GDMenuButtonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDMenuButtonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDMenuButtonObjects3.length = 0;
gdjs.Title_32ScreenCode.GDTrunkObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTrunkObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTrunkObjects3.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects3.length = 0;
gdjs.Title_32ScreenCode.GDNewTextObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNewTextObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNewTextObjects3.length = 0;
gdjs.Title_32ScreenCode.GDStartButtonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartButtonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartButtonObjects3.length = 0;
gdjs.Title_32ScreenCode.GDQuitButtonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDQuitButtonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDQuitButtonObjects3.length = 0;

gdjs.Title_32ScreenCode.eventsList4(runtimeScene);

return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
