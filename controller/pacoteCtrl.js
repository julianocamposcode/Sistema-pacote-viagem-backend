import PacoteViagem from "../model/pacote.js";

export default class PacoteCtrl {
    gravar(requisicao, resposta) {
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body
            const id = dados.id;
            const nome = dados.nome;
            const data_partida = dados.data_partida;
            const preco = dados.preco;
            const total = dados.total;
            const transporte = dados.transporte;
            const hospedagem = dados.hospedagem;
            const alimentacao = dados.alimentacao;
            const passeios = dados.passeios;
            const pagamento = dados.pagamento;
            const imagem_url = dados.imagem_url;
            const duracao = dados.duracao;
            const local_partida = dados.local_partida;
            const lugares_disponiveis = dados.lugares_disponiveis;
            const descricao = dados.descricao;
            const video_url = dados.video_url;

            if (id && nome && data_partida && preco && total && transporte && hospedagem && alimentacao && passeios && pagamento && imagem_url && duracao && local_partida && lugares_disponiveis && descricao && video_url) {
                const pacote = new PacoteViagem(id
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
                    , video_url
                )
                pacote.gravar().then(() => {
                    resposta.status(201).json({
                        "status": true,
                        "mensagem": "Pacote gravado com sucesso"
                    })
                }).catch(erro => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao gravar Pacote" + erro
                    })
                })
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Todos os campos devem ser preenchidos"
                })
            }
        } else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida"
            })
        }
    }

    alterar(requisicao, resposta) {
        if (requisicao.method === 'PUT' || requisicao === 'PATCH' && requisicao.is('application/json')) {
            const dados = requisicao.body
            const id = dados.id;
            const nome = dados.nome;
            const data_partida = dados.data_partida;
            const preco = dados.preco;
            const total = dados.total;
            const transporte = dados.transporte;
            const hospedagem = dados.hospedagem;
            const alimentacao = dados.alimentacao;
            const passeios = dados.passeios;
            const pagamento = dados.pagamento;
            const imagem_url = dados.imagem_url;
            const duracao = dados.duracao;
            const local_partida = dados.local_partida;
            const lugares_disponiveis = dados.lugares_disponiveis;
            const descricao = dados.descricao;
            const video_url = dados.video_url;

            if (id && nome && data_partida && preco && total && transporte && hospedagem && alimentacao && passeios && pagamento && imagem_url && duracao && local_partida && lugares_disponiveis && descricao && video_url) {
                const pacote = new PacoteViagem(id
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
                    , video_url
                )
                pacote.editar().then(() => {
                    resposta.status(201).json({
                        "status": true,
                        "mensagem": "Pacote alterado com sucesso"
                    })
                }).catch(erro => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao alterar Pacote" + erro
                    })
                })
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Todos os campos devem ser preenchidos"
                })
            }
        } else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida"
            })
        }
    }

    excluir(requisicao, resposta) {
        if (requisicao.method === 'DELETE' && requisicao.is('application/json')) {
            const dados = requisicao.body
            const id = dados.id
            if (id) {
                const pacote = new PacoteViagem(id)
                pacote.excluir().then(() => {
                    resposta.status(201).json({
                        "status": true,
                        "mensagem": "Pacote excluido com sucesso"
                    })
                }).catch(erro => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao excluir Pacote" + erro
                    })
                })
            } else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Informe o ID do pacote"
                })
            }
        } else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida"
            })
        }
    }

    consultar(requisicao, resposta) {
        if (requisicao.method === 'GET') {
            const pacote = new PacoteViagem()
            if (requisicao.params.id) {
                pacote.consultarPorId(requisicao.params.id).then(listaPacotes => {
                    resposta.status(200).json({
                        "status": true,
                        "pacotes": listaPacotes
                    })
                }).catch(erro => {
                    resposta.status(400).json({
                        "status": false,
                        "mensagem": "Erro ao consultar Pacote por ID" + erro
                    })
                })
            } else {
                pacote.consultar().then(listaPacotes => {
                    resposta.status(200).json({
                        "status": true,
                        "pacotes": listaPacotes
                    })
                }).catch(erro => {
                    resposta.status(400).json({
                        "status": false,
                        "mensagem": "Erro ao consultar Pacote" + erro
                    })
                })
            }
        } else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida"
            })
        }
    }
}