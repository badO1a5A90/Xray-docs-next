(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[8512],{7633:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-86586ca2",path:"/document/level-0/ch08-xray-clients.html",title:"【第 8 章】Xray 客户端篇",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"8.1 Xray 的工作原理简述",slug:"_8-1-xray-的工作原理简述",children:[]},{level:2,title:"8.2 客户端与服务器端正确连接",slug:"_8-2-客户端与服务器端正确连接",children:[]},{level:2,title:"8.3 附加题 1：在 PC 端手工配置 xray-core",slug:"_8-3-附加题-1-在-pc-端手工配置-xray-core",children:[]},{level:2,title:"8.4 附加题 2：在 PC 端手工运行 xray-core",slug:"_8-4-附加题-2-在-pc-端手工运行-xray-core",children:[]},{level:2,title:"8.5 附加题 3：在 PC 端开机自动运行 xray-core",slug:"_8-5-附加题-3-在-pc-端开机自动运行-xray-core",children:[]},{level:2,title:"8.6 圆满完成！",slug:"_8-6-圆满完成",children:[]},{level:2,title:"8.7 TO INFINITY AND BEYOND!",slug:"_8-7-to-infinity-and-beyond",children:[]}],filePathRelative:"document/level-0/ch08-xray-clients.md",git:{updatedTime:1626366562e3,contributors:[]}}},2945:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>Mn});var p=a(6252);const t=a.p+"assets/img/ch08-img01-flow.943d902c.png",o=a.p+"assets/img/ch08-img02-buzz.aec807b9.png",e=(0,p.Wm)("h1",{id:"【第-8-章】xray-客户端篇",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#【第-8-章】xray-客户端篇","aria-hidden":"true"},"#"),(0,p.Uk)(" 【第 8 章】Xray 客户端篇")],-1),l=(0,p.Wm)("h2",{id:"_8-1-xray-的工作原理简述",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#_8-1-xray-的工作原理简述","aria-hidden":"true"},"#"),(0,p.Uk)(" 8.1 Xray 的工作原理简述")],-1),u=(0,p.Wm)("p",null,[(0,p.Uk)("要正确的配置和使用"),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)("，就需要正确的理解其工作原理，对于新人，可以先看看下面简化的示意图（省略了许多复杂的设置）：")],-1),c=(0,p.Wm)("p",null,[(0,p.Wm)("img",{src:t,alt:"Xray数据流向"})],-1),r=(0,p.Wm)("p",null,"这其中的关键点是：",-1),i=(0,p.Wm)("ol",null,[(0,p.Wm)("li",null,[(0,p.Wm)("p",null,[(0,p.Uk)("APP 要主动或借助转发工具，将数据【流入("),(0,p.Wm)("code",null,"inbounds"),(0,p.Uk)(")】"),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)(" 客户端")])]),(0,p.Wm)("li",null,[(0,p.Wm)("p",null,[(0,p.Uk)("流量进入客户端后，会被【客户端路由("),(0,p.Wm)("code",null,"routing"),(0,p.Uk)(")】按规则处理后，向不同方向【流出"),(0,p.Wm)("code",null,"(outbounds)"),(0,p.Uk)("】"),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)(" 客户端。比如：")]),(0,p.Wm)("ol",null,[(0,p.Wm)("li",null,[(0,p.Uk)("国内流量直连（"),(0,p.Wm)("code",null,"direct"),(0,p.Uk)("）")]),(0,p.Wm)("li",null,[(0,p.Uk)("国外流量转发 VPS（"),(0,p.Wm)("code",null,"proxy"),(0,p.Uk)("）")]),(0,p.Wm)("li",null,[(0,p.Uk)("广告流量屏蔽（"),(0,p.Wm)("code",null,"block"),(0,p.Uk)("）")])])]),(0,p.Wm)("li",null,[(0,p.Wm)("p",null,[(0,p.Uk)("向 VPS 转发的国外流量，会跨过防火墙，【流入("),(0,p.Wm)("code",null,"inbounds"),(0,p.Uk)(")】 "),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)(" 服务器端")])]),(0,p.Wm)("li",null,[(0,p.Wm)("p",null,[(0,p.Uk)("流量进入服务器端后，与客户端一样，会被【服务器端路由("),(0,p.Wm)("code",null,"routing"),(0,p.Uk)(")】按规则处理后，向不同方向【流出"),(0,p.Wm)("code",null,"(outbounds)"),(0,p.Uk)("】：")]),(0,p.Wm)("ol",null,[(0,p.Wm)("li",null,[(0,p.Uk)("因为已经在防火墙之外，所以流量默认直连，你就可以访问到不存在网站们了（"),(0,p.Wm)("code",null,"direct"),(0,p.Uk)("）")]),(0,p.Wm)("li",null,[(0,p.Uk)("如果需要在不同的 VPS 之间做链式转发，就可以继续配置转发规则（"),(0,p.Wm)("code",null,"proxy"),(0,p.Uk)("）")]),(0,p.Wm)("li",null,[(0,p.Uk)("你可以在服务器端继续禁用各种你想禁用的流量，如广告、BT 下载等（"),(0,p.Wm)("code",null,"block"),(0,p.Uk)("）")])])])],-1),m={class:"custom-container warning"},k=(0,p.Wm)("p",{class:"custom-container-title"},"注意",-1),b=(0,p.Wm)("p",null,[(0,p.Uk)("请务必记得，"),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)(" 的路由配置非常灵活，上面的说明只是无限可能性中的一种。")],-1),d=(0,p.Wm)("p",null,[(0,p.Uk)("借助 "),(0,p.Wm)("code",null,"geosite.dat"),(0,p.Uk)(" 和 "),(0,p.Wm)("code",null,"geoip.dat"),(0,p.Uk)(" 这两个文件，可以很灵活的从【域名】和【IP】这两个角度、不留死角的控制流量流出的方向。这比曾经单一笼统的 "),(0,p.Wm)("code",null,"GFWList"),(0,p.Uk)(" 强大很多很多，可以做到非常细致的微调：比如可以指定 Apple 域名直连或转发、指定亚马逊域名代理或转发，百度的域名屏蔽等等。。。）")],-1),W=(0,p.Uk)("现在，"),q=(0,p.Uk)("《路由 (routing) 功能简析》"),y=(0,p.Uk)(" 已经上线，我建议对路由功能有兴趣的同学，先继续跟着本文完成客户端的基础配置，之后再去这里详细学习。"),g=(0,p.Wm)("h2",{id:"_8-2-客户端与服务器端正确连接",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#_8-2-客户端与服务器端正确连接","aria-hidden":"true"},"#"),(0,p.Uk)(" 8.2 客户端与服务器端正确连接")],-1),U=(0,p.Wm)("p",null,[(0,p.Uk)("现在你已经理解了 "),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)(" 的工作原理，那么接下来的配置，其实就是【告诉你的客户端如何连接 VPS 服务器】。这和你已经很熟悉的、告诉"),(0,p.Wm)("code",null,"PuTTY"),(0,p.Uk)("如何远程连接服务器是一样的。只不过 Xray 连接时的要素不止是【IP 地址】+【端口】+【用户名】+【密码】这四要素了。")],-1),h=(0,p.Uk)("实际上，"),x=(0,p.Wm)("code",null,"Xray",-1),f=(0,p.Uk)("的连接要素是由不同的"),v=(0,p.Uk)("协议"),_=(0,p.Uk)("决定的。本文在第 7 章的配置文件 "),X=(0,p.Wm)("code",null,"config.json",-1),S=(0,p.Uk)(" 里，我们使用 "),w=(0,p.Wm)("code",null,"Xray",-1),P=(0,p.Uk)(" 下独特而强大的 "),N=(0,p.Wm)("code",null,"VLESS",-1),I=(0,p.Uk)(" 协议 + "),T=(0,p.Wm)("code",null,"XTLS",-1),C=(0,p.Uk)(" 流控。所以看看那个配置文件的内容就能知道，这个协议组合的连接要素有："),L=(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[(0,p.Uk)("服务器【地址】: "),(0,p.Wm)("code",null,"a-name.yourdomain.com")]),(0,p.Wm)("li",null,[(0,p.Uk)("服务器【端口】: "),(0,p.Wm)("code",null,"443")]),(0,p.Wm)("li",null,[(0,p.Uk)("连接的【协议】: "),(0,p.Wm)("code",null,"vless")]),(0,p.Wm)("li",null,[(0,p.Uk)("连接的【流控】: "),(0,p.Wm)("code",null,"xtls-rprx-direct"),(0,p.Uk)(" (direct 模式适合全平台，若是 Linux/安卓用户，可改成 "),(0,p.Wm)("code",null,"xtls-rprx-splice"),(0,p.Uk)(" 性能全开)")]),(0,p.Wm)("li",null,[(0,p.Uk)("连接的【验证】: "),(0,p.Wm)("code",null,"uuiduuid-uuid-uuid-uuiduuiduuid")]),(0,p.Wm)("li",null,[(0,p.Uk)("连接的【安全】: "),(0,p.Wm)("code",null,'"allowInsecure": false')])],-1),O=(0,p.Wm)("p",null,"鉴于新人一般都会使用手机 APP 或者电脑的 GUI 客户端，我就把常用的客户端罗列在下面。每个客户端都有自己独特的配置界面，逐一截图展示并不现实，所以请你务必仔细阅读这些客户端的说明、然后把上述要素填入合适的地方即可。",-1),D=(0,p.Wm)("div",{class:"custom-container warning"},[(0,p.Wm)("p",{class:"custom-container-title"},"注意"),(0,p.Wm)("p",null,[(0,p.Uk)("许多工具其实是同时支持 "),(0,p.Wm)("code",null,"xray-core"),(0,p.Uk)(" 和 "),(0,p.Wm)("code",null,"v2fly-core"),(0,p.Uk)(" 的，但默认内置的不一定是哪个，所以别忘记检查一下是否是你想要的那个在工作哦！")])],-1),j=(0,p.Wm)("p",null,[(0,p.Wm)("strong",null,"v2rayN - 适用于 Windows 平台")],-1),A=(0,p.Uk)("请从它的"),G={href:"https://github.com/2dust/v2rayN/releases",target:"_blank",rel:"noopener noreferrer"},E=(0,p.Uk)("GitHub 仓库 Release 页面"),V=(0,p.Uk)("获取最新版"),R=(0,p.Wm)("li",null,"请根据该客户端的说明进行设置",-1),Y=(0,p.Wm)("p",null,[(0,p.Wm)("strong",null,"v2rayNG - 适用于 Android 平台")],-1),H=(0,p.Uk)("请从它的"),Q={href:"https://github.com/2dust/v2rayNG/releases",target:"_blank",rel:"noopener noreferrer"},F=(0,p.Uk)("GitHub 仓库 Release 页面"),B=(0,p.Uk)("获取最新版"),z=(0,p.Wm)("li",null,"请根据该客户端的说明进行设置",-1),M=(0,p.Wm)("li",null,[(0,p.Wm)("p",null,[(0,p.Wm)("strong",null,"Shadowrocket - 适用于 iOS, 基于苹果 M 芯片的 macOS")]),(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,"你需要注册一个【非中国区】的 iCloud 账户"),(0,p.Wm)("li",null,"你需要通过 App Store 搜索并购买"),(0,p.Wm)("li",null,"请根据该客户端的说明进行设置")])],-1),J=(0,p.Wm)("p",null,[(0,p.Wm)("strong",null,"Qv2ray - 跨平台图形界面，适用于 Linux, Windows, macOS")],-1),K=(0,p.Uk)("请从它的"),Z={href:"https://github.com/Qv2ray/Qv2ray/releases",target:"_blank",rel:"noopener noreferrer"},$=(0,p.Uk)("GitHub 仓库 Release 页面"),nn=(0,p.Uk)("获取最新版（还可以从它的"),sn={href:"https://github.com/Qv2ray/Qv2ray/actions",target:"_blank",rel:"noopener noreferrer"},an=(0,p.Uk)("GitHub 自动构建仓库"),pn=(0,p.Uk)("寻找更新的版本）"),tn=(0,p.Uk)("请从它的"),on={href:"https://qv2ray.net/",target:"_blank",rel:"noopener noreferrer"},en=(0,p.Uk)("项目主页"),ln=(0,p.Uk)("学习文档"),un=(0,p.Wm)("li",null,"请根据该客户端的说明进行设置",-1),cn=(0,p.Wm)("p",null,"到这一步，你的全套配置就已经可以正常使用啦！",-1),rn=(0,p.Wm)("h2",{id:"_8-3-附加题-1-在-pc-端手工配置-xray-core",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#_8-3-附加题-1-在-pc-端手工配置-xray-core","aria-hidden":"true"},"#"),(0,p.Uk)(" 8.3 附加题 1：在 PC 端手工配置 "),(0,p.Wm)("code",null,"xray-core")],-1),mn=(0,p.Wm)("p",null,[(0,p.Uk)("虽然到上面一步已经可以结束了，但是如果你是个好奇心强、记忆力好的的同学，一定会想起来我在上一章说过，你把"),(0,p.Wm)("code",null,"xray-core"),(0,p.Uk)(" 的二进制文件“放在服务器运行，它就是服务器端；你把它下载到本地电脑运行，它就是客户端。” 那究竟要怎样直接使用 "),(0,p.Wm)("code",null,"xray-core"),(0,p.Uk)(" 做客户端呢？")],-1),kn=(0,p.Wm)("p",null,"为了回答这个问题，我加入了附加题章节，有一点点超纲，有一点点麻烦，但费这个笔墨是因为这个方式有它的优势：",-1),bn=(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[(0,p.Wm)("p",null,"第一时间获得最新版而无需等待 APP 升级适配")]),(0,p.Wm)("li",null,[(0,p.Wm)("p",null,"灵活自由的路由配置能力（当然 GUI 客户端中 Qv2ray 的高级路由编辑器非常强大，也可以完整实现 xray-core 的路由配置功能）")]),(0,p.Wm)("li",null,[(0,p.Wm)("p",null,"节约系统资源 （GUI 界面一定会有资源消耗，消耗的多少则取决于客户端的实现）")])],-1),dn=(0,p.Wm)("p",null,"它的劣势应该就是【需要手写配置文件】有点麻烦了。但其实，你想想，服务器上你已经成功的写过一次了，现在又有什么区别呢？接下来，还是老样子，我们分解一下步骤：",-1),Wn=(0,p.Uk)("首先请从 Xray 官方的 "),qn={href:"https://github.com/XTLS/Xray-core/releases",target:"_blank",rel:"noopener noreferrer"},yn=(0,p.Uk)("GitHub 仓库 Release 页面"),gn=(0,p.Uk)(" 获取对应平台的版本，并解压缩到合适的文件夹"),Un=(0,p.uE)('<li><p>在合适的文件夹建立空白配置文件：<code>config.json</code> （自己常用平台下新建文件大家肯定都会，这就真不用啰嗦了）</p></li><li><p>至于什么是“合适的文件夹”？这就取决于具体的平台了~</p></li><li><p>填写客户端配置</p><ul><li>我就以 <code>8.1</code> 原理说明里展示的基本三类分流（国内流量直连、国际流量转发 VPS、广告流量屏蔽），结合 <code>8.2</code> 的连接要素，写成一个配置文件</li><li>请将 <code>uuid</code> 替换成与你服务器一致的 <code>uuid</code></li><li>请将 <code>address</code> 替换成你的真实域名</li><li>请将 <code>serverName</code> 替换成你的真实域名</li><li>各个配置模块的说明我都已经（很啰嗦的）放在对应的配置点上了</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// REFERENCE:</span>\n<span class="token comment">// https://github.com/XTLS/Xray-examples</span>\n<span class="token comment">// https://xtls.github.io/config/</span>\n\n<span class="token comment">// 常用的config文件，不论服务器端还是客户端，都有5个部分。外加小小白解读：</span>\n<span class="token comment">// ┌─ 1_log          日志设置 - 日志写什么，写哪里（出错时有据可查）</span>\n<span class="token comment">// ├─ 2_dns          DNS-设置 - DNS怎么查（防DNS污染、防偷窥、避免国内外站匹配到国外服务器等）</span>\n<span class="token comment">// ├─ 3_routing      分流设置 - 流量怎么分类处理（是否过滤广告、是否国内外分流）</span>\n<span class="token comment">// ├─ 4_inbounds     入站设置 - 什么流量可以流入Xray</span>\n<span class="token comment">// └─ 5_outbounds    出站设置 - 流出Xray的流量往哪里去</span>\n\n<span class="token punctuation">{</span>\n  <span class="token comment">// 1_日志设置</span>\n  <span class="token comment">// 注意，本例中我默认注释掉了日志文件，因为windows, macOS, Linux 需要写不同的路径，请自行配置</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// &quot;access&quot;: &quot;/home/local/xray_log/access.log&quot;,    // 访问记录</span>\n    <span class="token comment">// &quot;error&quot;: &quot;/home/local/xray_log/error.log&quot;,    // 错误记录</span>\n    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span> <span class="token comment">// 内容从少到多: &quot;none&quot;, &quot;error&quot;, &quot;warning&quot;, &quot;info&quot;, &quot;debug&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 2_DNS设置</span>\n  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// 2.1 国外域名使用国外DNS查询</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.1.1.1&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:geolocation-!cn&quot;</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// 2.2 国内域名使用国内DNS查询，并期待返回国内的IP，若不是国内IP则舍弃，用下一个查询</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;223.5.5.5&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;expectIPs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// 2.3 作为2.2的备份，对国内网站进行二次查询</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;114.114.114.114&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// 2.4 最后的备份，上面全部失败时，用本机DNS查询</span>\n      <span class="token string">&quot;localhost&quot;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 3_分流设置</span>\n  <span class="token comment">// 所谓分流，就是将符合否个条件的流量，用指定`tag`的出站协议去处理（对应配置的5.x内容）</span>\n  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token comment">// 3.1 广告域名屏蔽</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:category-ads-all&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// 3.2 国内域名直连</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// 3.3 国内IP直连</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;ip&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geoip:cn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;geoip:private&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// 3.4 国外域名代理</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:geolocation-!cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy&quot;</span>\n      <span class="token punctuation">}</span>\n      <span class="token comment">// 3.5 默认规则</span>\n      <span class="token comment">// 在Xray中，任何不符合上述路由规则的流量，都会默认使用【第一个outbound（5.1）】的设置，所以一定要把转发VPS的outbound放第一个</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 4_入站设置</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// 4.1 一般都默认使用socks5协议作本地转发</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks-in&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 这个是通过socks5协议做本地转发的地址</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10800</span><span class="token punctuation">,</span> <span class="token comment">// 这个是通过socks5协议做本地转发的端口</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// 4.2 有少数APP不兼容socks协议，需要用http协议做转发，则可以用下面的端口</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http-in&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 这个是通过http协议做本地转发的地址</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10801</span> <span class="token comment">// 这个是通过http协议做本地转发的端口</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 5_出站设置</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// 5.1 默认转发VPS</span>\n    <span class="token comment">// 一定放在第一个，在routing 3.5 里面已经说明了，这等于是默认规则，所有不符合任何规则的流量都走这个</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vless&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-name.yourdomain.com&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 替换成你的真实域名</span>\n            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>\n            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token punctuation">{</span>\n                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uuiduuid-uuid-uuid-uuid-uuiduuiduuid&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 和服务器端的一致</span>\n                <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Windows, macOS 同学保持这个不变</span>\n                <span class="token comment">// &quot;flow&quot;: &quot;xtls-rprx-splice&quot;,    // Linux和安卓同学请改成Splice性能更强</span>\n                <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n              <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;xtlsSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n          <span class="token property">&quot;serverName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-name.yourdomain.com&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 替换成你的真实域名</span>\n          <span class="token property">&quot;allowInsecure&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 禁止不安全证书</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// 5.2 用`freedom`协议直连出站，即当routing中指定&#39;direct&#39;流出时，调用这个协议做处理</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// 5.3 用`blackhole`协议屏蔽流量，即当routing中指定&#39;block&#39;时，调用这个协议做处理</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blackhole&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br></div></div></li>',3),hn=(0,p.Wm)("h2",{id:"_8-4-附加题-2-在-pc-端手工运行-xray-core",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#_8-4-附加题-2-在-pc-端手工运行-xray-core","aria-hidden":"true"},"#"),(0,p.Uk)(" 8.4 附加题 2：在 PC 端手工运行 "),(0,p.Wm)("code",null,"xray-core")],-1),xn=(0,p.Wm)("p",null,[(0,p.Uk)("写好了配置文件该，要怎么让 "),(0,p.Wm)("code",null,"xray-core"),(0,p.Uk)(" 运行起来呢？双击好像并没有反应啊？")],-1),fn=(0,p.Wm)("p",null,"首先，你要找到电脑上的【命令行界面】。",-1),vn=(0,p.Wm)("ol",null,[(0,p.Wm)("li",null,[(0,p.Uk)("Linux 桌面、macOS 系统的同学肯定已经比较熟悉了，搜索 "),(0,p.Wm)("code",null,"Console"),(0,p.Uk)(" 或者 "),(0,p.Wm)("code",null,"Terminal"),(0,p.Uk)(" 就可以")]),(0,p.Wm)("li",null,[(0,p.Uk)("Windows 就可以搜索使用 "),(0,p.Wm)("code",null,"Cmd"),(0,p.Uk)(" 或者 "),(0,p.Wm)("code",null,"Powershell"),(0,p.Uk)(" 等程序（WSL 的同学你坐下，你的 "),(0,p.Wm)("code",null,"Console"),(0,p.Uk)(" 当然也可以）")])],-1),_n=(0,p.Wm)("p",null,[(0,p.Uk)("其次，我们要做的事情是【让 "),(0,p.Wm)("code",null,"xray"),(0,p.Uk)(" 找到并读取配置文件 "),(0,p.Wm)("code",null,"config.json"),(0,p.Uk)("，然后运行】，所以：")],-1),Xn=(0,p.Wm)("ol",null,[(0,p.Wm)("li",null,[(0,p.Wm)("p",null,[(0,p.Uk)("在 Windows 下，假设你的 "),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)(" 程序位置是 "),(0,p.Wm)("code",null,"C:\\Xray-windows-64\\xray.exe"),(0,p.Uk)("，配置文件位置是"),(0,p.Wm)("code",null,"C:\\Xray-windows-64\\config.json"),(0,p.Uk)("，那么正确的启动命令就是：")]),(0,p.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,p.Wm)("pre",{class:"language-bash"},[(0,p.Wm)("code",null,[(0,p.Uk)("C:"),(0,p.Wm)("span",{class:"token punctuation"},"\\"),(0,p.Uk)("Xray-windows-64"),(0,p.Wm)("span",{class:"token punctuation"},"\\"),(0,p.Uk)("xray.exe -c C:"),(0,p.Wm)("span",{class:"token punctuation"},"\\"),(0,p.Uk)("Xray-windows-64"),(0,p.Wm)("span",{class:"token punctuation"},"\\"),(0,p.Uk)("config.json\n")])]),(0,p.Wm)("div",{class:"line-numbers"},[(0,p.Wm)("span",{class:"line-number"},"1"),(0,p.Wm)("br")])]),(0,p.Wm)("div",{class:"custom-container tip"},[(0,p.Wm)("p",{class:"custom-container-title"},"说明"),(0,p.Wm)("p",null,[(0,p.Uk)("这里的 "),(0,p.Wm)("code",null,"-c"),(0,p.Uk)(" 就是指定配置文件路径的参数，告诉 "),(0,p.Wm)("code",null,"xray"),(0,p.Uk)(" 去后面的位置找配置文件")])])]),(0,p.Wm)("li",null,[(0,p.Wm)("p",null,[(0,p.Uk)("相似的，在 Linux 和 macOS 下，假设你的 "),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)(" 程序位置是 "),(0,p.Wm)("code",null,"/usr/local/bin/xray"),(0,p.Uk)("，配置文件位置是"),(0,p.Wm)("code",null,"/usr/local/etc/xray/config.json"),(0,p.Uk)("，那么正确的启动命令就是")]),(0,p.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,p.Wm)("pre",{class:"language-bash"},[(0,p.Wm)("code",null,"/usr/local/bin/xray -c /usr/local/etc/xray/config.json\n")]),(0,p.Wm)("div",{class:"line-numbers"},[(0,p.Wm)("span",{class:"line-number"},"1"),(0,p.Wm)("br")])]),(0,p.Wm)("div",{class:"custom-container tip"},[(0,p.Wm)("p",{class:"custom-container-title"},"说明"),(0,p.Wm)("p",null,[(0,p.Uk)("每个系统都有系统路径变量，所以写 "),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)(" 程序时不一定要写绝对路径。但是写了肯定没错，所以我就如此演示了。")])])])],-1),Sn=(0,p.Wm)("h2",{id:"_8-5-附加题-3-在-pc-端开机自动运行-xray-core",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#_8-5-附加题-3-在-pc-端开机自动运行-xray-core","aria-hidden":"true"},"#"),(0,p.Uk)(" 8.5 附加题 3：在 PC 端开机自动运行 "),(0,p.Wm)("code",null,"xray-core")],-1),wn=(0,p.Wm)("p",null,[(0,p.Uk)("如果你真的尝试了手动运行 "),(0,p.Wm)("code",null,"xray-core"),(0,p.Uk)("，你一定会发现这个方式还有点小问题：")],-1),Pn=(0,p.Wm)("ol",null,[(0,p.Wm)("li",null,[(0,p.Uk)("每次运行 "),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)(" 都要出现一个黑乎乎的窗口，很丑")]),(0,p.Wm)("li",null,"不能开机自动运行，每次都要手工输入，十分不方便")],-1),Nn=(0,p.Wm)("p",null,[(0,p.Uk)("我可以肯定的告诉你："),(0,p.Wm)("strong",null,"完全可以解决"),(0,p.Uk)("。但是具体的解决方式，就当作课外作业留给大家吧！（友情提示，文档站的问答区有线索哦）")],-1),In=(0,p.Wm)("h2",{id:"_8-6-圆满完成",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#_8-6-圆满完成","aria-hidden":"true"},"#"),(0,p.Uk)(" 8.6 圆满完成！")],-1),Tn=(0,p.Wm)("p",null,[(0,p.Uk)("我相信，有耐心看到这里的同学，都是兼具好奇心和行动力的学习派！我现在要郑重的恭喜你，因为到了这里，你已经完完整整的【"),(0,p.Wm)("strong",null,"从第一条命令开始，完成了 VPS 服务器部署，并成功的在客户端配置使用 Xray"),(0,p.Uk)("】了！这毫无疑问是一个巨大的胜利！")],-1),Cn=(0,p.Wm)("p",null,[(0,p.Uk)("我相信，你现在一定对"),(0,p.Wm)("code",null,"Linux"),(0,p.Uk)("不再恐惧，对"),(0,p.Wm)("code",null,"Xray"),(0,p.Uk)("不再陌生了吧！")],-1),Ln=(0,p.Wm)("p",null,[(0,p.Wm)("strong",null,"至此，小小白白话文圆满结束！")],-1),On=(0,p.Wm)("blockquote",null,[(0,p.Wm)("p",null,"⬛⬛⬛⬛⬛⬛⬛⬛ 100%")],-1),Dn=(0,p.Wm)("h2",{id:"_8-7-to-infinity-and-beyond",tabindex:"-1"},[(0,p.Wm)("a",{class:"header-anchor",href:"#_8-7-to-infinity-and-beyond","aria-hidden":"true"},"#"),(0,p.Uk)(" 8.7 TO INFINITY AND BEYOND!")],-1),jn=(0,p.Wm)("p",null,[(0,p.Wm)("strong",null,"但现在你看到的，远远不是 Xray 的全貌。")],-1),An=(0,p.Wm)("p",null,[(0,p.Wm)("code",null,"Xray"),(0,p.Uk)("是一个强大而丰富的网络工具集合，平台化的提供了众多模块，可以像瑞士军刀一样，通过灵活的配置组合解决各种不同的问题。而本文，仅仅蜻蜓点水的用了"),(0,p.Wm)("strong",null,"最简单"),(0,p.Uk)("、"),(0,p.Wm)("strong",null,"最直观"),(0,p.Uk)("的配置来做"),(0,p.Wm)("strong",null,"基础演示"),(0,p.Uk)("。")],-1),Gn=(0,p.Wm)("p",null,"如果你觉得现在已经完全够用了，那就好好的享受它给你带来的信息自由。但如果你的好奇心依然不能停歇，那就去继续挖掘它无限的可能性吧！",-1),En=(0,p.Wm)("p",null,"需要更多信息，可以到这里寻找：",-1),Vn={href:"https://xtls.github.io/",target:"_blank",rel:"noopener noreferrer"},Rn=(0,p.Uk)("xtls.github.io"),Yn=(0,p.Uk)(" - 官方文档站"),Hn={href:"https://t.me/projectXray",target:"_blank",rel:"noopener noreferrer"},Qn=(0,p.Uk)("官方 Telegram 群组"),Fn=(0,p.Uk)(" - 活跃而友善的官方讨论社区"),Bn=(0,p.Wm)("p",null,[(0,p.Wm)("img",{src:o,alt:"TO INFINITY AND BEYOND!"})],-1),zn=(0,p.Wm)("div",{class:"custom-container tip"},[(0,p.Wm)("p",{class:"custom-container-title"},"不算后记的后记"),(0,p.Wm)("p",null,"希望我陪你走过的这一段小小的旅程，可以成为你网络生活中的一份小小助力。"),(0,p.Wm)("p",null,"这篇文章里的工具和信息难免会一点点的陈旧过时，但你一定会逐渐成长为大佬。未来的某个时间，若你能偶尔想起这篇教程、想起我写下本文的初衷，那我衷心希望你能够薪火相传、把最新的知识分享给后来人，让这一份小小的助力在社区里坚定的传递下去。"),(0,p.Wm)("p",null,"这是个大雪封山乌云密布的世界，人们孤独的走在各自的路上试图寻找阳光，如果大家偶尔交汇时不能守望相助互相鼓励，那最终剩下的，恐怕只有【千山鸟飞绝 万径人踪灭】的凄凉了吧。")],-1),Mn={render:function(n,s){const a=(0,p.up)("RouterLink"),t=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,l,u,c,r,i,(0,p.Wm)("div",m,[k,b,d,(0,p.Wm)("p",null,[W,(0,p.Wm)(a,{to:"/document/level-1/routing-lv1-part1.html"},{default:(0,p.w5)((()=>[q])),_:1}),y])]),g,U,(0,p.Wm)("p",null,[h,x,f,(0,p.Wm)(a,{to:"/config/inbounds/"},{default:(0,p.w5)((()=>[v])),_:1}),_,X,S,w,P,N,I,T,C]),L,O,D,(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[j,(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[A,(0,p.Wm)("a",G,[E,(0,p.Wm)(t)]),V]),R])]),(0,p.Wm)("li",null,[Y,(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[H,(0,p.Wm)("a",Q,[F,(0,p.Wm)(t)]),B]),z])]),M,(0,p.Wm)("li",null,[J,(0,p.Wm)("ul",null,[(0,p.Wm)("li",null,[K,(0,p.Wm)("a",Z,[$,(0,p.Wm)(t)]),nn,(0,p.Wm)("a",sn,[an,(0,p.Wm)(t)]),pn]),(0,p.Wm)("li",null,[tn,(0,p.Wm)("a",on,[en,(0,p.Wm)(t)]),ln]),un])])]),cn,rn,mn,kn,bn,dn,(0,p.Wm)("ol",null,[(0,p.Wm)("li",null,[(0,p.Wm)("p",null,[Wn,(0,p.Wm)("a",qn,[yn,(0,p.Wm)(t)]),gn])]),Un]),hn,xn,fn,vn,_n,Xn,Sn,wn,Pn,Nn,In,Tn,Cn,Ln,On,Dn,jn,An,Gn,En,(0,p.Wm)("ol",null,[(0,p.Wm)("li",null,[(0,p.Wm)("a",Vn,[Rn,(0,p.Wm)(t)]),Yn]),(0,p.Wm)("li",null,[(0,p.Wm)("a",Hn,[Qn,(0,p.Wm)(t)]),Fn])]),Bn,zn],64)}}}}]);