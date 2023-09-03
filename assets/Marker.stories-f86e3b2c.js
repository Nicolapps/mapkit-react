import{a as u,F as N,j as e}from"./jsx-runtime-670450c2.js";import{r as i}from"./index-f1f749bf.js";import{F as k,M as m}from"./Map-30e53352.js";import{M as s}from"./Marker-459755a9.js";import"./_commonjsHelpers-042e6b4d.js";const g="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEzNE1EVFdEM1EifQ.eyJpc3MiOiJXNDdFMkxTNVk5IiwiaWF0IjoxNjcyNDk3MTU1LCJleHAiOjE3MDM5ODA4MDAsIm9yaWdpbiI6Imh0dHBzOi8vbmljb2xhcHBzLmdpdGh1Yi5pbyJ9.Llf8X3q3ZfEdgxMBjlkkwiAnbHHevpOhBTWBUkuow5nQ2xvcWQDV6i59KiPa5YsfEvof9bQ3Y0Q3xCBD5Ky3XQ",M=n=>({options:Object.values(n).filter(t=>typeof t=="string"),mapping:n}),J={title:"Components/Marker",component:s,args:{},argTypes:{subtitleVisibility:M(k),titleVisibility:M(k)},parameters:{layout:"fullscreen"}},C=n=>{const t=i.useMemo(()=>({centerLatitude:48,centerLongitude:14,latitudeDelta:22,longitudeDelta:55}),[]);return e(m,{token:g,initialRegion:t,children:e(s,{...n})})},a=C.bind({});a.args={latitude:46.52,longitude:6.57};const o=()=>{const[n,t]=i.useState(!1),r=i.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:.007,longitudeDelta:.015}),[]),d=i.useId();return u(N,{children:[e(m,{token:g,initialRegion:r,paddingBottom:44,children:e(s,{latitude:46.20738751546706,longitude:6.155891756231,title:"Jet d’eau",subtitle:"Iconic landmark of Geneva",selected:n,onSelect:()=>t(!0),onDeselect:()=>t(!1)})}),e("div",{className:"map-overlay",children:e("div",{className:"map-overlay-box",children:u("label",{htmlFor:d,children:[e("input",{id:d,type:"checkbox",checked:n,onChange:p=>t(p.target.checked)}),"Selected"]})})})]})};o.storyName="Two-Way Binding for `selected`";const l=()=>{const n="id",[t,r]=i.useState(null),d=i.useMemo(()=>({centerLatitude:46.20738751546706,centerLongitude:6.155891756231,latitudeDelta:1,longitudeDelta:1}),[]);return u(N,{children:[e(m,{token:g,initialRegion:d,paddingBottom:44,children:[{latitude:46.20738751546706,longitude:6.155891756231},{latitude:46.25738751546706,longitude:6.185891756231},{latitude:46.28738751546706,longitude:6.2091756231}].map(({latitude:R,longitude:L},c)=>e(s,{latitude:R,longitude:L,title:`Marker #${c+1}`,selected:t===c+1,onSelect:()=>r(c+1),onDeselect:()=>r(null),clusteringIdentifier:n}))}),e("div",{className:"map-overlay",children:e("div",{className:"map-overlay-box",children:e("p",{children:t?`Selected marker #${t}`:"Not selected"})})})]})};l.storyName="Clustering three markers into one";var h,b,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const initialRegion: CoordinateRegion = useMemo(() => ({
    centerLatitude: 48,
    centerLongitude: 14,
    latitudeDelta: 22,
    longitudeDelta: 55
  }), []);
  return <Map token={token} initialRegion={initialRegion}>
      <Marker {...args} />
    </Map>;
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,f,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(I=(f=o.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var S,D,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(x=(D=l.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const O=["Default","TwoWayBindingSelected","MarkerClustering"];export{a as Default,l as MarkerClustering,o as TwoWayBindingSelected,O as __namedExportsOrder,J as default};
//# sourceMappingURL=Marker.stories-f86e3b2c.js.map
