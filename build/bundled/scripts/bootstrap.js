!function(){"use strict";function e(){r.forEach(function(e){HOVERBOARD.Analytics.trackError("UnhandledPromiseRejection",e)}),r=[],o=null}function n(e){e=e||null;var n=function(){window.HTMLImports||document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0})),e&&e()},t="registerElement"in document&&"import"in document.createElement("link")&&"content"in document.createElement("template");if(t)n();else{var o=document.createElement("script");o.async=!0,o.src="bower_components/webcomponentsjs/webcomponents-lite.min.js",o.onload=n,document.head.appendChild(o)}if(!(HOVERBOARD.Util.getChromeVersion()&&HOVERBOARD.Util.getChromeVersion()>=46||HOVERBOARD.Util.getFirefoxVersion()&&HOVERBOARD.Util.getFirefoxVersion()>=40)){var i=document.querySelector("body"),r=document.querySelector("#sw-registration"),s=document.createElement("script");s.src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,intl",i.insertBefore(s,r),ga("send","event","browser","unsupported-es6-intl",navigator.userAgent),console.log("Your browser is out-of-date. Please download one of these up-to-date, free and excellent browsers: Chrome, Chromium, Opera, Vivaldi")}}function t(){n(function(){HOVERBOARD.Elements.init()})}var o,i=1e4,r=[];window.addEventListener("unhandledrejection",function(n){debugLog("unhandledrejection fired: "+n.reason),r.push({promise:n.promise,reason:n.reason}),o||(o=setTimeout(e,i))}),window.addEventListener("rejectionhandled",function(e){debugLog("rejectionhandled fired: "+e.reason),r=r.filter(function(n){n.promise!==e.promise})}),window.addEventListener("offline",function(){HOVERBOARD.Elements&&HOVERBOARD.Elements.Template.$.toast&&HOVERBOARD.Elements.Template.$.toast.showMessage("You can still work offline.")}),window.addEventListener("beforeinstallprompt",function(e){HOVERBOARD.Analytics.trackEvent("installprompt","fired"),e.userChoice.then(function(e){HOVERBOARD.Analytics.trackEvent("installprompt",e.outcome,e.platform)})}),t()}();