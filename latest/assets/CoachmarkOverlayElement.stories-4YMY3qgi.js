import{j as e}from"./settings-CRrTVbgr.js";import{g as d}from"./story-helper-B-B3tTUV.js";import{useMDXComponents as c}from"./index-DSkyVWTJ.js";import"./chunk-HLWAVYOI-C5JlZMjl.js";import{e as p,i as x,C as u}from"./index-D2xy4Ma0.js";import{d as h,c as g}from"./CoachmarkOverlayElements-BTpQXNrD.js";import{C as k}from"./Coachmark-Bmuam-Au.js";import{C}from"./CoachmarkBeacon-D8wW-EGi.js";import"./index-CTjT7uj6.js";import"./index-BU4hwJwl.js";import"./index-BRV0Se7Z.js";import"./deprecate-BLSDO8J_.js";import"./events-D0gen66i.js";import"./index-DN5spsdJ.js";import"./tslib.es6-CI8bilKU.js";import"./iframe-DBTVSOxk.js";import"../sb-preview/runtime.js";import"./react-18-BLKOY-yY.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./inheritsLoose-SLCf_n8R.js";import"./toString-Cu7nsjnZ.js";import"./isSymbol-D87B3_a6.js";import"./index-D4-blIwu.js";import"./index-DrFu-skq.js";import"./uuidv4-BQrI85uz.js";import"./devtools-BECPDnEK.js";import"./bucket-5--iEWWNCt.js";import"./lodash-BQHnPze3.js";import"./SteppedAnimatedMedia-C2_n0IOp.js";import"./lottie-psT8NuZy.js";import"./clamp-r4E2dvSg.js";import"./toNumber-CpuPfuLu.js";import"./Carousel-Crwk9A3i.js";function a(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"coachmarkoverlayelement",children:"CoachmarkOverlayElement"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#about-onboarding",children:"About Onboarding"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#note-on-theming",children:"Note on theming"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#code-sample",children:"Code Sample"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`The CoachmarkOverlayElement is a composable element reserved for use within a
CoachmarkOverlayElements container, which should be used only within the scope
of a Coachmark or a CoachmarkFixed component. There can be one to N number of
CoachmarkOverlayElement components as children to a single
CoachmarkOverlayElements. When more than one CoachmarkOverlayElement components
are used in a CoachmarkOverlayElements, the components are displayed in a
paginated fashion within a carousel.`}),`
`,e.jsx(n.h2,{id:"about-onboarding",children:"About Onboarding"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://pages.github.ibm.com/security/security-design/department/end-to-end-experiences/onboarding/overview/",rel:"nofollow",children:"Onboarding"}),`
is a continuous learning methodology and framework that aims to orient, onboard,
explain, educate, and cultivate novice users into high-functioning power users.`]}),`
`,e.jsx(n.h2,{id:"note-on-theming",children:"Note on theming"}),`
`,e.jsx(n.p,{children:`The CoachmarkOverlayElement does not directly take a theme prop; rather, it
relies on the cascade from classes being set in the
Coachmark/CoachmarkFixed/CoachmarkStack components.`}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(p,{className:"coachmarkExample",withSource:"none",children:e.jsx("div",{className:"CoachmarkBaseExampleUsage",children:e.jsx(x,{of:r})})}),`
`,e.jsx(n.h2,{id:"code-sample",children:"Code sample"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Coachmark ... >
  <CoachmarkOverlayElements ...>

    <CoachmarkOverlayElement
      title='Hello World'
      description='Link opens in new tab.'
      button={
        <Link href='https://www.ibm.com' target='_blank' renderIcon={Crossroads16}>
          Learn more
        </Link>
      } />

     <CoachmarkOverlayElement
        title='Hello World'
        description='Link opens on this page.'
        button={<Link href='https://www.ibm.com'>Learn more</Link>}
      />

  </CoachmarkOverlayElements>

</Coachmark>

`})}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(u,{})]})}function y(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}const b=".CoachmarkBaseExampleUsage{position:relative;display:inline-block;max-height:100%;box-sizing:border-box;padding:1rem;margin-left:50%;transform:translate(-50%)}",oe={title:"IBM Products/Onboarding/Coachmark/Coachmark elements/CoachmarkOverlayElement",component:h,tags:["autodocs"],argTypes:{button:{control:{type:null}},description:{control:{type:null}},nextButtonText:{control:{type:null}},previousButtonLabel:{control:{type:null}}},parameters:{styles:b,docs:{page:y}}},j=o=>{const n=d();return e.jsx(k,{align:"bottom",positionTune:{x:0,y:0},target:e.jsx(C,{label:"Show information",kind:"default"}),theme:n,children:e.jsx(g,{...o,children:e.jsx(h,{title:"Hello World",description:"this is a description test"})})})},r=j.bind({});r.args={closeButtonLabel:"Done",className:"myOverlayElement"};var t,i,s,l,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const theme = getSelectedCarbonTheme();
  return <Coachmark align={'bottom'} positionTune={{
    x: 0,
    y: 0
  }} target={<CoachmarkBeacon label="Show information" kind={'default'} />} theme={theme}>
      <CoachmarkOverlayElements {...args}>
        <CoachmarkOverlayElement title={'Hello World'} description={'this is a description test'} />
      </CoachmarkOverlayElements>
    </Coachmark>;
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};const re=["coachmarkOverlayElement"];export{re as __namedExportsOrder,r as coachmarkOverlayElement,oe as default};
