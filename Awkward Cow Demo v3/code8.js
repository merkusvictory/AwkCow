gdjs.TestCode = {};
gdjs.TestCode.GDAwkCowObjects1= [];
gdjs.TestCode.GDAwkCowObjects2= [];
gdjs.TestCode.GDAwkCowObjects3= [];
gdjs.TestCode.GDTestBlockObjects1= [];
gdjs.TestCode.GDTestBlockObjects2= [];
gdjs.TestCode.GDTestBlockObjects3= [];
gdjs.TestCode.GDTestBlock2Objects1= [];
gdjs.TestCode.GDTestBlock2Objects2= [];
gdjs.TestCode.GDTestBlock2Objects3= [];
gdjs.TestCode.GDBoxObjects1= [];
gdjs.TestCode.GDBoxObjects2= [];
gdjs.TestCode.GDBoxObjects3= [];
gdjs.TestCode.GDBlubaObjects1= [];
gdjs.TestCode.GDBlubaObjects2= [];
gdjs.TestCode.GDBlubaObjects3= [];
gdjs.TestCode.GDGrassObjects1= [];
gdjs.TestCode.GDGrassObjects2= [];
gdjs.TestCode.GDGrassObjects3= [];
gdjs.TestCode.GDDirtObjects1= [];
gdjs.TestCode.GDDirtObjects2= [];
gdjs.TestCode.GDDirtObjects3= [];
gdjs.TestCode.GDDirt_9595JumpthruObjects1= [];
gdjs.TestCode.GDDirt_9595JumpthruObjects2= [];
gdjs.TestCode.GDDirt_9595JumpthruObjects3= [];
gdjs.TestCode.GDLevelBorderObjects1= [];
gdjs.TestCode.GDLevelBorderObjects2= [];
gdjs.TestCode.GDLevelBorderObjects3= [];
gdjs.TestCode.GDWhiteFadeOutObjects1= [];
gdjs.TestCode.GDWhiteFadeOutObjects2= [];
gdjs.TestCode.GDWhiteFadeOutObjects3= [];
gdjs.TestCode.GDBlackFadeObjects1= [];
gdjs.TestCode.GDBlackFadeObjects2= [];
gdjs.TestCode.GDBlackFadeObjects3= [];
gdjs.TestCode.GDFlagObjects1= [];
gdjs.TestCode.GDFlagObjects2= [];
gdjs.TestCode.GDFlagObjects3= [];
gdjs.TestCode.GDSpikeObjects1= [];
gdjs.TestCode.GDSpikeObjects2= [];
gdjs.TestCode.GDSpikeObjects3= [];
gdjs.TestCode.GDWhiteFadeInObjects1= [];
gdjs.TestCode.GDWhiteFadeInObjects2= [];
gdjs.TestCode.GDWhiteFadeInObjects3= [];
gdjs.TestCode.GDMenuButtonObjects1= [];
gdjs.TestCode.GDMenuButtonObjects2= [];
gdjs.TestCode.GDMenuButtonObjects3= [];
gdjs.TestCode.GDTrunkObjects1= [];
gdjs.TestCode.GDTrunkObjects2= [];
gdjs.TestCode.GDTrunkObjects3= [];
gdjs.TestCode.GDAmoogusObjects1= [];
gdjs.TestCode.GDAmoogusObjects2= [];
gdjs.TestCode.GDAmoogusObjects3= [];


gdjs.TestCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDAwkCowObjects1, gdjs.TestCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects2[k] = gdjs.TestCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects2[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDAwkCowObjects1, gdjs.TestCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects2[k] = gdjs.TestCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDAwkCowObjects1, gdjs.TestCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects2[k] = gdjs.TestCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects2[k] = gdjs.TestCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects2[i].setAnimationSpeedScale(3);
}
}{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDAwkCowObjects1, gdjs.TestCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects2[k] = gdjs.TestCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDAwkCowObjects1, gdjs.TestCode.GDAwkCowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects2[k] = gdjs.TestCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAwkCowObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.TestCode.GDAwkCowObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDAwkCowObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects1[k] = gdjs.TestCode.GDAwkCowObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAwkCowObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects1[i].setAnimationName("Jump");
}
}}

}


};gdjs.TestCode.eventsList1 = function(runtimeScene) {

{


gdjs.TestCode.eventsList0(runtimeScene);
}


};gdjs.TestCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.TestCode.GDAwkCowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDAwkCowObjects1[i].getVariableBoolean(gdjs.TestCode.GDAwkCowObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects1[k] = gdjs.TestCode.GDAwkCowObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Amoogus"), gdjs.TestCode.GDAmoogusObjects1);
/* Reuse gdjs.TestCode.GDAwkCowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Bluba"), gdjs.TestCode.GDBlubaObjects1);
{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects1[i].setAnimationSpeedScale(1);
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects1[i].setAnimationSpeedScale(1);
}
}
{ //Subevents
gdjs.TestCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDBlubaObjects1, gdjs.TestCode.GDBlubaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDBlubaObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects2[k] = gdjs.TestCode.GDBlubaObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDBlubaObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects2[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDBlubaObjects1, gdjs.TestCode.GDBlubaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDBlubaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects2[k] = gdjs.TestCode.GDBlubaObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDBlubaObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDBlubaObjects1, gdjs.TestCode.GDBlubaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDBlubaObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects2[k] = gdjs.TestCode.GDBlubaObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDBlubaObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects2[k] = gdjs.TestCode.GDBlubaObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDBlubaObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects2[i].setAnimationSpeedScale(8);
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDBlubaObjects1, gdjs.TestCode.GDBlubaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDBlubaObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects2[k] = gdjs.TestCode.GDBlubaObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDBlubaObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDBlubaObjects1, gdjs.TestCode.GDBlubaObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDBlubaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects2[k] = gdjs.TestCode.GDBlubaObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDBlubaObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects2[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.TestCode.GDBlubaObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDBlubaObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects1[k] = gdjs.TestCode.GDBlubaObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDBlubaObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects1[i].setAnimationName("Jump");
}
}}

}


};gdjs.TestCode.eventsList4 = function(runtimeScene) {

{


gdjs.TestCode.eventsList3(runtimeScene);
}


};gdjs.TestCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bluba"), gdjs.TestCode.GDBlubaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDBlubaObjects1[i].getVariableBoolean(gdjs.TestCode.GDBlubaObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects1[k] = gdjs.TestCode.GDBlubaObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Amoogus"), gdjs.TestCode.GDAmoogusObjects1);
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.TestCode.GDAwkCowObjects1);
/* Reuse gdjs.TestCode.GDBlubaObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects1[i].setAnimationSpeedScale(1);
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects1[i].setAnimationSpeedScale(1);
}
}
{ //Subevents
gdjs.TestCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.TestCode.GDAmoogusObjects1, gdjs.TestCode.GDAmoogusObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDAmoogusObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects2[k] = gdjs.TestCode.GDAmoogusObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAmoogusObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects2[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects2[i].setAnimationSpeedScale(1);
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDAmoogusObjects1, gdjs.TestCode.GDAmoogusObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAmoogusObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects2[k] = gdjs.TestCode.GDAmoogusObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAmoogusObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDAmoogusObjects1, gdjs.TestCode.GDAmoogusObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAmoogusObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects2[k] = gdjs.TestCode.GDAmoogusObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAmoogusObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects2[k] = gdjs.TestCode.GDAmoogusObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAmoogusObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects2[i].setAnimationName("Run");
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDAmoogusObjects1, gdjs.TestCode.GDAmoogusObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAmoogusObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects2[k] = gdjs.TestCode.GDAmoogusObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAmoogusObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects2[i].setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(gdjs.TestCode.GDAmoogusObjects1, gdjs.TestCode.GDAmoogusObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAmoogusObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects2[k] = gdjs.TestCode.GDAmoogusObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAmoogusObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects2[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.TestCode.GDAmoogusObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDAmoogusObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects1[k] = gdjs.TestCode.GDAmoogusObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAmoogusObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects1[i].setAnimationName("Jump");
}
}}

}


};gdjs.TestCode.eventsList7 = function(runtimeScene) {

{


gdjs.TestCode.eventsList6(runtimeScene);
}


};gdjs.TestCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Amoogus"), gdjs.TestCode.GDAmoogusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDAmoogusObjects1[i].getVariableBoolean(gdjs.TestCode.GDAmoogusObjects1[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects1[k] = gdjs.TestCode.GDAmoogusObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAmoogusObjects1 */
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.TestCode.GDAwkCowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bluba"), gdjs.TestCode.GDBlubaObjects1);
{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects1[i].setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects1[i].setAnimationSpeedScale(1);
}
}{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects1[i].setAnimationSpeedScale(1);
}
}
{ //Subevents
gdjs.TestCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.TestCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Amoogus"), gdjs.TestCode.GDAmoogusObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bluba"), gdjs.TestCode.GDBlubaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDBlubaObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects2[k] = gdjs.TestCode.GDBlubaObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAmoogusObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects2[k] = gdjs.TestCode.GDAmoogusObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13057612);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAmoogusObjects2 */
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.TestCode.GDAwkCowObjects2);
/* Reuse gdjs.TestCode.GDBlubaObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects2[i].setVariableBoolean(gdjs.TestCode.GDAwkCowObjects2[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects2[i].setVariableBoolean(gdjs.TestCode.GDBlubaObjects2[i].getVariables().getFromIndex(0), false);
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects2[i].setVariableBoolean(gdjs.TestCode.GDAmoogusObjects2[i].getVariables().getFromIndex(0), false);
}
}}

}


};gdjs.TestCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Amoogus"), gdjs.TestCode.GDAmoogusObjects2);
gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.TestCode.GDAwkCowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAwkCowObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects2[k] = gdjs.TestCode.GDAwkCowObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAmoogusObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDAmoogusObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAmoogusObjects2[k] = gdjs.TestCode.GDAmoogusObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDAmoogusObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13059428);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.TestCode.GDAmoogusObjects2 */
/* Reuse gdjs.TestCode.GDAwkCowObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Bluba"), gdjs.TestCode.GDBlubaObjects2);
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects2[i].setVariableBoolean(gdjs.TestCode.GDAwkCowObjects2[i].getVariables().getFromIndex(0), false);
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects2[i].setVariableBoolean(gdjs.TestCode.GDBlubaObjects2[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects2[i].setVariableBoolean(gdjs.TestCode.GDAmoogusObjects2[i].getVariables().getFromIndex(0), false);
}
}}

}


};gdjs.TestCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AwkCow"), gdjs.TestCode.GDAwkCowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bluba"), gdjs.TestCode.GDBlubaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDAwkCowObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDAwkCowObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDAwkCowObjects1[k] = gdjs.TestCode.GDAwkCowObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDAwkCowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDBlubaObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDBlubaObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDBlubaObjects1[k] = gdjs.TestCode.GDBlubaObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDBlubaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13061036);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Amoogus"), gdjs.TestCode.GDAmoogusObjects1);
/* Reuse gdjs.TestCode.GDAwkCowObjects1 */
/* Reuse gdjs.TestCode.GDBlubaObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDAwkCowObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAwkCowObjects1[i].setVariableBoolean(gdjs.TestCode.GDAwkCowObjects1[i].getVariables().getFromIndex(0), false);
}
}{for(var i = 0, len = gdjs.TestCode.GDBlubaObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDBlubaObjects1[i].setVariableBoolean(gdjs.TestCode.GDBlubaObjects1[i].getVariables().getFromIndex(0), false);
}
}{for(var i = 0, len = gdjs.TestCode.GDAmoogusObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDAmoogusObjects1[i].setVariableBoolean(gdjs.TestCode.GDAmoogusObjects1[i].getVariables().getFromIndex(0), true);
}
}}

}


};gdjs.TestCode.eventsList12 = function(runtimeScene) {

{


gdjs.TestCode.eventsList9(runtimeScene);
}


{


gdjs.TestCode.eventsList10(runtimeScene);
}


{


gdjs.TestCode.eventsList11(runtimeScene);
}


};gdjs.TestCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MenuButton"), gdjs.TestCode.GDMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TestCode.GDMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDMenuButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TestCode.GDMenuButtonObjects1[k] = gdjs.TestCode.GDMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.TestCode.eventsList14 = function(runtimeScene) {

{


gdjs.TestCode.eventsList2(runtimeScene);
}


{


gdjs.TestCode.eventsList5(runtimeScene);
}


{


gdjs.TestCode.eventsList8(runtimeScene);
}


{


gdjs.TestCode.eventsList12(runtimeScene);
}


{


gdjs.TestCode.eventsList13(runtimeScene);
}


};

gdjs.TestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestCode.GDAwkCowObjects1.length = 0;
gdjs.TestCode.GDAwkCowObjects2.length = 0;
gdjs.TestCode.GDAwkCowObjects3.length = 0;
gdjs.TestCode.GDTestBlockObjects1.length = 0;
gdjs.TestCode.GDTestBlockObjects2.length = 0;
gdjs.TestCode.GDTestBlockObjects3.length = 0;
gdjs.TestCode.GDTestBlock2Objects1.length = 0;
gdjs.TestCode.GDTestBlock2Objects2.length = 0;
gdjs.TestCode.GDTestBlock2Objects3.length = 0;
gdjs.TestCode.GDBoxObjects1.length = 0;
gdjs.TestCode.GDBoxObjects2.length = 0;
gdjs.TestCode.GDBoxObjects3.length = 0;
gdjs.TestCode.GDBlubaObjects1.length = 0;
gdjs.TestCode.GDBlubaObjects2.length = 0;
gdjs.TestCode.GDBlubaObjects3.length = 0;
gdjs.TestCode.GDGrassObjects1.length = 0;
gdjs.TestCode.GDGrassObjects2.length = 0;
gdjs.TestCode.GDGrassObjects3.length = 0;
gdjs.TestCode.GDDirtObjects1.length = 0;
gdjs.TestCode.GDDirtObjects2.length = 0;
gdjs.TestCode.GDDirtObjects3.length = 0;
gdjs.TestCode.GDDirt_9595JumpthruObjects1.length = 0;
gdjs.TestCode.GDDirt_9595JumpthruObjects2.length = 0;
gdjs.TestCode.GDDirt_9595JumpthruObjects3.length = 0;
gdjs.TestCode.GDLevelBorderObjects1.length = 0;
gdjs.TestCode.GDLevelBorderObjects2.length = 0;
gdjs.TestCode.GDLevelBorderObjects3.length = 0;
gdjs.TestCode.GDWhiteFadeOutObjects1.length = 0;
gdjs.TestCode.GDWhiteFadeOutObjects2.length = 0;
gdjs.TestCode.GDWhiteFadeOutObjects3.length = 0;
gdjs.TestCode.GDBlackFadeObjects1.length = 0;
gdjs.TestCode.GDBlackFadeObjects2.length = 0;
gdjs.TestCode.GDBlackFadeObjects3.length = 0;
gdjs.TestCode.GDFlagObjects1.length = 0;
gdjs.TestCode.GDFlagObjects2.length = 0;
gdjs.TestCode.GDFlagObjects3.length = 0;
gdjs.TestCode.GDSpikeObjects1.length = 0;
gdjs.TestCode.GDSpikeObjects2.length = 0;
gdjs.TestCode.GDSpikeObjects3.length = 0;
gdjs.TestCode.GDWhiteFadeInObjects1.length = 0;
gdjs.TestCode.GDWhiteFadeInObjects2.length = 0;
gdjs.TestCode.GDWhiteFadeInObjects3.length = 0;
gdjs.TestCode.GDMenuButtonObjects1.length = 0;
gdjs.TestCode.GDMenuButtonObjects2.length = 0;
gdjs.TestCode.GDMenuButtonObjects3.length = 0;
gdjs.TestCode.GDTrunkObjects1.length = 0;
gdjs.TestCode.GDTrunkObjects2.length = 0;
gdjs.TestCode.GDTrunkObjects3.length = 0;
gdjs.TestCode.GDAmoogusObjects1.length = 0;
gdjs.TestCode.GDAmoogusObjects2.length = 0;
gdjs.TestCode.GDAmoogusObjects3.length = 0;

gdjs.TestCode.eventsList14(runtimeScene);

return;

}

gdjs['TestCode'] = gdjs.TestCode;
