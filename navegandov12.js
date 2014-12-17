var page = require('webpage').create();
var fs = require('fs');
//var a = ["5069", "290", "510","2563"];
var a = ["290"];
	var w;
console.log("{\"type\":\"city\"");
var dataHora = new Date();
console.log("inicio T0...8s"+ dataHora.getMinutes()+":" + dataHora.getSeconds()+":"+ dataHora.getMilliseconds());
page.open('http://www.ikariam.com.br', function(status) {
    var url = page.url;
    console.log("Status:  " + status);
    console.log("Loaded:  " + url);
    page.evaluate(function () {
		//evento mouse
		var evt = document.createEvent("MouseEvents");
		evt.initMouseEvent("click", true, true, window,
		0, 0, 0, 0, 0, false, false, false, false, 0, null);
		
		var btlogin = document.getElementById("btn-login"); 
		btlogin.dispatchEvent(evt);
		
		setTimeout(function(){}, 100);
		//document.getElementById('btn-login').click();
		setTimeout(function(){}, 100);
		var logname = document.getElementById("loginName");
		logname.value = "yourusername";
		setTimeout(function(){}, 100);
		var senha = document.getElementById("loginPassword");
		senha.value = "yourpassword";
		setTimeout(function(){}, 600);
        var logar = document.getElementById("loginBtn");
		logar.click();
    });
	
	console.log("inicio T0...8s"+ dataHora.getMinutes()+":" + dataHora.getSeconds()+":"+ dataHora.getMilliseconds());
	//loop repeticção de leituras
	//var val;
	//window.setTimeout(function(){},20000);
	for (w = 0; w<a.length;w++) {
	
    console.log(a[w]);
	window.setTimeout(function(val){	
	      dataHora = new Date();
		  console.log("inicio T1...8s"+ dataHora.getMinutes()+":" + dataHora.getSeconds()+":"+ dataHora.getMilliseconds());
		  console.log("Status:  " + status);
		  console.log("Loaded:  " + url);
		  console.log("Carregando página....."+val);
		  page.evaluate(function (opaa) {
			document.location = "http://s1-br.ikariam.gameforge.com/index.php?view=island&islandId="+opaa;
			},val);
			
		window.setTimeout(function(value1){	
		  dataHora = new Date();
		  console.log("Captura dados....."+value1);
		  console.log("inicio T2...8s"+ dataHora.getMinutes()+":" + dataHora.getSeconds()+":"+ dataHora.getMilliseconds());
		  var conteudo = page.content;
		  
		  var indice = conteudo.indexOf("ikariam.getClass(ajax.Responder,");
		  var ultimoindice = conteudo.indexOf(");", indice);
		  var json = conteudo.substring(indice, ultimoindice).replace("ikariam.getClass(ajax.Responder,","");
		  
		  var obj = JSON.parse(json);
		  
			  
		   try {
			//Atributus da ilha
			   var varilhaid = obj[0][1].id;
			   var varilhatype = obj[0][1].type;
			   var varilhaname = obj[0][1].name;
			   var varilhaxCoord = obj[0][1].xCoord;
			   var varilhayCoord = obj[0][1].yCoord;
			   var varilhatradegood = obj[0][1].tradegood;
			   var varilhatradegoodTarget = obj[0][1].tradegoodTarget;
			   var varilharesourceLevel = obj[0][1].resourceLevel;
			   var varilhatradegoodLevel = obj[0][1].tradegoodLevel;
			   var varilhawonder = obj[0][1].wonder;
			   var varilhawonderLevel = obj[0][1].wonderLevel;
			   var varilhawonderName = obj[0][1].wonderName;
			   var varilhashowResourceWorkers = obj[0][1].showResourceWorkers;
			   var varilhashowAgora = obj[0][1].showAgora;
			   var varilhacanEnterResource = obj[0][1].canEnterResource;
			   var varilhacanEnterTradegood = obj[0][1].canEnterTradegood;
			   var varilhaisOwnCityOnIsland = obj[0][1].isOwnCityOnIsland;
			   
		   for(vagas=0;vagas<17;vagas++)
		   {
			   //dados das vagas jogadores.
			   var vartype = obj[0][1].cities[vagas].type;
			   var varname = obj[0][1].cities[vagas].name;
			   var varid = obj[0][1].cities[vagas].id;
			   var varlevel = obj[0][1].cities[vagas].level;
			   var varownerId = obj[0][1].cities[vagas].ownerId;
			   var varownerName = obj[0][1].cities[vagas].ownerName;
			   var varownerAllyId = obj[0][1].cities[vagas].ownerAllyId;
			   var varownerAllyTag = obj[0][1].cities[vagas].ownerAllyTag;
			   var varhasTreaties = obj[0][1].cities[vagas].hasTreaties;
			   var varstate = obj[0][1].cities[vagas].state;
			   var varviewAble = obj[0][1].cities[vagas].viewAble;
			   //debug
			   console.log(vartype);
			   console.log(varname);
			   console.log(varid);
			   console.log(varlevel);
			   console.log(varownerId);
			   console.log(varownerName);
			   console.log(varownerAllyId);
			   console.log(varownerAllyTag);
			   console.log(varhasTreaties);
			   console.log(varstate);
			   console.log(varviewAble);

			   console.log("####");
			   //if(varOwnerId !== undefined){
					if(varid !== -1){   //Locais onde possui vagas id=-1
							console.log("########avatarScores########");
							var varavatar_id = obj[0][1].avatarScores[varownerId.toString()].avatar_id;
							var varplace = obj[0][1].avatarScores[varownerId.toString()].place;
							var varbuilding_score_main = obj[0][1].avatarScores[varownerId.toString()].building_score_main;
							var varresearch_score_main = obj[0][1].avatarScores[varownerId.toString()].research_score_main;
							var vararmy_score_main = obj[0][1].avatarScores[varownerId.toString()].army_score_main;
							var vartrader_score_secondary= obj[0][1].avatarScores[varownerId.toString()].trader_score_secondary;
							console.log(varavatar_id);
							console.log(varplace);
							console.log(varbuilding_score_main);
							console.log(varresearch_score_main);
							console.log(vararmy_score_main);
							console.log(vartrader_score_secondary);
					}
			  // }
		   }
		      console.log("####");
			fs.write(value1+".txt",json, 'w');
			 console.log(varilhaid);
			 console.log(varilhatype);
			 console.log(varilhaxCoord);
			 console.log(varilhayCoord);
			 console.log(varilhatradegood);
			 console.log(varilhatradegoodTarget);
			 console.log(varilharesourceLevel);
			 console.log(varilhatradegoodLevel);
			 console.log(varilhawonder);
			 console.log(varilhawonderLevel);
			 console.log(varilhawonderName);
			 console.log(varilhashowResourceWorkers);
			 console.log(varilhashowAgora);
			 console.log(varilhacanEnterResource);
			 console.log(varilhacanEnterTradegood);
			 console.log(varilhaisOwnCityOnIsland);
		
			
			} catch(e) {
				console.log(e);
			} 
		  console.log("Fim....."+value1);
		  console.log("inicio T0...8s"+ dataHora.getMinutes()+":" + dataHora.getSeconds()+":"+ dataHora.getMilliseconds());
	},20000,val); // timer Fixo por "thread"
	},20000*(w+1),a[w]); // variável por indice
	}
	window.setTimeout(function(){phantom.exit();},41000*4); // ideal no lugar do 3 colocar length do vetor.
	
	
});//fim do pageOpen

function ColetandoDados(tipoDadosAcoletar,vetorValorSplit) { 
	if(vetorValorSplit[0].indexOf(tipoDadosAcoletar)>-1){
		/////// Conversão de unicode para ascii
		var x = vetorValorSplit[1];
		var r = /\\u([\d\w]{4})/gi;
		x = x.replace(r, function (match, grp) {
			return String.fromCharCode(parseInt(grp, 16)); } );
		x = unescape(x);
		/////////////
		return x;
	}
}




//comando para usar rede TOR
//phantomjs --proxy=127.0.0.1:9150 --proxy-type=socks5 navegandov12.js
