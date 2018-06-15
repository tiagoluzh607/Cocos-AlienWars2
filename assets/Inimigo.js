
let Personagem = require("Personagem");
cc.Class({
    extends: Personagem,

    properties: {
      
	  
	  _alvo:cc.Node,
	  //_direcao: cc.Vec2, vem com a herança de personagem
	  velocidade: 50,
	  
	  //tiro
	  //tiroPrefab: cc.Prefab, vem com a herança de personagem
	  tempoAtaque: 1,
	  
    },

	onLoad: function(){
		
		this._alvo = cc.find("hero"); //buscando node do hero
		
		this.schedule(this.atirar, this.tempoAtaque);
		
	},
	
	tomarDano: function(){
	
		//adiciona ponto ao jogador
		let jogador = this._alvo.getComponent("Jogador");
		jogador.adicionarPonto(10);
	
		this.node.destroy();
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

		this._direcao = this.calcularDirecao(this._alvo.position); //funcao herdada da class personagem
		
		//Rotação
		this.node.rotation = this.olharPara(this._direcao); //funcao herdada da class personagem
		
	},
	
	update: function(dt){
		this.mudarDirecao();
		let deslocamento = this._direcao.mul(this.velocidade * dt);
		this.node.position = this.node.position.add(deslocamento);
	},
   
});
