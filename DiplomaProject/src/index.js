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


//Repair types block tabs
import repairTabs from './modules/repairTabs';
repairTabs();

//Portfolio slider insertion
import portfolioSlider from './modules/portfolioSlider';
portfolioSlider();

//Priblems block motion insertion
import problemsMotion from './modules/problems';
problemsMotion();

//Documents block
import documentSlider from './modules/documentsBlock';
documentSlider();

//Reviews block insertion
import reviewSlider from './modules/reviews';
reviewSlider();

//Accordion actions function
import accordionSwitch from './modules/accordion';
accordionSwitch();

//Partners block functional insertion
import partnersSlider from './modules/pertners';
partnersSlider();

//Consultation popup window show function
import consultationPopUp from './modules/popUpConsultation'
consultationPopUp();

//Popup window of the documents block
import popUpDocsWindow from './modules/documentsPopUpSlider';
popUpDocsWindow();

