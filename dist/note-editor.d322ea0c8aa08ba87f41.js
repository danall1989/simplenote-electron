(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1137:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),i=n.n(a),s=n(11),c=n(14),u=n(1131),l=n(83),f=n(129),d=n(75),p=n.n(d),h=function(e){var t=e.openShareDialog;return r.a.createElement("div",{className:"tag-email-tooltip"},r.a.createElement("div",{className:"tag-email-tooltip__arrow"}),r.a.createElement("div",{className:"tag-email-tooltip__inside"},"Collaboration has moved. Press the Share icon in the toolbar to access the ",r.a.createElement("a",{href:"#",onClick:t},"Collaborate screen"),"."))};h.propTypes={openShareDialog:i.a.func.isRequired};var g=Object(s.b)(null,(function(e){return{openShareDialog:function(){return e(c.a.actionCreators.showDialog({dialog:p.a.SHARE}))}}}))(h),m=n(8),v=n.n(m),y=n(2),b=function(e){var t=e.onSelect,n=void 0===t?y.noop:t,o=e.selected,a=e.tag;return r.a.createElement("div",{className:v()("tag-chip",{selected:o}),"data-tag-name":a,onClick:n},a)};b.displayName="TagChip",b.propTypes={onSelect:i.a.func,selected:i.a.bool,tag:i.a.string.isRequired};var S=b;function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?T(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){return function(t){return t.trim().toLowerCase().startsWith(e.trim().toLowerCase())}},j=function(e){function t(){var e,n;E(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return x(T(n=O(this,(e=k(t)).call.apply(e,[this].concat(r)))),"state",{isComposing:!1}),x(T(n),"completeSuggestion",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.identity,t=n.props,o=t.onChange,r=t.tagNames,a=t.value;if(a.length){var i=r.find(N(a));i&&o(i,(function(){e(i),n.focusInput()}))}})),x(T(n),"focusInput",(function(){if(n.inputField){var e=n.inputField;e.focus();var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var o=window.getSelection();o.removeAllRanges(),o.addRange(t)}})),x(T(n),"hasFocus",(function(){return document.activeElement===n.inputField})),x(T(n),"interceptKeys",(function(e){var t;return Object(y.invoke)((x(t={},13,n.submitTag),x(t,188,n.submitTag),x(t,9,n.interceptTabPress),x(t,39,n.interceptRightArrow),t),e.keyCode,e)})),x(T(n),"interceptRightArrow",(function(e){var t=n.props.value;window.getSelection().getRangeAt(0).endOffset===t.length&&(n.completeSuggestion(),e.preventDefault(),e.stopPropagation())})),x(T(n),"interceptTabPress",(function(e){n.completeSuggestion(n.submitTag),e.preventDefault(),e.stopPropagation()})),x(T(n),"onInputMutation",(function(e){e.forEach((function(e){var t=Object(y.get)(e,"target.data","");"childList"===e.type&&e.addedNodes.length&&(t=Object(y.get)(e,"target.innerText","")),n.onInput(t)}))})),x(T(n),"onInput",(function(e){n.state.isComposing||n.props.onChange(e.trim(),n.focusInput)})),x(T(n),"onCompositionEnd",(function(e){var t=e.target.textContent;n.setState({isComposing:!1},(function(){return n.onInput(t)}))})),x(T(n),"removePastedFormatting",(function(e){var t;Object(y.get)(e,"clipboardData.getData")?t=e.clipboardData.getData("text/plain"):Object(y.get)(window,"clipboardData.getData")&&(t=window.clipboardData.getData("Text")),n.onInput(t),e.preventDefault(),e.stopPropagation()})),x(T(n),"storeInput",(function(e){n.inputField=e,n.props.inputRef(e),Object(y.invoke)(T(n),"inputField.addEventListener","paste",n.removePastedFormatting,!1)})),x(T(n),"submitTag",(function(e){var t=n.props,o=t.onSelect,r=t.value;r.trim().length&&o(r.trim()),Object(y.invoke)(e,"preventDefault"),Object(y.invoke)(e,"stopPropagation")})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.props.storeFocusInput(this.focusInput),this.props.storeHasFocus(this.hasFocus),this.inputObserver=new MutationObserver(this.onInputMutation),this.inputObserver.observe(this.inputField,{characterData:!0,childList:!0,subtree:!0})}},{key:"componentWillUnmount",value:function(){Object(y.invoke)(this,"inputField.removeEventListener","paste",this.removePastedFormatting,!1),this.inputObserver.disconnect()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,o=t.tagNames,a=n.length&&o.find(N(n)),i=""===n&&!this.state.isComposing;return r.a.createElement("div",{className:"tag-input",onClick:this.focusInput},i&&r.a.createElement("span",{"aria-hidden":!0,className:"tag-input__placeholder"},"Add a tag…"),r.a.createElement("div",{"aria-label":"Add a tag…",ref:this.storeInput,className:"tag-input__entry",contentEditable:"true",onCompositionStart:function(){return e.setState({isComposing:!0})},onCompositionEnd:this.onCompositionEnd,onKeyDown:this.interceptKeys,spellCheck:!1,suppressContentEditableWarning:!0},n),r.a.createElement("div",{className:"tag-input__suggestion",disabled:!0,type:"text"},a?a.substring(n.length):""))}}])&&C(n.prototype,o),a&&C(n,a),t}(o.Component);x(j,"displayName","TagInput"),x(j,"propTypes",{inputRef:i.a.func,onChange:i.a.func,onSelect:i.a.func,storeFocusInput:i.a.func,storeHasFocus:i.a.func,tagNames:i.a.arrayOf(i.a.string).isRequired,value:i.a.string.isRequired}),x(j,"defaultProps",{inputRef:y.identity,onChange:y.identity,onSelect:y.identity,storeFocusInput:y.noop,storeHasFocus:y.noop});var R=j,P=n(15),_=n.n(P);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?K(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e){function t(){var e,n;D(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return L(K(n=M(this,(e=A(t)).call.apply(e,[this].concat(r)))),"state",{selectedTag:"",tagInput:""}),L(K(n),"addTag",(function(e){var t=n.props,o=t.allTags,r=t.tags,a=e.trim().replace(/\s+/g,",").split(",");a.some(l.a)&&n.showEmailTooltip();var i=Object(y.union)(r,Object(y.intersectionBy)(o,a,(function(e){return e.toLocaleLowerCase()})),Object(y.differenceBy)(a,o,(function(e){return e.toLocaleLowerCase()})));n.updateTags(i),n.storeTagInput(""),Object(y.invoke)(K(n),"tagInput.focus"),_.a.tracks.recordEvent("editor_tag_added")})),L(K(n),"hasSelection",(function(){return n.state.selectedTag&&!!n.state.selectedTag.length})),L(K(n),"deleteTag",(function(e){var t=n.props.tags,o=n.state.selectedTag;n.updateTags(Object(y.differenceBy)(t,[e],(function(e){return e.toLocaleLowerCase()}))),o===e&&n.setState({selectedTag:""},(function(){Object(y.invoke)(K(n),"tagInput.focus")})),_.a.tracks.recordEvent("editor_tag_removed")})),L(K(n),"deleteSelection",(function(){n.hasSelection()&&n.deleteTag(n.state.selectedTag)})),L(K(n),"hideEmailTooltip",(function(){return n.setState({showEmailTooltip:!1})})),L(K(n),"hasFocus",(function(){return n.inputHasFocus&&n.inputHasFocus()})),L(K(n),"focusTagField",(function(){return n.focusInput&&n.focusInput()})),L(K(n),"interceptKeys",(function(e){8===e.which&&(n.hasSelection()&&n.deleteSelection(),""===n.state.tagInput&&(n.selectLastTag(),e.preventDefault()))})),L(K(n),"updateTags",(function(e){return n.props.updateNoteTags({note:n.props.note,tags:e})})),L(K(n),"selectLastTag",(function(){return n.setState({selectedTag:n.props.tags.slice(-1).shift()})})),L(K(n),"selectTag",(function(e){var t=e.target.dataset.tagName;e.preventDefault(),e.stopPropagation(),n.deleteTag(t)})),L(K(n),"showEmailTooltip",(function(){n.setState({showEmailTooltip:!0}),setTimeout((function(){return n.setState({showEmailTooltip:!1})}),5e3)})),L(K(n),"onKeyDown",(function(e){return n.state.showEmailTooltip&&n.hideEmailTooltip(),n.interceptKeys(e)})),L(K(n),"storeFocusInput",(function(e){return n.focusInput=e})),L(K(n),"storeHasFocus",(function(e){return n.inputHasFocus=e})),L(K(n),"storeHiddenTag",(function(e){return n.hiddenTag=e})),L(K(n),"storeInputRef",(function(e){return n.tagInput=e})),L(K(n),"storeTagInput",(function(e,t){return n.setState({tagInput:e},t)})),L(K(n),"unselect",(function(e){n.state.selectedTag&&n.hiddenTag!==e.relatedTarget&&n.setState({selectedTag:""})})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.props.storeFocusTagField(this.focusTagField),this.props.storeHasFocus(this.hasFocus),document.addEventListener("click",this.unselect,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.unselect,!0)}},{key:"componentDidUpdate",value:function(){this.hasSelection()&&this.hiddenTag.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.allTags,o=t.tags,a=this.state,i=a.selectedTag,s=a.showEmailTooltip,c=a.tagInput;return r.a.createElement("div",{className:"tag-field"},r.a.createElement("div",{className:v()("tag-editor",{"has-selection":this.hasSelection()}),tabIndex:"-1",onKeyDown:this.onKeyDown},r.a.createElement("input",{className:"hidden-tag",tabIndex:"-1",ref:this.storeHiddenTag}),o.filter(Object(y.negate)(l.a)).map((function(t){return r.a.createElement(S,{key:t,tag:t,selected:t===i,onSelect:e.selectTag})})),r.a.createElement(R,{allTags:n,inputRef:this.storeInputRef,value:c,onChange:this.storeTagInput,onSelect:this.addTag,storeFocusInput:this.storeFocusInput,storeHasFocus:this.storeHasFocus,tagNames:Object(y.differenceBy)(n,o,(function(e){return e.toLocaleLowerCase()}))}),r.a.createElement(u.a,{container:this,onHide:this.hideEmailTooltip,placement:"top",rootClose:!0,shouldUpdatePosition:!0,show:s,target:this.tagInput},(function(){return r.a.createElement(g,{note:e.props.note})}))))}}])&&H(n.prototype,o),a&&H(n,a),t}(o.Component);L(B,"displayName","TagField"),L(B,"propTypes",{allTags:i.a.array.isRequired,note:i.a.object.isRequired,storeFocusTagField:i.a.func,storeHasFocus:i.a.func,tags:i.a.array.isRequired,unusedTags:i.a.arrayOf(i.a.string),updateNoteTags:i.a.func.isRequired,usedTags:i.a.arrayOf(i.a.string)}),L(B,"defaultProps",{storeFocusTagField:y.noop,storeHasFocus:y.noop,tags:[]});var W=Object(s.b)(null,{updateNoteTags:f.a})(B),U=n(52),z=n(604),X=n(898),V=n.n(X);function J(e){return e.getCurrentContent().getPlainText("\n")}function $(e){var t=e.getSelection().focusKey;return e.getCurrentContent().getBlockForKey(t)}function G(e){var t=e.getCurrentContent(),n=e.getSelection(),o=n.getStartKey(),r=e.getCurrentContent().getBlockForKey(o),a=n.getStartOffset(),i=n.getEndKey(),s=n.getEndOffset();if(o===i)return r.getText().slice(a,s);var c="";c+=r.getText().slice(a)+"\n";for(var u=e.getCurrentContent().getBlockForKey(i),l=r;(l=t.getBlockAfter(l.key))&&l.key!==i;)c+=l.getText()+"\n";return c+=u.getText().slice(0,s)}function Q(e,t){for(var n,o,r=e.getSelection().anchorKey,a=e.getSelection().focusKey,i=e.getCurrentContent().getBlocksAsArray(),s=0;s<i.length;s++)i[s].getKey()===r&&(n=s),i[s].getKey()===a&&(o=s);var c=t.getCurrentContent().getBlocksAsArray(),u=e.getSelection(),l=c.length-1,f=Math.min(n,l),d=Math.min(o,l),p=Math.min(u.getAnchorOffset(),c[f].getLength()),h=Math.min(u.getFocusOffset(),c[d].getLength());return t.getSelection().merge({anchorKey:c[f].getKey(),anchorOffset:p,focusKey:c[d].getKey(),focusOffset:h,isBackward:u.getIsBackward(),hasFocus:u.getHasFocus()})}var Y=function(e){return Object(y.includes)(["-","*","+","- [ ]","- [x]","•"],e.trim())};function Z(e){var t=e.getSelection(),n=t.getStartOffset(),o=$(e).getText(),r=Y(o)?0:n,a=z.EditorState.push(e,z.Modifier.replaceText(e.getCurrentContent(),t.isCollapsed()?t.merge({anchorOffset:r,focusOffset:r}):t,"\t"),"insert-characters");return z.EditorState.forceSelection(a,a.getSelection().merge({anchorOffset:n+1,focusOffset:n+1}))}function ee(e){var t=e.getSelection(),n=t.getStartOffset(),o=$(e).getText(),r=Y(o),a=r?0:n-1,i=r?1:n;if("\t"!==o.slice(a,i))return e;var s=z.EditorState.push(e,z.Modifier.removeRange(e.getCurrentContent(),t.merge({anchorOffset:a,focusOffset:i})),"remove-range");return z.EditorState.forceSelection(s,t.merge({anchorOffset:n-1,focusOffset:n-1}))}function te(e){var t=z.EditorState.push(e,z.Modifier.removeRange(e.getCurrentContent(),e.getSelection().merge({anchorOffset:0,focusOffset:$(e).getLength()})),"remove-range");return z.EditorState.forceSelection(t,t.getCurrentContent().getSelectionAfter())}function ne(e,t){var n=z.EditorState.push(e,z.Modifier.splitBlock(e.getCurrentContent(),e.getSelection()),"split-block"),o=z.EditorState.push(n,z.Modifier.insertText(n.getCurrentContent(),n.getCurrentContent().getSelectionAfter(),t),"insert-characters");return z.EditorState.forceSelection(o,o.getCurrentContent().getSelectionAfter())}var oe=n(82),re=n(720),ae=n.n(re),ie=function(e){var t=e.children,n=e.className;return r.a.createElement("span",{className:n},t)};ie.propTypes={children:i.a.node.isRequired,className:i.a.string.isRequired};var se=ie;function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ue=function(e){return function(t,n){var o=t.getText();e&&o&&function(e,t){for(var n,o=[];null!==(n=t.exec(e));)o.push([n.index,t.lastIndex]);return o}(o,e).forEach(function(e){return function(t){var n=ce(t,2),o=n[0],r=n[1];return e(o,r,{className:"search-match"})}}(n))}},le=function(e){return e?new ae.a(ue(e),se):null},fe=n(662),de=n(235),pe=n(899),he=n.n(pe),ge=n(900),me=n.n(ge),ve={type:"output",regex:'<input type="checkbox" disabled',replace:'<input type="checkbox" '},ye=function(e){return n.e(8).then(n.t.bind(null,1135,7)).then((function(t){var n=t.default;n.extension("enableCheckboxes",ve);var o=new n.Converter({extensions:["enableCheckboxes"]});return o.setFlavor("github"),o.setOption("simpleLineBreaks",!1),o.setOption("ghMentions",!1),o.setOption("smoothLivePreview",!0),function(e){for(var t=(new DOMParser).parseFromString(e,"text/html"),n=t.createTreeWalker(t.body,NodeFilter.SHOW_ALL,null,!1),o=[],r=[],a=function(){var e=n.currentNode;if(function(e){switch(e.nodeName.toLowerCase()){case"head":case"html":case"iframe":case"link":case"meta":case"object":case"script":case"style":return!0;default:return!1}}(e))return r.push(e),"continue";if(!function(e){var t=e.nodeName.toLowerCase();if("input"===t)return"checkbox"===e.getAttribute("type");switch(t){case"#text":case"a":case"article":case"b":case"br":case"blockquote":case"cite":case"code":case"dd":case"del":case"div":case"dt":case"em":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"hr":case"i":case"img":case"ins":case"kbd":case"li":case"ol":case"p":case"pre":case"s":case"span":case"strong":case"sub":case"sup":case"table":case"tbody":case"td":case"th":case"thead":case"tr":case"tt":case"ul":return!0;default:return!1}}(e))return o.push(e),"continue";var t=e.nodeName.toLowerCase();Object(y.filter)(e.attributes,(function(e){var n=e.name,o=e.value;return!function(e,t,n){switch(e){case"a":switch(t){case"href":return!n.toLowerCase().trim().startsWith("javascript");case"alt":case"rel":case"title":return!0;default:return!1}case"img":switch(t){case"alt":case"src":case"title":case"width":return!0;default:return!1}case"input":switch(t){case"disabled":case"checked":case"type":return!0;default:return!1}case"li":switch(t){case"class":switch(n){case"task-list-item":return!0;default:return!1}default:return!1}case"ol":switch(t){case"start":return!0;default:return!1}default:return!1}}(t,n,o)&&(("href"!==n&&"src"!==n||!me.a.isWebUri(o))&&("href"!==n||!o.startsWith("mailto:")||!he.a.validate(o.slice(7))))})).forEach((function(t){var n=t.name;return e.removeAttribute(n)}));var a="a"===t&&e.getAttribute("href");"a"!==t||"string"!=typeof a||a.startsWith("mailto:")||(e.setAttribute("target","_blank"),e.setAttribute("rel","external noopener noreferrer")),"li"===t&&"task-list-item"===e.getAttribute("class")&&e.setAttribute("style","list-style: none;")};n.nextNode();)a();return r.forEach((function(e){try{e.parentNode.removeChild(e)}catch(e){}})),o.forEach((function(e){var t,n=e.parentNode;try{for(;t=e.firstChild;)n.insertBefore(t,e);n.removeChild(e)}catch(e){}})),t.body.innerHTML}(o.makeHtml(e))}))},be=n(580),Se=function(e){var t=e.text,n=e.taskNodeIndex,o=function(e){var t={text:"",ids:[]};return t.text=e.replace(be.c,(function(e){var n=Object(de.a)(8);return t.ids.push(n),e.replace(be.c,"$1"+"- [ ] ".concat(n))})),t}(t),r=o.text,a=o.ids;return ye(r).then((function(e){var t=function(e){var t=e.html,n=e.taskNodeIndex,o=(new DOMParser).parseFromString(t,"text/html").querySelectorAll(be.a.taskNode);return Array.from(o)[n].textContent.trim()}({html:e,taskNodeIndex:n});return a.indexOf(t)}))},we=function(e){var t=/- \[[xX]\]/;return t.test(e)?e.replace(t,"- [ ]"):e.replace(/- \[\s?\]/,"- [x]")},Ee=function(e){var t=e.text,n=e.index,o=0;return t.replace(be.c,(function(e){return o++===n?we(e):e}))},Ce=function(e){var t=e.taskNode,n=e.text,o=t.ownerDocument.querySelectorAll("".concat(be.a.markdownRoot," ").concat(be.a.taskNode)),r=n.match(be.c).length!==o.length,a=Array.from(o).indexOf(t);return r?Se({text:n,taskNodeIndex:a}).then((function(e){return Ee({text:n,index:e})})):Promise.resolve(Ee({text:n,index:a}))},Oe=function(e){return new ae.a((function(t,n){for(var o,r=t.getText(),a=function(){var r=o[1],a=o[2],i=o.index+Object(y.get)(r,"length",0),s=i+a.length,c=/[xX]/.test(a),u=z.SelectionState.createEmpty(t.getKey()).merge({anchorOffset:i,focusOffset:s}),l=we(a);n(i,s,{checked:c,onChange:function(){return e(u,l)}})};null!==(o=be.c.exec(r));)a()}),fe.a)},ke=function(e,t){return Object(y.get)(e.getCurrentContent().getBlockForKey(t),"text",null)},Te=function(e,t){var n=$(e),o=n.text,r=ke(t,n.getKey());if(!(o!==r)||""===o)return!1;var a=Object(y.includes)(["backspace-character","remove-range"],e.getLastChangeType()),i=be.c.test(r)&&!o.match(be.c);return a&&i},Fe=function(e,t){var n=$(e),o=n.text,r=ke(t,n.getKey())[e.getSelection().focusOffset];if(!/[ \]]/.test(r))return z.Modifier.insertText(e.getCurrentContent(),e.getSelection()," ");var a=Object(y.get)(o.match("-"),"index",0);return z.Modifier.removeRange(e.getCurrentContent(),e.getSelection().merge({anchorOffset:a}),"backward")};function xe(e){for(var t=e.getCurrentContent(),n=e.getSelection(),o=n.getStartKey(),r=n.getEndKey(),a=t;o&&(a=Ne(o,a),o!==r);)o=t.getKeyAfter(o);var i=z.EditorState.push(e,a,"insert-characters"),s=function(e,t,n){var o=Object(y.get)(e.focusKey,"key",e.focusKey),r=function(e){return e.getBlockForKey(o).getText().length},a=r(n)-r(t),i=e.focusOffset+a;return z.SelectionState.createEmpty(o).merge({anchorOffset:i,focusOffset:i})}(n,t,a);return z.EditorState.forceSelection(i,s)}function Ne(e,t){var n=t.getBlockForKey(e).getText();be.c.lastIndex=0;var o,r=be.c.exec(n);if(r){var a=r[1],i=r[2],s=r[3].match(/^\s*/)[0].length,c=a.length,u=z.SelectionState.createEmpty(e).merge({anchorOffset:c,focusOffset:c+i.length+s});o=z.Modifier.removeRange(t,u,"backward")}else{var l=n.match(/^\s*/)[0].length,f=z.SelectionState.createEmpty(e).merge({anchorOffset:l,focusOffset:l});o=z.Modifier.insertText(t,f,"- [ ] ")}return o}var je=n(125);function Re(e){return(Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ie(e,t){return!t||"object"!==Re(t)&&"function"!=typeof t?He(e):t}function De(e){return(De=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function He(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Me(e,t){return(Me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ke=function(e){function t(){var e,n;Pe(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return Ae(He(n=Ie(this,(e=De(t)).call.apply(e,[this].concat(r)))),"ipc",Object(je.a)()),Ae(He(n),"replaceRangeWithText",(function(e,t){var o=n.state.editorState,r=z.Modifier.replaceText(o.getCurrentContent(),e,t);n.handleEditorStateChange(z.EditorState.push(o,r,"replace-text"))})),Ae(He(n),"generateDecorators",(function(e){return new V.a(Object(y.compact)([Object(oe.b)(e)&&le(Object(oe.c)(e)),Oe(n.replaceRangeWithText)]))})),Ae(He(n),"createNewEditorState",(function(e,t){var o=z.EditorState.createWithContent(z.ContentState.createFromText(e,"\n"),n.generateDecorators(t));return""===e&&""===t?z.EditorState.moveFocusToEnd(o):o})),Ae(He(n),"state",{editorState:n.createNewEditorState(n.props.content.text,n.props.filter)}),Ae(He(n),"editorKey",0),Ae(He(n),"handleEditorStateChange",(function(e){var t=n.state.editorState;if(e!==t){var o=e;if(Te(e,t)){var r=Fe(e,t);o=z.EditorState.push(e,r,"remove-range")}var a=J(o),i=J(t),s=a!==i?function(){return n.props.onChangeContent(a)}:y.noop;n.setState({editorState:o},s)}})),Ae(He(n),"reflectChangesFromReceivedContent",(function(e,t){var o=z.EditorState.push(e,z.ContentState.createFromText(t,"\n"),"replace-text");if(e.getSelection().getHasFocus()){var r=Q(e,o);o=z.EditorState.forceSelection(o,r)}n.setState({editorState:o})})),Ae(He(n),"saveEditorRef",(function(e){n.editor=e})),Ae(He(n),"focus",(function(){Object(y.invoke)(He(n),"editor.focus")})),Ae(He(n),"hasFocus",(function(){return document.activeElement===Object(y.get)(n.editor,"editor")})),Ae(He(n),"onTab",(function(e){var t=n.state.editorState;e.preventDefault(),!t.getSelection().isCollapsed()&&e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||n.handleEditorStateChange(e.shiftKey?ee(t):Z(t))})),Ae(He(n),"handleReturn",(function(){var e=n.state.editorState,t=$(e).getText(),o=t.search(/\S/),r=function(t){var n=e.getSelection(),o=n.anchorOffset,r=n.focusOffset;return o===t&&r===t};if(r(0)||r(o))return"not-handled";if(Y(t))return n.handleEditorStateChange(te(e)),"handled";var a=t.match(/^[ \t\u2000-\u200a]*[-*+\u2022]\s/);if(t.match(be.c)){var i=t.replace(be.c,"$1- [ ] ");return n.handleEditorStateChange(ne(e,i)),"handled"}return a?(n.handleEditorStateChange(ne(e,a[0])),"handled"):"not-handled"})),Ae(He(n),"onAppCommand",(function(e,t){"insertChecklist"===Object(y.get)(t,"action")&&(n.handleEditorStateChange(xe(n.state.editorState)),_.a.tracks.recordEvent("editor_checklist_inserted"))})),Ae(He(n),"copyPlainText",(function(e){var t=G(n.state.editorState);e.clipboardData.setData("text/plain",t),e.preventDefault()})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Me(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.props.storeFocusEditor(this.focus),this.props.storeHasFocus(this.hasFocus),this.ipc.on("appCommand",this.onAppCommand),this.editor.blur()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.content,o=t.filter,r=t.noteId,a=t.spellCheckEnabled,i=this.state.editorState;a!==e.spellCheckEnabled&&(this.editorKey+=1,this.forceUpdate()),r===e.noteId&&n.version===e.content.version?(o!==e.filter&&this.setState({editorState:z.EditorState.set(i,{decorator:this.generateDecorators(o)})}),n.text!==e.content.text&&n.hasRemoteUpdate&&this.reflectChangesFromReceivedContent(i,n.text)):this.setState({editorState:this.createNewEditorState(n.text,o)})}},{key:"componentWillUnmount",value:function(){this.ipc.removeListener("appCommand",this.onAppCommand)}},{key:"render",value:function(){return r.a.createElement("div",{onCopy:this.copyPlainText,onCut:this.copyPlainText,style:{height:"100%"}},r.a.createElement(z.Editor,{key:this.editorKey,ref:this.saveEditorRef,spellCheck:this.props.spellCheckEnabled,stripPastedStyles:!0,onChange:this.handleEditorStateChange,editorState:this.state.editorState,onTab:this.onTab,handleReturn:this.handleReturn}))}}])&&_e(n.prototype,o),a&&_e(n,a),t}(o.Component);Ae(Ke,"propTypes",{content:i.a.shape({text:i.a.string.isRequired,hasRemoteUpdate:i.a.bool.isRequired,version:i.a.string}),filter:i.a.string.isRequired,noteId:i.a.string,onChangeContent:i.a.func.isRequired,spellCheckEnabled:i.a.bool.isRequired,storeFocusEditor:i.a.func,storeHasFocus:i.a.func}),Ae(Ke,"defaultProps",{storeFocusEditor:y.noop,storeHasFocus:y.noop});var qe=n(233),Le=function(e,t){ye(t).then((function(t){return e.innerHTML=t,e.querySelectorAll("pre code")})).then((function(e){if(e.length)return n.e(4).then(n.t.bind(null,1136,7)).then((function(t){var n=t.default;e.forEach(n.highlightBlock)})).catch()}))};function Be(e){return(Be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function We(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ue(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ze(e,t){return!t||"object"!==Be(t)&&"function"!=typeof t?Ve(e):t}function Xe(e){return(Xe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ve(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Je(e,t){return(Je=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ge=function(e){function t(){var e,n;We(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return $e(Ve(n=ze(this,(e=Xe(t)).call.apply(e,[this].concat(r)))),"focusEditor",(function(){return n.focusContentEditor&&n.focusContentEditor()})),$e(Ve(n),"saveEditorRef",(function(e){return n.editor=e})),$e(Ve(n),"isValidNote",(function(e){return e&&e.id})),$e(Ve(n),"copyRenderedNote",(function(e){var t=n.props,o=t.previewingMarkdown,r=t.showNoteInfo,a=t.dialogs;if(!o)return!0;if(r||a.length>0)return!0;if(!document.getSelection().isCollapsed)return!0;var i=document.createDocumentFragment(),s=document.createElement("div");Le(s,n.props.note.data.content),i.appendChild(s),e.clipboardData.setData("text/plain",s.innerHTML),e.preventDefault()})),$e(Ve(n),"hasFocus",(function(){return n.editorHasFocus&&n.editorHasFocus()})),$e(Ve(n),"onPreviewClick",(function(e){for(var t=n.props,o=t.note,r=t.onChangeContent,a=t.syncNote,i=e.target;null!==i;i=i.parentNode){if("A"===i.tagName){e.preventDefault(),Object(U.a)(i.href);break}if("task-list-item"===i.className){e.preventDefault(),Ce({taskNode:i,text:o.data.content}).then((function(e){r(o,e),a(o.id)}));break}}})),$e(Ve(n),"saveNote",(function(e){var t=n.props.note;n.isValidNote(t)&&(n.props.onChangeContent(t,e),n.queueNoteSync(),_.a.tracks.recordEvent("editor_note_edited"))})),$e(Ve(n),"syncNote",(function(){var e=n.props.note;n.isValidNote(e)&&n.props.syncNote(e.id)})),$e(Ve(n),"storeEditorHasFocus",(function(e){return n.editorHasFocus=e})),$e(Ve(n),"storeFocusContentEditor",(function(e){return n.focusContentEditor=e})),$e(Ve(n),"storePreview",(function(e){return n.previewNode=e})),$e(Ve(n),"updateMarkdown",(function(){n.previewNode&&Le(n.previewNode,n.props.note.data.content)})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Je(e,t)}(t,e),n=t,(o=[{key:"componentWillMount",value:function(){this.queueNoteSync=Object(y.debounce)(this.syncNote,2e3),document.addEventListener("copy",this.copyRenderedNote,!1)}},{key:"componentDidMount",value:function(){var e=this.props.previewingMarkdown;this.props.storeFocusEditor(this.focusEditor),this.props.storeHasFocus(this.hasFocus),window.addEventListener("beforeunload",this.queueNoteSync.flush),e&&this.updateMarkdown()}},{key:"componentWillReceiveProps",value:function(e){var t=Object(y.get)(this.props,["note","id"],!1);!1!==t&&Object(y.get)(e,["note","id"])!==t&&this.queueNoteSync.flush()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.note,o=t.onNotePrinted,r=t.previewingMarkdown;t.shouldPrint&&(window.print(),o());var a=Object(y.get)(e,"note.data.content",""),i=Object(y.get)(this.props,"note.data.content","");(r&&(e.note!==n||a!==i)||!e.previewingMarkdown&&this.props.previewingMarkdown)&&this.updateMarkdown()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.queueNoteSync.flush),document.removeEventListener("copy",this.copyRenderedNote,!1)}},{key:"render",value:function(){var e=this.props,t=e.note,n=e.filter,o=e.fontSize,a=e.previewingMarkdown,i=e.spellCheckEnabled,s={text:Object(y.get)(t,"data.content",""),hasRemoteUpdate:Object(y.get)(t,"hasRemoteUpdate",!1),version:Object(y.get)(t,"version",void 0)},c={fontSize:"".concat(o,"px")};return r.a.createElement("div",{className:"note-detail-wrapper"},t?r.a.createElement("div",{className:"note-detail"},a&&r.a.createElement("div",{ref:this.storePreview,className:"note-detail-markdown theme-color-bg theme-color-fg","data-markdown-root":!0,onClick:this.onPreviewClick,style:c}),!a&&r.a.createElement("div",{className:"note-detail-textarea theme-color-bg theme-color-fg",style:c},r.a.createElement(Ke,{ref:this.saveEditorRef,spellCheckEnabled:i,storeFocusEditor:this.storeFocusContentEditor,storeHasFocus:this.storeEditorHasFocus,noteId:Object(y.get)(t,"id",null),content:s,filter:n,onChangeContent:this.saveNote}))):r.a.createElement("div",{className:"note-detail-placeholder"},r.a.createElement(qe.a,null)))}}])&&Ue(n.prototype,o),a&&Ue(n,a),t}(o.Component);$e(Ge,"displayName","NoteDetail"),$e(Ge,"propTypes",{dialogs:i.a.array.isRequired,filter:i.a.string.isRequired,fontSize:i.a.number,onChangeContent:i.a.func.isRequired,syncNote:i.a.func.isRequired,onNotePrinted:i.a.func.isRequired,note:i.a.object,noteBucket:i.a.object.isRequired,previewingMarkdown:i.a.bool,shouldPrint:i.a.bool.isRequired,showNoteInfo:i.a.bool.isRequired,spellCheckEnabled:i.a.bool.isRequired,storeFocusEditor:i.a.func,storeHasFocus:i.a.func}),$e(Ge,"defaultProps",{storeFocusEditor:y.noop,storeHasFocus:y.noop});var Qe=c.a.actionCreators.setShouldPrintNote,Ye={onNotePrinted:function(){return Qe({shouldPrint:!1})}},Ze=Object(s.b)((function(e){var t=e.appState,n=e.settings;return{dialogs:t.dialogs,filter:t.filter,shouldPrint:t.shouldPrint,showNoteInfo:t.showNoteInfo,spellCheckEnabled:n.spellCheckEnabled}}),Ye)(Ge);function et(e){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function tt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nt(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ot(e,t){return!t||"object"!==et(t)&&"function"!=typeof t?at(e):t}function rt(e){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function at(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function it(e,t){return(it=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function st(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"NoteEditor",(function(){return ct}));var ct=function(e){function t(){var e,n;tt(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return st(at(n=ot(this,(e=rt(t)).call.apply(e,[this].concat(r)))),"markdownEnabled",(function(){var e=n.props.revision||n.props.note;return e&&e.data&&e.data.systemTags&&-1!==e.data.systemTags.indexOf("markdown")})),st(at(n),"handleShortcut",(function(e){var t=e.ctrlKey,o=e.key,r=e.metaKey,a=e.shiftKey,i=t||r;if(i&&a&&"p"===o.toLowerCase()&&n.markdownEnabled){var s="edit"===n.props.editorMode?"markdown":"edit";return n.props.setEditorMode({mode:s}),e.stopPropagation(),e.preventDefault(),!1}if(n.props.isSmallScreen&&i&&a&&"n"===o)return n.props.closeNote(),n.props.onNoteClosed(),e.stopPropagation(),e.preventDefault(),!1;if(i&&"t"===o&&n.props.isEditorActive){if(!n.editFieldHasFocus())return n.focusNoteEditor&&n.focusNoteEditor(),e.stopPropagation(),e.preventDefault(),!1;if(!n.tagFieldHasFocus())return n.focusTagField&&n.focusTagField(),e.stopPropagation(),e.preventDefault(),!1}return!0})),st(at(n),"editFieldHasFocus",(function(){return n.editorHasFocus&&n.editorHasFocus()})),st(at(n),"storeEditorHasFocus",(function(e){return n.editorHasFocus=e})),st(at(n),"storeFocusEditor",(function(e){return n.focusNoteEditor=e})),st(at(n),"storeFocusTagField",(function(e){return n.focusTagField=e})),st(at(n),"storeTagFieldHasFocus",(function(e){return n.tagFieldHasFocus=e})),st(at(n),"tagFieldHasFocus",(function(){return n.tagFieldHasFocus&&n.tagFieldHasFocus()})),st(at(n),"toggleShortcuts",(function(e){e?window.addEventListener("keydown",n.handleShortcut,!0):window.removeEventListener("keydown",n.handleShortcut,!0)})),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&it(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.toggleShortcuts(!0)}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1)}},{key:"render",value:function(){var e=this.props,t=e.editorMode,n=e.note,o=e.noteBucket,a=e.fontSize,i=this.props.revision||n,s=i&&i.data&&i.data.tags||[],c=!(!n||!n.data.deleted);return r.a.createElement("div",{className:"note-editor theme-color-bg theme-color-fg"},r.a.createElement(Ze,{storeFocusEditor:this.storeFocusEditor,storeHasFocus:this.storeEditorHasFocus,filter:this.props.filter,note:i,noteBucket:o,previewingMarkdown:this.markdownEnabled()&&"markdown"===t,onChangeContent:this.props.onUpdateContent,syncNote:this.props.syncNote,fontSize:a}),n&&!c&&r.a.createElement(W,{storeFocusTagField:this.storeFocusTagField,storeHasFocus:this.storeTagFieldHasFocus,allTags:this.props.allTags.map(Object(y.property)("data.name")),note:this.props.note,tags:s}))}}])&&nt(n.prototype,o),a&&nt(n,a),t}(o.Component);st(ct,"displayName","NoteEditor"),st(ct,"propTypes",{allTags:i.a.array.isRequired,closeNote:i.a.func.isRequired,editorMode:i.a.oneOf(["edit","markdown"]),isEditorActive:i.a.bool.isRequired,isSmallScreen:i.a.bool.isRequired,filter:i.a.string.isRequired,note:i.a.object,noteBucket:i.a.object.isRequired,fontSize:i.a.number,onNoteClosed:i.a.func.isRequired,onUpdateContent:i.a.func.isRequired,revision:i.a.object,setEditorMode:i.a.func.isRequired,syncNote:i.a.func.isRequired}),st(ct,"defaultProps",{editorMode:"edit",note:{data:{tags:[]}}});var ut=c.a.actionCreators,lt=ut.closeNote,ft=ut.setEditorMode;t.default=Object(s.b)((function(e){var t=e.appState,n=e.settings;return{allTags:t.tags,filter:t.filter,fontSize:n.fontSize,editorMode:t.editorMode,isEditorActive:!t.showNavigation,revision:t.revision}}),(function(e){return{closeNote:function(){return e(lt())},setEditorMode:function(t){return e(ft(t))}}}))(ct)},580:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a}));var o={taskNode:".task-list-item",markdownRoot:"[data-markdown-root]"},r=/^(\s*)(-[ \t]+\[[xX\s]?\])/gm,a=/^(\s*)(-[ \t]+\[[xX\s]?\])(.+)/gm},662:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1),i=n.n(a);function s(){return r.a.createElement("svg",{className:"icon-checkmark",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M11,17.768l-4.884-4.884l1.768-1.768L11,14.232l8.658-8.658C17.823,3.391,15.075,2,12,2C6.477,2,2,6.477,2,12 s4.477,10,10,10s10-4.477,10-10c0-1.528-0.353-2.971-0.966-4.266L11,17.768z"}))}function c(){return r.a.createElement("svg",{className:"icon-circle",xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},r.a.createElement("g",{transform:"translate(2 2)"},r.a.createElement("path",{d:"m10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5 8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z"})))}var u=function(e){var t=e.checked,n=void 0!==t&&t,o=e.onChange;return r.a.createElement("span",{className:"checkbox",role:"checkbox","aria-checked":n,onClick:o,tabIndex:"0"},r.a.createElement("span",{className:"checkbox__icon","aria-hidden":"true"},n?r.a.createElement(s,null):r.a.createElement(c,null)))};u.propTypes={checked:i.a.bool,onChange:i.a.func};t.a=u}}]);