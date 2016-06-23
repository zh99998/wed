/**
 * Created by zh99998 on 16/6/22.
 */
// Tom 用自己的名字作为 clientId，获取 IMClient 对象实例
var Realtime = AV.Realtime;
var realtime = new Realtime({
    appId: 'cNqhtMHQdveGFcI8EA8PFkTc-gzGzoHsz',
    region: 'cn', // 美国节点为 "us"
});





realtime.createIMClient('Tom').then(function (tom) {
    // 创建与Jerry之间的对话
    return tom.createConversation({
        members: ['Jerry'],
        name: 'Tom & Jerry',
        unique: true
    });
}).then(function (conversation) {
    // 发送消息
    console.log(1);
    document.getElementById('form').onsubmit = function (event) {
        event.preventDefault();
        conversation.send(new AV.TextMessage(this.content.value))
            .then(function (message) {
                console.log('Tom & Jerry', '发送成功！');
            }).catch(console.error);
    };
});