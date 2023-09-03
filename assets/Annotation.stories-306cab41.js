import{j as t,a as d}from"./jsx-runtime-670450c2.js";import{r as p}from"./index-f1f749bf.js";import{F as o,M as m}from"./Map-30e53352.js";import{A as c}from"./Annotation-d9f4e275.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";const u="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNjcyNDk3MTU1LCJleHAiOjE3MDM5ODA4MDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.Llf8X3q3ZfEdgxMBjlkkwiAnbHHevpOhBTWBUkuow5nQ2xvcWQDV6i59KiPa5YsfEvof9bQ3Y0Q3xCBD5Ky3XQ";function g(){return t("svg",{width:"24px",height:"24px",viewBox:"-4 0 36 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:t("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:t("g",{transform:"translate(-125.000000, -643.000000)",children:t("g",{transform:"translate(37.000000, 169.000000)",children:t("g",{transform:"translate(78.000000, 468.000000)",children:d("g",{transform:"translate(10.000000, 6.000000)",children:[t("path",{d:"M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z",id:"Shape",fill:"#FF6E6E"}),t("circle",{fill:"#0C0058",fillRule:"nonzero",cx:"14",cy:"14",r:"7"})]})})})})})})}const r=n=>({options:Object.values(n).filter(i=>typeof i=="string"),mapping:n}),I={title:"Components/Annotation",component:c,args:{},argTypes:{subtitleVisibility:r(o),titleVisibility:r(o)},parameters:{layout:"fullscreen"}},f=n=>{const i=p.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return t(m,{token:u,initialRegion:i,children:t(c,{...n,children:t(g,{})})})},e=f.bind({});e.args={latitude:46.52,longitude:6.57};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,I as default};
//# sourceMappingURL=Annotation.stories-306cab41.js.map
