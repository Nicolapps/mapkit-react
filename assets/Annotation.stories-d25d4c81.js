import{j as t}from"./jsx-runtime-50395f49.js";import{r as u}from"./index-9fa1aa67.js";import{f as l}from"./index-2b399915.js";import{F as p,M as c}from"./Map-415eb6e1.js";import{A as d}from"./Annotation-faf880fe.js";import"./index-5b53e37f.js";import"./CalloutContainer-d701ef6f.js";const m="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDUwMzA1LCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.8SZ6HkDxS04_PFb6eCdD7jRnOF68DYznTAm1FJo4VI11ALk9O-g6Gcd1vblpE4PRIoyobAVvCkudDJqLTY2pfA";function g(){return t.jsx("svg",{width:"24px",height:"24px",viewBox:"-4 0 36 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:t.jsx("g",{transform:"translate(-125.000000, -643.000000)",children:t.jsx("g",{transform:"translate(37.000000, 169.000000)",children:t.jsx("g",{transform:"translate(78.000000, 468.000000)",children:t.jsxs("g",{transform:"translate(10.000000, 6.000000)",children:[t.jsx("path",{d:"M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z",id:"Shape",fill:"#FF6E6E"}),t.jsx("circle",{fill:"#0C0058",fillRule:"nonzero",cx:"14",cy:"14",r:"7"})]})})})})})})}const f=e=>({options:Object.values(e).filter(n=>typeof n=="string"),mapping:e}),B={title:"Components/Annotation",component:d,args:{onSelect:l(),onDeselect:l(),onDragStart:l(),onDragEnd:l(),onDragging:l()},argTypes:{subtitleVisibility:f(p),titleVisibility:f(p)},parameters:{layout:"fullscreen"}},N=e=>{const n=u.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return t.jsx(c,{token:m,initialRegion:n,children:t.jsx(d,{...e,children:t.jsx("div",{className:"default-annotation-style",children:"Click me"})})})},s=N.bind({});s.args={latitude:46.52,longitude:6.57,size:{width:100,height:24},title:"Hello World"};const J=e=>{const n=u.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return t.jsx(c,{token:m,initialRegion:n,children:t.jsx(d,{...e,children:t.jsx(g,{})})})},i=J.bind({});i.args={latitude:46.52,longitude:6.57};i.storyName="Custom Marker Annotation";const o=N.bind({});o.args={latitude:46.52,longitude:6.57,title:"Tap and hold to move",draggable:!0,enabled:!0};o.storyName="Moveable Annotation";const a=()=>{const e=u.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return t.jsx(c,{token:m,initialRegion:e,paddingBottom:44,children:t.jsx(d,{latitude:46.20738751546706,longitude:6.155891756231,title:"Tap and hold to move",animates:!0,appearanceAnimation:"gelatine 0.5s infinite",children:t.jsx(g,{})})})};a.storyName="Animated Annotation";function O({title:e,subtitle:n,url:w}){return t.jsxs("div",{className:"landmark",children:[t.jsx("h1",{children:e??""}),t.jsxs("section",{children:[t.jsx("p",{children:n??""}),t.jsx("p",{children:t.jsx("a",{href:w,target:"_blank",rel:"noreferrer",children:"Website"})})]})]})}const r=()=>{const e=u.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return t.jsx(c,{token:m,initialRegion:e,children:t.jsx(d,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",calloutElement:t.jsx(O,{title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",url:"https://en.wikipedia.org/wiki/Jet_d%27Eau"}),calloutEnabled:!0,calloutOffsetX:-148,calloutOffsetY:-82,children:t.jsx(g,{})})})};r.storyName="Annotation with custom callout element";a.__docgenInfo={description:"",methods:[],displayName:"AnimatedAnnotation"};r.__docgenInfo={description:"",methods:[],displayName:"CustomAnnotationCallout"};var h,A,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Annotation {...args}>
        <div className="default-annotation-style">Click me</div>
      </Annotation>
    </Map>;
}`,...(x=(A=s.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var k,M,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Annotation {...args}>
        <CustomMarker />
      </Annotation>
    </Map>;
}`,...(C=(M=i.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var j,D,R;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Annotation {...args}>
        <div className="default-annotation-style">Click me</div>
      </Annotation>
    </Map>;
}`,...(R=(D=o.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var b,v,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.007,
    longitudeDelta: 0.015
  }), []);
  return <Map token={token} initialRegion={initialRegion} paddingBottom={44}>
      <Annotation latitude={46.20738751546706} longitude={6.155891756231} title="Tap and hold to move" animates appearanceAnimation="gelatine 0.5s infinite">
        <CustomMarker />
      </Annotation>
    </Map>;
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var I,E,L;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.007,
    longitudeDelta: 0.015
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Annotation latitude={46.20738751546706} longitude={6.155891756231} title="Jet d’eau" subtitle="Iconic landmark of Geneva" calloutElement={<CustomCalloutElement title="Jet d’eau" subtitle="Iconic landmark of Geneva" url="https://en.wikipedia.org/wiki/Jet_d%27Eau" />} calloutEnabled calloutOffsetX={-148} calloutOffsetY={-82}>
        <CustomMarker />
      </Annotation>
    </Map>;
}`,...(L=(E=r.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const H=["Default","CustomMarkerAnnotation","MoveableAnnotation","AnimatedAnnotation","CustomAnnotationCallout"];export{a as AnimatedAnnotation,r as CustomAnnotationCallout,i as CustomMarkerAnnotation,s as Default,o as MoveableAnnotation,H as __namedExportsOrder,B as default};
