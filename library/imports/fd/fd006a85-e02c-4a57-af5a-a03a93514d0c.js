"use strict";
cc._RF.push(module, 'fd006qF4CxKV69aoDqTUU0M', 'Inimigo');
// Inimigo.js

"use strict";

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

		_alvo: cc.Node,
		_direcao: cc.Vec2,
		velocidade: 50,

		tiroPrefab: cc.Prefab,
		tempoAtaque: 1

	},

	onLoad: function onLoad() {

		this._alvo = cc.find("hero"); //buscando node do hero

		this.schedule(this.atirar, this.tempoAtaque);
	},

	atirar: function atirar() {
		var disparo = cc.instantiate(this.tiroPrefab);
		disparo.parent = this.node.parent;
		disparo.position = this.node.position;

		//direcao do disparo
		var componenteTiro = disparo.getComponent("Tiro");
		componenteTiro.direcao = this._direcao;
	},

	mudarDirecao: function mudarDirecao() {
		var direcao = this._alvo.position.sub(this.node.position);
		direcao = direcao.normalize();
		this._direcao = direcao;
	},

	update: function update(dt) {
		this.mudarDirecao();
		var deslocamento = this._direcao.mul(this.velocidade * dt);
		this.node.position = this.node.position.add(deslocamento);
	}

});

cc._RF.pop();