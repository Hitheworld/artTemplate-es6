
<div id="main">
    <h3>{{title}}</h3>
    <ul>
        {{each list}}
        <li>
            <a href="{{$value.url}}">{{$value.title}}</a>
        </li>
        {{/each}}
    </ul>
</div>
