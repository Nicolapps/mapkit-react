import{j as t,a as R}from"./jsx-runtime-670450c2.js";import{r as h}from"./index-f1f749bf.js";import{F as s,M as k}from"./Map-30e53352.js";import{A as r}from"./Annotation-fb0973b0.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";const b="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNjcyNDk3MTU1LCJleHAiOjE3MDM5ODA4MDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.Llf8X3q3ZfEdgxMBjlkkwiAnbHHevpOhBTWBUkuow5nQ2xvcWQDV6i59KiPa5YsfEvof9bQ3Y0Q3xCBD5Ky3XQ";function D(){return t("svg",{width:"24px",height:"24px",viewBox:"-4 0 36 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:t("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:t("g",{transform:"translate(-125.000000, -643.000000)",children:t("g",{transform:"translate(37.000000, 169.000000)",children:t("g",{transform:"translate(78.000000, 468.000000)",children:R("g",{transform:"translate(10.000000, 6.000000)",children:[t("path",{d:"M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z",id:"Shape",fill:"#FF6E6E"}),t("circle",{fill:"#0C0058",fillRule:"nonzero",cx:"14",cy:"14",r:"7"})]})})})})})})}const l=e=>({options:Object.values(e).filter(a=>typeof a=="string"),mapping:e}),j={title:"Components/Annotation",component:r,args:{},argTypes:{subtitleVisibility:l(s),titleVisibility:l(s)},parameters:{layout:"fullscreen"}},C=e=>{const a=h.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return t(k,{token:b,initialRegion:a,children:t(r,{...e,children:t(D,{})})})},i=C.bind({});i.args={latitude:46.52,longitude:6.57};const n=C.bind({});n.args={latitude:46.52,longitude:6.57,title:"Tap and hold to move",draggable:!0,enabled:!0};n.storyName="Moveable Annotation";const o=()=>{const e=h.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return t(k,{token:b,initialRegion:e,paddingBottom:44,children:t(r,{latitude:46.20738751546706,longitude:6.155891756231,title:"Tap and hold to move",animates:!0,appearanceAnimation:"gelatine 0.5s infinite",children:t(D,{})})})};o.storyName="Animated Annotation";var d,c,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var M,f,A;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const w=["Default","MoveableAnnotation","AnimatedAnnotation"];export{o as AnimatedAnnotation,i as Default,n as MoveableAnnotation,w as __namedExportsOrder,j as default};
//# sourceMappingURL=Annotation.stories-0253c6a9.js.map
