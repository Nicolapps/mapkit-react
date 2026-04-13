import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-BO-NyGGJ.js";import{f as l}from"./index-3sSWLqo1.js";/* empty css                */import{M as u,C as m,P as D,F as j,L as oe,D as ie,a as ae}from"./Map-BdInFRlL.js";import{M as se}from"./Marker-DZfa8AFo.js";import"./index-yBjzXJbu.js";import"./index-BhKFW7zb.js";import"./index-BO2TEXkE.js";import"./CalloutContainer-CMY7Avij.js";const v="eyJraWQiOiJGRzc2RENGWDNQIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzYwODU1NzczLCJvcmlnaW4iOiJuaWNvbGFwcHMuZ2l0aHViLmlvIiwiZXhwIjoxODIzNjcwMDAwfQ.O21_P7pKUebQz8hIbhgATDpZu_y-VULx4ZoVw818vHnRI6g6ONs-pfo6I49xfO3TQ07Wa6mlO-8NPQBwPvMQZQ",p=n=>({options:Object.values(n).filter(a=>typeof a=="number"),control:{type:"inline-radio",labels:Object.values(n).filter(a=>typeof a=="string")}}),ye={title:"Components/Map",component:u,args:{token:v,onLoad:l(),onRegionChangeStart:l(),onRegionChangeEnd:l(),onMapTypeChange:l(),onSingleTap:l(),onDoubleTap:l(),onLongPress:l(),onClick:l(),onMouseMove:l(),onMouseDown:l(),onMouseUp:l(),onUserLocationChange:l(),onUserLocationError:l()},argTypes:{colorScheme:p(m),mapType:p(ae),distances:p(ie),loadPriority:p(oe),showsCompass:p(j),showsScale:p(j)},parameters:{layout:"fullscreen"}},w=n=>e.jsx(u,{...n}),f=w.bind({}),y=n=>e.jsx("div",{style:{width:"300px",height:"200px"},children:e.jsx(u,{...n})}),x=w.bind({});x.args={colorScheme:m.Dark,mapType:ae.MutedStandard,showsMapTypeControl:!1,showsUserLocationControl:!0,paddingLeft:16,paddingRight:16,paddingTop:32,paddingBottom:32};const L=w.bind({});L.args={cameraBoundary:{centerLatitude:40.444,centerLongitude:-79.945,latitudeDelta:.006,longitudeDelta:.008},initialRegion:{centerLatitude:40.44316701238923,centerLongitude:-79.9431147637379,latitudeDelta:.006337455593801167,longitudeDelta:.011960061265583022},minCameraDistance:100,maxCameraDistance:1e3};const b=()=>{const[n,a]=i.useState(m.Light),o=[{name:"Light",value:m.Light,id:i.useId()},{name:"Dark",value:m.Dark,id:i.useId()},{name:"Auto",value:m.Auto,id:i.useId()}];return e.jsxs(e.Fragment,{children:[e.jsx(u,{token:v,colorScheme:n,paddingBottom:44}),e.jsx("div",{className:"map-overlay",children:e.jsx("div",{className:"map-overlay-box",children:o.map(t=>e.jsxs("label",{htmlFor:t.id,children:[e.jsx("input",{id:t.id,type:"radio",name:"theme",value:t.value,onChange:()=>a(t.value),checked:n===t.value}),t.name]}))})})]})},C=()=>{const[n,a]=i.useState([]),o=(t,d)=>r=>{const{latitude:s,longitude:c}=r.toCoordinates(),S={latitude:s,longitude:c,title:t,color:d};a([...n,S])};return e.jsx(u,{token:v,onSingleTap:o("Single tap","#30b0c7"),onDoubleTap:o("Double tap","#5856d7"),onLongPress:o("Long press","#ff9500"),isZoomEnabled:!1,children:n.map(({latitude:t,longitude:d,title:r,color:s},c)=>e.jsx(se,{latitude:t,longitude:d,title:r,subtitle:`(${t}, ${d})`,color:s},c))})},g=()=>{const n=i.useMemo(()=>({centerLatitude:40.7538,centerLongitude:-73.986,latitudeDelta:.03,longitudeDelta:.03}),[]),a=i.useMemo(()=>Object.values(D).filter(r=>typeof r=="string").map(r=>D[r]),[]),[o,t]=i.useState(()=>a.map(()=>!0)),d=i.useId();return e.jsxs(e.Fragment,{children:[e.jsx(u,{token:v,initialRegion:n,showsMapTypeControl:!1,includedPOICategories:a.filter((r,s)=>o[s])}),e.jsx("div",{className:"map-overlay map-overlay-top",children:e.jsx("div",{className:"map-overlay-box map-overlay-options",children:a.map((r,s)=>e.jsxs("label",{htmlFor:d+s,children:[e.jsx("input",{id:d+s,type:"checkbox",checked:o[s],onChange:()=>{const c=[...o];c[s]=!o[s],t(c)}}),D[r]]},r))})})]})};g.storyName="Point of Interest Filter";function I({label:n,value:a}){const o=i.useId();return e.jsxs("label",{className:"form-group",htmlFor:o,children:[n,e.jsx("input",{id:o,type:"text",className:"input",value:a,readOnly:!0})]})}const k=()=>{const[n,a]=i.useState(46.94869130019719),[o,t]=i.useState(7.447300186911917),[d,r]=i.useState(.010188625378894756),[s,c]=i.useState(.024314821659999097),S=i.useMemo(()=>({centerLatitude:n,centerLongitude:o,latitudeDelta:d,longitudeDelta:s}),[]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{token:v,initialRegion:S,onRegionChangeEnd:M=>{a(M.centerLatitude),t(M.centerLongitude),r(M.latitudeDelta),c(M.longitudeDelta)}}),e.jsx("div",{className:"map-overlay map-overlay-top",children:e.jsxs("div",{className:"map-overlay-box map-overlay-inputs",children:[e.jsx(I,{label:"Center latitude",value:n.toString()}),e.jsx(I,{label:"Center longitude",value:o.toString()}),e.jsx(I,{label:"Latitude delta",value:d.toString()}),e.jsx(I,{label:"Longitude delta",value:s.toString()})]})})]})},h=()=>{const n=i.useMemo(()=>({centerLatitude:40.7538,centerLongitude:-73.986,latitudeDelta:.03,longitudeDelta:.03}),[]);return e.jsx(u,{load:a=>new Promise(o=>{const t=document.createElement("script");window.initMapKit=()=>{delete window.initMapKit,window.mapkit.init({authorizationCallback:d=>{d(a)}}),o()},t.src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js",t.dataset.callback="initMapKit",t.dataset.initialToken=a,t.dataset.libraries="map",t.crossOrigin="anonymous",document.head.appendChild(t)}),token:v,initialRegion:n,showsMapTypeControl:!1})};h.storyName="Custom `load` Function";y.__docgenInfo={description:"",methods:[],displayName:"FixedSize"};b.__docgenInfo={description:"",methods:[],displayName:"LiveStateUpdate"};C.__docgenInfo={description:"",methods:[],displayName:"MapInteractionEvents"};g.__docgenInfo={description:"",methods:[],displayName:"PointOfInterestFilters"};k.__docgenInfo={description:"",methods:[],displayName:"RegionChangeEvent"};h.__docgenInfo={description:"",methods:[],displayName:"CustomLoadFunction"};var R,E,N;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:"args => <Map {...args} />",...(N=(E=f.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var O,T,P;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '200px'
}}>
    <Map {...args} />
  </div>`,...(P=(T=y.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var F,_,z;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:"args => <Map {...args} />",...(z=(_=x.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var U,A,H;L.parameters={...L.parameters,docs:{...(U=L.parameters)==null?void 0:U.docs,source:{originalSource:"args => <Map {...args} />",...(H=(A=L.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var Q,K,W;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(W=(K=b.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Z,J,V;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(V=(J=C.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var B,$,G;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(G=($=g.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var Y,X,q;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(q=(X=k.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var ee,te,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const xe=["Empty","FixedSize","CustomizedAppearance","RegionLock","LiveStateUpdate","MapInteractionEvents","PointOfInterestFilters","RegionChangeEvent","CustomLoadFunction"];export{h as CustomLoadFunction,x as CustomizedAppearance,f as Empty,y as FixedSize,b as LiveStateUpdate,C as MapInteractionEvents,g as PointOfInterestFilters,k as RegionChangeEvent,L as RegionLock,xe as __namedExportsOrder,ye as default};
