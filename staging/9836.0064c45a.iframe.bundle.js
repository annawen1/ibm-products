(self.webpackChunk_carbon_ibm_cloud_cognitive_core=self.webpackChunk_carbon_ibm_cloud_cognitive_core||[]).push([[9836],{"../../node_modules/use-resize-observer/dist/bundle.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useResizeObserver});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function extractSize(entry,boxProp,sizeType){return entry[boxProp]?entry[boxProp][0]?entry[boxProp][0][sizeType]:entry[boxProp][sizeType]:"contentBoxSize"===boxProp?entry.contentRect["inlineSize"===sizeType?"width":"height"]:void 0}function useResizeObserver(opts){void 0===opts&&(opts={});var onResize=opts.onResize,onResizeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);onResizeRef.current=onResize;var round=opts.round||Math.round,resizeObserverRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({width:void 0,height:void 0}),size=_useState[0],setSize=_useState[1],didUnmount=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return didUnmount.current=!1,function(){didUnmount.current=!0}}),[]);var previous=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({width:void 0,height:void 0}),refCallback=function useResolvedElement(subscriber,refOrElement){var lastReportRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),refOrElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);refOrElementRef.current=refOrElement;var cbElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){evaluateSubscription()}));var evaluateSubscription=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){var cbElement=cbElementRef.current,refOrElement=refOrElementRef.current,element=cbElement||(refOrElement?refOrElement instanceof Element?refOrElement:refOrElement.current:null);lastReportRef.current&&lastReportRef.current.element===element&&lastReportRef.current.subscriber===subscriber||(lastReportRef.current&&lastReportRef.current.cleanup&&lastReportRef.current.cleanup(),lastReportRef.current={element,subscriber,cleanup:element?subscriber(element):void 0})}),[subscriber]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return function(){lastReportRef.current&&lastReportRef.current.cleanup&&(lastReportRef.current.cleanup(),lastReportRef.current=null)}}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(element){cbElementRef.current=element,evaluateSubscription()}),[evaluateSubscription])}((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(element){return resizeObserverRef.current&&resizeObserverRef.current.box===opts.box&&resizeObserverRef.current.round===round||(resizeObserverRef.current={box:opts.box,round,instance:new ResizeObserver((function(entries){var entry=entries[0],boxProp="border-box"===opts.box?"borderBoxSize":"device-pixel-content-box"===opts.box?"devicePixelContentBoxSize":"contentBoxSize",reportedWidth=extractSize(entry,boxProp,"inlineSize"),reportedHeight=extractSize(entry,boxProp,"blockSize"),newWidth=reportedWidth?round(reportedWidth):void 0,newHeight=reportedHeight?round(reportedHeight):void 0;if(previous.current.width!==newWidth||previous.current.height!==newHeight){var newSize={width:newWidth,height:newHeight};previous.current.width=newWidth,previous.current.height=newHeight,onResizeRef.current?onResizeRef.current(newSize):didUnmount.current||setSize(newSize)}}))}),resizeObserverRef.current.instance.observe(element,{box:opts.box}),function(){resizeObserverRef.current&&resizeObserverRef.current.instance.unobserve(element)}}),[opts.box,round]),opts.ref);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{ref:refCallback,width:size.width,height:size.height}}),[refCallback,size.width,size.height])}},"../../node_modules/util/support/isBufferBrowser.js":module=>{module.exports=function isBuffer(arg){return arg&&"object"==typeof arg&&"function"==typeof arg.copy&&"function"==typeof arg.fill&&"function"==typeof arg.readUInt8}},"../../node_modules/util/support/types.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var isArgumentsObject=__webpack_require__("../../node_modules/is-arguments/index.js"),isGeneratorFunction=__webpack_require__("../../node_modules/is-generator-function/index.js"),whichTypedArray=__webpack_require__("../../node_modules/which-typed-array/index.js"),isTypedArray=__webpack_require__("../../node_modules/is-typed-array/index.js");function uncurryThis(f){return f.call.bind(f)}var BigIntSupported="undefined"!=typeof BigInt,SymbolSupported="undefined"!=typeof Symbol,ObjectToString=uncurryThis(Object.prototype.toString),numberValue=uncurryThis(Number.prototype.valueOf),stringValue=uncurryThis(String.prototype.valueOf),booleanValue=uncurryThis(Boolean.prototype.valueOf);if(BigIntSupported)var bigIntValue=uncurryThis(BigInt.prototype.valueOf);if(SymbolSupported)var symbolValue=uncurryThis(Symbol.prototype.valueOf);function checkBoxedPrimitive(value,prototypeValueOf){if("object"!=typeof value)return!1;try{return prototypeValueOf(value),!0}catch(e){return!1}}function isMapToString(value){return"[object Map]"===ObjectToString(value)}function isSetToString(value){return"[object Set]"===ObjectToString(value)}function isWeakMapToString(value){return"[object WeakMap]"===ObjectToString(value)}function isWeakSetToString(value){return"[object WeakSet]"===ObjectToString(value)}function isArrayBufferToString(value){return"[object ArrayBuffer]"===ObjectToString(value)}function isArrayBuffer(value){return"undefined"!=typeof ArrayBuffer&&(isArrayBufferToString.working?isArrayBufferToString(value):value instanceof ArrayBuffer)}function isDataViewToString(value){return"[object DataView]"===ObjectToString(value)}function isDataView(value){return"undefined"!=typeof DataView&&(isDataViewToString.working?isDataViewToString(value):value instanceof DataView)}exports.isArgumentsObject=isArgumentsObject,exports.isGeneratorFunction=isGeneratorFunction,exports.isTypedArray=isTypedArray,exports.isPromise=function isPromise(input){return"undefined"!=typeof Promise&&input instanceof Promise||null!==input&&"object"==typeof input&&"function"==typeof input.then&&"function"==typeof input.catch},exports.isArrayBufferView=function isArrayBufferView(value){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(value):isTypedArray(value)||isDataView(value)},exports.isUint8Array=function isUint8Array(value){return"Uint8Array"===whichTypedArray(value)},exports.isUint8ClampedArray=function isUint8ClampedArray(value){return"Uint8ClampedArray"===whichTypedArray(value)},exports.isUint16Array=function isUint16Array(value){return"Uint16Array"===whichTypedArray(value)},exports.isUint32Array=function isUint32Array(value){return"Uint32Array"===whichTypedArray(value)},exports.isInt8Array=function isInt8Array(value){return"Int8Array"===whichTypedArray(value)},exports.isInt16Array=function isInt16Array(value){return"Int16Array"===whichTypedArray(value)},exports.isInt32Array=function isInt32Array(value){return"Int32Array"===whichTypedArray(value)},exports.isFloat32Array=function isFloat32Array(value){return"Float32Array"===whichTypedArray(value)},exports.isFloat64Array=function isFloat64Array(value){return"Float64Array"===whichTypedArray(value)},exports.isBigInt64Array=function isBigInt64Array(value){return"BigInt64Array"===whichTypedArray(value)},exports.isBigUint64Array=function isBigUint64Array(value){return"BigUint64Array"===whichTypedArray(value)},isMapToString.working="undefined"!=typeof Map&&isMapToString(new Map),exports.isMap=function isMap(value){return"undefined"!=typeof Map&&(isMapToString.working?isMapToString(value):value instanceof Map)},isSetToString.working="undefined"!=typeof Set&&isSetToString(new Set),exports.isSet=function isSet(value){return"undefined"!=typeof Set&&(isSetToString.working?isSetToString(value):value instanceof Set)},isWeakMapToString.working="undefined"!=typeof WeakMap&&isWeakMapToString(new WeakMap),exports.isWeakMap=function isWeakMap(value){return"undefined"!=typeof WeakMap&&(isWeakMapToString.working?isWeakMapToString(value):value instanceof WeakMap)},isWeakSetToString.working="undefined"!=typeof WeakSet&&isWeakSetToString(new WeakSet),exports.isWeakSet=function isWeakSet(value){return isWeakSetToString(value)},isArrayBufferToString.working="undefined"!=typeof ArrayBuffer&&isArrayBufferToString(new ArrayBuffer),exports.isArrayBuffer=isArrayBuffer,isDataViewToString.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&isDataViewToString(new DataView(new ArrayBuffer(1),0,1)),exports.isDataView=isDataView;var SharedArrayBufferCopy="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function isSharedArrayBufferToString(value){return"[object SharedArrayBuffer]"===ObjectToString(value)}function isSharedArrayBuffer(value){return void 0!==SharedArrayBufferCopy&&(void 0===isSharedArrayBufferToString.working&&(isSharedArrayBufferToString.working=isSharedArrayBufferToString(new SharedArrayBufferCopy)),isSharedArrayBufferToString.working?isSharedArrayBufferToString(value):value instanceof SharedArrayBufferCopy)}function isNumberObject(value){return checkBoxedPrimitive(value,numberValue)}function isStringObject(value){return checkBoxedPrimitive(value,stringValue)}function isBooleanObject(value){return checkBoxedPrimitive(value,booleanValue)}function isBigIntObject(value){return BigIntSupported&&checkBoxedPrimitive(value,bigIntValue)}function isSymbolObject(value){return SymbolSupported&&checkBoxedPrimitive(value,symbolValue)}exports.isSharedArrayBuffer=isSharedArrayBuffer,exports.isAsyncFunction=function isAsyncFunction(value){return"[object AsyncFunction]"===ObjectToString(value)},exports.isMapIterator=function isMapIterator(value){return"[object Map Iterator]"===ObjectToString(value)},exports.isSetIterator=function isSetIterator(value){return"[object Set Iterator]"===ObjectToString(value)},exports.isGeneratorObject=function isGeneratorObject(value){return"[object Generator]"===ObjectToString(value)},exports.isWebAssemblyCompiledModule=function isWebAssemblyCompiledModule(value){return"[object WebAssembly.Module]"===ObjectToString(value)},exports.isNumberObject=isNumberObject,exports.isStringObject=isStringObject,exports.isBooleanObject=isBooleanObject,exports.isBigIntObject=isBigIntObject,exports.isSymbolObject=isSymbolObject,exports.isBoxedPrimitive=function isBoxedPrimitive(value){return isNumberObject(value)||isStringObject(value)||isBooleanObject(value)||isBigIntObject(value)||isSymbolObject(value)},exports.isAnyArrayBuffer=function isAnyArrayBuffer(value){return"undefined"!=typeof Uint8Array&&(isArrayBuffer(value)||isSharedArrayBuffer(value))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(method){Object.defineProperty(exports,method,{enumerable:!1,value:function(){throw new Error(method+" is not supported in userland")}})}))},"../../node_modules/util/util.js":(__unused_webpack_module,exports,__webpack_require__)=>{var process=__webpack_require__("../../node_modules/process/browser.js"),getOwnPropertyDescriptors=Object.getOwnPropertyDescriptors||function getOwnPropertyDescriptors(obj){for(var keys=Object.keys(obj),descriptors={},i=0;i<keys.length;i++)descriptors[keys[i]]=Object.getOwnPropertyDescriptor(obj,keys[i]);return descriptors},formatRegExp=/%[sdj%]/g;exports.format=function(f){if(!isString(f)){for(var objects=[],i=0;i<arguments.length;i++)objects.push(inspect(arguments[i]));return objects.join(" ")}i=1;for(var args=arguments,len=args.length,str=String(f).replace(formatRegExp,(function(x){if("%%"===x)return"%";if(i>=len)return x;switch(x){case"%s":return String(args[i++]);case"%d":return Number(args[i++]);case"%j":try{return JSON.stringify(args[i++])}catch(_){return"[Circular]"}default:return x}})),x=args[i];i<len;x=args[++i])isNull(x)||!isObject(x)?str+=" "+x:str+=" "+inspect(x);return str},exports.deprecate=function(fn,msg){if(void 0!==process&&!0===process.noDeprecation)return fn;if(void 0===process)return function(){return exports.deprecate(fn,msg).apply(this,arguments)};var warned=!1;return function deprecated(){if(!warned){if(process.throwDeprecation)throw new Error(msg);process.traceDeprecation?console.trace(msg):console.error(msg),warned=!0}return fn.apply(this,arguments)}};var debugs={},debugEnvRegex=/^$/;if(process.env.NODE_DEBUG){var debugEnv=process.env.NODE_DEBUG;debugEnv=debugEnv.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase(),debugEnvRegex=new RegExp("^"+debugEnv+"$","i")}function inspect(obj,opts){var ctx={seen:[],stylize:stylizeNoColor};return arguments.length>=3&&(ctx.depth=arguments[2]),arguments.length>=4&&(ctx.colors=arguments[3]),isBoolean(opts)?ctx.showHidden=opts:opts&&exports._extend(ctx,opts),isUndefined(ctx.showHidden)&&(ctx.showHidden=!1),isUndefined(ctx.depth)&&(ctx.depth=2),isUndefined(ctx.colors)&&(ctx.colors=!1),isUndefined(ctx.customInspect)&&(ctx.customInspect=!0),ctx.colors&&(ctx.stylize=stylizeWithColor),formatValue(ctx,obj,ctx.depth)}function stylizeWithColor(str,styleType){var style=inspect.styles[styleType];return style?"["+inspect.colors[style][0]+"m"+str+"["+inspect.colors[style][1]+"m":str}function stylizeNoColor(str,styleType){return str}function formatValue(ctx,value,recurseTimes){if(ctx.customInspect&&value&&isFunction(value.inspect)&&value.inspect!==exports.inspect&&(!value.constructor||value.constructor.prototype!==value)){var ret=value.inspect(recurseTimes,ctx);return isString(ret)||(ret=formatValue(ctx,ret,recurseTimes)),ret}var primitive=function formatPrimitive(ctx,value){if(isUndefined(value))return ctx.stylize("undefined","undefined");if(isString(value)){var simple="'"+JSON.stringify(value).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return ctx.stylize(simple,"string")}if(isNumber(value))return ctx.stylize(""+value,"number");if(isBoolean(value))return ctx.stylize(""+value,"boolean");if(isNull(value))return ctx.stylize("null","null")}(ctx,value);if(primitive)return primitive;var keys=Object.keys(value),visibleKeys=function arrayToHash(array){var hash={};return array.forEach((function(val,idx){hash[val]=!0})),hash}(keys);if(ctx.showHidden&&(keys=Object.getOwnPropertyNames(value)),isError(value)&&(keys.indexOf("message")>=0||keys.indexOf("description")>=0))return formatError(value);if(0===keys.length){if(isFunction(value)){var name=value.name?": "+value.name:"";return ctx.stylize("[Function"+name+"]","special")}if(isRegExp(value))return ctx.stylize(RegExp.prototype.toString.call(value),"regexp");if(isDate(value))return ctx.stylize(Date.prototype.toString.call(value),"date");if(isError(value))return formatError(value)}var output,base="",array=!1,braces=["{","}"];(isArray(value)&&(array=!0,braces=["[","]"]),isFunction(value))&&(base=" [Function"+(value.name?": "+value.name:"")+"]");return isRegExp(value)&&(base=" "+RegExp.prototype.toString.call(value)),isDate(value)&&(base=" "+Date.prototype.toUTCString.call(value)),isError(value)&&(base=" "+formatError(value)),0!==keys.length||array&&0!=value.length?recurseTimes<0?isRegExp(value)?ctx.stylize(RegExp.prototype.toString.call(value),"regexp"):ctx.stylize("[Object]","special"):(ctx.seen.push(value),output=array?function formatArray(ctx,value,recurseTimes,visibleKeys,keys){for(var output=[],i=0,l=value.length;i<l;++i)hasOwnProperty(value,String(i))?output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),!0)):output.push("");return keys.forEach((function(key){key.match(/^\d+$/)||output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,!0))})),output}(ctx,value,recurseTimes,visibleKeys,keys):keys.map((function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array)})),ctx.seen.pop(),function reduceToSingleString(output,base,braces){var length=output.reduce((function(prev,cur){return cur.indexOf("\n")>=0&&0,prev+cur.replace(/\u001b\[\d\d?m/g,"").length+1}),0);if(length>60)return braces[0]+(""===base?"":base+"\n ")+" "+output.join(",\n  ")+" "+braces[1];return braces[0]+base+" "+output.join(", ")+" "+braces[1]}(output,base,braces)):braces[0]+base+braces[1]}function formatError(value){return"["+Error.prototype.toString.call(value)+"]"}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str,desc;if((desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]}).get?str=desc.set?ctx.stylize("[Getter/Setter]","special"):ctx.stylize("[Getter]","special"):desc.set&&(str=ctx.stylize("[Setter]","special")),hasOwnProperty(visibleKeys,key)||(name="["+key+"]"),str||(ctx.seen.indexOf(desc.value)<0?(str=isNull(recurseTimes)?formatValue(ctx,desc.value,null):formatValue(ctx,desc.value,recurseTimes-1)).indexOf("\n")>-1&&(str=array?str.split("\n").map((function(line){return"  "+line})).join("\n").slice(2):"\n"+str.split("\n").map((function(line){return"   "+line})).join("\n")):str=ctx.stylize("[Circular]","special")),isUndefined(name)){if(array&&key.match(/^\d+$/))return str;(name=JSON.stringify(""+key)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(name=name.slice(1,-1),name=ctx.stylize(name,"name")):(name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),name=ctx.stylize(name,"string"))}return name+": "+str}function isArray(ar){return Array.isArray(ar)}function isBoolean(arg){return"boolean"==typeof arg}function isNull(arg){return null===arg}function isNumber(arg){return"number"==typeof arg}function isString(arg){return"string"==typeof arg}function isUndefined(arg){return void 0===arg}function isRegExp(re){return isObject(re)&&"[object RegExp]"===objectToString(re)}function isObject(arg){return"object"==typeof arg&&null!==arg}function isDate(d){return isObject(d)&&"[object Date]"===objectToString(d)}function isError(e){return isObject(e)&&("[object Error]"===objectToString(e)||e instanceof Error)}function isFunction(arg){return"function"==typeof arg}function objectToString(o){return Object.prototype.toString.call(o)}function pad(n){return n<10?"0"+n.toString(10):n.toString(10)}exports.debuglog=function(set){if(set=set.toUpperCase(),!debugs[set])if(debugEnvRegex.test(set)){var pid=process.pid;debugs[set]=function(){var msg=exports.format.apply(exports,arguments);console.error("%s %d: %s",set,pid,msg)}}else debugs[set]=function(){};return debugs[set]},exports.inspect=inspect,inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},inspect.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},exports.types=__webpack_require__("../../node_modules/util/support/types.js"),exports.isArray=isArray,exports.isBoolean=isBoolean,exports.isNull=isNull,exports.isNullOrUndefined=function isNullOrUndefined(arg){return null==arg},exports.isNumber=isNumber,exports.isString=isString,exports.isSymbol=function isSymbol(arg){return"symbol"==typeof arg},exports.isUndefined=isUndefined,exports.isRegExp=isRegExp,exports.types.isRegExp=isRegExp,exports.isObject=isObject,exports.isDate=isDate,exports.types.isDate=isDate,exports.isError=isError,exports.types.isNativeError=isError,exports.isFunction=isFunction,exports.isPrimitive=function isPrimitive(arg){return null===arg||"boolean"==typeof arg||"number"==typeof arg||"string"==typeof arg||"symbol"==typeof arg||void 0===arg},exports.isBuffer=__webpack_require__("../../node_modules/util/support/isBufferBrowser.js");var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}exports.log=function(){console.log("%s - %s",function timestamp(){var d=new Date,time=[pad(d.getHours()),pad(d.getMinutes()),pad(d.getSeconds())].join(":");return[d.getDate(),months[d.getMonth()],time].join(" ")}(),exports.format.apply(exports,arguments))},exports.inherits=__webpack_require__("../../node_modules/inherits/inherits_browser.js"),exports._extend=function(origin,add){if(!add||!isObject(add))return origin;for(var keys=Object.keys(add),i=keys.length;i--;)origin[keys[i]]=add[keys[i]];return origin};var kCustomPromisifiedSymbol="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function callbackifyOnRejected(reason,cb){if(!reason){var newReason=new Error("Promise was rejected with a falsy value");newReason.reason=reason,reason=newReason}return cb(reason)}exports.promisify=function promisify(original){if("function"!=typeof original)throw new TypeError('The "original" argument must be of type Function');if(kCustomPromisifiedSymbol&&original[kCustomPromisifiedSymbol]){var fn;if("function"!=typeof(fn=original[kCustomPromisifiedSymbol]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(fn,kCustomPromisifiedSymbol,{value:fn,enumerable:!1,writable:!1,configurable:!0}),fn}function fn(){for(var promiseResolve,promiseReject,promise=new Promise((function(resolve,reject){promiseResolve=resolve,promiseReject=reject})),args=[],i=0;i<arguments.length;i++)args.push(arguments[i]);args.push((function(err,value){err?promiseReject(err):promiseResolve(value)}));try{original.apply(this,args)}catch(err){promiseReject(err)}return promise}return Object.setPrototypeOf(fn,Object.getPrototypeOf(original)),kCustomPromisifiedSymbol&&Object.defineProperty(fn,kCustomPromisifiedSymbol,{value:fn,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(fn,getOwnPropertyDescriptors(original))},exports.promisify.custom=kCustomPromisifiedSymbol,exports.callbackify=function callbackify(original){if("function"!=typeof original)throw new TypeError('The "original" argument must be of type Function');function callbackified(){for(var args=[],i=0;i<arguments.length;i++)args.push(arguments[i]);var maybeCb=args.pop();if("function"!=typeof maybeCb)throw new TypeError("The last argument must be of type Function");var self=this,cb=function(){return maybeCb.apply(self,arguments)};original.apply(this,args).then((function(ret){process.nextTick(cb.bind(null,null,ret))}),(function(rej){process.nextTick(callbackifyOnRejected.bind(null,rej,cb))}))}return Object.setPrototypeOf(callbackified,Object.getPrototypeOf(original)),Object.defineProperties(callbackified,getOwnPropertyDescriptors(original)),callbackified}},"../../node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();const rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)}},"../../node_modules/which-typed-array/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var forEach=__webpack_require__("../../node_modules/for-each/index.js"),availableTypedArrays=__webpack_require__("../../node_modules/available-typed-arrays/index.js"),callBind=__webpack_require__("../../node_modules/call-bind/index.js"),callBound=__webpack_require__("../../node_modules/call-bind/callBound.js"),gOPD=__webpack_require__("../../node_modules/gopd/index.js"),$toString=callBound("Object.prototype.toString"),hasToStringTag=__webpack_require__("../../node_modules/has-tostringtag/shams.js")(),g="undefined"==typeof globalThis?__webpack_require__.g:globalThis,typedArrays=availableTypedArrays(),$slice=callBound("String.prototype.slice"),getPrototypeOf=Object.getPrototypeOf,$indexOf=callBound("Array.prototype.indexOf",!0)||function indexOf(array,value){for(var i=0;i<array.length;i+=1)if(array[i]===value)return i;return-1},cache={__proto__:null};forEach(typedArrays,hasToStringTag&&gOPD&&getPrototypeOf?function(typedArray){var arr=new g[typedArray];if(Symbol.toStringTag in arr){var proto=getPrototypeOf(arr),descriptor=gOPD(proto,Symbol.toStringTag);if(!descriptor){var superProto=getPrototypeOf(proto);descriptor=gOPD(superProto,Symbol.toStringTag)}cache["$"+typedArray]=callBind(descriptor.get)}}:function(typedArray){var arr=new g[typedArray],fn=arr.slice||arr.set;fn&&(cache["$"+typedArray]=callBind(fn))});module.exports=function whichTypedArray(value){if(!value||"object"!=typeof value)return!1;if(!hasToStringTag){var tag=$slice($toString(value),8,-1);return $indexOf(typedArrays,tag)>-1?tag:"Object"===tag&&function tryAllSlices(value){var found=!1;return forEach(cache,(function(getter,name){if(!found)try{getter(value),found=$slice(name,1)}catch(e){}})),found}(value)}return gOPD?function tryAllTypedArrays(value){var found=!1;return forEach(cache,(function(getter,typedArray){if(!found)try{"$"+getter(value)===typedArray&&(found=$slice(typedArray,1))}catch(e){}})),found}(value):null}},"../../node_modules/window-or-global/lib/index.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports="object"==typeof self&&self.self===self&&self||"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g||this}}]);