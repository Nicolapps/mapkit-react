import{a,F as f,j as e}from"./jsx-runtime-670450c2.js";import{r as i}from"./index-f1f749bf.js";/* empty css                */import{F as y,M as u}from"./Map-700fab0a.js";import{M as d}from"./Marker-216b5aec.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./CalloutContainer-cb49d305.js";const c="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDUwMzA1LCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.8SZ6HkDxS04_PFb6eCdD7jRnOF68DYznTAm1FJo4VI11ALk9O-g6Gcd1vblpE4PRIoyobAVvCkudDJqLTY2pfA",L=t=>({options:Object.values(t).filter(n=>typeof n=="string"),mapping:t}),ee={title:"Components/Marker",component:d,args:{},argTypes:{subtitleVisibility:L(y),titleVisibility:L(y)},parameters:{layout:"fullscreen"}},V=t=>{const n=i.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return e(u,{token:c,initialRegion:n,children:e(d,{...t})})},m=V.bind({});m.args={latitude:46.52,longitude:6.57};const g=()=>{const[t,n]=i.useState(!1),l=i.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]),r=i.useId();return a(f,{children:[e(u,{token:c,initialRegion:l,paddingBottom:44,children:e(d,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",selected:t,onSelect:()=>n(!0),onDeselect:()=>n(!1)})}),e("div",{className:"map-overlay",children:e("div",{className:"map-overlay-box",children:a("label",{htmlFor:r,children:[e("input",{id:r,type:"checkbox",checked:t,onChange:s=>n(s.target.checked)}),"Selected"]})})})]})};g.storyName="Two-Way Binding for `selected`";const v=()=>{const[t,n]=i.useState(46.20738751546706),[l,r]=i.useState(6.155891756231),s=i.useId(),b=i.useId(),M=i.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.01,longitudeDelta:.01}),[]);return a(f,{children:[e(u,{token:c,initialRegion:M,children:e(d,{latitude:t,longitude:l,title:"Tap and hold to move",draggable:!0,enabled:!0,onDragEnd:o=>{n(o.latitude),r(o.longitude)}})}),e("div",{className:"map-overlay map-overlay-top",children:a("div",{className:"map-overlay-box map-overlay-inputs",children:[a("label",{className:"form-group",htmlFor:s,children:["Latitude",e("input",{id:s,type:"text",className:"input",value:t,onChange:o=>n(Number(o.target.value))})]}),a("label",{className:"form-group",htmlFor:b,children:["Longitude",e("input",{id:s,type:"text",className:"input",value:l,onChange:o=>r(Number(o.target.value))})]})]})})]})},p=()=>{const t="id",[n,l]=i.useState(null),r=i.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:1,longitudeDelta:1}),[]);return a(f,{children:[e(u,{token:c,initialRegion:r,paddingBottom:44,children:[{latitude:46.20738751546706,longitude:6.155891756231},{latitude:46.25738751546706,longitude:6.185891756231},{latitude:46.28738751546706,longitude:6.2091756231}].map(({latitude:b,longitude:M},o)=>e(d,{latitude:b,longitude:M,title:`Marker #${o+1}`,selected:n===o+1,onSelect:()=>l(o+1),onDeselect:()=>l(null),clusteringIdentifier:t,collisionMode:"Circle",displayPriority:750}))}),e("div",{className:"map-overlay",children:e("div",{className:"map-overlay-box",children:e("p",{children:n?`Selected marker #${n}`:"Not selected"})})})]})};p.storyName="Clustering three markers into one";function z({title:t,subtitle:n,url:l}){return a("div",{className:"landmark",children:[e("h1",{children:t??""}),a("section",{children:[e("p",{children:n??""}),e("p",{children:e("a",{href:l,target:"_blank",rel:"noreferrer",children:"Website"})})]})]})}const h=()=>{const t=i.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return e(u,{token:c,initialRegion:t,children:e(d,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",calloutElement:e(z,{title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",url:"https://en.wikipedia.org/wiki/Jet_d%27Eau"}),calloutEnabled:!0,calloutOffsetX:-148,calloutOffsetY:-78})})};h.storyName="Marker with custom callout element";function W({title:t,subtitle:n}){return a("div",{className:"custom-annotation-content",children:[e("h2",{children:t??""}),e("p",{children:n??""})]})}function Y({src:t}){return e("div",{className:"custom-annotation-image",children:e("img",{src:t,alt:""})})}function H({url:t}){return e("div",{className:"custom-annotation-info",children:e("a",{href:t,target:"_blank",rel:"noreferrer",children:a("svg",{width:"20px",height:"20px",viewBox:"0 0 20 20",stroke:"#333",strokeWidth:"2",fill:"none",fillRule:"evenodd",strokeLinecap:"round",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"10",cy:"10",r:"9"}),e("line",{x1:"10",y1:"9",x2:"10",y2:"15"}),e("circle",{cx:"10",cy:"5",r:"0.1"})]})})})}const k=()=>{const t=i.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]);return e(u,{token:c,initialRegion:t,children:e(d,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",calloutContent:e(W,{title:"Jet d’eau",subtitle:"Iconic landmark of Geneva"}),calloutLeftAccessory:e(Y,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Le_jet_d-eau_de_Genève.jpg/480px-Le_jet_d-eau_de_Genève.jpg"}),calloutRightAccessory:e(H,{url:"https://en.wikipedia.org/wiki/Jet_d%27Eau"}),calloutEnabled:!0})})};k.storyName="Marker with custom callout content";var C,I,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Marker {...args} />
    </Map>;
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var D,R,x;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(x=(R=g.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var S,w,_;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(_=(w=v.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var E,J,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(F=(J=p.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var G,j,A;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.007,
    longitudeDelta: 0.015
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Marker latitude={46.20738751546706} longitude={6.155891756231} title="Jet d’eau" subtitle="Iconic landmark of Geneva" calloutElement={<CustomCalloutElement title="Jet d’eau" subtitle="Iconic landmark of Geneva" url="https://en.wikipedia.org/wiki/Jet_d%27Eau" />} calloutEnabled calloutOffsetX={-148} calloutOffsetY={-78} />
    </Map>;
}`,...(A=(j=h.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var O,T,B;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 46.20738751546706,
    centerLongitude: 6.155891756231,
    latitudeDelta: 0.007,
    longitudeDelta: 0.015
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Marker latitude={46.20738751546706} longitude={6.155891756231} title="Jet d’eau" subtitle="Iconic landmark of Geneva" calloutContent={<CustomCalloutContent title="Jet d’eau" subtitle="Iconic landmark of Geneva" />} calloutLeftAccessory={<CustomCalloutLeftAccessory src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Le_jet_d-eau_de_Genève.jpg/480px-Le_jet_d-eau_de_Genève.jpg" />} calloutRightAccessory={<CustomCalloutRightAccessory url="https://en.wikipedia.org/wiki/Jet_d%27Eau" />} calloutEnabled />
    </Map>;
}`,...(B=(T=k.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const te=["Default","TwoWayBindingSelected","MoveableMarker","MarkerClustering","CustomMarkerCallout","CustomMarkerCalloutContent"];export{h as CustomMarkerCallout,k as CustomMarkerCalloutContent,m as Default,p as MarkerClustering,v as MoveableMarker,g as TwoWayBindingSelected,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=Marker.stories-06a3d3e4.js.map
