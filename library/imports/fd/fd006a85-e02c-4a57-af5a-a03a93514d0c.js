"use strict";
cc._RF.push(module, 'fd006qF4CxKV69aoDqTUU0M', 'Inimigo');
// Inimigo.js

"use strict";

var Personagem = require("Personagem");
cc.Class({
	extends: Personagem,

	properties: {

		_alvo: cc.Node,
		//_direcao: cc.Vec2, vem com a herança de personagem
		velocidade: 50,

		//tiro
		//tiroPrefab: cc.Prefab, vem com a herança de personagem
		tempoAtaque: 1

	},

	onLoad: function onLoad() {

		this._alvo = cc.find("hero"); //buscando node do hero

		this.schedule(this.atirar, this.tempoAtaque);
	},

	tomarDano: function tomarDano() {

		//adiciona ponto ao jogador
		var jogador = this._alvo.getComponent("Jogador");
		jogador.adicionarPonto(10);

		this.node.destroy();
	},

	atirar: function atirar() {
		var disparo = cc.instantiate(this.tiroPrefab);
		disparo.parent = this.node.parent;
		disparo.position = this.node.position;
		disparo.group = this.node.group; //o grupo de colisão do tiro é o mesmo que o grupo de colisão do inimigo

		//direcao do disparo
		var componenteTiro = disparo.getComponent("Tiro");
		componenteTiro.direcao = this._direcao;
	},

	mudarDirecao: function mudarDirecao() {
		var direcao = this._alvo.position.sub(this.node.position);
		direcao = direcao.normalize();
		this._direcao = direcao;

		//Rotação
		var angulo = Math.atan2(direcao.y, direcao.x);
		this.node.rotation = -angulo * (180 / Math.PI);
	},

	update: function update(dt) {
		this.mudarDirecao();
		var deslocamento = this._direcao.mul(this.velocidade * dt);
		this.node.position = this.node.position.add(deslocamento);
	}

});

cc._RF.pop();