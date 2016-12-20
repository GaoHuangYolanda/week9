/**
 * Created by lenovo on 2016/11/21.
 */
window.onload = function(){
    var canvas = document.getElementById("canvas");
    canvas.width = 600;
    canvas.height = 400;
    var context = canvas.getContext("2d")
    var width=canvas.width;
    var height=width*2/3;
    var w=width/30;//С����Ŀ�
    context.fillStyle="red";
    context.fillRect(0,0,width,height);
    var maxR = 0.15, minR = 0.05;//
    var maxX = 0.25, maxY = 0.25;//�����ǵ�λ��
    var minX = [0.50, 0.60, 0.60, 0.50];
    var minY = [0.10, 0.20, 0.35, 0.45];
    // �����
    var ox = height * maxX, oy = height * maxY;
    create5star(context,ox,oy,height * maxR,"#ff0",0);//���������
    // ��С��
    for (var idx = 0; idx < 4; idx++) {
        var  sx = minX[idx] * height, sy = minY[idx] * height;
        var  theta = Math.atan((oy - sy)/(ox - sx));
        create5star(context,sx, sy, height * minR, "#ff0",-Math.PI/2+theta);
    }
};
//���������
    /**
     * ����һ���������״. ������ǵ���������Ϊ(sx,sy),���ĵ�����ľ���Ϊradius,rotate=0ʱһ�������ڶԳ�����
     * rotate:�ƶԳ�����תrotate����
     */
    function create5star(context,sx,sy,radius,color,rotato){
        context.save();
        context.fillStyle=color;
        context.translate(sx,sy);//�ƶ�����ԭ��
        context.rotate(Math.PI+rotato);//��ת
        context.beginPath();//����·��
        var x = Math.sin(0);
        var y= Math.cos(0);
        var dig = Math.PI/5 *4;
        for(var i = 0;i< 5;i++){//������ǵ�������
            var x = Math.sin(i*dig);
            var y = Math.cos(i*dig);
            context.lineTo(x*radius,y*radius);
        }
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();
    }



