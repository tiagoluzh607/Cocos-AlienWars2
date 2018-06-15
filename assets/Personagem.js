let Personagem = cc.Class({
    extends: cc.Component,

    properties: {
      
		tiroPrefab: cc.Prefab,
		_direcao: cc.Vec2,
    },

    // use this for initialization
    onLoad: function () {

    },
    
	calcularDirecao: function(destino){
		
		let direcao = destino.sub(this.node.position);
		direcao = direcao.normalize();
		return direcao
	},
	
	olharPara: function(direcao){
		let angulo = Math.atan2(direcao.y, direcao.x); //retorna em radiano
		angulo = -angulo * (180/Math.PI); // transforma de radianos em graus
		return angulo;
	},
	
	atirar:function(){
		let disparo = cc.instantiate(this.tiroPrefab);
		disparo.parent = this.node.parent;
		disparo.position = this.node.position;
		disparo.group = this.node.group;
		
		let componenteTiro = disparo.getComponent("Tiro");
		componenteTiro.direcao = this._direcao;
	},
	
	tomarDano:function(){
		
	},
	
    onCollisionEnter:function(outro, eu)
    {
		
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {

     },
});

module.exports = Personagem;
