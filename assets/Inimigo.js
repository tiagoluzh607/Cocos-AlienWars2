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
      
	  
	  _alvo:cc.Node,
	  _direcao: cc.Vec2,
	  velocidade: 50,
	  
	  //tiro
	  tiroPrefab: cc.Prefab,
	  tempoAtaque: 1,
	  
    },

	onLoad: function(){
		
		this._alvo = cc.find("hero"); //buscando node do hero
		
		this.schedule(this.atirar, this.tempoAtaque);
		
	},
	
	atirar: function(){
		let disparo = cc.instantiate(this.tiroPrefab);
		disparo.parent = this.node.parent;
		disparo.position = this.node.position;
		disparo.group = this.node.group; //o grupo de colisão do tiro é o mesmo que o grupo de colisão do inimigo
		
		//direcao do disparo
		let componenteTiro = disparo.getComponent("Tiro");
		componenteTiro.direcao = this._direcao;
	},
   
	mudarDirecao: function(){
		let direcao = this._alvo.position.sub(this.node.position);
		direcao = direcao.normalize();
		this._direcao = direcao;
	},
	
	update: function(dt){
		this.mudarDirecao();
		let deslocamento = this._direcao.mul(this.velocidade * dt);
		this.node.position = this.node.position.add(deslocamento);
	},
   
});
