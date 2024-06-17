import{a as ie,j as c}from"./jsx-runtime-670450c2.js";import{r as a}from"./index-f1f749bf.js";import{r as oe}from"./index-96c5f47c.js";import{b as le,t as M,c as re,f as k,F as T}from"./Map-700fab0a.js";import{C as f}from"./CalloutContainer-cb49d305.js";function S({latitude:h,longitude:y,title:D="",subtitle:O="",accessibilityLabel:P=null,subtitleVisibility:b=T.Adaptive,titleVisibility:V=T.Adaptive,clusteringIdentifier:I=null,displayPriority:v=void 0,collisionMode:g=void 0,color:F="#ff5b40",glyphColor:_="white",glyphText:B="",glyphImage:L=null,selectedGlyphImage:N=null,paddingTop:q=0,paddingRight:j=0,paddingBottom:A=0,paddingLeft:w=0,anchorOffsetX:E=0,anchorOffsetY:C=0,calloutElement:i=void 0,calloutContent:o=void 0,calloutLeftAccessory:l=void 0,calloutRightAccessory:r=void 0,calloutEnabled:X=void 0,calloutOffsetX:R=0,calloutOffsetY:x=0,selected:Y=!1,animates:G=!0,appearanceAnimation:K="",visible:z=!0,draggable:W=!1,enabled:H=!0,onSelect:J=void 0,onDeselect:Q=void 0,onDragStart:U=void 0,onDragEnd:Z=void 0,onDragging:$=void 0}){const[e,ee]=a.useState(null),s=a.useContext(le);a.useEffect(()=>{e&&(e.subtitleVisibility=M(b))},[e,b]),a.useEffect(()=>{e&&(e.titleVisibility=M(V))},[e,V]),a.useEffect(()=>{e&&(e.padding=new mapkit.Padding(q,j,A,w))},[e,q,j,A,w]),a.useEffect(()=>{e&&(e.anchorOffset=new DOMPoint(E,C))},[e,E,C]),a.useEffect(()=>{e&&(e.calloutOffset=new DOMPoint(R,x))},[e,R,x]);const u=a.useRef(null),d=a.useRef(null),p=a.useRef(null),m=a.useRef(null);a.useLayoutEffect(()=>{if(!e)return;const t={};return i&&m.current!==null&&(t.calloutElementForAnnotation=()=>m.current),l&&u.current!==null&&(t.calloutLeftAccessoryForAnnotation=()=>u.current),r&&d.current!==null&&(t.calloutRightAccessoryForAnnotation=()=>d.current),o&&p.current!==null&&(t.calloutContentForAnnotation=()=>p.current),Object.keys(t).length>0?e.callout=t:delete e.callout,()=>{delete e.callout}},[e,i,l,r,o,m.current,u.current,d.current,p.current]),a.useEffect(()=>{e&&(g==="Circle"?e.collisionMode=mapkit.Annotation.CollisionMode.Circle:g==="Rectangle"?e.collisionMode=mapkit.Annotation.CollisionMode.Rectangle:delete e.collisionMode)},[e,g]),a.useEffect(()=>{if(e){if(v===void 0){delete e.displayPriority;return}e.displayPriority=re(v)}},[e,v]),Object.entries({title:D,subtitle:O,accessibilityLabel:P,color:F,glyphColor:_,glyphText:B,glyphImage:L,selectedGlyphImage:N,clusteringIdentifier:I,selected:Y,animates:G,appearanceAnimation:K,draggable:W,enabled:H,visible:z,calloutEnabled:X}).forEach(([t,n])=>{a.useEffect(()=>{if(e){if(n===void 0){delete e[t];return}e[t]=n}},[e,n])});const te=()=>{};[{name:"select",handler:J},{name:"deselect",handler:Q},{name:"drag-start",handler:U}].forEach(({name:t,handler:n})=>{k(e,t,n,te)});const ae=()=>({latitude:e.coordinate.latitude,longitude:e.coordinate.longitude}),ne=t=>({latitude:t.coordinate.latitude,longitude:t.coordinate.longitude});return k(e,"drag-end",Z,ae),k(e,"dragging",$,ne),a.useLayoutEffect(()=>{if(s===null)return;const t=new mapkit.MarkerAnnotation(new mapkit.Coordinate(h,y));return s.addAnnotation(t),ee(t),()=>{s.removeAnnotation(t)}},[s,h,y]),oe.createPortal(ie("div",{style:{display:"none"},children:[o!==void 0&&c(f,{ref:p,type:"content",children:o}),l!==void 0&&c(f,{ref:u,type:"left",children:l}),r!==void 0&&c(f,{ref:d,type:"right",children:r}),i!==void 0&&c(f,{ref:m,type:"container",children:i})]}),document.body)}try{S.displayName="Marker",S.__docgenInfo={description:"",displayName:"Marker",props:{latitude:{defaultValue:null,description:"The latitude in degrees.",name:"latitude",required:!0,type:{name:"number"}},longitude:{defaultValue:null,description:"The longitude in degrees.",name:"longitude",required:!0,type:{name:"number"}},title:{defaultValue:{value:""},description:`The text to display in the annotation’s callout.
@see {@link https://developer.apple.com/documentation/mapkitjs/annotation/2973835-title}`,name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:{value:""},description:`The text to display as a subtitle on the second line of an annotation’s callout.
@see {@link https://developer.apple.com/documentation/mapkitjs/annotation/2973834-subtitle}`,name:"subtitle",required:!1,type:{name:"string"}},accessibilityLabel:{defaultValue:{value:"null"},description:`Accessibility text for the annotation.
@see {@link https://developer.apple.com/documentation/mapkitjs/annotation/2973814-accessibilitylabel}`,name:"accessibilityLabel",required:!1,type:{name:"string | null"}},subtitleVisibility:{defaultValue:{value:"FeatureVisibility.Adaptive"},description:`A value that determines the behavior of the subtitle’s visibility.
@see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/3009407-subtitlevisibility}`,name:"subtitleVisibility",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"}]}},titleVisibility:{defaultValue:{value:"FeatureVisibility.Adaptive"},description:`A value that determines the behavior of the title’s visibility.
@see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/3009408-titlevisibility}`,name:"titleVisibility",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"}]}},color:{defaultValue:{value:"#ff5b40"},description:`The background color of the balloon.
@see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2973987-color}`,name:"color",required:!1,type:{name:"string"}},glyphColor:{defaultValue:{value:"white"},description:`The fill color of the glyph.
@see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2973988-glyphcolor}`,name:"glyphColor",required:!1,type:{name:"string"}},glyphText:{defaultValue:{value:""},description:`The text to display in the marker balloon.
@see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2978331-glyphtext}`,name:"glyphText",required:!1,type:{name:"string"}},glyphImage:{defaultValue:{value:"null"},description:`The image to display in the marker balloon.
@see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2973989-glyphimage}`,name:"glyphImage",required:!1,type:{name:"object | null"}},selectedGlyphImage:{defaultValue:{value:"null"},description:`The image to display in the balloon when the user selects the marker.
@see {@link https://developer.apple.com/documentation/mapkitjs/markerannotation/2973991-selectedglyphimage}`,name:"selectedGlyphImage",required:!1,type:{name:"object | null"}},paddingTop:{defaultValue:{value:"0"},description:`The amount of padding, in CSS pixels, to inset the map from the top edge.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}`,name:"paddingTop",required:!1,type:{name:"number"}},paddingRight:{defaultValue:{value:"0"},description:`The amount of padding, in CSS pixels, to inset the map from the right edge.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}`,name:"paddingRight",required:!1,type:{name:"number"}},paddingBottom:{defaultValue:{value:"0"},description:`The amount of padding, in CSS pixels, to inset the map from the bottom edge.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}`,name:"paddingBottom",required:!1,type:{name:"number"}},paddingLeft:{defaultValue:{value:"0"},description:`The amount of padding, in CSS pixels, to inset the map from the left edge.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/padding}`,name:"paddingLeft",required:!1,type:{name:"number"}},anchorOffsetX:{defaultValue:{value:"0"},description:`An X offset that changes the annotation’s default anchor point.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973816-anchoroffset}`,name:"anchorOffsetX",required:!1,type:{name:"number"}},anchorOffsetY:{defaultValue:{value:"0"},description:`An Y offset that changes the annotation’s default anchor point.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973816-anchoroffset}`,name:"anchorOffsetY",required:!1,type:{name:"number"}},selected:{defaultValue:{value:"false"},description:"A Boolean value that determines whether the map displays the marker in a selected state.",name:"selected",required:!1,type:{name:"boolean"}},animates:{defaultValue:{value:"true"},description:`A Boolean value that determines whether the map animates the marker.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973817-animates}`,name:"animates",required:!1,type:{name:"boolean"}},appearanceAnimation:{defaultValue:{value:""},description:`A CSS animation that runs when the marker appears on the map.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973818-appearanceanimation}`,name:"appearanceAnimation",required:!1,type:{name:"string"}},draggable:{defaultValue:{value:"false"},description:`A Boolean value that determines whether the user can drag the marker.

(Marker needs to be enabled in order to be draggable.)
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973817-animates}`,name:"draggable",required:!1,type:{name:"boolean"}},enabled:{defaultValue:{value:"true"},description:`A Boolean value that determines whether the annotation responds to user interaction.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973828-enabled}`,name:"enabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:{value:"true"},description:"A Boolean value that determines whether the annotation is visible or hidden.",name:"visible",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:{value:"undefined"},description:"Event fired when the marker is selected.",name:"onSelect",required:!1,type:{name:"(() => void)"}},onDeselect:{defaultValue:{value:"undefined"},description:"Event fired when the marker is deselected.",name:"onDeselect",required:!1,type:{name:"(() => void)"}},onDragStart:{defaultValue:{value:"undefined"},description:"Event fired with the user initiates a drag for the annotation.",name:"onDragStart",required:!1,type:{name:"(() => void)"}},onDragEnd:{defaultValue:{value:"undefined"},description:"Event fired with the user ends a drag for the annotation.",name:"onDragEnd",required:!1,type:{name:"((newPosition: Coordinate) => void)"}},onDragging:{defaultValue:{value:"undefined"},description:"Event fired when the user a drags the annotation.",name:"onDragging",required:!1,type:{name:"((newPosition: Coordinate) => void)"}},clusteringIdentifier:{defaultValue:{value:"null"},description:`A shared identifier for all of the member annotations.
An annotation needs a clusteringIdentifier to be part of an annotation cluster.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotations/clustering_annotations}`,name:"clusteringIdentifier",required:!1,type:{name:"string | null"}},collisionMode:{defaultValue:{value:"undefined"},description:`A mode that determines the shape of the collision frame.
Rectangle | Circle | None
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973822-collisionmode}
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/collisionmode}`,name:"collisionMode",required:!1,type:{name:'"Rectangle" | "Circle" | null'}},displayPriority:{defaultValue:{value:"undefined"},description:'A numeric hint that the map uses to prioritize how it displays annotations.\n\nIs either any number from `0` to `1000`,\nor a preset value: `"low"` (250), `"high"` (750), or `"required"` (1000).\n@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973825-displaypriority}',name:"displayPriority",required:!1,type:{name:'number | "low" | "high" | "required"'}},calloutOffsetX:{defaultValue:{value:"0"},description:`An X offset that changes the annotation callout’s default placement.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973821-calloutoffset}`,name:"calloutOffsetX",required:!1,type:{name:"number"}},calloutOffsetY:{defaultValue:{value:"0"},description:`An Y offset that changes the annotation callout’s default placement.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973821-calloutoffset}`,name:"calloutOffsetY",required:!1,type:{name:"number"}},calloutEnabled:{defaultValue:{value:"undefined"},description:`A Boolean value that determines whether the map shows an annotation’s callout.
If the title is empty, the framework can’t show the standard callout even if property is true.
@see {@link https://developer.apple.com/documentation/mapkitjs/mapkit/annotation/2973820-calloutenabled}`,name:"calloutEnabled",required:!1,type:{name:"boolean"}},calloutLeftAccessory:{defaultValue:{value:"undefined"},description:`Returns an element to use as a custom accessory on the left side of the callout content area.
@see {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991150-calloutleftaccessoryforannotatio}`,name:"calloutLeftAccessory",required:!1,type:{name:"ReactNode"}},calloutRightAccessory:{defaultValue:{value:"undefined"},description:`Returns an element to use as a custom accessory on the right side of the callout content area.
@see {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991151-calloutrightaccessoryforannotati}`,name:"calloutRightAccessory",required:!1,type:{name:"ReactNode"}},calloutContent:{defaultValue:{value:"undefined"},description:`Returns custom content for the callout bubble.
@see {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991148-calloutcontentforannotation}`,name:"calloutContent",required:!1,type:{name:"ReactNode"}},calloutElement:{defaultValue:{value:"undefined"},description:`Returns an element representing a custom callout.
@see {@link https://developer.apple.com/documentation/mapkitjs/annotationcalloutdelegate/2991148-calloutcontentforannotation}`,name:"calloutElement",required:!1,type:{name:"ReactNode"}}}}}catch{}export{S as M};
//# sourceMappingURL=Marker-dbdc0e6f.js.map