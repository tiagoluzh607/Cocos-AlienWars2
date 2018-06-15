(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Gerador.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e904aoySKRKXZ2jy+9THSF5', 'Gerador', __filename);
// Gerador.js

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
		inimigoPrefab: cc.Prefab,
		area: 60,
		tempo: 2,
		espera: 3
		// },
	},

	onLoad: function onLoad() {

		this.scheduleOnce(this.iniciarGeracao, this.espera); // scheduleOnce chama uma unica vez depois de um certo tempo
	},

	iniciarGeracao: function iniciarGeracao() {
		this.schedule(this.gerar, this.tempo); // schedule agenda chama a classe de gerar de tanto em tanto tempo
	},

	gerar: function gerar() {
		var inimigo = cc.instantiate(this.inimigoPrefab);
		inimigo.parent = this.node.parent;

		var posicao = new cc.Vec2(Math.random() - .5, Math.random() - .5); //diminuindo -0.5 pois o randown só vai até 1 assim fica possivel a posicao ser criada em aqualquer eixo positivo ou negativo
		posicao = posicao.normalize();
		posicao = posicao.mul(this.area);
		posicao = this.node.position.add(posicao);

		inimigo.position = posicao;
	}
	// update (dt) {},
});

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
        //# sourceMappingURL=Gerador.js.map
        