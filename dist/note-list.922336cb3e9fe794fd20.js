(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1139:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),s=n(1130);function c(){return o.a.createElement("svg",{className:"icon-feed",xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M2,8.667V12c5.515,0,10,4.485,10,10h3.333C15.333,14.637,9.363,8.667,2,8.667z M2,2v3.333 c9.19,0,16.667,7.477,16.667,16.667H22C22,10.955,13.045,2,2,2z M4.5,17C3.118,17,2,18.12,2,19.5S3.118,22,4.5,22S7,20.88,7,19.5 S5.882,17,4.5,17z"}))}var l,u,d=n(8),p=n.n(d),f=n(2),m=n(11),h=n(14),y=n(15),g=n(126),v=new Map,b=(l=function(e){return e.data.modificationDate},u=g.a,function(e){var t=v.get(e.id),n=l(e);if(void 0===t||n!==t.key){var r={key:n,value:u(e)};v.set(e.id,r),t=r}return t.value}),w=n(804),N=n.n(w),E=n(662),S=n(82),k=n(580),x=function(e,t){return e.reduce((function(e,t){var n=t.filter,r=t.replacer,o="string"==typeof n&&Object(S.d)(n),a=o&&o.length>0?new RegExp(Object(f.escapeRegExp)(o),"g"):n;return N()(e,a,r)}),t).map((function(e,t){return e&&"string"!=typeof e?o.a.cloneElement(e,{key:t}):e}))},O={filter:k.b,replacer:function(e){var t=/x/i.test(e);return o.a.createElement(E.a,{checked:t})}},j=function(e){return{filter:e,replacer:function(e){if(e.length)return o.a.createElement("span",{className:"search-match"},e)}}};function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?q(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=h.a.actionCreators,L=A.search,M=A.setSearchFocus,z=y.tracks.recordEvent,F=function(e){function t(){var e,n;T(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return I(q(n=P(this,(e=_(t)).call.apply(e,[this].concat(o)))),"updateSearch",(function(e){var t=n.props,r=t.query,o=t.onSearch,a=r.trim().split(" ");a.splice(-1,1,e);var i=a.join(" ");o(i+=" ")})),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this,t=this.props.filteredTags;return o.a.createElement(r.Fragment,null,t.length>0&&o.a.createElement("div",{className:"tag-suggestions"},o.a.createElement("div",{className:"note-list-header"},"Search by Tag"),o.a.createElement("ul",{className:"tag-suggestions-list"},t.map((function(t){return o.a.createElement("li",{key:t.id,id:t.id,className:"tag-suggestion-row",onClick:function(){return e.updateSearch("tag:".concat(t.data.name))}},o.a.createElement("div",{className:"tag-suggestion",title:t.data.name},"tag:",t.data.name))})))))}}])&&C(n.prototype,a),i&&C(n,i),t}(r.Component);I(F,"displayName","TagSuggestions"),I(F,"propTypes",{filteredTags:i.a.array.isRequired,onSearch:i.a.func.isRequired,query:i.a.string.isRequired});var B=null,H=null,U=[],K=function(e,t){return B===e&&H===t?U:(B=e,H=t,U=function(e,t){return t?e.filter((function(e){var n=t.trim().split(" "),r=n[n.length-1],o="tag:"+e.data.name;return["t","ta","tag","tag:"].includes(r)&&(o=e.data.name),-1!==o.search(new RegExp("(tag:)?"+r,"i"))&&!n.includes(o)})).slice(0,5):e}(e,t))},J=Object(m.b)((function(e){var t=e.appState;return{filteredTags:K(t.tags,t.filter),query:t.filter}}),(function(e){return{onSearch:function(t){e(L({filter:t})),z("list_notes_searched"),e(M({searchFocus:!0}))}}}))(F);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==W(t)&&"function"!=typeof t?Y(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"NoteList",(function(){return se})),s.a.displayName="AutoSizer",s.b.displayName="List";var ne={comfy:1,condensed:0,expanded:4};function re(e,t){var n=re.canvas||(re.canvas=document.createElement("canvas"));n.width=t;var r=n.getContext("2d");return r.font="16px arial",r.measureText(e).width}var oe,ae=new Map,ie=(oe=function(e,t,n){if("condensed"===t)return 42;var r=Math.ceil(re(n,e-24)/(e-24));return 42+21*Math.min(ne[t],r)},function(e,t){var n=t.noteDisplay,r=t.tagResultsFound,o=t.width;return function(t){var a=t.index,i=e[a];switch(i){case"notes-header":return 28;case"tag-suggestions":return 28+40*r;case"no-notes":return 200}var s=b(i).preview,c=i.id,l=ae.get(c);if(void 0!==l){var u=te(l,4),d=u[0],p=u[1],f=u[2],m=u[3];if(d===o&&p===n&&f===s)return m}var h=oe(o,n,s);return ae.set(c,[o,n,s,h]),h}}),se=function(e){function t(){var e,n;X(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return $(Y(n=G(this,(e=Q(t)).call.apply(e,[this].concat(a)))),"list",Object(r.createRef)()),$(Y(n),"handleShortcut",(function(e){var t=e.ctrlKey,r=e.key,o=e.metaKey,a=e.shiftKey,i=t||o;return i&&a&&("ArrowUp"===r||"k"===r)?(n.props.onSelectNote(n.props.nextNote.id),e.stopPropagation(),e.preventDefault(),!1):!i||!a||"ArrowDown"!==r&&"j"!==r||(n.props.onSelectNote(n.props.prevNote.id),e.stopPropagation(),e.preventDefault(),!1)})),$(Y(n),"toggleShortcuts",(function(e){e?window.addEventListener("keydown",n.handleShortcut,!0):window.removeEventListener("keydown",n.handleShortcut,!0)})),$(Y(n),"onPinNote",(function(e){return n.props.onPinNote(e,!e.data.systemTags.includes("pinned"))})),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this;this.recomputeHeights=Object(f.debounce)((function(){return e.list.current&&e.list.current.recomputeRowHeights()}),70,{maxWait:1e3}),this.toggleShortcuts(!0),window.addEventListener("resize",this.recomputeHeights)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.closeNote,r=t.filter,o=t.notes,a=t.onSelectNote,i=t.selectedNoteId;e.filter===this.props.filter&&e.noteDisplay===this.props.noteDisplay&&e.notes===o&&e.selectedNoteContent===this.props.selectedNoteContent||this.recomputeHeights(),i!==e.selectedNoteId&&a(i),r!==e.filter&&(o.some((function(e){return e.id===i}))||n())}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1),window.removeEventListener("resize",this.recomputeHeights)}},{key:"render",value:function(){var e=this,t=this.props,n=t.filter,a=t.hasLoaded,i=t.selectedNoteId,l=t.onNoteOpened,u=t.onSelectNote,d=t.onEmptyTrash,m=t.noteDisplay,h=t.showTrash,y=t.tagResultsFound,g=t.notes,v=t.isSmallScreen,w=p()("note-list-items",m),N=function(e,t){var n=t.filter,r=t.noteDisplay,a=t.selectedNoteId,i=t.onNoteOpened,s=t.onSelectNote,l=t.onPinNote,u=t.isSmallScreen;return function(t){var d=t.index,m=t.rowIndex,h=t.key,y=t.style,g=e[void 0===d?m:d];switch(g){case"notes-header":return o.a.createElement("div",{key:h,style:y,className:"note-list-header"},"Notes");case"tag-suggestions":return o.a.createElement("div",{key:h,style:y},o.a.createElement(J,null));case"no-notes":return o.a.createElement("div",{key:h,style:y,className:"note-list is-empty"},o.a.createElement("span",{className:"note-list-placeholder"},"No Notes"))}var v=b(g),w=v.title,N=v.preview,E=!Object(f.isEmpty)(g.data.publishURL),S=p()("note-list-item",{"note-list-item-selected":!u&&a===g.id,"note-list-item-pinned":g.data.systemTags.includes("pinned"),"published-note":E}),k=[O,j(n)];return o.a.createElement("div",{key:h,style:y,className:S},o.a.createElement("div",{className:"note-list-item-pinner",tabIndex:0,onClick:l.bind(null,g)}),o.a.createElement("div",{className:"note-list-item-text theme-color-border",tabIndex:0,onClick:function(){s(g.id),i()}},o.a.createElement("div",{className:"note-list-item-title"},o.a.createElement("span",null,x(k,w)),E&&o.a.createElement("div",{className:"note-list-item-published-icon"},o.a.createElement(c,null))),"condensed"!==r&&N.trim()&&o.a.createElement("div",{className:"note-list-item-excerpt"},x(k,N))))}}(g,{filter:n,noteDisplay:m,onNoteOpened:l,onSelectNote:u,onPinNote:this.onPinNote,selectedNoteId:i,isSmallScreen:v}),E=0===g.length,S=o.a.createElement("div",{className:"note-list-empty-trash theme-color-border"},o.a.createElement("button",{type:"button",className:"button button-borderless button-danger",onClick:d},"Empty Trash"));return o.a.createElement("div",{className:p()("note-list",{"is-empty":E})},E?o.a.createElement("span",{className:"note-list-placeholder"},a?"No Notes":"Loading Notes"):o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:w},o.a.createElement(s.a,null,(function(t){var r=t.height,a=t.width;return o.a.createElement(s.b,{ref:e.list,estimatedRowSize:42+21*ne[m],height:r,noteDisplay:m,notes:g,rowCount:g.length,rowHeight:ie(g,{filter:n,noteDisplay:m,tagResultsFound:y,width:a}),rowRenderer:N,width:a})}))),!!h&&S))}}])&&V(n.prototype,a),i&&V(n,i),t}(r.Component);$(se,"displayName","NoteList"),$(se,"propTypes",{closeNote:i.a.func.isRequired,filter:i.a.string.isRequired,tagResultsFound:i.a.number.isRequired,isSmallScreen:i.a.bool.isRequired,notes:i.a.array.isRequired,selectedNoteId:i.a.any,onNoteOpened:i.a.func.isRequired,onSelectNote:i.a.func.isRequired,onPinNote:i.a.func.isRequired,noteDisplay:i.a.string.isRequired,onEmptyTrash:i.a.any.isRequired,showTrash:i.a.bool});var ce=h.a.actionCreators,le=ce.closeNote,ue=ce.emptyTrash,de=ce.loadAndSelectNote,pe=ce.pinNote,fe=y.tracks.recordEvent;se.propTypes={hasLoaded:i.a.bool.isRequired,nextNote:i.a.object,prevNote:i.a.object,selectedNoteContent:i.a.string};t.default=Object(m.b)((function(e){var t=e.appState,n=e.ui.filteredNotes,r=e.settings.noteDisplay,o=K(t.tags,t.filter).length,a=Math.max(t.previousIndex,0),i=t.note?t.note:n[a],s=Object(f.get)(i,"id",t.selectedNoteId),c=n.findIndex((function(e){return e.id===s})),l=Math.max(0,c-1),u=Math.min(n.length-1,c+1),d=n[l],p=n[u],m=function(e,t,n){return 0===t.length||0===n?e:["tag-suggestions","notes-header"].concat(ee(e.length>0?e:["no-notes"]))}(n,t.filter,o),h=i&&b(i).preview;return{filter:t.filter,hasLoaded:null!==t.notes,nextNote:d,noteDisplay:r,notes:m,prevNote:p,selectedNotePreview:h,selectedNoteContent:Object(f.get)(i,"data.content"),selectedNoteId:s,showTrash:t.showTrash,tagResultsFound:o}}),(function(e,t){var n=t.noteBucket;return{closeNote:function(){return e(le())},onEmptyTrash:function(){return e(ue({noteBucket:n}))},onSelectNote:function(t){t&&(e(de({noteBucket:n,noteId:t})),fe("list_note_opened"))},onPinNote:function(t,r){return e(pe({noteBucket:n,note:t,pin:r}))}}}))(se)},580:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a}));var r={taskNode:".task-list-item",markdownRoot:"[data-markdown-root]"},o=/^(\s*)(-[ \t]+\[[xX\s]?\])/gm,a=/^(\s*)(-[ \t]+\[[xX\s]?\])(.+)/gm},662:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a);function s(){return o.a.createElement("svg",{className:"icon-checkmark",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M11,17.768l-4.884-4.884l1.768-1.768L11,14.232l8.658-8.658C17.823,3.391,15.075,2,12,2C6.477,2,2,6.477,2,12 s4.477,10,10,10s10-4.477,10-10c0-1.528-0.353-2.971-0.966-4.266L11,17.768z"}))}function c(){return o.a.createElement("svg",{className:"icon-circle",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},o.a.createElement("g",{transform:"translate(2 2)"},o.a.createElement("path",{d:"m10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5 8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z"})))}var l=function(e){var t=e.checked,n=void 0!==t&&t,r=e.onChange;return o.a.createElement("span",{className:"checkbox",role:"checkbox","aria-checked":n,onClick:r,tabIndex:"0"},o.a.createElement("span",{className:"checkbox__icon","aria-hidden":"true"},n?o.a.createElement(s,null):o.a.createElement(c,null)))};l.propTypes={checked:i.a.bool,onChange:i.a.func};t.a=l}}]);