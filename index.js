module.exports = function cssmin(e,_){for(var r=0,a=0,t=0,o=0,n=[],c=[],l="",i=e.length,s="";(r=e.indexOf("/*",r))>=0;)(a=e.indexOf("*/",r+2))<0&&(a=i),l=e.slice(r+2,a),c.push(l),e=e.slice(0,r+2)+"___YUICSSMIN_PRESERVE_CANDIDATE_COMMENT_"+(c.length-1)+"___"+e.slice(a),r+=2;for(e=e.replace(/("([^\\"]|\\.|\\)*")|('([^\\']|\\.|\\)*')/g,function(e){var _,r,a=e.substring(0,1);if((e=e.slice(1,-1)).indexOf("___YUICSSMIN_PRESERVE_CANDIDATE_COMMENT_")>=0)for(_=0,r=c.length;_<r;_+=1)e=e.replace("___YUICSSMIN_PRESERVE_CANDIDATE_COMMENT_"+_+"___",c[_]);return e=e.replace(/progid:DXImageTransform\.Microsoft\.Alpha\(Opacity=/gi,"alpha(opacity="),n.push(e),a+"___YUICSSMIN_PRESERVED_TOKEN_"+(n.length-1)+"___"+a}),t=0,o=c.length;t<o;t+=1)s="___YUICSSMIN_PRESERVE_CANDIDATE_COMMENT_"+t+"___","!"!==(l=c[t]).charAt(0)?"\\"!==l.charAt(l.length-1)?(0===l.length&&(r=e.indexOf(s))>2&&">"===e.charAt(r-3)&&(n.push(""),e=e.replace(s,"___YUICSSMIN_PRESERVED_TOKEN_"+(n.length-1)+"___")),e=e.replace("/*"+s+"*/","")):(n.push("\\"),e=e.replace(s,"___YUICSSMIN_PRESERVED_TOKEN_"+(n.length-1)+"___"),t+=1,n.push(""),e=e.replace("___YUICSSMIN_PRESERVE_CANDIDATE_COMMENT_"+t+"___","___YUICSSMIN_PRESERVED_TOKEN_"+(n.length-1)+"___")):(n.push(l),e=e.replace(s,"___YUICSSMIN_PRESERVED_TOKEN_"+(n.length-1)+"___"));if(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\s+/g," ")).replace(/(^|\})(([^\{:])+:)+([^\{]*\{)/g,function(e){return e.replace(/\:/g,"___YUICSSMIN_PSEUDOCLASSCOLON___")})).replace(/calc\s*\(\s*(.*?)\s*\)/g,function(e,_){return e.replace(_,_.replace(/\s+/g,"___YUICSSMIN_SPACE_IN_CALC___"))})).replace(/\s+([!{};:>+\(\)\],])/g,"$1")).replace(/___YUICSSMIN_PSEUDOCLASSCOLON___/g,":")).replace(/:first-(line|letter)(\{|,)/g,":first-$1 $2")).replace(/\*\/ /g,"*/")).replace(/^(.*)(@charset "[^"]*";)/gi,"$2$1")).replace(/^(\s*@charset [^;]+;\s*)+/gi,"$1")).replace(/\band\(/gi,"and (")).replace(/([!{}:;>+\(\[,])\s+/g,"$1")).replace(/___YUICSSMIN_SPACE_IN_CALC___/g," ")).replace(/;+\}/g,"}")).replace(/([\s:])(0)(px|em|%|in|cm|mm|pc|pt|ex)/gi,"$1$2")).replace(/:0 0 0 0(;|\})/g,":0$1")).replace(/:0 0 0(;|\})/g,":0$1")).replace(/:0 0(;|\})/g,":0$1")).replace(/(background-position|transform-origin|webkit-transform-origin|moz-transform-origin|o-transform-origin|ms-transform-origin):0(;|\})/gi,function(e,_,r){return _.toLowerCase()+":0 0"+r})).replace(/(:|\s)0+\.(\d+)/g,"$1.$2")).replace(/rgb\s*\(\s*([0-9,\s]+)\s*\)/gi,function(){var e,_=arguments[1].split(",");for(e=0;e<_.length;e+=1)_[e]=parseInt(_[e],10).toString(16),1===_[e].length&&(_[e]="0"+_[e]);return"#"+_.join("")})).replace(/([^"'=\s])(\s*)#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])/gi,function(){var e=arguments;return e[3].toLowerCase()===e[4].toLowerCase()&&e[5].toLowerCase()===e[6].toLowerCase()&&e[7].toLowerCase()===e[8].toLowerCase()?(e[1]+e[2]+"#"+e[3]+e[5]+e[7]).toLowerCase():e[0].toLowerCase()})).replace(/(border|border-top|border-right|border-bottom|border-right|outline|background):none(;|\})/gi,function(e,_,r){return _.toLowerCase()+":0"+r})).replace(/progid:DXImageTransform\.Microsoft\.Alpha\(Opacity=/gi,"alpha(opacity=")).replace(/[^\};\{\/]+\{\}/g,""),_>=0)for(r=0,t=0;t<e.length;)"}"===e[(t+=1)-1]&&t-r>_&&(e=e.slice(0,t)+"\n"+e.slice(t),r=t);for(e=e.replace(/;;+/g,";"),t=0,o=n.length;t<o;t+=1)e=e.replace("___YUICSSMIN_PRESERVED_TOKEN_"+t+"___",n[t]);return e=e.replace(/^\s+|\s+$/g,"")}
