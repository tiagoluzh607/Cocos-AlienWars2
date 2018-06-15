// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       inimigoPrefab : cc.Prefab,
	   area: 60,
	   tempo: 2,
        // },
    },


     onLoad: function() {
		 
		 this.schedule(this.gerar, this.tempo); // schedule agenda chama a classe de gerar de tanto em tanto tempo
	 },

	 gerar: function(){
		 let inimigo = cc.instantiate(this.inimigoPrefab);
		 inimigo.parent = this.node.parent;
		 
		 let posicao = new cc.Vec2(Math.random() - .5, Math.random() - .5); //diminuindo -0.5 pois o randown só vai até 1 assim fica possivel a posicao ser criada em aqualquer eixo positivo ou negativo
		 posicao = posicao.normalize();
		 posicao = posicao.mul(this.area);
		 posicao = this.node.position.add(posicao);
		 
		 inimigo.position = posicao;
	 },
    // update (dt) {},
});
