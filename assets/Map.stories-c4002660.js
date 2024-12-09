import{j as e}from"./jsx-runtime-50395f49.js";import{r as i}from"./index-9fa1aa67.js";import{f as l}from"./index-2b399915.js";/* empty css                */import{M as u,C as m,a as ae,D as oe,L as ie,F as j,P as D}from"./Map-415eb6e1.js";import{M as se}from"./Marker-e168ae2d.js";import"./index-5b53e37f.js";import"./CalloutContainer-d701ef6f.js";const v="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDUwMzA1LCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.8SZ6HkDxS04_PFb6eCdD7jRnOF68DYznTAm1FJo4VI11ALk9O-g6Gcd1vblpE4PRIoyobAVvCkudDJqLTY2pfA",p=n=>({options:Object.values(n).filter(a=>typeof a=="number"),control:{type:"inline-radio",labels:Object.values(n).filter(a=>typeof a=="string")}}),he={title:"Components/Map",component:u,args:{token:v,onLoad:l(),onRegionChangeStart:l(),onRegionChangeEnd:l(),onMapTypeChange:l(),onSingleTap:l(),onDoubleTap:l(),onLongPress:l(),onClick:l(),onMouseMove:l(),onMouseDown:l(),onMouseUp:l(),onUserLocationChange:l(),onUserLocationError:l()},argTypes:{colorScheme:p(m),mapType:p(ae),distances:p(oe),loadPriority:p(ie),showsCompass:p(j),showsScale:p(j)},parameters:{layout:"fullscreen"}},E=n=>e.jsx(u,{...n}),I=E.bind({}),y=n=>e.jsx("div",{style:{width:"300px",height:"200px"},children:e.jsx(u,{...n})}),b=E.bind({});b.args={colorScheme:m.Dark,mapType:ae.MutedStandard,showsMapTypeControl:!1,showsUserLocationControl:!0,paddingLeft:16,paddingRight:16,paddingTop:32,paddingBottom:32};const x=E.bind({});x.args={cameraBoundary:{centerLatitude:40.444,centerLongitude:-79.945,latitudeDelta:.006,longitudeDelta:.008},initialRegion:{centerLatitude:40.44316701238923,centerLongitude:-79.9431147637379,latitudeDelta:.006337455593801167,longitudeDelta:.011960061265583022},minCameraDistance:100,maxCameraDistance:1e3};const L=()=>{const[n,a]=i.useState(m.Light),o=[{name:"Light",value:m.Light,id:i.useId()},{name:"Dark",value:m.Dark,id:i.useId()},{name:"Auto",value:m.Auto,id:i.useId()}];return e.jsxs(e.Fragment,{children:[e.jsx(u,{token:v,colorScheme:n,paddingBottom:44}),e.jsx("div",{className:"map-overlay",children:e.jsx("div",{className:"map-overlay-box",children:o.map(t=>e.jsxs("label",{htmlFor:t.id,children:[e.jsx("input",{id:t.id,type:"radio",name:"theme",value:t.value,onChange:()=>a(t.value),checked:n===t.value}),t.name]}))})})]})},C=()=>{const[n,a]=i.useState([]),o=(t,d)=>r=>{const{latitude:s,longitude:c}=r.toCoordinates(),S={latitude:s,longitude:c,title:t,color:d};a([...n,S])};return e.jsx(u,{token:v,onSingleTap:o("Single tap","#30b0c7"),onDoubleTap:o("Double tap","#5856d7"),onLongPress:o("Long press","#ff9500"),isZoomEnabled:!1,children:n.map(({latitude:t,longitude:d,title:r,color:s},c)=>e.jsx(se,{latitude:t,longitude:d,title:r,subtitle:`(${t}, ${d})`,color:s},c))})},g=()=>{const n=i.useMemo(()=>({centerLatitude:40.7538,centerLongitude:-73.986,latitudeDelta:.03,longitudeDelta:.03}),[]),a=i.useMemo(()=>Object.values(D).filter(r=>typeof r=="string").map(r=>D[r]),[]),[o,t]=i.useState(()=>a.map(()=>!0)),d=i.useId();return e.jsxs(e.Fragment,{children:[e.jsx(u,{token:v,initialRegion:n,showsMapTypeControl:!1,includedPOICategories:a.filter((r,s)=>o[s])}),e.jsx("div",{className:"map-overlay map-overlay-top",children:e.jsx("div",{className:"map-overlay-box map-overlay-options",children:a.map((r,s)=>e.jsxs("label",{htmlFor:d+s,children:[e.jsx("input",{id:d+s,type:"checkbox",checked:o[s],onChange:()=>{const c=[...o];c[s]=!o[s],t(c)}}),D[r]]},r))})})]})};g.storyName="Point of Interest Filter";function f({label:n,value:a}){const o=i.useId();return e.jsxs("label",{className:"form-group",htmlFor:o,children:[n,e.jsx("input",{id:o,type:"text",className:"input",value:a,readOnly:!0})]})}const k=()=>{const[n,a]=i.useState(46.94869130019719),[o,t]=i.useState(7.447300186911917),[d,r]=i.useState(.010188625378894756),[s,c]=i.useState(.024314821659999097),S=i.useMemo(()=>({centerLatitude:n,centerLongitude:o,latitudeDelta:d,longitudeDelta:s}),[]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{token:v,initialRegion:S,onRegionChangeEnd:M=>{a(M.centerLatitude),t(M.centerLongitude),r(M.latitudeDelta),c(M.longitudeDelta)}}),e.jsx("div",{className:"map-overlay map-overlay-top",children:e.jsxs("div",{className:"map-overlay-box map-overlay-inputs",children:[e.jsx(f,{label:"Center latitude",value:n.toString()}),e.jsx(f,{label:"Center longitude",value:o.toString()}),e.jsx(f,{label:"Latitude delta",value:d.toString()}),e.jsx(f,{label:"Longitude delta",value:s.toString()})]})})]})},h=()=>{const n=i.useMemo(()=>({centerLatitude:40.7538,centerLongitude:-73.986,latitudeDelta:.03,longitudeDelta:.03}),[]);return e.jsx(u,{load:a=>new Promise(o=>{const t=document.createElement("script");window.initMapKit=()=>{delete window.initMapKit,window.mapkit.init({authorizationCallback:d=>{d(a)}}),o()},t.src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js",t.dataset.callback="initMapKit",t.dataset.initialToken=a,t.dataset.libraries="map",t.crossOrigin="anonymous",document.head.appendChild(t)}),token:v,initialRegion:n,showsMapTypeControl:!1})};h.storyName="Custom `load` Function";y.__docgenInfo={description:"",methods:[],displayName:"FixedSize"};L.__docgenInfo={description:"",methods:[],displayName:"LiveStateUpdate"};C.__docgenInfo={description:"",methods:[],displayName:"MapInteractionEvents"};g.__docgenInfo={description:"",methods:[],displayName:"PointOfInterestFilters"};k.__docgenInfo={description:"",methods:[],displayName:"RegionChangeEvent"};h.__docgenInfo={description:"",methods:[],displayName:"CustomLoadFunction"};var w,R,O;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Map {...args} />",...(O=(R=I.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var T,N,F;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '200px'
}}>
    <Map {...args} />
  </div>`,...(F=(N=y.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var P,_,A;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:"args => <Map {...args} />",...(A=(_=b.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var z,H,U;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:"args => <Map {...args} />",...(U=(H=x.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var J,B,K;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [theme, setTheme] = useState(ColorScheme.Light);
  const options: {
    name: string;
    value: ColorScheme;
    id: string;
  }[] = [{
    name: 'Light',
    value: ColorScheme.Light,
    id: useId()
  }, {
    name: 'Dark',
    value: ColorScheme.Dark,
    id: useId()
  }, {
    name: 'Auto',
    value: ColorScheme.Auto,
    id: useId()
  }];
  return <>
      <Map token={token} colorScheme={theme} paddingBottom={44} />

      <div className="map-overlay">
        <div className="map-overlay-box">
          {options.map(option => <label htmlFor={option.id}>
              <input id={option.id} type="radio" name="theme" value={option.value} onChange={() => setTheme(option.value)} checked={theme === option.value} />
              {option.name}
            </label>)}
        </div>
      </div>
    </>;
}`,...(K=(B=L.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var V,Z,$;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  type MarkerData = {
    latitude: number;
    longitude: number;
    title: string;
    color: string;
  };
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const eventHandler = (title: string, color: string) => (e: MapInteractionEvent) => {
    const {
      latitude,
      longitude
    } = e.toCoordinates();
    const newMarker: MarkerData = {
      latitude,
      longitude,
      title,
      color
    };
    setMarkers([...markers, newMarker]);
  };
  return <Map token={token} onSingleTap={eventHandler('Single tap', '#30b0c7')} onDoubleTap={eventHandler('Double tap', '#5856d7')} onLongPress={eventHandler('Long press', '#ff9500')} isZoomEnabled={false}>
      {markers.map(({
      latitude,
      longitude,
      title,
      color
    }, index) => <Marker latitude={latitude} longitude={longitude} title={title} subtitle={\`(\${latitude}, \${longitude})\`} color={color}
    // eslint-disable-next-line react/no-array-index-key
    key={index} />)}
    </Map>;
}`,...($=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var G,Y,W;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 40.7538,
    centerLongitude: -73.986,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03
  }), []);
  const categories: PointOfInterestCategory[] = useMemo(() => (Object.values(PointOfInterestCategory) as Array<keyof typeof PointOfInterestCategory>).filter(val => typeof val === 'string').map(str => PointOfInterestCategory[str]), []);
  const [isEnabled, setIsEnabled] = useState(() => categories.map(() => true));
  const idPrefix = useId();
  return <>
      <Map token={token} initialRegion={initialRegion} showsMapTypeControl={false} includedPOICategories={categories.filter((_, index) => isEnabled[index])} />

      <div className="map-overlay map-overlay-top">
        <div className="map-overlay-box map-overlay-options">
          {categories.map((category, categoryIndex) => <label key={category} htmlFor={idPrefix + categoryIndex}>
              <input id={idPrefix + categoryIndex} type="checkbox" checked={isEnabled[categoryIndex]} onChange={() => {
            const newIsEnabled = [...isEnabled];
            newIsEnabled[categoryIndex] = !isEnabled[categoryIndex];
            setIsEnabled(newIsEnabled);
          }} />
              {PointOfInterestCategory[category]}
            </label>)}
        </div>
      </div>
    </>;
}`,...(W=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var X,q,Q;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [centerLatitude, setCenterLatitude] = useState(46.94869130019719);
  const [centerLongitude, setCenterLongitude] = useState(7.447300186911917);
  const [latitudeDelta, setLatitudeDelta] = useState(0.010188625378894756);
  const [longitudeDelta, setLongitudeDelta] = useState(0.024314821659999097);
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude,
    centerLongitude,
    latitudeDelta,
    longitudeDelta
  }), []);
  return <>
      <Map token={token} initialRegion={initialRegion} onRegionChangeEnd={region => {
      setCenterLatitude(region.centerLatitude);
      setCenterLongitude(region.centerLongitude);
      setLatitudeDelta(region.latitudeDelta);
      setLongitudeDelta(region.longitudeDelta);
    }} />

      <div className="map-overlay map-overlay-top">
        <div className="map-overlay-box map-overlay-inputs">
          <ReadOnlyInput label="Center latitude" value={centerLatitude.toString()} />
          <ReadOnlyInput label="Center longitude" value={centerLongitude.toString()} />
          <ReadOnlyInput label="Latitude delta" value={latitudeDelta.toString()} />
          <ReadOnlyInput label="Longitude delta" value={longitudeDelta.toString()} />
        </div>
      </div>
    </>;
}`,...(Q=(q=k.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var ee,te,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 40.7538,
    centerLongitude: -73.986,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03
  }), []);
  return <Map load={customLoadToken => new Promise(resolve => {
    const element = document.createElement('script');
    // @ts-ignore-next-line
    window.initMapKit = () => {
      // @ts-ignore-next-line
      delete window.initMapKit;
      window.mapkit.init({
        authorizationCallback: done => {
          done(customLoadToken);
        }
      });
      resolve();
    };
    element.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js';
    element.dataset.callback = 'initMapKit';
    element.dataset.initialToken = customLoadToken;
    element.dataset.libraries = 'map';
    element.crossOrigin = 'anonymous';
    document.head.appendChild(element);
  })} token={token} initialRegion={initialRegion} showsMapTypeControl={false} />;
}`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const ve=["Empty","FixedSize","CustomizedAppearance","RegionLock","LiveStateUpdate","MapInteractionEvents","PointOfInterestFilters","RegionChangeEvent","CustomLoadFunction"];export{h as CustomLoadFunction,b as CustomizedAppearance,I as Empty,y as FixedSize,L as LiveStateUpdate,C as MapInteractionEvents,g as PointOfInterestFilters,k as RegionChangeEvent,x as RegionLock,ve as __namedExportsOrder,he as default};
