window.onload = function () {
    // canvas ��ʼ��
    var canvas = document.getElementById("canvas");
    canvas.width = 800;
    canvas.height = 800;
    var context = canvas.getContext("2d");
    context.fillStyle = "#FFF";
    context.fillRect(0, 0, 800, 800);

    drawflag(context);
};
/**
 * ��������
 * @param  {[context]} cxt [����-�����Ļ���]
 * @param  {[double]} x   [������е�x����]
 * @param  {[double]} y   [������е�y����]
 * @param  {[double]} r   [�������Բ�뾶r]
 * @param  {[double]} R   [�������Բ�뾶R]
 * @param  {[double]} rot [�������ת�Ƕ�]
 * @return {[null]}
 */
function drawStar(cxt, x, y, r, R, rot) {
    cxt.beginPath();
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(
            Math.cos((18 + i * 72 - rot) / 180 * Math.PI) * R + x,
            -Math.sin((18 + i * 72 - rot) / 180 * Math.PI) * R + y
        );
        cxt.lineTo(
            Math.cos((54 + i * 72 - rot) / 180 * Math.PI) * r + x,
            -Math.sin((54 + i * 72 - rot) / 180 * Math.PI) * r + y
        );
    }
    cxt.closePath();

    cxt.fillStyle = "#fb3";
    cxt.strokeStyle = "#fb5";
    cxt.lineWidth = 3;
    cxt.lineJoin = "round";

    cxt.fill();
    cxt.stroke();
}


/**
 *�������Ǻ���
 * @param{[context]}  cxt[����-�����Ļ���]
 * @param{[]}
 *
 */
function drawflag(cxt){
    cxt.fillStyle="rgb(222,41,16)";
    cxt.fillRect(0,0,600,400);
    cxt.fillStyle="rgb(255,255,0)";
    drawStar(cxt,90,100,60,25,108);
    drawStar(cxt,200,35,20,7.5,60);
    drawStar(cxt,250,80,20,7.5,80);
    drawStar(cxt,250,150,20,7.5,108);
    drawStar(cxt,200,195,20,7.5,60);
    cxt.fill();

}

drawflag(context);