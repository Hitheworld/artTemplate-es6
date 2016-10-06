
<div id="main">
    <h3 class="root">{{title}}</h3>
    <ul>
        {{each list}}
        <li><a href="{{$value.url}}">{{$value.title}}</a></li>
        {{/each}}
    </ul>

    <button
            type="button"
            class="am-btn am-btn-primary"
            data-am-modal="{target: '#doc-modal-1', closeViaDimmer: 0, width: 400, height: 225}">
        Modal
    </button>

    <div class="am-modal am-modal-no-btn" tabindex="-1" id="doc-modal-1">
        <div class="am-modal-dialog">
            <div class="am-modal-hd">Modal 标题
                <a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>
            </div>
            <div class="am-modal-bd">
                Modal 内容。本 Modal 无法通过遮罩层关闭。
            </div>
        </div>
    </div>

    <div class="am-alert" data-am-alert>
        <button type="button" class="am-close">&times;</button>
        <h3>共同渡过</h3>
        <p>《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。</p>
        <ul>
            <li>若我可再活多一次都盼</li>
            <li>再可以在路途重逢着你</li>
            <li>共去写一生的句子</li>
            <li>若我可再活多一次千次</li>
            <li>我都盼面前仍是你</li>
            <li>我要他生都有今生的暖意</li>
        </ul>
    </div>

    <a href="javascript:void(0);" class="ai">点我看看</a>

    <div class="Csbtn"></div>

    <div id="target" class="hover"></div>

    <a href="javascript:void(0);" class="J_btn_zip">点击下载</a>
</div>