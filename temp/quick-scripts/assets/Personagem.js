(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Personagem.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '054dcmydeJP57D9ETAZi7TG', 'Personagem', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Personagem.js.map
        