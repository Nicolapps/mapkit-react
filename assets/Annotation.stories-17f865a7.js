import{j as t,a as m}from"./jsx-runtime-670450c2.js";import{r as d}from"./index-f1f749bf.js";import{F as p,M as u}from"./Map-700fab0a.js";import{A as s}from"./Annotation-393ddc66.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./CalloutContainer-cb49d305.js";const c="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDUwMzA1LCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.8SZ6HkDxS04_PFb6eCdD7jRnOF68DYznTAm1FJo4VI11ALk9O-g6Gcd1vblpE4PRIoyobAVvCkudDJqLTY2pfA";function g(){return t("svg",{width:"24px",height:"24px",viewBox:"-4 0 36 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:t("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:t("g",{transform:"translate(-125.000000, -643.000000)",children:t("g",{transform:"translate(37.000000, 169.000000)",children:t("g",{transform:"translate(78.000000, 468.000000)",children:m("g",{transform:"translate(10.000000, 6.000000)",children:[t("path",{d:"M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z",id:"Shape",fill:"#FF6E6E"}),t("circle",{fill:"#0C0058",fillRule:"nonzero",cx:"14",cy:"14",r:"7"})]})})})})})})}const h=e=>({options:Object.values(e).filter(n=>typeof n=="string"),mapping:e}),B={title:"Components/Annotation",component:s,args:{},argTypes:{subtitleVisibility:h(p),titleVisibility:h(p)},parameters:{layout:"fullscreen"}},x=e=>{const n=d.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return t(u,{token:c,initialRegion:n,children:t(s,{...e,children:t("div",{className:"default-annotation-style",children:"Click me"})})})},o=x.bind({});o.args={latitude:46.52,longitude:6.57,size:{width:100,height:24},title:"Hello World"};const O=e=>{const n=d.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return t(u,{token:c,initialRegion:n,children:t(s,{...e,children:t(g,{})})})},i=O.bind({});i.args={latitude:46.52,longitude:6.57};i.storyName="Custom Marker Annotation";const a=x.bind({});a.args={latitude:46.52,longitude:6.57,title:"Tap and hold to move",draggable:!0,enabled:!0};a.storyName="Moveable Annotation";const r=()=>{const e=d.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return t(u,{token:c,initialRegion:e,paddingBottom:44,children:t(s,{latitude:46.20738751546706,longitude:6.155891756231,title:"Tap and hold to move",animates:!0,appearanceAnimation:"gelatine 0.5s infinite",children:t(g,{})})})};r.storyName="Animated Annotation";function F({title:e,subtitle:n,url:J}){return m("div",{className:"landmark",children:[t("h1",{children:e??""}),m("section",{children:[t("p",{children:n??""}),t("p",{children:t("a",{href:J,target:"_blank",rel:"noreferrer",children:"Website"})})]})]})}const l=()=>{const e=d.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return t(u,{token:c,initialRegion:e,children:t(s,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",calloutElement:t(F,{title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",url:"https://en.wikipedia.org/wiki/Jet_d%27Eau"}),calloutEnabled:!0,calloutOffsetX:-148,calloutOffsetY:-82,children:t(g,{})})})};l.storyName="Annotation with custom callout element";var f,k,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(A=(k=o.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var M,C,b;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var R,D,v;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
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
}`,...(v=(D=a.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var L,y,I;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(I=(y=r.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var E,w,N;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(N=(w=l.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const H=["Default","CustomMarkerAnnotation","MoveableAnnotation","AnimatedAnnotation","CustomAnnotationCallout"];export{r as AnimatedAnnotation,l as CustomAnnotationCallout,i as CustomMarkerAnnotation,o as Default,a as MoveableAnnotation,H as __namedExportsOrder,B as default};
//# sourceMappingURL=Annotation.stories-17f865a7.js.map
