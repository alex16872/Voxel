var Aa=Object.defineProperty;var Ca=(r,t,e)=>t in r?Aa(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var yt=(r,t,e)=>(Ca(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hr="150",La=0,br=1,Pa=2,$o=1,Da=2,Ci=3,on=0,ke=1,pn=2,wn=0,oi=1,wr=2,Tr=3,Er=4,Ra=5,si=100,Ia=101,ka=102,Ar=103,Cr=104,za=200,Fa=201,Na=202,Ua=203,jo=204,Yo=205,Ba=206,Oa=207,Ga=208,Va=209,Ha=210,Wa=0,Xa=1,qa=2,Js=3,$a=4,ja=5,Ya=6,Za=7,fr=0,Ja=1,Ka=2,mn=0,Qa=1,tl=2,el=3,nl=4,il=5,Zo=300,ci=301,ui=302,Ks=303,Qs=304,us=306,tr=1e3,Ye=1001,er=1002,he=1003,Lr=1004,_s=1005,Be=1006,sl=1007,ki=1008,Nn=1009,rl=1010,ol=1011,Jo=1012,al=1013,kn=1014,zn=1015,zi=1016,ll=1017,cl=1018,ai=1020,ul=1021,Ze=1023,hl=1024,fl=1025,Fn=1026,hi=1027,dl=1028,pl=1029,ml=1030,gl=1031,_l=1033,xs=33776,vs=33777,Ms=33778,ys=33779,Pr=35840,Dr=35841,Rr=35842,Ir=35843,xl=36196,kr=37492,zr=37496,Fr=37808,Nr=37809,Ur=37810,Br=37811,Or=37812,Gr=37813,Vr=37814,Hr=37815,Wr=37816,Xr=37817,qr=37818,$r=37819,jr=37820,Yr=37821,Ss=36492,vl=36283,Zr=36284,Jr=36285,Kr=36286,Un=3e3,Wt=3001,Ml=3200,yl=3201,Ko=0,Sl=1,sn="srgb",Fi="srgb-linear",Qo="display-p3",bs=7680,bl=519,Qr=35044,to="300 es",nr=1035;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,eo=180/Math.PI;function Ui(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[r&255]+de[r>>8&255]+de[r>>16&255]+de[r>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function Ie(r,t,e){return Math.max(t,Math.min(e,r))}function wl(r,t){return(r%t+t)%t}function Ts(r,t,e){return(1-e)*r+e*t}function no(r){return(r&r-1)===0&&r!==0}function Tl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vi(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pe(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ee{constructor(){Ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,a,o,c,l){const f=this.elements;return f[0]=t,f[1]=i,f[2]=o,f[3]=e,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],h=n[7],u=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],S=i[1],M=i[4],x=i[7],b=i[2],L=i[5],P=i[8];return s[0]=a*d+o*S+c*b,s[3]=a*p+o*M+c*L,s[6]=a*_+o*x+c*P,s[1]=l*d+f*S+h*b,s[4]=l*p+f*M+h*L,s[7]=l*_+f*x+h*P,s[2]=u*d+m*S+g*b,s[5]=u*p+m*M+g*L,s[8]=u*_+m*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8];return e*a*f-e*o*l-n*s*f+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8],h=f*a-o*l,u=o*c-f*s,m=l*s-a*c,g=e*h+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=h*d,t[1]=(i*l-f*n)*d,t[2]=(o*n-i*a)*d,t[3]=u*d,t[4]=(f*e-i*c)*d,t[5]=(i*s-o*e)*d,t[6]=m*d,t[7]=(n*c-l*e)*d,t[8]=(a*e-n*s)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Es.makeScale(t,e)),this}rotate(t){return this.premultiply(Es.makeRotation(-t)),this}translate(t,e){return this.premultiply(Es.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Ee;function ta(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ni(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class Bi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],f=n[i+2],h=n[i+3];const u=s[a+0],m=s[a+1],g=s[a+2],d=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=f,t[e+3]=h;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(h!==d||c!==u||l!==m||f!==g){let p=1-o;const _=c*u+l*m+f*g+h*d,S=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){const b=Math.sqrt(M),L=Math.atan2(b,_*S);p=Math.sin(p*L)/b,o=Math.sin(o*L)/b}const x=o*S;if(c=c*p+u*x,l=l*p+m*x,f=f*p+g*x,h=h*p+d*x,p===1-o){const b=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=b,l*=b,f*=b,h*=b}}t[e]=c,t[e+1]=l,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],f=n[i+3],h=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+f*h+c*m-l*u,t[e+1]=c*g+f*u+l*h-o*m,t[e+2]=l*g+f*m+o*u-c*h,t[e+3]=f*g-o*h-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(i/2),h=o(s/2),u=c(n/2),m=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*f*h+l*m*g,this._y=l*m*h-u*f*g,this._z=l*f*g+u*m*h,this._w=l*f*h-u*m*g;break;case"YXZ":this._x=u*f*h+l*m*g,this._y=l*m*h-u*f*g,this._z=l*f*g-u*m*h,this._w=l*f*h+u*m*g;break;case"ZXY":this._x=u*f*h-l*m*g,this._y=l*m*h+u*f*g,this._z=l*f*g+u*m*h,this._w=l*f*h-u*m*g;break;case"ZYX":this._x=u*f*h-l*m*g,this._y=l*m*h+u*f*g,this._z=l*f*g-u*m*h,this._w=l*f*h+u*m*g;break;case"YZX":this._x=u*f*h+l*m*g,this._y=l*m*h+u*f*g,this._z=l*f*g-u*m*h,this._w=l*f*h-u*m*g;break;case"XZY":this._x=u*f*h-l*m*g,this._y=l*m*h-u*f*g,this._z=l*f*g+u*m*h,this._w=l*f*h+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],f=e[6],h=e[10],u=n+o+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(f-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,f=e._w;return this._x=n*f+a*o+i*l-s*c,this._y=i*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-i*o,this._w=a*f-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),h=Math.sin((1-e)*f)/l,u=Math.sin(e*f)/l;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(io.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(io.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=c*e+a*i-o*n,f=c*n+o*e-s*i,h=c*i+s*n-a*e,u=-s*e-a*n-o*i;return this.x=l*c+u*-s+f*-o-h*-a,this.y=f*c+u*-a+h*-s-l*-o,this.z=h*c+u*-o+l*-a-f*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return As.copy(this).projectOnVector(t),this.sub(As)}reflect(t){return this.sub(As.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const As=new k,io=new Bi;function li(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const El=new Ee().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Al=new Ee().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Sn=new k;function Cl(r){return r.convertSRGBToLinear(),Sn.set(r.r,r.g,r.b).applyMatrix3(Al),r.setRGB(Sn.x,Sn.y,Sn.z)}function Ll(r){return Sn.set(r.r,r.g,r.b).applyMatrix3(El),r.setRGB(Sn.x,Sn.y,Sn.z).convertLinearToSRGB()}const Pl={[Fi]:r=>r,[sn]:r=>r.convertSRGBToLinear(),[Qo]:Cl},Dl={[Fi]:r=>r,[sn]:r=>r.convertLinearToSRGB(),[Qo]:Ll},Se={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Fi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Pl[t],i=Dl[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Wn;class ea{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wn===void 0&&(Wn=Ni("canvas")),Wn.width=t.width,Wn.height=t.height;const n=Wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ni("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=li(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class na{constructor(t=null){this.isSource=!0,this.uuid=Ui(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ls(i[a].image)):s.push(Ls(i[a]))}else s=Ls(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ls(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ea.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rl=0;class Ae extends pi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Ye,i=Ye,s=Be,a=ki,o=Ze,c=Nn,l=Ae.DEFAULT_ANISOTROPY,f=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rl++}),this.uuid=Ui(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case Ye:t.x=t.x<0?0:1;break;case er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case Ye:t.y=t.y<0?0:1;break;case er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Zo;Ae.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,i=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],f=c[4],h=c[8],u=c[1],m=c[5],g=c[9],d=c[2],p=c[6],_=c[10];if(Math.abs(f-u)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(m+1)/2,b=(_+1)/2,L=(f+u)/4,P=(h+d)/4,v=(g+p)/4;return M>x&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=L/n,s=P/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=L/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=P/s,i=v/s),this.set(n,i,s,e),this}let S=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(u-f)*(u-f));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-d)/S,this.z=(u-f)/S,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bn extends pi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Be,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new na(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=t.length;c<l;c+=3){const f=t[c],h=t[c+1],u=t[c+2];f<e&&(e=f),h<n&&(n=h),u<i&&(i=u),f>s&&(s=f),h>a&&(a=h),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=t.count;c<l;c++){const f=t.getX(c),h=t.getY(c),u=t.getZ(c);f<e&&(e=f),h<n&&(n=h),u<i&&(i=u),f>s&&(s=f),h>a&&(a=h),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Cn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Cn)}else n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox),Ps.applyMatrix4(t.matrixWorld),this.union(Ps);const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vi),Hi.subVectors(this.max,vi),Xn.subVectors(t.a,vi),qn.subVectors(t.b,vi),$n.subVectors(t.c,vi),gn.subVectors(qn,Xn),_n.subVectors($n,qn),Ln.subVectors(Xn,$n);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Ln.z,Ln.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Ln.z,0,-Ln.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Ln.y,Ln.x,0];return!Ds(e,Xn,qn,$n,Hi)||(e=[1,0,0,0,1,0,0,0,1],!Ds(e,Xn,qn,$n,Hi))?!1:(Wi.crossVectors(gn,_n),e=[Wi.x,Wi.y,Wi.z],Ds(e,Xn,qn,$n,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new k,new k,new k,new k,new k,new k,new k,new k],Cn=new k,Ps=new On,Xn=new k,qn=new k,$n=new k,gn=new k,_n=new k,Ln=new k,vi=new k,Hi=new k,Wi=new k,Pn=new k;function Ds(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Pn.fromArray(r,s);const o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),c=t.dot(Pn),l=e.dot(Pn),f=n.dot(Pn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const kl=new On,Mi=new k,Rs=new k;class hs{constructor(t=new k,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kl.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Rs)),this.expandByPoint(Mi.copy(t.center).sub(Rs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new k,Is=new k,Xi=new k,xn=new k,ks=new k,qi=new k,zs=new k;class sa{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Is.copy(t).add(e).multiplyScalar(.5),Xi.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Is);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Xi),o=xn.dot(this.direction),c=-xn.dot(Xi),l=xn.lengthSq(),f=Math.abs(1-a*a);let h,u,m,g;if(f>0)if(h=a*c-o,u=a*o-c,g=s*f,h>=0)if(u>=-g)if(u<=g){const d=1/f;h*=d,u*=d,m=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+u*(u+2*c)+l);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),m=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Is).addScaledVector(Xi,u),m}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),f>=0?(s=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(s=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-u.z)*h,c=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,c=(t.min.z-u.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,i,s){ks.subVectors(e,t),qi.subVectors(n,t),zs.crossVectors(ks,qi);let a=this.direction.dot(zs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,t);const c=o*this.direction.dot(qi.crossVectors(xn,qi));if(c<0)return null;const l=o*this.direction.dot(ks.cross(xn));if(l<0||c+l>a)return null;const f=-o*xn.dot(zs);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,a,o,c,l,f,h,u,m,g,d,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=f,_[10]=h,_[14]=u,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/jn.setFromMatrixColumn(t,0).length(),s=1/jn.setFromMatrixColumn(t,1).length(),a=1/jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),f=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const u=a*f,m=a*h,g=o*f,d=o*h;e[0]=c*f,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=u-d*l,e[9]=-o*c,e[2]=d-u*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*f,m=c*h,g=l*f,d=l*h;e[0]=u+d*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*h,e[5]=a*f,e[9]=-o,e[2]=m*o-g,e[6]=d+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*f,m=c*h,g=l*f,d=l*h;e[0]=u-d*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*f,e[9]=d-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*f,m=a*h,g=o*f,d=o*h;e[0]=c*f,e[4]=g*l-m,e[8]=u*l+d,e[1]=c*h,e[5]=d*l+u,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,m=a*l,g=o*c,d=o*l;e[0]=c*f,e[4]=d-u*h,e[8]=g*h+m,e[1]=h,e[5]=a*f,e[9]=-o*f,e[2]=-l*f,e[6]=m*h+g,e[10]=u-d*h}else if(t.order==="XZY"){const u=a*c,m=a*l,g=o*c,d=o*l;e[0]=c*f,e[4]=-h,e[8]=l*f,e[1]=u*h+d,e[5]=a*f,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*f,e[10]=d*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zl,t,Fl)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),vn.crossVectors(n,De),vn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),vn.crossVectors(n,De)),vn.normalize(),$i.crossVectors(De,vn),i[0]=vn.x,i[4]=$i.x,i[8]=De.x,i[1]=vn.y,i[5]=$i.y,i[9]=De.y,i[2]=vn.z,i[6]=$i.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],h=n[5],u=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],S=n[3],M=n[7],x=n[11],b=n[15],L=i[0],P=i[4],v=i[8],w=i[12],R=i[1],B=i[5],D=i[9],C=i[13],A=i[2],O=i[6],$=i[10],J=i[14],X=i[3],K=i[7],j=i[11],dt=i[15];return s[0]=a*L+o*R+c*A+l*X,s[4]=a*P+o*B+c*O+l*K,s[8]=a*v+o*D+c*$+l*j,s[12]=a*w+o*C+c*J+l*dt,s[1]=f*L+h*R+u*A+m*X,s[5]=f*P+h*B+u*O+m*K,s[9]=f*v+h*D+u*$+m*j,s[13]=f*w+h*C+u*J+m*dt,s[2]=g*L+d*R+p*A+_*X,s[6]=g*P+d*B+p*O+_*K,s[10]=g*v+d*D+p*$+_*j,s[14]=g*w+d*C+p*J+_*dt,s[3]=S*L+M*R+x*A+b*X,s[7]=S*P+M*B+x*O+b*K,s[11]=S*v+M*D+x*$+b*j,s[15]=S*w+M*C+x*J+b*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],f=t[2],h=t[6],u=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+s*c*h-i*l*h-s*o*u+n*l*u+i*o*m-n*c*m)+d*(+e*c*m-e*l*u+s*a*u-i*a*m+i*l*f-s*c*f)+p*(+e*l*h-e*o*m-s*a*h+n*a*m+s*o*f-n*l*f)+_*(-i*o*f-e*c*h+e*o*u+i*a*h-n*a*u+n*c*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],f=t[8],h=t[9],u=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],S=h*p*l-d*u*l+d*c*m-o*p*m-h*c*_+o*u*_,M=g*u*l-f*p*l-g*c*m+a*p*m+f*c*_-a*u*_,x=f*d*l-g*h*l+g*o*m-a*d*m-f*o*_+a*h*_,b=g*h*c-f*d*c-g*o*u+a*d*u+f*o*p-a*h*p,L=e*S+n*M+i*x+s*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=S*P,t[1]=(d*u*s-h*p*s-d*i*m+n*p*m+h*i*_-n*u*_)*P,t[2]=(o*p*s-d*c*s+d*i*l-n*p*l-o*i*_+n*c*_)*P,t[3]=(h*c*s-o*u*s-h*i*l+n*u*l+o*i*m-n*c*m)*P,t[4]=M*P,t[5]=(f*p*s-g*u*s+g*i*m-e*p*m-f*i*_+e*u*_)*P,t[6]=(g*c*s-a*p*s-g*i*l+e*p*l+a*i*_-e*c*_)*P,t[7]=(a*u*s-f*c*s+f*i*l-e*u*l-a*i*m+e*c*m)*P,t[8]=x*P,t[9]=(g*h*s-f*d*s-g*n*m+e*d*m+f*n*_-e*h*_)*P,t[10]=(a*d*s-g*o*s+g*n*l-e*d*l-a*n*_+e*o*_)*P,t[11]=(f*o*s-a*h*s-f*n*l+e*h*l+a*n*m-e*o*m)*P,t[12]=b*P,t[13]=(f*d*i-g*h*i+g*n*u-e*d*u-f*n*p+e*h*p)*P,t[14]=(g*o*i-a*d*i-g*n*c+e*d*c+a*n*p-e*o*p)*P,t[15]=(a*h*i-f*o*i+f*n*c-e*h*c-a*n*u+e*o*u)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,f*o+n,f*c-i*a,0,l*c-i*o,f*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,f=a+a,h=o+o,u=s*l,m=s*f,g=s*h,d=a*f,p=a*h,_=o*h,S=c*l,M=c*f,x=c*h,b=n.x,L=n.y,P=n.z;return i[0]=(1-(d+_))*b,i[1]=(m+x)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(m-x)*L,i[5]=(1-(u+_))*L,i[6]=(p+S)*L,i[7]=0,i[8]=(g+M)*P,i[9]=(p-S)*P,i[10]=(1-(u+d))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=jn.set(i[0],i[1],i[2]).length();const a=jn.set(i[4],i[5],i[6]).length(),o=jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],He.copy(this);const l=1/s,f=1/a,h=1/o;return He.elements[0]*=l,He.elements[1]*=l,He.elements[2]*=l,He.elements[4]*=f,He.elements[5]*=f,He.elements[6]*=f,He.elements[8]*=h,He.elements[9]*=h,He.elements[10]*=h,e.setFromRotationMatrix(He),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a){const o=this.elements,c=2*s/(e-t),l=2*s/(n-i),f=(e+t)/(e-t),h=(n+i)/(n-i),u=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,a){const o=this.elements,c=1/(e-t),l=1/(n-i),f=1/(a-s),h=(e+t)*c,u=(n+i)*l,m=(a+s)*f;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*f,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const jn=new k,He=new ue,zl=new k(0,0,0),Fl=new k(1,1,1),vn=new k,$i=new k,De=new k,so=new ue,ro=new Bi;class Oi{constructor(t=0,e=0,n=0,i=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],f=i[9],h=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return so.makeRotationFromQuaternion(t),this.setFromRotationMatrix(so,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ro.setFromEuler(this),this.setFromQuaternion(ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class ra{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nl=0;const oo=new k,Yn=new Bi,un=new ue,ji=new k,yi=new k,Ul=new k,Bl=new Bi,ao=new k(1,0,0),lo=new k(0,1,0),co=new k(0,0,1),Ol={type:"added"},uo={type:"removed"};class ve extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new k,e=new Oi,n=new Bi,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ee}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.premultiply(Yn),this}rotateX(t){return this.rotateOnAxis(ao,t)}rotateY(t){return this.rotateOnAxis(lo,t)}rotateZ(t){return this.rotateOnAxis(co,t)}translateOnAxis(t,e){return oo.copy(t).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ao,t)}translateY(t){return this.translateOnAxis(lo,t)}translateZ(t){return this.translateOnAxis(co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(yi,ji,this.up):un.lookAt(ji,yi,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),Yn.setFromRotationMatrix(un),this.quaternion.premultiply(Yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ol)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uo)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(uo)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,t,Ul),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,Bl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),f=a(t.images),h=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new k(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new k,hn=new k,Fs=new k,fn=new k,Zn=new k,Jn=new k,ho=new k,Ns=new k,Us=new k,Bs=new k;class dn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),We.subVectors(t,e),i.cross(We);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){We.subVectors(i,e),hn.subVectors(n,e),Fs.subVectors(t,e);const a=We.dot(We),o=We.dot(hn),c=We.dot(Fs),l=hn.dot(hn),f=hn.dot(Fs),h=a*l-o*o;if(h===0)return s.set(-2,-1,-1);const u=1/h,m=(l*c-o*f)*u,g=(a*f-o*c)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,fn),c.set(0,0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c}static isFrontFacing(t,e,n,i){return We.subVectors(n,e),hn.subVectors(t,e),We.cross(hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),We.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return dn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Zn.subVectors(i,n),Jn.subVectors(s,n),Ns.subVectors(t,n);const c=Zn.dot(Ns),l=Jn.dot(Ns);if(c<=0&&l<=0)return e.copy(n);Us.subVectors(t,i);const f=Zn.dot(Us),h=Jn.dot(Us);if(f>=0&&h<=f)return e.copy(i);const u=c*h-f*l;if(u<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Zn,a);Bs.subVectors(t,s);const m=Zn.dot(Bs),g=Jn.dot(Bs);if(g>=0&&m<=g)return e.copy(s);const d=m*l-c*g;if(d<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Jn,o);const p=f*g-m*h;if(p<=0&&h-f>=0&&m-g>=0)return ho.subVectors(s,i),o=(h-f)/(h-f+(m-g)),e.copy(i).addScaledVector(ho,o);const _=1/(p+d+u);return a=d*_,o=u*_,e.copy(n).addScaledVector(Zn,a).addScaledVector(Jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Gl=0;class mi extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=oi,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jo,this.blendDst=Yo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const oa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xe={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function Os(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Se.workingColorSpace){if(t=wl(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Os(a,s,t+1/3),this.g=Os(a,s,t),this.b=Os(a,s,t-1/3)}return Se.toWorkingColorSpace(this,i),this}setStyle(t,e=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Se.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Se.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,f,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Se.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Se.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=oa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Se.fromWorkingColorSpace(pe.copy(this),t),Ie(pe.r*255,0,255)<<16^Ie(pe.g*255,0,255)<<8^Ie(pe.b*255,0,255)<<0}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(pe.copy(this),e);const n=pe.r,i=pe.g,s=pe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=f<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=f,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=sn){Se.fromWorkingColorSpace(pe.copy(this),t);const e=pe.r,n=pe.g,i=pe.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(Xe),Xe.h+=t,Xe.s+=e,Xe.l+=n,this.setHSL(Xe.h,Xe.s,Xe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xe),t.getHSL(Yi);const n=Ts(Xe.h,Yi.h,e),i=Ts(Xe.s,Yi.s,e),s=Ts(Xe.l,Yi.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new Ut;Ut.NAMES=oa;class dr extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const te=new k,Zi=new Vt;class xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zi.fromBufferAttribute(this,e),Zi.applyMatrix3(t),this.setXY(e,Zi.x,Zi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix3(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix4(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyNormalMatrix(t),this.setXYZ(e,te.x,te.y,te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.transformDirection(t),this.setXYZ(e,te.x,te.y,te.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class aa extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class la extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ke extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vl=0;const Ne=new ue,Gs=new ve,Kn=new k,Re=new On,Si=new On,ae=new k;class ze extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ta(t)?la:aa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return Gs.lookAt(t),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ke(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Re.setFromBufferAttribute(s),this.morphTargetsRelative?(ae.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(ae),ae.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(ae)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(ae.addVectors(Re.min,Si.min),Re.expandByPoint(ae),ae.addVectors(Re.max,Si.max),Re.expandByPoint(ae)):(Re.expandByPoint(Si.min),Re.expandByPoint(Si.max))}Re.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)ae.fromBufferAttribute(o,l),c&&(Kn.fromBufferAttribute(t,l),ae.add(Kn)),i=Math.max(i,n.distanceToSquared(ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],f=[];for(let R=0;R<o;R++)l[R]=new k,f[R]=new k;const h=new k,u=new k,m=new k,g=new Vt,d=new Vt,p=new Vt,_=new k,S=new k;function M(R,B,D){h.fromArray(i,R*3),u.fromArray(i,B*3),m.fromArray(i,D*3),g.fromArray(a,R*2),d.fromArray(a,B*2),p.fromArray(a,D*2),u.sub(h),m.sub(h),d.sub(g),p.sub(g);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(C),S.copy(m).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(C),l[R].add(_),l[B].add(_),l[D].add(_),f[R].add(S),f[B].add(S),f[D].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let R=0,B=x.length;R<B;++R){const D=x[R],C=D.start,A=D.count;for(let O=C,$=C+A;O<$;O+=3)M(n[O+0],n[O+1],n[O+2])}const b=new k,L=new k,P=new k,v=new k;function w(R){P.fromArray(s,R*3),v.copy(P);const B=l[R];b.copy(B),b.sub(P.multiplyScalar(P.dot(B))).normalize(),L.crossVectors(v,B);const C=L.dot(f[R])<0?-1:1;c[R*4]=b.x,c[R*4+1]=b.y,c[R*4+2]=b.z,c[R*4+3]=C}for(let R=0,B=x.length;R<B;++R){const D=x[R],C=D.start,A=D.count;for(let O=C,$=C+A;O<$;O+=3)w(n[O+0]),w(n[O+1]),w(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new k,s=new k,a=new k,o=new k,c=new k,l=new k,f=new k,h=new k;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),d=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,d),a.fromBufferAttribute(e,p),f.subVectors(a,s),h.subVectors(i,s),f.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,p),o.add(f),c.add(f),l.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,s),h.subVectors(i,s),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ae.fromBufferAttribute(t,e),ae.normalize(),t.setXYZ(e,ae.x,ae.y,ae.z)}toNonIndexed(){function t(o,c){const l=o.array,f=o.itemSize,h=o.normalized,u=new l.constructor(c.length*f);let m=0,g=0;for(let d=0,p=c.length;d<p;d++){o.isInterleavedBufferAttribute?m=c[d]*o.data.stride+o.offset:m=c[d]*f;for(let _=0;_<f;_++)u[g++]=l[m++]}return new xe(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,h=l.length;f<h;f++){const u=l[f],m=t(u,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let h=0,u=l.length;h<u;h++){const m=l[h];f.push(m.toJSON(t.data))}f.length>0&&(i[c]=f,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const f=i[l];this.setAttribute(l,f.clone(e))}const s=t.morphAttributes;for(const l in s){const f=[],h=s[l];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,f=a.length;l<f;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fo=new ue,nn=new sa,Ji=new hs,po=new k,bi=new k,wi=new k,Ti=new k,Vs=new k,Ki=new k,Qi=new Vt,ts=new Vt,es=new Vt,Hs=new k,ns=new k;class Je extends ve{constructor(t=new ze,e=new dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ki.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],h=s[c];f!==0&&(Vs.fromBufferAttribute(h,t),a?Ki.addScaledVector(Vs,f):Ki.addScaledVector(Vs.sub(e),f))}e.add(Ki)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(s),nn.copy(t.ray).recast(t.near),Ji.containsPoint(nn.origin)===!1&&(nn.intersectSphere(Ji,po)===null||nn.origin.distanceToSquared(po)>(t.far-t.near)**2))||(fo.copy(s).invert(),nn.copy(t.ray).applyMatrix4(fo),n.boundingBox!==null&&nn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.attributes.uv,f=n.attributes.uv2,h=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,u.start),S=Math.min(o.count,Math.min(d.start+d.count,u.start+u.count));for(let M=_,x=S;M<x;M+=3){const b=o.getX(M),L=o.getX(M+1),P=o.getX(M+2);a=is(this,p,t,nn,l,f,b,L,P),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=d.materialIndex,e.push(a))}}else{const m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let d=m,p=g;d<p;d+=3){const _=o.getX(d),S=o.getX(d+1),M=o.getX(d+2);a=is(this,i,t,nn,l,f,_,S,M),a&&(a.faceIndex=Math.floor(d/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,u.start),S=Math.min(c.count,Math.min(d.start+d.count,u.start+u.count));for(let M=_,x=S;M<x;M+=3){const b=M,L=M+1,P=M+2;a=is(this,p,t,nn,l,f,b,L,P),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=d.materialIndex,e.push(a))}}else{const m=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let d=m,p=g;d<p;d+=3){const _=d,S=d+1,M=d+2;a=is(this,i,t,nn,l,f,_,S,M),a&&(a.faceIndex=Math.floor(d/3),e.push(a))}}}}function Hl(r,t,e,n,i,s,a,o){let c;if(t.side===ke?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===on,o),c===null)return null;ns.copy(o),ns.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(ns);return l<e.near||l>e.far?null:{distance:l,point:ns.clone(),object:r}}function is(r,t,e,n,i,s,a,o,c){r.getVertexPosition(a,bi),r.getVertexPosition(o,wi),r.getVertexPosition(c,Ti);const l=Hl(r,t,e,n,bi,wi,Ti,Hs);if(l){i&&(Qi.fromBufferAttribute(i,a),ts.fromBufferAttribute(i,o),es.fromBufferAttribute(i,c),l.uv=dn.getUV(Hs,bi,wi,Ti,Qi,ts,es,new Vt)),s&&(Qi.fromBufferAttribute(s,a),ts.fromBufferAttribute(s,o),es.fromBufferAttribute(s,c),l.uv2=dn.getUV(Hs,bi,wi,Ti,Qi,ts,es,new Vt));const f={a,b:o,c,normal:new k,materialIndex:0};dn.getNormal(bi,wi,Ti,f.normal),l.face=f}return l}class Gi extends ze{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],h=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(h,2));function g(d,p,_,S,M,x,b,L,P,v,w){const R=x/P,B=b/v,D=x/2,C=b/2,A=L/2,O=P+1,$=v+1;let J=0,X=0;const K=new k;for(let j=0;j<$;j++){const dt=j*B-C;for(let N=0;N<O;N++){const Y=N*R-D;K[d]=Y*S,K[p]=dt*M,K[_]=A,l.push(K.x,K.y,K.z),K[d]=0,K[p]=0,K[_]=L>0?1:-1,f.push(K.x,K.y,K.z),h.push(N/P),h.push(1-j/v),J+=1}}for(let j=0;j<v;j++)for(let dt=0;dt<P;dt++){const N=u+dt+O*j,Y=u+dt+O*(j+1),Q=u+(dt+1)+O*(j+1),z=u+(dt+1)+O*j;c.push(N,Y,z),c.push(Y,Q,z),X+=6}o.addGroup(m,X,w),m+=X,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(r){const t={};for(let e=0;e<r.length;e++){const n=fi(r[e]);for(const i in n)t[i]=n[i]}return t}function Wl(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ca(r){return r.getRenderTarget()===null&&r.outputEncoding===Wt?sn:Fi}const Xl={clone:fi,merge:Te};var ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$l=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ql,this.fragmentShader=$l,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fi(t.uniforms),this.uniformsGroups=Wl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ua extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oe extends ua{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=-90,ti=1;class jl extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Oe(Qn,ti,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Oe(Qn,ti,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Oe(Qn,ti,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Oe(Qn,ti,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Oe(Qn,ti,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Oe(Qn,ti,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,c,l]=this.children,f=t.getRenderTarget(),h=t.toneMapping,u=t.xr.enabled;t.toneMapping=mn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(f),t.toneMapping=h,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class ha extends Ae{constructor(t,e,n,i,s,a,o,c,l,f){t=t!==void 0?t:[],e=e!==void 0?e:ci,super(t,e,n,i,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yl extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ha(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Be}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gi(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:wn});s.uniforms.tEquirect.value=e;const a=new Je(i,s),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=Be),new jl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Ws=new k,Zl=new k,Jl=new Ee;class Dn{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ws.subVectors(n,e).cross(Zl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ws),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jl.getNormalMatrix(t),i=this.coplanarPoint(Ws).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new hs,ss=new k;class fa{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,s=new Dn,a=new Dn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],f=n[6],h=n[7],u=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],S=n[14],M=n[15];return e[0].setComponents(o-i,h-c,d-u,M-p).normalize(),e[1].setComponents(o+i,h+c,d+u,M+p).normalize(),e[2].setComponents(o+s,h+l,d+m,M+_).normalize(),e[3].setComponents(o-s,h-l,d-m,M-_).normalize(),e[4].setComponents(o-a,h-f,d-g,M-S).normalize(),e[5].setComponents(o+a,h+f,d+g,M+S).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ss.x=i.normal.x>0?t.max.x:t.min.x,ss.y=i.normal.y>0?t.max.y:t.min.y,ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function da(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Kl(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,f){const h=l.array,u=l.usage,m=r.createBuffer();r.bindBuffer(f,m),r.bufferData(f,h,u),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,f,h){const u=f.array,m=f.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,u):(e?r.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(h,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f&&(r.deleteBuffer(f.buffer),n.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,f)):h.version<l.version&&(s(h.buffer,l,f),h.version=l.version)}return{get:a,remove:o,update:c}}class pr extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,f=c+1,h=t/o,u=e/c,m=[],g=[],d=[],p=[];for(let _=0;_<f;_++){const S=_*u-a;for(let M=0;M<l;M++){const x=M*h-s;g.push(x,-S,0),d.push(0,0,1),p.push(M/o),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let S=0;S<o;S++){const M=S+l*_,x=S+l*(_+1),b=S+1+l*(_+1),L=S+1+l*_;m.push(M,x,L),m.push(x,b,L)}this.setIndex(m),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ql=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,tc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ec=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ic=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rc="vec3 transformed = vec3( position );",oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ac=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,lc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,vc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,bc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ec=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ac=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ic=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$c=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,jc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,au=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,du=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_u=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Mu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,wu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Au=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ru=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Fu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ou=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Wu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$u=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ju=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Yu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Zu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ku=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,th=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ih=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ch=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ph=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ah=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ch=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ph=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lt={alphamap_fragment:Ql,alphamap_pars_fragment:tc,alphatest_fragment:ec,alphatest_pars_fragment:nc,aomap_fragment:ic,aomap_pars_fragment:sc,begin_vertex:rc,beginnormal_vertex:oc,bsdfs:ac,iridescence_fragment:lc,bumpmap_pars_fragment:cc,clipping_planes_fragment:uc,clipping_planes_pars_fragment:hc,clipping_planes_pars_vertex:fc,clipping_planes_vertex:dc,color_fragment:pc,color_pars_fragment:mc,color_pars_vertex:gc,color_vertex:_c,common:xc,cube_uv_reflection_fragment:vc,defaultnormal_vertex:Mc,displacementmap_pars_vertex:yc,displacementmap_vertex:Sc,emissivemap_fragment:bc,emissivemap_pars_fragment:wc,encodings_fragment:Tc,encodings_pars_fragment:Ec,envmap_fragment:Ac,envmap_common_pars_fragment:Cc,envmap_pars_fragment:Lc,envmap_pars_vertex:Pc,envmap_physical_pars_fragment:Vc,envmap_vertex:Dc,fog_vertex:Rc,fog_pars_vertex:Ic,fog_fragment:kc,fog_pars_fragment:zc,gradientmap_pars_fragment:Fc,lightmap_fragment:Nc,lightmap_pars_fragment:Uc,lights_lambert_fragment:Bc,lights_lambert_pars_fragment:Oc,lights_pars_begin:Gc,lights_toon_fragment:Hc,lights_toon_pars_fragment:Wc,lights_phong_fragment:Xc,lights_phong_pars_fragment:qc,lights_physical_fragment:$c,lights_physical_pars_fragment:jc,lights_fragment_begin:Yc,lights_fragment_maps:Zc,lights_fragment_end:Jc,logdepthbuf_fragment:Kc,logdepthbuf_pars_fragment:Qc,logdepthbuf_pars_vertex:tu,logdepthbuf_vertex:eu,map_fragment:nu,map_pars_fragment:iu,map_particle_fragment:su,map_particle_pars_fragment:ru,metalnessmap_fragment:ou,metalnessmap_pars_fragment:au,morphcolor_vertex:lu,morphnormal_vertex:cu,morphtarget_pars_vertex:uu,morphtarget_vertex:hu,normal_fragment_begin:fu,normal_fragment_maps:du,normal_pars_fragment:pu,normal_pars_vertex:mu,normal_vertex:gu,normalmap_pars_fragment:_u,clearcoat_normal_fragment_begin:xu,clearcoat_normal_fragment_maps:vu,clearcoat_pars_fragment:Mu,iridescence_pars_fragment:yu,output_fragment:Su,packing:bu,premultiplied_alpha_fragment:wu,project_vertex:Tu,dithering_fragment:Eu,dithering_pars_fragment:Au,roughnessmap_fragment:Cu,roughnessmap_pars_fragment:Lu,shadowmap_pars_fragment:Pu,shadowmap_pars_vertex:Du,shadowmap_vertex:Ru,shadowmask_pars_fragment:Iu,skinbase_vertex:ku,skinning_pars_vertex:zu,skinning_vertex:Fu,skinnormal_vertex:Nu,specularmap_fragment:Uu,specularmap_pars_fragment:Bu,tonemapping_fragment:Ou,tonemapping_pars_fragment:Gu,transmission_fragment:Vu,transmission_pars_fragment:Hu,uv_pars_fragment:Wu,uv_pars_vertex:Xu,uv_vertex:qu,uv2_pars_fragment:$u,uv2_pars_vertex:ju,uv2_vertex:Yu,worldpos_vertex:Zu,background_vert:Ju,background_frag:Ku,backgroundCube_vert:Qu,backgroundCube_frag:th,cube_vert:eh,cube_frag:nh,depth_vert:ih,depth_frag:sh,distanceRGBA_vert:rh,distanceRGBA_frag:oh,equirect_vert:ah,equirect_frag:lh,linedashed_vert:ch,linedashed_frag:uh,meshbasic_vert:hh,meshbasic_frag:fh,meshlambert_vert:dh,meshlambert_frag:ph,meshmatcap_vert:mh,meshmatcap_frag:gh,meshnormal_vert:_h,meshnormal_frag:xh,meshphong_vert:vh,meshphong_frag:Mh,meshphysical_vert:yh,meshphysical_frag:Sh,meshtoon_vert:bh,meshtoon_frag:wh,points_vert:Th,points_frag:Eh,shadow_vert:Ah,shadow_frag:Ch,sprite_vert:Lh,sprite_frag:Ph},nt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ee},uv2Transform:{value:new Ee},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ee}}},rn={basic:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Te([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Te([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Te([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Te([nt.points,nt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Te([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Te([nt.common,nt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Te([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Te([nt.sprite,nt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Te([nt.common,nt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Te([nt.lights,nt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};rn.physical={uniforms:Te([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const rs={r:0,b:0,g:0};function Dh(r,t,e,n,i,s,a){const o=new Ut(0);let c=s===!0?0:1,l,f,h=null,u=0,m=null;function g(p,_){let S=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M));const x=r.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(M=null),M===null?d(o,c):M&&M.isColor&&(d(M,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===us)?(f===void 0&&(f=new Je(new Gi(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:fi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,P,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=M.encoding!==Wt,(h!==M||u!==M.version||m!==r.toneMapping)&&(f.material.needsUpdate=!0,h=M,u=M.version,m=r.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Je(new pr(2,2),new Gn({name:"BackgroundMaterial",uniforms:fi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=M.encoding!==Wt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,m=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function d(p,_){p.getRGB(rs,ca(r)),n.buffers.color.setClear(rs.r,rs.g,rs.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(p,_=1){o.set(p),c=_,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,d(o,c)},render:g}}function Rh(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let l=c,f=!1;function h(A,O,$,J,X){let K=!1;if(a){const j=d(J,$,O);l!==j&&(l=j,m(l.object)),K=_(A,J,$,X),K&&S(A,J,$,X)}else{const j=O.wireframe===!0;(l.geometry!==J.id||l.program!==$.id||l.wireframe!==j)&&(l.geometry=J.id,l.program=$.id,l.wireframe=j,K=!0)}X!==null&&e.update(X,34963),(K||f)&&(f=!1,v(A,O,$,J),X!==null&&r.bindBuffer(34963,e.get(X).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(A){return n.isWebGL2?r.bindVertexArray(A):s.bindVertexArrayOES(A)}function g(A){return n.isWebGL2?r.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function d(A,O,$){const J=$.wireframe===!0;let X=o[A.id];X===void 0&&(X={},o[A.id]=X);let K=X[O.id];K===void 0&&(K={},X[O.id]=K);let j=K[J];return j===void 0&&(j=p(u()),K[J]=j),j}function p(A){const O=[],$=[],J=[];for(let X=0;X<i;X++)O[X]=0,$[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:J,object:A,attributes:{},index:null}}function _(A,O,$,J){const X=l.attributes,K=O.attributes;let j=0;const dt=$.getAttributes();for(const N in dt)if(dt[N].location>=0){const Q=X[N];let z=K[N];if(z===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(z=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(z=A.instanceColor)),Q===void 0||Q.attribute!==z||z&&Q.data!==z.data)return!0;j++}return l.attributesNum!==j||l.index!==J}function S(A,O,$,J){const X={},K=O.attributes;let j=0;const dt=$.getAttributes();for(const N in dt)if(dt[N].location>=0){let Q=K[N];Q===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor));const z={};z.attribute=Q,Q&&Q.data&&(z.data=Q.data),X[N]=z,j++}l.attributes=X,l.attributesNum=j,l.index=J}function M(){const A=l.newAttributes;for(let O=0,$=A.length;O<$;O++)A[O]=0}function x(A){b(A,0)}function b(A,O){const $=l.newAttributes,J=l.enabledAttributes,X=l.attributeDivisors;$[A]=1,J[A]===0&&(r.enableVertexAttribArray(A),J[A]=1),X[A]!==O&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,O),X[A]=O)}function L(){const A=l.newAttributes,O=l.enabledAttributes;for(let $=0,J=O.length;$<J;$++)O[$]!==A[$]&&(r.disableVertexAttribArray($),O[$]=0)}function P(A,O,$,J,X,K){n.isWebGL2===!0&&($===5124||$===5125)?r.vertexAttribIPointer(A,O,$,X,K):r.vertexAttribPointer(A,O,$,J,X,K)}function v(A,O,$,J){if(n.isWebGL2===!1&&(A.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const X=J.attributes,K=$.getAttributes(),j=O.defaultAttributeValues;for(const dt in K){const N=K[dt];if(N.location>=0){let Y=X[dt];if(Y===void 0&&(dt==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),dt==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor)),Y!==void 0){const Q=Y.normalized,z=Y.itemSize,ct=e.get(Y);if(ct===void 0)continue;const at=ct.buffer,ut=ct.type,ht=ct.bytesPerElement;if(Y.isInterleavedBufferAttribute){const vt=Y.data,Ct=vt.stride,mt=Y.offset;if(vt.isInstancedInterleavedBuffer){for(let lt=0;lt<N.locationSize;lt++)b(N.location+lt,vt.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let lt=0;lt<N.locationSize;lt++)x(N.location+lt);r.bindBuffer(34962,at);for(let lt=0;lt<N.locationSize;lt++)P(N.location+lt,z/N.locationSize,ut,Q,Ct*ht,(mt+z/N.locationSize*lt)*ht)}else{if(Y.isInstancedBufferAttribute){for(let vt=0;vt<N.locationSize;vt++)b(N.location+vt,Y.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let vt=0;vt<N.locationSize;vt++)x(N.location+vt);r.bindBuffer(34962,at);for(let vt=0;vt<N.locationSize;vt++)P(N.location+vt,z/N.locationSize,ut,Q,z*ht,z/N.locationSize*vt*ht)}}else if(j!==void 0){const Q=j[dt];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(N.location,Q);break;case 3:r.vertexAttrib3fv(N.location,Q);break;case 4:r.vertexAttrib4fv(N.location,Q);break;default:r.vertexAttrib1fv(N.location,Q)}}}}L()}function w(){D();for(const A in o){const O=o[A];for(const $ in O){const J=O[$];for(const X in J)g(J[X].object),delete J[X];delete O[$]}delete o[A]}}function R(A){if(o[A.id]===void 0)return;const O=o[A.id];for(const $ in O){const J=O[$];for(const X in J)g(J[X].object),delete J[X];delete O[$]}delete o[A.id]}function B(A){for(const O in o){const $=o[O];if($[A.id]===void 0)continue;const J=$[A.id];for(const X in J)g(J[X].object),delete J[X];delete $[A.id]}}function D(){C(),f=!0,l!==c&&(l=c,m(l.object))}function C(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:D,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:x,disableUnusedAttributes:L}}function Ih(r,t,e,n){const i=n.isWebGL2;let s;function a(l){s=l}function o(l,f){r.drawArrays(s,l,f),e.update(f,s,1)}function c(l,f,h){if(h===0)return;let u,m;if(i)u=r,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,f,h),e.update(f,s,h)}this.setMode=a,this.render=o,this.renderInstances=c}function kh(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let o=e.precision!==void 0?e.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,h=r.getParameter(34930),u=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),S=r.getParameter(36349),M=u>0,x=a||t.has("OES_texture_float"),b=M&&x,L=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:L}}function zh(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Dn,o=new Ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||i;return i=u,n=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?f(null):l();else{const S=s?0:n,M=S*4;let x=_.clippingState||null;c.value=x,x=f(g,u,M,m);for(let b=0;b!==M;++b)x[b]=e[b];_.clippingState=x,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=c.value,g!==!0||p===null){const _=m+d*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<_)&&(p=new Float32Array(_));for(let M=0,x=m;M!==d;++M,x+=4)a.copy(h[M]).applyMatrix4(S,o),a.normal.toArray(p,x),p[x+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function Fh(r){let t=new WeakMap;function e(a,o){return o===Ks?a.mapping=ci:o===Qs&&(a.mapping=ui),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ks||o===Qs)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Yl(c.height/2);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Nh extends ua{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ri=4,mo=[.125,.215,.35,.446,.526,.582],In=20,Xs=new Nh,go=new Ut;let qs=null;const Rn=(1+Math.sqrt(5))/2,ni=1/Rn,_o=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Rn,ni),new k(0,Rn,-ni),new k(ni,0,Rn),new k(-ni,0,Rn),new k(Rn,ni,0),new k(-Rn,ni,0)];class xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){qs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qs),t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:zi,format:Ze,encoding:Un,depthBuffer:!1},i=vo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uh(s)),this._blurMaterial=Bh(s,t,e)}return i}_compileMaterial(t){const e=new Je(this._lodPlanes[0],t);this._renderer.compile(e,Xs)}_sceneToCubeUV(t,e,n,i){const o=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(go),f.toneMapping=mn,f.autoClear=!1;const m=new dr({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Je(new Gi,m);let d=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(go),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):S===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));const M=this._cubeSize;os(i,S*M,_>2?M:0,M,M),f.setRenderTarget(i),d&&f.render(g,o),f.render(t,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=u,f.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ci||t.mapping===ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Xs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=_o[(i-1)%_o.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Je(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*In-1),d=s/g,p=isFinite(s)?1+Math.floor(f*d):In;p>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${In}`);const _=[];let S=0;for(let P=0;P<In;++P){const v=P/d,w=Math.exp(-v*v/2);_.push(w),P===0?S+=w:P<p&&(S+=2*w)}for(let P=0;P<_.length;P++)_[P]=_[P]/S;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=_,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const x=this._sizeLods[i],b=3*x*(i>M-ri?i-M+ri:0),L=4*(this._cubeSize-x);os(e,b,L,3*x,2*x),c.setRenderTarget(e),c.render(h,Xs)}}function Uh(r){const t=[],e=[],n=[];let i=r;const s=r-ri+1+mo.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-ri?c=mo[a-r+ri-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,h=1+l,u=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,g=6,d=3,p=2,_=1,S=new Float32Array(d*g*m),M=new Float32Array(p*g*m),x=new Float32Array(_*g*m);for(let L=0;L<m;L++){const P=L%3*2/3-1,v=L>2?0:-1,w=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];S.set(w,d*g*L),M.set(u,p*g*L);const R=[L,L,L,L,L,L];x.set(R,_*g*L)}const b=new ze;b.setAttribute("position",new xe(S,d)),b.setAttribute("uv",new xe(M,p)),b.setAttribute("faceIndex",new xe(x,_)),t.push(b),i>ri&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vo(r,t,e){const n=new Bn(r,t,e);return n.texture.mapping=us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Bh(r,t,e){const n=new Float32Array(In),i=new k(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Mo(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function yo(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function mr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Oh(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ks||c===Qs,f=c===ci||c===ui;if(l||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new xo(r)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||f&&h&&i(h)){e===null&&(e=new xo(r));const u=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Gh(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vh(r,t,e,n){const i={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(h){const u=h.attributes;for(const g in u)t.update(u[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function l(h){const u=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let M=0,x=S.length;M<x;M+=3){const b=S[M+0],L=S[M+1],P=S[M+2];u.push(b,L,L,P,P,b)}}else{const S=g.array;d=g.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const b=M+0,L=M+1,P=M+2;u.push(b,L,L,P,P,b)}}const p=new(ta(u)?la:aa)(u,1);p.version=d;const _=s.get(h);_&&t.remove(_),s.set(h,p)}function f(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function Hh(r,t,e,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,c;function l(u){o=u.type,c=u.bytesPerElement}function f(u,m){r.drawElements(s,m,o,u*c),e.update(m,s,1)}function h(u,m,g){if(g===0)return;let d,p;if(i)d=r,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,o,u*c,g),e.update(m,s,g)}this.setMode=a,this.setIndex=l,this.render=f,this.renderInstances=h}function Wh(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Xh(r,t){return r[0]-t[0]}function qh(r,t){return Math.abs(t[1])-Math.abs(r[1])}function $h(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new fe,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,f,h){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,d=g!==void 0?g.length:0;let p=s.get(f);if(p===void 0||p.count!==d){let O=function(){C.dispose(),s.delete(f),f.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const M=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,L=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],v=f.morphAttributes.color||[];let w=0;M===!0&&(w=1),x===!0&&(w=2),b===!0&&(w=3);let R=f.attributes.position.count*w,B=1;R>t.maxTextureSize&&(B=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const D=new Float32Array(R*B*4*d),C=new ia(D,R,B,d);C.type=zn,C.needsUpdate=!0;const A=w*4;for(let $=0;$<d;$++){const J=L[$],X=P[$],K=v[$],j=R*B*4*$;for(let dt=0;dt<J.count;dt++){const N=dt*A;M===!0&&(a.fromBufferAttribute(J,dt),D[j+N+0]=a.x,D[j+N+1]=a.y,D[j+N+2]=a.z,D[j+N+3]=0),x===!0&&(a.fromBufferAttribute(X,dt),D[j+N+4]=a.x,D[j+N+5]=a.y,D[j+N+6]=a.z,D[j+N+7]=0),b===!0&&(a.fromBufferAttribute(K,dt),D[j+N+8]=a.x,D[j+N+9]=a.y,D[j+N+10]=a.z,D[j+N+11]=K.itemSize===4?a.w:1)}}p={count:d,texture:C,size:new Vt(R,B)},s.set(f,p),f.addEventListener("dispose",O)}let _=0;for(let M=0;M<u.length;M++)_+=u[M];const S=f.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",u),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let d=n[f.id];if(d===void 0||d.length!==g){d=[];for(let x=0;x<g;x++)d[x]=[x,0];n[f.id]=d}for(let x=0;x<g;x++){const b=d[x];b[0]=x,b[1]=u[x]}d.sort(qh);for(let x=0;x<8;x++)x<g&&d[x][1]?(o[x][0]=d[x][0],o[x][1]=d[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Xh);const p=f.morphAttributes.position,_=f.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const b=o[x],L=b[0],P=b[1];L!==Number.MAX_SAFE_INTEGER&&P?(p&&f.getAttribute("morphTarget"+x)!==p[L]&&f.setAttribute("morphTarget"+x,p[L]),_&&f.getAttribute("morphNormal"+x)!==_[L]&&f.setAttribute("morphNormal"+x,_[L]),i[x]=P,S+=P):(p&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),_&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),i[x]=0)}const M=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function jh(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,h=t.get(c,f);return i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const pa=new Ae,ma=new ia,ga=new Il,_a=new ha,So=[],bo=[],wo=new Float32Array(16),To=new Float32Array(9),Eo=new Float32Array(4);function gi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=So[i];if(s===void 0&&(s=new Float32Array(i),So[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ne(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function fs(r,t){let e=bo[t];e===void 0&&(e=new Int32Array(t),bo[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Yh(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Zh(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;r.uniform2fv(this.addr,t),ie(e,t)}}function Jh(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ne(e,t))return;r.uniform3fv(this.addr,t),ie(e,t)}}function Kh(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;r.uniform4fv(this.addr,t),ie(e,t)}}function Qh(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;Eo.set(n),r.uniformMatrix2fv(this.addr,!1,Eo),ie(e,n)}}function tf(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;To.set(n),r.uniformMatrix3fv(this.addr,!1,To),ie(e,n)}}function ef(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;wo.set(n),r.uniformMatrix4fv(this.addr,!1,wo),ie(e,n)}}function nf(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function sf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;r.uniform2iv(this.addr,t),ie(e,t)}}function rf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;r.uniform3iv(this.addr,t),ie(e,t)}}function of(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;r.uniform4iv(this.addr,t),ie(e,t)}}function af(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function lf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;r.uniform2uiv(this.addr,t),ie(e,t)}}function cf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;r.uniform3uiv(this.addr,t),ie(e,t)}}function uf(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;r.uniform4uiv(this.addr,t),ie(e,t)}}function hf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||pa,i)}function ff(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ga,i)}function df(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_a,i)}function pf(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ma,i)}function mf(r){switch(r){case 5126:return Yh;case 35664:return Zh;case 35665:return Jh;case 35666:return Kh;case 35674:return Qh;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return of;case 5125:return af;case 36294:return lf;case 36295:return cf;case 36296:return uf;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return pf}}function gf(r,t){r.uniform1fv(this.addr,t)}function _f(r,t){const e=gi(t,this.size,2);r.uniform2fv(this.addr,e)}function xf(r,t){const e=gi(t,this.size,3);r.uniform3fv(this.addr,e)}function vf(r,t){const e=gi(t,this.size,4);r.uniform4fv(this.addr,e)}function Mf(r,t){const e=gi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function yf(r,t){const e=gi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Sf(r,t){const e=gi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function bf(r,t){r.uniform1iv(this.addr,t)}function wf(r,t){r.uniform2iv(this.addr,t)}function Tf(r,t){r.uniform3iv(this.addr,t)}function Ef(r,t){r.uniform4iv(this.addr,t)}function Af(r,t){r.uniform1uiv(this.addr,t)}function Cf(r,t){r.uniform2uiv(this.addr,t)}function Lf(r,t){r.uniform3uiv(this.addr,t)}function Pf(r,t){r.uniform4uiv(this.addr,t)}function Df(r,t,e){const n=this.cache,i=t.length,s=fs(e,i);ne(n,s)||(r.uniform1iv(this.addr,s),ie(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||pa,s[a])}function Rf(r,t,e){const n=this.cache,i=t.length,s=fs(e,i);ne(n,s)||(r.uniform1iv(this.addr,s),ie(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ga,s[a])}function If(r,t,e){const n=this.cache,i=t.length,s=fs(e,i);ne(n,s)||(r.uniform1iv(this.addr,s),ie(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_a,s[a])}function kf(r,t,e){const n=this.cache,i=t.length,s=fs(e,i);ne(n,s)||(r.uniform1iv(this.addr,s),ie(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ma,s[a])}function zf(r){switch(r){case 5126:return gf;case 35664:return _f;case 35665:return xf;case 35666:return vf;case 35674:return Mf;case 35675:return yf;case 35676:return Sf;case 5124:case 35670:return bf;case 35667:case 35671:return wf;case 35668:case 35672:return Tf;case 35669:case 35673:return Ef;case 5125:return Af;case 36294:return Cf;case 36295:return Lf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Df;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return kf}}class Ff{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=mf(e.type)}}class Nf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=zf(e.type)}}class Uf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const $s=/(\w+)(\])?(\[|\.)?/g;function Ao(r,t){r.seq.push(t),r.map[t.id]=t}function Bf(r,t,e){const n=r.name,i=n.length;for($s.lastIndex=0;;){const s=$s.exec(n),a=$s.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ao(e,l===void 0?new Ff(o,r,t):new Nf(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new Uf(o),Ao(e,h)),e=h}}}class ls{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Bf(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Co(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Of=0;function Gf(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Vf(r){switch(r){case Un:return["Linear","( value )"];case Wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Lo(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Gf(r.getShaderSource(t),a)}else return i}function Hf(r,t){const e=Vf(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Wf(r,t){let e;switch(t){case Qa:e="Linear";break;case tl:e="Reinhard";break;case el:e="OptimizedCineon";break;case nl:e="ACESFilmic";break;case il:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function qf(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $f(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Li(r){return r!==""}function Po(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Do(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ir(r){return r.replace(jf,Yf)}function Yf(r,t){const e=Lt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ir(e)}const Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ro(r){return r.replace(Zf,Jf)}function Jf(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Io(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kf(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Da?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function Qf(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ci:case ui:t="ENVMAP_TYPE_CUBE";break;case us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function td(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ui:t="ENVMAP_MODE_REFRACTION";break}return t}function ed(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fr:t="ENVMAP_BLENDING_MULTIPLY";break;case Ja:t="ENVMAP_BLENDING_MIX";break;case Ka:t="ENVMAP_BLENDING_ADD";break}return t}function nd(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function id(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Kf(e),l=Qf(e),f=td(e),h=ed(e),u=nd(e),m=e.isWebGL2?"":Xf(e),g=qf(s),d=i.createProgram();let p,_,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Li).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Li).join(`
`),_.length>0&&(_+=`
`)):(p=[Io(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),_=[m,Io(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==mn?Wf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.encodings_pars_fragment,Hf("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Li).join(`
`)),a=ir(a),a=Po(a,e),a=Do(a,e),o=ir(o),o=Po(o,e),o=Do(o,e),a=Ro(a),o=Ro(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===to?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===to?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=S+p+a,x=S+_+o,b=Co(i,35633,M),L=Co(i,35632,x);if(i.attachShader(d,b),i.attachShader(d,L),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),R=i.getShaderInfoLog(b).trim(),B=i.getShaderInfoLog(L).trim();let D=!0,C=!0;if(i.getProgramParameter(d,35714)===!1){D=!1;const A=Lo(i,b,"vertex"),O=Lo(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+A+`
`+O)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(R===""||B==="")&&(C=!1);C&&(this.diagnostics={runnable:D,programLog:w,vertexShader:{log:R,prefix:p},fragmentShader:{log:B,prefix:_}})}i.deleteShader(b),i.deleteShader(L);let P;this.getUniforms=function(){return P===void 0&&(P=new ls(i,d)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=$f(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=Of++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=L,this}let sd=0;class rd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new od(t),e.set(t,n)),n}}class od{constructor(t){this.id=sd++,this.code=t,this.usedTimes=0}}function ad(r,t,e,n,i,s,a){const o=new ra,c=new rd,l=[],f=i.isWebGL2,h=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,R,B,D){const C=B.fog,A=D.geometry,O=v.isMeshStandardMaterial?B.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||O),J=$&&$.mapping===us?$.image.height:null,X=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const K=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,j=K!==void 0?K.length:0;let dt=0;A.morphAttributes.position!==void 0&&(dt=1),A.morphAttributes.normal!==void 0&&(dt=2),A.morphAttributes.color!==void 0&&(dt=3);let N,Y,Q,z;if(X){const Ct=rn[X];N=Ct.vertexShader,Y=Ct.fragmentShader}else N=v.vertexShader,Y=v.fragmentShader,c.update(v),Q=c.getVertexShaderID(v),z=c.getFragmentShaderID(v);const ct=r.getRenderTarget(),at=v.alphaTest>0,ut=v.clearcoat>0,ht=v.iridescence>0;return{isWebGL2:f,shaderID:X,shaderName:v.type,vertexShader:N,fragmentShader:Y,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:D.isInstancedMesh===!0,instancingColor:D.isInstancedMesh===!0&&D.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ct===null?r.outputEncoding:ct.isXRRenderTarget===!0?ct.texture.encoding:Un,map:!!v.map,matcap:!!v.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:J,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Sl,tangentSpaceNormalMap:v.normalMapType===Ko,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Wt,clearcoat:ut,clearcoatMap:ut&&!!v.clearcoatMap,clearcoatRoughnessMap:ut&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ut&&!!v.clearcoatNormalMap,iridescence:ht,iridescenceMap:ht&&!!v.iridescenceMap,iridescenceThicknessMap:ht&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===oi,alphaMap:!!v.alphaMap,alphaTest:at,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!A.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!C,useFog:v.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:dt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:mn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pn,flipSided:v.side===ke,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(_(w,v),S(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),v.push(o.mask)}function M(v){const w=g[v.type];let R;if(w){const B=rn[w];R=Xl.clone(B.uniforms)}else R=v.uniforms;return R}function x(v,w){let R;for(let B=0,D=l.length;B<D;B++){const C=l[B];if(C.cacheKey===w){R=C,++R.usedTimes;break}}return R===void 0&&(R=new id(r,w,v,s),l.push(R)),R}function b(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function L(v){c.remove(v)}function P(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:M,acquireProgram:x,releaseProgram:b,releaseShaderCache:L,programs:l,dispose:P}}function ld(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function cd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ko(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zo(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,u,m,g,d,p){let _=r[t];return _===void 0?(_={id:h.id,object:h,geometry:u,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},r[t]=_):(_.id=h.id,_.object=h,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),t++,_}function o(h,u,m,g,d,p){const _=a(h,u,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(h,u,m,g,d,p){const _=a(h,u,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(h,u){e.length>1&&e.sort(h||cd),n.length>1&&n.sort(u||ko),i.length>1&&i.sort(u||ko)}function f(){for(let h=t,u=r.length;h<u;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:f,sort:l}}function ud(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new zo,r.set(n,[a])):i>=s.length?(a=new zo,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function hd(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Ut};break;case"SpotLight":e={position:new k,direction:new k,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function fd(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let dd=0;function pd(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function md(r,t){const e=new hd,n=fd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new k);const s=new k,a=new ue,o=new ue;function c(f,h){let u=0,m=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,p=0,_=0,S=0,M=0,x=0,b=0,L=0,P=0,v=0;f.sort(pd);const w=h===!0?Math.PI:1;for(let B=0,D=f.length;B<D;B++){const C=f[B],A=C.color,O=C.intensity,$=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=A.r*O*w,m+=A.g*O*w,g+=A.b*O*w;else if(C.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],O);else if(C.isDirectionalLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){const K=C.shadow,j=n.get(C);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=J,i.directionalShadowMatrix[d]=C.shadow.matrix,x++}i.directional[d]=X,d++}else if(C.isSpotLight){const X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(A).multiplyScalar(O*w),X.distance=$,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[_]=X;const K=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,K.updateMatrices(C),C.castShadow&&v++),i.spotLightMatrix[_]=K.matrix,C.castShadow){const j=n.get(C);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=J,L++}_++}else if(C.isRectAreaLight){const X=e.get(C);X.color.copy(A).multiplyScalar(O),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[S]=X,S++}else if(C.isPointLight){const X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*w),X.distance=C.distance,X.decay=C.decay,C.castShadow){const K=C.shadow,j=n.get(C);j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=C.shadow.matrix,b++}i.point[p]=X,p++}else if(C.isHemisphereLight){const X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(O*w),X.groundColor.copy(C.groundColor).multiplyScalar(O*w),i.hemi[M]=X,M++}}S>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==S||R.hemiLength!==M||R.numDirectionalShadows!==x||R.numPointShadows!==b||R.numSpotShadows!==L||R.numSpotMaps!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=S,i.point.length=p,i.hemi.length=M,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=L+P-v,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=v,R.directionalLength=d,R.pointLength=p,R.spotLength=_,R.rectAreaLength=S,R.hemiLength=M,R.numDirectionalShadows=x,R.numPointShadows=b,R.numSpotShadows=L,R.numSpotMaps=P,i.version=dd++)}function l(f,h){let u=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let S=0,M=f.length;S<M;S++){const x=f[S];if(x.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),u++}else if(x.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const b=i.rectArea[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),o.identity(),a.copy(x.matrixWorld),a.premultiply(_),o.extractRotation(a),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),d++}else if(x.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:i}}function Fo(r,t){const e=new md(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function gd(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let c;return o===void 0?(c=new Fo(r,t),e.set(s,[c])):a>=o.length?(c=new Fo(r,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class _d extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xd extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Md=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yd(r,t,e){let n=new fa;const i=new Vt,s=new Vt,a=new fe,o=new _d({depthPacking:yl}),c=new xd,l={},f=e.maxTextureSize,h={[on]:ke,[ke]:on,[pn]:pn},u=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:vd,fragmentShader:Md}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Je(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o,this.render=function(x,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const P=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),R=r.state;R.setBlending(wn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let B=0,D=x.length;B<D;B++){const C=x[B],A=C.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;i.copy(A.mapSize);const O=A.getFrameExtents();if(i.multiply(O),s.copy(A.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/O.x),i.x=s.x*O.x,A.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/O.y),i.y=s.y*O.y,A.mapSize.y=s.y)),A.map===null){const J=this.type!==Ci?{minFilter:he,magFilter:he}:{};A.map=new Bn(i.x,i.y,J),A.map.texture.name=C.name+".shadowMap",A.camera.updateProjectionMatrix()}r.setRenderTarget(A.map),r.clear();const $=A.getViewportCount();for(let J=0;J<$;J++){const X=A.getViewport(J);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),R.viewport(a),A.updateMatrices(C,J),n=A.getFrustum(),M(b,L,A.camera,C,this.type)}A.isPointLightShadow!==!0&&this.type===Ci&&_(A,L),A.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(P,v,w)};function _(x,b){const L=t.update(d);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Bn(i.x,i.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(b,null,L,u,d,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(b,null,L,m,d,null)}function S(x,b,L,P,v,w){let R=null;const B=L.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(B!==void 0)R=B;else if(R=L.isPointLight===!0?c:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=R.uuid,C=b.uuid;let A=l[D];A===void 0&&(A={},l[D]=A);let O=A[C];O===void 0&&(O=R.clone(),A[C]=O),R=O}return R.visible=b.visible,R.wireframe=b.wireframe,w===Ci?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:h[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,L.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(L.matrixWorld),R.nearDistance=P,R.farDistance=v),R}function M(x,b,L,P,v){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&v===Ci)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,x.matrixWorld);const B=t.update(x),D=x.material;if(Array.isArray(D)){const C=B.groups;for(let A=0,O=C.length;A<O;A++){const $=C[A],J=D[$.materialIndex];if(J&&J.visible){const X=S(x,J,P,L.near,L.far,v);r.renderBufferDirect(L,null,B,X,x,$)}}}else if(D.visible){const C=S(x,D,P,L.near,L.far,v);r.renderBufferDirect(L,null,B,C,x,null)}}const R=x.children;for(let B=0,D=R.length;B<D;B++)M(R[B],b,L,P,v)}}function Sd(r,t,e){const n=e.isWebGL2;function i(){let I=!1;const V=new fe;let Z=null;const rt=new fe(0,0,0,0);return{setMask:function(ft){Z!==ft&&!I&&(r.colorMask(ft,ft,ft,ft),Z=ft)},setLocked:function(ft){I=ft},setClear:function(ft,Ht,re,Me,tn){tn===!0&&(ft*=Me,Ht*=Me,re*=Me),V.set(ft,Ht,re,Me),rt.equals(V)===!1&&(r.clearColor(ft,Ht,re,Me),rt.copy(V))},reset:function(){I=!1,Z=null,rt.set(-1,0,0,0)}}}function s(){let I=!1,V=null,Z=null,rt=null;return{setTest:function(ft){ft?at(2929):ut(2929)},setMask:function(ft){V!==ft&&!I&&(r.depthMask(ft),V=ft)},setFunc:function(ft){if(Z!==ft){switch(ft){case Wa:r.depthFunc(512);break;case Xa:r.depthFunc(519);break;case qa:r.depthFunc(513);break;case Js:r.depthFunc(515);break;case $a:r.depthFunc(514);break;case ja:r.depthFunc(518);break;case Ya:r.depthFunc(516);break;case Za:r.depthFunc(517);break;default:r.depthFunc(515)}Z=ft}},setLocked:function(ft){I=ft},setClear:function(ft){rt!==ft&&(r.clearDepth(ft),rt=ft)},reset:function(){I=!1,V=null,Z=null,rt=null}}}function a(){let I=!1,V=null,Z=null,rt=null,ft=null,Ht=null,re=null,Me=null,tn=null;return{setTest:function(Yt){I||(Yt?at(2960):ut(2960))},setMask:function(Yt){V!==Yt&&!I&&(r.stencilMask(Yt),V=Yt)},setFunc:function(Yt,Fe,en){(Z!==Yt||rt!==Fe||ft!==en)&&(r.stencilFunc(Yt,Fe,en),Z=Yt,rt=Fe,ft=en)},setOp:function(Yt,Fe,en){(Ht!==Yt||re!==Fe||Me!==en)&&(r.stencilOp(Yt,Fe,en),Ht=Yt,re=Fe,Me=en)},setLocked:function(Yt){I=Yt},setClear:function(Yt){tn!==Yt&&(r.clearStencil(Yt),tn=Yt)},reset:function(){I=!1,V=null,Z=null,rt=null,ft=null,Ht=null,re=null,Me=null,tn=null}}}const o=new i,c=new s,l=new a,f=new WeakMap,h=new WeakMap;let u={},m={},g=new WeakMap,d=[],p=null,_=!1,S=null,M=null,x=null,b=null,L=null,P=null,v=null,w=!1,R=null,B=null,D=null,C=null,A=null;const O=r.getParameter(35661);let $=!1,J=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=J>=2);let K=null,j={};const dt=r.getParameter(3088),N=r.getParameter(2978),Y=new fe().fromArray(dt),Q=new fe().fromArray(N);function z(I,V,Z){const rt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(I,ft),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let Ht=0;Ht<Z;Ht++)r.texImage2D(V+Ht,0,6408,1,1,0,6408,5121,rt);return ft}const ct={};ct[3553]=z(3553,3553,1),ct[34067]=z(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),at(2929),c.setFunc(Js),Ot(!1),Bt(br),at(2884),it(wn);function at(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function ut(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function ht(I,V){return m[I]!==V?(r.bindFramebuffer(I,V),m[I]=V,n&&(I===36009&&(m[36160]=V),I===36160&&(m[36009]=V)),!0):!1}function vt(I,V){let Z=d,rt=!1;if(I)if(Z=g.get(V),Z===void 0&&(Z=[],g.set(V,Z)),I.isWebGLMultipleRenderTargets){const ft=I.texture;if(Z.length!==ft.length||Z[0]!==36064){for(let Ht=0,re=ft.length;Ht<re;Ht++)Z[Ht]=36064+Ht;Z.length=ft.length,rt=!0}}else Z[0]!==36064&&(Z[0]=36064,rt=!0);else Z[0]!==1029&&(Z[0]=1029,rt=!0);rt&&(e.isWebGL2?r.drawBuffers(Z):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Ct(I){return p!==I?(r.useProgram(I),p=I,!0):!1}const mt={[si]:32774,[Ia]:32778,[ka]:32779};if(n)mt[Ar]=32775,mt[Cr]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(mt[Ar]=I.MIN_EXT,mt[Cr]=I.MAX_EXT)}const lt={[za]:0,[Fa]:1,[Na]:768,[jo]:770,[Ha]:776,[Ga]:774,[Ba]:772,[Ua]:769,[Yo]:771,[Va]:775,[Oa]:773};function it(I,V,Z,rt,ft,Ht,re,Me){if(I===wn){_===!0&&(ut(3042),_=!1);return}if(_===!1&&(at(3042),_=!0),I!==Ra){if(I!==S||Me!==w){if((M!==si||L!==si)&&(r.blendEquation(32774),M=si,L=si),Me)switch(I){case oi:r.blendFuncSeparate(1,771,1,771);break;case wr:r.blendFunc(1,1);break;case Tr:r.blendFuncSeparate(0,769,0,1);break;case Er:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case oi:r.blendFuncSeparate(770,771,1,771);break;case wr:r.blendFunc(770,1);break;case Tr:r.blendFuncSeparate(0,769,0,1);break;case Er:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,b=null,P=null,v=null,S=I,w=Me}return}ft=ft||V,Ht=Ht||Z,re=re||rt,(V!==M||ft!==L)&&(r.blendEquationSeparate(mt[V],mt[ft]),M=V,L=ft),(Z!==x||rt!==b||Ht!==P||re!==v)&&(r.blendFuncSeparate(lt[Z],lt[rt],lt[Ht],lt[re]),x=Z,b=rt,P=Ht,v=re),S=I,w=!1}function Rt(I,V){I.side===pn?ut(2884):at(2884);let Z=I.side===ke;V&&(Z=!Z),Ot(Z),I.blending===oi&&I.transparent===!1?it(wn):it(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const rt=I.stencilWrite;l.setTest(rt),rt&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(32926):ut(32926)}function Ot(I){R!==I&&(I?r.frontFace(2304):r.frontFace(2305),R=I)}function Bt(I){I!==La?(at(2884),I!==B&&(I===br?r.cullFace(1029):I===Pa?r.cullFace(1028):r.cullFace(1032))):ut(2884),B=I}function jt(I){I!==D&&($&&r.lineWidth(I),D=I)}function qt(I,V,Z){I?(at(32823),(C!==V||A!==Z)&&(r.polygonOffset(V,Z),C=V,A=Z)):ut(32823)}function Qe(I){I?at(3089):ut(3089)}function Ve(I){I===void 0&&(I=33984+O-1),K!==I&&(r.activeTexture(I),K=I)}function E(I,V,Z){Z===void 0&&(K===null?Z=33984+O-1:Z=K);let rt=j[Z];rt===void 0&&(rt={type:void 0,texture:void 0},j[Z]=rt),(rt.type!==I||rt.texture!==V)&&(K!==Z&&(r.activeTexture(Z),K=Z),r.bindTexture(I,V||ct[I]),rt.type=I,rt.texture=V)}function y(){const I=j[K];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(I){Y.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Y.copy(I))}function gt(I){Q.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Q.copy(I))}function Ft(I,V){let Z=h.get(V);Z===void 0&&(Z=new WeakMap,h.set(V,Z));let rt=Z.get(I);rt===void 0&&(rt=r.getUniformBlockIndex(V,I.name),Z.set(I,rt))}function $t(I,V){const rt=h.get(V).get(I);f.get(V)!==rt&&(r.uniformBlockBinding(V,rt,I.__bindingPointIndex),f.set(V,rt))}function se(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},K=null,j={},m={},g=new WeakMap,d=[],p=null,_=!1,S=null,M=null,x=null,b=null,L=null,P=null,v=null,w=!1,R=null,B=null,D=null,C=null,A=null,Y.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:at,disable:ut,bindFramebuffer:ht,drawBuffers:vt,useProgram:Ct,setBlending:it,setMaterial:Rt,setFlipSided:Ot,setCullFace:Bt,setLineWidth:jt,setPolygonOffset:qt,setScissorTest:Qe,activeTexture:Ve,bindTexture:E,unbindTexture:y,compressedTexImage2D:H,compressedTexImage3D:tt,texImage2D:pt,texImage3D:wt,updateUBOMapping:Ft,uniformBlockBinding:$t,texStorage2D:q,texStorage3D:bt,texSubImage2D:et,texSubImage3D:st,compressedTexSubImage2D:_t,compressedTexSubImage3D:ot,scissor:Mt,viewport:gt,reset:se}}function bd(r,t,e,n,i,s,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,f=i.maxTextureSize,h=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,y){return _?new OffscreenCanvas(E,y):Ni("canvas")}function M(E,y,H,tt){let et=1;if((E.width>tt||E.height>tt)&&(et=tt/Math.max(E.width,E.height)),et<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const st=y?Tl:Math.floor,_t=st(et*E.width),ot=st(et*E.height);d===void 0&&(d=S(_t,ot));const q=H?S(_t,ot):d;return q.width=_t,q.height=ot,q.getContext("2d").drawImage(E,0,0,_t,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_t+"x"+ot+")."),q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function x(E){return no(E.width)&&no(E.height)}function b(E){return o?!1:E.wrapS!==Ye||E.wrapT!==Ye||E.minFilter!==he&&E.minFilter!==Be}function L(E,y){return E.generateMipmaps&&y&&E.minFilter!==he&&E.minFilter!==Be}function P(E){r.generateMipmap(E)}function v(E,y,H,tt,et=!1){if(o===!1)return y;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st=y;return y===6403&&(H===5126&&(st=33326),H===5131&&(st=33325),H===5121&&(st=33321)),y===33319&&(H===5126&&(st=33328),H===5131&&(st=33327),H===5121&&(st=33323)),y===6408&&(H===5126&&(st=34836),H===5131&&(st=34842),H===5121&&(st=tt===Wt&&et===!1?35907:32856),H===32819&&(st=32854),H===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function w(E,y,H){return L(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==he&&E.minFilter!==Be?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){return E===he||E===Lr||E===_s?9728:9729}function B(E){const y=E.target;y.removeEventListener("dispose",B),C(y),y.isVideoTexture&&g.delete(y)}function D(E){const y=E.target;y.removeEventListener("dispose",D),O(y)}function C(E){const y=n.get(E);if(y.__webglInit===void 0)return;const H=E.source,tt=p.get(H);if(tt){const et=tt[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&A(E),Object.keys(tt).length===0&&p.delete(H)}n.remove(E)}function A(E){const y=n.get(E);r.deleteTexture(y.__webglTexture);const H=E.source,tt=p.get(H);delete tt[y.__cacheKey],a.memory.textures--}function O(E){const y=E.texture,H=n.get(E),tt=n.get(y);if(tt.__webglTexture!==void 0&&(r.deleteTexture(tt.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)r.deleteFramebuffer(H.__webglFramebuffer[et]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[et]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let et=0;et<H.__webglColorRenderbuffer.length;et++)H.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[et]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let et=0,st=y.length;et<st;et++){const _t=n.get(y[et]);_t.__webglTexture&&(r.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(y[et])}n.remove(y),n.remove(E)}let $=0;function J(){$=0}function X(){const E=$;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),$+=1,E}function K(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.encoding),y.join()}function j(E,y){const H=n.get(E);if(E.isVideoTexture&&Qe(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(H,E,y);return}}e.bindTexture(3553,H.__webglTexture,33984+y)}function dt(E,y){const H=n.get(E);if(E.version>0&&H.__version!==E.version){ut(H,E,y);return}e.bindTexture(35866,H.__webglTexture,33984+y)}function N(E,y){const H=n.get(E);if(E.version>0&&H.__version!==E.version){ut(H,E,y);return}e.bindTexture(32879,H.__webglTexture,33984+y)}function Y(E,y){const H=n.get(E);if(E.version>0&&H.__version!==E.version){ht(H,E,y);return}e.bindTexture(34067,H.__webglTexture,33984+y)}const Q={[tr]:10497,[Ye]:33071,[er]:33648},z={[he]:9728,[Lr]:9984,[_s]:9986,[Be]:9729,[sl]:9985,[ki]:9987};function ct(E,y,H){if(H?(r.texParameteri(E,10242,Q[y.wrapS]),r.texParameteri(E,10243,Q[y.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,Q[y.wrapR]),r.texParameteri(E,10240,z[y.magFilter]),r.texParameteri(E,10241,z[y.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(y.wrapS!==Ye||y.wrapT!==Ye)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,R(y.magFilter)),r.texParameteri(E,10241,R(y.minFilter)),y.minFilter!==he&&y.minFilter!==Be&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===he||y.minFilter!==_s&&y.minFilter!==ki||y.type===zn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===zi&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function at(E,y){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",B));const tt=y.source;let et=p.get(tt);et===void 0&&(et={},p.set(tt,et));const st=K(y);if(st!==E.__cacheKey){et[st]===void 0&&(et[st]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[st].usedTimes++;const _t=et[E.__cacheKey];_t!==void 0&&(et[E.__cacheKey].usedTimes--,_t.usedTimes===0&&A(y)),E.__cacheKey=st,E.__webglTexture=et[st].texture}return H}function ut(E,y,H){let tt=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=35866),y.isData3DTexture&&(tt=32879);const et=at(E,y),st=y.source;e.bindTexture(tt,E.__webglTexture,33984+H);const _t=n.get(st);if(st.version!==_t.__version||et===!0){e.activeTexture(33984+H),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const ot=b(y)&&x(y.image)===!1;let q=M(y.image,ot,!1,f);q=Ve(y,q);const bt=x(q)||o,pt=s.convert(y.format,y.encoding);let wt=s.convert(y.type),Mt=v(y.internalFormat,pt,wt,y.encoding,y.isVideoTexture);ct(tt,y,bt);let gt;const Ft=y.mipmaps,$t=o&&y.isVideoTexture!==!0,se=_t.__version===void 0||et===!0,I=w(y,q,bt);if(y.isDepthTexture)Mt=6402,o?y.type===zn?Mt=36012:y.type===kn?Mt=33190:y.type===ai?Mt=35056:Mt=33189:y.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Fn&&Mt===6402&&y.type!==Jo&&y.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=kn,wt=s.convert(y.type)),y.format===hi&&Mt===6402&&(Mt=34041,y.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ai,wt=s.convert(y.type))),se&&($t?e.texStorage2D(3553,1,Mt,q.width,q.height):e.texImage2D(3553,0,Mt,q.width,q.height,0,pt,wt,null));else if(y.isDataTexture)if(Ft.length>0&&bt){$t&&se&&e.texStorage2D(3553,I,Mt,Ft[0].width,Ft[0].height);for(let V=0,Z=Ft.length;V<Z;V++)gt=Ft[V],$t?e.texSubImage2D(3553,V,0,0,gt.width,gt.height,pt,wt,gt.data):e.texImage2D(3553,V,Mt,gt.width,gt.height,0,pt,wt,gt.data);y.generateMipmaps=!1}else $t?(se&&e.texStorage2D(3553,I,Mt,q.width,q.height),e.texSubImage2D(3553,0,0,0,q.width,q.height,pt,wt,q.data)):e.texImage2D(3553,0,Mt,q.width,q.height,0,pt,wt,q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$t&&se&&e.texStorage3D(35866,I,Mt,Ft[0].width,Ft[0].height,q.depth);for(let V=0,Z=Ft.length;V<Z;V++)gt=Ft[V],y.format!==Ze?pt!==null?$t?e.compressedTexSubImage3D(35866,V,0,0,0,gt.width,gt.height,q.depth,pt,gt.data,0,0):e.compressedTexImage3D(35866,V,Mt,gt.width,gt.height,q.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(35866,V,0,0,0,gt.width,gt.height,q.depth,pt,wt,gt.data):e.texImage3D(35866,V,Mt,gt.width,gt.height,q.depth,0,pt,wt,gt.data)}else{$t&&se&&e.texStorage2D(3553,I,Mt,Ft[0].width,Ft[0].height);for(let V=0,Z=Ft.length;V<Z;V++)gt=Ft[V],y.format!==Ze?pt!==null?$t?e.compressedTexSubImage2D(3553,V,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(3553,V,Mt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(3553,V,0,0,gt.width,gt.height,pt,wt,gt.data):e.texImage2D(3553,V,Mt,gt.width,gt.height,0,pt,wt,gt.data)}else if(y.isDataArrayTexture)$t?(se&&e.texStorage3D(35866,I,Mt,q.width,q.height,q.depth),e.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,pt,wt,q.data)):e.texImage3D(35866,0,Mt,q.width,q.height,q.depth,0,pt,wt,q.data);else if(y.isData3DTexture)$t?(se&&e.texStorage3D(32879,I,Mt,q.width,q.height,q.depth),e.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,pt,wt,q.data)):e.texImage3D(32879,0,Mt,q.width,q.height,q.depth,0,pt,wt,q.data);else if(y.isFramebufferTexture){if(se)if($t)e.texStorage2D(3553,I,Mt,q.width,q.height);else{let V=q.width,Z=q.height;for(let rt=0;rt<I;rt++)e.texImage2D(3553,rt,Mt,V,Z,0,pt,wt,null),V>>=1,Z>>=1}}else if(Ft.length>0&&bt){$t&&se&&e.texStorage2D(3553,I,Mt,Ft[0].width,Ft[0].height);for(let V=0,Z=Ft.length;V<Z;V++)gt=Ft[V],$t?e.texSubImage2D(3553,V,0,0,pt,wt,gt):e.texImage2D(3553,V,Mt,pt,wt,gt);y.generateMipmaps=!1}else $t?(se&&e.texStorage2D(3553,I,Mt,q.width,q.height),e.texSubImage2D(3553,0,0,0,pt,wt,q)):e.texImage2D(3553,0,Mt,pt,wt,q);L(y,bt)&&P(tt),_t.__version=st.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ht(E,y,H){if(y.image.length!==6)return;const tt=at(E,y),et=y.source;e.bindTexture(34067,E.__webglTexture,33984+H);const st=n.get(et);if(et.version!==st.__version||tt===!0){e.activeTexture(33984+H),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const _t=y.isCompressedTexture||y.image[0].isCompressedTexture,ot=y.image[0]&&y.image[0].isDataTexture,q=[];for(let V=0;V<6;V++)!_t&&!ot?q[V]=M(y.image[V],!1,!0,l):q[V]=ot?y.image[V].image:y.image[V],q[V]=Ve(y,q[V]);const bt=q[0],pt=x(bt)||o,wt=s.convert(y.format,y.encoding),Mt=s.convert(y.type),gt=v(y.internalFormat,wt,Mt,y.encoding),Ft=o&&y.isVideoTexture!==!0,$t=st.__version===void 0||tt===!0;let se=w(y,bt,pt);ct(34067,y,pt);let I;if(_t){Ft&&$t&&e.texStorage2D(34067,se,gt,bt.width,bt.height);for(let V=0;V<6;V++){I=q[V].mipmaps;for(let Z=0;Z<I.length;Z++){const rt=I[Z];y.format!==Ze?wt!==null?Ft?e.compressedTexSubImage2D(34069+V,Z,0,0,rt.width,rt.height,wt,rt.data):e.compressedTexImage2D(34069+V,Z,gt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(34069+V,Z,0,0,rt.width,rt.height,wt,Mt,rt.data):e.texImage2D(34069+V,Z,gt,rt.width,rt.height,0,wt,Mt,rt.data)}}}else{I=y.mipmaps,Ft&&$t&&(I.length>0&&se++,e.texStorage2D(34067,se,gt,q[0].width,q[0].height));for(let V=0;V<6;V++)if(ot){Ft?e.texSubImage2D(34069+V,0,0,0,q[V].width,q[V].height,wt,Mt,q[V].data):e.texImage2D(34069+V,0,gt,q[V].width,q[V].height,0,wt,Mt,q[V].data);for(let Z=0;Z<I.length;Z++){const ft=I[Z].image[V].image;Ft?e.texSubImage2D(34069+V,Z+1,0,0,ft.width,ft.height,wt,Mt,ft.data):e.texImage2D(34069+V,Z+1,gt,ft.width,ft.height,0,wt,Mt,ft.data)}}else{Ft?e.texSubImage2D(34069+V,0,0,0,wt,Mt,q[V]):e.texImage2D(34069+V,0,gt,wt,Mt,q[V]);for(let Z=0;Z<I.length;Z++){const rt=I[Z];Ft?e.texSubImage2D(34069+V,Z+1,0,0,wt,Mt,rt.image[V]):e.texImage2D(34069+V,Z+1,gt,wt,Mt,rt.image[V])}}}L(y,pt)&&P(34067),st.__version=et.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function vt(E,y,H,tt,et){const st=s.convert(H.format,H.encoding),_t=s.convert(H.type),ot=v(H.internalFormat,st,_t,H.encoding);n.get(y).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,ot,y.width,y.height,y.depth,0,st,_t,null):e.texImage2D(et,0,ot,y.width,y.height,0,st,_t,null)),e.bindFramebuffer(36160,E),qt(y)?u.framebufferTexture2DMultisampleEXT(36160,tt,et,n.get(H).__webglTexture,0,jt(y)):(et===3553||et>=34069&&et<=34074)&&r.framebufferTexture2D(36160,tt,et,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ct(E,y,H){if(r.bindRenderbuffer(36161,E),y.depthBuffer&&!y.stencilBuffer){let tt=33189;if(H||qt(y)){const et=y.depthTexture;et&&et.isDepthTexture&&(et.type===zn?tt=36012:et.type===kn&&(tt=33190));const st=jt(y);qt(y)?u.renderbufferStorageMultisampleEXT(36161,st,tt,y.width,y.height):r.renderbufferStorageMultisample(36161,st,tt,y.width,y.height)}else r.renderbufferStorage(36161,tt,y.width,y.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(y.depthBuffer&&y.stencilBuffer){const tt=jt(y);H&&qt(y)===!1?r.renderbufferStorageMultisample(36161,tt,35056,y.width,y.height):qt(y)?u.renderbufferStorageMultisampleEXT(36161,tt,35056,y.width,y.height):r.renderbufferStorage(36161,34041,y.width,y.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const tt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let et=0;et<tt.length;et++){const st=tt[et],_t=s.convert(st.format,st.encoding),ot=s.convert(st.type),q=v(st.internalFormat,_t,ot,st.encoding),bt=jt(y);H&&qt(y)===!1?r.renderbufferStorageMultisample(36161,bt,q,y.width,y.height):qt(y)?u.renderbufferStorageMultisampleEXT(36161,bt,q,y.width,y.height):r.renderbufferStorage(36161,q,y.width,y.height)}}r.bindRenderbuffer(36161,null)}function mt(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const tt=n.get(y.depthTexture).__webglTexture,et=jt(y);if(y.depthTexture.format===Fn)qt(y)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,et):r.framebufferTexture2D(36160,36096,3553,tt,0);else if(y.depthTexture.format===hi)qt(y)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,et):r.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function lt(E){const y=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");mt(y.__webglFramebuffer,E)}else if(H){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]=r.createRenderbuffer(),Ct(y.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Ct(y.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function it(E,y,H){const tt=n.get(E);y!==void 0&&vt(tt.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&lt(E)}function Rt(E){const y=E.texture,H=n.get(E),tt=n.get(y);E.addEventListener("dispose",D),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=y.version,a.memory.textures++);const et=E.isWebGLCubeRenderTarget===!0,st=E.isWebGLMultipleRenderTargets===!0,_t=x(E)||o;if(et){H.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)H.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),st)if(i.drawBuffers){const ot=E.texture;for(let q=0,bt=ot.length;q<bt;q++){const pt=n.get(ot[q]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&qt(E)===!1){const ot=st?y:[y];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let q=0;q<ot.length;q++){const bt=ot[q];H.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[q]);const pt=s.convert(bt.format,bt.encoding),wt=s.convert(bt.type),Mt=v(bt.internalFormat,pt,wt,bt.encoding,E.isXRRenderTarget===!0),gt=jt(E);r.renderbufferStorageMultisample(36161,gt,Mt,E.width,E.height),r.framebufferRenderbuffer(36160,36064+q,36161,H.__webglColorRenderbuffer[q])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(H.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,tt.__webglTexture),ct(34067,y,_t);for(let ot=0;ot<6;ot++)vt(H.__webglFramebuffer[ot],E,y,36064,34069+ot);L(y,_t)&&P(34067),e.unbindTexture()}else if(st){const ot=E.texture;for(let q=0,bt=ot.length;q<bt;q++){const pt=ot[q],wt=n.get(pt);e.bindTexture(3553,wt.__webglTexture),ct(3553,pt,_t),vt(H.__webglFramebuffer,E,pt,36064+q,3553),L(pt,_t)&&P(3553)}e.unbindTexture()}else{let ot=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ot=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,tt.__webglTexture),ct(ot,y,_t),vt(H.__webglFramebuffer,E,y,36064,ot),L(y,_t)&&P(ot),e.unbindTexture()}E.depthBuffer&&lt(E)}function Ot(E){const y=x(E)||o,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,et=H.length;tt<et;tt++){const st=H[tt];if(L(st,y)){const _t=E.isWebGLCubeRenderTarget?34067:3553,ot=n.get(st).__webglTexture;e.bindTexture(_t,ot),P(_t),e.unbindTexture()}}}function Bt(E){if(o&&E.samples>0&&qt(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,tt=E.height;let et=16384;const st=[],_t=E.stencilBuffer?33306:36096,ot=n.get(E),q=E.isWebGLMultipleRenderTargets===!0;if(q)for(let bt=0;bt<y.length;bt++)e.bindFramebuffer(36160,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+bt,36161,null),e.bindFramebuffer(36160,ot.__webglFramebuffer),r.framebufferTexture2D(36009,36064+bt,3553,null,0);e.bindFramebuffer(36008,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,ot.__webglFramebuffer);for(let bt=0;bt<y.length;bt++){st.push(36064+bt),E.depthBuffer&&st.push(_t);const pt=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(pt===!1&&(E.depthBuffer&&(et|=256),E.stencilBuffer&&(et|=1024)),q&&r.framebufferRenderbuffer(36008,36064,36161,ot.__webglColorRenderbuffer[bt]),pt===!0&&(r.invalidateFramebuffer(36008,[_t]),r.invalidateFramebuffer(36009,[_t])),q){const wt=n.get(y[bt]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,wt,0)}r.blitFramebuffer(0,0,H,tt,0,0,H,tt,et,9728),m&&r.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),q)for(let bt=0;bt<y.length;bt++){e.bindFramebuffer(36160,ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+bt,36161,ot.__webglColorRenderbuffer[bt]);const pt=n.get(y[bt]).__webglTexture;e.bindFramebuffer(36160,ot.__webglFramebuffer),r.framebufferTexture2D(36009,36064+bt,3553,pt,0)}e.bindFramebuffer(36009,ot.__webglMultisampledFramebuffer)}}function jt(E){return Math.min(h,E.samples)}function qt(E){const y=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Qe(E){const y=a.render.frame;g.get(E)!==y&&(g.set(E,y),E.update())}function Ve(E,y){const H=E.encoding,tt=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===nr||H!==Un&&(H===Wt?o===!1?t.has("EXT_sRGB")===!0&&tt===Ze?(E.format=nr,E.minFilter=Be,E.generateMipmaps=!1):y=ea.sRGBToLinear(y):(tt!==Ze||et!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),y}this.allocateTextureUnit=X,this.resetTextureUnits=J,this.setTexture2D=j,this.setTexture2DArray=dt,this.setTexture3D=N,this.setTextureCube=Y,this.rebindTextures=it,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=qt}function wd(r,t,e){const n=e.isWebGL2;function i(s,a=null){let o;if(s===Nn)return 5121;if(s===ll)return 32819;if(s===cl)return 32820;if(s===rl)return 5120;if(s===ol)return 5122;if(s===Jo)return 5123;if(s===al)return 5124;if(s===kn)return 5125;if(s===zn)return 5126;if(s===zi)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ul)return 6406;if(s===Ze)return 6408;if(s===hl)return 6409;if(s===fl)return 6410;if(s===Fn)return 6402;if(s===hi)return 34041;if(s===nr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===dl)return 6403;if(s===pl)return 36244;if(s===ml)return 33319;if(s===gl)return 33320;if(s===_l)return 36249;if(s===xs||s===vs||s===Ms||s===ys)if(a===Wt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===xs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===xs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pr||s===Dr||s===Rr||s===Ir)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Pr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ir)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kr||s===zr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kr)return a===Wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===zr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fr||s===Nr||s===Ur||s===Br||s===Or||s===Gr||s===Vr||s===Hr||s===Wr||s===Xr||s===qr||s===$r||s===jr||s===Yr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Fr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ur)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Br)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Or)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$r)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yr)return a===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ss)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ss)return a===Wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===vl||s===Zr||s===Jr||s===Kr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ss)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Zr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ai?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Td extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pi extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ed={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const d of t.hand.values()){const p=e.getJointPose(d,n),_=this._getHandJoint(l,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ed)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ad extends Ae{constructor(t,e,n,i,s,a,o,c,l,f){if(f=f!==void 0?f:Fn,f!==Fn&&f!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Fn&&(n=kn),n===void 0&&f===hi&&(n=ai),super(null,i,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:he,this.minFilter=c!==void 0?c:he,this.flipY=!1,this.generateMipmaps=!1}}class Cd extends pi{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,h=null,u=null,m=null,g=null;const d=e.getContextAttributes();let p=null,_=null;const S=[],M=[],x=new Set,b=new Map,L=new Oe;L.layers.enable(1),L.viewport=new fe;const P=new Oe;P.layers.enable(2),P.viewport=new fe;const v=[L,P],w=new Td;w.layers.enable(1),w.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Y=S[N];return Y===void 0&&(Y=new js,S[N]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(N){let Y=S[N];return Y===void 0&&(Y=new js,S[N]=Y),Y.getGripSpace()},this.getHand=function(N){let Y=S[N];return Y===void 0&&(Y=new js,S[N]=Y),Y.getHandSpace()};function D(N){const Y=M.indexOf(N.inputSource);if(Y===-1)return;const Q=S[Y];Q!==void 0&&Q.dispatchEvent({type:N.type,data:N.inputSource})}function C(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",A);for(let N=0;N<S.length;N++){const Y=M[N];Y!==null&&(M[N]=null,S[N].disconnect(Y))}R=null,B=null,t.setRenderTarget(p),m=null,u=null,h=null,i=null,_=null,dt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",C),i.addEventListener("inputsourceschange",A),d.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:m}),_=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:Nn,encoding:t.outputEncoding,stencilBuffer:d.stencil})}else{let Y=null,Q=null,z=null;d.depth&&(z=d.stencil?35056:33190,Y=d.stencil?hi:Fn,Q=d.stencil?ai:kn);const ct={colorFormat:32856,depthFormat:z,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(ct),i.updateRenderState({layers:[u]}),_=new Bn(u.textureWidth,u.textureHeight,{format:Ze,type:Nn,depthTexture:new Ad(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:d.stencil,encoding:t.outputEncoding,samples:d.antialias?4:0});const at=t.properties.get(_);at.__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function A(N){for(let Y=0;Y<N.removed.length;Y++){const Q=N.removed[Y],z=M.indexOf(Q);z>=0&&(M[z]=null,S[z].disconnect(Q))}for(let Y=0;Y<N.added.length;Y++){const Q=N.added[Y];let z=M.indexOf(Q);if(z===-1){for(let at=0;at<S.length;at++)if(at>=M.length){M.push(Q),z=at;break}else if(M[at]===null){M[at]=Q,z=at;break}if(z===-1)break}const ct=S[z];ct&&ct.connect(Q)}}const O=new k,$=new k;function J(N,Y,Q){O.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(Q.matrixWorld);const z=O.distanceTo($),ct=Y.projectionMatrix.elements,at=Q.projectionMatrix.elements,ut=ct[14]/(ct[10]-1),ht=ct[14]/(ct[10]+1),vt=(ct[9]+1)/ct[5],Ct=(ct[9]-1)/ct[5],mt=(ct[8]-1)/ct[0],lt=(at[8]+1)/at[0],it=ut*mt,Rt=ut*lt,Ot=z/(-mt+lt),Bt=Ot*-mt;Y.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Bt),N.translateZ(Ot),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const jt=ut+Ot,qt=ht+Ot,Qe=it-Bt,Ve=Rt+(z-Bt),E=vt*ht/qt*jt,y=Ct*ht/qt*jt;N.projectionMatrix.makePerspective(Qe,Ve,E,y,jt,qt)}function X(N,Y){Y===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Y.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;w.near=P.near=L.near=N.near,w.far=P.far=L.far=N.far,(R!==w.near||B!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,B=w.far);const Y=N.parent,Q=w.cameras;X(w,Y);for(let ct=0;ct<Q.length;ct++)X(Q[ct],Y);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),N.matrix.copy(w.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const z=N.children;for(let ct=0,at=z.length;ct<at;ct++)z[ct].updateMatrixWorld(!0);Q.length===2?J(w,L,P):w.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(N){c=N,u!==null&&(u.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.getPlanes=function(){return x};let K=null;function j(N,Y){if(f=Y.getViewerPose(l||a),g=Y,f!==null){const Q=f.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let z=!1;Q.length!==w.cameras.length&&(w.cameras.length=0,z=!0);for(let ct=0;ct<Q.length;ct++){const at=Q[ct];let ut=null;if(m!==null)ut=m.getViewport(at);else{const vt=h.getViewSubImage(u,at);ut=vt.viewport,ct===0&&(t.setRenderTargetTextures(_,vt.colorTexture,u.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(_))}let ht=v[ct];ht===void 0&&(ht=new Oe,ht.layers.enable(ct),ht.viewport=new fe,v[ct]=ht),ht.matrix.fromArray(at.transform.matrix),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.viewport.set(ut.x,ut.y,ut.width,ut.height),ct===0&&w.matrix.copy(ht.matrix),z===!0&&w.cameras.push(ht)}}for(let Q=0;Q<S.length;Q++){const z=M[Q],ct=S[Q];z!==null&&ct!==void 0&&ct.update(z,Y,l||a)}if(K&&K(N,Y),Y.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let Q=null;for(const z of x)Y.detectedPlanes.has(z)||(Q===null&&(Q=[]),Q.push(z));if(Q!==null)for(const z of Q)x.delete(z),b.delete(z),n.dispatchEvent({type:"planeremoved",data:z});for(const z of Y.detectedPlanes)if(!x.has(z))x.add(z),b.set(z,Y.lastChangedTime),n.dispatchEvent({type:"planeadded",data:z});else{const ct=b.get(z);z.lastChangedTime>ct&&(b.set(z,z.lastChangedTime),n.dispatchEvent({type:"planechanged",data:z}))}}g=null}const dt=new da;dt.setAnimationLoop(j),this.setAnimationLoop=function(N){K=N},this.dispose=function(){}}}function Ld(r,t){function e(d,p){p.color.getRGB(d.fogColor.value,ca(r)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),f(d,p)):p.isMeshPhongMaterial?(i(d,p),l(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&u(d,p,M)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,_,S):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===ke&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===ke&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uv2Transform.value.copy(M.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,_,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function u(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ke&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Pd(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(35375):0;function c(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function l(S,M){let x=i[S.id];x===void 0&&(g(S),x=f(S),i[S.id]=x,S.addEventListener("dispose",p));const b=M.program;n.updateUBOMapping(S,b);const L=t.render.frame;s[S.id]!==L&&(u(S),s[S.id]=L)}function f(S){const M=h();S.__bindingPointIndex=M;const x=r.createBuffer(),b=S.__size,L=S.usage;return r.bindBuffer(35345,x),r.bufferData(35345,b,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,M,x),x}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const M=i[S.id],x=S.uniforms,b=S.__cache;r.bindBuffer(35345,M);for(let L=0,P=x.length;L<P;L++){const v=x[L];if(m(v,L,b)===!0){const w=v.__offset,R=Array.isArray(v.value)?v.value:[v.value];let B=0;for(let D=0;D<R.length;D++){const C=R[D],A=d(C);typeof C=="number"?(v.__data[0]=C,r.bufferSubData(35345,w+B,v.__data)):C.isMatrix3?(v.__data[0]=C.elements[0],v.__data[1]=C.elements[1],v.__data[2]=C.elements[2],v.__data[3]=C.elements[0],v.__data[4]=C.elements[3],v.__data[5]=C.elements[4],v.__data[6]=C.elements[5],v.__data[7]=C.elements[0],v.__data[8]=C.elements[6],v.__data[9]=C.elements[7],v.__data[10]=C.elements[8],v.__data[11]=C.elements[0]):(C.toArray(v.__data,B),B+=A.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,w,v.__data)}}r.bindBuffer(35345,null)}function m(S,M,x){const b=S.value;if(x[M]===void 0){if(typeof b=="number")x[M]=b;else{const L=Array.isArray(b)?b:[b],P=[];for(let v=0;v<L.length;v++)P.push(L[v].clone());x[M]=P}return!0}else if(typeof b=="number"){if(x[M]!==b)return x[M]=b,!0}else{const L=Array.isArray(x[M])?x[M]:[x[M]],P=Array.isArray(b)?b:[b];for(let v=0;v<L.length;v++){const w=L[v];if(w.equals(P[v])===!1)return w.copy(P[v]),!0}}return!1}function g(S){const M=S.uniforms;let x=0;const b=16;let L=0;for(let P=0,v=M.length;P<v;P++){const w=M[P],R={boundary:0,storage:0},B=Array.isArray(w.value)?w.value:[w.value];for(let D=0,C=B.length;D<C;D++){const A=B[D],O=d(A);R.boundary+=O.boundary,R.storage+=O.storage}if(w.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,P>0){L=x%b;const D=b-L;L!==0&&D-R.boundary<0&&(x+=b-L,w.__offset=x)}x+=R.storage}return L=x%b,L>0&&(x+=b-L),S.__size=x,S.__cache={},this}function d(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function _(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:c,update:l,dispose:_}}function Dd(){const r=Ni("canvas");return r.style.display="block",r}function gr(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:Dd(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let f;e!==null?f=e.getContextAttributes().alpha:f=r.alpha!==void 0?r.alpha:!1;let h=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Un,this.useLegacyLights=!0,this.toneMapping=mn,this.toneMappingExposure=1;const d=this;let p=!1,_=0,S=0,M=null,x=-1,b=null;const L=new fe,P=new fe;let v=null,w=t.width,R=t.height,B=1,D=null,C=null;const A=new fe(0,0,w,R),O=new fe(0,0,w,R);let $=!1;const J=new fa;let X=!1,K=!1,j=null;const dt=new ue,N=new k,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return M===null?B:1}let z=e;function ct(T,U){for(let G=0;G<T.length;G++){const F=T[G],W=t.getContext(F,U);if(W!==null)return W}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hr}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",gt,!1),z===null){const U=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&U.shift(),z=ct(U,T),z===null)throw ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let at,ut,ht,vt,Ct,mt,lt,it,Rt,Ot,Bt,jt,qt,Qe,Ve,E,y,H,tt,et,st,_t,ot,q;function bt(){at=new Gh(z),ut=new kh(z,at,r),at.init(ut),_t=new wd(z,at,ut),ht=new Sd(z,at,ut),vt=new Wh,Ct=new ld,mt=new bd(z,at,ht,Ct,ut,_t,vt),lt=new Fh(d),it=new Oh(d),Rt=new Kl(z,ut),ot=new Rh(z,at,Rt,ut),Ot=new Vh(z,Rt,vt,ot),Bt=new jh(z,Ot,Rt,vt),tt=new $h(z,ut,mt),E=new zh(Ct),jt=new ad(d,lt,it,at,ut,ot,E),qt=new Ld(d,Ct),Qe=new ud,Ve=new gd(at,ut),H=new Dh(d,lt,it,ht,Bt,f,a),y=new yd(d,Bt,ut),q=new Pd(z,vt,ut,ht),et=new Ih(z,at,vt,ut),st=new Hh(z,at,vt,ut),vt.programs=jt.programs,d.capabilities=ut,d.extensions=at,d.properties=Ct,d.renderLists=Qe,d.shadowMap=y,d.state=ht,d.info=vt}bt();const pt=new Cd(d,z);this.xr=pt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(w,R,!1))},this.getSize=function(T){return T.set(w,R)},this.setSize=function(T,U,G=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,R=U,t.width=Math.floor(T*B),t.height=Math.floor(U*B),G===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(w*B,R*B).floor()},this.setDrawingBufferSize=function(T,U,G){w=T,R=U,B=G,t.width=Math.floor(T*G),t.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(A)},this.setViewport=function(T,U,G,F){T.isVector4?A.set(T.x,T.y,T.z,T.w):A.set(T,U,G,F),ht.viewport(L.copy(A).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,U,G,F){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,U,G,F),ht.scissor(P.copy(O).multiplyScalar(B).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(T){ht.setScissorTest($=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){C=T},this.getClearColor=function(T){return T.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(T=!0,U=!0,G=!0){let F=0;T&&(F|=16384),U&&(F|=256),G&&(F|=1024),z.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Qe.dispose(),Ve.dispose(),Ct.dispose(),lt.dispose(),it.dispose(),Bt.dispose(),ot.dispose(),q.dispose(),jt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Z),pt.removeEventListener("sessionend",rt),j&&(j.dispose(),j=null),ft.stop()};function wt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=vt.autoReset,U=y.enabled,G=y.autoUpdate,F=y.needsUpdate,W=y.type;bt(),vt.autoReset=T,y.enabled=U,y.autoUpdate=G,y.needsUpdate=F,y.type=W}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ft(T){const U=T.target;U.removeEventListener("dispose",Ft),$t(U)}function $t(T){se(T),Ct.remove(T)}function se(T){const U=Ct.get(T).programs;U!==void 0&&(U.forEach(function(G){jt.releaseProgram(G)}),T.isShaderMaterial&&jt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,F,W,xt){U===null&&(U=Y);const Tt=W.isMesh&&W.matrixWorld.determinant()<0,Pt=ba(T,U,G,F,W);ht.setMaterial(F,Tt);let Dt=G.index,Nt=1;F.wireframe===!0&&(Dt=Ot.getWireframeAttribute(G),Nt=2);const It=G.drawRange,kt=G.attributes.position;let Kt=It.start*Nt,Ce=(It.start+It.count)*Nt;xt!==null&&(Kt=Math.max(Kt,xt.start*Nt),Ce=Math.min(Ce,(xt.start+xt.count)*Nt)),Dt!==null?(Kt=Math.max(Kt,0),Ce=Math.min(Ce,Dt.count)):kt!=null&&(Kt=Math.max(Kt,0),Ce=Math.min(Ce,kt.count));const an=Ce-Kt;if(an<0||an===1/0)return;ot.setup(W,F,Pt,G,Dt);let Tn,Qt=et;if(Dt!==null&&(Tn=Rt.get(Dt),Qt=st,Qt.setIndex(Tn)),W.isMesh)F.wireframe===!0?(ht.setLineWidth(F.wireframeLinewidth*Q()),Qt.setMode(1)):Qt.setMode(4);else if(W.isLine){let zt=F.linewidth;zt===void 0&&(zt=1),ht.setLineWidth(zt*Q()),W.isLineSegments?Qt.setMode(1):W.isLineLoop?Qt.setMode(2):Qt.setMode(3)}else W.isPoints?Qt.setMode(0):W.isSprite&&Qt.setMode(4);if(W.isInstancedMesh)Qt.renderInstances(Kt,an,W.count);else if(G.isInstancedBufferGeometry){const zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ds=Math.min(G.instanceCount,zt);Qt.renderInstances(Kt,an,ds)}else Qt.render(Kt,an)},this.compile=function(T,U){function G(F,W,xt){F.transparent===!0&&F.side===pn&&F.forceSinglePass===!1?(F.side=ke,F.needsUpdate=!0,Fe(F,W,xt),F.side=on,F.needsUpdate=!0,Fe(F,W,xt),F.side=pn):Fe(F,W,xt)}u=Ve.get(T),u.init(),g.push(u),T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights(d.useLegacyLights),T.traverse(function(F){const W=F.material;if(W)if(Array.isArray(W))for(let xt=0;xt<W.length;xt++){const Tt=W[xt];G(Tt,T,F)}else G(W,T,F)}),g.pop(),u=null};let I=null;function V(T){I&&I(T)}function Z(){ft.stop()}function rt(){ft.start()}const ft=new da;ft.setAnimationLoop(V),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(T){I=T,pt.setAnimationLoop(T),T===null?ft.stop():ft.start()},pt.addEventListener("sessionstart",Z),pt.addEventListener("sessionend",rt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(U),U=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,U,M),u=Ve.get(T,g.length),u.init(),g.push(u),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(dt),K=this.localClippingEnabled,X=E.init(this.clippingPlanes,K),h=Qe.get(T,m.length),h.init(),m.push(h),Ht(T,U,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(D,C),X===!0&&E.beginShadows();const G=u.state.shadowsArray;if(y.render(G,T,U),X===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(h,T),u.setupLights(d.useLegacyLights),U.isArrayCamera){const F=U.cameras;for(let W=0,xt=F.length;W<xt;W++){const Tt=F[W];re(h,T,Tt,Tt.viewport)}}else re(h,T,U);M!==null&&(mt.updateMultisampleRenderTarget(M),mt.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(d,T,U),ot.resetDefaultState(),x=-1,b=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ht(T,U,G,F){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){F&&N.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const Tt=Bt.update(T),Pt=T.material;Pt.visible&&h.push(T,Tt,Pt,G,N.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==vt.render.frame&&(T.skeleton.update(),T.skeleton.frame=vt.render.frame),!T.frustumCulled||J.intersectsObject(T))){F&&N.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const Tt=Bt.update(T),Pt=T.material;if(Array.isArray(Pt)){const Dt=Tt.groups;for(let Nt=0,It=Dt.length;Nt<It;Nt++){const kt=Dt[Nt],Kt=Pt[kt.materialIndex];Kt&&Kt.visible&&h.push(T,Tt,Kt,G,N.z,kt)}}else Pt.visible&&h.push(T,Tt,Pt,G,N.z,null)}}const xt=T.children;for(let Tt=0,Pt=xt.length;Tt<Pt;Tt++)Ht(xt[Tt],U,G,F)}function re(T,U,G,F){const W=T.opaque,xt=T.transmissive,Tt=T.transparent;u.setupLightsView(G),X===!0&&E.setGlobalState(d.clippingPlanes,G),xt.length>0&&Me(W,U,G),F&&ht.viewport(L.copy(F)),W.length>0&&tn(W,U,G),xt.length>0&&tn(xt,U,G),Tt.length>0&&tn(Tt,U,G),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Me(T,U,G){const F=ut.isWebGL2;j===null&&(j=new Bn(1024,1024,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")?zi:Nn,minFilter:ki,samples:F&&s===!0?4:0}));const W=d.getRenderTarget();d.setRenderTarget(j),d.clear();const xt=d.toneMapping;d.toneMapping=mn,tn(T,U,G),d.toneMapping=xt,mt.updateMultisampleRenderTarget(j),mt.updateRenderTargetMipmap(j),d.setRenderTarget(W)}function tn(T,U,G){const F=U.isScene===!0?U.overrideMaterial:null;for(let W=0,xt=T.length;W<xt;W++){const Tt=T[W],Pt=Tt.object,Dt=Tt.geometry,Nt=F===null?Tt.material:F,It=Tt.group;Pt.layers.test(G.layers)&&Yt(Pt,U,G,Dt,Nt,It)}}function Yt(T,U,G,F,W,xt){T.onBeforeRender(d,U,G,F,W,xt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(d,U,G,F,T,xt),W.transparent===!0&&W.side===pn&&W.forceSinglePass===!1?(W.side=ke,W.needsUpdate=!0,d.renderBufferDirect(G,U,F,W,T,xt),W.side=on,W.needsUpdate=!0,d.renderBufferDirect(G,U,F,W,T,xt),W.side=pn):d.renderBufferDirect(G,U,F,W,T,xt),T.onAfterRender(d,U,G,F,W,xt)}function Fe(T,U,G){U.isScene!==!0&&(U=Y);const F=Ct.get(T),W=u.state.lights,xt=u.state.shadowsArray,Tt=W.state.version,Pt=jt.getParameters(T,W.state,xt,U,G),Dt=jt.getProgramCacheKey(Pt);let Nt=F.programs;F.environment=T.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(T.isMeshStandardMaterial?it:lt).get(T.envMap||F.environment),Nt===void 0&&(T.addEventListener("dispose",Ft),Nt=new Map,F.programs=Nt);let It=Nt.get(Dt);if(It!==void 0){if(F.currentProgram===It&&F.lightsStateVersion===Tt)return en(T,Pt),It}else Pt.uniforms=jt.getUniforms(T),T.onBuild(G,Pt,d),T.onBeforeCompile(Pt,d),It=jt.acquireProgram(Pt,Dt),Nt.set(Dt,It),F.uniforms=Pt.uniforms;const kt=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=E.uniform),en(T,Pt),F.needsLights=Ta(T),F.lightsStateVersion=Tt,F.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.directionalShadowMap.value=W.state.directionalShadowMap,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotShadowMap.value=W.state.spotShadowMap,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMap.value=W.state.pointShadowMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix);const Kt=It.getUniforms(),Ce=ls.seqWithValue(Kt.seq,kt);return F.currentProgram=It,F.uniformsList=Ce,It}function en(T,U){const G=Ct.get(T);G.outputEncoding=U.outputEncoding,G.instancing=U.instancing,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function ba(T,U,G,F,W){U.isScene!==!0&&(U=Y),mt.resetTextureUnits();const xt=U.fog,Tt=F.isMeshStandardMaterial?U.environment:null,Pt=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Un,Dt=(F.isMeshStandardMaterial?it:lt).get(F.envMap||Tt),Nt=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,It=!!F.normalMap&&!!G.attributes.tangent,kt=!!G.morphAttributes.position,Kt=!!G.morphAttributes.normal,Ce=!!G.morphAttributes.color,an=F.toneMapped?d.toneMapping:mn,Tn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=Tn!==void 0?Tn.length:0,zt=Ct.get(F),ds=u.state.lights;if(X===!0&&(K===!0||T!==b)){const Le=T===b&&F.id===x;E.setState(F,T,Le)}let oe=!1;F.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ds.state.version||zt.outputEncoding!==Pt||W.isInstancedMesh&&zt.instancing===!1||!W.isInstancedMesh&&zt.instancing===!0||W.isSkinnedMesh&&zt.skinning===!1||!W.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==Dt||F.fog===!0&&zt.fog!==xt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==E.numPlanes||zt.numIntersection!==E.numIntersection)||zt.vertexAlphas!==Nt||zt.vertexTangents!==It||zt.morphTargets!==kt||zt.morphNormals!==Kt||zt.morphColors!==Ce||zt.toneMapping!==an||ut.isWebGL2===!0&&zt.morphTargetsCount!==Qt)&&(oe=!0):(oe=!0,zt.__version=F.version);let En=zt.currentProgram;oe===!0&&(En=Fe(F,U,W));let yr=!1,xi=!1,ps=!1;const ye=En.getUniforms(),An=zt.uniforms;if(ht.useProgram(En.program)&&(yr=!0,xi=!0,ps=!0),F.id!==x&&(x=F.id,xi=!0),yr||b!==T){if(ye.setValue(z,"projectionMatrix",T.projectionMatrix),ut.logarithmicDepthBuffer&&ye.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,xi=!0,ps=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Le=ye.map.cameraPosition;Le!==void 0&&Le.setValue(z,N.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ye.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||W.isSkinnedMesh)&&ye.setValue(z,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){ye.setOptional(z,W,"bindMatrix"),ye.setOptional(z,W,"bindMatrixInverse");const Le=W.skeleton;Le&&(ut.floatVertexTextures?(Le.boneTexture===null&&Le.computeBoneTexture(),ye.setValue(z,"boneTexture",Le.boneTexture,mt),ye.setValue(z,"boneTextureSize",Le.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ms=G.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0&&ut.isWebGL2===!0)&&tt.update(W,G,En),(xi||zt.receiveShadow!==W.receiveShadow)&&(zt.receiveShadow=W.receiveShadow,ye.setValue(z,"receiveShadow",W.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(An.envMap.value=Dt,An.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),xi&&(ye.setValue(z,"toneMappingExposure",d.toneMappingExposure),zt.needsLights&&wa(An,ps),xt&&F.fog===!0&&qt.refreshFogUniforms(An,xt),qt.refreshMaterialUniforms(An,F,B,R,j),ls.upload(z,zt.uniformsList,An,mt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ls.upload(z,zt.uniformsList,An,mt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ye.setValue(z,"center",W.center),ye.setValue(z,"modelViewMatrix",W.modelViewMatrix),ye.setValue(z,"normalMatrix",W.normalMatrix),ye.setValue(z,"modelMatrix",W.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Le=F.uniformsGroups;for(let gs=0,Ea=Le.length;gs<Ea;gs++)if(ut.isWebGL2){const Sr=Le[gs];q.update(Sr,En),q.bind(Sr,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function wa(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ta(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,U,G){Ct.get(T.texture).__webglTexture=U,Ct.get(T.depthTexture).__webglTexture=G;const F=Ct.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=G===void 0,F.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const G=Ct.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){M=T,_=U,S=G;let F=!0,W=null,xt=!1,Tt=!1;if(T){const Dt=Ct.get(T);Dt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(36160,null),F=!1):Dt.__webglFramebuffer===void 0?mt.setupRenderTarget(T):Dt.__hasExternalTextures&&mt.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);const Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Tt=!0);const It=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=It[U],xt=!0):ut.isWebGL2&&T.samples>0&&mt.useMultisampledRTT(T)===!1?W=Ct.get(T).__webglMultisampledFramebuffer:W=It,L.copy(T.viewport),P.copy(T.scissor),v=T.scissorTest}else L.copy(A).multiplyScalar(B).floor(),P.copy(O).multiplyScalar(B).floor(),v=$;if(ht.bindFramebuffer(36160,W)&&ut.drawBuffers&&F&&ht.drawBuffers(T,W),ht.viewport(L),ht.scissor(P),ht.setScissorTest(v),xt){const Dt=Ct.get(T.texture);z.framebufferTexture2D(36160,36064,34069+U,Dt.__webglTexture,G)}else if(Tt){const Dt=Ct.get(T.texture),Nt=U||0;z.framebufferTextureLayer(36160,36064,Dt.__webglTexture,G||0,Nt)}x=-1},this.readRenderTargetPixels=function(T,U,G,F,W,xt,Tt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){ht.bindFramebuffer(36160,Pt);try{const Dt=T.texture,Nt=Dt.format,It=Dt.type;if(Nt!==Ze&&_t.convert(Nt)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=It===zi&&(at.has("EXT_color_buffer_half_float")||ut.isWebGL2&&at.has("EXT_color_buffer_float"));if(It!==Nn&&_t.convert(It)!==z.getParameter(35738)&&!(It===zn&&(ut.isWebGL2||at.has("OES_texture_float")||at.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-F&&G>=0&&G<=T.height-W&&z.readPixels(U,G,F,W,_t.convert(Nt),_t.convert(It),xt)}finally{const Dt=M!==null?Ct.get(M).__webglFramebuffer:null;ht.bindFramebuffer(36160,Dt)}}},this.copyFramebufferToTexture=function(T,U,G=0){const F=Math.pow(2,-G),W=Math.floor(U.image.width*F),xt=Math.floor(U.image.height*F);mt.setTexture2D(U,0),z.copyTexSubImage2D(3553,G,0,0,T.x,T.y,W,xt),ht.unbindTexture()},this.copyTextureToTexture=function(T,U,G,F=0){const W=U.image.width,xt=U.image.height,Tt=_t.convert(G.format),Pt=_t.convert(G.type);mt.setTexture2D(G,0),z.pixelStorei(37440,G.flipY),z.pixelStorei(37441,G.premultiplyAlpha),z.pixelStorei(3317,G.unpackAlignment),U.isDataTexture?z.texSubImage2D(3553,F,T.x,T.y,W,xt,Tt,Pt,U.image.data):U.isCompressedTexture?z.compressedTexSubImage2D(3553,F,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Tt,U.mipmaps[0].data):z.texSubImage2D(3553,F,T.x,T.y,Tt,Pt,U.image),F===0&&G.generateMipmaps&&z.generateMipmap(3553),ht.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G,F,W=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=T.max.x-T.min.x+1,Tt=T.max.y-T.min.y+1,Pt=T.max.z-T.min.z+1,Dt=_t.convert(F.format),Nt=_t.convert(F.type);let It;if(F.isData3DTexture)mt.setTexture3D(F,0),It=32879;else if(F.isDataArrayTexture)mt.setTexture2DArray(F,0),It=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,F.flipY),z.pixelStorei(37441,F.premultiplyAlpha),z.pixelStorei(3317,F.unpackAlignment);const kt=z.getParameter(3314),Kt=z.getParameter(32878),Ce=z.getParameter(3316),an=z.getParameter(3315),Tn=z.getParameter(32877),Qt=G.isCompressedTexture?G.mipmaps[0]:G.image;z.pixelStorei(3314,Qt.width),z.pixelStorei(32878,Qt.height),z.pixelStorei(3316,T.min.x),z.pixelStorei(3315,T.min.y),z.pixelStorei(32877,T.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(It,W,U.x,U.y,U.z,xt,Tt,Pt,Dt,Nt,Qt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(It,W,U.x,U.y,U.z,xt,Tt,Pt,Dt,Qt.data)):z.texSubImage3D(It,W,U.x,U.y,U.z,xt,Tt,Pt,Dt,Nt,Qt),z.pixelStorei(3314,kt),z.pixelStorei(32878,Kt),z.pixelStorei(3316,Ce),z.pixelStorei(3315,an),z.pixelStorei(32877,Tn),W===0&&F.generateMipmaps&&z.generateMipmap(It),ht.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?mt.setTextureCube(T,0):T.isData3DTexture?mt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?mt.setTexture2DArray(T,0):mt.setTexture2D(T,0),ht.unbindTexture()},this.resetState=function(){_=0,S=0,M=null,ht.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(gr.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class Rd extends gr{}Rd.prototype.isWebGL1Renderer=!0;class _r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(t),this.density=e}clone(){return new _r(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Id extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class xr extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const No=new k,Uo=new k,Bo=new ue,Ys=new sa,as=new hs;class xa extends ve{constructor(t=new ze,e=new xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)No.fromBufferAttribute(e,i-1),Uo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=No.distanceTo(Uo);t.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(i),as.radius+=s,t.ray.intersectsSphere(as)===!1)return;Bo.copy(i).invert(),Ys.copy(t.ray).applyMatrix4(Bo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new k,f=new k,h=new k,u=new k,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let M=_,x=S-1;M<x;M+=m){const b=g.getX(M),L=g.getX(M+1);if(l.fromBufferAttribute(p,b),f.fromBufferAttribute(p,L),Ys.distanceSqToSegment(l,f,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(u);v<t.near||v>t.far||e.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let M=_,x=S-1;M<x;M+=m){if(l.fromBufferAttribute(p,M),f.fromBufferAttribute(p,M+1),Ys.distanceSqToSegment(l,f,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(u);L<t.near||L>t.far||e.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Oo=new k,Go=new k;class kd extends xa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Oo.fromBufferAttribute(e,i),Go.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Oo.distanceTo(Go);t.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vo extends mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ho={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class zd{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return l.push(f,h),this},this.removeHandler=function(f){const h=l.indexOf(f);return h!==-1&&l.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=l.length;h<u;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(f))return g}return null}}}const Fd=new zd;class va{constructor(t){this.manager=t!==void 0?t:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Nd extends va{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Ho.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Ni("img");function c(){f(),Ho.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){f(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Ud extends va{constructor(t){super(t)}load(t,e,n,i){const s=new Ae,a=new Nd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Bd extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Od extends Bd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}class Gd extends kd{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ze;i.setAttribute("position",new Ke(e,3)),i.setAttribute("color",new Ke(n,3));const s=new xr({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){const i=new Ut,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hr);class Vd{constructor(t,e,n,i,s,a,o,c){yt(this,"chunkMeshGroup");yt(this,"worldPosX");yt(this,"worldPosZ");yt(this,"chunkSize");yt(this,"loading");yt(this,"chunkData");yt(this,"initilized");yt(this,"deleted");yt(this,"queue");this.initilized=!1,this.deleted=!1,this.loading=!1,this.worldPosX=i,this.worldPosZ=s,this.chunkSize=t,this.chunkMeshGroup=void 0,this.chunkData=new Uint16Array,this.queue=!1;const l=new Uint16Array(n),f={type:0,chunkSize:t,chunkMaxHeight:e,chunkData:l,offsetX:i*t,offsetZ:s*t,seed:c};o.requestWork(()=>f,h=>{if(this.deleted){a();return}this.chunkData=new Uint16Array(h),this.initilized=!0,a()})}getPosX(){return this.worldPosX}getPosZ(){return this.worldPosZ}getBlockData(){return this.chunkData}isInitilized(){return this.initilized}load(t,e,n,i,s,a,o){if(this.deleted||!this.initilized)return;if(this.loading){this.queue=!0;return}this.loading=!0;const c=()=>{var d,p,_,S;let l,f,h,u,m;return(d=n.get(`${this.worldPosX},${this.worldPosZ-1}`))!=null&&d.isInitilized()&&(f=n.get(`${this.worldPosX},${this.worldPosZ-1}`).chunkData),(p=n.get(`${this.worldPosX},${this.worldPosZ+1}`))!=null&&p.isInitilized()&&(h=n.get(`${this.worldPosX},${this.worldPosZ+1}`).chunkData),(_=n.get(`${this.worldPosX-1},${this.worldPosZ}`))!=null&&_.isInitilized()&&(u=n.get(`${this.worldPosX-1},${this.worldPosZ}`).chunkData),(S=n.get(`${this.worldPosX+1},${this.worldPosZ}`))!=null&&S.isInitilized()&&(m=n.get(`${this.worldPosX+1},${this.worldPosZ}`).chunkData),l=this.chunkData,{type:1,chunkSize:t,chunkMaxHeight:e,offsetX:this.worldPosX*t,offsetZ:this.worldPosZ*t,blockBuffer:l,blockBufferA:f,blockBufferB:h,blockBufferC:u,blockBufferD:m,seed:a}};s.requestWork(c,l=>{if(this.deleted||l.length<=0)return;const f=new Pi;{let h=new Uint8ClampedArray(l[0]),u=new Float32Array(l[1]);const m=new ze;m.setAttribute("position",new xe(h,3)),m.setAttribute("uv",new xe(u,2)),h=void 0,u=void 0,m.computeVertexNormals();const g=new Vo({side:on,map:o});g.needsUpdate=!0;const d=new Je(m,g);d.position.x=this.worldPosX*this.chunkSize,d.position.z=this.worldPosZ*this.chunkSize,d.renderOrder=0,f.add(d)}{let h=new Uint8ClampedArray(l[2]),u=new Float32Array(l[3]);const m=new ze;m.setAttribute("position",new xe(h,3)),m.setAttribute("uv",new xe(u,2)),h=void 0,u=void 0,m.computeVertexNormals();const g=new Vo({side:on,transparent:!0,opacity:.5,map:o}),d=new Je(m,g);d.position.x=this.worldPosX*this.chunkSize,d.position.z=this.worldPosZ*this.chunkSize,d.renderOrder=1,f.add(d)}{let h=new Uint8ClampedArray(l[4]),u=new Float32Array(l[5]);const m=new ze;m.setAttribute("position",new xe(h,3)),m.setAttribute("uv",new xe(u,2)),h=void 0,u=void 0,m.computeVertexNormals();const g=new dr({map:o,side:pn,transparent:!1,alphaTest:.5}),d=new Je(m,g);d.position.x=this.worldPosX*this.chunkSize,d.position.z=this.worldPosZ*this.chunkSize,d.renderOrder=2,f.add(d)}this.chunkMeshGroup!=null&&this.chunkMeshGroup!=null&&(this.chunkMeshGroup.children.forEach(h=>{h.isMesh&&(h.geometry.dispose(),h.material.dispose())}),i.remove(this.chunkMeshGroup),this.chunkMeshGroup=void 0),this.chunkMeshGroup=f,i.add(f),this.loading=!1,this.queue&&(this.queue=!1,this.load(t,e,n,i,s,a,o))})}removeChunk(t){this.deleted=!0,this.chunkMeshGroup!=null&&(this.chunkMeshGroup.children.forEach(e=>{e.isMesh&&(e.geometry.dispose(),e.material.dispose())}),t.remove(this.chunkMeshGroup),this.chunkMeshGroup=void 0,this.chunkData=new Uint16Array)}}class Hd{constructor(t){yt(this,"workers");yt(this,"busycheck");yt(this,"callbackStack");yt(this,"queue");this.workers=[],this.busycheck=[],this.callbackStack=[],this.queue=[];for(let e=0;e<t;e++){let n=new Worker(new URL("/assets/worker-4d6d6c65.js",self.location),{type:"module"});this.workers.push(n),this.busycheck.push(!1),this.callbackStack.push(void 0),n.onerror=i=>{console.log(i),this.callbackStack[e]([]),this.busycheck[e]=!1,this.callbackStack[e]=void 0,this.nextInQueue(e)},n.onmessage=i=>{this.callbackStack[e](i.data),this.busycheck[e]=!1,this.callbackStack[e]=void 0,this.nextInQueue(e)}}}nextInQueue(t){if(this.queue.length>0){let e=this.queue.shift();this.busycheck[t]=!0,this.callbackStack[t]=e.doneCallback,this.workers[t].postMessage(e.data())}}requestWork(t,e){let n;for(let i=0;i<this.workers.length;i++)if(this.busycheck[i]==!1){n=i;break}n==null?this.queue.push({data:t,doneCallback:e}):(this.busycheck[n]=!0,this.callbackStack[n]=e,this.workers[n].postMessage(t()))}}var Vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wd(r){if(r.__esModule)return r;var t=r.default;if(typeof t=="function"){var e=function n(){if(this instanceof n){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(t,i);return new s}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}),e}var sr={},Xd={get exports(){return sr},set exports(r){sr=r}};(function(r){(function(t,e,n){function i(c){var l=this,f=o();l.next=function(){var h=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=h-(l.c=h|0)},l.c=1,l.s0=f(" "),l.s1=f(" "),l.s2=f(" "),l.s0-=f(c),l.s0<0&&(l.s0+=1),l.s1-=f(c),l.s1<0&&(l.s1+=1),l.s2-=f(c),l.s2<0&&(l.s2+=1),f=null}function s(c,l){return l.c=c.c,l.s0=c.s0,l.s1=c.s1,l.s2=c.s2,l}function a(c,l){var f=new i(c),h=l&&l.state,u=f.next;return u.int32=function(){return f.next()*4294967296|0},u.double=function(){return u()+(u()*2097152|0)*11102230246251565e-32},u.quick=u,h&&(typeof h=="object"&&s(h,f),u.state=function(){return s(f,{})}),u}function o(){var c=4022871197,l=function(f){f=String(f);for(var h=0;h<f.length;h++){c+=f.charCodeAt(h);var u=.02519603282416938*c;c=u>>>0,u-=c,u*=c,c=u>>>0,u-=c,c+=u*4294967296}return(c>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.alea=a})(Vn,r,!1)})(Xd);var rr={},qd={get exports(){return rr},set exports(r){rr=r}};(function(r){(function(t,e,n){function i(o){var c=this,l="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var h=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^h^h>>>8},o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,c.next()}function s(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c}function a(o,c){var l=new i(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var u=l.next()>>>11,m=(l.next()>>>0)/4294967296,g=(u+m)/(1<<21);while(g===0);return g},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&s(f,l),h.state=function(){return s(l,{})}),h}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a})(Vn,r,!1)})(qd);var or={},$d={get exports(){return or},set exports(r){or=r}};(function(r){(function(t,e,n){function i(o){var c=this,l="";c.next=function(){var h=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(h^h<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,o===(o|0)?c.x=o:l+=o;for(var f=0;f<l.length+64;f++)c.x^=l.charCodeAt(f)|0,f==l.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function s(o,c){return c.x=o.x,c.y=o.y,c.z=o.z,c.w=o.w,c.v=o.v,c.d=o.d,c}function a(o,c){var l=new i(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var u=l.next()>>>11,m=(l.next()>>>0)/4294967296,g=(u+m)/(1<<21);while(g===0);return g},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&s(f,l),h.state=function(){return s(l,{})}),h}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a})(Vn,r,!1)})($d);var ar={},jd={get exports(){return ar},set exports(r){ar=r}};(function(r){(function(t,e,n){function i(o){var c=this;c.next=function(){var f=c.x,h=c.i,u,m;return u=f[h],u^=u>>>7,m=u^u<<24,u=f[h+1&7],m^=u^u>>>10,u=f[h+3&7],m^=u^u>>>3,u=f[h+4&7],m^=u^u<<7,u=f[h+7&7],u=u^u<<13,m^=u^u<<9,f[h]=m,c.i=h+1&7,m};function l(f,h){var u,m=[];if(h===(h|0))m[0]=h;else for(h=""+h,u=0;u<h.length;++u)m[u&7]=m[u&7]<<15^h.charCodeAt(u)+m[u+1&7]<<13;for(;m.length<8;)m.push(0);for(u=0;u<8&&m[u]===0;++u);for(u==8?m[7]=-1:m[u],f.x=m,f.i=0,u=256;u>0;--u)f.next()}l(c,o)}function s(o,c){return c.x=o.x.slice(),c.i=o.i,c}function a(o,c){o==null&&(o=+new Date);var l=new i(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var u=l.next()>>>11,m=(l.next()>>>0)/4294967296,g=(u+m)/(1<<21);while(g===0);return g},h.int32=l.next,h.quick=h,f&&(f.x&&s(f,l),h.state=function(){return s(l,{})}),h}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a})(Vn,r,!1)})(jd);var lr={},Yd={get exports(){return lr},set exports(r){lr=r}};(function(r){(function(t,e,n){function i(o){var c=this;c.next=function(){var f=c.w,h=c.X,u=c.i,m,g;return c.w=f=f+1640531527|0,g=h[u+34&127],m=h[u=u+1&127],g^=g<<13,m^=m<<17,g^=g>>>15,m^=m>>>12,g=h[u]=g^m,c.i=u,g+(f^f>>>16)|0};function l(f,h){var u,m,g,d,p,_=[],S=128;for(h===(h|0)?(m=h,h=null):(h=h+"\0",m=0,S=Math.max(S,h.length)),g=0,d=-32;d<S;++d)h&&(m^=h.charCodeAt((d+32)%h.length)),d===0&&(p=m),m^=m<<10,m^=m>>>15,m^=m<<4,m^=m>>>13,d>=0&&(p=p+1640531527|0,u=_[d&127]^=m+p,g=u==0?g+1:0);for(g>=128&&(_[(h&&h.length||0)&127]=-1),g=127,d=4*128;d>0;--d)m=_[g+34&127],u=_[g=g+1&127],m^=m<<13,u^=u<<17,m^=m>>>15,u^=u>>>12,_[g]=m^u;f.w=p,f.X=_,f.i=g}l(c,o)}function s(o,c){return c.i=o.i,c.w=o.w,c.X=o.X.slice(),c}function a(o,c){o==null&&(o=+new Date);var l=new i(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var u=l.next()>>>11,m=(l.next()>>>0)/4294967296,g=(u+m)/(1<<21);while(g===0);return g},h.int32=l.next,h.quick=h,f&&(f.X&&s(f,l),h.state=function(){return s(l,{})}),h}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a})(Vn,r,!1)})(Yd);var cr={},Zd={get exports(){return cr},set exports(r){cr=r}};(function(r){(function(t,e,n){function i(o){var c=this,l="";c.next=function(){var h=c.b,u=c.c,m=c.d,g=c.a;return h=h<<25^h>>>7^u,u=u-m|0,m=m<<24^m>>>8^g,g=g-h|0,c.b=h=h<<20^h>>>12^u,c.c=u=u-m|0,c.d=m<<16^u>>>16^g,c.a=g-h|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,o===Math.floor(o)?(c.a=o/4294967296|0,c.b=o|0):l+=o;for(var f=0;f<l.length+20;f++)c.b^=l.charCodeAt(f)|0,c.next()}function s(o,c){return c.a=o.a,c.b=o.b,c.c=o.c,c.d=o.d,c}function a(o,c){var l=new i(o),f=c&&c.state,h=function(){return(l.next()>>>0)/4294967296};return h.double=function(){do var u=l.next()>>>11,m=(l.next()>>>0)/4294967296,g=(u+m)/(1<<21);while(g===0);return g},h.int32=l.next,h.quick=h,f&&(typeof f=="object"&&s(f,l),h.state=function(){return s(l,{})}),h}e&&e.exports?e.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a})(Vn,r,!1)})(Zd);var ur={},Jd={get exports(){return ur},set exports(r){ur=r}};const Kd={},Qd=Object.freeze(Object.defineProperty({__proto__:null,default:Kd},Symbol.toStringTag,{value:"Module"})),tp=Wd(Qd);(function(r){(function(t,e,n){var i=256,s=6,a=52,o="random",c=n.pow(i,s),l=n.pow(2,a),f=l*2,h=i-1,u;function m(x,b,L){var P=[];b=b==!0?{entropy:!0}:b||{};var v=_(p(b.entropy?[x,M(e)]:x??S(),3),P),w=new g(P),R=function(){for(var B=w.g(s),D=c,C=0;B<l;)B=(B+C)*i,D*=i,C=w.g(1);for(;B>=f;)B/=2,D/=2,C>>>=1;return(B+C)/D};return R.int32=function(){return w.g(4)|0},R.quick=function(){return w.g(4)/4294967296},R.double=R,_(M(w.S),e),(b.pass||L||function(B,D,C,A){return A&&(A.S&&d(A,w),B.state=function(){return d(w,{})}),C?(n[o]=B,D):B})(R,v,"global"in b?b.global:this==n,b.state)}function g(x){var b,L=x.length,P=this,v=0,w=P.i=P.j=0,R=P.S=[];for(L||(x=[L++]);v<i;)R[v]=v++;for(v=0;v<i;v++)R[v]=R[w=h&w+x[v%L]+(b=R[v])],R[w]=b;(P.g=function(B){for(var D,C=0,A=P.i,O=P.j,$=P.S;B--;)D=$[A=h&A+1],C=C*i+$[h&($[A]=$[O=h&O+D])+($[O]=D)];return P.i=A,P.j=O,C})(i)}function d(x,b){return b.i=x.i,b.j=x.j,b.S=x.S.slice(),b}function p(x,b){var L=[],P=typeof x,v;if(b&&P=="object")for(v in x)try{L.push(p(x[v],b-1))}catch{}return L.length?L:P=="string"?x:x+"\0"}function _(x,b){for(var L=x+"",P,v=0;v<L.length;)b[h&v]=h&(P^=b[h&v]*19)+L.charCodeAt(v++);return M(b)}function S(){try{var x;return u&&(x=u.randomBytes)?x=x(i):(x=new Uint8Array(i),(t.crypto||t.msCrypto).getRandomValues(x)),M(x)}catch{var b=t.navigator,L=b&&b.plugins;return[+new Date,t,L,t.screen,M(e)]}}function M(x){return String.fromCharCode.apply(0,x)}if(_(n.random(),e),r.exports){r.exports=m;try{u=tp}catch{}}else n["seed"+o]=m})(typeof self<"u"?self:Vn,[],Math)})(Jd);var ep=sr,np=rr,ip=or,sp=ar,rp=lr,op=cr,Hn=ur;Hn.alea=ep;Hn.xor128=np;Hn.xorwow=ip;Hn.xorshift7=sp;Hn.xor4096=rp;Hn.tychei=op;var Di=Hn;const ap=.5*(Math.sqrt(3)-1),Ei=(3-Math.sqrt(3))/6,Wo=r=>Math.floor(r)|0,Xo=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Ri(r=Math.random){const t=lp(r),e=new Float64Array(t).map(i=>Xo[i%12*2]),n=new Float64Array(t).map(i=>Xo[i%12*2+1]);return function(s,a){let o=0,c=0,l=0;const f=(s+a)*ap,h=Wo(s+f),u=Wo(a+f),m=(h+u)*Ei,g=h-m,d=u-m,p=s-g,_=a-d;let S,M;p>_?(S=1,M=0):(S=0,M=1);const x=p-S+Ei,b=_-M+Ei,L=p-1+2*Ei,P=_-1+2*Ei,v=h&255,w=u&255;let R=.5-p*p-_*_;if(R>=0){const C=v+t[w],A=e[C],O=n[C];R*=R,o=R*R*(A*p+O*_)}let B=.5-x*x-b*b;if(B>=0){const C=v+S+t[w+M],A=e[C],O=n[C];B*=B,c=B*B*(A*x+O*b)}let D=.5-L*L-P*P;if(D>=0){const C=v+1+t[w+1],A=e[C],O=n[C];D*=D,l=D*D*(A*L+O*P)}return 70*(o+c+l)}}function lp(r){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(r()*(256-n)),s=e[n];e[n]=e[i],e[i]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}function Zs(r,t){return r+Math.floor(Math.random()*(t-r+1))}const St=(r,t,e)=>(r-t[0])*(e[1]-e[0])/(t[1]-t[0])+e[0];function cp(r){let t="";const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<r;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}Ri(Di.alea("bla."));const up=(r,t,e)=>St(e(r/1e3,t/1e3),[-1,1],[0,1]);function Gt(r,t,e){return 2*(.5-Math.abs(.5-up(r,t,e)))}const hp=(r,t,e)=>{let i=1.2;const s=i*Gt(r/i,t/i,e),a=i/2*Gt(r/(i/2),t/(i/2),e)*s,o=i/4*Gt(r/(i/4),t/(i/4),e)*(s+a),c=(s+a+o)/(i+i/2+i/4);let l=Math.pow(c,10);l=Math.min(c,1);let f=0;{let u=.06,m=3e3,g=3e3;const d=u*Gt(r/u+m,t/u+g,e),p=u/2*Gt(r/(u/2)+m,t/(u/2)+g,e)*d,_=u/4*Gt(r/(u/4)+m,t/(u/4)+g,e)*(d+p),S=(d+p+_)/(u+u/2+u/4);f=Math.pow(S,2),f=Math.min(S,1)}return St(l,[0,1],[10,150])+St(f,[0,1],[0,15])},fp=(r,t,e)=>{let n=1,i=100*St(e(r/100,t/100),[-1,1],[0,1])+75*St(e(r/75,t/75),[-1,1],[0,1])+50*St(e(r/50,t/50),[-1,1],[0,1]);i/=100+75+50,i=Math.pow(i,n);let s=0;{let o=.12,c=3e3,l=3e3;const f=o*Gt(r/o+c,t/o+l,e),h=o/2*Gt(r/(o/2)+c,t/(o/2)+l,e)*f,u=o/4*Gt(r/(o/4)+c,t/(o/4)+l,e)*(f+h),m=(f+h+u)/(o+o/2+o/4);s=Math.pow(m,10),s=Math.min(m,1)}return St(i,[0,1],[-5,0])+St(s,[0,1],[-15,0])-60},dp=(r,t,e)=>{let n=1,i=100*St(e(r/100,t/100),[-1,1],[0,1])+75*St(e(r/75,t/75),[-1,1],[0,1])+50*St(e(r/50,t/50),[-1,1],[0,1]);i/=100+75+50,i=Math.pow(i,n);let s=0;{let o=.1,c=3e3,l=3e3;const f=o*Gt(r/o+c,t/o+l,e),h=o/2*Gt(r/(o/2)+c,t/(o/2)+l,e)*f,u=o/4*Gt(r/(o/4)+c,t/(o/4)+l,e)*(f+h),m=(f+h+u)/(o+o/2+o/4);s=Math.pow(m,2),s=Math.min(m,1)}return St(i,[0,1],[-5,0])+St(s,[0,1],[-15,0])-30},pp=(r,t,e)=>{let n=2,i=100*St(e(r/100,t/100),[-1,1],[0,1])+75*St(e(r/75,t/75),[-1,1],[0,1])+50*St(e(r/50,t/50),[-1,1],[0,1]);i/=100+75+50,i=Math.pow(i,n);let s=0;{let o=.2,c=3e3,l=3e3;const f=o*Gt(r/o+c,t/o+l,e),h=o/2*Gt(r/(o/2)+c,t/(o/2)+l,e)*f,u=o/4*Gt(r/(o/4)+c,t/(o/4)+l,e)*(f+h),m=(f+h+u)/(o+o/2+o/4);s=Math.pow(m,3),s=Math.min(m,1)}return St(i,[0,1],[-5,0])+St(s,[0,1],[-15,0])},mp=(r,t,e)=>{let n=3,i=100*St(e(r/100,t/100),[-1,1],[0,1])+75*St(e(r/75,t/75),[-1,1],[0,1])+50*St(e(r/50,t/50),[-1,1],[0,1]);i/=100+75+50,i=Math.pow(i,n);let s=0;return s=50*St(e(r/50,t/50),[-1,1],[0,1]),s+=40*St(e(r/40,t/40),[-1,1],[0,1]),s+=30*St(e(r/30,t/30),[-1,1],[0,1]),s+=20*St(e(r/20,t/20),[-1,1],[0,1]),s/=50+40+30+20,i=Math.min(.35,i),St(i,[0,1],[-25,50])+St(s,[0,1],[0,15])},gp=(r,t,e)=>{let n=Math.min(.5,1*St(e(r/30,t/30),[-1,1],[0,1]))+.125*St(e(r/2/16,t/2/16),[-1,1],[0,1]);return n/=.5+2/16,n=Math.min(1,n),St(n,[0,1],[-20,6])},_p=(r,t,e)=>{let n=1,i=100*St(e(r/100,t/100),[-1,1],[0,1])+75*St(e(r/75,t/75),[-1,1],[0,1])+50*St(e(r/50,t/50),[-1,1],[0,1]);return i/=100+75+50,i=Math.pow(i,n),St(i,[0,1],[0,25])},xp=(r,t,e)=>{let i=.2;const s=i*Gt(r/i,t/i,e),a=i/2*Gt(r/(i/2),t/(i/2),e)*s,o=i/4*Gt(r/(i/4),t/(i/4),e)*(s+a),c=(s+a+o)/(i+i/2+i/4);let l=Math.pow(c,1);l=Math.min(c,1);let f=0;{let u=.1,m=3e3,g=3e3;const d=u*Gt(r/u+m,t/u+g,e),p=u/2*Gt(r/(u/2)+m,t/(u/2)+g,e)*d,_=u/4*Gt(r/(u/4)+m,t/(u/4)+g,e)*(d+p),S=(d+p+_)/(u+u/2+u/4);f=Math.pow(S,2),f=Math.min(S,1)}return St(l,[0,1],[0,20])+St(f,[0,1],[0,5])},vp=(r,t,e)=>{let i=.05;const s=i*Gt(r/i,t/i,e),a=i/2*Gt(r/(i/2),t/(i/2),e)*s,o=i/4*Gt(r/(i/4),t/(i/4),e)*(s+a),c=(s+a+o)/(i+i/2+i/4);let l=Math.min(.5,1-Math.pow(c,1));return l/=.5,l+=2/16*St(e(r/2/16,t/2/16),[-1,1],[0,1]),l/=1+2/16,St(l,[0,1],[-64,10])},Mp=(r,t,e)=>{let i=.4;const s=i*Gt(r/i,t/i,e),a=i/2*Gt(r/(i/2),t/(i/2),e)*s,o=i/4*Gt(r/(i/4),t/(i/4),e)*(s+a),c=(s+a+o)/(i+i/2+i/4);let l=Math.min(.5,1-Math.pow(c,1));return l/=.5,l+=2/16*St(e(r/2/16,t/2/16),[-1,1],[0,1]),l/=1+2/16,St(l,[0,1],[-64,10])},_e=[["deepOcean","normalOcean"],["sea","islands","mangrove","closeRivers"],["rivers","plains","desert"]],Ai=r=>r=="deepOcean"?fp:r=="normalOcean"?dp:r=="sea"?pp:r=="islands"?mp:r=="mangrove"?gp:r=="closeRivers"?vp:r=="plains"?_p:r=="desert"?xp:r=="rivers"?Mp:r=="mountainRanges"?hp:()=>0,yp=180;let qo=5;const Sp=(r,t,e,n,i)=>{const s=yp,a=(d,p,_,S)=>{let M=[d,100,50],x=0;return M.forEach(b=>{x+=b*St(S(p/b,_/b),[-1,1],[0,1])}),x/=M.reduce((b,L)=>b+L),x=Math.min(x,1),x},o=a(2e3,r,t,e),c=1/_e.length,l=Math.min(Math.trunc(o/c),_e.length-1);let f=c/qo,h=o%c;const u=l,m=a(1e3,r,t,n),g=d=>{const p=1/_e[d].length,_=Math.min(Math.trunc(m/p),_e[d].length-1);let S=p/qo,M=m%p;const x=_;if(M<=S&&x!=0){let b=St(M,[0,S],[.5,1]);const L=_e[d][x-1],P=_e[d][x];return Ai(L)(r,t,i)*(1-b)+Ai(P)(r,t,i)*b}else if(M>=p-S&&x!=_e[d].length-1){let b=St(M,[p-S,p],[0,.5]);const L=_e[d][x],P=_e[d][x+1];return Ai(L)(r,t,i)*(1-b)+Ai(P)(r,t,i)*b}else{const b=_e[d][x];return Ai(b)(r,t,i)}};if(h<=f&&u!=0){let d=St(h,[0,f],[.5,1]);return g(u-1)*(1-d)+g(u)*d+s}else if(h>=c-f&&u!=_e.length-1){let d=St(h,[c-f,c],[0,.5]);return g(u)*(1-d)+g(u+1)*d+s}else return g(u)+s},bp=(r,t,e,n)=>{const i=(u,m,g,d)=>{let p=[u,100,50],_=0;return p.forEach(S=>{_+=S*St(d(m/S,g/S),[-1,1],[0,1])}),_/=p.reduce((S,M)=>S+M),_=Math.min(_,1),_},s=i(2e3,r,t,e),a=1/_e.length,c=Math.min(Math.trunc(s/a),_e.length-1),l=i(1e3,r,t,n),f=1/_e[c].length,h=Math.min(Math.trunc(l/f),_e[c].length-1);return _e[c][h]},le=new k(0,0,0),ce=new k(1,0,0),Zt=new k(0,1,0),be=new k(1,1,0),Ue=new k(0,0,1),Xt=new k(1,0,1),Jt=new k(0,1,1),we=new k(1,1,1),bn=(r,t,e,n,i)=>{const s=r*n*i*At,a=e*n*At,o=t*At;return s+a+o};var ge=(r=>(r[r.air=0]="air",r[r.block=1]="block",r[r.water=2]="water",r[r.detail=3]="detail",r))(ge||{});const me=512/32,Mn=512,yn=512,vr=(r,t,e,n,i,s)=>{if(n<0||n>=t||i<0||i>=e||s<0||s>=t)return 0;const a=bn(n,i,s,e,t);return r==null||!(n==r[a]&&i==r[a+1]&&s==r[a+2])||r[a+At-1]==null?0:r[a+At-1]},qe=(r,t,e,n,i,s)=>vr(r,t,e,n,i,s)==0,$e=(r,t,e,n,i,s)=>vr(r,t,e,n,i,s)==2,je=(r,t,e,n,i,s)=>vr(r,t,e,n,i,s)==3,At=5,cs=180,wp=(r,t,e)=>{if(r==0)return ee.Bedrock;if(t<=cs+2){if(r>=t-6)return t>cs-5?ee.Sand:ee.Gravel}else if(e=="plains"){if(r>=t-2)return ee.PlainsGrass;if(r>=t-6)return ee.Dirt}else if(e=="rivers"||e=="closeRivers"||e=="islands"||e=="sea"){if(r>=t-2)return ee.RiverGrass;if(r>=t-6)return ee.Dirt}else if(e=="mangrove"){if(r>=t-2)return ee.MangroveGrass;if(r>=t-6)return ee.Dirt}else if(e=="desert"){if(r>=t-6)return ee.Sand}else{if(r>=t-2)return ee.PlainsGrass;if(r>=t-6)return ee.Dirt}return ee.Stone},ii=(r,t,e,n,i,s,a,o,c)=>{const l=[];for(let f=0;f<n;f++)for(let h=0;h<n;h++){let u=e+h,m=t+f;const g=Math.round(Sp(m,u,s,a,o));let d=St(r(m/200,u/200),[-1,1],[0,g-10]),p=St(r(m/200+3e3,u/200+3e3),[-1,1],[0,g-10]);const _=bp(m,u,s,a);for(let S=0;S<i;S++){S<180?l.push(f,S,h,3,2):l.push(f,S,h,0,0);let M=!1;if(d>p&&S>p&&S<d&&(M=!0),S<g){const x=bn(f,S,h,i,n);l[x+At-1]=M?0:1,l[x+At-2]=wp(S,g,_)}else if(S==g&&S>cs+2&&(_=="plains"||_=="rivers"||_=="mangrove"||_=="islands")&&Zs(0,1)==0){const x=bn(f,S,h,i,n);l[x+At-1]=3;let b=Zs(0,100);b==0?l[x+At-2]=ee.Grass:b==1?l[x+At-2]=ee.RedFlower:b==2?l[x+At-2]=ee.YellowFlower:b==3?l[x+At-2]=ee.PinkFlower:l[x+At-2]=ee.Grass}else if(S==g&&S>cs+2&&_=="desert"&&Zs(0,100)==0){const x=bn(f,S,h,i,n);l[x+At-1]=3,l[x+At-2]=ee.DeadBush}}}if(c!=null)for(let f=0;f<c.length;f+=At){const h=c[f],u=c[f+1],m=c[f+2],g=bn(h,u,m,i,n);l[g+At]!=null&&(l[g+3]=c[f+3],l[g+4]=c[f+4])}return l};var ee=(r=>(r[r.Air=0]="Air",r[r.Bedrock=1]="Bedrock",r[r.Stone=2]="Stone",r[r.Water=3]="Water",r[r.Dirt=4]="Dirt",r[r.Gravel=5]="Gravel",r[r.Sand=6]="Sand",r[r.PlainsGrass=7]="PlainsGrass",r[r.RiverGrass=8]="RiverGrass",r[r.MangroveGrass=9]="MangroveGrass",r[r.Grass=10]="Grass",r[r.DeadBush=11]="DeadBush",r[r.RedFlower=12]="RedFlower",r[r.YellowFlower=13]="YellowFlower",r[r.PinkFlower=14]="PinkFlower",r))(ee||{});const Tp=r=>r==0?[0,0,0,0,0,0]:r==1?[0,2,0,2,0,2]:r==2?[0,2,0,2,0,2]:r==3?[3,2,3,2,3,2]:r==4?[2,1,2,1,2,1]:r==5?[1,2,1,2,1,2]:r==6?[2,2,2,2,2,2]:r==7?[0,1,2,1,1,1]:r==8?[0,1,2,1,1,1]:r==9?[0,1,2,1,1,1]:r==10?[4,2,4,2,4,2]:r==12?[4,3,4,3,4,3]:r==13?[5,3,5,3,5,3]:r==14?[3,3,3,3,3,3]:r==11?[5,2,5,2,5,2]:[0,0,0,0,0,0];self.onmessage=r=>{const{type:t,chunkMaxHeight:e,chunkSize:n,offsetX:i,offsetZ:s,seed:a}=r.data,o=Ri(Di.alea(a+"generalHeight.")),c=Ri(Di.alea(a+"heightBiome.")),l=Ri(Di.alea(a+"generalBiomeConstructionNoiseFunction.")),f=Ri(Di.alea(a+"caveNoiseFunction."));if(t==0){const{chunkData:h}=r.data,u=ii(f,i,s,n,e,o,c,l,h),m=new Uint16Array(u);self.postMessage(m.buffer,[m.buffer])}else if(t==1){const{blockBuffer:h,blockBufferA:u,blockBufferB:m,blockBufferC:g,blockBufferD:d}=r.data;let p=h,_=u,S=m,M=g,x=d;p==null&&(p=ii(f,i,s,n,e,o,c,l)),_==null&&(_=ii(f,i,s-16,n,e,o,c,l)),S==null&&(S=ii(f,i,s+16,n,e,o,c,l)),M==null&&(M=ii(f,i-16,s,n,e,o,c,l)),x==null&&(x=ii(f,i+16,s,n,e,o,c,l));const b=[],L=[],P=[],v=[],w=[],R=[];for(let B=0;B<p.length;B+=At){const D=p[B],C=p[B+1],A=p[B+2],O=p[B+3],[$,J,X,K,j,dt]=Tp(O);if(qe(p,n,e,D,C,A))continue;const N=$e(p,n,e,D,C,A),Y=je(p,n,e,D,C,A),Q=Y?w:N?P:b,z=Y?R:N?v:L;if(Y){{const mt=[Zt.x+D,Zt.y+C,Zt.z+A,Xt.x+D,Xt.y+C,Xt.z+A,le.x+D,le.y+C,le.z+A,we.x+D,we.y+C,we.z+A,Xt.x+D,Xt.y+C,Xt.z+A,Zt.x+D,Zt.y+C,Zt.z+A],lt=[1,1,0,0,1,0,0,1,0,0,1,1];for(let it=0;it<lt.length;it+=2){let Rt=[lt[it],lt[it+1]];const Ot=j,Bt=dt;z.push((Ot+Rt[0])*me/Mn),z.push(1-(Bt+1-Rt[1])*me/yn)}mt.forEach(it=>Q.push(it))}{const mt=[Ue.x+D,Ue.y+C,Ue.z+A,ce.x+D,ce.y+C,ce.z+A,Jt.x+D,Jt.y+C,Jt.z+A,Jt.x+D,Jt.y+C,Jt.z+A,ce.x+D,ce.y+C,ce.z+A,be.x+D,be.y+C,be.z+A],lt=[0,0,1,0,0,1,0,1,1,0,1,1];for(let it=0;it<lt.length;it+=2){let Rt=[lt[it],lt[it+1]];const Ot=j,Bt=dt;z.push((Ot+Rt[0])*me/Mn),z.push(1-(Bt+1-Rt[1])*me/yn)}mt.forEach(it=>Q.push(it))}continue}let ct=!je(p,n,e,D,C,A-1)&&!qe(p,n,e,D,C,A-1)&&(N?!0:!$e(p,n,e,D,C,A-1)),at=!je(p,n,e,D,C,A+1)&&!qe(p,n,e,D,C,A+1)&&(N?!0:!$e(p,n,e,D,C,A+1)),ut=!je(p,n,e,D-1,C,A)&&!qe(p,n,e,D-1,C,A)&&(N?!0:!$e(p,n,e,D-1,C,A)),ht=!je(p,n,e,D+1,C,A)&&!qe(p,n,e,D+1,C,A)&&(N?!0:!$e(p,n,e,D+1,C,A));const vt=!je(p,n,e,D,C+1,A)&&!qe(p,n,e,D,C+1,A)&&(N?!0:!$e(p,n,e,D,C+1,A)),Ct=!je(p,n,e,D,C-1,A)&&!qe(p,n,e,D,C-1,A)&&(N?!0:!$e(p,n,e,D,C-1,A));if(A==0&&!je(_,n,e,D,C,n-1)&&!qe(_,n,e,D,C,n-1)&&(N||!$e(_,n,e,D,C,n-1))&&(ct=!0),A==n-1&&!je(S,n,e,D,C,0)&&!qe(S,n,e,D,C,0)&&(N||!$e(S,n,e,D,C,0))&&(at=!0),D==0&&!je(M,n,e,n-1,C,A)&&!qe(M,n,e,n-1,C,A)&&(N||!$e(M,n,e,n-1,C,A))&&(ut=!0),D==n-1&&!je(x,n,e,0,C,A)&&!qe(x,n,e,0,C,A)&&(N||!$e(x,n,e,0,C,A))&&(ht=!0),!ct){const mt=[Zt.x+D,Zt.y+C,Zt.z+A,ce.x+D,ce.y+C,ce.z+A,le.x+D,le.y+C,le.z+A,be.x+D,be.y+C,be.z+A,ce.x+D,ce.y+C,ce.z+A,Zt.x+D,Zt.y+C,Zt.z+A],lt=[1,1,0,0,1,0,0,1,0,0,1,1];for(let it=0;it<lt.length;it+=2){let Rt=[lt[it],lt[it+1]];const Ot=j,Bt=dt;z.push((Ot+Rt[0])*me/Mn),z.push(1-(Bt+1-Rt[1])*me/yn)}mt.forEach(it=>Q.push(it))}if(!at){const mt=[Ue.x+D,Ue.y+C,Ue.z+A,Xt.x+D,Xt.y+C,Xt.z+A,Jt.x+D,Jt.y+C,Jt.z+A,Jt.x+D,Jt.y+C,Jt.z+A,Xt.x+D,Xt.y+C,Xt.z+A,we.x+D,we.y+C,we.z+A],lt=[0,0,1,0,0,1,0,1,1,0,1,1];for(let it=0;it<lt.length;it+=2){let Rt=[lt[it],lt[it+1]];const Ot=j,Bt=dt;z.push((Ot+Rt[0])*me/Mn),z.push(1-(Bt+1-Rt[1])*me/yn)}mt.forEach(it=>Q.push(it))}if(!ut){const mt=[le.x+D,le.y+C,le.z+A,Ue.x+D,Ue.y+C,Ue.z+A,Jt.x+D,Jt.y+C,Jt.z+A,Jt.x+D,Jt.y+C,Jt.z+A,Zt.x+D,Zt.y+C,Zt.z+A,le.x+D,le.y+C,le.z+A],lt=[0,0,1,0,1,1,1,1,0,1,0,0];for(let it=0;it<lt.length;it+=2){let Rt=[lt[it],lt[it+1]];const Ot=j,Bt=dt;z.push((Ot+Rt[0])*me/Mn),z.push(1-(Bt+1-Rt[1])*me/yn)}mt.forEach(it=>Q.push(it))}if(!ht){const mt=[be.x+D,be.y+C,be.z+A,Xt.x+D,Xt.y+C,Xt.z+A,ce.x+D,ce.y+C,ce.z+A,we.x+D,we.y+C,we.z+A,Xt.x+D,Xt.y+C,Xt.z+A,be.x+D,be.y+C,be.z+A],lt=[1,1,0,0,1,0,0,1,0,0,1,1];for(let it=0;it<lt.length;it+=2){let Rt=[lt[it],lt[it+1]];const Ot=j,Bt=dt;z.push((Ot+Rt[0])*me/Mn),z.push(1-(Bt+1-Rt[1])*me/yn)}mt.forEach(it=>Q.push(it))}if(!vt){const mt=[we.x+D,we.y+C,we.z+A,be.x+D,be.y+C,be.z+A,Zt.x+D,Zt.y+C,Zt.z+A,Zt.x+D,Zt.y+C,Zt.z+A,Jt.x+D,Jt.y+C,Jt.z+A,we.x+D,we.y+C,we.z+A],lt=[0,1,0,0,1,0,1,0,1,1,0,1];for(let it=0;it<lt.length;it+=2){let Rt=[lt[it],lt[it+1]];const Ot=$,Bt=J;z.push((Ot+Rt[0])*me/Mn),z.push(1-(Bt+1-Rt[1])*me/yn)}mt.forEach(it=>Q.push(it))}if(!Ct){const mt=[Xt.x+D,Xt.y+C,Xt.z+A,Ue.x+D,Ue.y+C,Ue.z+A,le.x+D,le.y+C,le.z+A,le.x+D,le.y+C,le.z+A,ce.x+D,ce.y+C,ce.z+A,Xt.x+D,Xt.y+C,Xt.z+A],lt=[1,0,0,0,0,1,0,1,1,1,1,0];for(let it=0;it<lt.length;it+=2){let Rt=[lt[it],lt[it+1]];const Ot=X,Bt=K;z.push((Ot+Rt[0])*me/Mn),z.push(1-(Bt+1-Rt[1])*me/yn)}mt.forEach(it=>Q.push(it))}}if(b.length!=0||P.length!=0||w.length!=0){let B=new Uint8ClampedArray(b),D=new Float32Array(L),C=new Uint8ClampedArray(P),A=new Float32Array(v),O=new Uint8ClampedArray(w),$=new Float32Array(R);postMessage([B.buffer,D.buffer,C.buffer,A.buffer,O.buffer,$.buffer],[B.buffer,D.buffer,C.buffer,A.buffer,O.buffer,$.buffer])}else postMessage([])}};class Ep{constructor(){yt(this,"lines");this.lines=[]}updateWorldChunkBorder(t,e,n,i,s,a){this.lines.forEach(o=>{t.remove(o)}),this.lines=[];for(let o=-a-1;o<=a;o++)for(let c=-a-1;c<=a;c++){const l=new xr({color:65280}),f=[];f.push(new k(o*i,0,c*i)),f.push(new k(o*i,s,c*i));const h=new ze().setFromPoints(f),u=new xa(h,l);u.position.x=e+i,u.position.z=n+i,t.add(u),this.lines.push(u)}}}class Ap{constructor(t){yt(this,"seed");yt(this,"chunkSize");yt(this,"chunkMaxHeight");yt(this,"currentChunkPos");yt(this,"chunkMap");yt(this,"renderDistance");yt(this,"workerManager");yt(this,"rawChunkData");yt(this,"chunkDataContextIndices");yt(this,"chunkBorder");yt(this,"texture");this.seed=t,this.chunkSize=16,this.chunkMaxHeight=384,this.currentChunkPos=[-1e4,-1e4],this.chunkMap=new Map,this.chunkBorder=new Ep,this.texture=new Ae;const e=10;this.renderDistance=Math.min(Math.max(2,e),20);const n=5;this.workerManager=new Hd(Math.min(Math.max(1,n),navigator.hardwareConcurrency)),this.rawChunkData=new Map,this.chunkDataContextIndices=new Map}updateTexture(t){this.texture=t}getChunkWorldPosition(t,e){let n=t,i=e;t<0&&(n-=this.chunkSize),e<0&&(i-=this.chunkSize);const s=(n-n%this.chunkSize)/this.chunkSize,a=(i-i%this.chunkSize)/this.chunkSize;return[s,a]}getSubChunkWorldPosition(t,e){const[n,i]=this.getChunkWorldPosition(t,e);let s=Math.trunc(t)%this.chunkSize;n<0&&(s+=this.chunkSize-1);let a=Math.trunc(e)%this.chunkSize;return i<0&&(a+=this.chunkSize-1),[s,a]}updatePlayerPositon(t,e,n){const[i,s]=this.getChunkWorldPosition(t,e);(i!=this.currentChunkPos[0]||s!=this.currentChunkPos[1])&&(this.currentChunkPos=[i,s],this.playerSwitchedChunks(n))}playerSwitchedChunks(t){let e=new Map,n=new Map,i=0,s=0;const a=()=>{s++,c()};let o=!1;const c=()=>{s==i&&o&&n.forEach(f=>{f.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)})};((f,h)=>{let u=0,m=0,g=0,d=-1;for(let p=0;p<Math.max(f,h)**2;p++){if(-f/2<u&&u<=f/2&&-h/2<m&&m<=h/2){let _=u,S=m;const M=this.currentChunkPos[0]+_,x=this.currentChunkPos[1]+S;let b=`${M},${x}`,L=this.chunkMap.get(b);if(L!=null)e.set(b,L);else{const P=this.rawChunkData.get(b)??[];i++;let v=new Vd(this.chunkSize,this.chunkMaxHeight,P,M,x,a,this.workerManager,this.seed);n.set(b,v),e.set(b,v)}}if(u==m||u<0&&u==-m||u>0&&u==1-m){let _=g;g=-d,d=_}u=u+g,m=m+d}})(this.renderDistance*2+1,this.renderDistance*2+1),o=!0,c(),this.chunkMap.forEach((f,h)=>{e.has(h)||f.removeChunk(t)}),this.chunkMap=e}intersectRay(t,e){let n=e.x-t.x,i=e.y-t.y,s=e.z-t.z;const a=n*n+i*i+s*s,o=Math.sqrt(a);n/=o,i/=o,s/=o;let c=0,l=Math.floor(t.x),f=Math.floor(t.y),h=Math.floor(t.z);const u=n>0?1:-1,m=i>0?1:-1,g=s>0?1:-1,d=Math.abs(1/n),p=Math.abs(1/i),_=Math.abs(1/s),S=u>0?l+1-t.x:t.x-l,M=m>0?f+1-t.y:t.y-f,x=g>0?h+1-t.z:t.z-h;let b=d<1/0?d*S:1/0,L=p<1/0?p*M:1/0,P=_<1/0?_*x:1/0,v=-1;for(;c<=o;){const w=this.getBlockAtAbsPos(l,f,h);if(w)return{position:[t.x+c*n,t.y+c*i,t.z+c*s],normal:[v===0?-u:0,v===1?-m:0,v===2?-g:0],voxel:w};b<L?b<P?(l+=u,c=b,b+=d,v=0):(h+=g,c=P,P+=_,v=2):L<P?(f+=m,c=L,L+=p,v=1):(h+=g,c=P,P+=_,v=2)}return null}getChunkBlockDataBlockIndex(t,e,n,i){if(e<0||e>=this.chunkSize||n<0||n>=this.chunkMaxHeight||i<0||i>=this.chunkSize)return-1;const s=bn(e,n,i,this.chunkMaxHeight,this.chunkSize);return t==null||t[s+At-1]==null?-1:s}getBlockAtAbsPos(t,e,n){let i=t<0?t+1:t,s=n<0?n+1:n,a=i-i%this.chunkSize;t<0&&(a-=this.chunkSize),a/=this.chunkSize;let o=s-s%this.chunkSize;if(n<0&&(o-=this.chunkSize),o/=this.chunkSize,this.chunkMap.has(`${a},${o}`)){const c=this.chunkMap.get(`${a},${o}`);let l=i%this.chunkSize;a<0&&(l+=this.chunkSize-1);const f=e;let h=s%this.chunkSize;return o<0&&(h+=this.chunkSize-1),!this.checkIfBlockAtPosIsAir(c.getBlockData(),l,f,h)}else return!1}checkIfBlockAtPosIsAir(t,e,n,i){if(e<0||e>=this.chunkSize||n<0||n>=this.chunkMaxHeight||i<0||i>=this.chunkSize)return!0;const s=bn(e,n,i,this.chunkMaxHeight,this.chunkSize);return t==null||t[s+At-1]==null?!0:t[s+At-1]==ge.air}checkIfBlockAtAbsolutePosIsAir(t,e,n){const[i,s]=this.getChunkWorldPosition(t,n);if(!this.chunkMap.has(`${i},${s}`))return!1;const a=this.chunkMap.get(`${i},${s}`);let o=Math.trunc(t)%this.chunkSize;i<0&&(o+=this.chunkSize-1);const c=Math.trunc(e);let l=Math.trunc(n)%this.chunkSize;return s<0&&(l+=this.chunkSize-1),this.checkIfBlockAtPosIsAir(a.getBlockData(),o,c,l)}checkIfBlockAtPosIsNotSolid(t,e,n,i){if(e<0||e>=this.chunkSize||n<0||n>=this.chunkMaxHeight||i<0||i>=this.chunkSize)return!0;const s=bn(e,n,i,this.chunkMaxHeight,this.chunkSize);return t==null||t[s+At-1]==null?!0:t[s+At-1]!=ge.block}checkIfBlockAtAbsolutePosIsNotSolidPadding(t,e,n,i,s,a,o){const[c,l]=this.getChunkWorldPosition(t,n);if(!this.chunkMap.has(`${c},${l}`))return!1;const f=this.chunkMap.get(`${c},${l}`);let h=Math.trunc(t)%this.chunkSize;c<0&&(h+=this.chunkSize-1);const u=Math.trunc(e);let m=Math.trunc(n)%this.chunkSize;if(l<0&&(m+=this.chunkSize-1),this.checkIfBlockAtPosIsNotSolid(f.getBlockData(),h,u,m))return!1;let d=h+c*this.chunkSize,p=u,_=m+l*this.chunkSize;return!!new On().setFromPoints([new k(d,p,_),new k(d+1,p,_),new k(d,p,_+1),new k(d+1,p,_+1),new k(d,p+1,_),new k(d+1,p+1,_),new k(d,p+1,_+1),new k(d+1,p+1,_+1)]).expandByVector(new k(o,o,o)).containsPoint(new k(i,s,a))}checkIfBlockAtAbsolutePosIsAirPadding(t,e,n,i,s,a,o){const[c,l]=this.getChunkWorldPosition(t,n);if(!this.chunkMap.has(`${c},${l}`))return!1;const f=this.chunkMap.get(`${c},${l}`);let h=Math.trunc(t)%this.chunkSize;c<0&&(h+=this.chunkSize-1);const u=Math.trunc(e);let m=Math.trunc(n)%this.chunkSize;if(l<0&&(m+=this.chunkSize-1),this.checkIfBlockAtPosIsAir(f.getBlockData(),h,u,m))return!1;let d=h+c*this.chunkSize,p=u,_=m+l*this.chunkSize;return!!new On().setFromPoints([new k(d,p,_),new k(d+1,p,_),new k(d,p,_+1),new k(d+1,p,_+1),new k(d,p+1,_),new k(d+1,p+1,_),new k(d,p+1,_+1),new k(d+1,p+1,_+1)]).expandByVector(new k(o,o,o)).containsPoint(new k(i,s,a))}updateBlock(t,e,n){e.updateMatrixWorld();const a=new k,o=new k;a.setFromMatrixPosition(e.matrixWorld),o.set(0,0,1).unproject(e);const c=this.intersectRay(a,o);if(c){const l=c.position.map((b,L)=>b+c.normal[L]*-.5),f=Math.trunc(l[0]),h=Math.trunc(l[1]),u=Math.trunc(l[2]);let m=f-f%this.chunkSize;l[0]<0&&(m-=this.chunkSize);let g=m/this.chunkSize,d=u-u%this.chunkSize;l[2]<0&&(d-=this.chunkSize);let p=d/this.chunkSize;if(!this.chunkMap.has(`${g},${p}`))return;const _=this.chunkMap.get(`${g},${p}`);let S=f%this.chunkSize;g<0&&(S+=this.chunkSize-1);const M=h;let x=u%this.chunkSize;if(p<0&&(x+=this.chunkSize-1),S<0||S>=this.chunkSize||M<0||M>=this.chunkMaxHeight||x<0||x>=this.chunkSize)return!0;if(n){const b=this.getChunkBlockDataBlockIndex(_.getBlockData(),S,M,x);if(_.getBlockData()[b+At-1]!=null){_.getBlockData()[b+At-1]=ge.air;let L=`${g},${p}`;this.rawChunkData.has(L)||(this.rawChunkData.set(L,[]),this.chunkDataContextIndices.set(L,new Map));let P=this.chunkDataContextIndices.get(L),v=this.rawChunkData.get(L);if(P.has(`${S},${M},${x}`)){let w=P.get(`${S},${M},${x}`);v[w]=ge.air}else v.push(S,M,x,0,ge.air),P.set(`${S},${M},${x}`,v.length-1);if(S==0&&this.chunkMap.has(`${g-1},${p}`)){const w=this.chunkMap.get(`${g-1},${p}`);if(w==null)return;w.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)}if(S==this.chunkSize-1&&this.chunkMap.has(`${g+1},${p}`)){const w=this.chunkMap.get(`${g+1},${p}`);if(w==null)return;w.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)}if(x==0&&this.chunkMap.has(`${g},${p-1}`)){const w=this.chunkMap.get(`${g},${p-1}`);if(w==null)return;w.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)}if(x==this.chunkSize-1&&this.chunkMap.has(`${g},${p+1}`)){const w=this.chunkMap.get(`${g},${p+1}`);if(w==null)return;w.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)}_.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)}}else{const b=S+c.normal[0],L=M+c.normal[1],P=x+c.normal[2],v=(w,R,B,D,C,A)=>{let O=w;this.rawChunkData.has(O)||(this.rawChunkData.set(O,[]),this.chunkDataContextIndices.set(O,new Map));let $=this.chunkDataContextIndices.get(O),J=this.rawChunkData.get(O);if($.has(`${R},${B},${D}`)){let K=$.get(`${R},${B},${D}`)-(At-1);J[K+3]=C,J[K+4]=A}else J.push(R,B,D,C,A),$.set(`${R},${B},${D}`,J.length-1)};if(P>=this.chunkSize){if(this.chunkMap.has(`${g},${p+1}`)){const w=this.chunkMap.get(`${g},${p+1}`),R=this.getChunkBlockDataBlockIndex(w.getBlockData(),b,L,0);w.getBlockData()[R+At-1]!=null&&(w.getBlockData()[R+At-2]=1,w.getBlockData()[R+At-1]=ge.block,v(`${g},${p+1}`,b,L,0,1,ge.block),_.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture),w.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture))}}else if(P<0){if(this.chunkMap.has(`${g},${p-1}`)){const w=this.chunkMap.get(`${g},${p-1}`),R=this.getChunkBlockDataBlockIndex(w.getBlockData(),b,L,this.chunkSize-1);w.getBlockData()[R+At-1]!=null&&(w.getBlockData()[R+At-2]=1,w.getBlockData()[R+At-1]=ge.block,v(`${g},${p-1}`,b,L,this.chunkSize-1,1,ge.block),_.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture),w.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture))}}else if(b<0){if(this.chunkMap.has(`${g-1},${p}`)){const w=this.chunkMap.get(`${g-1},${p}`),R=this.getChunkBlockDataBlockIndex(w.getBlockData(),this.chunkSize-1,L,P);w.getBlockData()[R+At-1]!=null&&(w.getBlockData()[R+At-2]=1,w.getBlockData()[R+At-1]=ge.block,v(`${g-1},${p}`,this.chunkSize-1,L,P,1,ge.block),_.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture),w.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture))}}else if(b>=this.chunkSize){if(this.chunkMap.has(`${g+1},${p}`)){const w=this.chunkMap.get(`${g+1},${p}`),R=this.getChunkBlockDataBlockIndex(w.getBlockData(),0,L,P);w.getBlockData()[R+At-1]!=null&&(w.getBlockData()[R+At-2]=1,w.getBlockData()[R+At-1]=ge.block,v(`${g+1},${p}`,0,L,P,1,ge.block),_.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture),w.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture))}}else{const w=this.getChunkBlockDataBlockIndex(_.getBlockData(),b,L,P);if(_.getBlockData()[w+At-1]!=null){if(_.getBlockData()[w+At-2]=1,_.getBlockData()[w+At-1]=ge.block,v(`${g},${p}`,b,L,P,1,ge.block),_.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture),b==0&&this.chunkMap.has(`${g-1},${p}`)){const B=this.chunkMap.get(`${g-1},${p}`);if(B==null)return;B.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)}if(b==this.chunkSize-1&&this.chunkMap.has(`${g+1},${p}`)){const B=this.chunkMap.get(`${g+1},${p}`);if(B==null)return;B.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)}if(P==0&&this.chunkMap.has(`${g},${p-1}`)){const B=this.chunkMap.get(`${g},${p-1}`);if(B==null)return;B.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)}if(P==this.chunkSize-1&&this.chunkMap.has(`${g},${p+1}`)){const B=this.chunkMap.get(`${g},${p+1}`);if(B==null)return;B.load(this.chunkSize,this.chunkMaxHeight,this.chunkMap,t,this.workerManager,this.seed,this.texture)}}}}}}}const Et=1/3;class Cp{constructor(t){yt(this,"_euler");yt(this,"minPolarAngle");yt(this,"maxPolarAngle");yt(this,"_PI_2");yt(this,"pointerSpeed");yt(this,"moveViewForward");yt(this,"moveViewBackward");yt(this,"moveViewLeft");yt(this,"moveViewRight");yt(this,"playerMovementSpeed");yt(this,"jump");yt(this,"jumpTimeStartedUnix");yt(this,"previousJumpTime");yt(this,"jumping");yt(this,"fallTimeStartedUnix");yt(this,"falling");yt(this,"fallConstant");yt(this,"previousFallTime");yt(this,"spaceBarPressed");yt(this,"gravity",!1);yt(this,"sneak");yt(this,"mouseMove",(t,e)=>{const n=t.movementX||t.mozMovementX||t.webkitMovementX||0,i=t.movementY||t.mozMovementY||t.webkitMovementY||0;this._euler.setFromQuaternion(e.quaternion),this._euler.y-=n*.002*this.pointerSpeed,this._euler.x-=i*.002*this.pointerSpeed,this._euler.x=Math.max(this._PI_2-this.maxPolarAngle,Math.min(this._PI_2-this.minPolarAngle,this._euler.x)),e.quaternion.setFromEuler(this._euler)});this._euler=new Oi(0,0,0,"YXZ"),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this._PI_2=Math.PI/2,this.pointerSpeed=1.4,this.moveViewForward=!1,this.moveViewBackward=!1,this.moveViewLeft=!1,this.moveViewRight=!1,this.spaceBarPressed=!1,this.sneak=!1,this.jumpTimeStartedUnix=0,this.previousJumpTime=0,this.jump=!1,this.jumping=!1,this.fallConstant=9.81,this.fallTimeStartedUnix=0,this.previousFallTime=0,this.falling=!1,this.gravity?this.playerMovementSpeed=.1:this.playerMovementSpeed=2,window.addEventListener("keydown",e=>{e.code=="KeyW"&&(this.moveViewForward=!0),e.code=="KeyS"&&(this.moveViewBackward=!0),e.code=="KeyA"&&(this.moveViewLeft=!0),e.code=="KeyD"&&(this.moveViewRight=!0),(e.code=="Space"||e.key==" ")&&(this.spaceBarPressed=!0),e.key=="Shift"&&(this.sneak=!0,t.position.y-=.25),this.gravity||(e.key==" "&&(t.position.y+=10),e.key=="Shift"&&(t.position.y-=10))}),window.addEventListener("keyup",e=>{e.code=="KeyW"&&(this.moveViewForward=!1),e.code=="KeyS"&&(this.moveViewBackward=!1),e.code=="KeyA"&&(this.moveViewLeft=!1),e.code=="KeyD"&&(this.moveViewRight=!1),(e.code=="Space"||e.key==" ")&&(this.spaceBarPressed=!1),e.key=="Shift"&&(this.sneak=!1,t.position.y+=.25)})}toggleGravity(){this.gravity=!this.gravity,this.gravity?this.playerMovementSpeed=.1:this.playerMovementSpeed=2,this.jumpTimeStartedUnix=0,this.previousJumpTime=0,this.jump=!1,this.jumping=!1,this.fallConstant=9.81,this.fallTimeStartedUnix=0,this.previousFallTime=0,this.falling=!1}moveViewNormalZ(t,e,n){const i=new k;i.setFromMatrixColumn(e.matrix,0),i.crossVectors(e.up,i);const s=i.z/Math.abs(i.z)*(t/Math.abs(t)),a=i.x/Math.abs(i.x)*(t/Math.abs(t));let o=!0,c=!0,l=!0,f=!0,{x:h,z:u}=e.position,m=Math.round(e.position.y),g=e.position.y;if(h+=i.x*t,u+=i.z*t,this.gravity){for(let d=this.getPlayerHeight();d>=0;d--)n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,m-d,u,h,m-d,u,Et)&&(c=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h,m-d,u+s,h,m-d,u,Et)&&(o=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,g-d,u,h,g-d,u,Et)&&(c=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h,g-d,u+s,h,g-d,u,Et)&&(o=!1),o&&(n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,m-d,u-1,h,m-d,u,Et)&&(l=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,m-d,u+1,h,m-d,u,Et)&&(l=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,g-d,u-1,h,g-d,u,Et)&&(l=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,g-d,u+1,h,g-d,u,Et)&&(l=!1)),c&&(n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h-1,m-d,u+s,h,m-d,u,Et)&&(f=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+1,m-d,u+s,h,m-d,u,Et)&&(f=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h-1,g-d,u+s,h,g-d,u,Et)&&(f=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+1,g-d,u+s,h,g-d,u,Et)&&(f=!1)),!l&&!f&&(l=!0,f=!0,Math.abs(i.x)==Math.abs(i.z)?(l=!1,f=!1):Math.abs(i.x)>Math.abs(i.z)?l=!1:f=!1);c&&l?e.position.x+=i.x*t:a>0?e.position.x<0?e.position.x=Math.trunc(e.position.x)-Et:e.position.x=Math.trunc(e.position.x)+(1-Et):e.position.x<0?e.position.x=Math.trunc(e.position.x)-(1-Et):e.position.x=Math.trunc(e.position.x)+Et,o&&f?e.position.z+=i.z*t:s>0?e.position.z<0?e.position.z=Math.trunc(e.position.z)-Et:e.position.z=Math.trunc(e.position.z)+(1-Et):e.position.z<0?e.position.z=Math.trunc(e.position.z)-(1-Et):e.position.z=Math.trunc(e.position.z)+Et}else e.position.x+=i.x*t,e.position.z+=i.z*t}getPlayerHeight(){return 1.75-(this.sneak?.25:0)}moveViewNormalX(t,e,n){const i=new k;i.setFromMatrixColumn(e.matrix,0);const s=i.z/Math.abs(i.z)*(t/Math.abs(t)),a=i.x/Math.abs(i.x)*(t/Math.abs(t));let o=!0,c=!0,l=!0,f=!0,{x:h,z:u}=e.position,m=Math.round(e.position.y),g=e.position.y;if(h+=i.x*t,u+=i.z*t,this.gravity){for(let d=this.getPlayerHeight();d>=0;d--)n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,m-d,u,h,m-d,u,Et)&&(c=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h,m-d,u+s,h,m-d,u,Et)&&(o=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,g-d,u,h,g-d,u,Et)&&(c=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h,g-d,u+s,h,g-d,u,Et)&&(o=!1),o&&(n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,m-d,u-1,h,m-d,u,Et)&&(l=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,m-d,u+1,h,m-d,u,Et)&&(l=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,g-d,u-1,h,g-d,u,Et)&&(l=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+a,g-d,u+1,h,g-d,u,Et)&&(l=!1)),c&&(n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h-1,m-d,u+s,h,m-d,u,Et)&&(f=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+1,m-d,u+s,h,m-d,u,Et)&&(f=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h-1,g-d,u+s,h,g-d,u,Et)&&(f=!1),n.checkIfBlockAtAbsolutePosIsNotSolidPadding(h+1,g-d,u+s,h,g-d,u,Et)&&(f=!1)),!l&&!f&&(l=!0,f=!0,Math.abs(i.x)==Math.abs(i.z)?(l=!1,f=!1):Math.abs(i.x)>Math.abs(i.z)?l=!1:f=!1);c&&l?e.position.x+=i.x*t:a>0?e.position.x<0?e.position.x=Math.trunc(e.position.x)-Et:e.position.x=Math.trunc(e.position.x)+(1-Et):e.position.x<0?e.position.x=Math.trunc(e.position.x)-(1-Et):e.position.x=Math.trunc(e.position.x)+Et,o&&f?e.position.z+=i.z*t:s>0?e.position.z<0?e.position.z=Math.trunc(e.position.z)-Et:e.position.z=Math.trunc(e.position.z)+(1-Et):e.position.z<0?e.position.z=Math.trunc(e.position.z)-(1-Et):e.position.z=Math.trunc(e.position.z)+Et}else e.position.x+=i.x*t,e.position.z+=i.z*t}update(t,e){this.spaceBarPressed&&this.jump==!1&&!this.falling&&(this.jump=!0);const n=this.playerMovementSpeed/Math.sqrt(Math.pow(this.playerMovementSpeed,2)*2)*this.playerMovementSpeed;if(this.moveViewForward){let l=this.playerMovementSpeed;(this.moveViewLeft||this.moveViewRight)&&(l=n),this.moveViewNormalZ(l,t,e)}if(this.moveViewBackward){let l=this.playerMovementSpeed;(this.moveViewLeft||this.moveViewRight)&&(l=n),this.moveViewNormalZ(-l,t,e)}if(this.moveViewRight){let l=this.playerMovementSpeed;(this.moveViewForward||this.moveViewBackward)&&(l=n),this.moveViewNormalX(l,t,e)}if(this.moveViewLeft){let l=this.playerMovementSpeed;(this.moveViewForward||this.moveViewBackward)&&(l=n),this.moveViewNormalX(-l,t,e)}if(!this.gravity)return;let i=0,s=Math.ceil(t.position.y);for(;s>=0;){let l=Et-.001;if(e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,l)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x-1,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,l)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x+1,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,l)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z-1,t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,l)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z+1,t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,l)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x+1,s-Math.ceil(this.getPlayerHeight()+1),t.position.z+1,t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,l)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x+1,s-Math.ceil(this.getPlayerHeight()+1),t.position.z-1,t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,l)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x-1,s-Math.ceil(this.getPlayerHeight()+1),t.position.z+1,t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,l)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x-1,s-Math.ceil(this.getPlayerHeight()+1),t.position.z-1,t.position.x,s-Math.ceil(this.getPlayerHeight()+1),t.position.z,l)){i=s;break}s--}i-=1-this.getPlayerHeight()%1;let a=0;this.fallTimeStartedUnix==0&&(this.fallTimeStartedUnix=Date.now());const o=Date.now()-this.fallTimeStartedUnix;let c=this.fallConstant*((o/1e3)**2-(this.previousFallTime/1e3)**2);if(this.jump)if(this.jumpTimeStartedUnix==0)this.jumpTimeStartedUnix=Date.now();else{const l=Date.now()-this.jumpTimeStartedUnix;let f=3.95,h=2,u=-f*(this.previousJumpTime/1e3)*(this.previousJumpTime/1e3-h);a=-f*(l/1e3)*(l/1e3-h)-u;let g=t.position.y+(1-this.getPlayerHeight()%1)/2,d=Et-.001;e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x,g,t.position.z,t.position.x,g,t.position.z,d)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x-1,g,t.position.z,t.position.x,g,t.position.z,d)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x+1,g,t.position.z,t.position.x,g,t.position.z,d)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x,g,t.position.z-1,t.position.x,g,t.position.z,d)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x,g,t.position.z+1,t.position.x,g,t.position.z,d)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x+1,g,t.position.z+1,t.position.x,g,t.position.z,d)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x+1,g,t.position.z-1,t.position.x,g,t.position.z,d)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x-1,g,t.position.z+1,t.position.x,g,t.position.z,d)||e.checkIfBlockAtAbsolutePosIsNotSolidPadding(t.position.x-1,g,t.position.z-1,t.position.x,g,t.position.z,d)?(a=0,this.jump=!1,this.jumping=!1,this.jumpTimeStartedUnix=0,this.previousJumpTime=0):(this.previousJumpTime=l,this.jumping=!0)}this.gravity&&(t.position.y=Math.max(i,t.position.y-c+a)),this.previousFallTime=o,t.position.y==i?(this.fallTimeStartedUnix=0,this.previousFallTime=0,this.falling=!1,this.jumping&&(this.jump=!1,this.jumping=!1,this.jumpTimeStartedUnix=0,this.previousJumpTime=0)):this.falling=!0}}const Lp=document.querySelector("#playerCoordinates"),Pp=document.querySelector("#chunkCoordinates"),Dp=document.querySelector("#subChunkCoordinates"),Rp=document.querySelector("#seed"),Ip=(r,t,e)=>{Rp.textContent="seed: "+r,Lp.textContent=`player X/Y/Z: ${Math.trunc(t.position.x*1e3)/1e3},${Math.trunc(t.position.y*1e3)/1e3},${Math.trunc(t.position.z*1e3)/1e3}`,Pp.textContent=`chunk X/Z: ${e.getChunkWorldPosition(t.position.x,t.position.z)[0]}, ${e.getChunkWorldPosition(t.position.x,t.position.z)[1]}`,Dp.textContent=`subchunk X/Z: ${Math.trunc(e.getSubChunkWorldPosition(t.position.x,t.position.z)[0])}, ${Math.trunc(e.getSubChunkWorldPosition(t.position.x,t.position.z)[1])}`},kp=(r,t,e,n,i)=>{let s=!1;r.domElement.addEventListener("mousedown",a=>{s?a.button==2?n.updateBlock(t,e,!1):n.updateBlock(t,e,!0):r.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{s=!s}),document.addEventListener("mousemove",a=>{s&&i.mouseMove(a,e)})},zp=(r,t)=>{window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)})},di=new Id,Ge=new Oe(120,window.innerWidth/window.innerHeight,1e-4,1e3);Ge.position.x=625;Ge.position.y=230;Ge.position.z=736;Ge.lookAt(0,0,0);const _i=new gr({antialias:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!0});_i.setClearColor(new Ut("#87CEEB"));_i.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(_i.domElement);const Fp=new Od(16777215,11184810,1);di.add(Fp);di.fog=new _r("#87CEEB",.01);const Np=new Gd(1);di.add(Np);const Ma=cp(30),Up=new Ud,ya=Up.load(new URL("/assets/textures-3cbbd9f9.png",self.location).toString(),r=>{Ii.updateTexture(r),requestAnimationFrame(Sa)});ya.magFilter=he;ya.minFilter=he;const Ii=new Ap(Ma);let Mr=new Cp(Ge);function Sa(){requestAnimationFrame(Sa),Ip(Ma,Ge,Ii),Mr.update(Ge,Ii),Ii.updatePlayerPositon(Ge.position.x,Ge.position.z,di),_i.render(di,Ge)}kp(_i,di,Ge,Ii,Mr);zp(_i,Ge);document.addEventListener("keydown",r=>{r.code=="KeyG"&&Mr.toggleGravity()});
