gdjs.MenuCode = {};
gdjs.MenuCode.GDAwkCowObjects1= [];
gdjs.MenuCode.GDAwkCowObjects2= [];
gdjs.MenuCode.GDAwkCowObjects3= [];
gdjs.MenuCode.GDTestBlockObjects1= [];
gdjs.MenuCode.GDTestBlockObjects2= [];
gdjs.MenuCode.GDTestBlockObjects3= [];
gdjs.MenuCode.GDTestBlock2Objects1= [];
gdjs.MenuCode.GDTestBlock2Objects2= [];
gdjs.MenuCode.GDTestBlock2Objects3= [];
gdjs.MenuCode.GDBoxObjects1= [];
gdjs.MenuCode.GDBoxObjects2= [];
gdjs.MenuCode.GDBoxObjects3= [];
gdjs.MenuCode.GDBlubaObjects1= [];
gdjs.MenuCode.GDBlubaObjects2= [];
gdjs.MenuCode.GDBlubaObjects3= [];
gdjs.MenuCode.GDGrassObjects1= [];
gdjs.MenuCode.GDGrassObjects2= [];
gdjs.MenuCode.GDGrassObjects3= [];
gdjs.MenuCode.GDDirtObjects1= [];
gdjs.MenuCode.GDDirtObjects2= [];
gdjs.MenuCode.GDDirtObjects3= [];
gdjs.MenuCode.GDDirt_9595JumpthruObjects1= [];
gdjs.MenuCode.GDDirt_9595JumpthruObjects2= [];
gdjs.MenuCode.GDDirt_9595JumpthruObjects3= [];
gdjs.MenuCode.GDLevelBorderObjects1= [];
gdjs.MenuCode.GDLevelBorderObjects2= [];
gdjs.MenuCode.GDLevelBorderObjects3= [];
gdjs.MenuCode.GDWhiteFadeOutObjects1= [];
gdjs.MenuCode.GDWhiteFadeOutObjects2= [];
gdjs.MenuCode.GDWhiteFadeOutObjects3= [];
gdjs.MenuCode.GDBlackFadeObjects1= [];
gdjs.MenuCode.GDBlackFadeObjects2= [];
gdjs.MenuCode.GDBlackFadeObjects3= [];
gdjs.MenuCode.GDFlagObjects1= [];
gdjs.MenuCode.GDFlagObjects2= [];
gdjs.MenuCode.GDFlagObjects3= [];
gdjs.MenuCode.GDSpikeObjects1= [];
gdjs.MenuCode.GDSpikeObjects2= [];
gdjs.MenuCode.GDSpikeObjects3= [];
gdjs.MenuCode.GDWhiteFadeInObjects1= [];
gdjs.MenuCode.GDWhiteFadeInObjects2= [];
gdjs.MenuCode.GDWhiteFadeInObjects3= [];
gdjs.MenuCode.GDMenuButtonObjects1= [];
gdjs.MenuCode.GDMenuButtonObjects2= [];
gdjs.MenuCode.GDMenuButtonObjects3= [];
gdjs.MenuCode.GDTrunkObjects1= [];
gdjs.MenuCode.GDTrunkObjects2= [];
gdjs.MenuCode.GDTrunkObjects3= [];
gdjs.MenuCode.GDMenuObjects1= [];
gdjs.MenuCode.GDMenuObjects2= [];
gdjs.MenuCode.GDMenuObjects3= [];
gdjs.MenuCode.GDTitleScreenButtonObjects1= [];
gdjs.MenuCode.GDTitleScreenButtonObjects2= [];
gdjs.MenuCode.GDTitleScreenButtonObjects3= [];
gdjs.MenuCode.GDLevel1Objects1= [];
gdjs.MenuCode.GDLevel1Objects2= [];
gdjs.MenuCode.GDLevel1Objects3= [];
gdjs.MenuCode.GDLevel2Objects1= [];
gdjs.MenuCode.GDLevel2Objects2= [];
gdjs.MenuCode.GDLevel2Objects3= [];
gdjs.MenuCode.GDLevel3Objects1= [];
gdjs.MenuCode.GDLevel3Objects2= [];
gdjs.MenuCode.GDLevel3Objects3= [];
gdjs.MenuCode.GDLevel4Objects1= [];
gdjs.MenuCode.GDLevel4Objects2= [];
gdjs.MenuCode.GDLevel4Objects3= [];
gdjs.MenuCode.GDLevel5Objects1= [];
gdjs.MenuCode.GDLevel5Objects2= [];
gdjs.MenuCode.GDLevel5Objects3= [];
gdjs.MenuCode.GDLock1Objects1= [];
gdjs.MenuCode.GDLock1Objects2= [];
gdjs.MenuCode.GDLock1Objects3= [];
gdjs.MenuCode.GDLock2Objects1= [];
gdjs.MenuCode.GDLock2Objects2= [];
gdjs.MenuCode.GDLock2Objects3= [];
gdjs.MenuCode.GDLock3Objects1= [];
gdjs.MenuCode.GDLock3Objects2= [];
gdjs.MenuCode.GDLock3Objects3= [];
gdjs.MenuCode.GDLock4Objects1= [];
gdjs.MenuCode.GDLock4Objects2= [];
gdjs.MenuCode.GDLock4Objects3= [];
gdjs.MenuCode.GDLock5Objects1= [];
gdjs.MenuCode.GDLock5Objects2= [];
gdjs.MenuCode.GDLock5Objects3= [];
gdjs.MenuCode.GDAwkCowPicObjects1= [];
gdjs.MenuCode.GDAwkCowPicObjects2= [];
gdjs.MenuCode.GDAwkCowPicObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.MenuCode.GDLevel1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLevel1Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLevel1Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLevel1Objects2[k] = gdjs.MenuCode.GDLevel1Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDLevel1Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level2"), gdjs.MenuCode.GDLevel2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLevel2Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLevel2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLevel2Objects2[k] = gdjs.MenuCode.GDLevel2Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDLevel2Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", true);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level3"), gdjs.MenuCode.GDLevel3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLevel3Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLevel3Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLevel3Objects2[k] = gdjs.MenuCode.GDLevel3Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDLevel3Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", true);
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level4"), gdjs.MenuCode.GDLevel4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLevel4Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLevel4Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLevel4Objects2[k] = gdjs.MenuCode.GDLevel4Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDLevel4Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 4", true);
}}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lock1"), gdjs.MenuCode.GDLock1Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDLock1Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLock1Objects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lock2"), gdjs.MenuCode.GDLock2Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDLock2Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLock2Objects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lock3"), gdjs.MenuCode.GDLock3Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDLock3Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLock3Objects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lock4"), gdjs.MenuCode.GDLock4Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDLock4Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLock4Objects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lock5"), gdjs.MenuCode.GDLock5Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDLock5Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLock5Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TitleScreenButton"), gdjs.MenuCode.GDTitleScreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDTitleScreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDTitleScreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDTitleScreenButtonObjects1[k] = gdjs.MenuCode.GDTitleScreenButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDTitleScreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", true);
}}

}


};gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.MenuCode.GDAwkCowObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAwkCowObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAwkCowObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAwkCowObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.MenuCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDAwkCowObjects1[i].setAnimationSpeedScale(0.75);
}
}}

}


{


gdjs.MenuCode.eventsList4(runtimeScene);
}


{


gdjs.MenuCode.eventsList5(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDAwkCowObjects1.length = 0;
gdjs.MenuCode.GDAwkCowObjects2.length = 0;
gdjs.MenuCode.GDAwkCowObjects3.length = 0;
gdjs.MenuCode.GDTestBlockObjects1.length = 0;
gdjs.MenuCode.GDTestBlockObjects2.length = 0;
gdjs.MenuCode.GDTestBlockObjects3.length = 0;
gdjs.MenuCode.GDTestBlock2Objects1.length = 0;
gdjs.MenuCode.GDTestBlock2Objects2.length = 0;
gdjs.MenuCode.GDTestBlock2Objects3.length = 0;
gdjs.MenuCode.GDBoxObjects1.length = 0;
gdjs.MenuCode.GDBoxObjects2.length = 0;
gdjs.MenuCode.GDBoxObjects3.length = 0;
gdjs.MenuCode.GDBlubaObjects1.length = 0;
gdjs.MenuCode.GDBlubaObjects2.length = 0;
gdjs.MenuCode.GDBlubaObjects3.length = 0;
gdjs.MenuCode.GDGrassObjects1.length = 0;
gdjs.MenuCode.GDGrassObjects2.length = 0;
gdjs.MenuCode.GDGrassObjects3.length = 0;
gdjs.MenuCode.GDDirtObjects1.length = 0;
gdjs.MenuCode.GDDirtObjects2.length = 0;
gdjs.MenuCode.GDDirtObjects3.length = 0;
gdjs.MenuCode.GDDirt_9595JumpthruObjects1.length = 0;
gdjs.MenuCode.GDDirt_9595JumpthruObjects2.length = 0;
gdjs.MenuCode.GDDirt_9595JumpthruObjects3.length = 0;
gdjs.MenuCode.GDLevelBorderObjects1.length = 0;
gdjs.MenuCode.GDLevelBorderObjects2.length = 0;
gdjs.MenuCode.GDLevelBorderObjects3.length = 0;
gdjs.MenuCode.GDWhiteFadeOutObjects1.length = 0;
gdjs.MenuCode.GDWhiteFadeOutObjects2.length = 0;
gdjs.MenuCode.GDWhiteFadeOutObjects3.length = 0;
gdjs.MenuCode.GDBlackFadeObjects1.length = 0;
gdjs.MenuCode.GDBlackFadeObjects2.length = 0;
gdjs.MenuCode.GDBlackFadeObjects3.length = 0;
gdjs.MenuCode.GDFlagObjects1.length = 0;
gdjs.MenuCode.GDFlagObjects2.length = 0;
gdjs.MenuCode.GDFlagObjects3.length = 0;
gdjs.MenuCode.GDSpikeObjects1.length = 0;
gdjs.MenuCode.GDSpikeObjects2.length = 0;
gdjs.MenuCode.GDSpikeObjects3.length = 0;
gdjs.MenuCode.GDWhiteFadeInObjects1.length = 0;
gdjs.MenuCode.GDWhiteFadeInObjects2.length = 0;
gdjs.MenuCode.GDWhiteFadeInObjects3.length = 0;
gdjs.MenuCode.GDMenuButtonObjects1.length = 0;
gdjs.MenuCode.GDMenuButtonObjects2.length = 0;
gdjs.MenuCode.GDMenuButtonObjects3.length = 0;
gdjs.MenuCode.GDTrunkObjects1.length = 0;
gdjs.MenuCode.GDTrunkObjects2.length = 0;
gdjs.MenuCode.GDTrunkObjects3.length = 0;
gdjs.MenuCode.GDMenuObjects1.length = 0;
gdjs.MenuCode.GDMenuObjects2.length = 0;
gdjs.MenuCode.GDMenuObjects3.length = 0;
gdjs.MenuCode.GDTitleScreenButtonObjects1.length = 0;
gdjs.MenuCode.GDTitleScreenButtonObjects2.length = 0;
gdjs.MenuCode.GDTitleScreenButtonObjects3.length = 0;
gdjs.MenuCode.GDLevel1Objects1.length = 0;
gdjs.MenuCode.GDLevel1Objects2.length = 0;
gdjs.MenuCode.GDLevel1Objects3.length = 0;
gdjs.MenuCode.GDLevel2Objects1.length = 0;
gdjs.MenuCode.GDLevel2Objects2.length = 0;
gdjs.MenuCode.GDLevel2Objects3.length = 0;
gdjs.MenuCode.GDLevel3Objects1.length = 0;
gdjs.MenuCode.GDLevel3Objects2.length = 0;
gdjs.MenuCode.GDLevel3Objects3.length = 0;
gdjs.MenuCode.GDLevel4Objects1.length = 0;
gdjs.MenuCode.GDLevel4Objects2.length = 0;
gdjs.MenuCode.GDLevel4Objects3.length = 0;
gdjs.MenuCode.GDLevel5Objects1.length = 0;
gdjs.MenuCode.GDLevel5Objects2.length = 0;
gdjs.MenuCode.GDLevel5Objects3.length = 0;
gdjs.MenuCode.GDLock1Objects1.length = 0;
gdjs.MenuCode.GDLock1Objects2.length = 0;
gdjs.MenuCode.GDLock1Objects3.length = 0;
gdjs.MenuCode.GDLock2Objects1.length = 0;
gdjs.MenuCode.GDLock2Objects2.length = 0;
gdjs.MenuCode.GDLock2Objects3.length = 0;
gdjs.MenuCode.GDLock3Objects1.length = 0;
gdjs.MenuCode.GDLock3Objects2.length = 0;
gdjs.MenuCode.GDLock3Objects3.length = 0;
gdjs.MenuCode.GDLock4Objects1.length = 0;
gdjs.MenuCode.GDLock4Objects2.length = 0;
gdjs.MenuCode.GDLock4Objects3.length = 0;
gdjs.MenuCode.GDLock5Objects1.length = 0;
gdjs.MenuCode.GDLock5Objects2.length = 0;
gdjs.MenuCode.GDLock5Objects3.length = 0;
gdjs.MenuCode.GDAwkCowPicObjects1.length = 0;
gdjs.MenuCode.GDAwkCowPicObjects2.length = 0;
gdjs.MenuCode.GDAwkCowPicObjects3.length = 0;

gdjs.MenuCode.eventsList6(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
