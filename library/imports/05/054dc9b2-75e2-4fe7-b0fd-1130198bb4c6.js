"use strict";
cc._RF.push(module, '054dcmydeJP57D9ETAZi7TG', 'Personagem');
// Personagem.js

"use strict";

var Personagem = cc.Class({
				extends: cc.Component,

				properties: {

								tiroPrefab: cc.Prefab,
								_direcao: cc.Vec2
				},

				// use this for initialization
				onLoad: function onLoad() {},

				calcularDirecao: function calcularDirecao(destino) {

								var direcao = destino.sub(this.node.position);
								direcao = direcao.normalize();
								return direcao;
				},

				olharPara: function olharPara(direcao) {
								var angulo = Math.atan2(direcao.y, direcao.x); //retorna em radiano
								angulo = -angulo * (180 / Math.PI); // transforma de radianos em graus
								return angulo;
				},

				atirar: function atirar() {
								var disparo = cc.instantiate(this.tiroPrefab);
								disparo.parent = this.node.parent;
								disparo.position = this.node.position;
								disparo.group = this.node.group;

								var componenteTiro = disparo.getComponent("Tiro");
								componenteTiro.direcao = this._direcao;
				},

				tomarDano: function tomarDano() {},

				onCollisionEnter: function onCollisionEnter(outro, eu) {},

				// called every frame, uncomment this function to activate update callback
				update: function update(dt) {}
});

module.exports = Personagem;

cc._RF.pop();