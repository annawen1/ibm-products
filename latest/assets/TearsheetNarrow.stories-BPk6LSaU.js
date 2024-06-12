import{j as e,p as I,B as y}from"./settings-CRrTVbgr.js";import{r as o}from"./index-CTjT7uj6.js";import{a as v}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./deprecate-BLSDO8J_.js";import{F as z}from"./Form-CYMUHmXc.js";import{F as D}from"./FormGroup-jYEYux68.js";import{S as G,a as q}from"./index-75KDai46.js";import{T as H}from"./TextInput-Dn4YHwGS.js";import{T as f,d as J}from"./TearsheetNarrow-DmrSuJpP.js";import{a as K,b as Q,c as U}from"./actions-B6JF5Mm8.js";import{g as V}from"./props-helper-CMbLuKX0.js";import{s as W}from"./_storybook-styles-BHn2MbcW.js";import"./index-BU4hwJwl.js";import"./index-BRV0Se7Z.js";import"./events-D0gen66i.js";import"./index-DN5spsdJ.js";import"./v4-CQkTLCs1.js";import"./bucket-16-C5jbOqAN.js";import"./useNormalizedInputProps-DXf7f817.js";import"./Text-CJa2B8Yb.js";import"./bucket-17-DCCQrBLC.js";import"./FormContext-D0sdIVRD.js";import"./useAnnouncer-MW4fVOqQ.js";import"./devtools-BECPDnEK.js";import"./TearsheetShell-LKA4rQHG.js";import"./useResizeObserver-BvbgZjpI.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-uB4X-JZy.js";import"./index-DcAOwtUU.js";import"./ButtonSet-CltDhnub.js";import"./InlineLoading-BAXzw7Vs.js";import"./bucket-5--iEWWNCt.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-ldDxJswA.js";import"./index-DASh2Ycj.js";import"./index-JTvCgqhd.js";import"./LayerContext-BJwyboGm.js";import"./usePortalTarget-BYb2WbwP.js";import"./index-CJaoAHRt.js";import"./index-DshjxXYm.js";import"./useFocus-B-csjnZ_.js";import"./usePreviousValue-BqVTtLed.js";import"./ActionSet-B7TUuTqf.js";const qe={title:"IBM Products/Components/Tearsheet/TearsheetNarrow",component:f,tags:["autodocs"],parameters:{layout:"fullscreen",styles:W},argTypes:{...V(J),actions:{control:{type:"select",labels:K},options:Q,mapping:U({primary:"Create",secondary:"Close",secondary2:"Save",ghost:"Cancel"},v)},description:{control:{type:"text"}},label:{control:{type:"text"}},title:{control:{type:"text"}},onClose:{control:{disable:!0}},open:{control:{disable:!0}},portalTarget:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}}},w="Close the tearsheet",T="This is a description for the tearsheet, providing an opportunity to   describe the flow.",M="The label of the tearsheet",X=e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:e.jsxs(z,{children:[e.jsx("p",{children:"Main content"}),e.jsx(D,{legendText:"",children:e.jsx(H,{id:"tss-ft1",labelText:"Enter an important value here"})})]})}),P="Title of the tearsheet",x=e.jsx(G,{className:"slug-container",size:"xs",children:e.jsx(q,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),R=({actions:l,slug:c,...p})=>{const[g,n]=o.useState(!1),C=o.useRef(),d=Array.prototype.map.call(l,s=>{if(s.label==="Cancel"){const u=s.onClick;return{...s,onClick:k=>{n(!1),u(k)}}}return s});return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${I.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx(y,{onClick:()=>n(!0),children:"Open Tearsheet"}),e.jsx("div",{ref:C,children:e.jsx(f,{...p,actions:d,open:g,onClose:()=>n(!1),slug:c&&x,children:X})})]})},Y=({actions:l,slug:c,...p})=>{const[g,n]=o.useState(!1),[C,d]=o.useState(!1),[s,u]=o.useState(!1),k=o.useRef(),E=Array.prototype.map.call(l,t=>{if(t.label==="Cancel"){const m=t.onClick;return{...t,onClick:h=>{n(!1),m(h)}}}return t}),$=Array.prototype.map.call(l,t=>{if(t.label==="Cancel"){const m=t.onClick;return{...t,onClick:h=>{d(!1),m(h)}}}return t}),L=Array.prototype.map.call(l,t=>{if(t.label==="Cancel"){const m=t.onClick;return{...t,onClick:h=>{u(!1),m(h)}}}return t});return e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[`.${I.prefix}--tearsheet { opacity: 0 }`,";"]}),e.jsx("div",{style:{height:"3rem"},"data-reserve-space":"for toggle buttons"}),e.jsxs("div",{style:{display:"flex",position:"fixed",top:0,left:0,zIndex:1e4},children:[e.jsx(y,{onClick:()=>n(!g),children:"Toggle #1"}),e.jsx(y,{onClick:()=>d(!C),children:"Toggle #2"}),e.jsx(y,{onClick:()=>u(!s),children:"Toggle #3"})]}),e.jsxs("div",{ref:k,children:[e.jsx(f,{...p,actions:E,title:"Tearsheet #1",open:g,onClose:()=>n(!1),slug:c&&x,children:e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:"Main content 1"})}),e.jsx(f,{...p,actions:$,title:"Tearsheet #2",open:C,onClose:()=>d(!1),slug:c&&x,selectorPrimaryFocus:"#main-content",children:e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:"Main content 2"})}),e.jsx(f,{...p,actions:L,title:"Tearsheet #3",open:s,onClose:()=>u(!1),slug:c&&x,selectorPrimaryFocus:"#main-content",children:e.jsx("div",{className:"tearsheet-stories__narrow-content-block",children:"Main content 3"})})]})]})},r=R.bind({});r.storyName="Narrow tearsheet";r.args={closeIconDescription:w,description:T,onClose:v("onClose called"),title:P,actions:7};const a=R.bind({});a.storyName="Narrow tearsheet with all header items";a.args={closeIconDescription:w,description:T,hasCloseIcon:!0,label:M,onClose:v("onClose called"),title:P,actions:0,slug:1};const i=Y.bind({});i.storyName="Stacking narrow tearsheets";i.args={closeIconDescription:w,description:T,height:"lower",label:M,actions:7};var b,j,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`({
  actions,
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const wiredActions = Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <TearsheetNarrow {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
          {mainContent}
        </TearsheetNarrow>
      </div>
    </>;
}`,...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,A,S;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`({
  actions,
  slug,
  ...args
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const wiredActions = Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <TearsheetNarrow {...args} actions={wiredActions} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug}>
          {mainContent}
        </TearsheetNarrow>
      </div>
    </>;
}`,...(S=(A=a.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var _,B,F;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`({
  actions,
  slug,
  ...args
}) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const ref = useRef();
  const wiredActions1 = Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen1(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  const wiredActions2 = Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen2(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  const wiredActions3 = Array.prototype.map.call(actions, action => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: evt => {
          setOpen3(false);
          previousClick(evt);
        }
      };
    }
    return action;
  });
  return <>
      <style>{\`.\${pkg.prefix}--tearsheet { opacity: 0 }\`};</style>
      <div style={{
      height: '3rem'
    }} data-reserve-space="for toggle buttons" />
      <div style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10000
    }}>
        <Button onClick={() => setOpen1(!open1)}>Toggle #1</Button>
        <Button onClick={() => setOpen2(!open2)}>Toggle #2</Button>
        <Button onClick={() => setOpen3(!open3)}>Toggle #3</Button>
      </div>
      <div ref={ref}>
        <TearsheetNarrow {...args} actions={wiredActions1} title="Tearsheet #1" open={open1} onClose={() => setOpen1(false)} slug={slug && sampleSlug}>
          <div className="tearsheet-stories__narrow-content-block">
            Main content 1
          </div>
        </TearsheetNarrow>
        <TearsheetNarrow {...args} actions={wiredActions2} title="Tearsheet #2" open={open2} onClose={() => setOpen2(false)} slug={slug && sampleSlug} selectorPrimaryFocus="#main-content">
          <div className="tearsheet-stories__narrow-content-block">
            Main content 2
          </div>
        </TearsheetNarrow>
        <TearsheetNarrow {...args} actions={wiredActions3} title="Tearsheet #3" open={open3} onClose={() => setOpen3(false)} slug={slug && sampleSlug} selectorPrimaryFocus="#main-content">
          <div className="tearsheet-stories__narrow-content-block">
            Main content 3
          </div>
        </TearsheetNarrow>
      </div>
    </>;
}`,...(F=(B=i.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const He=["tearsheetNarrow","fullyLoaded","stacked"];export{He as __namedExportsOrder,qe as default,a as fullyLoaded,i as stacked,r as tearsheetNarrow};
