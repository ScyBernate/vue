// 临时性，禁用F12调试器
window.onkeydown = window.onkeyup = window.onkeypress = function (event) {
    // 判断是否按下F12，F12键码为123
    if (event.keyCode === 123) {
        event.preventDefault(); // 阻止默认事件行为
        window.event.returnValue = false;
    }
}

//禁用页面的ctrl功能，来禁止ctrl+S保存功能
window.addEventListener('keydown', function (e) {
    if(e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
    }
})

//禁用页面的ctrl功能，来禁止ctrl+C保存功能
window.addEventListener('keydown', function (e) {
    if(e.keyCode == 67 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
    }
})

// 为右键添加自定义事件，禁用菜单右键！
window.oncontextmenu = function() {
    event.preventDefault(); // 阻止默认事件行为
    return false;
}

 // 无限回写，阻碍调试
var x = document.createElement('div');
var isOpening = false;
Object.defineProperty(x, 'id', {
  get:function(){
     console.log("你打开了控制台");
      window.location.reload()
  }
});
console.info(x);
//出处 https://www.cnblogs.com/LyShark