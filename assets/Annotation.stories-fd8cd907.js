import{j as t,a as L}from"./jsx-runtime-670450c2.js";import{r as l}from"./index-f1f749bf.js";import{F as c,M as d}from"./Map-1602a87c.js";import{A as s}from"./Annotation-71ad84a7.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";const u="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDQ5NDQzLCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pby8ifQ.1y92Cm2rRO4YfmDOJM6WYWoNbGgxP15h7Nk5FZzofT7fGBkBy1NlHgP9wUsgJRTw4ML-iNMFGs3PGVIZ9AM0Ew";function v(){return t("svg",{width:"24px",height:"24px",viewBox:"-4 0 36 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:t("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:t("g",{transform:"translate(-125.000000, -643.000000)",children:t("g",{transform:"translate(37.000000, 169.000000)",children:t("g",{transform:"translate(78.000000, 468.000000)",children:L("g",{transform:"translate(10.000000, 6.000000)",children:[t("path",{d:"M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z",id:"Shape",fill:"#FF6E6E"}),t("circle",{fill:"#0C0058",fillRule:"nonzero",cx:"14",cy:"14",r:"7"})]})})})})})})}const m=n=>({options:Object.values(n).filter(o=>typeof o=="string"),mapping:n}),O={title:"Components/Annotation",component:s,args:{},argTypes:{subtitleVisibility:m(c),titleVisibility:m(c)},parameters:{layout:"fullscreen"}},N=n=>{const o=l.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return t(d,{token:u,initialRegion:o,children:t(s,{...n,children:t("div",{className:"default-annotation-style",children:"Click me"})})})},a=N.bind({});a.args={latitude:46.52,longitude:6.57,size:{width:100,height:24},title:"Hello World"};const I=n=>{const o=l.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return t(d,{token:u,initialRegion:o,children:t(s,{...n,children:t(v,{})})})},e=I.bind({});e.args={latitude:46.52,longitude:6.57};e.storyName="Custom Marker Annotation";const i=N.bind({});i.args={latitude:46.52,longitude:6.57,title:"Tap and hold to move",draggable:!0,enabled:!0};i.storyName="Moveable Annotation";const r=()=>{const n=l.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return t(d,{token:u,initialRegion:n,paddingBottom:44,children:t(s,{latitude:46.20738751546706,longitude:6.155891756231,title:"Tap and hold to move",animates:!0,appearanceAnimation:"gelatine 0.5s infinite",children:t(v,{})})})};r.storyName="Animated Annotation";var g,p,M;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Annotation {...args}>
        <div className="default-annotation-style">
          Click me
        </div>
      </Annotation>
    </Map>;
}`,...(M=(p=a.parameters)==null?void 0:p.docs)==null?void 0:M.source}}};var h,A,f;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(f=(A=e.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var k,C,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Annotation {...args}>
        <div className="default-annotation-style">
          Click me
        </div>
      </Annotation>
    </Map>;
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var D,y,b;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const j=["Default","CustomMarkerAnnotation","MoveableAnnotation","AnimatedAnnotation"];export{r as AnimatedAnnotation,e as CustomMarkerAnnotation,a as Default,i as MoveableAnnotation,j as __namedExportsOrder,O as default};
//# sourceMappingURL=Annotation.stories-fd8cd907.js.map
