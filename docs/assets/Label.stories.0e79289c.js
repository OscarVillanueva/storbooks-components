var m=Object.defineProperty;var s=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var c=(e,o,l)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,i=(e,o)=>{for(var l in o||(o={}))y.call(o,l)&&c(e,l,o[l]);if(s)for(var l of s(o))u.call(o,l)&&c(e,l,o[l]);return e};import{j as d}from"./jsx-runtime.bbd18d5b.js";import"./index.89c93e94.js";const n=({allCaps:e,color:o="primary",size:l="normal",title:t="Hello World!",fontColor:r})=>d("span",{className:`label text-${o} ${l} `,style:r?{color:r}:{},children:e?t.toUpperCase():t});var p=n;try{n.displayName="Label",n.__docgenInfo={description:"",displayName:"Label",props:{title:{defaultValue:{value:"Hello World!"},description:"A label to show on the button",name:"title",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"An icon to show on the left of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:{value:"primary"},description:"Color of the text",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},allCaps:{defaultValue:null,description:"Text transformation",name:"allCaps",required:!1,type:{name:"boolean"}},fontColor:{defaultValue:null,description:"Custom Font text",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Label.tsx#Label"]={docgenInfo:n.__docgenInfo,name:"Label",path:"src/components/Label.tsx#Label"})}catch{}var z={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label  from "../../components/Label";

export default {
  title: 'Texts/Label',
  component: Label,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' }
  }
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}/>

export const Basic = Template.bind({})
Basic.args = { size: 'normal', allCaps: false }

export const AllCaps = Template.bind({})
AllCaps.args = { size: 'normal', allCaps: true, title: 'hello world!' }

export const Secondary = Template.bind({})
Secondary.args = { size: 'normal', color: 'secondary'  }

export const Tertiary = Template.bind({})
Tertiary.args = { size:'normal', color: 'tertiary' }

export const CustomFontColor = Template.bind({})
CustomFontColor.args = { size:'h1', fontColor: '#5517ac' }
`,locationsMap:{basic:{startLoc:{col:47,line:14},endLoc:{col:75,line:14},startBody:{col:47,line:14},endBody:{col:75,line:14}},"all-caps":{startLoc:{col:47,line:14},endLoc:{col:75,line:14},startBody:{col:47,line:14},endBody:{col:75,line:14}},secondary:{startLoc:{col:47,line:14},endLoc:{col:75,line:14},startBody:{col:47,line:14},endBody:{col:75,line:14}},tertiary:{startLoc:{col:47,line:14},endLoc:{col:75,line:14},startBody:{col:47,line:14},endBody:{col:75,line:14}},"custom-font-color":{startLoc:{col:47,line:14},endLoc:{col:75,line:14},startBody:{col:47,line:14},endBody:{col:75,line:14}}}}},title:"Texts/Label",component:p,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}};const a=e=>d(p,i({},e)),f=a.bind({});f.args={size:"normal",allCaps:!1};const b=a.bind({});b.args={size:"normal",allCaps:!0,title:"hello world!"};const C=a.bind({});C.args={size:"normal",color:"secondary"};const L=a.bind({});L.args={size:"normal",color:"tertiary"};const x=a.bind({});x.args={size:"h1",fontColor:"#5517ac"};const S=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{b as AllCaps,f as Basic,x as CustomFontColor,C as Secondary,L as Tertiary,S as __namedExportsOrder,z as default};
//# sourceMappingURL=Label.stories.0e79289c.js.map
