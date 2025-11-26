/********************* 
 * Stroop_Test1 *
 *********************/


// store info about the experiment session:
let expName = 'stroop_test1';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(conslusionRoutineBegin());
flowScheduler.add(conslusionRoutineEachFrame());
flowScheduler.add(conslusionRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stimuli_stroop.xlsx', 'path': 'stimuli_stroop.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_text;
var key_resp;
var trialClock;
var fix_cross;
var stimul;
var stroop_answer;
var feedbackClock;
var msg;
var feedback_text;
var feedback_resp;
var probel;
var conslusionClock;
var conclusion_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'пу-пу-пу\nклассная и понятная иструкция\nжмать пробел, чтобы начать струпчик',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fix_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  stimul = new visual.TextStim({
    win: psychoJS.window,
    name: 'stimul',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  stroop_answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  msg = "";
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  probel = new visual.TextStim({
    win: psychoJS.window,
    name: 'probel',
    text: 'чтобы продолжить, нажмите пробел',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "conslusion"
  conslusionClock = new util.Clock();
  conclusion_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'conclusion_text',
    text: 'Подождите данные сохраняются',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(key_resp);
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    key_resp.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimuli_stroop.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _stroop_answer_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    stimul.setColor(new util.Color(color));
    stimul.setText(word);
    stroop_answer.keys = undefined;
    stroop_answer.rt = undefined;
    _stroop_answer_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fix_cross);
    trialComponents.push(stimul);
    trialComponents.push(stroop_answer);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross* updates
    if (t >= 0.0 && fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross.tStart = t;  // (not accounting for frame time here)
      fix_cross.frameNStart = frameN;  // exact frame index
      
      fix_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross.setAutoDraw(false);
    }
    
    // *stimul* updates
    if (t >= 0.5 && stimul.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimul.tStart = t;  // (not accounting for frame time here)
      stimul.frameNStart = frameN;  // exact frame index
      
      stimul.setAutoDraw(true);
    }
    
    
    // *stroop_answer* updates
    if (t >= 0.5 && stroop_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stroop_answer.tStart = t;  // (not accounting for frame time here)
      stroop_answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stroop_answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stroop_answer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stroop_answer.clearEvents(); });
    }
    
    if (stroop_answer.status === PsychoJS.Status.STARTED) {
      let theseKeys = stroop_answer.getKeys({keyList: ['y', 'g', 'r', 'b'], waitRelease: false});
      _stroop_answer_allKeys = _stroop_answer_allKeys.concat(theseKeys);
      if (_stroop_answer_allKeys.length > 0) {
        stroop_answer.keys = _stroop_answer_allKeys[_stroop_answer_allKeys.length - 1].name;  // just the last key pressed
        stroop_answer.rt = _stroop_answer_allKeys[_stroop_answer_allKeys.length - 1].rt;
        stroop_answer.duration = _stroop_answer_allKeys[_stroop_answer_allKeys.length - 1].duration;
        // was this correct?
        if (stroop_answer.keys == cor_resp) {
            stroop_answer.corr = 1;
        } else {
            stroop_answer.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (stroop_answer.keys === undefined) {
      if (['None','none',undefined].includes(cor_resp)) {
         stroop_answer.corr = 1;  // correct non-response
      } else {
         stroop_answer.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stroop_answer.corr, level);
    }
    psychoJS.experiment.addData('stroop_answer.keys', stroop_answer.keys);
    psychoJS.experiment.addData('stroop_answer.corr', stroop_answer.corr);
    if (typeof stroop_answer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stroop_answer.rt', stroop_answer.rt);
        psychoJS.experiment.addData('stroop_answer.duration', stroop_answer.duration);
        routineTimer.reset();
        }
    
    stroop_answer.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _feedback_resp_allKeys;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    if ((stroop_answer.corr === 1)) {
        msg = `Correct! RT= ${stroop_answer.rt}`;
    } else {
        msg = "Wrong!";
    }
    feedback_text.setText(msg);
    feedback_resp.keys = undefined;
    feedback_resp.rt = undefined;
    _feedback_resp_allKeys = [];
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    feedbackComponents.push(feedback_resp);
    feedbackComponents.push(probel);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    
    // *feedback_resp* updates
    if (t >= 0.0 && feedback_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_resp.tStart = t;  // (not accounting for frame time here)
      feedback_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { feedback_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { feedback_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { feedback_resp.clearEvents(); });
    }
    
    if (feedback_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = feedback_resp.getKeys({keyList: ['space'], waitRelease: false});
      _feedback_resp_allKeys = _feedback_resp_allKeys.concat(theseKeys);
      if (_feedback_resp_allKeys.length > 0) {
        feedback_resp.keys = _feedback_resp_allKeys[_feedback_resp_allKeys.length - 1].name;  // just the last key pressed
        feedback_resp.rt = _feedback_resp_allKeys[_feedback_resp_allKeys.length - 1].rt;
        feedback_resp.duration = _feedback_resp_allKeys[_feedback_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *probel* updates
    if (t >= 0.0 && probel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probel.tStart = t;  // (not accounting for frame time here)
      probel.frameNStart = frameN;  // exact frame index
      
      probel.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(feedback_resp.corr, level);
    }
    psychoJS.experiment.addData('feedback_resp.keys', feedback_resp.keys);
    if (typeof feedback_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('feedback_resp.rt', feedback_resp.rt);
        psychoJS.experiment.addData('feedback_resp.duration', feedback_resp.duration);
        routineTimer.reset();
        }
    
    feedback_resp.stop();
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var conslusionComponents;
function conslusionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'conslusion' ---
    t = 0;
    conslusionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // Отключаем скачивание через браузер
    psychoJS._saveResults = 0;
    
    // Именуем файлы
    let filename = psychoJS.experiment._participant +  '_' + psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    // Достаем дата обджект из эксперимента
    let dataObj = psychoJS._experiment._trialsData;
    // Конвертируем в csv
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    // Отправляем на OSF через DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
         },   
         body: JSON.stringify({
            experimentID: '3BzR1A2aAJOP', // * DATAPIPE EXP ID*
            filename: filename, 
            data: data,
         }),
    }).then(response => response.json()).then(data => {
    // Кидаем в консоль результат и выходим из эксперимента
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('conslusion.started', globalClock.getTime());
    // keep track of which components have finished
    conslusionComponents = [];
    conslusionComponents.push(conclusion_text);
    
    conslusionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function conslusionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'conslusion' ---
    // get current time
    t = conslusionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *conclusion_text* updates
    if (t >= 0.0 && conclusion_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      conclusion_text.tStart = t;  // (not accounting for frame time here)
      conclusion_text.frameNStart = frameN;  // exact frame index
      
      conclusion_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (conclusion_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      conclusion_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    conslusionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function conslusionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'conslusion' ---
    conslusionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('conslusion.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
