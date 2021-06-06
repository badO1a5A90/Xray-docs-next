(self.webpackChunkXray_docs_next=self.webpackChunkXray_docs_next||[]).push([[8140],{9805:(n,s,o)=>{"use strict";o.r(s),o.d(s,{data:()=>t});const t={key:"v-268cd669",path:"/en/config/outbound.html",title:"出站代理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"OutboundObject",slug:"outboundobject",children:[{level:3,title:"ProxySettingsObject",slug:"proxysettingsobject",children:[]},{level:3,title:"MuxObject",slug:"muxobject",children:[]}]}],filePathRelative:"en/config/outbound.md",git:{updatedTime:1622027153e3,contributors:[]}}},9781:(n,s,o)=>{"use strict";o.r(s),o.d(s,{default:()=>M});var t=o(6252);const a=(0,t.Wm)("h1",{id:"出站代理"},[(0,t.Wm)("a",{class:"header-anchor",href:"#出站代理"},"#"),(0,t.Uk)(" 出站代理")],-1),e=(0,t.Uk)("出站连接用于发送数据，可用的协议请见 "),p=(0,t.Uk)("outbound 可用协议列表"),c=(0,t.Uk)("。"),u=(0,t.uE)('<h2 id="outboundobject"><a class="header-anchor" href="#outboundobject">#</a> OutboundObject</h2><p><code>OutboundObject</code> 对应配置文件中 <code>outbounds</code> 项的一个子元素。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>列表中的第一个元素作为主 outbound。当路由匹配不存在或没有匹配成功时，流量由主 outbound 发出。</p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;sendThrough&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;协议名称&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标识&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;proxySettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;another-outbound-tag&quot;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;mux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>sendThrough</code>: address</p></blockquote><p>用于发送数据的 IP 地址，当主机有多个 IP 地址时有效，默认值为 <code>&quot;0.0.0.0&quot;</code>。</p><blockquote><p><code>protocol</code>: string</p></blockquote>',7),l=(0,t.Uk)("连接协议名称，可选的协议类型见 "),r=(0,t.Uk)("outbound 可用协议列表"),i=(0,t.Uk)("。"),d=(0,t.uE)('<blockquote><p><code>settings</code>: OutboundConfigurationObject</p></blockquote><p>具体的配置内容，视协议不同而不同。详见每个协议中的 <code>OutboundConfigurationObject</code>。</p><blockquote><p><code>tag</code>: string</p></blockquote><p>此出站连接的标识，用于在其它的配置中定位此连接。</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>当其不为空时，其值必须在所有 <code>tag</code> 中 <strong>唯一</strong>。</p></div>',5),b=(0,t.Wm)("code",null,"streamSettings",-1),k=(0,t.Uk)(": "),m=(0,t.Uk)("StreamSettingsObject"),g=(0,t.uE)('<p>底层传输方式（transport）是当前 Xray 节点和其它节点对接的方式</p><blockquote><p><code>proxySettings</code>: <a href="#proxysettingsobject">ProxySettingsObject</a></p></blockquote><p>出站代理配置。当出站代理生效时，此 outbound 的 <code>streamSettings</code> 将不起作用。</p><blockquote><p><code>mux</code>: <a href="#muxobject">MuxObject</a></p></blockquote><p>Mux 相关的具体配置。</p><h3 id="proxysettingsobject"><a class="header-anchor" href="#proxysettingsobject">#</a> ProxySettingsObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;another-outbound-tag&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>当指定另一个 outbound 的标识时，此 outbound 发出的数据，将被转发至所指定的 outbound 发出。</p>',9),q={class:"custom-container danger"},h=(0,t.Wm)("p",{class:"custom-container-title"},"DANGER",-1),x=(0,t.Uk)("这种转发方式"),j=(0,t.Wm)("strong",null,"不经过",-1),y=(0,t.Uk)("底层传输方式。如果需要使用支持底层传输方式的转发，请使用 "),f=(0,t.Uk)("SockOpt.dialerProxy"),v=(0,t.Uk)("。"),O=(0,t.Wm)("div",{class:"custom-container danger"},[(0,t.Wm)("p",{class:"custom-container-title"},"DANGER"),(0,t.Wm)("p",null,"此选项与 SockOpt.dialerProxy 不兼容")],-1),W={class:"custom-container tip"},P=(0,t.Wm)("p",{class:"custom-container-title"},"TIP",-1),U=(0,t.Uk)("兼容 v2fly/v2ray-core 的配置 "),S={href:"https://www.v2fly.org/config/outbounds.html#proxysettingsobject",target:"_blank",rel:"noopener noreferrer"},T=(0,t.Uk)("transportLayer"),C=(0,t.uE)('<h3 id="muxobject"><a class="header-anchor" href="#muxobject">#</a> MuxObject</h3><p>Mux 功能是在一条 TCP 连接上分发多个 TCP 连接的数据。实现细节详见 <a href="../../development/protocols/muxcool">Mux.Cool</a>。Mux 是为了减少 TCP 的握手延迟而设计，而非提高连接的吞吐量。使用 Mux 看视频、下载或者测速通常都有反效果。Mux 只需要在客户端启用，服务器端自动适配。</p><p><code>MuxObject</code> 对应 <code>OutboundObject</code> 中的 <code>mux</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;concurrency&quot;</span><span class="token operator">:</span> <span class="token number">8</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p><code>enabled</code>: true | false</p></blockquote><p>是否启用 Mux 转发请求，默认值 <code>false</code>。</p><blockquote><p><code>concurrency</code>: number</p></blockquote><p>最大并发连接数。最小值 <code>1</code>，最大值 <code>1024</code>，默认值 <code>8</code>。</p><p>这个数值表示了一个 TCP 连接上最多承载的 Mux 连接数量。比如设置 <code>concurrency=8</code> 时，当客户端发出了 8 个 TCP 请求，Xray 只会发出一条实际的 TCP 连接，客户端的 8 个请求全部由这个 TCP 连接传输。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>填负数时，如 <code>-1</code>，不加载 mux 模块。</p></div>',10),M={render:function(n,s){const o=(0,t.up)("RouterLink"),M=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[a,(0,t.Wm)("p",null,[e,(0,t.Wm)(o,{to:"/en/config/outbounds/"},{default:(0,t.w5)((()=>[p])),_:1}),c]),u,(0,t.Wm)("p",null,[l,(0,t.Wm)(o,{to:"/en/config/outbounds/"},{default:(0,t.w5)((()=>[r])),_:1}),i]),d,(0,t.Wm)("blockquote",null,[(0,t.Wm)("p",null,[b,k,(0,t.Wm)(o,{to:"/en/config/transport.html#streamsettingsobject"},{default:(0,t.w5)((()=>[m])),_:1})])]),g,(0,t.Wm)("div",q,[h,(0,t.Wm)("p",null,[x,j,y,(0,t.Wm)(o,{to:"/en/config/transport.html#sockoptobject"},{default:(0,t.w5)((()=>[f])),_:1}),v])]),O,(0,t.Wm)("div",W,[P,(0,t.Wm)("p",null,[U,(0,t.Wm)("a",S,[T,(0,t.Wm)(M)])])]),C],64)}}}}]);