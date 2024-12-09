import{j as o}from"./jsx-runtime-50395f49.js";import{r as s}from"./index-9fa1aa67.js";import{f as e}from"./index-2b399915.js";/* empty css                */import{M as p,C as b,a as y,D as M,L as C}from"./Map-415eb6e1.js";const R="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDUwMzA1LCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.8SZ6HkDxS04_PFb6eCdD7jRnOF68DYznTAm1FJo4VI11ALk9O-g6Gcd1vblpE4PRIoyobAVvCkudDJqLTY2pfA",i=n=>({options:Object.values(n).filter(t=>typeof t=="number"),control:{type:"inline-radio",labels:Object.values(n).filter(t=>typeof t=="string")}}),D={title:"MapKit JS refs/Map",component:p,args:{token:R,onLoad:e(),onRegionChangeStart:e(),onRegionChangeEnd:e(),onMapTypeChange:e(),onSingleTap:e(),onDoubleTap:e(),onLongPress:e(),onClick:e(),onMouseMove:e(),onMouseDown:e(),onMouseUp:e(),onUserLocationChange:e(),onUserLocationError:e()},argTypes:{colorScheme:i(b),mapType:i(y),distances:i(M),loadPriority:i(C)},parameters:{layout:"fullscreen",docs:{description:{component:"To access methods or properties not exposed by mapkit-react, you can access the `map` object provided by MapKit JS using a reference."}}}},a=n=>{const t=s.useRef(null),g=s.useCallback(()=>{if(t.current!==null){if(!t.current.isRotationAvailable){alert("Sorry, rotation is not available.");return}t.current.setRotationAnimated(t.current.rotation+90)}},[t]);return o.jsxs(o.Fragment,{children:[o.jsx(p,{ref:t,...n}),o.jsx("div",{className:"map-overlay",children:o.jsx("button",{type:"button",onClick:g,children:"↻ Rotate"})})]})};a.args={paddingBottom:44,initialRegion:{centerLatitude:37.7812,centerLongitude:-122.44755,latitudeDelta:.1,longitudeDelta:.11}};const r=()=>{const n=s.useRef(null),t=s.useMemo(()=>({centerLatitude:48.92630099185955,centerLongitude:10.615092941674959,latitudeDelta:24.17307048317351,longitudeDelta:43.4436668867213}),[]);return o.jsx(p,{token:R,ref:n,initialRegion:t,onLoad:()=>{n.current.setRegionAnimated(new mapkit.CoordinateRegion(new mapkit.Coordinate(46.76753351386031,8.208099002907204),new mapkit.CoordinateSpan(2.017148245608759,4.684076997007793)))}})};r.storyName="`onLoad` Event";a.__docgenInfo={description:"",methods:[],displayName:"MapReference"};r.__docgenInfo={description:"",methods:[],displayName:"OnLoadEvent"};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,u,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const E=["MapReference","OnLoadEvent"];export{a as MapReference,r as OnLoadEvent,E as __namedExportsOrder,D as default};
