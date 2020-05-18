'use strict';


//polyphils
import 'nodelist-foreach-polyfill';


//All header manipulations functional
import headerActons from './modules/header';
headerActons();

//Repair popUp window actions
import repairPopUpActions from './modules/repiarPopUp';
repairPopUpActions();

//Feedback forms
import * as feedBackFormObj from './modules/feedbackForm';
feedBackFormObj.headerForm.init();
feedBackFormObj.letsGoForm.init();
feedBackFormObj.actionForm.init();
feedBackFormObj.repairCostForm.init();
feedBackFormObj.askQuestionForm.init();
feedBackFormObj.consultationForm.init();

//Formula block actions
import formulaBlockActions from './modules/formula';
formulaBlockActions();

//Repair types block slider
import repairTypesSlider from './modules/repairTypesSlider';
repairTypesSlider.init();

//Accordion actions function
import accordionSwitch from './modules/accordion';
accordionSwitch();

//Consultation popup window show function
import consultationPopUp from './modules/popUpConsultation'
consultationPopUp();

