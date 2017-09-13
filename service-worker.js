let versao = 4

let arquivos = [
	"/",		// index.html
	"css/estilos.css",
	"css/opcoesDaPagina.css",
	"css/opcoesDoCartao.css",
	"css/cabecalho.css",
	"css/login.css",
	"css/loginForm.css",
	"css/loginStatus.css",
	"css/cartao.css",
	"css/novoCartao.css",
	"css/mural.css",
	"js/lib/jquery.js",
	"js/lib/eventemitter2.js",
	"js/lib/KeyBoardNavigation.js",
	"js/tags/Tags.js",
	"js/cabecalho/mudaLayout.js",
	"js/cabecalho/busca.js",
	"js/filtro/Filtro.js",
	"js/tipos/TiposCartao.js",
	"js/cartao/render/Cartao_renderHelpers.js",
	"js/cartao/render/CartaoOpcoes_render.js",
	"js/cartao/render/CartaoConteudo_render.js",
	"js/cartao/render/Cartao_render.js",
	"js/cartao/Cartao.js",
	"js/login/LoginUsuario_render.js",
	"js/login/LoginUsuario.js",
	"js/mural/render/Mural_render.js",
	"js/mural/Mural.js",
	"js/cabecalho/novoCartao.js",
	"img/bin2.svg",
	"img/edit.svg"
]

self.addEventListener("install", function(){
	console.dir("Instalou!")
})
//	Para garantr que todas as abas usem a mesma versão da app 
self.addEventListener("activate", function(){
	caches.open("ceep-arquivos-" + versao).then(cache => {
		caches.delete("ceep-arquivos-" + (versao - 1))
		caches.delete("ceep-arquivos")
	})
})

self.addEventListener("fetch", function(event){

    let pedido = event.request
//	Busca o arquivo em todos os caches
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })

    event.respondWith(promiseResposta)

})

