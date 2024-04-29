"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[6946],{"../ibm-products/src/components/Tearsheet/Tearsheet.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>deprecatedProps,b:()=>Tearsheet});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_global_js_utils_devtools__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../ibm-products/src/global/js/utils/devtools.js"),_global_js_utils_props_helper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ibm-products/src/global/js/utils/props-helper.js"),_settings__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../ibm-products/src/settings.js"),_carbon_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),_ActionSet__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../ibm-products/src/components/ActionSet/ActionSet.tsx"),_TearsheetShell__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../ibm-products/src/components/Tearsheet/TearsheetShell.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["influencerPosition","influencerWidth","verticalPosition"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var defaults_influencerPosition="left",defaults_influencerWidth="narrow",defaults_verticalPosition="lower",Tearsheet=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var _ref$influencerPositi=_ref.influencerPosition,influencerPosition=void 0===_ref$influencerPositi?defaults_influencerPosition:_ref$influencerPositi,_ref$influencerWidth=_ref.influencerWidth,influencerWidth=void 0===_ref$influencerWidth?defaults_influencerWidth:_ref$influencerWidth,_ref$verticalPosition=_ref.verticalPosition,verticalPosition=void 0===_ref$verticalPosition?defaults_verticalPosition:_ref$verticalPosition,rest=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TearsheetShell__WEBPACK_IMPORTED_MODULE_4__.hz,_objectSpread({},_objectSpread(_objectSpread(_objectSpread({},(0,_global_js_utils_devtools__WEBPACK_IMPORTED_MODULE_5__.n8)("Tearsheet")),rest),{},{influencerPosition,influencerWidth,verticalPosition,ref,size:"wide"})))}));(Tearsheet=_settings__WEBPACK_IMPORTED_MODULE_6__.K.checkComponentEnabled(Tearsheet,"Tearsheet")).displayName="Tearsheet";var deprecatedProps={verticalPosition:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["normal","lower"])};Tearsheet.propTypes=_objectSpread({actions:(0,_global_js_utils_props_helper__WEBPACK_IMPORTED_MODULE_1__.UL)([_ActionSet__WEBPACK_IMPORTED_MODULE_8__.Q.validateActions((function(){return"2xl"})),prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape(_objectSpread(_objectSpread({},_carbon_react__WEBPACK_IMPORTED_MODULE_2__.zxk.propTypes),{},{kind:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,loading:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,onClick:_carbon_react__WEBPACK_IMPORTED_MODULE_2__.zxk.propTypes.onClick})))]),ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,closeIconDescription:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired.if((function(_ref2){var actions=_ref2.actions,hasCloseIcon=_ref2.hasCloseIcon;return(0,_TearsheetShell__WEBPACK_IMPORTED_MODULE_4__.Li)(actions,hasCloseIcon)})),description:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,hasCloseIcon:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,influencer:prop_types__WEBPACK_IMPORTED_MODULE_7___default().element,influencerPosition:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["left","right"]),influencerWidth:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["narrow","wide"]),label:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,navigation:prop_types__WEBPACK_IMPORTED_MODULE_7___default().element,onClose:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func,open:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,portalTarget:_TearsheetShell__WEBPACK_IMPORTED_MODULE_4__.ri,selectorPrimaryFocus:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node},deprecatedProps),Tearsheet.__docgenInfo={description:"A tearsheet is a mostly full-screen type of dialog that keeps users\nin-context and focused by bringing actionable content front and center while\nrevealing parts of the UI behind it. There is also a narrow variant of the\ntearsheet.\n\nA tearsheet comprises up to 5 zones, allowing for flexibility depending on\nthe content: a heading area including a title, an optional navigation area\nthat sits just below the heading, an optional influencer which is a side\npanel on either the left or right side, the main content area, and a set of\naction buttons.",methods:[],displayName:"Tearsheet",props:{influencerPosition:{defaultValue:{value:"'left'",computed:!1},description:"The position of the influencer section, 'left' or 'right'.",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},influencerWidth:{defaultValue:{value:"'narrow'",computed:!1},description:"The width of the influencer: 'narrow' (the default) is 256px, and 'wide'\nis 320px.",type:{name:"enum",value:[{value:"'narrow'",computed:!1},{value:"'wide'",computed:!1}]},required:!1},verticalPosition:{defaultValue:{value:"'lower'",computed:!1},description:"**Deprecated**\n\nThe position of the top of tearsheet in the viewport. The 'normal'\nposition is a short distance down from the top of the\nviewport, leaving room at the top for a global header bar to show through\nfrom below. The 'lower' position (the default) provides a little extra room at the top\nto allow an action bar navigation or breadcrumbs to also show through.",type:{name:"enum",value:[{value:"'normal'",computed:!1},{value:"'lower'",computed:!1}]},required:!1},actions:{description:"The navigation actions to be shown as buttons in the action area at the\nbottom of the tearsheet. Each action is specified as an object with\noptional fields: 'label' to supply the button label, 'kind' to select the\nbutton kind (must be 'primary', 'secondary' or 'ghost'), 'loading' to\ndisplay a loading indicator, and 'onClick' to receive notifications when\nthe button is clicked. Additional fields in the object will be passed to\nthe Button component, and these can include 'disabled', 'ref', 'className',\nand any other Button props, except 'size'. Any other fields in the object will\nbe passed through to the button element as HTML attributes.\n\nSee https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api",type:{name:"custom",raw:"allPropTypes([\n  ActionSet.validateActions(() => '2xl'),\n  PropTypes.arrayOf(\n    PropTypes.shape({\n      ...Button.propTypes,\n      kind: PropTypes.oneOf([\n        'ghost',\n        'danger--ghost',\n        'secondary',\n        'danger',\n        'primary',\n      ]),\n      label: PropTypes.string,\n      loading: PropTypes.bool,\n      // we duplicate this Button prop to improve the DocGen here\n      onClick: Button.propTypes.onClick,\n    })\n  ),\n])"},required:!1},ariaLabel:{description:"The aria-label for the tearsheet, which is optional.\nif it is not passed, the title will be used as the aria-label.",type:{name:"string"},required:!1},className:{description:"An optional class or classes to be added to the outermost element.",type:{name:"string"},required:!1},closeIconDescription:{description:"The accessibility title for the close icon (if shown).\n\n**Note:** This prop is only required if a close icon is shown, i.e. if\nthere are a no navigation actions and/or hasCloseIcon is true.",type:{name:"string"},required:!0},description:{description:"A description of the flow, displayed in the header area of the tearsheet.",type:{name:"node"},required:!1},hasCloseIcon:{description:'Enable a close icon (\'x\') in the header area of the tearsheet. By default,\n(when this prop is omitted, or undefined or null) a tearsheet does not\ndisplay a close icon if there are navigation actions ("transactional\ntearsheet") and displays one if there are no navigation actions ("passive\ntearsheet"), and that behavior can be overridden if required by setting\nthis prop to either true or false.',type:{name:"bool"},required:!1},influencer:{description:"The content for the influencer section of the tearsheet, displayed\nalongside the main content. This is typically a menu, or filter, or\nprogress indicator, or similar.",type:{name:"element"},required:!1},label:{description:"A label for the tearsheet, displayed in the header area of the tearsheet\nto maintain context for the tearsheet (e.g. as the title changes from page\nto page of a multi-page task).",type:{name:"node"},required:!1},navigation:{description:"Navigation content, such as a set of tabs, to be displayed at the bottom\nof the header area of the tearsheet.",type:{name:"element"},required:!1},onClose:{description:"An optional handler that is called when the user closes the tearsheet (by\nclicking the close button, if enabled, or clicking outside, if enabled).\nReturning `false` here prevents the modal from closing.",type:{name:"func"},required:!1},open:{description:"Specifies whether the tearsheet is currently open.",type:{name:"bool"},required:!1},portalTarget:{description:"The DOM element that the tearsheet should be rendered within. Defaults to document.body.",type:{name:"custom",raw:"typeof Element === 'undefined'\n? PropTypes.object\n: PropTypes.instanceOf(Element)"},required:!1},selectorPrimaryFocus:{description:"Specify a CSS selector that matches the DOM element that should be focused when the Modal opens",type:{name:"string"},required:!1},title:{description:"The main title of the tearsheet, displayed in the header area.",type:{name:"node"},required:!1}}}},"../ibm-products/src/components/Tearsheet/TearsheetNarrow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>TearsheetNarrow,Y:()=>deprecatedProps});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),_global_js_utils_devtools__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../ibm-products/src/global/js/utils/devtools.js"),_global_js_utils_props_helper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../ibm-products/src/global/js/utils/props-helper.js"),_settings__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../ibm-products/src/settings.js"),_carbon_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),_ActionSet__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../ibm-products/src/components/ActionSet/ActionSet.tsx"),_TearsheetShell__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../ibm-products/src/components/Tearsheet/TearsheetShell.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["verticalPosition"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var defaults_verticalPosition="lower",TearsheetNarrow=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var _ref$verticalPosition=_ref.verticalPosition,verticalPosition=void 0===_ref$verticalPosition?defaults_verticalPosition:_ref$verticalPosition,rest=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TearsheetShell__WEBPACK_IMPORTED_MODULE_4__.hz,_objectSpread({},_objectSpread(_objectSpread(_objectSpread({},(0,_global_js_utils_devtools__WEBPACK_IMPORTED_MODULE_5__.n8)("TearsheetNarrow")),(0,_global_js_utils_props_helper__WEBPACK_IMPORTED_MODULE_1__.eG)(rest,_TearsheetShell__WEBPACK_IMPORTED_MODULE_4__.Y0)),{},{verticalPosition,ref,size:"narrow"})))}));(TearsheetNarrow=_settings__WEBPACK_IMPORTED_MODULE_6__.K.checkComponentEnabled(TearsheetNarrow,"TearsheetNarrow")).displayName="TearsheetNarrow";var deprecatedProps={verticalPosition:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["normal","lower"])};TearsheetNarrow.propTypes=_objectSpread({actions:(0,_global_js_utils_props_helper__WEBPACK_IMPORTED_MODULE_1__.UL)([_ActionSet__WEBPACK_IMPORTED_MODULE_8__.Q.validateActions((function(){return"lg"})),prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape(_objectSpread(_objectSpread({},_carbon_react__WEBPACK_IMPORTED_MODULE_2__.zxk.propTypes),{},{kind:prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,loading:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,onClick:_carbon_react__WEBPACK_IMPORTED_MODULE_2__.zxk.propTypes.onClick})))]),ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string,closeIconDescription:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired.if((function(_ref2){var actions=_ref2.actions,hasCloseIcon=_ref2.hasCloseIcon;return(0,_TearsheetShell__WEBPACK_IMPORTED_MODULE_4__.Li)(actions,hasCloseIcon)})),description:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,hasCloseIcon:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node,onClose:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func,open:prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool,portalTarget:_TearsheetShell__WEBPACK_IMPORTED_MODULE_4__.ri,title:prop_types__WEBPACK_IMPORTED_MODULE_7___default().node},deprecatedProps),TearsheetNarrow.__docgenInfo={description:"A narrow tearsheet is a slimmer variant of the tearsheet, providing a dialog\nthat keeps users in-context and focused by bringing actionable content front\nand center while revealing more of the UI behind it.\n\nA narrow tearsheet comprises 3 zones: a heading area including a title, the\nmain content area, and a set of action buttons.",methods:[],displayName:"TearsheetNarrow",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:"The navigation actions to be shown as buttons in the action area at the\nbottom of the tearsheet. Each action is specified as an object with\noptional fields: 'label' to supply the button label, 'kind' to select the\nbutton kind (must be 'primary', 'secondary' or 'ghost'), 'loading' to\ndisplay a loading indicator, and 'onClick' to receive notifications when\nthe button is clicked. Additional fields in the object will be passed to\nthe Button component, and these can include 'disabled', 'ref', 'className',\nand any other Button props. Any other fields in the object will be passed\nthrough to the button element as HTML attributes.\n\nSee https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api",type:{name:"custom",raw:"allPropTypes([\n  /**@ts-ignore */\n  ActionSet.validateActions(() => 'lg'),\n  PropTypes.arrayOf(\n    PropTypes.shape({\n      ...Button.propTypes,\n      kind: PropTypes.oneOf([\n        'ghost',\n        'danger--ghost',\n        'secondary',\n        'danger',\n        'primary',\n      ]),\n      label: PropTypes.string,\n      loading: PropTypes.bool,\n      // we duplicate this Button prop to improve the DocGen here\n      onClick: Button.propTypes.onClick,\n    })\n  ),\n])"}},ariaLabel:{required:!1,tsType:{name:"string"},description:"The aria-label for the tearsheet, which is optional.\nif it is not passed, the title will be used as the aria-label.",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"An optional class or classes to be added to the outermost element.",type:{name:"string"}},closeIconDescription:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  hasCloseIcon: true;\n  closeIconDescription: string;\n}",signature:{properties:[{key:"hasCloseIcon",value:{name:"literal",value:"true",required:!0}},{key:"closeIconDescription",value:{name:"string",required:!0}}]}},description:"The accessibility title for the close icon (if shown).\n\n**Note:** This prop is only required if a close icon is shown, i.e. if\nthere are a no navigation actions and/or hasCloseIcon is true.",type:{name:"string"}},description:{required:!1,tsType:{name:"ReactNode"},description:"A description of the flow, displayed in the header area of the tearsheet.",type:{name:"node"}},hasCloseIcon:{required:!1,tsType:{name:"boolean"},description:"Enable a close icon ('x') in the header area of the tearsheet. By default,\na tearsheet does not display a close icon, but one should be enabled if\nthe tearsheet is read-only or has no navigation actions (sometimes called\na \"passive tearsheet\").",type:{name:"bool"}},label:{required:!1,tsType:{name:"ReactNode"},description:"A label for the tearsheet, displayed in the header area of the tearsheet\nto maintain context for the tearsheet (e.g. as the title changes from page\nto page of a multi-page task).",type:{name:"node"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"An optional handler that is called when the user closes the tearsheet (by\nclicking the close button, if enabled, or clicking outside, if enabled).\nReturning `false` here prevents the modal from closing.",type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the tearsheet is currently open.",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM element that the tearsheet should be rendered within. Defaults to document.body.",type:{name:"custom",raw:"typeof Element === 'undefined'\n? PropTypes.object\n: PropTypes.instanceOf(Element)"}},title:{required:!1,tsType:{name:"ReactNode"},description:"The main title of the tearsheet, displayed in the header area.",type:{name:"node"}},verticalPosition:{required:!1,tsType:{name:"union",raw:"'normal' | 'lower'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'lower'"}]},description:"**Deprecated**\n\nThe position of the top of tearsheet in the viewport. The 'normal'\nposition is a short distance down from the top of the\nviewport, leaving room at the top for a global header bar to show through\nfrom below. The 'lower' position (the default) provides a little extra room at the top\nto allow an action bar navigation or breadcrumbs to also show through.",defaultValue:{value:"'lower'",computed:!1},type:{name:"enum",value:[{value:"'normal'",computed:!1},{value:"'lower'",computed:!1}]}}},composes:["PropsWithChildren"]}},"../ibm-products/src/global/js/utils/getNodeTextContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{$:()=>getNodeTextContent});var getNodeTextContent=function getNodeTextContent(node){if(null==node)return"";switch(_typeof(node)){case"string":case"number":return node.toString();case"object":return node instanceof Array?node.map(getNodeTextContent).join(""):"props"in node?getNodeTextContent(node.props.children):"";case"function":return getNodeTextContent(node());default:return""}}}}]);