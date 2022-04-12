import{r as s,o as r,c as d,a as o,b as t,w as n,F as c,d as e,e as l}from"./app.6a33fc82.js";import{_ as u}from"./sideloadly_win.6263388d.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const p={},_=e("Taurine is a "),f=e("semi-untethered jailbreak"),m=e(", meaning it requires a app to re-apply the exploit after a reboot."),g=o("p",null,"The tool is compatible with jailbreaking devices on iOS/iPadOS versions from 14.0 to 14.3.",-1),y=e("Due to how semi-untethered jailbreaks work, the app will need to be "),b=e("re-signed"),w=e(" once every 7 days."),k=o("p",null,"We will use Sideloadly to install the Taurine jailbreak application to your iOS device for use in the next step.",-1),v={class:"custom-container warning"},T=o("p",{class:"custom-container-title"},"WARNING",-1),q=e("If you are already jailbroken with another jailbreak (besides Odysseyra1n), make sure to properly "),S=e("remove it"),I=e(" before proceeding."),x=o("h2",{id:"downloads",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#downloads","aria-hidden":"true"},"#"),e(" Downloads")],-1),O=o("div",{class:"custom-container tip",id:"ifJailbreaksAppSigned"},[o("p",null,[e(" Taurine is currently signed at "),o("a",{href:"https://jailbreaks.app/",target:"_blank"},"jailbreaks.app"),e(" for easy installation without a computer. ")])],-1),R=e("The latest version of "),j={href:"https://taurine.app/",target:"_blank",rel:"noopener noreferrer"},D=e("Taurine"),A=e("The latest version of "),N={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},E=e("Sideloadly"),P=e("The latest version of "),B={href:"https://www.apple.com/itunes/download/win32",target:"_blank",rel:"noopener noreferrer"},F=e("iTunes"),W=e(" if on Windows"),G=l('<p><img src="'+u+'" alt="A screenshot of the Sideloadly application (Windows)"></p><h2 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h2><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the Taurine <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password <ul><li>Sideloadly must make a request to it&#39;s servers in order to work with free developer accounts. If you are not OK with this, you may use an alternate Apple ID.</li></ul></li></ol><p>The app will now install to your iOS device.</p><h2 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h2><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The Taurine application can now be opened from home screen.</p><h2 id="running-taurine" tabindex="-1"><a class="header-anchor" href="#running-taurine" aria-hidden="true">#</a> Running Taurine</h2><ol><li>Reboot your phone <ul><li>This is not necessary but recommended</li></ul></li><li>Open the Taurine application from your home screen immediately afterwards <ul><li>If you have unc0ver installed, enable &quot;Restore RootFS&quot; before proceeding to remove unc0ver</li></ul></li><li>Tap &quot;Jailbreak&quot;</li></ol><p>If you restored rootFS, go back to step 1 and repeat this section.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the app or your device crashes/restarts unexpectedly and the jailbreak isn&#39;t installed, simply try rebooting and running the exploit again until it does work.</p></div>',11),J={class:"custom-container warning"},M=o("p",{class:"custom-container-title"},"WARNING",-1),V=e("If you receive the error "),Y=o("code",null,"ERR_Jailbreak",-1),C=e(", "),L=o("code",null,"ERR_Already_Jailbroken",-1),K=e(" or "),Q=o("code",null,"ERR_TFP0",-1),z=e(" read the Taurine/Odyssey section on the "),H=e("Troubleshooting"),U=e(" page."),X=e("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),Z=e("tweaks"),$=e(", themes and more."),ee=l('<h2 id="installing-necessary-software" tabindex="-1"><a class="header-anchor" href="#installing-necessary-software" aria-hidden="true">#</a> Installing necessary software</h2><ol><li>Open the Sileo application</li><li>Tap on the &quot;Search&quot; tab</li><li>Search for &quot;libhooker&quot;</li><li>Tap &quot;Install&quot; <ul><li>This will begin a queue - do not install the queue until we&#39;ve selected all our programs to install</li></ul></li><li>Search for &quot;PreferenceLoader&quot; and &quot;RocketBootstrap&quot; and add them to the queue by pressing &quot;Install&quot;</li><li>Tap the &quot;Queued&quot; bar at the bottom of the page</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',2);function oe(te,ie){const i=s("router-link"),a=s("OutboundLink");return r(),d(c,null,[o("p",null,[_,t(i,{to:"/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:n(()=>[f]),_:1}),m]),g,o("p",null,[y,t(i,{to:"/resigning-apps"},{default:n(()=>[b]),_:1}),w]),k,o("div",v,[T,o("p",null,[q,t(i,{to:"/restoring-rootfs"},{default:n(()=>[S]),_:1}),I])]),x,O,o("ul",null,[o("li",null,[R,o("a",j,[D,t(a)])]),o("li",null,[A,o("a",N,[E,t(a)])]),o("li",null,[P,o("a",B,[F,t(a)]),W])]),G,o("div",J,[M,o("p",null,[V,Y,C,L,K,Q,z,t(i,{to:"/troubleshooting/#common-errors-on-odyssey-and-taurine"},{default:n(()=>[H]),_:1}),U])]),o("p",null,[X,t(i,{to:"/faq/#what-are-tweaks"},{default:n(()=>[Z]),_:1}),$]),ee],64)}var le=h(p,[["render",oe]]);export{le as default};
