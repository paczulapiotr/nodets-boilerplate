(()=>{var e={738:(e,t,n)=>{const r=n(747),o=n(622);function s(e){console.log("[dotenv][DEBUG] "+e)}const c=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,l=/\\n/g,u=/\n|\r|\r\n/;function i(e,t){const n=Boolean(t&&t.debug),r={};return e.toString().split(u).forEach((function(e,t){const o=e.match(c);if(null!=o){const e=o[1];let t=o[2]||"";const n=t.length-1,s='"'===t[0]&&'"'===t[n];"'"===t[0]&&"'"===t[n]||s?(t=t.substring(1,n),s&&(t=t.replace(l,"\n"))):t=t.trim(),r[e]=t}else n&&s(`did not match key and value when parsing line ${t+1}: ${e}`)})),r}e.exports.config=function(e){let t=o.resolve(process.cwd(),".env"),n="utf8",c=!1;e&&(null!=e.path&&(t=e.path),null!=e.encoding&&(n=e.encoding),null!=e.debug&&(c=!0));try{const e=i(r.readFileSync(t,{encoding:n}),{debug:c});return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(process.env,t)?c&&s(`"${t}" is already defined in \`process.env\` and will not be overwritten`):process.env[t]=e[t]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=i},448:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return console.log("Hello")}},607:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(738)),s=r(n(448));o.default.config(),s.default()},747:e=>{"use strict";e.exports=require("fs")},622:e=>{"use strict";e.exports=require("path")}},t={};!function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(607)})();