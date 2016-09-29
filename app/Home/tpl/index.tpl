
<div id="main">
    <h3 class="root">{{title}}</h3>
    <ul>
        {{each list}}
        <li><a href="{{$value.url}}">{{$value.title}}</a></li>
        {{/each}}
    </ul>
    <a href="javascript:void(0);" class="ai">点我看看</a>
</div>