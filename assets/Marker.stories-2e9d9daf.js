import{a as d,F as M,j as e}from"./jsx-runtime-670450c2.js";import{r as a}from"./index-f1f749bf.js";import{F as k,M as p}from"./Map-1602a87c.js";import{M as g}from"./Marker-ddb365a5.js";import"./_commonjsHelpers-042e6b4d.js";const v="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNzEyMDQ5NDQzLCJleHAiOjE3NDM1NTIwMDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pby8ifQ.1y92Cm2rRO4YfmDOJM6WYWoNbGgxP15h7Nk5FZzofT7fGBkBy1NlHgP9wUsgJRTw4ML-iNMFGs3PGVIZ9AM0Ew",y=n=>({options:Object.values(n).filter(t=>typeof t=="string"),mapping:n}),z={title:"Components/Marker",component:g,args:{},argTypes:{subtitleVisibility:y(k),titleVisibility:y(k)},parameters:{layout:"fullscreen"}},B=n=>{const t=a.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return e(p,{token:v,initialRegion:t,children:e(g,{...n})})},s=B.bind({});s.args={latitude:46.52,longitude:6.57};const c=()=>{const[n,t]=a.useState(!1),o=a.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]),l=a.useId();return d(M,{children:[e(p,{token:v,initialRegion:o,paddingBottom:44,children:e(g,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",selected:n,onSelect:()=>t(!0),onDeselect:()=>t(!1)})}),e("div",{className:"map-overlay",children:e("div",{className:"map-overlay-box",children:d("label",{htmlFor:l,children:[e("input",{id:l,type:"checkbox",checked:n,onChange:r=>t(r.target.checked)}),"Selected"]})})})]})};c.storyName="Two-Way Binding for `selected`";const m=()=>{const[n,t]=a.useState(46.20738751546706),[o,l]=a.useState(6.155891756231),r=a.useId(),h=a.useId(),b=a.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.01,longitudeDelta:.01}),[]);return d(M,{children:[e(p,{token:v,initialRegion:b,children:e(g,{latitude:n,longitude:o,title:"Tap and hold to move",draggable:!0,enabled:!0,onDragEnd:i=>{t(i.latitude),l(i.longitude)}})}),e("div",{className:"map-overlay map-overlay-top",children:d("div",{className:"map-overlay-box map-overlay-inputs",children:[d("label",{className:"form-group",htmlFor:r,children:["Latitude",e("input",{id:r,type:"text",className:"input",value:n,onChange:i=>t(Number(i.target.value))})]}),d("label",{className:"form-group",htmlFor:h,children:["Longitude",e("input",{id:r,type:"text",className:"input",value:o,onChange:i=>l(Number(i.target.value))})]})]})})]})},u=()=>{const n="id",[t,o]=a.useState(null),l=a.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:1,longitudeDelta:1}),[]);return d(M,{children:[e(p,{token:v,initialRegion:l,paddingBottom:44,children:[{latitude:46.20738751546706,longitude:6.155891756231},{latitude:46.25738751546706,longitude:6.185891756231},{latitude:46.28738751546706,longitude:6.2091756231}].map(({latitude:h,longitude:b},i)=>e(g,{latitude:h,longitude:b,title:`Marker #${i+1}`,selected:t===i+1,onSelect:()=>o(i+1),onDeselect:()=>o(null),clusteringIdentifier:n}))}),e("div",{className:"map-overlay",children:e("div",{className:"map-overlay-box",children:e("p",{children:t?`Selected marker #${t}`:"Not selected"})})})]})};u.storyName="Clustering three markers into one";var N,L,I;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Marker {...args} />
    </Map>;
}`,...(I=(L=s.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var S,f,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(D=(f=c.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var x,R,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(C=(R=m.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var F,E,T;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
      }, index) => <Marker latitude={latitude} longitude={longitude} title={\`Marker #\${index + 1}\`} selected={selected === index + 1} onSelect={() => setSelected(index + 1)} onDeselect={() => setSelected(null)} clusteringIdentifier={clusteringIdentifier} />)}
      </Map>

      <div className="map-overlay">
        <div className="map-overlay-box">
          <p>{selected ? \`Selected marker #\${selected}\` : 'Not selected'}</p>
        </div>
      </div>
    </>;
}`,...(T=(E=u.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const V=["Default","TwoWayBindingSelected","MoveableMarker","MarkerClustering"];export{s as Default,u as MarkerClustering,m as MoveableMarker,c as TwoWayBindingSelected,V as __namedExportsOrder,z as default};
//# sourceMappingURL=Marker.stories-2e9d9daf.js.map
