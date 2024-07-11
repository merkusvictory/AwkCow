gdjs.IntroCode = {};
gdjs.IntroCode.GDAwkCowObjects1= [];
gdjs.IntroCode.GDAwkCowObjects2= [];
gdjs.IntroCode.GDAwkCowObjects3= [];
gdjs.IntroCode.GDTestBlockObjects1= [];
gdjs.IntroCode.GDTestBlockObjects2= [];
gdjs.IntroCode.GDTestBlockObjects3= [];
gdjs.IntroCode.GDTestBlock2Objects1= [];
gdjs.IntroCode.GDTestBlock2Objects2= [];
gdjs.IntroCode.GDTestBlock2Objects3= [];
gdjs.IntroCode.GDBoxObjects1= [];
gdjs.IntroCode.GDBoxObjects2= [];
gdjs.IntroCode.GDBoxObjects3= [];
gdjs.IntroCode.GDBlubaObjects1= [];
gdjs.IntroCode.GDBlubaObjects2= [];
gdjs.IntroCode.GDBlubaObjects3= [];
gdjs.IntroCode.GDGrassObjects1= [];
gdjs.IntroCode.GDGrassObjects2= [];
gdjs.IntroCode.GDGrassObjects3= [];
gdjs.IntroCode.GDDirtObjects1= [];
gdjs.IntroCode.GDDirtObjects2= [];
gdjs.IntroCode.GDDirtObjects3= [];
gdjs.IntroCode.GDDirt_9595JumpthruObjects1= [];
gdjs.IntroCode.GDDirt_9595JumpthruObjects2= [];
gdjs.IntroCode.GDDirt_9595JumpthruObjects3= [];
gdjs.IntroCode.GDLevelBorderObjects1= [];
gdjs.IntroCode.GDLevelBorderObjects2= [];
gdjs.IntroCode.GDLevelBorderObjects3= [];
gdjs.IntroCode.GDWhiteFadeOutObjects1= [];
gdjs.IntroCode.GDWhiteFadeOutObjects2= [];
gdjs.IntroCode.GDWhiteFadeOutObjects3= [];
gdjs.IntroCode.GDBlackFadeObjects1= [];
gdjs.IntroCode.GDBlackFadeObjects2= [];
gdjs.IntroCode.GDBlackFadeObjects3= [];
gdjs.IntroCode.GDFlagObjects1= [];
gdjs.IntroCode.GDFlagObjects2= [];
gdjs.IntroCode.GDFlagObjects3= [];
gdjs.IntroCode.GDSpikeObjects1= [];
gdjs.IntroCode.GDSpikeObjects2= [];
gdjs.IntroCode.GDSpikeObjects3= [];
gdjs.IntroCode.GDWhiteFadeInObjects1= [];
gdjs.IntroCode.GDWhiteFadeInObjects2= [];
gdjs.IntroCode.GDWhiteFadeInObjects3= [];
gdjs.IntroCode.GDMenuButtonObjects1= [];
gdjs.IntroCode.GDMenuButtonObjects2= [];
gdjs.IntroCode.GDMenuButtonObjects3= [];
gdjs.IntroCode.GDTrunkObjects1= [];
gdjs.IntroCode.GDTrunkObjects2= [];
gdjs.IntroCode.GDTrunkObjects3= [];
gdjs.IntroCode.GDClick_9595AnywhereObjects1= [];
gdjs.IntroCode.GDClick_9595AnywhereObjects2= [];
gdjs.IntroCode.GDClick_9595AnywhereObjects3= [];
gdjs.IntroCode.GDIntrotxt1Objects1= [];
gdjs.IntroCode.GDIntrotxt1Objects2= [];
gdjs.IntroCode.GDIntrotxt1Objects3= [];
gdjs.IntroCode.GDIntrotxt2Objects1= [];
gdjs.IntroCode.GDIntrotxt2Objects2= [];
gdjs.IntroCode.GDIntrotxt2Objects3= [];
gdjs.IntroCode.GDIntrotxt3Objects1= [];
gdjs.IntroCode.GDIntrotxt3Objects2= [];
gdjs.IntroCode.GDIntrotxt3Objects3= [];
gdjs.IntroCode.GDIntrotxt4Objects1= [];
gdjs.IntroCode.GDIntrotxt4Objects2= [];
gdjs.IntroCode.GDIntrotxt4Objects3= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12810548);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Introtxt1"), gdjs.IntroCode.GDIntrotxt1Objects2);
{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt1Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt1Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt1Objects2[i].activateBehavior("Text_AutoTyping", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Introtxt1"), gdjs.IntroCode.GDIntrotxt1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDIntrotxt1Objects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDIntrotxt1Objects2[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDIntrotxt1Objects2[k] = gdjs.IntroCode.GDIntrotxt1Objects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDIntrotxt1Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12811420);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Introtxt2"), gdjs.IntroCode.GDIntrotxt2Objects2);
{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt2Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt2Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt2Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt2Objects2[i].activateBehavior("Text_AutoTyping", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Introtxt2"), gdjs.IntroCode.GDIntrotxt2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDIntrotxt2Objects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDIntrotxt2Objects2[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDIntrotxt2Objects2[k] = gdjs.IntroCode.GDIntrotxt2Objects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDIntrotxt2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12813108);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDIntrotxt2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("Introtxt3"), gdjs.IntroCode.GDIntrotxt3Objects2);
{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt2Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt2Objects2[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt3Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt3Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt3Objects2[i].activateBehavior("Text_AutoTyping", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Introtxt3"), gdjs.IntroCode.GDIntrotxt3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDIntrotxt3Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDIntrotxt3Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDIntrotxt3Objects1[k] = gdjs.IntroCode.GDIntrotxt3Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDIntrotxt3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12814404);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Introtxt1"), gdjs.IntroCode.GDIntrotxt1Objects1);
/* Reuse gdjs.IntroCode.GDIntrotxt3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Introtxt4"), gdjs.IntroCode.GDIntrotxt4Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt3Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt4Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt4Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt4Objects1[i].activateBehavior("Text_AutoTyping", true);
}
}}

}


};gdjs.IntroCode.asyncCallback12816900 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}
gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.IntroCode.asyncCallback12816900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12815852);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackFade"), gdjs.IntroCode.GDBlackFadeObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDBlackFadeObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDBlackFadeObjects2[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Introtxt4"), gdjs.IntroCode.GDIntrotxt4Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDIntrotxt4Objects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDIntrotxt4Objects2[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDIntrotxt4Objects2[k] = gdjs.IntroCode.GDIntrotxt4Objects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDIntrotxt4Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12816660);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackFade"), gdjs.IntroCode.GDBlackFadeObjects2);
{for(var i = 0, len = gdjs.IntroCode.GDBlackFadeObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDBlackFadeObjects2[i].setVariableBoolean(gdjs.IntroCode.GDBlackFadeObjects2[i].getVariables().getFromIndex(0), true);
}
}
{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackFade"), gdjs.IntroCode.GDBlackFadeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDBlackFadeObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDBlackFadeObjects1[i].getVariableBoolean(gdjs.IntroCode.GDBlackFadeObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDBlackFadeObjects1[k] = gdjs.IntroCode.GDBlackFadeObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDBlackFadeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDBlackFadeObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDBlackFadeObjects1[i].getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDBlackFadeObjects1[k] = gdjs.IntroCode.GDBlackFadeObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDBlackFadeObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDBlackFadeObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDBlackFadeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBlackFadeObjects1[i].setOpacity(gdjs.IntroCode.GDBlackFadeObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 1));
}
}}

}


};gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Introtxt1"), gdjs.IntroCode.GDIntrotxt1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Introtxt2"), gdjs.IntroCode.GDIntrotxt2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Introtxt3"), gdjs.IntroCode.GDIntrotxt3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Introtxt4"), gdjs.IntroCode.GDIntrotxt4Objects1);
{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt3Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt4Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt1Objects1[i].activateBehavior("Text_AutoTyping", false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt2Objects1[i].activateBehavior("Text_AutoTyping", false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt3Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt3Objects1[i].activateBehavior("Text_AutoTyping", false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDIntrotxt4Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDIntrotxt4Objects1[i].activateBehavior("Text_AutoTyping", false);
}
}}

}


{


gdjs.IntroCode.eventsList0(runtimeScene);
}


{


gdjs.IntroCode.eventsList2(runtimeScene);
}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDAwkCowObjects1.length = 0;
gdjs.IntroCode.GDAwkCowObjects2.length = 0;
gdjs.IntroCode.GDAwkCowObjects3.length = 0;
gdjs.IntroCode.GDTestBlockObjects1.length = 0;
gdjs.IntroCode.GDTestBlockObjects2.length = 0;
gdjs.IntroCode.GDTestBlockObjects3.length = 0;
gdjs.IntroCode.GDTestBlock2Objects1.length = 0;
gdjs.IntroCode.GDTestBlock2Objects2.length = 0;
gdjs.IntroCode.GDTestBlock2Objects3.length = 0;
gdjs.IntroCode.GDBoxObjects1.length = 0;
gdjs.IntroCode.GDBoxObjects2.length = 0;
gdjs.IntroCode.GDBoxObjects3.length = 0;
gdjs.IntroCode.GDBlubaObjects1.length = 0;
gdjs.IntroCode.GDBlubaObjects2.length = 0;
gdjs.IntroCode.GDBlubaObjects3.length = 0;
gdjs.IntroCode.GDGrassObjects1.length = 0;
gdjs.IntroCode.GDGrassObjects2.length = 0;
gdjs.IntroCode.GDGrassObjects3.length = 0;
gdjs.IntroCode.GDDirtObjects1.length = 0;
gdjs.IntroCode.GDDirtObjects2.length = 0;
gdjs.IntroCode.GDDirtObjects3.length = 0;
gdjs.IntroCode.GDDirt_9595JumpthruObjects1.length = 0;
gdjs.IntroCode.GDDirt_9595JumpthruObjects2.length = 0;
gdjs.IntroCode.GDDirt_9595JumpthruObjects3.length = 0;
gdjs.IntroCode.GDLevelBorderObjects1.length = 0;
gdjs.IntroCode.GDLevelBorderObjects2.length = 0;
gdjs.IntroCode.GDLevelBorderObjects3.length = 0;
gdjs.IntroCode.GDWhiteFadeOutObjects1.length = 0;
gdjs.IntroCode.GDWhiteFadeOutObjects2.length = 0;
gdjs.IntroCode.GDWhiteFadeOutObjects3.length = 0;
gdjs.IntroCode.GDBlackFadeObjects1.length = 0;
gdjs.IntroCode.GDBlackFadeObjects2.length = 0;
gdjs.IntroCode.GDBlackFadeObjects3.length = 0;
gdjs.IntroCode.GDFlagObjects1.length = 0;
gdjs.IntroCode.GDFlagObjects2.length = 0;
gdjs.IntroCode.GDFlagObjects3.length = 0;
gdjs.IntroCode.GDSpikeObjects1.length = 0;
gdjs.IntroCode.GDSpikeObjects2.length = 0;
gdjs.IntroCode.GDSpikeObjects3.length = 0;
gdjs.IntroCode.GDWhiteFadeInObjects1.length = 0;
gdjs.IntroCode.GDWhiteFadeInObjects2.length = 0;
gdjs.IntroCode.GDWhiteFadeInObjects3.length = 0;
gdjs.IntroCode.GDMenuButtonObjects1.length = 0;
gdjs.IntroCode.GDMenuButtonObjects2.length = 0;
gdjs.IntroCode.GDMenuButtonObjects3.length = 0;
gdjs.IntroCode.GDTrunkObjects1.length = 0;
gdjs.IntroCode.GDTrunkObjects2.length = 0;
gdjs.IntroCode.GDTrunkObjects3.length = 0;
gdjs.IntroCode.GDClick_9595AnywhereObjects1.length = 0;
gdjs.IntroCode.GDClick_9595AnywhereObjects2.length = 0;
gdjs.IntroCode.GDClick_9595AnywhereObjects3.length = 0;
gdjs.IntroCode.GDIntrotxt1Objects1.length = 0;
gdjs.IntroCode.GDIntrotxt1Objects2.length = 0;
gdjs.IntroCode.GDIntrotxt1Objects3.length = 0;
gdjs.IntroCode.GDIntrotxt2Objects1.length = 0;
gdjs.IntroCode.GDIntrotxt2Objects2.length = 0;
gdjs.IntroCode.GDIntrotxt2Objects3.length = 0;
gdjs.IntroCode.GDIntrotxt3Objects1.length = 0;
gdjs.IntroCode.GDIntrotxt3Objects2.length = 0;
gdjs.IntroCode.GDIntrotxt3Objects3.length = 0;
gdjs.IntroCode.GDIntrotxt4Objects1.length = 0;
gdjs.IntroCode.GDIntrotxt4Objects2.length = 0;
gdjs.IntroCode.GDIntrotxt4Objects3.length = 0;

gdjs.IntroCode.eventsList3(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
