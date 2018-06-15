let Personagem = require("Personagem");
cc.Class({
    extends: Personagem,

    properties: {
        _acelerando:false,
        //_direcao: cc.Vec2, vem da herança
        
        //tiroPrefab: cc.Prefab, vem da herança
		_vidaAtual: 0,
		vidaMaxima : 100,
		
        velocidade: 10,
		barraVida : cc.ProgressBar
    },

    // use this for initialization
    onLoad: function () {
		
		this._vidaAtual = this.vidaMaxima; //iniciandoa vida atual
		this.barraVida.progress = 1; //Deixando a barra de vida cheia ao iniciar
		
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.teclaPressionada, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.teclaSolta, this);
        
        let canvas = cc.find("Canvas");
        canvas.on("mousemove", this.mudarDirecao, this);
        canvas.on("mousedown", this.atirar, this);
        
        cc.director.getCollisionManager().enabled = true;
        
    },
    
	tomarDano: function(dano){
		this._vidaAtual -= dano;
		let porcentagemVida = this._vidaAtual/this.vidaMaxima;
		this.barraVida.progress = porcentagemVida;
		
	},
	
    mudarDirecao: function(event)
    {
        let posicaoMouse = event.getLocation();
        posicaoMouse = new cc.Vec2(posicaoMouse.x, posicaoMouse.y);
        
        let direcao = posicaoMouse.sub(this.node.position);
        direcao = direcao.normalize();
        this._direcao = direcao;
    },
    
    teclaPressionada: function(event)
    { 
        if(event.keyCode == cc.KEY.a)
        {
            this._acelerando = true;
        }
    },

    teclaSolta:function(event)
    {
        if(event.keyCode == cc.KEY.a)
        {
            this._acelerando = false;
        }

    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this._acelerando)
            {
                let deslocamento = this._direcao.mul(this.velocidade * dt)
                this.node.position  = this.node.position.add(deslocamento);
            }
                
            
            
    },
});
