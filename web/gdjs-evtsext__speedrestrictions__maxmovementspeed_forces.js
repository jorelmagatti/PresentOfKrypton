
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces || {};

/**
 * Behavior generated from Enforce max movement speed
 */
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces = class MaxMovementSpeed_Forces extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.MaximumSpeed = behaviorData.MaximumSpeed !== undefined ? behaviorData.MaximumSpeed : Number("") || 0;
    this._behaviorData.CurrentSpeedX = Number("") || 0;
    this._behaviorData.CurrentSpeedY = Number("") || 0;
    this._behaviorData.CurrentSpeed = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.MaximumSpeed !== newBehaviorData.MaximumSpeed)
      this._behaviorData.MaximumSpeed = newBehaviorData.MaximumSpeed;
    if (oldBehaviorData.CurrentSpeedX !== newBehaviorData.CurrentSpeedX)
      this._behaviorData.CurrentSpeedX = newBehaviorData.CurrentSpeedX;
    if (oldBehaviorData.CurrentSpeedY !== newBehaviorData.CurrentSpeedY)
      this._behaviorData.CurrentSpeedY = newBehaviorData.CurrentSpeedY;
    if (oldBehaviorData.CurrentSpeed !== newBehaviorData.CurrentSpeed)
      this._behaviorData.CurrentSpeed = newBehaviorData.CurrentSpeed;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    MaximumSpeed: this._behaviorData.MaximumSpeed,
    CurrentSpeedX: this._behaviorData.CurrentSpeedX,
    CurrentSpeedY: this._behaviorData.CurrentSpeedY,
    CurrentSpeed: this._behaviorData.CurrentSpeed,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.MaximumSpeed !== undefined)
      this._behaviorData.MaximumSpeed = networkSyncData.props.MaximumSpeed;
    if (networkSyncData.props.CurrentSpeedX !== undefined)
      this._behaviorData.CurrentSpeedX = networkSyncData.props.CurrentSpeedX;
    if (networkSyncData.props.CurrentSpeedY !== undefined)
      this._behaviorData.CurrentSpeedY = networkSyncData.props.CurrentSpeedY;
    if (networkSyncData.props.CurrentSpeed !== undefined)
      this._behaviorData.CurrentSpeed = networkSyncData.props.CurrentSpeed;
  }

  // Properties:
  
  _getMaximumSpeed() {
    return this._behaviorData.MaximumSpeed !== undefined ? this._behaviorData.MaximumSpeed : Number("") || 0;
  }
  _setMaximumSpeed(newValue) {
    this._behaviorData.MaximumSpeed = newValue;
  }
  _getCurrentSpeedX() {
    return this._behaviorData.CurrentSpeedX !== undefined ? this._behaviorData.CurrentSpeedX : Number("") || 0;
  }
  _setCurrentSpeedX(newValue) {
    this._behaviorData.CurrentSpeedX = newValue;
  }
  _getCurrentSpeedY() {
    return this._behaviorData.CurrentSpeedY !== undefined ? this._behaviorData.CurrentSpeedY : Number("") || 0;
  }
  _setCurrentSpeedY(newValue) {
    this._behaviorData.CurrentSpeedY = newValue;
  }
  _getCurrentSpeed() {
    return this._behaviorData.CurrentSpeed !== undefined ? this._behaviorData.CurrentSpeed : Number("") || 0;
  }
  _setCurrentSpeed(newValue) {
    this._behaviorData.CurrentSpeed = newValue;
  }
}

/**
 * Shared data generated from Enforce max movement speed
 */
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.SharedData = class MaxMovementSpeed_ForcesSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpeedRestrictions_MaxMovementSpeed_ForcesSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpeedRestrictions_MaxMovementSpeed_ForcesSharedData = new gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.SharedData(
      initialData
    );
  }
  return instanceContainer._SpeedRestrictions_MaxMovementSpeed_ForcesSharedData;
}

// Methods:
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1[i].getAverageForce().getLength() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaximumSpeed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSpeedX((( gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1[0].getAverageForce().getX()))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSpeedY((( gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1[0].getAverageForce().getY()))
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentSpeed((( gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1[0].getAverageForce().getLength()))
}{for(var i = 0, len = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1[i].addForce(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpeedX() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaximumSpeed() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpeed(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpeedY() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaximumSpeed() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentSpeed(), 1);
}
}}

}


};

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpeedRestrictions"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpeedRestrictions"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("SpeedRestrictions::MaxMovementSpeed_Forces", gdjs.evtsExt__SpeedRestrictions__MaxMovementSpeed_Forces.MaxMovementSpeed_Forces);
