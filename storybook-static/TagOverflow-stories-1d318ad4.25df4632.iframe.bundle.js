"use strict";(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[8707],{"../ibm-products/src/components/TagOverflow/TagOverflow.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomComponent:()=>CustomComponent,FiveTags:()=>FiveTags,ManyTags:()=>ManyTags,ManyUserAvatars:()=>ManyUserAvatars,MultilineTags:()=>MultilineTags,TagsWithTruncation:()=>TagsWithTruncation,UserAvatars:()=>UserAvatars,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TagOverflow_stories});var react=__webpack_require__("../../node_modules/react/index.js"),es=__webpack_require__("../../node_modules/@carbon/icons-react/es/index.js"),react_es=__webpack_require__("../../node_modules/@carbon/react/es/index.js"),settings=__webpack_require__("../ibm-products/src/settings.js"),UserAvatar=__webpack_require__("../ibm-products/src/components/UserAvatar/UserAvatar.js"),DisplayBox=__webpack_require__("../ibm-products/src/global/js/utils/DisplayBox.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),devtools=__webpack_require__("../ibm-products/src/global/js/utils/devtools.js"),TagSet=__webpack_require__("../ibm-products/src/components/TagSet/TagSet.js"),TYPES={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray","high-contrast":"High-Contrast",outline:"Outline"},useResizeObserver=__webpack_require__("../ibm-products/src/global/js/hooks/useResizeObserver.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["className","items","tagComponent","maxVisible","multiline"],_excluded2=["className","id"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var blockClass="".concat(settings.K.prefix,"--tag-overflow"),defaults={items:[]},TagOverflow=react.forwardRef((function(_ref,ref){var className=_ref.className,_ref$items=_ref.items,items=void 0===_ref$items?defaults.items:_ref$items,tagComponent=_ref.tagComponent,maxVisible=_ref.maxVisible,multiline=_ref.multiline,rest=_objectWithoutProperties(_ref,_excluded),localContainerRef=(0,react.useRef)(null),containerRef=ref||localContainerRef,itemRefs=(0,react.useRef)(null),overflowRef=(0,react.useRef)(null),_useState2=_slicedToArray((0,react.useState)(0),2),containerWidth=_useState2[0],setContainerWidth=_useState2[1],_useState4=_slicedToArray((0,react.useState)([]),2),visibleItems=_useState4[0],setVisibleItems=_useState4[1],_useState6=_slicedToArray((0,react.useState)([]),2),overflowItems=_useState6[0],setOverflowItems=_useState6[1];(0,useResizeObserver.y)(containerRef,(function handleResize(){setContainerWidth(containerRef.current.offsetWidth)}));var getMap=function getMap(){return itemRefs.current||(itemRefs.current=new Map),itemRefs.current},itemRefHandler=function itemRefHandler(id,node){var map=getMap();id&&node&&map.get(id)!==node.offsetWidth&&map.set(id,node.offsetWidth)},getVisibleItems=(0,react.useCallback)((function(){if(!itemRefs.current)return items;if(multiline)return maxVisible?null==items?void 0:items.slice(0,maxVisible):items;var map=getMap(),overflowContainerWidth=overflowRef.current.offsetWidth>40?overflowRef.current.offsetWidth:40,maxWidth=containerWidth-overflowContainerWidth,childrenWidth=0,maxReached=!1;return items.reduce((function(prev,cur){if(!maxReached){var itemWidth=map.get(cur.id)+4;itemWidth+childrenWidth<maxWidth?(childrenWidth+=itemWidth,prev.push(cur)):maxReached=!0}return prev}),[])}),[itemRefs,overflowRef,containerWidth,items,multiline,maxVisible]);return(0,react.useEffect)((function(){var _visibleItemsArr,visibleItemsArr=getVisibleItems();maxVisible&&maxVisible<visibleItemsArr.length&&(visibleItemsArr=null===(_visibleItemsArr=visibleItemsArr)||void 0===_visibleItemsArr?void 0:_visibleItemsArr.slice(0,maxVisible));var hiddenItems=null==items?void 0:items.slice(visibleItemsArr.length),overflowItemsArr=null==hiddenItems?void 0:hiddenItems.map((function(item){return{type:item.tagType,label:item.label}}));setVisibleItems(visibleItemsArr),setOverflowItems(overflowItemsArr)}),[containerWidth,items,maxVisible,getVisibleItems]),(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread(_objectSpread({},rest),{},{className:classnames_default()(blockClass,className,_defineProperty({},"".concat(blockClass,"--multiline"),multiline)),ref:containerRef,role:"main"},(0,devtools.n8)("TagOverflow")),{},{children:[visibleItems.length>0&&visibleItems.map((function(item){return tagComponent?function getCustomComponent(item){var className=item.className,id=item.id,other=_objectWithoutProperties(item,_excluded2);return react.createElement(tagComponent,_objectSpread(_objectSpread({},other),{},{className:classnames_default()("".concat(blockClass,"__item"),className),ref:function ref(node){return itemRefHandler(id,node)}}))}(item):(0,jsx_runtime.jsx)("div",{ref:function ref(node){return itemRefHandler(item.id,node)},children:(0,jsx_runtime.jsx)(react_es.ua7,{align:"bottom",label:item.label,children:(0,jsx_runtime.jsx)(react_es.Vp9,{className:"".concat(blockClass,"__item--tag"),type:item.tagType,children:item.label})})},item.id)})),(0,jsx_runtime.jsx)("span",{className:"".concat(blockClass,"__indicator"),ref:overflowRef,children:overflowItems.length>0&&(0,jsx_runtime.jsx)(TagSet.O5,{tags:overflowItems,allTagsModalTitle:"All tags",containingElementRef:overflowRef,allTagsModalSearchLabel:"Search all tags",allTagsModalSearchPlaceholderText:"Search all tags",showAllTagsLabel:"Show all tags"})})]}))}));(TagOverflow=settings.K.checkComponentEnabled(TagOverflow,"TagOverflow")).displayName="TagOverflow";var tagTypes=Object.keys(TYPES);TagOverflow.propTypes={className:prop_types_default().string,items:prop_types_default().arrayOf(prop_types_default().shape({id:prop_types_default().string.isRequired,label:prop_types_default().string.isRequired,tagType:prop_types_default().oneOf(tagTypes)}).isRequired),maxVisible:prop_types_default().number,multiline:prop_types_default().bool,tagComponent:prop_types_default().elementType},TagOverflow.__docgenInfo={description:"TODO: A description of the component.",methods:[],displayName:"TagOverflow",props:{items:{defaultValue:{value:"[]",computed:!1},description:"The items to be shown in the TagOverflow. Each item is specified as an object with properties:\n**label**\\* (required) to supply the item content,\n**id**\\* (required) to uniquely identify the each item.\n**tagType** the type value to be passed to the Carbon Tag component\nif you are passing an tagComponent prop for rendering custom components,\nthen pass the props required for your custom component as the properties of item object",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!0},tagType:{name:"enum",value:[{value:'"red"',computed:!1},{value:'"magenta"',computed:!1},{value:'"purple"',computed:!1},{value:'"blue"',computed:!1},{value:'"cyan"',computed:!1},{value:'"teal"',computed:!1},{value:'"green"',computed:!1},{value:'"gray"',computed:!1},{value:'"cool-gray"',computed:!1},{value:'"warm-gray"',computed:!1},{value:'"high-contrast"',computed:!1},{value:'"outline"',computed:!1}],required:!1}}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},maxVisible:{description:"maximum visible items",type:{name:"number"},required:!1},multiline:{description:"display items in multiple lines",type:{name:"bool"},required:!1},tagComponent:{description:"Component definition of the items to be rendered inside TagOverflow.\nIf this is not passed, items will be rendered as Tag component",type:{name:"elementType"},required:!1}}};var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),story_helper=__webpack_require__("../ibm-products/src/global/js/utils/story-helper.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"tagoverflow",children:"TagOverflow"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#example-usage",children:"Example usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#coded-example",children:"Coded example"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A tag overflow is the use of an interactive tag with the addition of a toggletip\nto show additional content."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The need to show additional items related to an object will occur in small\nspaces in the UI. A tag overflow count can be used with a group of tags when\nthere is not enough space to show all tags related to an object. Clicking on the\ntag overflow presents a toggletip that lists up to 10 additional tags. If there\nare more than 10 additional tags, the toggletip also includes a link to view all\ntags. When the user clicks on this link, a modal opens with a list of all the\ntags associated with the object."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"tags",children:"Tags"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{of:ManyTags})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"tags-with-truncation",children:"Tags with truncation"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{of:TagsWithTruncation})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multiline-tags",children:"Multiline tags"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{of:MultilineTags})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"useravatars",children:"UserAvatars"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{of:ManyUserAvatars})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"custom-components",children:"Custom components"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{of:CustomComponent})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"coded-example",children:"Coded example"}),"\n",(0,jsx_runtime.jsx)(story_helper.Bv,{exampleDirectory:"TagOverflow"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{})]})}const TagOverflow_TagOverflow=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),_storybook_styles=__webpack_require__("../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[2]!../ibm-products/src/components/TagOverflow/_storybook-styles.scss"),exported={};_storybook_styles.Z&&_storybook_styles.Z.locals&&(exported.locals=_storybook_styles.Z.locals);var update,refs=0,options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),exported.use=function(insertOptions){return options.options=insertOptions||{},refs++||(update=injectStylesIntoStyleTag_default()(_storybook_styles.Z,options)),exported},exported.unuse=function(){refs>0&&! --refs&&(update(),update=null)};const TagOverflow_storybook_styles=exported;function TagOverflow_stories_typeof(o){return TagOverflow_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},TagOverflow_stories_typeof(o)}var TagOverflow_stories_excluded=["containerWidth"];function TagOverflow_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function TagOverflow_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TagOverflow_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function TagOverflow_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?TagOverflow_stories_ownKeys(Object(t),!0).forEach((function(r){TagOverflow_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):TagOverflow_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function TagOverflow_stories_defineProperty(obj,key,value){return(key=function TagOverflow_stories_toPropertyKey(t){var i=function TagOverflow_stories_toPrimitive(t,r){if("object"!=TagOverflow_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=TagOverflow_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==TagOverflow_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TagOverflow_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TagOverflow_stories_blockClass="".concat(settings.K.prefix,"--tag-set"),blockClassModal="".concat(TagOverflow_stories_blockClass,"-modal"),tagLabel=function tagLabel(index){return"Tag ".concat(index+1)},tags=Array.from({length:20},(function(v,k){return{label:tagLabel(k),id:"id-".concat(k)}})),fiveTags=tags.slice(0,5),longTagsArr=function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return TagOverflow_stories_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function TagOverflow_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return TagOverflow_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TagOverflow_stories_arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(fiveTags);longTagsArr.splice(1,1,{id:"id-1",label:"Business performance"});var TagOverflow_stories_tagTypes=Object.keys(TYPES),longTags=longTagsArr.map((function(item,i){return TagOverflow_stories_objectSpread(TagOverflow_stories_objectSpread({},item),{},{tagType:TagOverflow_stories_tagTypes[i%TagOverflow_stories_tagTypes.length]})})),colors=["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"],firstNames=["Aarav","Aditi","Akshay","Amit","Ananya","Arjun","Avani","Bhavya","Chetan","Devi","Divya","Gaurav","Isha","Kiran","Manoj","Neha","Preeti","Rajesh","Riya","Shreya","Varun","Saurabh","Ajay","Sandip","Sadan","Jyoti","Sapna","Prem"],lastNames=["Agarwal","Bansal","Chopra","Gupta","Jain","Kapoor","Mehta","Patel","Rao","Sharma","Singh","Trivedi","Verma","Yadav"],ManyUserAvatarArr=Array.from({length:20},(function(v,k){var name=function generateName(){var randomFirstName=firstNames[Math.floor(Math.random()*firstNames.length)],randomLastName=lastNames[Math.floor(Math.random()*lastNames.length)];return"".concat(randomFirstName," ").concat(randomLastName)}();return{id:"id-".concat(k),label:name,backgroundColor:colors[k%colors.length],name,tooltipText:name}})),UserAvatarArr=ManyUserAvatarArr.slice(0,10),IconComponent=(0,react.forwardRef)((function(_ref,ref){var iconName=_ref.iconName,iconSize=_ref.iconSize,className=_ref.className,Base=es[iconName];return react.createElement("div",{className:"custom-icon ".concat(className),ref},react.createElement(Base,{size:iconSize}))})),IconComponentArr=["Add","Power","Play","SettingsAdjust","SidePanelClose","Stop","VideoPlayer","VolumeUpFilled","ChartBubble","ChartLine","ChartPie","ChartWinLoss","DatabaseMessaging","Playlist","OrderDetails"].map((function(icon,index){return{id:"id-".concat(index),label:icon,iconName:icon,iconSize:16}}));const TagOverflow_stories={title:"IBM Products/Components/Tag overflow/TagOverflow",component:TagOverflow,tags:["autodocs"],parameters:{storySource:{source:"function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nvar _excluded = [\"containerWidth\"];\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n/**\n * Copyright IBM Corp. 2024, 2024\n *\n * This source code is licensed under the Apache-2.0 license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport React, { forwardRef } from 'react';\nimport * as CarbonIcons from '@carbon/icons-react';\nimport { Theme } from '@carbon/react';\nimport { pkg } from '../../settings';\nimport { UserAvatar } from '../UserAvatar';\nimport { DisplayBox } from '../../global/js/utils/DisplayBox';\nimport { TagOverflow } from '.';\nimport { TYPES } from './constants';\nimport mdx from './TagOverflow.mdx';\nimport styles from './_storybook-styles.scss';\nvar blockClass = \"\".concat(pkg.prefix, \"--tag-set\");\nvar blockClassModal = \"\".concat(blockClass, \"-modal\");\nvar tagLabel = function tagLabel(index) {\n  return \"Tag \".concat(index + 1);\n};\nvar tags = Array.from({\n  length: 20\n}, function (v, k) {\n  return {\n    label: tagLabel(k),\n    id: \"id-\".concat(k)\n  };\n});\nvar fiveTags = tags.slice(0, 5);\nvar longTagsArr = _toConsumableArray(fiveTags);\nlongTagsArr.splice(1, 1, {\n  id: 'id-1',\n  label: 'Business performance'\n});\nvar tagTypes = Object.keys(TYPES);\nvar longTags = longTagsArr.map(function (item, i) {\n  return _objectSpread(_objectSpread({}, item), {}, {\n    tagType: tagTypes[i % tagTypes.length]\n  });\n});\n\n// UserAvatar background colors\nvar colors = ['order-1-cyan', 'order-2-gray', 'order-3-green', 'order-4-magenta', 'order-5-purple', 'order-6-teal', 'order-7-cyan', 'order-8-gray', 'order-9-green', 'order-10-magenta', 'order-11-purple', 'order-12-teal'];\n\n// Lists of  first names and last names\n//cspell: disable\nvar firstNames = ['Aarav', 'Aditi', 'Akshay', 'Amit', 'Ananya', 'Arjun', 'Avani', 'Bhavya', 'Chetan', 'Devi', 'Divya', 'Gaurav', 'Isha', 'Kiran', 'Manoj', 'Neha', 'Preeti', 'Rajesh', 'Riya', 'Shreya', 'Varun', 'Saurabh', 'Ajay', 'Sandip', 'Sadan', 'Jyoti', 'Sapna', 'Prem'];\nvar lastNames = ['Agarwal', 'Bansal', 'Chopra', 'Gupta', 'Jain', 'Kapoor', 'Mehta', 'Patel', 'Rao', 'Sharma', 'Singh', 'Trivedi', 'Verma', 'Yadav'];\n//cspell: enable\n\n// Method to generate random names\nvar generateName = function generateName() {\n  var randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];\n  var randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];\n  return \"\".concat(randomFirstName, \" \").concat(randomLastName);\n};\n\n// Users for UserAvatar stories\nvar ManyUserAvatarArr = Array.from({\n  length: 20\n}, function (v, k) {\n  var name = generateName();\n  return {\n    id: \"id-\".concat(k),\n    label: name,\n    backgroundColor: colors[k % colors.length],\n    name: name,\n    tooltipText: name\n  };\n});\nvar UserAvatarArr = ManyUserAvatarArr.slice(0, 10);\n\n// Custom component\nvar IconComponent = /*#__PURE__*/forwardRef(function (_ref, ref) {\n  var iconName = _ref.iconName,\n    iconSize = _ref.iconSize,\n    className = _ref.className;\n  var Base = CarbonIcons[iconName];\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"custom-icon \".concat(className),\n    ref: ref\n  }, /*#__PURE__*/React.createElement(Base, {\n    size: iconSize\n  }));\n});\n\n// Carbon Icon component names for custom component story\nvar icons = ['Add', 'Power', 'Play', 'SettingsAdjust', 'SidePanelClose', 'Stop', 'VideoPlayer', 'VolumeUpFilled', 'ChartBubble', 'ChartLine', 'ChartPie', 'ChartWinLoss', 'DatabaseMessaging', 'Playlist', 'OrderDetails'];\nvar IconComponentArr = icons.map(function (icon, index) {\n  return {\n    id: \"id-\".concat(index),\n    label: icon,\n    iconName: icon,\n    iconSize: 16\n  };\n});\nexport default {\n  title: 'IBM Products/Components/Tag overflow/TagOverflow',\n  component: TagOverflow,\n  tags: ['autodocs'],\n  parameters: {\n    styles: styles,\n    docs: {\n      page: mdx\n    }\n  },\n  argTypes: {\n    containerWidth: {\n      control: {\n        type: 'range',\n        min: 20,\n        max: 800,\n        step: 10\n      }\n    }\n  },\n  decorators: [function (story) {\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"style\", null, \".\".concat(blockClassModal, \" { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }\"), \";\"), /*#__PURE__*/React.createElement(Theme, {\n      theme: \"g10\"\n    }, /*#__PURE__*/React.createElement(DisplayBox, null, story())));\n  }]\n};\nvar Template = function Template(argsIn) {\n  var _argsIn = _objectSpread({}, argsIn),\n    containerWidth = _argsIn.containerWidth,\n    args = _objectWithoutProperties(_argsIn, _excluded);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      width: containerWidth\n    }\n  }, /*#__PURE__*/React.createElement(TagOverflow, args));\n};\n\n// Declaration of stories\nexport var FiveTags = Template.bind({});\nFiveTags.args = {\n  containerWidth: 250,\n  items: fiveTags\n};\nexport var TagsWithTruncation = Template.bind({});\nTagsWithTruncation.args = {\n  containerWidth: 300,\n  items: longTags\n};\nexport var ManyTags = Template.bind({});\nManyTags.args = {\n  containerWidth: 500,\n  items: tags\n};\nexport var MultilineTags = Template.bind({});\nMultilineTags.args = {\n  containerWidth: 500,\n  items: tags,\n  multiline: true\n};\nexport var UserAvatars = Template.bind({});\nUserAvatars.args = {\n  containerWidth: 250,\n  items: UserAvatarArr,\n  tagComponent: UserAvatar\n};\nexport var ManyUserAvatars = Template.bind({});\nManyUserAvatars.args = {\n  containerWidth: 500,\n  items: ManyUserAvatarArr,\n  tagComponent: UserAvatar\n};\nexport var CustomComponent = Template.bind({});\nCustomComponent.args = {\n  containerWidth: 500,\n  items: IconComponentArr,\n  tagComponent: IconComponent\n};",locationsMap:{"five-tags":{startLoc:{col:15,line:140},endLoc:{col:1,line:149},startBody:{col:15,line:140},endBody:{col:1,line:149}},"tags-with-truncation":{startLoc:{col:15,line:140},endLoc:{col:1,line:149},startBody:{col:15,line:140},endBody:{col:1,line:149}},"many-tags":{startLoc:{col:15,line:140},endLoc:{col:1,line:149},startBody:{col:15,line:140},endBody:{col:1,line:149}},"multiline-tags":{startLoc:{col:15,line:140},endLoc:{col:1,line:149},startBody:{col:15,line:140},endBody:{col:1,line:149}},"user-avatars":{startLoc:{col:15,line:140},endLoc:{col:1,line:149},startBody:{col:15,line:140},endBody:{col:1,line:149}},"many-user-avatars":{startLoc:{col:15,line:140},endLoc:{col:1,line:149},startBody:{col:15,line:140},endBody:{col:1,line:149}},"custom-component":{startLoc:{col:15,line:140},endLoc:{col:1,line:149},startBody:{col:15,line:140},endBody:{col:1,line:149}}}},styles:TagOverflow_storybook_styles,docs:{page:TagOverflow_TagOverflow}},argTypes:{containerWidth:{control:{type:"range",min:20,max:800,step:10}}},decorators:[function(story){return react.createElement(react.Fragment,null,react.createElement("style",null,".".concat(blockClassModal," { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }"),";"),react.createElement(react_es.Q2A,{theme:"g10"},react.createElement(DisplayBox.H,null,story())))}]};var Template=function Template(argsIn){var _argsIn=TagOverflow_stories_objectSpread({},argsIn),containerWidth=_argsIn.containerWidth,args=TagOverflow_stories_objectWithoutProperties(_argsIn,TagOverflow_stories_excluded);return react.createElement("div",{style:{width:containerWidth}},react.createElement(TagOverflow,args))},FiveTags=Template.bind({});FiveTags.args={containerWidth:250,items:fiveTags};var TagsWithTruncation=Template.bind({});TagsWithTruncation.args={containerWidth:300,items:longTags};var ManyTags=Template.bind({});ManyTags.args={containerWidth:500,items:tags};var MultilineTags=Template.bind({});MultilineTags.args={containerWidth:500,items:tags,multiline:!0};var UserAvatars=Template.bind({});UserAvatars.args={containerWidth:250,items:UserAvatarArr,tagComponent:UserAvatar.Y};var ManyUserAvatars=Template.bind({});ManyUserAvatars.args={containerWidth:500,items:ManyUserAvatarArr,tagComponent:UserAvatar.Y};var CustomComponent=Template.bind({});CustomComponent.args={containerWidth:500,items:IconComponentArr,tagComponent:IconComponent},FiveTags.parameters={...FiveTags.parameters,docs:{...FiveTags.parameters?.docs,source:{originalSource:"argsIn => {\n  const {\n    containerWidth,\n    ...args\n  } = {\n    ...argsIn\n  };\n  return <div style={{\n    width: containerWidth\n  }}>\n      <TagOverflow {...args} />\n    </div>;\n}",...FiveTags.parameters?.docs?.source}}},TagsWithTruncation.parameters={...TagsWithTruncation.parameters,docs:{...TagsWithTruncation.parameters?.docs,source:{originalSource:"argsIn => {\n  const {\n    containerWidth,\n    ...args\n  } = {\n    ...argsIn\n  };\n  return <div style={{\n    width: containerWidth\n  }}>\n      <TagOverflow {...args} />\n    </div>;\n}",...TagsWithTruncation.parameters?.docs?.source}}},ManyTags.parameters={...ManyTags.parameters,docs:{...ManyTags.parameters?.docs,source:{originalSource:"argsIn => {\n  const {\n    containerWidth,\n    ...args\n  } = {\n    ...argsIn\n  };\n  return <div style={{\n    width: containerWidth\n  }}>\n      <TagOverflow {...args} />\n    </div>;\n}",...ManyTags.parameters?.docs?.source}}},MultilineTags.parameters={...MultilineTags.parameters,docs:{...MultilineTags.parameters?.docs,source:{originalSource:"argsIn => {\n  const {\n    containerWidth,\n    ...args\n  } = {\n    ...argsIn\n  };\n  return <div style={{\n    width: containerWidth\n  }}>\n      <TagOverflow {...args} />\n    </div>;\n}",...MultilineTags.parameters?.docs?.source}}},UserAvatars.parameters={...UserAvatars.parameters,docs:{...UserAvatars.parameters?.docs,source:{originalSource:"argsIn => {\n  const {\n    containerWidth,\n    ...args\n  } = {\n    ...argsIn\n  };\n  return <div style={{\n    width: containerWidth\n  }}>\n      <TagOverflow {...args} />\n    </div>;\n}",...UserAvatars.parameters?.docs?.source}}},ManyUserAvatars.parameters={...ManyUserAvatars.parameters,docs:{...ManyUserAvatars.parameters?.docs,source:{originalSource:"argsIn => {\n  const {\n    containerWidth,\n    ...args\n  } = {\n    ...argsIn\n  };\n  return <div style={{\n    width: containerWidth\n  }}>\n      <TagOverflow {...args} />\n    </div>;\n}",...ManyUserAvatars.parameters?.docs?.source}}},CustomComponent.parameters={...CustomComponent.parameters,docs:{...CustomComponent.parameters?.docs,source:{originalSource:"argsIn => {\n  const {\n    containerWidth,\n    ...args\n  } = {\n    ...argsIn\n  };\n  return <div style={{\n    width: containerWidth\n  }}>\n      <TagOverflow {...args} />\n    </div>;\n}",...CustomComponent.parameters?.docs?.source}}};const __namedExportsOrder=["FiveTags","TagsWithTruncation","ManyTags","MultilineTags","UserAvatars","ManyUserAvatars","CustomComponent"]},"../ibm-products/src/global/js/utils/DisplayBox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>DisplayBox});var _br,_div,_div2,prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),blockClass="ccs-sb--display-box",DisplayBox=function DisplayBox(_ref){var children=_ref.children,className=_ref.className,msg=_ref.msg;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(blockClass,className),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"".concat(blockClass,"__indicator"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"".concat(blockClass,"__message"),children:msg||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["width available to component",_br||(_br=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{})),"(use containerWidth control to adjust)"]})}),_div||(_div=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"".concat(blockClass,"__indicator--left")})),_div2||(_div2=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"".concat(blockClass,"__indicator--right")}))]}),children]})};DisplayBox.displayName="DisplayBox",DisplayBox.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,msg:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node},DisplayBox.__docgenInfo={description:"",methods:[],displayName:"DisplayBox",props:{children:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1},msg:{description:"",type:{name:"node"},required:!1}}}}}]);