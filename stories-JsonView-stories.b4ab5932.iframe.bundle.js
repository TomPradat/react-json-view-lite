/*! For license information please see stories-JsonView-stories.b4ab5932.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_json_view_lite=self.webpackChunkreact_json_view_lite||[]).push([[75],{"./src/stories/JsonView.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CollapsedNestedObjects:()=>CollapsedNestedObjects,CollapsedRoot:()=>CollapsedRoot,DarkTheme:()=>DarkTheme,RenderStringsWithoutObjects:()=>RenderStringsWithoutObjects,__namedExportsOrder:()=>__namedExportsOrder,default:()=>JsonView_stories});var react=__webpack_require__("./node_modules/react/index.js");const isBoolean=data=>"boolean"==typeof data||data instanceof Boolean,isNumber=data=>"number"==typeof data||data instanceof Number,isBigInt=data=>"bigint"==typeof data||data instanceof BigInt,isDate=data=>!!data&&data instanceof Date,isString=data=>"string"==typeof data||data instanceof String,isArray=data=>Array.isArray(data),isObject=data=>data instanceof Object&&null!==data;let componentId=1;const generateNextId=()=>componentId++;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ExpandableObject(_ref){let{field,value,data,lastElement,openBracket,closeBracket,level,style,shouldExpandNode}=_ref;const shouldExpandNodeCalledRef=react.useRef(!1),[expanded,toggleExpanded,setExpanded]=function useBool(initialValueCreator){const[value,setValue]=(0,react.useState)(initialValueCreator());return[value,()=>setValue((currentValue=>!currentValue)),setValue]}((()=>shouldExpandNode(level,value,field)));react.useEffect((()=>{shouldExpandNodeCalledRef.current?setExpanded(shouldExpandNode(level,value,field)):shouldExpandNodeCalledRef.current=!0}),[shouldExpandNode]);const expanderIconStyle=expanded?style.collapseIcon:style.expandIcon,ariaLabel=expanded?"collapse JSON":"expand JSON",contentsId=function useComponentId(){const componentId=(0,react.useRef)();return void 0===componentId.current&&(componentId.current=`:jsnvw:${generateNextId()}:`),componentId.current}(),childLevel=level+1,lastIndex=data.length-1,onKeyDown=e=>{" "===e.key&&toggleExpanded()};return(0,jsx_runtime.jsxs)("div",{className:style.basicChildStyle,role:"list",children:[(0,jsx_runtime.jsx)("span",{className:expanderIconStyle,onClick:toggleExpanded,onKeyDown,role:"button",tabIndex:0,"aria-label":ariaLabel,"aria-expanded":expanded,"aria-controls":expanded?contentsId:void 0}),field&&(0,jsx_runtime.jsxs)("span",{className:style.label,children:[field,":"]}),(0,jsx_runtime.jsx)("span",{className:style.punctuation,children:openBracket}),expanded?(0,jsx_runtime.jsx)("div",{id:contentsId,children:data.map(((dataElement,index)=>(0,jsx_runtime.jsx)(DataRender,{field:dataElement[0],value:dataElement[1],style,lastElement:index===lastIndex,level:childLevel,shouldExpandNode},dataElement[0]||index)))}):(0,jsx_runtime.jsx)("span",{className:style.collapsedContent,onClick:toggleExpanded,onKeyDown,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":ariaLabel,"aria-expanded":expanded}),(0,jsx_runtime.jsx)("span",{className:style.punctuation,children:closeBracket}),!lastElement&&(0,jsx_runtime.jsx)("span",{className:style.punctuation,children:","})]})}function JsonObject(_ref2){let{field,value,style,lastElement,shouldExpandNode,level}=_ref2;return ExpandableObject({field,value,lastElement:lastElement||!1,level,openBracket:"{",closeBracket:"}",style,shouldExpandNode,data:Object.keys(value).map((key=>[key,value[key]]))})}function JsonArray(_ref3){let{field,value,style,lastElement,level,shouldExpandNode}=_ref3;return ExpandableObject({field,value,lastElement:lastElement||!1,level,openBracket:"[",closeBracket:"]",style,shouldExpandNode,data:value.map((element=>[void 0,element]))})}function JsonPrimitiveValue(_ref4){let{field,value,style,lastElement}=_ref4,stringValue=value,valueStyle=style.otherValue;return null===value?(stringValue="null",valueStyle=style.nullValue):void 0===value?(stringValue="undefined",valueStyle=style.undefinedValue):isString(value)?(stringValue=style.noQuotesForStringValues?value:`"${value}"`,valueStyle=style.stringValue):isBoolean(value)?(stringValue=value?"true":"false",valueStyle=style.booleanValue):isNumber(value)?(stringValue=value.toString(),valueStyle=style.numberValue):isBigInt(value)?(stringValue=`${value.toString()}n`,valueStyle=style.numberValue):stringValue=isDate(value)?value.toISOString():value.toString(),""===field&&(field='""'),(0,jsx_runtime.jsxs)("div",{className:style.basicChildStyle,role:"listitem",children:[field&&(0,jsx_runtime.jsxs)("span",{className:style.label,children:[field,":"]}),(0,jsx_runtime.jsx)("span",{className:valueStyle,children:stringValue}),!lastElement&&(0,jsx_runtime.jsx)("span",{className:style.punctuation,children:","})]})}function DataRender(props){const value=props.value;return isArray(value)?(0,jsx_runtime.jsx)(JsonArray,{...props}):isObject(value)&&!isDate(value)?(0,jsx_runtime.jsx)(JsonObject,{...props}):(0,jsx_runtime.jsx)(JsonPrimitiveValue,{...props})}ExpandableObject.displayName="ExpandableObject",JsonPrimitiveValue.displayName="JsonPrimitiveValue",DataRender.displayName="DataRender";try{DataRenderer.displayName="DataRenderer",DataRenderer.__docgenInfo={description:"",displayName:"DataRenderer",props:{field:{defaultValue:null,description:"",name:"field",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},lastElement:{defaultValue:null,description:"",name:"lastElement",required:!0,type:{name:"boolean"}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!0,type:{name:"StyleProps"}},shouldExpandNode:{defaultValue:null,description:"",name:"shouldExpandNode",required:!0,type:{name:"(level: number, value: any, field?: string | undefined) => boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/DataRenderer.tsx#DataRenderer"]={docgenInfo:DataRenderer.__docgenInfo,name:"DataRenderer",path:"src/DataRenderer.tsx#DataRenderer"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./src/styles.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const src_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0,defaultStyles={container:src_styles_module["container-light"],basicChildStyle:src_styles_module["basic-element-style"],label:src_styles_module["label-light"],nullValue:src_styles_module["value-null-light"],undefinedValue:src_styles_module["value-undefined-light"],stringValue:src_styles_module["value-string-light"],booleanValue:src_styles_module["value-boolean-light"],numberValue:src_styles_module["value-number-light"],otherValue:src_styles_module["value-other-light"],punctuation:src_styles_module["punctuation-light"],collapseIcon:src_styles_module["collapse-icon-light"],expandIcon:src_styles_module["expand-icon-light"],collapsedContent:src_styles_module["collapsed-content-light"],noQuotesForStringValues:!1},darkStyles={container:src_styles_module["container-dark"],basicChildStyle:src_styles_module["basic-element-style"],label:src_styles_module["label-dark"],nullValue:src_styles_module["value-null-dark"],undefinedValue:src_styles_module["value-undefined-dark"],stringValue:src_styles_module["value-string-dark"],booleanValue:src_styles_module["value-boolean-dark"],numberValue:src_styles_module["value-number-dark"],otherValue:src_styles_module["value-other-dark"],punctuation:src_styles_module["punctuation-dark"],collapseIcon:src_styles_module["collapse-icon-dark"],expandIcon:src_styles_module["expand-icon-dark"],collapsedContent:src_styles_module["collapsed-content-dark"],noQuotesForStringValues:!1},allExpanded=()=>!0,collapseAllNested=level=>level<1,JsonView=_ref=>{let{data,style=defaultStyles,shouldExpandNode=allExpanded}=_ref;return(0,jsx_runtime.jsx)("div",{className:style.container,children:(0,jsx_runtime.jsx)(DataRender,{value:data,style,lastElement:!0,level:0,shouldExpandNode})})};JsonView.displayName="JsonView";try{collapseAllNested.displayName="collapseAllNested",collapseAllNested.__docgenInfo={description:"",displayName:"collapseAllNested",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#collapseAllNested"]={docgenInfo:collapseAllNested.__docgenInfo,name:"collapseAllNested",path:"src/index.tsx#collapseAllNested"})}catch(__react_docgen_typescript_loader_error){}try{JsonView.displayName="JsonView",JsonView.__docgenInfo={description:"",displayName:"JsonView",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Object | any[]"}},style:{defaultValue:{value:"{\n  container: styles['container-light'],\n  basicChildStyle: styles['basic-element-style'],\n  label: styles['label-light'],\n  nullValue: styles['value-null-light'],\n  undefinedValue: styles['value-undefined-light'],\n  stringValue: styles['value-string-light'],\n  booleanValue: styles['value-boolean-light'],\n  numberValue: styles['value-number-light'],\n  otherValue: styles['value-other-light'],\n  punctuation: styles['punctuation-light'],\n  collapseIcon: styles['collapse-icon-light'],\n  expandIcon: styles['expand-icon-light'],\n  collapsedContent: styles['collapsed-content-light'],\n  noQuotesForStringValues: false\n}"},description:"",name:"style",required:!1,type:{name:"StyleProps"}},shouldExpandNode:{defaultValue:{value:"() => true"},description:"",name:"shouldExpandNode",required:!1,type:{name:"((level: number, value: any, field?: string) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#JsonView"]={docgenInfo:JsonView.__docgenInfo,name:"JsonView",path:"src/index.tsx#JsonView"})}catch(__react_docgen_typescript_loader_error){}const JsonView_stories={title:"Json View",component:JsonView,argTypes:{data:{name:"data",description:"Data to render in the control. Should be an object or array."},shouldExpandNode:{name:"shouldExpandNode",source:{type:"code"},description:"Function which will be initially called for each Object and Array of the data in order to calculate should if this node be expanded. `level` startes from `0`, `field` does not have a value for the array element. Library provides two build-in implementations: `allExpanded` and `collapseAllNested`"},style:{name:"style",defaultValue:defaultStyles,description:"Collection of CSS style to use for the component. Library provides two build-in implementations: `darkStyles`, `defaultStyles`"}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{fontSize:"14px",fontFamily:'ui-monospace,Menlo,Monaco,"Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Droid Sans Mono","Courier New",monospace'},children:Story()})]},Template=args=>(0,jsx_runtime.jsx)(JsonView,{...args});Template.displayName="Template",BigInt.prototype.toJSON=function(){return this.toString()};const jsonData={"string property":"my string","":"empty name property","bigint property":BigInt("9007199254740991"),"number property":42.42,"date property":new Date(0),"boolean property":!0,"null property":null,"array propery":[1,2,3,4,5],"nested object":{first:!0,second:"another value","sub nested":{sub1:[!0,!0,!0],longText:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra at dolor eu egestas. Mauris bibendum a sem vel euismod. Proin vitae imperdiet diam. In sed gravida nisi, in convallis felis. Fusce convallis dapibus molestie. In tristique dapibus velit et rutrum. Nam vestibulum sodales tortor. Integer gravida aliquet sollicitudin. Duis at nulla varius, congue risus sit amet, gravida ipsum. Cras placerat pellentesque ipsum, a consequat magna pretium et. Duis placerat dui nisi, eget varius dui egestas eget. Etiam leo mauris, mattis et aliquam hendrerit, dapibus eu massa. Phasellus vitae vestibulum elit. Nulla congue eleifend massa at efficitur. "}}},Basic=Template.bind({});Basic.args={data:jsonData,style:defaultStyles,shouldExpandNode:allExpanded};const DarkTheme=Template.bind({});DarkTheme.args={data:jsonData,style:darkStyles};const CollapsedNestedObjects=Template.bind({});CollapsedNestedObjects.args={data:jsonData,style:defaultStyles,shouldExpandNode:collapseAllNested};const CollapsedRoot=Template.bind({});CollapsedRoot.args={data:jsonData,style:defaultStyles,shouldExpandNode:()=>!1};const RenderStringsWithoutObjects=Template.bind({});RenderStringsWithoutObjects.args={data:jsonData,style:{...defaultStyles,noQuotesForStringValues:!0}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => <JsonView {...args} />",...Basic.parameters?.docs?.source}}},DarkTheme.parameters={...DarkTheme.parameters,docs:{...DarkTheme.parameters?.docs,source:{originalSource:"args => <JsonView {...args} />",...DarkTheme.parameters?.docs?.source}}},CollapsedNestedObjects.parameters={...CollapsedNestedObjects.parameters,docs:{...CollapsedNestedObjects.parameters?.docs,source:{originalSource:"args => <JsonView {...args} />",...CollapsedNestedObjects.parameters?.docs?.source}}},CollapsedRoot.parameters={...CollapsedRoot.parameters,docs:{...CollapsedRoot.parameters?.docs,source:{originalSource:"args => <JsonView {...args} />",...CollapsedRoot.parameters?.docs?.source}}},RenderStringsWithoutObjects.parameters={...RenderStringsWithoutObjects.parameters,docs:{...RenderStringsWithoutObjects.parameters?.docs,source:{originalSource:"args => <JsonView {...args} />",...RenderStringsWithoutObjects.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","DarkTheme","CollapsedNestedObjects","CollapsedRoot","RenderStringsWithoutObjects"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./src/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* base styles */\n\n.src-styles-module__container-base--ihAfx {\n  line-height: 1.2;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n\n.src-styles-module__punctuation-base--l77uH {\n  margin-right: 5px;\n  font-weight: bold;\n}\n\n.src-styles-module__pointer--SkGg1 {\n  cursor: pointer;\n}\n\n.src-styles-module__expander-base--pL4tr {\n  font-size: 1.2em;\n  margin-right: 5px;\n  user-select: none;\n}\n\n.src-styles-module__expand-icon--PiGM3::after {\n  content: '▸';\n}\n\n.src-styles-module__collapse-icon--eaXv4::after {\n  content: '▾';\n}\n\n.src-styles-module__collapsed-content-base--Gtped {\n  margin-right: 5px;\n}\n\n.src-styles-module__collapsed-content-base--Gtped::after {\n  content: '...';\n  font-size: 0.8em;\n}\n\n.src-styles-module__container-light--qUBn_ {\n  background: #eee;\n}\n\n.src-styles-module__basic-element-style--H0nn7 {\n  margin: 0 10px;\n  padding: 0;\n}\n\n/* default light style */\n.src-styles-module__label-light--hXgvJ {\n  font-weight: 600;\n  margin-right: 5px;\n  color: #000000;\n}\n\n.src-styles-module__punctuation-light--GKguv {\n  color: #000000;\n}\n\n.src-styles-module__value-null-light--_y1HU {\n  color: #df113a;\n}\n\n.src-styles-module__value-undefined-light--OrjT1 {\n  color: #df113a;\n}\n\n.src-styles-module__value-string-light--x6Msf {\n  color: rgb(42, 63, 60);\n}\n\n.src-styles-module__value-number-light--pHQ4X {\n  color: #0b75f5;\n}\n\n.src-styles-module__value-boolean-light--LFQDw {\n  color: rgb(70, 144, 56);\n}\n\n.src-styles-module__value-other-light--gCzPL {\n  color: #43413d;\n}\n\n.src-styles-module__collapse-icon-light--yNNHT {\n  color: #000000;\n}\n\n.src-styles-module__expand-icon-light--ff3pK {\n  color: #000000;\n}\n\n.src-styles-module__collapsed-content-light--_Qkkp {\n  color: #000000;\n}\n\n/* default dark style */\n.src-styles-module__container-dark--CbwN0 {\n  background: rgb(0, 43, 54);\n}\n\n.src-styles-module__expand-icon-dark--sQBMq {\n  color: rgb(253, 246, 227);\n}\n\n.src-styles-module__collapse-icon-dark--Gpk6l {\n  color: rgb(253, 246, 227);\n}\n\n.src-styles-module__collapsed-content-dark--VMr0E {\n  color: rgb(253, 246, 227);\n}\n\n.src-styles-module__label-dark--NnA5C {\n  font-weight: bolder;\n  margin-right: 5px;\n  color: rgb(253, 246, 227);\n}\n\n.src-styles-module__punctuation-dark--OUA7J {\n  color: rgb(253, 246, 227);\n}\n\n.src-styles-module__value-null-dark--FhCc8 {\n  color: rgb(129, 181, 172);\n}\n\n.src-styles-module__value-undefined-dark--mVILc {\n  color: rgb(129, 181, 172);\n}\n\n.src-styles-module__value-string-dark--ubHCZ {\n  color: rgb(203, 75, 22);\n}\n\n.src-styles-module__value-number-dark--HBO8b {\n  color: rgb(211, 54, 130);\n}\n\n.src-styles-module__value-boolean-dark--ioSkn {\n  color: rgb(174, 129, 255);\n}\n\n.src-styles-module__value-other-dark--Dg4Wx {\n  color: rgb(38, 139, 210);\n}\n","",{version:3,sources:["webpack://./src/styles.module.css"],names:[],mappings:"AAAA,gBAAgB;;AAEhB;EACE,gBAAgB;EAChB,qBAAqB;EACrB,0BAA0B;EAC1B,sBAAsB;EACtB,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EAEE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EAEE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EAEE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,UAAU;AACZ;;AAEA,wBAAwB;AACxB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,cAAc;AAChB;;AAEA;EAGE,cAAc;AAChB;;AAEA;EAGE,cAAc;AAChB;;AAEA;EAEE,cAAc;AAChB;;AAEA,uBAAuB;AACvB;EACE,0BAA0B;AAE5B;;AAEA;EAGE,yBAAyB;AAC3B;;AAEA;EAGE,yBAAyB;AAC3B;;AAEA;EAEE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EAEE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B",sourcesContent:["/* base styles */\n\n.container-base {\n  line-height: 1.2;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n\n.punctuation-base {\n  margin-right: 5px;\n  font-weight: bold;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.expander-base {\n  composes: pointer;\n  font-size: 1.2em;\n  margin-right: 5px;\n  user-select: none;\n}\n\n.expand-icon::after {\n  content: '▸';\n}\n\n.collapse-icon::after {\n  content: '▾';\n}\n\n.collapsed-content-base {\n  composes: pointer;\n  margin-right: 5px;\n}\n\n.collapsed-content-base::after {\n  content: '...';\n  font-size: 0.8em;\n}\n\n.container-light {\n  composes: container-base;\n  background: #eee;\n}\n\n.basic-element-style {\n  margin: 0 10px;\n  padding: 0;\n}\n\n/* default light style */\n.label-light {\n  font-weight: 600;\n  margin-right: 5px;\n  color: #000000;\n}\n\n.punctuation-light {\n  composes: punctuation-base;\n  color: #000000;\n}\n\n.value-null-light {\n  color: #df113a;\n}\n\n.value-undefined-light {\n  color: #df113a;\n}\n\n.value-string-light {\n  color: rgb(42, 63, 60);\n}\n\n.value-number-light {\n  color: #0b75f5;\n}\n\n.value-boolean-light {\n  color: rgb(70, 144, 56);\n}\n\n.value-other-light {\n  color: #43413d;\n}\n\n.collapse-icon-light {\n  composes: expander-base;\n  composes: collapse-icon;\n  color: #000000;\n}\n\n.expand-icon-light {\n  composes: expander-base;\n  composes: expand-icon;\n  color: #000000;\n}\n\n.collapsed-content-light {\n  composes: collapsed-content-base;\n  color: #000000;\n}\n\n/* default dark style */\n.container-dark {\n  background: rgb(0, 43, 54);\n  composes: container-base;\n}\n\n.expand-icon-dark {\n  composes: expander-base;\n  composes: expand-icon;\n  color: rgb(253, 246, 227);\n}\n\n.collapse-icon-dark {\n  composes: expander-base;\n  composes: collapse-icon;\n  color: rgb(253, 246, 227);\n}\n\n.collapsed-content-dark {\n  composes: collapsed-content-base;\n  color: rgb(253, 246, 227);\n}\n\n.label-dark {\n  font-weight: bolder;\n  margin-right: 5px;\n  color: rgb(253, 246, 227);\n}\n\n.punctuation-dark {\n  composes: punctuation-base;\n  color: rgb(253, 246, 227);\n}\n\n.value-null-dark {\n  color: rgb(129, 181, 172);\n}\n\n.value-undefined-dark {\n  color: rgb(129, 181, 172);\n}\n\n.value-string-dark {\n  color: rgb(203, 75, 22);\n}\n\n.value-number-dark {\n  color: rgb(211, 54, 130);\n}\n\n.value-boolean-dark {\n  color: rgb(174, 129, 255);\n}\n\n.value-other-dark {\n  color: rgb(38, 139, 210);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"container-base":"src-styles-module__container-base--ihAfx","punctuation-base":"src-styles-module__punctuation-base--l77uH",pointer:"src-styles-module__pointer--SkGg1","expander-base":"src-styles-module__expander-base--pL4tr src-styles-module__pointer--SkGg1","expand-icon":"src-styles-module__expand-icon--PiGM3","collapse-icon":"src-styles-module__collapse-icon--eaXv4","collapsed-content-base":"src-styles-module__collapsed-content-base--Gtped src-styles-module__pointer--SkGg1","container-light":"src-styles-module__container-light--qUBn_ src-styles-module__container-base--ihAfx","basic-element-style":"src-styles-module__basic-element-style--H0nn7","label-light":"src-styles-module__label-light--hXgvJ","punctuation-light":"src-styles-module__punctuation-light--GKguv src-styles-module__punctuation-base--l77uH","value-null-light":"src-styles-module__value-null-light--_y1HU","value-undefined-light":"src-styles-module__value-undefined-light--OrjT1","value-string-light":"src-styles-module__value-string-light--x6Msf","value-number-light":"src-styles-module__value-number-light--pHQ4X","value-boolean-light":"src-styles-module__value-boolean-light--LFQDw","value-other-light":"src-styles-module__value-other-light--gCzPL","collapse-icon-light":"src-styles-module__collapse-icon-light--yNNHT src-styles-module__expander-base--pL4tr src-styles-module__pointer--SkGg1 src-styles-module__collapse-icon--eaXv4","expand-icon-light":"src-styles-module__expand-icon-light--ff3pK src-styles-module__expander-base--pL4tr src-styles-module__pointer--SkGg1 src-styles-module__expand-icon--PiGM3","collapsed-content-light":"src-styles-module__collapsed-content-light--_Qkkp src-styles-module__collapsed-content-base--Gtped src-styles-module__pointer--SkGg1","container-dark":"src-styles-module__container-dark--CbwN0 src-styles-module__container-base--ihAfx","expand-icon-dark":"src-styles-module__expand-icon-dark--sQBMq src-styles-module__expander-base--pL4tr src-styles-module__pointer--SkGg1 src-styles-module__expand-icon--PiGM3","collapse-icon-dark":"src-styles-module__collapse-icon-dark--Gpk6l src-styles-module__expander-base--pL4tr src-styles-module__pointer--SkGg1 src-styles-module__collapse-icon--eaXv4","collapsed-content-dark":"src-styles-module__collapsed-content-dark--VMr0E src-styles-module__collapsed-content-base--Gtped src-styles-module__pointer--SkGg1","label-dark":"src-styles-module__label-dark--NnA5C","punctuation-dark":"src-styles-module__punctuation-dark--OUA7J src-styles-module__punctuation-base--l77uH","value-null-dark":"src-styles-module__value-null-dark--FhCc8","value-undefined-dark":"src-styles-module__value-undefined-dark--mVILc","value-string-dark":"src-styles-module__value-string-dark--ubHCZ","value-number-dark":"src-styles-module__value-number-dark--HBO8b","value-boolean-dark":"src-styles-module__value-boolean-dark--ioSkn","value-other-dark":"src-styles-module__value-other-dark--Dg4Wx"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);