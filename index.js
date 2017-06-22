/**
 * Created by qing on 2017/6/13.
 */
var oBut = document.getElementsByClassName("but");
var oFont = document.getElementById("show");
var oProg = document.getElementsByClassName("prog");

var oP = document.getElementsByClassName("text");

var oButLen = oBut.length;
var width = [0,0,0,0];
var rgb = [0,0,0];

var text = oP.innerText = "1";
console.log(text);
for (var i=0;i<oButLen;i++) {
    oBut[i].index = i;//定义一个index属性  值是i
    oBut[i].onmousedown = function (e) {//鼠标按下那一刻
        var e = e || window.event;//event兼容
        var X = e.clientX;//获取到鼠标按下的初始值X
        var thisIndex = this;//吧当前对象保存起来
        var lastLeft = width[this.index];
        document.onmousemove = function (e) {
            width[thisIndex.index] = e.clientX - X + lastLeft;//移动改变的值减掉按下去的值
            if(width[thisIndex.index]>146)width[thisIndex.index]=146;
            if(width[thisIndex.index]<0)width[thisIndex.index]=0;

            oBut[thisIndex.index].style.left = width[thisIndex.index] + "px";
            oProg[thisIndex.index].style.width = width[thisIndex.index] + "px";


            if (thisIndex.index == 0){
                oFont.style.fontSize = width[thisIndex.index]/146*40+8+"px"
            }else {
                var num = parseInt(width[thisIndex.index]/146*255);
                rgb[thisIndex.index-1] = num;
                oFont.style.color = "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
            }
        };
        document.onmouseup = function () {
            this.onmousemove = null;
            this.onmouseup = null;
        };
    }
}