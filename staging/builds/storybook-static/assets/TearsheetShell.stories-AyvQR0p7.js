import{j as e,B as R}from"./settings-K-okNOOf.js";import{r as n}from"./index-CTjT7uj6.js";import{s as k}from"./_storybook-styles-BHn2MbcW.js";import{T as f,d as I}from"./TearsheetShell-b54oqIwy.js";import{g as A}from"./props-helper-BHboZCEP.js";import"./deprecate-BLSDO8J_.js";import{S as E,a as M}from"./index-CoeQ0pfL.js";import"./index-BU4hwJwl.js";import"./index-BRV0Se7Z.js";import"./events-D0gen66i.js";import"./index-DN5spsdJ.js";import"./useResizeObserver-BvbgZjpI.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./ComposedModal-DCKNxMI7.js";import"./index-DcAOwtUU.js";import"./ButtonSet-CltDhnub.js";import"./InlineLoading-BAXzw7Vs.js";import"./bucket-5--iEWWNCt.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-ldDxJswA.js";import"./index-DASh2Ycj.js";import"./index-JTvCgqhd.js";import"./LayerContext-BJwyboGm.js";import"./usePortalTarget-lVyVVJ8W.js";import"./index-DPPyOf9C.js";import"./index-DshjxXYm.js";import"./useFocus-DhLhz8zr.js";import"./usePreviousValue-BqVTtLed.js";import"./ActionSet-B0KKiE1i.js";import"./bucket-16-C5jbOqAN.js";const fe={title:"IBM Products/Internal/TearsheetShell",component:f,tags:["autodocs"],parameters:{controls:{expanded:!0},styles:k},argTypes:{...A(I),influencer:{control:{type:"boolean"}},portalTarget:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}}},z="Close the tearsheet",B="client-class-1 client-class-2",_=e.jsx("div",{style:{padding:"50px",height:"400px"},children:Array.from({length:10},(o,l)=>({key:`Paragraph-${l}`})).map(({key:o})=>e.jsx("p",{children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."},o))}),w=e.jsx(E,{className:"slug-container",size:"xs",children:e.jsx(M,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),C=({influencer:o,open:l,slug:i,...u},m)=>{const d=n.useRef(),[t,c]=n.useState(m.viewMode!=="docs"&&l),[s,h]=n.useState(!1);return n.useEffect(()=>h(s||t),[t,s]),e.jsxs("div",{ref:d,children:[e.jsxs(R,{onClick:()=>c(!0),children:[s?"Reopen the":"Open the"," context.component.componentName"]})," ",e.jsx(f,{className:B,...u,influencer:o&&e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:"Influencer"}),open:t,onClose:()=>c(!1),slug:i&&w,title:"Tearsheet title",children:_})]})},F=({influencer:o,open:l,slug:i,...u},m)=>{const d=n.useRef(),[t,c]=n.useState(m.viewMode!=="docs"&&l),[s,h]=n.useState(!1);n.useEffect(()=>h(s||t),[t,s]);const g=n.useRef();return e.jsxs("div",{ref:d,children:[e.jsxs(R,{ref:g,onClick:()=>c(!0),children:[s?"Reopen the":"Open the"," context.component.componentName"]})," ",e.jsx(f,{className:B,...u,influencer:o&&e.jsx("div",{className:"tearsheet-stories__dummy-content-block",children:"Influencer"}),open:t,onClose:()=>c(!1),slug:i&&w,title:"Tearsheet title",launcherButtonRef:g,children:_})]})},a=C.bind({});a.args={closeIconDescription:z,height:"normal",open:!0,size:"narrow"};const r=C.bind({});r.args={size:"wide"};const p=F.bind({});r.args={size:"wide"};var x,O,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`({
  influencer,
  open: _open,
  slug,
  ...args
}, context) => {
  const ref = useRef();
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  return <div ref={ref}>
      <Button onClick={() => setOpen(true)}>
        {beenOpen ? 'Reopen the' : 'Open the'} context.component.componentName
      </Button>{' '}
      <TearsheetShell className={className} {...args} influencer={influencer && <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug} title={'Tearsheet title'}>
        {dummyContent}
      </TearsheetShell>
    </div>;
}`,...(b=(O=a.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var S,y,N;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`({
  influencer,
  open: _open,
  slug,
  ...args
}, context) => {
  const ref = useRef();
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  return <div ref={ref}>
      <Button onClick={() => setOpen(true)}>
        {beenOpen ? 'Reopen the' : 'Open the'} context.component.componentName
      </Button>{' '}
      <TearsheetShell className={className} {...args} influencer={influencer && <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug} title={'Tearsheet title'}>
        {dummyContent}
      </TearsheetShell>
    </div>;
}`,...(N=(y=r.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var v,T,j;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`({
  influencer,
  open: _open,
  slug,
  ...args
}, context) => {
  const ref = useRef();
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  const buttonRef = useRef();
  return <div ref={ref}>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        {beenOpen ? 'Reopen the' : 'Open the'} context.component.componentName
      </Button>{' '}
      <TearsheetShell className={className} {...args} influencer={influencer && <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>} open={open} onClose={() => setOpen(false)} slug={slug && sampleSlug} title={'Tearsheet title'} launcherButtonRef={buttonRef}>
        {dummyContent}
      </TearsheetShell>
    </div>;
}`,...(j=(T=p.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const ge=["AllAttributesSet","NoAttributesSet","ReturnFocusToOpenButton"];export{a as AllAttributesSet,r as NoAttributesSet,p as ReturnFocusToOpenButton,ge as __namedExportsOrder,fe as default};
