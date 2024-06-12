import{j as e}from"./settings-CRrTVbgr.js";import{g as k}from"./story-helper-B-B3tTUV.js";import{B as f,C as y,c as b,d as v}from"./CoachmarkOverlayElements-BTpQXNrD.js";import{useMDXComponents as C}from"./index-DSkyVWTJ.js";import"./chunk-HLWAVYOI-C5JlZMjl.js";import{j as O,e as i,i as l,C as E}from"./index-D2xy4Ma0.js";import{C as a}from"./Coachmark-Bmuam-Au.js";import{C as w}from"./CoachmarkBeacon-D8wW-EGi.js";import{C as N}from"./CoachmarkButton-cpUbPHOe.js";import{e as B}from"./deprecate-BLSDO8J_.js";import"./index-CTjT7uj6.js";import"./index-BU4hwJwl.js";import"./index-BRV0Se7Z.js";import"./events-D0gen66i.js";import"./index-DN5spsdJ.js";import"./tslib.es6-CI8bilKU.js";import"./uuidv4-BQrI85uz.js";import"./devtools-BECPDnEK.js";import"./bucket-5--iEWWNCt.js";import"./lodash-BQHnPze3.js";import"./SteppedAnimatedMedia-C2_n0IOp.js";import"./lottie-psT8NuZy.js";import"./clamp-r4E2dvSg.js";import"./toNumber-CpuPfuLu.js";import"./isSymbol-D87B3_a6.js";import"./Carousel-Crwk9A3i.js";import"./iframe-DBTVSOxk.js";import"../sb-preview/runtime.js";import"./react-18-BLKOY-yY.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./inheritsLoose-SLCf_n8R.js";import"./toString-Cu7nsjnZ.js";import"./index-D4-blIwu.js";import"./index-DrFu-skq.js";function s(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...C(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:"Coachmark",component:a}),`
`,e.jsx(o.h1,{id:"coachmark",children:"Coachmark"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#tooltip-example-usage",children:"Tooltip example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#tooltip-code-sample",children:"Tooltip code sample"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#floating-example-usage",children:"Floating example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#floating-code-sample",children:"Floating code sample"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://pages.github.ibm.com/cdai-design/pal/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmarks"}),`
are just-in-time messages used to draw a user’s attention to a particular spot,
and explain new functionality or concepts they might not otherwise notice or
understand.`]}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Note:"})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:`The target prop should always be either a CoachmarkBeacon or a
CoachmarkButton.`}),`
`,e.jsx(o.li,{children:`BEACON_KIND, COACHMARK_OVERLAY_KIND, COACHMARK_ALIGNMENT are enums exported as
a convenience from Coachmark.`}),`
`]}),`
`,e.jsx(o.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(o.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(o.p,{children:`The Coachmark uses the theme prop (e.g., theme='dark') to set the appropriate
background and font colors for the overlay. Specify a value ('light' or 'dark')
to display properly within your usage.`}),`
`,e.jsx(o.h2,{id:"tooltip-example-usage",children:"Tooltip example usage"}),`
`,e.jsx(i,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(l,{of:t})})}),`
`,e.jsx(o.h2,{id:"tooltip-code-sample",children:"Tooltip code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'light'}
  target={<CoachmarkBeacon label="Show information" kind={'tooltip'} />}
>
  <CoachmarkOverlayElements closeButtonLabel="Done">
    <CoachmarkOverlayElement
      title="Hello World"
      description="this is a description test"
    />
  </CoachmarkOverlayElements>
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"floating-example-usage",children:"Floating example usage"}),`
`,e.jsx(i,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(l,{of:r})})}),`
`,e.jsx(o.h2,{id:"floating-code-sample",children:"Floating code sample"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<Coachmark
  theme={'dark'}
  align={'bottom'}
  overlayKind={'floating'}
  target={
    <CoachmarkButton
      kind="tertiary"
      size="md"
      label="Show information"
      renderIcon={Crossroads16}
    >
      Click Me
    </CoachmarkButton>
  }
>
  <CoachmarkOverlayElements closeButtonLabel="Done">
    <CoachmarkOverlayElement
      title="Hello World"
      description="this is a description test"
    />
  </CoachmarkOverlayElements>
</Coachmark>
`})}),`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(E,{})]})}function T(n={}){const{wrapper:o}={...C(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(s,{...n})}):s(n)}const A=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",de={title:"IBM Products/Onboarding/Coachmark",component:a,tags:["autodocs"],argTypes:{theme:{control:{type:null}},target:{control:{type:null}},children:{control:{type:null}},onClose:{control:{type:null}},overlayKind:{control:{type:null}},overlayRef:{control:{type:null}},portalTarget:{control:{type:null}},overlayClassName:{control:{type:null}},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}},className:{control:{type:null}}},parameters:{styles:A,docs:{page:T}}},j=n=>{const o=k();return e.jsx(a,{...n,theme:o,children:e.jsx(b,{closeButtonLabel:"Done",children:e.jsx(v,{title:"Hello World",description:"this is a description test"})})})},t=j.bind({});t.args={theme:"dark",align:"bottom",positionTune:{x:0,y:0},target:e.jsx(w,{label:"Show information",kind:f.DEFAULT})};const r=j.bind({});r.args={theme:"dark",align:"bottom",overlayKind:y.FLOATING,target:e.jsx(N,{kind:"tertiary",size:"md",label:"Show information",renderIcon:B,children:"Click Me"})};var c,m,h,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};var g,x,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark {...args} theme={theme}>
      <CoachmarkOverlayElements closeButtonLabel="Done">
        <CoachmarkOverlayElement title="Hello World" description="this is a description test" />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const pe=["tooltip","floating"];export{pe as __namedExportsOrder,de as default,r as floating,t as tooltip};
