window.onload = function () {
    // canvas ��ʼ��
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");
    context.fillStyle = "#FFF";
    context.fillRect(0, 0, 800, 800);

    drawPrairie(context);
     drawSky(context);

    for(var i=0;i<5;i++){
        var x0=500*Math.random()+50;
        var y0=200*Math.random()+50;
        var c0=100*Math.random()+50;
        drawCloud(context,x0,y0,c0);
    }

};

function drawSky(cxt){
    cxt.save();

    cxt.beginPath();
    cxt.moveTo(0,420);
    cxt.bezierCurveTo(250,300,350,550,800,400);
    cxt.lineTo(800,0);
    cxt.lineTo(0,0);
    cxt.closePath();

    var lineStyle=cxt.createRadialGradient(400,0,50,400,0,200);
    lineStyle.addColorStop(0,"#73e7eb");
    lineStyle.addColorStop(1,"#48e4ea");

    cxt.fillStyle=lineStyle;
    cxt.fill();
    cxt.restore();
}

function drawPrairie(cxt){
    cxt.save();
    cxt.beginPath();
    cxt.moveTo(0,420);
    cxt.bezierCurveTo(250,300,350,550,800,400);
    cxt.lineTo(800,800);
    cxt.lineTo(0,800);
    cxt.closePath();

    var lineStyle=cxt.createLinearGradient(0,600,600,0);

    lineStyle.addColorStop(0,"#6ee951");
    lineStyle.addColorStop(0.3,"#55f230");
    lineStyle.addColorStop(1,"#4eef28");

    cxt.fillStyle=lineStyle;
    cxt.fill();
    cxt.restore();
}

/**
 * �������ƶ�
 * @param cxt
 * @param cx �ƶ��x��λ��
 * @param cy
 * @param cw �ƶ�Ŀ��
 */
function drawCloud(cxt,cx,cy,cw){
    //�ƶ���ƶ���Χ���������
    var maxWidth=800;
    //��������߽��ͷ��ʼ����
    cx=cx%maxWidth;
    //�ƶ�߶�Ϊ��ȵ�60%
    var ch=cw*0.6;

    cxt.beginPath();
    cxt.fillStyle="white";
    var grd=cxt.createLinearGradient(0,0,0,cy);
    grd.addColorStop(0,'rgba(255,255,255,0.8)');
    grd.addColorStop(1,'rgba(255,255,255,0.5)');
    cxt.fillStyle=grd;

    //�ڲ�ͬλ�ô���5��Բƴ�ӳ��ƶ���״
    cxt.arc(cx,cy,cw*0.19,0,360,false);
    cxt.arc(cx+cw*0.08,cy-ch*0.3,cw*0.11,0,360,false);
    cxt.arc(cx+cw*0.3,cy-ch*0.25,cw*0.25,0,360,false);
    cxt.arc(cx+cw*0.6,cy,cw*0.21,0,360,false);
    cxt.arc(cx+cw*0.3,cy-ch*0.1,cw*0.28,0,360,false);

    cxt.closePath();
    cxt.fill();
}