module.exports=function(s,b){var i=b||0,l=s.length-i;switch(l){case 4:return [s[i++],s[i++],s[i++],s[i++]];case 3:return [s[i++],s[i++],s[i++]];case 2:return [s[i++],s[i++]];case 1:return [s[i++]];case 0:return [];};for(var a=0,r=new Array(l);a<l;a++)r[a]=s[i+a];return r};
