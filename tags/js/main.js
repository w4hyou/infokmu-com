// Sebagian besar javascript di blog ini bersumber dari Blog DTE [http://www.dte.web.id] dan sebagian telah saya modifikasi. //<![CDATA[
(function(){var b=document.body,a=document.getElementById("toggle-nav");a.onclick=function(){b.className=(/(^| )sidebar-is-visible( |$)/.test(b.className))?b.className.replace(/sidebar-is-visible/,""):b.className+" sidebar-is-visible";this.title=(this.title=="Hide Navigation")?"Show Navigation":"Hide Navigation";return false}})();function updatedPosts(q){if(document.getElementById("updated-posts")){var k=q.feed.entry,p,g,n,c,l="",b=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],h=document.getElementById("updated-posts");for(var f=0;f<7;f++){for(var d=0;d<7;d++){if(k[f].link[d].rel=="alternate"){n=k[f].link[d].href;break}}var p=k[f].title.$t,m=k[f].published.$t.substring(0,10).split("-");if("media$thumbnail" in k[f]){g=k[f].media$thumbnail.url}else{g="http://2.bp.blogspot.com/-LQV025ltHWI/UnZSnJQN_GI/AAAAAAAAGes/gbXNGWA21LY/s40/logon.png"}l+='<li class="late"><img src="'+g.replace(/\/s72-c/,"/s40-c")+'" class="lates" alt="'+p+'" height="40px" width="40px"/>';l+='<strong><a href="'+n+'" title="'+p+'" target="_parent">'+p+'</a></strong><time class="lates-footer" datetime="'+m.join("-")+'">  '+(m[2]+" "+b[(parseInt(m[1],10)-1)]+" "+m[0])+"</time></li>"}h.innerHTML=l}}function asyncData(A,B){var C=document.createElement('script');C.src=A;C.onload=function (){if(typeof B=="function")B();B=null;};C.onreadystatechange=function (){if(C.readyState==4||C.readyState=="complete"){if(typeof B=="function")B();B=null;}};document.getElementsByTagName('head')[0].appendChild(C);}asyncData('http://www.infokmu.com/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=7&callback=updatedPosts');(function(a){a.fn.stickyBar=function(b){b=a.extend({until:"",top:0,bottom:0,animated:false,speed:400,easing:null,fixedClass:"isFixed",stoppedClass:"isStopped",onFixed:function(){},onStatic:function(){},onStopped:function(){}},b);return this.each(function(){var j=a(window),i=a(this),f=i.offset().top,e=i.css("margin-top"),c=i.css("margin-bottom"),h=i.outerHeight(),g=i.css("position"),d=(b.until!=="")?a(b.until).offset().top-h-b.top:a(document).height();if(!b.animated){a("<div />",{"class":"space-holder",style:"display:none;height:"+h+"px;margin-top:"+e+";margin-bottom:"+c}).insertBefore(i)}else{if(g=="static"){i.css("position","relative")}}j.on("scroll",function(){var k=a(this).scrollTop();if(k>=f-b.top){if(k<=d-b.bottom){b.onFixed.call(i);if(!b.animated){i.css({position:"fixed",top:b.top,left:i.offset().left,width:i.width()+"px","margin-top":0}).removeClass(b.stoppedClass).addClass(b.fixedClass).prev().show()}else{i.stop().animate({top:k-f+b.top},b.speed,b.easing,function(){a(this).css("top",k-f+b.top)}).removeClass(b.stoppedClass).addClass(b.fixedClass)}}else{b.onStopped.call(i);i.css({position:"relative",top:d-f-b.bottom,left:0,"margin-top":e,"margin-bottom":c+b.bottom}).removeClass(b.fixedClass).addClass(b.stoppedClass).prev().hide()}}else{b.onStatic.call(i);if(!b.animated){i.css({position:g,top:0,left:0,"margin-top":e,"margin-bottom":c}).removeClass(b.fixedClass+" "+b.stoppedClass).prev().hide()}else{i.stop().animate({top:0},b.speed,b.easing,function(){a(this).css("top",0)}).removeClass(b.fixedClass+" "+b.stoppedClass)}}})})}})(jQuery);jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e}});(function(){function c(a){e.style.display="block";e.innerHTML=this.title;e.style.top=a.pageY+10+"px";e.style.left=a.pageX+40+"px";this.setAttribute("original",this.title);this.title=""}function a(){e.innerHTML="";e.style.display="none";this.title=this.getAttribute("original");this.removeAttribute("original")}var d=document.getElementsByTagName("a"),b=document.createElement("span");b.id="tooltips";document.body.appendChild(b);for(var e=document.getElementById("tooltips"),b=0;b<d.length;b++)d[b].title&&(d[b].onmouseover=c,d[b].onmouseout=a)})();(function(c){c.fn.iklanaccordion=function(a){a=jQuery.extend({active:1,sUpSpeed:40,sDownSpeed:40,sUpEasing:null,sDownEasing:null},a);return this.each(function(){var d=c(this),b=d.children("div[data-header]"),e=a.active-1;b.each(function(){c(this).hide().before('<h2 class="iklan-header">'+c(this).data("header")+"</h2>")});d.children("div:eq("+e+")").show().prev().addClass("active");d.find(".iklan-header").on("mouseover",function(){d.children("h2").removeClass("active");b.slideUp(a.sUpSpeed,a.sUpEasing);c(this).addClass("active").next().slideDown(a.sDownSpeed,a.sDownEasing)})})}})(jQuery);$(function(){$("#iklan-teks").iklanaccordion()});$(document).ready(function(){$(".info-icon").hover(function(){$(".info-iklan").toggle()})});$(".show-about").click(function(){$(".tanda").delay(1E3).animate({top:172},3E3,"easeOutExpo").stickyBar({animated:true,speed:2E3,easing:"swing",top:195});$(".about").delay(1E3).animate({top:172},3E3,"easeOutExpo").show(1E3);$(".gar").delay(3E3).animate({width:30},1500,"easeOutExpo",function(){$(".gar3").delay(100).show().animate({width:600},1200,"easeOutExpo",function(){$(".gar2").animate({height:550,marginTop:-136},1200,"easeOutExpo",function(){$(".you_about-panel").show().animate({width:535},1200,"easeOutExpo")})})})});$(".contact-link").click(function(){$(".kontak").show(2E3)});$(".close").click(function(){$(".kontak").hide(2E3,"easeInBack")});$(".close-button").click(function(){$(".you_about-panel").animate({width:0},1200,"easeOutExpo").fadeOut(100,function(){$(".gar2").animate({height:0,marginTop:0},1200,"easeOutExpo",function(){$(".gar3").delay(100).animate({width:0},1200,"easeOutExpo",function(){$(".gar").delay(800).animate({width:0},1e3,"easeOutExpo",function(){$(".gar3").hide(),$(".tanda").delay(1e3).animate({top:31},3e3,"easeOutExpo")})})})})});(function(a){a.easing.jswing=a.easing.swing;a.extend(a.easing,{def:"easeOutQuad",swing:function(f,g,e,i,h){return a.easing[a.easing.def](f,g,e,i,h)},easeInQuad:function(f,g,e,i,h){return i*(g/=h)*g+e},easeOutQuad:function(f,g,e,i,h){return -i*(g/=h)*(g-2)+e},easeInOutQuad:function(f,g,e,i,h){if((g/=h/2)<1){return i/2*g*g+e}return -i/2*((--g)*(g-2)-1)+e},easeInCubic:function(f,g,e,i,h){return i*(g/=h)*g*g+e},easeOutCubic:function(f,g,e,i,h){return i*((g=g/h-1)*g*g+1)+e},easeInOutCubic:function(f,g,e,i,h){if((g/=h/2)<1){return i/2*g*g*g+e}return i/2*((g-=2)*g*g+2)+e},easeInQuart:function(f,g,e,i,h){return i*(g/=h)*g*g*g+e},easeOutQuart:function(f,g,e,i,h){return -i*((g=g/h-1)*g*g*g-1)+e},easeInOutQuart:function(f,g,e,i,h){if((g/=h/2)<1){return i/2*g*g*g*g+e}return -i/2*((g-=2)*g*g*g-2)+e},easeInQuint:function(f,g,e,i,h){return i*(g/=h)*g*g*g*g+e},easeOutQuint:function(f,g,e,i,h){return i*((g=g/h-1)*g*g*g*g+1)+e},easeInOutQuint:function(f,g,e,i,h){if((g/=h/2)<1){return i/2*g*g*g*g*g+e}return i/2*((g-=2)*g*g*g*g+2)+e},easeInSine:function(f,g,e,i,h){return -i*Math.cos(g/h*(Math.PI/2))+i+e},easeOutSine:function(f,g,e,i,h){return i*Math.sin(g/h*(Math.PI/2))+e},easeInOutSine:function(f,g,e,i,h){return -i/2*(Math.cos(Math.PI*g/h)-1)+e},easeInExpo:function(f,g,e,i,h){return(g==0)?e:i*Math.pow(2,10*(g/h-1))+e},easeOutExpo:function(f,g,e,i,h){return(g==h)?e+i:i*(-Math.pow(2,-10*g/h)+1)+e},easeInOutExpo:function(f,g,e,i,h){if(g==0){return e}if(g==h){return e+i}if((g/=h/2)<1){return i/2*Math.pow(2,10*(g-1))+e}return i/2*(-Math.pow(2,-10*--g)+2)+e},easeInCirc:function(f,g,e,i,h){return -i*(Math.sqrt(1-(g/=h)*g)-1)+e},easeOutCirc:function(f,g,e,i,h){return i*Math.sqrt(1-(g=g/h-1)*g)+e},easeInOutCirc:function(f,g,e,i,h){if((g/=h/2)<1){return -i/2*(Math.sqrt(1-g*g)-1)+e}return i/2*(Math.sqrt(1-(g-=2)*g)+1)+e},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(f,g,e,j,i,h){if(h==undefined){h=1.70158}return j*(g/=i)*g*((h+1)*g-h)+e},easeOutBack:function(f,g,e,j,i,h){if(h==undefined){h=1.70158}return j*((g=g/i-1)*g*((h+1)*g+h)+1)+e},easeInOutBack:function(f,g,e,j,i,h){if(h==undefined){h=1.70158}if((g/=i/2)<1){return j/2*(g*g*(((h*=(1.525))+1)*g-h))+e}return j/2*((g-=2)*g*(((h*=(1.525))+1)*g+h)+2)+e},easeInBounce:function(f,g,e,i,h){return i-a.easing.easeOutBounce(f,h-g,0,i,h)+e},easeOutBounce:function(f,g,e,i,h){if((g/=h)<(1/2.75)){return i*(7.5625*g*g)+e}else{if(g<(2/2.75)){return i*(7.5625*(g-=(1.5/2.75))*g+0.75)+e}else{if(g<(2.5/2.75)){return i*(7.5625*(g-=(2.25/2.75))*g+0.9375)+e}else{return i*(7.5625*(g-=(2.625/2.75))*g+0.984375)+e}}}},easeInOutBounce:function(f,g,e,i,h){if(g<h/2){return a.easing.easeInBounce(f,g*2,0,i,h)*0.5+e}return a.easing.easeOutBounce(f,g*2-h,0,i,h)*0.5+i*0.5+e}})})(jQuery);window.you_autoSelect=function(a){a.ondblclick=function(){var b,r;if(window.getSelection){b=window.getSelection();r=document.createRange();r.selectNodeContents(a);b.removeAllRanges();b.addRange(r)}else if(document.selection){b=document.selection.createRange().text;r=document.body.createTextRange();r.moveToElementText(a);r.select()}}};window.you_addNumber=function(){var a=document.getElementsByTagName('pre'),pl=a.length,s;for(var i=0;i<pl;++i){s='<span class="line-number">';a[i].id=!a[i].id?'code-block:'+(i+1):a[i].id;if(/(^| )numbered( |$)/.test(a[i].className)){var b=a[i].getElementsByTagName('code')[0];for(var j=0,k=b.innerHTML.split(/\n/).length;j<k;++j){s+='<span id="code-line:'+(i+1)+"-"+(j+1)+'"><span>'+(j+1)+"</span><em>code-line:"+(i+1)+"-"+(j+1)+"</em></span>";}a[i].innerHTML=s+='</span>'+a[i].innerHTML+'<span class="cl"></span>'}you_autoSelect(a[i].getElementsByTagName('code')[0]);if(window.location.hash&&/code\-line\:([0-9]+)\-([0-9]+)|code\-block\:([0-9]+)/.test(window.location.hash)){var h=window.location.hash;window.location.hash=h}}};(function($){var $form=$("#ajax-search-form"),$input=$form.find(":text");$form.append('<div id="search-result"></div>');var $result_container=$("#hasil");$form.on("submit",function(){var keyword=$input.val();$result_container.show().html("Loading...");$.ajax({url:"http://www.infokmu.com/feeds/posts/summary?alt=json-in-script&q="+keyword+"&max-results=9999",type:"get",dataType:"jsonp",success:function(json){var entry=json.feed.entry,link,summary,thumbnail,skeleton="";if(entry!==undefined){skeleton='<a href="javascript:;" rel="nofollow" class="close pull-right no-print" data-icon="&#xe04e;"></a>';skeleton+="<h4>Search results for keyword &#8220;"+keyword+"&#8221;</h4><ol>";for(var i=0;i<entry.length;i++){if(i==entry.length){}var mark=new RegExp(keyword,"ig"),entries=entry[i],title=entries.title.$t.replace(mark,"<mark class='highlight'>"+keyword+"</mark>");for(var j=0;j<entries.link.length;j++){if(entries.link[j].rel=="alternate"){link=entries.link[j].href}}if("media$thumbnail" in entries){thumbnail=("media$thumbnail" in entries)?'<img alt="" src="'+entries.media$thumbnail.url.replace(/\/s[0-9]+\-c/,"/s40-c")+'" width="40" height="40">':""}else{thumbnail='<img alt="" src="http://2.bp.blogspot.com/-LQV025ltHWI/UnZSnJQN_GI/AAAAAAAAGes/gbXNGWA21LY/s40/logon.png" width="40" height="40">'}summary=("summary" in entries)?entries.summary.$t.replace(/<br ?\/?>/ig," ").replace(/<.*?>/g,"").replace(/[<>]/g,""):"";summary=summary.length>200?summary.substring(0,200)+"&hellip;":summary;summary=summary.replace(mark,"<mark class='highlight'>"+keyword+"</mark>");skeleton+="<li>"+thumbnail+'<a href="'+link+'">'+title+"</a><br><span class='cm-text'>"+summary+"</span></li>"}skeleton+="</ol>";$result_container.html(skeleton)}else{$result_container.html('<a href="javascript:;" rel="nofollow" class="close pull-right no-print" data-icon="&#xe04e;"></a><strong>No result!</strong>')}},error:function(){$result_container.html('<a class="close pull-right no-print" rel="nofollow" href="javascript:;" data-icon="&#xe04e;" ></a><strong>Error loading feed.</strong>')}});return false});$form.on("click",".close",function(){$result_container.fadeOut();return false})})(jQuery);$("#hasil").click(function(){$("#hasil, .close").toggle()});$(".close").click(function(){$("#hasil, .close").hide()});$(".img-attachment").attr("src",function(){return $(this).data("src").replace(/\/s[0-9]+(\-c)?/i, "/s400")});var hljs=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function c(r,q,p){return RegExp(q,"m"+(r.cI?"i":"")+(p?"g":""))}function j(r){for(var p=0;p<r.childNodes.length;p++){var q=r.childNodes[p];if(q.nodeName=="CODE"||q.nodeName=="SPAN"){return q}if(!(q.nodeType==3&&q.nodeValue.match(/\s+/))){break}}}function g(t,s){var r="";for(var q=0;q<t.childNodes.length;q++){if(t.childNodes[q].nodeType==3){var p=t.childNodes[q].nodeValue;if(s){p=p.replace(/\n/g,"")}r+=p}else{if(t.childNodes[q].nodeName=="BR"){r+="\n"}else{r+=g(t.childNodes[q])}}}if(/MSIE [678]/.test(navigator.userAgent)){r=r.replace(/\r/g,"\n")}return r}function a(s){var q=s.className.split(/\s+/);q=q.concat(s.parentNode.className.split(/\s+/));for(var p=0;p<q.length;p++){var r=q[p].replace(/^language-/,"");if(d[r]||r=="no-highlight"){return r}}}function b(p){var q=[];(function(s,t){for(var r=0;r<s.childNodes.length;r++){if(s.childNodes[r].nodeType==3){t+=s.childNodes[r].nodeValue.length}else{if(s.childNodes[r].nodeName=="BR"){t+=1}else{q.push({event:"start",offset:t,node:s.childNodes[r]});t=arguments.callee(s.childNodes[r],t);q.push({event:"stop",offset:t,node:s.childNodes[r]})}}}return t})(p,0);return q}function l(y,z,x){var r=0;var w="";var t=[];function u(){if(y.length&&z.length){if(y[0].offset!=z[0].offset){return(y[0].offset<z[0].offset)?y:z}else{return z[0].event=="start"?y:z}}else{return y.length?y:z}}function s(C){var D="<"+C.nodeName.toLowerCase();for(var A=0;A<C.attributes.length;A++){var B=C.attributes[A];D+=" "+B.nodeName.toLowerCase();if(B.nodeValue!=undefined&&B.nodeValue!=false&&B.nodeValue!=null){D+='="'+m(B.nodeValue)+'"'}}return D+">"}while(y.length||z.length){var v=u().splice(0,1)[0];w+=m(x.substr(r,v.offset-r));r=v.offset;if(v.event=="start"){w+=s(v.node);t.push(v.node)}else{if(v.event=="stop"){var q=t.length;do{q--;var p=t[q];w+=("</"+p.nodeName.toLowerCase()+">")}while(p!=v.node);t.splice(q,1);while(q<t.length){w+=s(t[q]);q++}}}}w+=x.substr(r);return w}function i(){function p(u,t,v){if(u.compiled){return}if(!v){u.bR=c(t,u.b?u.b:"\\B|\\b");if(!u.e&&!u.eW){u.e="\\B|\\b"}if(u.e){u.eR=c(t,u.e)}}if(u.i){u.iR=c(t,u.i)}if(u.r==undefined){u.r=1}if(u.k){u.lR=c(t,u.l||hljs.IR,true)}for(var s in u.k){if(!u.k.hasOwnProperty(s)){continue}if(u.k[s]instanceof Object){u.kG=u.k}else{u.kG={keyword:u.k}}break}if(!u.c){u.c=[]}u.compiled=true;for(var r=0;r<u.c.length;r++){p(u.c[r],t,false)}if(u.starts){p(u.starts,t,false)}}for(var q in d){if(!d.hasOwnProperty(q)){continue}p(d[q].dM,d[q],true)}}function e(J,D){if(!i.called){i();i.called=true}function z(r,M){for(var L=0;L<M.c.length;L++){if(M.c[L].bR.test(r)){return M.c[L]}}}function w(L,r){if(C[L].e&&C[L].eR.test(r)){return 1}if(C[L].eW){var M=w(L-1,r);return M?M+1:0}return 0}function x(r,L){return L.iR&&L.iR.test(r)}function A(O,N){var M=[];for(var L=0;L<O.c.length;L++){M.push(O.c[L].b)}var r=C.length-1;do{if(C[r].e){M.push(C[r].e)}r--}while(C[r+1].eW);if(O.i){M.push(O.i)}return c(N,"("+M.join("|")+")",true)}function s(M,L){var N=C[C.length-1];if(!N.t){N.t=A(N,H)}N.t.lastIndex=L;var r=N.t.exec(M);if(r){return[M.substr(L,r.index-L),r[0],false]}else{return[M.substr(L),"",true]}}function p(O,r){var L=H.cI?r[0].toLowerCase():r[0];for(var N in O.kG){if(!O.kG.hasOwnProperty(N)){continue}var M=O.kG[N].hasOwnProperty(L);if(M){return[N,M]}}return false}function F(M,O){if(!O.k){return m(M)}var N="";var P=0;O.lR.lastIndex=0;var L=O.lR.exec(M);while(L){N+=m(M.substr(P,L.index-P));var r=p(O,L);if(r){t+=r[1];N+='<span class="'+r[0]+'">'+m(L[0])+"</span>"}else{N+=m(L[0])}P=O.lR.lastIndex;L=O.lR.exec(M)}N+=m(M.substr(P,M.length-P));return N}function K(r,M){if(M.sL&&d[M.sL]){var L=e(M.sL,r);t+=L.keyword_count;return L.value}else{return F(r,M)}}function I(M,r){var L=M.cN?'<span class="'+M.cN+'">':"";if(M.rB){q+=L;M.buffer=""}else{if(M.eB){q+=m(r)+L;M.buffer=""}else{q+=L;M.buffer=r}}C.push(M);B+=M.r}function E(O,L,Q){var R=C[C.length-1];if(Q){q+=K(R.buffer+O,R);return false}var M=z(L,R);if(M){q+=K(R.buffer+O,R);I(M,L);return M.rB}var r=w(C.length-1,L);if(r){var N=R.cN?"</span>":"";if(R.rE){q+=K(R.buffer+O,R)+N}else{if(R.eE){q+=K(R.buffer+O,R)+N+m(L)}else{q+=K(R.buffer+O+L,R)+N}}while(r>1){N=C[C.length-2].cN?"</span>":"";q+=N;r--;C.length--}var P=C[C.length-1];C.length--;C[C.length-1].buffer="";if(P.starts){I(P.starts,"")}return R.rE}if(x(L,R)){throw"Illegal"}}var H=d[J];var C=[H.dM];var B=0;var t=0;var q="";try{var v=0;H.dM.buffer="";do{var y=s(D,v);var u=E(y[0],y[1],y[2]);v+=y[0].length;if(!u){v+=y[1].length}}while(!y[2]);if(C.length>1){throw"Illegal"}return{r:B,keyword_count:t,value:q}}catch(G){if(G=="Illegal"){return{r:0,keyword_count:0,value:m(D)}}else{throw G}}}function f(t){var r={keyword_count:0,r:0,value:m(t)};var q=r;for(var p in d){if(!d.hasOwnProperty(p)){continue}var s=e(p,t);s.language=p;if(s.keyword_count+s.r>q.keyword_count+q.r){q=s}if(s.keyword_count+s.r>r.keyword_count+r.r){q=r;r=s}}if(q.language){r.second_best=q}return r}function h(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}if(p){r=r.replace(/\n/g,"<br>")}return r}function o(u,x,q){var y=g(u,q);var s=a(u);if(s=="no-highlight"){return}if(s){var w=e(s,y)}else{var w=f(y);s=w.language}var p=b(u);if(p.length){var r=document.createElement("pre");r.innerHTML=w.value;w.value=l(p,b(r),y)}w.value=h(w.value,x,q);var t=u.className;if(!t.match("(\\s|^)(language-)?"+s+"(\\s|$)")){t=t?(t+" "+s):s}if(/MSIE [678]/.test(navigator.userAgent)&&u.tagName=="CODE"&&u.parentNode.tagName=="PRE"){var r=u.parentNode;var v=document.createElement("div");v.innerHTML="<pre><code>"+w.value+"</code></pre>";u=v.firstChild.firstChild;v.firstChild.cN=r.cN;r.parentNode.replaceChild(v.firstChild,r)}else{u.innerHTML=w.value}u.className=t;u.result={language:s,kw:w.keyword_count,re:w.r};if(w.second_best){u.second_best={language:w.second_best.language,kw:w.second_best.keyword_count,re:w.second_best.r}}}function k(){if(k.called){return}k.called=true;var r=document.getElementsByTagName("pre");for(var p=0;p<r.length;p++){var q=j(r[p]);if(q){o(q,hljs.tabReplace)}}you_addNumber()}function n(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",k,false);window.addEventListener("load",k,false)}else{if(window.attachEvent){window.attachEvent("onload",k)}else{window.onload=k}}}var d={};this.LANGUAGES=d;this.highlight=e;this.highlightAuto=f;this.fixMarkup=h;this.highlightBlock=o;this.initHighlighting=k;this.initHighlightingOnLoad=n;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\.",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.inherit=function(p,s){var r={};for(var q in p){r[q]=p[q]}if(s){for(var q in s){r[q]=s[q]}}return r}}();hljs.LANGUAGES.javascript={dM:{k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}},c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM,hljs.CNM,{b:"("+hljs.RSR+"|case|return|throw)\\s*",k:{"return":1,"throw":1,"case":1},c:[hljs.CLCM,hljs.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",c:[{b:"\\\\/"}]}],r:0},{cN:"function",b:"\\bfunction\\b",e:"{",k:{"function":1},c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM]}]}]}};hljs.LANGUAGES.css=function(){var a={cN:"function",b:hljs.IR+"\\(",e:"\\)",c:[{eW:true,eE:true,c:[hljs.NM,hljs.ASM,hljs.QSM]}]};return{cI:true,dM:{i:"[=/|']",c:[hljs.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:{"font-face":1,page:1}},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:{"import":1,page:1,media:1,charset:1},c:[a,hljs.ASM,hljs.QSM,hljs.NM]},{cN:"tag",b:hljs.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[hljs.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[a,hljs.NM,hljs.QSM,hljs.ASM,hljs.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}();hljs.LANGUAGES.xml=function(){var b="[A-Za-z0-9\\._:-]+";var a={eW:true,c:[{cN:"attribute",b:b,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style",e:">",k:{title:{style:1}},c:[a],starts:{cN:"css",e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script",e:">",k:{title:{script:1}},c:[a],starts:{cN:"javascript",e:"<\/script>",rE:true,sL:"javascript"}},{cN:"vbscript",b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},a]}]}}}();hljs.LANGUAGES.java={dM:{k:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1},c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,{cN:"class",b:"(class |interface )",e:"{",k:{"class":1,"interface":1},i:":",c:[{b:"(implements|extends)",k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR}]},hljs.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}};hljs.LANGUAGES.php={cI:true,dM:{k:{and:1,include_once:1,list:1,"abstract":1,global:1,"private":1,echo:1,"interface":1,as:1,"static":1,endswitch:1,array:1,"null":1,"if":1,endwhile:1,or:1,"const":1,"for":1,endforeach:1,self:1,"var":1,"while":1,isset:1,"public":1,"protected":1,exit:1,foreach:1,"throw":1,elseif:1,"extends":1,include:1,__FILE__:1,empty:1,require_once:1,"function":1,"do":1,xor:1,"return":1,"implements":1,parent:1,clone:1,use:1,__CLASS__:1,__LINE__:1,"else":1,"break":1,print:1,"eval":1,"new":1,"catch":1,__METHOD__:1,"class":1,"case":1,exception:1,php_user_filter:1,"default":1,die:1,require:1,__FUNCTION__:1,enddeclare:1,"final":1,"try":1,"this":1,"switch":1,"continue":1,endfor:1,endif:1,declare:1,unset:1,"true":1,"false":1,namespace:1},c:[hljs.CLCM,hljs.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+",r:10}]},hljs.CNM,hljs.inherit(hljs.ASM,{i:null}),hljs.inherit(hljs.QSM,{i:null}),{cN:"variable",b:"\\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"}]}};hljs.tabReplace='    ';hljs.initHighlighting();$(function(){var hash = window.location.href.split('#')[1];$('html,body').animate({scrollTop:$('#'+hash).offset().top-10},5000,'easeOutQuart');$('#' + hash).delay(1000).addClass('selected');return false;});document.getElementsByTagName("atas")[0].onclick=function(){scrollTo(document.documentElement,0,1000);scrollTo(document.body,0,1000)};function scrollTo(c,h,e){Math.easeInOutQuad=function(j,i,l,k){j/=k/2;if(j<1){return l/2*j*j+i}j--;return -l/2*(j*(j-2)-1)+i};var g=c.scrollTop,f=h-g,d=0,a=20,b=function(){d+=a;var i=Math.easeInOutQuad(d,g,f,e);c.scrollTop=i;if(d<e){setTimeout(b,a)}};b()};//]]>