"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[7985],{"../ibm-products/src/components/ConditionBuilder/ConditionBuilder.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,conditionBuilder:()=>conditionBuilder,default:()=>ConditionBuilder_stories});var react=__webpack_require__("../../node_modules/react/index.js"),es=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),devtools=__webpack_require__("../ibm-products/src/global/js/utils/devtools.js"),settings=__webpack_require__("../ibm-products/src/settings.js"),bucket_0=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-0.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var emptyState={groups:[{groupSeparateOperator:null,groupOperator:"and",statement:"if",conditions:[{property:void 0,operator:"",value:""}]}]},ConditionBuilderContext=(0,react.createContext)(),ConditionBuilderProvider=function ConditionBuilderProvider(props){var _useState2=_slicedToArray((0,react.useState)({groups:[]}),2),rootState=_useState2[0],setRootState=_useState2[1];return(0,jsx_runtime.jsx)(ConditionBuilderContext.Provider,{value:{rootState,setRootState,inputConfig:props.inputConfig,popOverSearchThreshold:props.popOverSearchThreshold},children:props.children})};function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ConditionBuilderContent_slicedToArray(arr,i){return function ConditionBuilderContent_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function ConditionBuilderContent_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function ConditionBuilderContent_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return ConditionBuilderContent_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ConditionBuilderContent_arrayLikeToArray(o,minLen)}(arr,i)||function ConditionBuilderContent_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ConditionBuilderContent_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}ConditionBuilderProvider.displayName="ConditionBuilderProvider",ConditionBuilderProvider.propTypes={children:prop_types_default().node.isRequired,inputConfig:prop_types_default().shape({properties:prop_types_default().arrayOf(prop_types_default().shape({id:prop_types_default().string,label:prop_types_default().string,icon:prop_types_default().func,type:prop_types_default().oneOf(["text","number","date","option"]),config:prop_types_default().shape({options:prop_types_default().arrayOf(prop_types_default().shape({id:prop_types_default().string,label:prop_types_default().string,icon:prop_types_default().func})),includeSearch:prop_types_default().bool})}))}).isRequired,popOverSearchThreshold:prop_types_default().number.isRequired},ConditionBuilderProvider.__docgenInfo={description:"",methods:[],displayName:"ConditionBuilderProvider",props:{children:{description:"Provide the contents of the ConditionBuilder.",type:{name:"node"},required:!0},inputConfig:{description:"This is a mandatory prop that defines the input to the condition builder.",type:{name:"shape",value:{properties:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},label:{name:"string",required:!1},icon:{name:"func",required:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'number'",computed:!1},{value:"'date'",computed:!1},{value:"'option'",computed:!1}],required:!1},config:{name:"shape",value:{options:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},label:{name:"string",required:!1},icon:{name:"func",required:!1}}},required:!1},includeSearch:{name:"bool",required:!1}},required:!1}}},required:!1}}},required:!0},popOverSearchThreshold:{description:"",type:{name:"number"},required:!0}}};var blockClass="".concat(settings.K.prefix,"--condition-builder");function ConditionBuilderContent(_ref){var _rootState$groups2,startConditionLabel=_ref.startConditionLabel,_useContext=(0,react.useContext)(ConditionBuilderContext),rootState=_useContext.rootState,setRootState=_useContext.setRootState,_useState2=ConditionBuilderContent_slicedToArray((0,react.useState)(!0),2),isConditionBuilderActive=_useState2[0],setIsConditionBuilderActive=_useState2[1],conditionBuilderRef=(0,react.useRef)();(0,react.useEffect)((function(){var _rootState$groups;null!=rootState&&null!==(_rootState$groups=rootState.groups)&&void 0!==_rootState$groups&&_rootState$groups.length?(setIsConditionBuilderActive(!1),1==rootState.groups[0].conditions.length&&null==rootState.groups[0].conditions[0].property&&setTimeout((function(){conditionBuilderRef.current.querySelector(".propertyField").click()}),0)):setIsConditionBuilderActive(!0)}),[rootState]);return(0,jsx_runtime.jsxs)("div",{ref:conditionBuilderRef,className:"".concat(blockClass,"__content-container"),children:[isConditionBuilderActive&&(0,jsx_runtime.jsx)(es.zxk,{className:"".concat(blockClass,"__condition-builder"),renderIcon:function renderIcon(props){return(0,jsx_runtime.jsx)(bucket_0.mm,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({size:16},props))},iconDescription:startConditionLabel,kind:"ghost",size:"sm",onClick:function onStartConditionBuilder(){setIsConditionBuilderActive(!1),setRootState(emptyState)},children:startConditionLabel}),rootState&&(null==rootState||null===(_rootState$groups2=rootState.groups)||void 0===_rootState$groups2?void 0:_rootState$groups2.map((function(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"conditionBuilder group renders here"})})))]})}ConditionBuilderContent.displayName="ConditionBuilderContent";const ConditionBuilderContent_ConditionBuilderContent=ConditionBuilderContent;function ConditionBuilder_typeof(o){return ConditionBuilder_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ConditionBuilder_typeof(o)}ConditionBuilderContent.propTypes={startConditionLabel:prop_types_default().string.isRequired},ConditionBuilderContent.__docgenInfo={description:"",methods:[],displayName:"ConditionBuilderContent",props:{startConditionLabel:{description:"Provide a label to the button that starts condition builder",type:{name:"string"},required:!0}}};var _excluded=["className","inputConfig","startConditionLabel","popOverSearchThreshold"];function ConditionBuilder_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ConditionBuilder_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ConditionBuilder_ownKeys(Object(t),!0).forEach((function(r){ConditionBuilder_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ConditionBuilder_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ConditionBuilder_defineProperty(obj,key,value){return(key=function ConditionBuilder_toPropertyKey(arg){var key=function ConditionBuilder_toPrimitive(input,hint){if("object"!==ConditionBuilder_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==ConditionBuilder_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===ConditionBuilder_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ConditionBuilder_blockClass="".concat(settings.K.prefix,"--condition-builder"),ConditionBuilder=react.forwardRef((function(_ref,ref){var className=_ref.className,inputConfig=_ref.inputConfig,startConditionLabel=_ref.startConditionLabel,popOverSearchThreshold=_ref.popOverSearchThreshold,rest=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(ConditionBuilderProvider,{inputConfig,popOverSearchThreshold,children:(0,jsx_runtime.jsx)("div",ConditionBuilder_objectSpread(ConditionBuilder_objectSpread(ConditionBuilder_objectSpread({},rest),{},{className:classnames_default()(ConditionBuilder_blockClass,className,{}),ref,role:"main"},(0,devtools.n8)("ConditionBuilder")),{},{children:(0,jsx_runtime.jsx)(es.gCW,{children:(0,jsx_runtime.jsx)(ConditionBuilderContent_ConditionBuilderContent,{startConditionLabel})})}))})}));(ConditionBuilder=settings.K.checkComponentEnabled(ConditionBuilder,"ConditionBuilder")).displayName="ConditionBuilder",ConditionBuilder.propTypes={className:prop_types_default().string,inputConfig:prop_types_default().shape({properties:prop_types_default().arrayOf(prop_types_default().shape({id:prop_types_default().string,label:prop_types_default().string,icon:prop_types_default().func,type:prop_types_default().oneOf(["text","number","date","option"]),config:prop_types_default().shape({options:prop_types_default().arrayOf(prop_types_default().shape({id:prop_types_default().string,label:prop_types_default().string,icon:prop_types_default().func})),includeSearch:prop_types_default().bool})}))}).isRequired,popOverSearchThreshold:prop_types_default().number.isRequired,startConditionLabel:prop_types_default().string.isRequired},ConditionBuilder.__docgenInfo={description:"TODO: A description of the component.",methods:[],displayName:"ConditionBuilder",props:{className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},inputConfig:{description:"This is a mandatory prop that defines the input to the condition builder.",type:{name:"shape",value:{properties:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},label:{name:"string",required:!1},icon:{name:"func",required:!1},type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'number'",computed:!1},{value:"'date'",computed:!1},{value:"'option'",computed:!1}],required:!1},config:{name:"shape",value:{options:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},label:{name:"string",required:!1},icon:{name:"func",required:!1}}},required:!1},includeSearch:{name:"bool",required:!1}},required:!1}}},required:!1}}},required:!0},popOverSearchThreshold:{description:"Provide an mandatory numeric value that will be used to enable search option in the popovers with list.",type:{name:"number"},required:!0},startConditionLabel:{description:"Provide a label to the button that starts condition builder",type:{name:"string"},required:!0}}};var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"conditionbuilder",children:"ConditionBuilder"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#example-usage",children:"Example usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"example-usage",children:"Example usage"}),"\n","\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{of:conditionBuilder})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"code-sample",children:"Code sample"}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{})]})}const ConditionBuilder_ConditionBuilder=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),_storybook_styles=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!../ibm-products/src/components/ConditionBuilder/_storybook-styles.scss"),exported={};_storybook_styles.Z&&_storybook_styles.Z.locals&&(exported.locals=_storybook_styles.Z.locals);var update,refs=0,options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),exported.use=function(insertOptions){return options.options=insertOptions||{},refs++||(update=injectStylesIntoStyleTag_default()(_storybook_styles.Z,options)),exported},exported.unuse=function(){refs>0&&! --refs&&(update(),update=null)};const ConditionBuilder_storybook_styles=exported;var bucket_5=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-5.js"),bucket_6=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-6.js"),bucket_17=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-17.js"),bucket_3=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-3.js"),bucket_7=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-7.js"),bucket_1=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-1.js"),bucket_4=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-4.js"),bucket_16=__webpack_require__("../../node_modules/@carbon/icons-react/es/generated/bucket-16.js"),inputData={properties:[{id:"continent",label:"Continent",icon:bucket_5.IY,type:"option",config:{options:[{label:"Africa",id:"Africa"},{label:"Antarctica",id:"Antarctica"},{label:"Asia",id:"Asia"},{label:"Australia",id:"Australia"},{label:"Europe",id:"Europe"}]}},{id:"region",label:"Region",icon:bucket_6.WN,type:"option",config:{options:[{label:"Afghanistan",id:"AF",icon:bucket_17.hu},{label:"Albania",id:"AL",icon:bucket_17.hu},{label:"Algeria",id:"AG",icon:bucket_17.hu},{label:"Andorra",id:"AN",icon:bucket_17.hu}],includeSearch:!0}},{id:"color",label:"Color",icon:bucket_3.VZ,type:"option",config:{options:[{label:"black",id:"black"},{label:"silver",id:"silver"},{label:"gray",id:"gray"},{label:"white",id:"white"},{label:"maroon",id:"maroon"},{label:"red",id:"red"},{label:"purple",id:"purple"},{label:"fuchsia",id:"fuchsia"},{label:"green",id:"green"},{label:"lime",id:"lime"},{label:"olive",id:"olive"},{label:"yellow",id:"yellow"},{label:"navy",id:"navy"},{label:"blue",id:"blue"},{label:"teal",id:"teal"},{label:"aqua",id:"aqua"}]}},{id:"id",label:"ID",icon:bucket_7.AQ,type:"text",config:{}},{id:"price",label:"Price",icon:bucket_3.F,type:"number",config:{min:0,step:.01,unit:"Dollars"}},{id:"date",label:"Date",icon:bucket_1.f,type:"date",config:{}},{id:"delivery",label:"Delivery",icon:bucket_4.ei,type:"option",config:{options:[{label:"Processing",id:"Processing"},{label:"Preparing for dispatch",id:"Preparing for dispatch"},{label:"Dispatched",id:"Dispatched"},{label:"In delivery",id:"In delivery"},{label:"Delivered",id:"Delivered"}]}},{id:"season",label:"Season",icon:bucket_16.mp,type:"option",config:{options:[{label:"Winter",id:"Winter"},{label:"Spring",id:"Spring"},{label:"Summer",id:"Summer"},{label:"Fall",id:"Fall"}]}},{id:"product",label:"Product",icon:bucket_3.Xv,type:"text",config:{}}]};function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const ConditionBuilder_stories={title:"IBM Products/Components/ConditionBuilder",component:ConditionBuilder,tags:["autodocs"],parameters:{storySource:{source:"function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n/**\n * Copyright IBM Corp. 2024, 2024\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React from 'react';\n// TODO: import action to handle events if required.\n// import { action } from '@storybook/addon-actions';\n\nimport { ConditionBuilder } from '.';\nimport mdx from './ConditionBuilder.mdx';\nimport styles from './_storybook-styles.scss';\nimport { inputData } from './assets/sampleInput';\nexport default {\n  title: 'IBM Products/Components/ConditionBuilder',\n  component: ConditionBuilder,\n  tags: ['autodocs'],\n  // TODO: Define argTypes for props not represented by standard JS types.\n  // argTypes: {\n  //   egProp: { control: 'color' },\n  // },\n  parameters: {\n    styles: styles,\n    docs: {\n      page: mdx\n    }\n  }\n};\n\n/**\n * TODO: Declare template(s) for one or more scenarios.\n */\nvar Template = function Template(args) {\n  return /*#__PURE__*/React.createElement(ConditionBuilder\n  // TODO: handle events with action or local handler.\n  // onTodo={action('onTodo log action')}\n  , _extends({}, args, {\n    inputConfig: inputData,\n    startConditionLabel: 'Add Condition',\n    popOverSearchThreshold: 4\n  }));\n};\n\n/**\n * TODO: Declare one or more stories, generally one per design scenario.\n * NB no need for a 'Playground' because all stories have all controls anyway.\n */\nexport var conditionBuilder = Template.bind({});\nconditionBuilder.args = {\n  // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#ConditionBuilder-args\n  children: 'hello, world'\n};",locationsMap:{"condition-builder":{startLoc:{col:15,line:36},endLoc:{col:1,line:45},startBody:{col:15,line:36},endBody:{col:1,line:45}}}},styles:ConditionBuilder_storybook_styles,docs:{page:ConditionBuilder_ConditionBuilder}}};var conditionBuilder=function Template(args){return react.createElement(ConditionBuilder,_extends({},args,{inputConfig:inputData,startConditionLabel:"Add Condition",popOverSearchThreshold:4}))}.bind({});conditionBuilder.args={children:"hello, world"},conditionBuilder.parameters={...conditionBuilder.parameters,docs:{...conditionBuilder.parameters?.docs,source:{originalSource:"args => {\n  return <ConditionBuilder\n  // TODO: handle events with action or local handler.\n  // onTodo={action('onTodo log action')}\n  {...args} inputConfig={inputData} startConditionLabel={'Add Condition'} popOverSearchThreshold={4} />;\n}",...conditionBuilder.parameters?.docs?.source},description:{story:"TODO: Declare one or more stories, generally one per design scenario.\nNB no need for a 'Playground' because all stories have all controls anyway.",...conditionBuilder.parameters?.docs?.description}}};const __namedExportsOrder=["conditionBuilder"]},"../ibm-products/src/global/js/utils/devtools.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n8:()=>getDevtoolsProps});var _package_settings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../ibm-products/src/global/js/package-settings.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function getDevtoolsProps(componentName){return _defineProperty({},_package_settings__WEBPACK_IMPORTED_MODULE_0__.s5,(0,_package_settings__WEBPACK_IMPORTED_MODULE_0__.Md)(componentName))}},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!../ibm-products/src/components/ConditionBuilder/_storybook-styles.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);