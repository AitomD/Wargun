

const scriptsInEvents = {

	async Fase1pronto_Event18_Act1(runtime, localVars)
	{
		// obter variavel global vidas
		let vidas = runtime.globalVars.vidap;
		
		//Reduzir uma vida
		vidas --;
		
		//Mudar valor da global
		runtime.globalVars.vidap = vidas;
		
		//vida chegar a zero
		if(vidap <= 0){
			console.log("Game over");
			runtime.goToLayout("fimdejogo");
		}
		
		
		
		
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
