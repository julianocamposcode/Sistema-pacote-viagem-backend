import PacoteDB from "../DB/pacoteDB.js"

export default class PacoteViagem {
   #id
   #nome
   #data_partida
   #preco
   #total
   #transporte
   #hospedagem
   #alimentacao
   #passeios
   #pagamento
   #imagem_url
   #duracao
   #local_partida
   #lugares_disponiveis
   #descricao
   #video_url

   constructor(id
      , nome
      , data_partida
      , preco
      , total
      , transporte
      , hospedagem
      , alimentacao
      , passeios
      , pagamento
      , imagem_url
      , duracao
      , local_partida
      , lugares_disponiveis
      , descricao
      , video_url) {
      this.#id = id
      this.#nome = nome
      this.#data_partida = data_partida
      this.#preco = preco
      this.#total = total
      this.#transporte = transporte
      this.#hospedagem = hospedagem
      this.#alimentacao = alimentacao
      this.#passeios = passeios
      this.#pagamento = pagamento
      this.#imagem_url = imagem_url
      this.#duracao = duracao
      this.#local_partida = local_partida
      this.#lugares_disponiveis = lugares_disponiveis
      this.#descricao = descricao
      this.#video_url = video_url
   }

   get id() {
      return this.#id
   }
   set id(novoid) {
      this.#id = novoid
   }

   get nome() {
      return this.#nome
   }

   set nome(novoNome) {
      this.#nome = novoNome
   }

   get data_partida() {
      return this.#data_partida
   }

   set data_partida(novoData_partida) {
      this.#data_partida = novoData_partida
   }

   get preco() {
      return this.#preco
   }

   set preco(novoPreco) {
      this.#preco = novoPreco
   }
   get total() {
      return this.#total
   }

   set total(novototal) {
      this.#total = novototal
   }
   get transporte() {
      return this.#transporte
   }
   set transporte(novotransporte) {
      this.#transporte = novotransporte
   }
   get hospedagem() {
      return this.#hospedagem
   }
   set hospedagem(novohospedagem) {
      this.#hospedagem = novohospedagem
   }
   get alimentacao() {
      return this.#alimentacao
   }
   set alimentacao(novoalimentacao) {
      this.#alimentacao = novoalimentacao
   }
   get passeios() {
      return this.#passeios
   }
   set passeios(novopasseios) {
      this.#passeios = novopasseios
   }
   get pagamento() {
      return this.#pagamento
   }
   set pagamento(novopagamento) {
      this.#pagamento = novopagamento
   }
   get imagem_url() {
      return this.#imagem_url
   }
   set imagem_url(novoimagem_url) {
      this.#imagem_url = novoimagem_url
   }
   get duracao() {
      return this.#duracao
   }
   set duracao(novoduracao) {
      this.#duracao = novoduracao
   }
   get local_partida() {
      return this.#local_partida
   }
   set local_partida(novolocal_partida) {
      this.#local_partida = novolocal_partida
   }
   get lugares_disponiveis() {
      return this.#lugares_disponiveis
   }
   set lugares_disponiveis(novolugares_disponiveis) {
      this.#lugares_disponiveis = novolugares_disponiveis
   }
   get descricao() {
      return this.#descricao
   }
   set descricao(novodescricao) {
      this.#descricao = novodescricao
   }
   get video_url() {
      return this.#video_url
   }
   set video_url(novovideo_url) {
      this.#video_url = novovideo_url
   }

   toJson() {
      return {
         "id": this.#id,
         "nome": this.#nome,
         "data_partida": this.#data_partida,
         "preco": this.#preco,
         "total": this.#total,
         "transporte": this.#transporte,
         "hospedagem": this.#hospedagem,
         "alimentacao": this.#alimentacao,
         "passeios": this.#passeios,
         "pagamento": this.#pagamento,
         "imagem_url": this.#imagem_url,
         "duracao": this.#duracao,
         "local_partida": this.#local_partida,
         "lugares_disponiveis": this.#lugares_disponiveis,
         "descricao": this.#descricao,
         "video_url": this.#video_url,

      }
   }

   async gravar() {
      const pacoteDB = new PacoteDB()
      pacoteDB.gravar(this)
   }
   async editar() {
      const pacoteDB = new PacoteDB()
      pacoteDB.editar(this)
   }
   async excluir() {
      const pacoteDB = new PacoteDB()
      pacoteDB.excluir(this)
   }
   async consultar() {
      const pacoteDB = new PacoteDB()
      return await pacoteDB.consultar(this)
   }
}