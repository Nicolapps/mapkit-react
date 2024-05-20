import{j as a,a as u,F as E}from"./jsx-runtime-670450c2.js";import{r as i}from"./index-f1f749bf.js";/* empty css                */import{M as c,C as m,a as oe,D as ie,L as re,F as R,P as x}from"./Map-700fab0a.js";import{M as se}from"./Marker-466a39e9.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./CalloutContainer-cb49d305.js";const g="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDUwMzA1LCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.8SZ6HkDxS04_PFb6eCdD7jRnOF68DYznTAm1FJo4VI11ALk9O-g6Gcd1vblpE4PRIoyobAVvCkudDJqLTY2pfA",p=t=>({options:Object.values(t).filter(n=>typeof n=="number"),control:{type:"inline-radio",labels:Object.values(t).filter(n=>typeof n=="string")}}),he={title:"Components/Map",component:c,args:{token:g},argTypes:{colorScheme:p(m),mapType:p(oe),distances:p(ie),loadPriority:p(re),showsCompass:p(R),showsScale:p(R)},parameters:{layout:"fullscreen"}},w=t=>a(c,{...t}),k=w.bind({}),C=t=>a("div",{style:{width:"300px",height:"200px"},children:a(c,{...t})}),v=w.bind({});v.args={colorScheme:m.Dark,mapType:oe.MutedStandard,showsMapTypeControl:!1,showsUserLocationControl:!0,paddingLeft:16,paddingRight:16,paddingTop:32,paddingBottom:32};const h=w.bind({});h.args={cameraBoundary:{centerLatitude:40.444,centerLongitude:-79.945,latitudeDelta:.006,longitudeDelta:.008},initialRegion:{centerLatitude:40.44316701238923,centerLongitude:-79.9431147637379,latitudeDelta:.006337455593801167,longitudeDelta:.011960061265583022},minCameraDistance:100,maxCameraDistance:1e3};const M=()=>{const[t,n]=i.useState(m.Light),o=[{name:"Light",value:m.Light,id:i.useId()},{name:"Dark",value:m.Dark,id:i.useId()},{name:"Auto",value:m.Auto,id:i.useId()}];return u(E,{children:[a(c,{token:g,colorScheme:t,paddingBottom:44}),a("div",{className:"map-overlay",children:a("div",{className:"map-overlay-box",children:o.map(e=>u("label",{htmlFor:e.id,children:[a("input",{id:e.id,type:"radio",name:"theme",value:e.value,onChange:()=>n(e.value),checked:t===e.value}),e.name]}))})})]})},D=()=>{const[t,n]=i.useState([]),o=(e,l)=>s=>{const{latitude:r,longitude:d}=s.toCoordinates(),f={latitude:r,longitude:d,title:e,color:l};n([...t,f])};return a(c,{token:g,onSingleTap:o("Single tap","#30b0c7"),onDoubleTap:o("Double tap","#5856d7"),onLongPress:o("Long press","#ff9500"),isZoomEnabled:!1,children:t.map(({latitude:e,longitude:l,title:s,color:r},d)=>a(se,{latitude:e,longitude:l,title:s,subtitle:`(${e}, ${l})`,color:r},d))})},y=()=>{const t=i.useMemo(()=>({centerLatitude:40.7538,centerLongitude:-73.986,latitudeDelta:.03,longitudeDelta:.03}),[]),n=i.useMemo(()=>Object.values(x).filter(s=>typeof s=="string").map(s=>x[s]),[]),[o,e]=i.useState(()=>n.map(()=>!0)),l=i.useId();return u(E,{children:[a(c,{token:g,initialRegion:t,showsMapTypeControl:!1,includedPOICategories:n.filter((s,r)=>o[r])}),a("div",{className:"map-overlay map-overlay-top",children:a("div",{className:"map-overlay-box map-overlay-options",children:n.map((s,r)=>u("label",{htmlFor:l+r,children:[a("input",{id:l+r,type:"checkbox",checked:o[r],onChange:()=>{const d=[...o];d[r]=!o[r],e(d)}}),x[s]]},s))})})]})};y.storyName="Point of Interest Filter";function I({label:t,value:n}){const o=i.useId();return u("label",{className:"form-group",htmlFor:o,children:[t,a("input",{id:o,type:"text",className:"input",value:n,readOnly:!0})]})}const S=()=>{const[t,n]=i.useState(46.94869130019719),[o,e]=i.useState(7.447300186911917),[l,s]=i.useState(.010188625378894756),[r,d]=i.useState(.024314821659999097),f=i.useMemo(()=>({centerLatitude:t,centerLongitude:o,latitudeDelta:l,longitudeDelta:r}),[]);return u(E,{children:[a(c,{token:g,initialRegion:f,onRegionChangeEnd:L=>{n(L.centerLatitude),e(L.centerLongitude),s(L.latitudeDelta),d(L.longitudeDelta)}}),a("div",{className:"map-overlay map-overlay-top",children:u("div",{className:"map-overlay-box map-overlay-inputs",children:[a(I,{label:"Center latitude",value:t.toString()}),a(I,{label:"Center longitude",value:o.toString()}),a(I,{label:"Latitude delta",value:l.toString()}),a(I,{label:"Longitude delta",value:r.toString()})]})})]})},b=()=>{const t=i.useMemo(()=>({centerLatitude:40.7538,centerLongitude:-73.986,latitudeDelta:.03,longitudeDelta:.03}),[]);return a(c,{load:n=>new Promise(o=>{const e=document.createElement("script");window.initMapKit=()=>{delete window.initMapKit,window.mapkit.init({authorizationCallback:l=>{l(n)}}),o()},e.src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js",e.dataset.callback="initMapKit",e.dataset.initialToken=n,e.dataset.libraries="map",e.crossOrigin="anonymous",document.head.appendChild(e)}),token:g,initialRegion:t,showsMapTypeControl:!1})};b.storyName="Custom `load` Function";var O,T,F;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:"args => <Map {...args} />",...(F=(T=k.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var P,N,A;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '200px'
}}>
    <Map {...args} />
  </div>`,...(A=(N=C.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var j,z,H;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Map {...args} />",...(H=(z=v.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var J,B,K;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:"args => <Map {...args} />",...(K=(B=h.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var V,_,U;M.parameters={...M.parameters,docs:{...(V=M.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(U=(_=M.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var Z,$,G;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(G=($=D.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var Y,W,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var q,Q,ee;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
}`,...(ee=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,ae,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const ye=["Empty","FixedSize","CustomizedAppearance","RegionLock","LiveStateUpdate","MapInteractionEvents","PointOfInterestFilters","RegionChangeEvent","CustomLoadFunction"];export{b as CustomLoadFunction,v as CustomizedAppearance,k as Empty,C as FixedSize,M as LiveStateUpdate,D as MapInteractionEvents,y as PointOfInterestFilters,S as RegionChangeEvent,h as RegionLock,ye as __namedExportsOrder,he as default};
//# sourceMappingURL=Map.stories-aa46401d.js.map
