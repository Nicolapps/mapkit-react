import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-BO-NyGGJ.js";import{f as e}from"./index-3sSWLqo1.js";/* empty css                */import{M as p,L as y,D as M,a as b,C as v}from"./Map-BdInFRlL.js";import"./index-yBjzXJbu.js";const R="eyJraWQiOiJGRzc2RENGWDNQIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzYwODU1NzczLCJvcmlnaW4iOiJuaWNvbGFwcHMuZ2l0aHViLmlvIiwiZXhwIjoxODIzNjcwMDAwfQ.O21_P7pKUebQz8hIbhgATDpZu_y-VULx4ZoVw818vHnRI6g6ONs-pfo6I49xfO3TQ07Wa6mlO-8NPQBwPvMQZQ",i=o=>({options:Object.values(o).filter(t=>typeof t=="number"),control:{type:"inline-radio",labels:Object.values(o).filter(t=>typeof t=="string")}}),D={title:"MapKit JS refs/Map",component:p,args:{token:R,onLoad:e(),onRegionChangeStart:e(),onRegionChangeEnd:e(),onMapTypeChange:e(),onSingleTap:e(),onDoubleTap:e(),onLongPress:e(),onClick:e(),onMouseMove:e(),onMouseDown:e(),onMouseUp:e(),onUserLocationChange:e(),onUserLocationError:e()},argTypes:{colorScheme:i(v),mapType:i(b),distances:i(M),loadPriority:i(y)},parameters:{layout:"fullscreen",docs:{description:{component:"To access methods or properties not exposed by mapkit-react, you can access the `map` object provided by MapKit JS using a reference."}}}},a=o=>{const t=s.useRef(null),g=s.useCallback(()=>{if(t.current!==null){if(!t.current.isRotationAvailable){alert("Sorry, rotation is not available.");return}t.current.setRotationAnimated(t.current.rotation+90)}},[t]);return n.jsxs(n.Fragment,{children:[n.jsx(p,{ref:t,...o}),n.jsx("div",{className:"map-overlay",children:n.jsx("button",{type:"button",onClick:g,children:"↻ Rotate"})})]})};a.args={paddingBottom:44,initialRegion:{centerLatitude:37.7812,centerLongitude:-122.44755,latitudeDelta:.1,longitudeDelta:.11}};const r=()=>{const o=s.useRef(null),t=s.useMemo(()=>({centerLatitude:48.92630099185955,centerLongitude:10.615092941674959,latitudeDelta:24.17307048317351,longitudeDelta:43.4436668867213}),[]);return n.jsx(p,{token:R,ref:o,initialRegion:t,onLoad:()=>{o.current.setRegionAnimated(new mapkit.CoordinateRegion(new mapkit.Coordinate(46.76753351386031,8.208099002907204),new mapkit.CoordinateSpan(2.017148245608759,4.684076997007793)))}})};r.storyName="`onLoad` Event";a.__docgenInfo={description:"",methods:[],displayName:"MapReference"};r.__docgenInfo={description:"",methods:[],displayName:"OnLoadEvent"};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,d,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const N=["MapReference","OnLoadEvent"];export{a as MapReference,r as OnLoadEvent,N as __namedExportsOrder,D as default};
