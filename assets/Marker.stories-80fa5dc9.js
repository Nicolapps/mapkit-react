import{j as e}from"./jsx-runtime-50395f49.js";import{r as a}from"./index-9fa1aa67.js";import{f as h}from"./index-2b399915.js";/* empty css                */import{F as f,M as g}from"./Map-415eb6e1.js";import{M as s}from"./Marker-e168ae2d.js";import"./index-5b53e37f.js";import"./CalloutContainer-d701ef6f.js";const p="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDUwMzA1LCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.8SZ6HkDxS04_PFb6eCdD7jRnOF68DYznTAm1FJo4VI11ALk9O-g6Gcd1vblpE4PRIoyobAVvCkudDJqLTY2pfA",j=t=>({options:Object.values(t).filter(n=>typeof n=="string"),mapping:t}),K={title:"Components/Marker",component:s,args:{onSelect:h(),onDeselect:h(),onDragStart:h(),onDragEnd:h(),onDragging:h()},argTypes:{subtitleVisibility:j(f),titleVisibility:j(f)},parameters:{layout:"fullscreen"}},B=t=>{const n=a.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return e.jsx(g,{token:p,initialRegion:n,children:e.jsx(s,{...t})})},x=B.bind({});x.args={latitude:46.52,longitude:6.57};const d=()=>{const[t,n]=a.useState(!1),o=a.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]),l=a.useId();return e.jsxs(e.Fragment,{children:[e.jsx(g,{token:p,initialRegion:o,paddingBottom:44,children:e.jsx(s,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",selected:t,onSelect:()=>n(!0),onDeselect:()=>n(!1)})}),e.jsx("div",{className:"map-overlay",children:e.jsx("div",{className:"map-overlay-box",children:e.jsxs("label",{htmlFor:l,children:[e.jsx("input",{id:l,type:"checkbox",checked:t,onChange:r=>n(r.target.checked)}),"Selected"]})})})]})};d.storyName="Two-Way Binding for `selected`";const k=()=>{const[t,n]=a.useState(46.20738751546706),[o,l]=a.useState(6.155891756231),r=a.useId(),v=a.useId(),b=a.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.01,longitudeDelta:.01}),[]);return e.jsxs(e.Fragment,{children:[e.jsx(g,{token:p,initialRegion:b,children:e.jsx(s,{latitude:t,longitude:o,title:"Tap and hold to move",draggable:!0,enabled:!0,onDragEnd:i=>{n(i.latitude),l(i.longitude)}})}),e.jsx("div",{className:"map-overlay map-overlay-top",children:e.jsxs("div",{className:"map-overlay-box map-overlay-inputs",children:[e.jsxs("label",{className:"form-group",htmlFor:r,children:["Latitude",e.jsx("input",{id:r,type:"text",className:"input",value:t,onChange:i=>n(Number(i.target.value))})]}),e.jsxs("label",{className:"form-group",htmlFor:v,children:["Longitude",e.jsx("input",{id:r,type:"text",className:"input",value:o,onChange:i=>l(Number(i.target.value))})]})]})})]})},c=()=>{const t="id",[n,o]=a.useState(null),l=a.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:1,longitudeDelta:1}),[]),r=[{latitude:46.20738751546706,longitude:6.155891756231},{latitude:46.25738751546706,longitude:6.185891756231},{latitude:46.28738751546706,longitude:6.2091756231}];return e.jsxs(e.Fragment,{children:[e.jsx(g,{token:p,initialRegion:l,paddingBottom:44,children:r.map(({latitude:v,longitude:b},i)=>e.jsx(s,{latitude:v,longitude:b,title:`Marker #${i+1}`,selected:n===i+1,onSelect:()=>o(i+1),onDeselect:()=>o(null),clusteringIdentifier:t,collisionMode:"Circle",displayPriority:750}))}),e.jsx("div",{className:"map-overlay",children:e.jsx("div",{className:"map-overlay-box",children:e.jsx("p",{children:n?`Selected marker #${n}`:"Not selected"})})})]})};c.storyName="Clustering three markers into one";function V({title:t,subtitle:n,url:o}){return e.jsxs("div",{className:"landmark",children:[e.jsx("h1",{children:t??""}),e.jsxs("section",{children:[e.jsx("p",{children:n??""}),e.jsx("p",{children:e.jsx("a",{href:o,target:"_blank",rel:"noreferrer",children:"Website"})})]})]})}const u=()=>{const t=a.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return e.jsx(g,{token:p,initialRegion:t,children:e.jsx(s,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",calloutElement:e.jsx(V,{title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",url:"https://en.wikipedia.org/wiki/Jet_d%27Eau"}),calloutEnabled:!0,calloutOffsetX:-148,calloutOffsetY:-78})})};u.storyName="Marker with custom callout element";function W({title:t,subtitle:n}){return e.jsxs("div",{className:"custom-annotation-content",children:[e.jsx("h2",{children:t??""}),e.jsx("p",{children:n??""})]})}function z({src:t}){return e.jsx("div",{className:"custom-annotation-image",children:e.jsx("img",{src:t,alt:""})})}function Y({url:t}){return e.jsx("div",{className:"custom-annotation-info",children:e.jsx("a",{href:t,target:"_blank",rel:"noreferrer","aria-label":"Learn more",children:e.jsxs("svg",{width:"20px",height:"20px",viewBox:"0 0 20 20",stroke:"#333",strokeWidth:"2",fill:"none",fillRule:"evenodd",strokeLinecap:"round",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"10",cy:"10",r:"9"}),e.jsx("line",{x1:"10",y1:"9",x2:"10",y2:"15"}),e.jsx("circle",{cx:"10",cy:"5",r:"0.1"})]})})})}const m=()=>{const t=a.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return e.jsx(g,{token:p,initialRegion:t,children:e.jsx(s,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",calloutContent:e.jsx(W,{title:"Jet d’eau",subtitle:"Iconic landmark of Geneva"}),calloutLeftAccessory:e.jsx(z,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Le_jet_d-eau_de_Genève.jpg/480px-Le_jet_d-eau_de_Genève.jpg"}),calloutRightAccessory:e.jsx(Y,{url:"https://en.wikipedia.org/wiki/Jet_d%27Eau"}),calloutEnabled:!0})})};m.storyName="Marker with custom callout content";d.__docgenInfo={description:"",methods:[],displayName:"TwoWayBindingSelected"};k.__docgenInfo={description:"",methods:[],displayName:"MoveableMarker"};c.__docgenInfo={description:"",methods:[],displayName:"MarkerClustering"};u.__docgenInfo={description:"",methods:[],displayName:"CustomMarkerCallout"};m.__docgenInfo={description:"",methods:[],displayName:"CustomMarkerCalloutContent"};var y,M,C;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Marker {...args} />
    </Map>;
}`,...(C=(M=x.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var L,I,N;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(false);
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.007,
    longitudeDelta: 0.015
  }), []);
  const checkboxId = useId();
  return <>
      <Map token={token} initialRegion={initialRegion} paddingBottom={44}>
        <Marker latitude={46.20738751546706} longitude={6.155891756231} title="Jet d’eau" subtitle="Iconic landmark of Geneva" selected={selected} onSelect={() => setSelected(true)} onDeselect={() => setSelected(false)} />
      </Map>

      <div className="map-overlay">
        <div className="map-overlay-box">
          <label htmlFor={checkboxId}>
            <input id={checkboxId} type="checkbox" checked={selected} onChange={e => setSelected(e.target.checked)} />
            Selected
          </label>
        </div>
      </div>
    </>;
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var D,R,S;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [latitude, setLatitude] = useState(46.20738751546706);
  const [longitude, setLongitude] = useState(6.155891756231);
  const idLatitude = useId();
  const idLongitude = useId();
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }), []);
  return <>
      <Map token={token} initialRegion={initialRegion}>
        <Marker latitude={latitude} longitude={longitude} title="Tap and hold to move" draggable enabled onDragEnd={coordinate => {
        setLatitude(coordinate.latitude);
        setLongitude(coordinate.longitude);
      }} />
      </Map>

      <div className="map-overlay map-overlay-top">
        <div className="map-overlay-box map-overlay-inputs">
          <label className="form-group" htmlFor={idLatitude}>
            Latitude
            <input id={idLatitude} type="text" className="input" value={latitude} onChange={e => setLatitude(Number(e.target.value))} />
          </label>
          <label className="form-group" htmlFor={idLongitude}>
            Longitude
            <input id={idLatitude} type="text" className="input" value={longitude} onChange={e => setLongitude(Number(e.target.value))} />
          </label>
        </div>
      </div>
    </>;
}`,...(S=(R=k.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var _,w,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const clusteringIdentifier = 'id';
  const [selected, setSelected] = useState<number | null>(null);
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 1,
    longitudeDelta: 1
  }), []);
  const coordinates = [{
    latitude: 46.20738751546706,
    longitude: 6.155891756231
  }, {
    latitude: 46.25738751546706,
    longitude: 6.185891756231
  }, {
    latitude: 46.28738751546706,
    longitude: 6.2091756231
  }];
  return <>
      <Map token={token} initialRegion={initialRegion} paddingBottom={44}>
        {coordinates.map(({
        latitude,
        longitude
      }, index) => <Marker latitude={latitude} longitude={longitude} title={\`Marker #\${index + 1}\`} selected={selected === index + 1} onSelect={() => setSelected(index + 1)} onDeselect={() => setSelected(null)} clusteringIdentifier={clusteringIdentifier} collisionMode="Circle" displayPriority={750} />)}
      </Map>

      <div className="map-overlay">
        <div className="map-overlay-box">
          <p>{selected ? \`Selected marker #\${selected}\` : 'Not selected'}</p>
        </div>
      </div>
    </>;
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var J,F,G;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.007,
    longitudeDelta: 0.015
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Marker latitude={46.20738751546706} longitude={6.155891756231} title="Jet d’eau" subtitle="Iconic landmark of Geneva" calloutElement={<CustomCalloutElement title="Jet d’eau" subtitle="Iconic landmark of Geneva" url="https://en.wikipedia.org/wiki/Jet_d%27Eau" />} calloutEnabled calloutOffsetX={-148} calloutOffsetY={-78} />
    </Map>;
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var A,T,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.007,
    longitudeDelta: 0.015
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Marker latitude={46.20738751546706} longitude={6.155891756231} title="Jet d’eau" subtitle="Iconic landmark of Geneva" calloutContent={<CustomCalloutContent title="Jet d’eau" subtitle="Iconic landmark of Geneva" />} calloutLeftAccessory={<CustomCalloutLeftAccessory src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Le_jet_d-eau_de_Genève.jpg/480px-Le_jet_d-eau_de_Genève.jpg" />} calloutRightAccessory={<CustomCalloutRightAccessory url="https://en.wikipedia.org/wiki/Jet_d%27Eau" />} calloutEnabled />
    </Map>;
}`,...(O=(T=m.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const ee=["Default","TwoWayBindingSelected","MoveableMarker","MarkerClustering","CustomMarkerCallout","CustomMarkerCalloutContent"];export{u as CustomMarkerCallout,m as CustomMarkerCalloutContent,x as Default,c as MarkerClustering,k as MoveableMarker,d as TwoWayBindingSelected,ee as __namedExportsOrder,K as default};
