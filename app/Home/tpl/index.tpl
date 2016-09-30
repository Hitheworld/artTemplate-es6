
<div id="main">
    <h3 class="root">{{title}}</h3>
    <ul>
        {{each list}}
        <li><a href="{{$value.url}}">{{$value.title}}</a></li>
        {{/each}}
    </ul>
    <a href="javascript:void(0);" class="ai">点我看看</a>

    <div class="Csbtn"></div>

    <div id="target" class="hover"></div>

    <a href="javascript:void(0);" class="J_btn_zip">点击下载</a>
</div>