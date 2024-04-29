"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[4001],{"../ibm-products/src/components/ScrollGradient/ScrollGradient.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ScrollGradient_stories,scrollGradientVertical:()=>scrollGradientVertical,scrollGradientXAndYAxis:()=>scrollGradientXAndYAxis});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),devtools=__webpack_require__("../ibm-products/src/global/js/utils/devtools.js"),settings=__webpack_require__("../ibm-products/src/settings.js"),lodash=__webpack_require__("../../node_modules/lodash/lodash.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var ScrollDirection_X="X",ScrollDirection_Y="Y",ScrollStates_NONE="NONE",ScrollStates_INITIAL="INITIAL",ScrollStates_STARTED="STARTED",ScrollStates_END="END",getScrollState=function getScrollState(element,scrollDirection){return scrollDirection===ScrollDirection_X?element.scrollWidth===element.clientWidth?ScrollStates_NONE:0===element.scrollLeft?ScrollStates_INITIAL:element.scrollLeft+element.clientWidth===element.scrollWidth?ScrollStates_END:ScrollStates_STARTED:element.scrollHeight===element.clientHeight?ScrollStates_NONE:0===element.scrollTop?ScrollStates_INITIAL:element.scrollTop+element.clientHeight===element.scrollHeight?ScrollStates_END:ScrollStates_STARTED},jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","className","color","onScroll","scrollElementClassName","getScrollElementRef","hideStartGradient"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ScrollGradient_slicedToArray(arr,i){return function ScrollGradient_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ScrollGradient_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function ScrollGradient_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return ScrollGradient_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ScrollGradient_arrayLikeToArray(o,minLen)}(arr,i)||function ScrollGradient_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ScrollGradient_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(settings.K.prefix,"--scroll-gradient"),defaults={color:"var(--".concat(settings.u.prefix,"-layer-01)"),hideStartGradient:!1,onScroll:function onScroll(){},getScrollElementRef:function getScrollElementRef(){}},ScrollGradient=react.forwardRef((function(_ref,ref){var children=_ref.children,className=_ref.className,_ref$color=_ref.color,color=void 0===_ref$color?defaults.color:_ref$color,_ref$onScroll=_ref.onScroll,onScroll=void 0===_ref$onScroll?defaults.onScroll:_ref$onScroll,scrollElementClassName=_ref.scrollElementClassName,_ref$getScrollElement=_ref.getScrollElementRef,getScrollElementRef=void 0===_ref$getScrollElement?defaults.getScrollElementRef:_ref$getScrollElement,_ref$hideStartGradien=_ref.hideStartGradient,hideStartGradient=void 0===_ref$hideStartGradien?defaults.hideStartGradient:_ref$hideStartGradien,rest=_objectWithoutProperties(_ref,_excluded),_useState2=ScrollGradient_slicedToArray((0,react.useState)(ScrollStates_NONE),2),verticalPosition=_useState2[0],setVerticalPosition=_useState2[1],_useState4=ScrollGradient_slicedToArray((0,react.useState)(ScrollStates_NONE),2),horizontalPosition=_useState4[0],setHorizontalPosition=_useState4[1],scrollContainer=(0,react.useRef)(),contentChildrenContainer=(0,react.useRef)(),updateScrollState=(0,lodash.throttle)((function(){var updatedVerticalVal=getScrollState(scrollContainer.current,ScrollDirection_Y),updatedHorizontalVal=getScrollState(scrollContainer.current,ScrollDirection_X);setVerticalPosition(updatedVerticalVal),setHorizontalPosition(updatedHorizontalVal)}),150),scrollHandler=(0,react.useCallback)((function(event){onScroll(event),updateScrollState()}),[onScroll,updateScrollState]);(0,react.useEffect)((function(){scrollHandler()}),[scrollHandler]);var _useIsOverflow=function useIsOverflow(ref){var _useState2=_slicedToArray((0,react.useState)(),2),isHorizontallyScrollable=_useState2[0],setIsHorizontallyScrollable=_useState2[1],_useState4=_slicedToArray((0,react.useState)(),2),isVerticallyScrollable=_useState4[0],setIsVerticallyScrollable=_useState4[1],_useState6=_slicedToArray((0,react.useState)(),2),mutationObserver=_useState6[0],setMutationObserver=_useState6[1],_useState8=_slicedToArray((0,react.useState)(),2),resizeObserver=_useState8[0],setResizeObserver=_useState8[1],checkOverflow=(0,react.useCallback)((function(){ref.current&&(setIsHorizontallyScrollable(ref.current.scrollWidth>ref.current.clientWidth),setIsVerticallyScrollable(ref.current.scrollHeight>ref.current.clientHeight))}),[ref]);return(0,react.useEffect)((function(){if(mutationObserver)return function(){mutationObserver&&mutationObserver.disconnect(),resizeObserver&&resizeObserver.disconnect()}})),(0,react.useLayoutEffect)((function(){var current=ref.current;current&&("ResizeObserver"in window&&!resizeObserver&&setResizeObserver(new ResizeObserver(checkOverflow).observe(current)),"MutationObserver"in window&&!mutationObserver&&setMutationObserver(new MutationObserver(checkOverflow).observe(current,{attributes:!1,childList:!0,subtree:!1})),checkOverflow())}),[ref,checkOverflow,mutationObserver,resizeObserver]),{xScrollable:isHorizontallyScrollable,yScrollable:isVerticallyScrollable}}(scrollContainer),xScrollable=_useIsOverflow.xScrollable,yScrollable=_useIsOverflow.yScrollable,gradientRight=yScrollable&&scrollContainer.current&&contentChildrenContainer.current?scrollContainer.current.offsetWidth-contentChildrenContainer.current.offsetWidth:0,gradientBottom=xScrollable&&scrollContainer.current&&contentChildrenContainer.current?scrollContainer.current.offsetHeight-contentChildrenContainer.current.offsetHeight:0;return(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread(_objectSpread({},rest),{},{className:classnames_default()(blockClass,"".concat(blockClass,"--x-").concat(horizontalPosition.toLowerCase()),"".concat(blockClass,"--y-").concat(verticalPosition.toLowerCase()),_defineProperty(_defineProperty({},"".concat(blockClass,"--x-scrollable"),xScrollable),"".concat(blockClass,"--y-scrollable"),yScrollable),className),ref,role:"presentation"},(0,devtools.n8)("ScrollGradient")),{},{children:[(0,jsx_runtime.jsx)("div",{onScroll:scrollHandler,ref:function setRefs(element){scrollContainer.current=element,getScrollElementRef(element)},className:classnames_default()("".concat(blockClass,"__content"),scrollElementClassName),children:(0,jsx_runtime.jsx)("div",{ref:contentChildrenContainer,className:"".concat(blockClass,"__content-children"),children})}),!hideStartGradient&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"".concat(blockClass,"__start-vertical"),style:{right:gradientRight,backgroundImage:"linear-gradient(0deg, transparent, ".concat(color," 90%)")},role:"presentation","aria-hidden":!0}),(0,jsx_runtime.jsx)("div",{className:"".concat(blockClass,"__start-horizontal"),style:{backgroundImage:"linear-gradient(-90deg, transparent, ".concat(color," 90%)"),bottom:gradientBottom},role:"presentation","aria-hidden":!0})]}),(0,jsx_runtime.jsx)("div",{className:"".concat(blockClass,"__end-vertical"),style:{right:gradientRight,bottom:gradientBottom,backgroundImage:"linear-gradient(0deg, ".concat(color," 10%, transparent)")},role:"presentation","aria-hidden":!0}),(0,jsx_runtime.jsx)("div",{className:"".concat(blockClass,"__end-horizontal"),style:{right:gradientRight,bottom:gradientBottom,backgroundImage:"linear-gradient(-90deg, ".concat(color," 10%, transparent)")},role:"presentation","aria-hidden":!0})]}))}));(ScrollGradient=settings.K.checkComponentEnabled(ScrollGradient,"ScrollGradient")).displayName="ScrollGradient",ScrollGradient.propTypes={children:prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().node),prop_types_default().node]),className:prop_types_default().string,color:prop_types_default().string,getScrollElementRef:prop_types_default().func,hideStartGradient:prop_types_default().bool,onScroll:prop_types_default().func,scrollElementClassName:prop_types_default().string},ScrollGradient.__docgenInfo={description:"TODO: A description of the component.",methods:[],displayName:"ScrollGradient",props:{color:{defaultValue:{value:"`var(--${carbon.prefix}-layer-01)`",computed:!1},description:"@type {string} Fade out color. Any valid CSS color value works",type:{name:"string"},required:!1},onScroll:{defaultValue:{value:"() => {}",computed:!1},description:"@type {Function} Optional scroll handler",type:{name:"func"},required:!1},getScrollElementRef:{defaultValue:{value:"() => {}",computed:!1},description:"@type {(element: HTMLElement) => {}} Optional function to get reference to scrollable DOM element",type:{name:"func"},required:!1},hideStartGradient:{defaultValue:{value:"false",computed:!1},description:"@type {boolean} Set to true if you want to hide gradient on the start side (top or left) of scrollable element.",type:{name:"bool"},required:!1},children:{description:"Provide the contents of the ScrollGradient.",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},scrollElementClassName:{description:"@type {string} Optional classname for scroll element.",type:{name:"string"},required:!1}}};var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"ScrollGradient",component:ScrollGradient}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"scrollgradient",children:"ScrollGradient"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#example-usage",children:"Example usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The ScrollGradient implements gradient fades in horizontal and vertical\ndirections based on the user's scroll position. Visually, it informs the user of\nmore content that can be scrolled to."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{of:scrollGradientVertical})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"code-sample",children:"Code sample"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<ScrollGradient>\n  <p>Scrolling content here</p>\n</ScrollGradient>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{})]})}const ScrollGradient_ScrollGradient=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),_storybook_styles=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!../ibm-products/src/components/ScrollGradient/_storybook-styles.scss"),exported={};_storybook_styles.Z&&_storybook_styles.Z.locals&&(exported.locals=_storybook_styles.Z.locals);var update,refs=0,options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),exported.use=function(insertOptions){return options.options=insertOptions||{},refs++||(update=injectStylesIntoStyleTag_default()(_storybook_styles.Z,options)),exported},exported.unuse=function(){refs>0&&! --refs&&(update(),update=null)};const ScrollGradient_storybook_styles=exported;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var storyCopy="Use case specific content to display in the ScrollGradient component. Use case specific content to display in the ScrollGradient component. Use case specific content to display in the ScrollGradient component. ",storyChildren=react.createElement("div",{style:{padding:16}},react.createElement("p",null,storyCopy),react.createElement("p",null,storyCopy),react.createElement("p",null,storyCopy),react.createElement("p",null,storyCopy),react.createElement("p",null,storyCopy),react.createElement("p",null,storyCopy));const ScrollGradient_stories={title:"IBM Products/Components/Scroll gradient/ScrollGradient",component:ScrollGradient,tags:["autodocs"],parameters:{storySource:{source:"function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n/**\n * Copyright IBM Corp. 2024, 2024\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React from 'react';\nimport { ScrollGradient } from '.';\nimport mdx from './ScrollGradient.mdx';\nimport styles from './_storybook-styles.scss';\nvar storyCopy = 'Use case specific content to display in the ScrollGradient component. Use case specific content to display in the ScrollGradient component. Use case specific content to display in the ScrollGradient component. ';\nvar storyChildren = /*#__PURE__*/React.createElement(\"div\", {\n  style: {\n    padding: 16\n  }\n}, /*#__PURE__*/React.createElement(\"p\", null, storyCopy), /*#__PURE__*/React.createElement(\"p\", null, storyCopy), /*#__PURE__*/React.createElement(\"p\", null, storyCopy), /*#__PURE__*/React.createElement(\"p\", null, storyCopy), /*#__PURE__*/React.createElement(\"p\", null, storyCopy), /*#__PURE__*/React.createElement(\"p\", null, storyCopy));\nexport default {\n  title: 'IBM Products/Components/Scroll gradient/ScrollGradient',\n  component: ScrollGradient,\n  tags: ['autodocs'],\n  // TODO: Define argTypes for props not represented by standard JS types.\n  // argTypes: {\n  //   egProp: { control: 'color' },\n  // },\n  parameters: {\n    styles: styles,\n    docs: {\n      page: mdx\n    }\n  }\n};\nvar style = {\n  width: '100%',\n  height: '100%'\n};\n/**\n * TODO: Declare template(s) for one or more scenarios.\n */\n\nvar Template = function Template(args) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"templateContainer\"\n  }, /*#__PURE__*/React.createElement(ScrollGradient, _extends({\n    style: style,\n    className: 'myScrollGradient'\n  }, args)));\n};\nvar TemplateBothAxis = function TemplateBothAxis(args) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"templateContainer-sm\"\n  }, /*#__PURE__*/React.createElement(ScrollGradient, _extends({\n    style: style,\n    className: 'myScrollGradient'\n  }, args)));\n};\nexport var scrollGradientVertical = Template.bind({});\nscrollGradientVertical.args = {\n  children: storyChildren\n};\nexport var scrollGradientXAndYAxis = TemplateBothAxis.bind({});\nscrollGradientXAndYAxis.args = {\n  children: /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      width: '1500px'\n    }\n  }, storyChildren)\n};",locationsMap:{"scroll-gradient-vertical":{startLoc:{col:15,line:42},endLoc:{col:1,line:49},startBody:{col:15,line:42},endBody:{col:1,line:49}},"scroll-gradient-x-and-y-axis":{startLoc:{col:23,line:50},endLoc:{col:1,line:57},startBody:{col:23,line:50},endBody:{col:1,line:57}}}},styles:ScrollGradient_storybook_styles,docs:{page:ScrollGradient_ScrollGradient}}};var style={width:"100%",height:"100%"},scrollGradientVertical=function Template(args){return react.createElement("div",{className:"templateContainer"},react.createElement(ScrollGradient,_extends({style,className:"myScrollGradient"},args)))}.bind({});scrollGradientVertical.args={children:storyChildren};var scrollGradientXAndYAxis=function TemplateBothAxis(args){return react.createElement("div",{className:"templateContainer-sm"},react.createElement(ScrollGradient,_extends({style,className:"myScrollGradient"},args)))}.bind({});scrollGradientXAndYAxis.args={children:react.createElement("div",{style:{width:"1500px"}},storyChildren)},scrollGradientVertical.parameters={...scrollGradientVertical.parameters,docs:{...scrollGradientVertical.parameters?.docs,source:{originalSource:"args => {\n  return <div className=\"templateContainer\">\n      <ScrollGradient style={style} className={'myScrollGradient'} {...args} />\n    </div>;\n}",...scrollGradientVertical.parameters?.docs?.source}}},scrollGradientXAndYAxis.parameters={...scrollGradientXAndYAxis.parameters,docs:{...scrollGradientXAndYAxis.parameters?.docs,source:{originalSource:"args => {\n  return <div className=\"templateContainer-sm\">\n      <ScrollGradient style={style} className={'myScrollGradient'} {...args} />\n    </div>;\n}",...scrollGradientXAndYAxis.parameters?.docs?.source}}};const __namedExportsOrder=["scrollGradientVertical","scrollGradientXAndYAxis"]},"../ibm-products/src/global/js/utils/devtools.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n8:()=>getDevtoolsProps});var _package_settings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../ibm-products/src/global/js/package-settings.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function getDevtoolsProps(componentName){return _defineProperty({},_package_settings__WEBPACK_IMPORTED_MODULE_0__.s5,(0,_package_settings__WEBPACK_IMPORTED_MODULE_0__.Md)(componentName))}},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!../ibm-products/src/components/ScrollGradient/_storybook-styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sb-show-main,.docs-story{background-color:var(--cds-layer-01, #f4f4f4) !important}.templateContainer{overflow:auto;width:300px;height:400px;margin:auto;resize:both}.templateContainer-sm{overflow:auto;width:300px;height:250px;margin:auto;resize:both}","",{version:3,sources:["webpack://./../ibm-products/src/components/ScrollGradient/_storybook-styles.scss"],names:[],mappings:"AASA,0BAGE,wDAAA,CAGF,mBACE,aAAA,CACA,WAAA,CACA,YAAA,CACA,WAAA,CACA,WAAA,CAGF,sBACE,aAAA,CACA,WAAA,CACA,YAAA,CACA,WAAA,CACA,WAAA",sourcesContent:["//\n// Copyright IBM Corp. 2024, 2024\n//\n// This source code is licensed under the Apache-2.0 license found in the\n// LICENSE file in the root directory of this source tree.\n//\n@use '@carbon/react/scss/theme' as *;\n@forward '../../../../ibm-products-styles/src/global/styles/project-settings';\n\n.sb-show-main,\n.docs-story {\n  /* stylelint-disable-next-line declaration-no-important */\n  background-color: $layer-01 !important;\n}\n\n.templateContainer {\n  overflow: auto;\n  width: 300px;\n  height: 400px;\n  margin: auto;\n  resize: both;\n}\n\n.templateContainer-sm {\n  overflow: auto;\n  width: 300px;\n  height: 250px;\n  margin: auto;\n  resize: both;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);