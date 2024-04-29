"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[2454],{"../ibm-products/src/components/Tearsheet/TearsheetShell.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hz:()=>TearsheetShell,YB:()=>deprecatedProps,ri:()=>portalType,Li:()=>tearsheetHasCloseIcon,Y0:()=>tearsheetShellWideProps});var react=__webpack_require__("../../node_modules/react/index.js"),useResizeObserver=__webpack_require__("../ibm-products/src/global/js/hooks/useResizeObserver.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),settings=__webpack_require__("../ibm-products/src/settings.js"),pconsole=__webpack_require__("../ibm-products/src/global/js/utils/pconsole.js"),getNodeTextContent=__webpack_require__("../ibm-products/src/global/js/utils/getNodeTextContent.js"),es=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),ActionSet=__webpack_require__("../ibm-products/src/components/ActionSet/ActionSet.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["alwaysRender","children","element","neverRender"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var isEmpty=function isEmpty(children){var result=!0;return react.Children.forEach(children,(function(child){var _child$type,_child$props;child&&(result&&(result="Wrap"===(null==child||null===(_child$type=child.type)||void 0===_child$type?void 0:_child$type.displayName)&&isEmpty(null==child||null===(_child$props=child.props)||void 0===_child$props?void 0:_child$props.children)))})),result},defaults_element="div",Wrap=react.forwardRef((function(_ref,ref){var alwaysRender=_ref.alwaysRender,children=_ref.children,_ref$element=_ref.element,Wrapper=void 0===_ref$element?defaults_element:_ref$element,neverRender=_ref.neverRender,rest=_objectWithoutProperties(_ref,_excluded);return!neverRender&&!isEmpty(children)||alwaysRender?(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},rest),{},{ref,children})):null}));Wrap.displayName="Wrap",Wrap.propTypes={alwaysRender:prop_types_default().bool,children:prop_types_default().node,element:prop_types_default().elementType,neverRender:prop_types_default().bool},Wrap.__docgenInfo={description:"A simple conditional wrapper that encloses its children in a <div> (or other\nelement if specified), passing any supplied attributes to the <div> (or other\nelement). The component renders nothing at all if there are no children or\nthe children are empty/falsy, or if all the non-falsy children are themselves\nWrap components that do not wish to render. This behavior can be overridden\nby setting neverRender or alwaysRender to true. Note that if a ref is passed,\nthe ref.current will be set to the wrapper element if it renders, and will\nremain undefined if it does not render.",methods:[],displayName:"Wrap",props:{element:{defaultValue:{value:"'div'",computed:!1},description:"The element name or component to use as a wrapper for the content.",type:{name:"elementType"},required:!1},alwaysRender:{description:"Specify whether the wrapper element should render even if there are no\nchildren or the children are themselves empty wrappers. Useful if there\nare some conditions in which the wrapper element is still required. Note\nthat this prop takes precedence over neverRender if both are set to true.",type:{name:"bool"},required:!1},children:{description:"The content of the wrapper element. If no children are supplied, or the\nresulting value(s) are falsy, or if all the non-falsy children are Wrap\ncomponents that decide not to render, nothing will be rendered in the DOM.",type:{name:"node"},required:!1},neverRender:{description:"Specify whether nothing should be rendered even if there are children\nin the content. Useful if there are some circumstances in which the\ncomponent should not render at all. Note that if alwaysRender is also\nset to true then it will take precedence and the wrapper element and\ncontent will be rendered.",type:{name:"bool"},required:!1}}};var usePortalTarget=__webpack_require__("../ibm-products/src/global/js/hooks/usePortalTarget.js"),useFocus=__webpack_require__("../ibm-products/src/global/js/hooks/useFocus.js");function TearsheetShell_typeof(o){return TearsheetShell_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},TearsheetShell_typeof(o)}var TearsheetShell_excluded=["actions","ariaLabel","children","className","closeIconDescription","description","hasCloseIcon","headerActions","influencer","influencerPosition","influencerWidth","label","navigation","onClose","open","portalTarget","selectorPrimaryFocus","size","slug","title","verticalPosition"];function TearsheetShell_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function TearsheetShell_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?TearsheetShell_ownKeys(Object(t),!0).forEach((function(r){TearsheetShell_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TearsheetShell_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function TearsheetShell_defineProperty(obj,key,value){return(key=function TearsheetShell_toPropertyKey(arg){var key=function TearsheetShell_toPrimitive(input,hint){if("object"!==TearsheetShell_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==TearsheetShell_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===TearsheetShell_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TearsheetShell_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function TearsheetShell_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var bc="".concat(settings.K.prefix,"--tearsheet"),stack={open:[],all:[],sizes:[]},tearsheetShellWideProps=["headerActions","influencer","influencerPosition","influencerWidth","navigation"],tearsheetIsPassive=function tearsheetIsPassive(actions){return!actions||!(null!=actions&&actions.length)},tearsheetHasCloseIcon=function tearsheetHasCloseIcon(actions,hasCloseIcon){return null!=hasCloseIcon?hasCloseIcon:tearsheetIsPassive(actions)},TearsheetShell=react.forwardRef((function(_ref,ref){var actions=_ref.actions,ariaLabel=_ref.ariaLabel,children=_ref.children,className=_ref.className,closeIconDescription=_ref.closeIconDescription,description=_ref.description,hasCloseIcon=_ref.hasCloseIcon,headerActions=_ref.headerActions,influencer=_ref.influencer,influencerPosition=_ref.influencerPosition,influencerWidth=_ref.influencerWidth,label=_ref.label,navigation=_ref.navigation,onClose=_ref.onClose,open=_ref.open,portalTargetIn=_ref.portalTarget,selectorPrimaryFocus=_ref.selectorPrimaryFocus,size=_ref.size,slug=_ref.slug,title=_ref.title,verticalPosition=_ref.verticalPosition,rest=TearsheetShell_objectWithoutProperties(_ref,TearsheetShell_excluded),carbonPrefix=(0,es.AKj)(),bcModalHeader="".concat(carbonPrefix,"--modal-header"),renderPortalUse=(0,usePortalTarget.T)(portalTargetIn),localRef=(0,react.useRef)(),resizer=(0,react.useRef)(null),modalBodyRef=(0,react.useRef)(null),modalRef=ref||localRef,width=(0,useResizeObserver.y)(resizer).width,_useFocus=(0,useFocus.K)(modalRef),firstElement=_useFocus.firstElement,keyDownListener=_useFocus.keyDownListener,wide="wide"===size,_useState2=_slicedToArray((0,react.useState)(0),2),depth=_useState2[0],setDepth=_useState2[1],_useState4=_slicedToArray((0,react.useState)(0),2),position=_useState4[0],setPosition=_useState4[1],prevDepth=(0,react.useRef)();(0,react.useEffect)((function(){prevDepth.current=depth}));var isPassive=tearsheetIsPassive(actions),effectiveHasCloseIcon=tearsheetHasCloseIcon(actions,hasCloseIcon);function handleStackChange(newDepth,newPosition){setDepth(newDepth),setPosition(newPosition)}if(handleStackChange.checkFocus=function(){open&&position===depth&&modalRef.current&&!modalRef.current.contains(document.activeElement)&&handleStackChange.claimFocus()},handleStackChange.claimFocus=function(){null==firstElement||firstElement.focus()},(0,react.useEffect)((function(){open&&setTimeout((function(){null==firstElement||firstElement.focus()}),0)}),[open]),(0,react.useEffect)((function(){open&&position!==depth&&setTimeout((function(){null==firstElement||firstElement.focus()}),0)}),[position,depth,firstElement,open]),(0,react.useEffect)((function(){var notify=function notify(){return stack.all.forEach((function(handler){handler(Math.min(stack.open.length,3),stack.open.indexOf(handler)+1),handler.checkFocus()}))};return stack.all.push(handleStackChange),stack.sizes.push(size),open&&(stack.open.push(handleStackChange),notify()),function cleanup(){stack.all.splice(stack.all.indexOf(handleStackChange),1),stack.sizes.splice(stack.sizes.indexOf(size),1);var openIndex=stack.open.indexOf(handleStackChange);openIndex>=0&&(stack.open.splice(openIndex,1),notify())}}),[open,size]),position<=depth){var includeHeader=label||title||description||headerActions||navigation||effectiveHasCloseIcon,includeActions=actions&&(null==actions?void 0:actions.length)>0,areAllSameSizeVariant=function areAllSameSizeVariant(){return 1===new Set(stack.sizes).size};return renderPortalUse((0,jsx_runtime.jsxs)(es.lpG,TearsheetShell_objectSpread(TearsheetShell_objectSpread({},rest),{},{"aria-label":ariaLabel||(0,getNodeTextContent.$)(title),className:classnames_default()(bc,className,TearsheetShell_defineProperty(TearsheetShell_defineProperty(TearsheetShell_defineProperty(TearsheetShell_defineProperty(TearsheetShell_defineProperty({},"".concat(bc,"--stacked-").concat(position,"-of-").concat(depth),depth>1||1===depth&&prevDepth.current>1),"".concat(bc,"--wide"),wide),"".concat(bc,"--narrow"),!wide),"".concat(bc,"--has-slug"),slug),"".concat(bc,"--has-close"),effectiveHasCloseIcon)),slug,style:function setScaleValues(){return areAllSameSizeVariant()?TearsheetShell_defineProperty(TearsheetShell_defineProperty({},"--".concat(bc,"--stacking-scale-factor-single"),(width-32)/width),"--".concat(bc,"--stacking-scale-factor-double"),(width-64)/width):TearsheetShell_defineProperty(TearsheetShell_defineProperty({},"--".concat(bc,"--stacking-scale-factor-single"),1),"--".concat(bc,"--stacking-scale-factor-double"),1)}(),containerClassName:classnames_default()("".concat(bc,"__container"),TearsheetShell_defineProperty(TearsheetShell_defineProperty({},"".concat(bc,"__container--lower"),"lower"===verticalPosition),"".concat(bc,"__container--mixed-size-stacking"),!areAllSameSizeVariant())),onClose,open,selectorPrimaryFocus,onFocus:function handleFocus(){position<depth&&stack.open[stack.open.length-1].claimFocus()},onKeyDown:keyDownListener,preventCloseOnClickOutside:!isPassive,ref:modalRef,selectorsFloatingMenus:[".".concat(carbonPrefix,"--overflow-menu-options"),".".concat(carbonPrefix,"--tooltip"),".flatpickr-calendar",".".concat(bc,"__container")],size:"sm",children:[includeHeader&&(0,jsx_runtime.jsxs)(es.xBx,{className:classnames_default()("".concat(bc,"__header"),TearsheetShell_defineProperty(TearsheetShell_defineProperty({},"".concat(bc,"__header--with-close-icon"),effectiveHasCloseIcon),"".concat(bc,"__header--with-nav"),navigation)),closeClassName:classnames_default()(TearsheetShell_defineProperty({},"".concat(bc,"__header--no-close-icon"),!effectiveHasCloseIcon)),closeModal:onClose,iconDescription:closeIconDescription,children:[(0,jsx_runtime.jsxs)(Wrap,{className:"".concat(bc,"__header-content"),element:wide?es.mh4:void 0,children:[(0,jsx_runtime.jsxs)(Wrap,{className:"".concat(bc,"__header-fields"),children:[(0,jsx_runtime.jsx)(Wrap,{element:"h2",className:"".concat(bcModalHeader,"__label"),children:label}),(0,jsx_runtime.jsx)(Wrap,{element:"h3",className:classnames_default()("".concat(bcModalHeader,"__heading"),"".concat(bc,"__heading")),children:title}),(0,jsx_runtime.jsx)(Wrap,{className:"".concat(bc,"__header-description"),children:description})]}),(0,jsx_runtime.jsx)(Wrap,{className:"".concat(bc,"__header-actions"),children:headerActions})]}),(0,jsx_runtime.jsx)(Wrap,{className:"".concat(bc,"__header-navigation"),children:navigation})]}),(0,jsx_runtime.jsxs)(Wrap,{ref:modalBodyRef,className:"".concat(carbonPrefix,"--modal-content ").concat(bc,"__body"),children:[(0,jsx_runtime.jsx)(Wrap,{className:classnames_default()(TearsheetShell_defineProperty(TearsheetShell_defineProperty({},"".concat(bc,"__influencer"),!0),"".concat(bc,"__influencer--wide"),"wide"===influencerWidth)),neverRender:"right"===influencerPosition,children:influencer}),(0,jsx_runtime.jsxs)(Wrap,{className:"".concat(bc,"__right"),children:[(0,jsx_runtime.jsxs)(Wrap,{className:"".concat(bc,"__main"),alwaysRender:includeActions,children:[(0,jsx_runtime.jsx)(Wrap,{className:"".concat(bc,"__content"),alwaysRender:influencer&&"right"===influencerPosition,children}),(0,jsx_runtime.jsx)(Wrap,{className:classnames_default()(TearsheetShell_defineProperty(TearsheetShell_defineProperty({},"".concat(bc,"__influencer"),!0),"".concat(bc,"__influencer--wide"),"wide"===influencerWidth)),neverRender:"right"!==influencerPosition,children:influencer})]}),includeActions&&(0,jsx_runtime.jsx)(Wrap,{className:"".concat(bc,"__button-container"),children:(0,jsx_runtime.jsx)(ActionSet.Q,{actions,buttonSize:wide?"2xl":null,className:"".concat(bc,"__buttons"),size:wide?"2xl":"lg","aria-hidden":!open})})]})]}),(0,jsx_runtime.jsx)("div",{className:"".concat(bc,"__resize-detector"),ref:resizer})]})))}return pconsole.ZP.warn("Tearsheet not rendered: maximum stacking depth exceeded."),null}));TearsheetShell.displayName="TearsheetShell";var portalType="undefined"==typeof Element?prop_types_default().object:prop_types_default().instanceOf(Element),deprecatedProps={verticalPosition:prop_types_default().oneOf(["normal","lower"])};TearsheetShell.propTypes=TearsheetShell_objectSpread({actions:prop_types_default().arrayOf(prop_types_default().shape(TearsheetShell_objectSpread(TearsheetShell_objectSpread({},es.zxk.propTypes),{},{kind:prop_types_default().oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:prop_types_default().string,loading:prop_types_default().bool,onClick:es.zxk.propTypes.onClick}))),children:prop_types_default().node,className:prop_types_default().string,closeIconDescription:prop_types_default().string.isRequired.if((function(_ref4){var actions=_ref4.actions,hasCloseIcon=_ref4.hasCloseIcon;return tearsheetHasCloseIcon(actions,hasCloseIcon)})),description:prop_types_default().node,hasCloseIcon:prop_types_default().bool,headerActions:prop_types_default().element,influencer:prop_types_default().element,influencerPosition:prop_types_default().oneOf(["left","right"]),influencerWidth:prop_types_default().oneOf(["narrow","wide"]),label:prop_types_default().node,navigation:prop_types_default().element,onClose:prop_types_default().func,open:prop_types_default().bool,portalTarget:portalType,size:prop_types_default().oneOf(["narrow","wide"]).isRequired,slug:prop_types_default().node,title:prop_types_default().node},deprecatedProps),TearsheetShell.__docgenInfo={description:"TearSheetShell is used internally by TearSheet and TearSheetNarrow\n\nThe component is not public.\n\nSee the canvas tab for the component API details.",methods:[],displayName:"TearsheetShell",props:{actions:{description:"The actions to be shown as buttons in the action area at the bottom of the\ntearsheet. Each action is specified as an object with optional fields\n'label' to supply the button label, 'kind' to select the button kind (must\nbe 'primary', 'secondary' or 'ghost'), 'loading' to display a loading\nindicator, and 'onClick' to receive notifications when the button is\nclicked. Additional fields in the object will be passed to the Button\ncomponent, and these can include 'disabled', 'ref', 'className', and any\nother Button props. Any other fields in the object will be passed through\nto the button element as HTML attributes.\n\nSee https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api",type:{name:"arrayOf",value:{name:"shape",value:{kind:{name:"enum",value:[{value:"'ghost'",computed:!1},{value:"'danger--ghost'",computed:!1},{value:"'secondary'",computed:!1},{value:"'danger'",computed:!1},{value:"'primary'",computed:!1}],required:!1},label:{name:"string",required:!1},loading:{name:"bool",required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1}}}},required:!1},children:{description:"The main content of the tearsheet.",type:{name:"node"},required:!1},className:{description:"An optional class or classes to be added to the outermost element.",type:{name:"string"},required:!1},closeIconDescription:{description:"The accessibility title for the close icon (if shown).\n\n**Note:** This prop is only required if a close icon is shown, i.e. if\nthere are a no navigation actions and/or hasCloseIcon is true.",type:{name:"string"},required:!0},description:{description:"A description of the flow, displayed in the header area of the tearsheet.",type:{name:"node"},required:!1},hasCloseIcon:{description:'Enable a close icon (\'x\') in the header area of the tearsheet. By default,\n(when this prop is omitted, or undefined or null) a tearsheet does not\ndisplay a close icon if there are navigation actions ("transactional\ntearsheet") and displays one if there are no navigation actions ("passive\ntearsheet"), and that behavior can be overridden if required by setting\nthis prop to either true or false.',type:{name:"bool"},required:!1},headerActions:{description:"The content for the header actions area, displayed alongside the title in\nthe header area of the tearsheet. This is typically a drop-down, or a set\nof small buttons, or similar. NB the headerActions is only applicable for\nwide tearsheets.",type:{name:"element"},required:!1},influencer:{description:"The content for the influencer section of the tearsheet, displayed\nalongside the main content. This is typically a menu, or filter, or\nprogress indicator, or similar. NB the influencer is only applicable for\nwide tearsheets.",type:{name:"element"},required:!1},influencerPosition:{description:"The position of the influencer section, 'left' or 'right'.",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},influencerWidth:{description:"The width of the influencer: 'narrow' (the default) is 256px, and 'wide'\nis 320px.",type:{name:"enum",value:[{value:"'narrow'",computed:!1},{value:"'wide'",computed:!1}]},required:!1},label:{description:"A label for the tearsheet, displayed in the header area of the tearsheet\nto maintain context for the tearsheet (e.g. as the title changes from page\nto page of a multi-page task).",type:{name:"node"},required:!1},navigation:{description:"Navigation content, such as a set of tabs, to be displayed at the bottom\nof the header area of the tearsheet. NB the navigation is only applicable\nfor wide tearsheets.",type:{name:"element"},required:!1},onClose:{description:"An optional handler that is called when the user closes the tearsheet (by\nclicking the close button, if enabled, or clicking outside, if enabled).\nReturning `false` here prevents the modal from closing.",type:{name:"func"},required:!1},open:{description:"Specifies whether the tearsheet is currently open.",type:{name:"bool"},required:!1},portalTarget:{description:"The DOM element that the tearsheet should be rendered within. Defaults to document.body.",type:{name:"custom",raw:"typeof Element === 'undefined'\n? PropTypes.object\n: PropTypes.instanceOf(Element)"},required:!1},size:{description:"Specifies the width of the tearsheet, 'narrow' or 'wide'.",type:{name:"enum",value:[{value:"'narrow'",computed:!1},{value:"'wide'",computed:!1}]},required:!0},slug:{description:"**Experimental:** Provide a `Slug` component to be rendered inside the `Tearsheet` component",type:{name:"node"},required:!1},title:{description:"The main title of the tearsheet, displayed in the header area.",type:{name:"node"},required:!1},verticalPosition:{description:"**Deprecated**\n\nThe position of the top of tearsheet in the viewport. The 'normal'\nposition is a short distance down from the top of the\nviewport, leaving room at the top for a global header bar to show through\nfrom below. The 'lower' position (the default) provides a little extra room at the top\nto allow an action bar navigation or breadcrumbs to also show through.",type:{name:"enum",value:[{value:"'normal'",computed:!1},{value:"'lower'",computed:!1}]},required:!1}}}},"../ibm-products/src/global/js/hooks/useFocus.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useFocus});var _carbon_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),_settings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../ibm-products/src/settings.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),useFocus=function useFocus(modalRef){var carbonPrefix=(0,_carbon_react__WEBPACK_IMPORTED_MODULE_0__.AKj)(),tearsheetBaseClass="".concat(_settings__WEBPACK_IMPORTED_MODULE_2__.K.prefix,"--tearsheet"),notQuery=":not(.".concat(carbonPrefix,"--visually-hidden,.").concat(tearsheetBaseClass,"__header--no-close-icon,.").concat(carbonPrefix,'--btn--disabled,[aria-hidden="true"],[tabindex="-1"])'),queryButton="button".concat(notQuery),queryInput="input".concat(notQuery),querySelect="select".concat(notQuery),queryTextarea="textarea".concat(notQuery),queryLink="[href]".concat(notQuery),queryTabIndex='[tabindex="0"]'.concat(notQuery),query="".concat(queryButton,",").concat(queryLink,",").concat(queryInput,",").concat(querySelect,",").concat(queryTextarea,", ").concat(queryTabIndex),modalEl=null==modalRef?void 0:modalRef.current,getFocusable=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(){var _focusableElements,_focusableElements2,_focusableElements3,_focusableElements4,focusableElements=null==modalEl?void 0:modalEl.querySelectorAll("".concat(query));return null!==(_focusableElements=focusableElements)&&void 0!==_focusableElements&&_focusableElements.length&&(focusableElements=Array.prototype.filter.call(focusableElements,(function(el){var _window;return"none"!==(null===(_window=window)||void 0===_window||null===(_window=_window.getComputedStyle(el))||void 0===_window?void 0:_window.display)}))),{first:null===(_focusableElements2=focusableElements)||void 0===_focusableElements2?void 0:_focusableElements2[0],last:null===(_focusableElements3=focusableElements)||void 0===_focusableElements3?void 0:_focusableElements3[(null===(_focusableElements4=focusableElements)||void 0===_focusableElements4?void 0:_focusableElements4.length)-1],all:focusableElements}}),[modalEl,query]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){getFocusable()}),[getFocusable]);return{firstElement:getFocusable().first,lastElement:getFocusable().last,allElements:getFocusable().all,keyDownListener:function handleKeyDown(event){if("Tab"===event.key){var _getFocusable=getFocusable(),first=_getFocusable.first,last=_getFocusable.last,all=_getFocusable.all;setTimeout((function(){var _document,_document2;event.shiftKey&&!Array.prototype.includes.call(all,null===(_document=document)||void 0===_document?void 0:_document.activeElement)?(event.preventDefault(),null==last||last.focus()):Array.prototype.includes.call(all,null===(_document2=document)||void 0===_document2?void 0:_document2.activeElement)||(event.preventDefault(),null==first||first.focus())}),0)}},getFocusable}}}}]);