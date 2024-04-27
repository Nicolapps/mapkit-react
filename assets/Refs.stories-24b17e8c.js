import{a as g,F as b,j as r}from"./jsx-runtime-670450c2.js";import{r as i}from"./index-f1f749bf.js";/* empty css                */import{M as s,C as y,a as k,D as M,L as C}from"./Map-700fab0a.js";import"./_commonjsHelpers-042e6b4d.js";const f="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDUwMzA1LCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.8SZ6HkDxS04_PFb6eCdD7jRnOF68DYznTAm1FJo4VI11ALk9O-g6Gcd1vblpE4PRIoyobAVvCkudDJqLTY2pfA",o=t=>({options:Object.values(t).filter(e=>typeof e=="number"),control:{type:"inline-radio",labels:Object.values(t).filter(e=>typeof e=="string")}}),h={title:"MapKit JS refs/Map",component:s,args:{token:f},argTypes:{colorScheme:o(y),mapType:o(k),distances:o(M),loadPriority:o(C)},parameters:{layout:"fullscreen",docs:{description:{component:"To access methods or properties not exposed by mapkit-react, you can access the `map` object provided by MapKit JS using a reference."}}}},a=t=>{const e=i.useRef(null),R=i.useCallback(()=>{if(e.current!==null){if(!e.current.isRotationAvailable){alert("Sorry, rotation is not available.");return}e.current.setRotationAnimated(e.current.rotation+90)}},[e]);return g(b,{children:[r(s,{ref:e,...t}),r("div",{className:"map-overlay",children:r("button",{type:"button",onClick:R,children:"↻ Rotate"})})]})};a.args={paddingBottom:44,initialRegion:{centerLatitude:37.7812,centerLongitude:-122.44755,latitudeDelta:.1,longitudeDelta:.11}};const n=()=>{const t=i.useRef(null),e=i.useMemo(()=>({centerLatitude:48.92630099185955,centerLongitude:10.615092941674959,latitudeDelta:24.17307048317351,longitudeDelta:43.4436668867213}),[]);return r(s,{token:f,ref:t,initialRegion:e,onLoad:()=>{t.current.setRegionAnimated(new mapkit.CoordinateRegion(new mapkit.Coordinate(46.76753351386031,8.208099002907204),new mapkit.CoordinateSpan(2.017148245608759,4.684076997007793)))}})};n.storyName="`onLoad` Event";var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const mapRef = useRef<mapkit.Map>(null);

  // Animate a rotation when the button is pressed
  const rotate = useCallback(() => {
    if (mapRef.current === null) return;
    if (!mapRef.current.isRotationAvailable) {
      // eslint-disable-next-line no-alert
      alert('Sorry, rotation is not available.');
      return;
    }
    mapRef.current.setRotationAnimated(mapRef.current.rotation + 90);
  }, [mapRef]);
  return <>
      <Map ref={mapRef} {...args} />

      <div className="map-overlay">
        <button type="button" onClick={rotate}>
          ↻ Rotate
        </button>
      </div>
    </>;
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const mapRef = useRef<mapkit.Map>(null);
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48.92630099185955,
    centerLongitude: 10.615092941674959,
    latitudeDelta: 24.17307048317351,
    longitudeDelta: 43.4436668867213
  }), []);
  return <Map token={token} ref={mapRef} initialRegion={initialRegion} onLoad={() => {
    mapRef.current!.setRegionAnimated(new mapkit.CoordinateRegion(new mapkit.Coordinate(46.76753351386031, 8.208099002907204), new mapkit.CoordinateSpan(2.017148245608759, 4.684076997007793)));
  }} />;
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const E=["MapReference","OnLoadEvent"];export{a as MapReference,n as OnLoadEvent,E as __namedExportsOrder,h as default};
//# sourceMappingURL=Refs.stories-24b17e8c.js.map
