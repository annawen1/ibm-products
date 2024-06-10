import{a as q,p as J,j as e}from"./settings-K-okNOOf.js";import{r as b,R as ce}from"./index-CTjT7uj6.js";import{a as _}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as L}from"./deprecate-BLSDO8J_.js";import{D}from"./Dropdown-ClvEqLzO.js";import{F as pe}from"./FormGroup-jYEYux68.js";import{u as Y}from"./uuidv4-BQrI85uz.js";import{P as t}from"./index-BRV0Se7Z.js";import{g as ue}from"./devtools-Bwmhsu0A.js";import{T as me}from"./Toggle-DKzAE0hq.js";import{L as ge}from"./index-JTvCgqhd.js";import{a as W,e as F}from"./index-DkUr2NOz.js";import{b as B}from"./bucket-9-DYUdiojH.js";import{k as he}from"./events-D0gen66i.js";import{W as be,a as fe}from"./bucket-17-DCCQrBLC.js";import"./index-BU4hwJwl.js";import"./index-DN5spsdJ.js";import"./v4-CQkTLCs1.js";import"./index-Dgpqnxx_.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-CI8bilKU.js";import"./FormContext-D0sdIVRD.js";import"./mergeRefs-CTUecegF.js";import"./useControllableState-B1slDU0H.js";import"./Text-CJa2B8Yb.js";import"./LayerContext-BJwyboGm.js";function Te({defaultValue:l,name:m="custom",onChange:o,value:a}){const[g,r]=b.useState(a??l),i=b.useRef(null);i.current===null&&(i.current=a!==void 0);function h(d){const c=typeof d=="function"?d(g):d;i.current===!1&&r(c),o&&o(c)}return b.useEffect(()=>{const d=a!==void 0;i.current===!1&&d&&q.warn(`A component is changing an uncontrolled %s component to be controlled.
          This is likely caused by the value changing to a defined value
          from undefined. Decide between using a controlled or uncontrolled
          value for the lifetime of the component.
          More info: https://reactjs.org/link/controlled-components`),i.current===!0&&!d&&q.warn(`A component is changing a controlled %s component to be uncontrolled.
        'This is likely caused by the value changing to an undefined value
        'from a defined one. Decide between using a controlled or
        'uncontrolled value for the lifetime of the component.
        'More info: https://reactjs.org/link/controlled-components`)},[m,a]),i.current===!0?[a,h]:[g,h]}const n=`${J.prefix}--options-tile`,O="OptionsTile",ye={size:"lg"};let f=ce.forwardRef(({children:l,className:m,enabled:o,invalid:a,invalidText:g,locked:r,lockedText:i,onChange:h,onToggle:d,open:c,size:Q=ye.size,summary:X,title:Z,titleId:ee,warn:k,warnText:ne,...ie},te)=>{const[ae,le]=b.useState(c),[se,S]=b.useState(!1),[w,C]=Te({defaultValue:c||null,name:"OptionsTile",onChange:s=>h==null?void 0:h(s),value:c}),E=b.useRef(null),T=b.useRef(null),oe=Y(),I=ee??`${oe}-title`,re=l!==void 0,P=a,$=!P&&!(!P&&k)&&r,N=window&&window.matchMedia?window.matchMedia("(prefers-reduced-motion: reduce)"):{matches:!0};c!==ae&&(w&&!c?A():!w&&c&&z(),le(c));function z(){if(E.current&&T.current&&!N.matches){C(!0),E.current.open=!0;const{paddingTop:s,paddingBottom:p,height:u}=getComputedStyle(T.current);T.current.animate([{paddingTop:0,paddingBottom:0,height:0,opacity:0,overflow:"hidden"},{paddingTop:s,paddingBottom:p,height:u,opacity:1,overflow:"hidden"}],{duration:Number(W.replace("ms","")),easing:F.entrance.productive})}else C(!0)}function A(){if(T.current&&!N.matches){S(!0);const{paddingTop:s,paddingBottom:p,height:u}=getComputedStyle(T.current),j=T.current.animate([{paddingTop:s,paddingBottom:p,height:u,opacity:1},{paddingTop:0,paddingBottom:0,height:0,opacity:0}],{duration:Number(W.replace("ms","")),easing:F.entrance.productive}),y=()=>{C(!1),S(!1)};j.onfinish=y,j.oncancel=y}else C(!1)}function de(s){s.preventDefault(),w?A():z()}function R(){let s=null,p=X;const u=[`${n}__summary`];a?(s=be,p=g,u.push(`${n}__summary--invalid`)):k?(s=fe,p=ne,u.push(`${n}__summary--warn`)):r&&(s=B,u.push(`${n}__summary--locked`),p||(p=i));const y=!(a||k||r)&&o===!1;return y&&u.push(`${n}__summary--hidden`),e.jsxs("div",{className:`${n}__heading`,children:[e.jsx("h6",{id:I,className:`${n}__title`,children:Z}),p&&e.jsxs("span",{className:L(u),"aria-hidden":y,children:[s&&e.jsx(s,{size:16}),e.jsx("span",{className:`${n}__summary-text`,children:p})]})]})}return e.jsxs("div",{...ie,className:L(n,m,`${n}--${Q}`,{[`${n}--closing`]:se}),ref:te,...ue(O),children:[o!==void 0&&e.jsx("div",{className:`${n}__toggle-container`,children:e.jsx(me,{id:`${I}-toggle`,className:`${n}__toggle`,toggled:o,"aria-labelledby":I,hideLabel:!0,onToggle:d,size:"sm",disabled:$})}),re?e.jsxs("details",{open:w,ref:E,children:[e.jsxs("summary",{className:`${n}__header`,onClick:de,children:[e.jsx(he,{size:16,className:`${n}__chevron`}),R()]}),e.jsx("div",{className:`${n}__content`,ref:T,children:e.jsxs(ge,{children:[$&&e.jsxs("p",{className:`${n}__locked-text`,children:[e.jsx(B,{size:16}),i]}),l]})})]}):e.jsx("div",{className:`${n}__static-content`,children:R()})]})});f=J.checkComponentEnabled(f,O);f.displayName=O;f.propTypes={children:t.node,className:t.string,enabled:t.bool,invalid:t.bool,invalidText:t.string,locked:t.bool,lockedText:t.string,onChange:t.func,onToggle:t.func,open:t.bool,size:t.oneOf(["lg","xl"]),summary:t.string,title:t.string.isRequired,titleId:t.string,warn:t.bool,warnText:t.string};f.__docgenInfo={description:"",methods:[],displayName:"OptionsTile",props:{children:{required:!1,tsType:{name:"ReactNode"},description:`Provide content to render as expandable OptionsTile. If no children
are present, the OptionsTile will render as its variant.`,type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},enabled:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is enabled or disabled. If nothing is passed,
no toggle will be rendered.`,type:{name:"bool"}},invalid:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in invalid validation state.",type:{name:"bool"}},invalidText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in invalid state.",type:{name:"string"}},locked:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in locked validation state.",type:{name:"bool"}},lockedText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in locked state.",type:{name:"string"}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
toggles the open state of the OptionsTile.`,type:{name:"func"}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:`Provide a function which will be called each time the user
interacts with the toggle.`,type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in open state.",type:{name:"bool"}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'xl'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"Define the size of the OptionsTile.",defaultValue:{value:"'lg'",computed:!1},type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]}},summary:{required:!1,tsType:{name:"string"},description:"Optionally provide a text summarizing the current state of the content.",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"Provide the title for this OptionsTile.",type:{name:"string"}},titleId:{required:!1,tsType:{name:"string"},description:"Optionally provide an id which should be used for the title.",type:{name:"string"}},warn:{required:!1,tsType:{name:"boolean"},description:"Whether the OptionsTile is in warning validation state.",type:{name:"bool"}},warnText:{required:!1,tsType:{name:"string"},description:"Provide a text explaining why the OptionsTile is in warning state.",type:{name:"string"}}}};const ve=".c4p--options-tile{width:80vw;min-width:16rem;max-width:48rem}.c4p--options-tile__content p{font-size:var(--cds-body-01-font-size, .875rem);font-weight:var(--cds-body-01-font-weight, 400);line-height:var(--cds-body-01-line-height, 1.42857);letter-spacing:var(--cds-body-01-letter-spacing, .16px);margin-bottom:1.5rem}.c4p--options-tile__content .cds--dropdown__wrapper:first-of-type{margin-bottom:1.5rem}",Qe={title:"IBM Products/Components/Options tile/OptionsTile",component:f,tags:["autodocs"],parameters:{styles:ve}},xe=l=>{const m=[{label:"English",id:"en"},{label:"简体中文 - Chinese Simplified",id:"zh-CN"},{label:"繁體中文 - Chinese Traditional",id:"zh-TW"},{label:"Français - French",id:"fr"},{label:"Deutsch - German",id:"de"},{label:"Italiano - Italian",id:"it"},{label:"日本語 - Japanese",id:"ja"},{label:"한국어 - Korean",id:"ko"},{label:"Polski - Polish",id:"pl"},{label:"Português (brasileiro) - Portuguese (Brazilian)",id:"pt-BR"},{label:"Русский - Russian",id:"ru"},{label:"Español - Spanish",id:"es"}],o=[{label:"English",id:"en"},{label:"English-US",id:"en-US"},{label:"English-UK",id:"en-UK"},{label:"English-Canada",id:"en-CA"},{label:"English-Australia",id:"en-AU"},{label:"Japanese",id:"ja"},{label:"Korean",id:"ko"},{label:"Chinese-PRC",id:"zh-CN"},{label:"Chinese-Taiwan",id:"zh-TW"},{label:"Vietnamese",id:"vi"},{label:"Thai",id:"th"},{label:"Russian",id:"ru"},{label:"Polish",id:"pl"},{label:"Greek",id:"el"},{label:"Hebrew",id:"he"},{label:"Arabic",id:"ar"},{label:"Spanish",id:"es"},{label:"German",id:"de"},{label:"French",id:"fr"},{label:"French-Canada",id:"fr-CA"},{label:"Italian",id:"it"},{label:"Portuguese-Brazil",id:"pt-BR"},{label:"Turkish",id:"tr"}],a=Y(),g=l.titleId??`${a}-title`,r=l.invalid,i=!r&&l.warn,h=!r&&!i&&l.locked,d=l.enabled===!1||h;return e.jsx(f,{onToggle:_("onToggle"),onChange:_("onChange"),...l,children:e.jsxs(pe,{"aria-labelledby":g,legendText:"",children:[e.jsx("p",{children:"User interface defines the language the application is displayed in. Locale sets the regional display formats for information like time, date, currency and decimal delimiters."}),e.jsx(D,{id:`${a}-language`,titleText:"User interface",label:"User interface",items:m,initialSelectedItem:m[0],invalid:r,invalidText:"Non-latin languages are not supported by system",warn:i,warnText:"A language change requires a restart of the application",disabled:d}),e.jsx(D,{id:`${a}-locale`,titleText:"Locale",label:"Locale",items:o,initialSelectedItem:o[0],disabled:d})]})})},we=({enabled:l,...m})=>{const[o,a]=b.useState(l);function g(i){a(i),_("onToggle")(i)}function r(i){_("onChange")(i)}return e.jsx(f,{onToggle:g,onChange:r,...m,enabled:o})},v=xe.bind({});v.args={title:"Language",summary:"English | Locale: English",invalidText:"Your system does not support this configuration",warnText:"A restart is required to apply these settings",lockedText:"This option is managed by your administrator"};const x=we.bind({});x.args={title:"Hardware acceleration",enabled:!0};var U,G,K;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  // spell-checker:disable
  const languages = [{
    label: 'English',
    id: 'en'
  }, {
    label: '简体中文 - Chinese Simplified',
    id: 'zh-CN'
  }, {
    label: '繁體中文 - Chinese Traditional',
    id: 'zh-TW'
  }, {
    label: 'Français - French',
    id: 'fr'
  }, {
    label: 'Deutsch - German',
    id: 'de'
  }, {
    label: 'Italiano - Italian',
    id: 'it'
  }, {
    label: '日本語 - Japanese',
    id: 'ja'
  }, {
    label: '한국어 - Korean',
    id: 'ko'
  }, {
    label: 'Polski - Polish',
    id: 'pl'
  }, {
    label: 'Português (brasileiro) - Portuguese (Brazilian)',
    id: 'pt-BR'
  }, {
    label: 'Русский - Russian',
    id: 'ru'
  }, {
    label: 'Español - Spanish',
    id: 'es'
  }];
  const locales = [{
    label: 'English',
    id: 'en'
  }, {
    label: 'English-US',
    id: 'en-US'
  }, {
    label: 'English-UK',
    id: 'en-UK'
  }, {
    label: 'English-Canada',
    id: 'en-CA'
  }, {
    label: 'English-Australia',
    id: 'en-AU'
  }, {
    label: 'Japanese',
    id: 'ja'
  }, {
    label: 'Korean',
    id: 'ko'
  }, {
    label: 'Chinese-PRC',
    id: 'zh-CN'
  }, {
    label: 'Chinese-Taiwan',
    id: 'zh-TW'
  }, {
    label: 'Vietnamese',
    id: 'vi'
  }, {
    label: 'Thai',
    id: 'th'
  }, {
    label: 'Russian',
    id: 'ru'
  }, {
    label: 'Polish',
    id: 'pl'
  }, {
    label: 'Greek',
    id: 'el'
  }, {
    label: 'Hebrew',
    id: 'he'
  }, {
    label: 'Arabic',
    id: 'ar'
  }, {
    label: 'Spanish',
    id: 'es'
  }, {
    label: 'German',
    id: 'de'
  }, {
    label: 'French',
    id: 'fr'
  }, {
    label: 'French-Canada',
    id: 'fr-CA'
  }, {
    label: 'Italian',
    id: 'it'
  }, {
    label: 'Portuguese-Brazil',
    id: 'pt-BR'
  }, {
    label: 'Turkish',
    id: 'tr'
  }];
  // spell-checker:enable

  const id = uuidv4();
  const titleId = args.titleId ?? \`\${id}-title\`;
  const isInvalid = args.invalid;
  const isWarn = !isInvalid && args.warn;
  const isLocked = !isInvalid && !isWarn && args.locked;
  const disableControls = args.enabled === false || isLocked;
  return <OptionsTile onToggle={action('onToggle')} onChange={action('onChange')} {...args}>
      <FormGroup aria-labelledby={titleId} legendText="">
        <p>
          User interface defines the language the application is displayed in.
          Locale sets the regional display formats for information like time,
          date, currency and decimal delimiters.
        </p>
        <Dropdown id={\`\${id}-language\`} titleText="User interface" label="User interface" items={languages} initialSelectedItem={languages[0]} invalid={isInvalid} invalidText="Non-latin languages are not supported by system" warn={isWarn} warnText="A language change requires a restart of the application" disabled={disableControls} />
        <Dropdown id={\`\${id}-locale\`} titleText="Locale" label="Locale" items={locales} initialSelectedItem={locales[0]} disabled={disableControls} />
      </FormGroup>
    </OptionsTile>;
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var V,M,H;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`({
  enabled,
  ...rest
}) => {
  const [liveEnabled, setLiveEnabled] = useState(enabled);
  function onToggle(e) {
    setLiveEnabled(e);
    action('onToggle')(e);
  }
  function onChange(value) {
    action('onChange')(value);
  }
  return <OptionsTile onToggle={onToggle} onChange={onChange} {...rest} enabled={liveEnabled} />;
}`,...(H=(M=x.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};const Xe=["optionsTile","staticOptionsTile"];export{Xe as __namedExportsOrder,Qe as default,v as optionsTile,x as staticOptionsTile};
