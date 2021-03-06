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

//Repair types block tabs
import repairTabs from './modules/repairTabs';
repairTabs();

//Portfolio slider insertion
import portfolioSlider from './modules/portfolioSlider';
portfolioSlider();

//Priblems block motion insertion
import problemsMotion from './modules/problems';
problemsMotion();

//Disign block insrtion
import designBlock from './modules/designs';
designBlock();

//Documents block
import documentSlider from './modules/documentsBlock';
documentSlider();

//Problems slider, mobile version
import mobProblemSlider from './modules/problemsMob';
mobProblemSlider();

//Reviews block insertion
import reviewSlider from './modules/reviews';
reviewSlider();

//Scheme block insertion
import schemeBlock from './modules/scheme';
schemeBlock();

//Accordion actions function
import accordionSwitch from './modules/accordion';
accordionSwitch();

//Partners block functional insertion
import partnersSlider from './modules/pertners';
partnersSlider();

//include formula modile version functional
import formulaMobSlider from './modules/formulaMob';
formulaMobSlider();

//Consultation popup window show function
import consultationPopUp from './modules/popUpConsultation'
consultationPopUp();

//Popup window of the documents block
import popUpDocsWindow from './modules/documentsPopUpSlider';
popUpDocsWindow();


