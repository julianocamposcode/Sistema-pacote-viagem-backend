import PacoteViagem from "../model/pacote.js";
import conectar from "./conexao.js";

export default class PacoteDB {
    constructor() {
        this.init()
    }
    async init() {
        try {
            const conexao = await conectar()
            const sql =
                `
                CREATE TABLE IF NOT EXISTS PacoteViagem (
                    id INT NOT NULL PRIMARY KEY,
                    nome VARCHAR(255) NOT NULL,
                    data_partida TEXT,
                    preco VARCHAR(50) NOT NULL,
                    total VARCHAR(50) NOT NULL,
                    transporte TEXT,
                    hospedagem TEXT,
                    alimentacao TEXT,
                    passeios TEXT,
                    pagamento TEXT,
                    imagem_url TEXT,
                    duracao VARCHAR(50),
                    local_partida VARCHAR(100),
                    lugares_disponiveis INT NOT NULL,
                    descricao TEXT,
                    video_url TEXT
                )
            `
            await conexao.execute(sql)
        } catch (erro) {
            console.log(erro)
        }
    }

    async gravar(pacote) {
        if (pacote instanceof PacoteViagem) {
            const conexao = await conectar()
            const sql = `
            INSERT INTO PacoteViagem 
            (id, nome, data_partida, preco, total, transporte, hospedagem, alimentacao, passeios, pagamento, imagem_url, duracao, local_partida, lugares_disponiveis, descricao, video_url) 
            VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

            const parametros = [
                pacote.id,
                pacote.nome,
                pacote.data_partida,
                pacote.preco,
                pacote.total,
                pacote.transporte,
                pacote.hospedagem,
                pacote.alimentacao,
                pacote.passeios,
                pacote.pagamento,
                pacote.imagem_url,
                pacote.duracao,
                pacote.local_partida,
                pacote.lugares_disponiveis,
                pacote.descricao,
                pacote.video_url
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }
    async editar(pacote) {
        if (pacote instanceof PacoteViagem) {
            const conexao = await conectar();
            const sql = `
                UPDATE PacoteViagem 
                SET 
                    nome = ?, 
                    data_partida = ?, 
                    preco = ?, 
                    total = ?, 
                    transporte = ?, 
                    hospedagem = ?, 
                    alimentacao = ?, 
                    passeios = ?, 
                    pagamento = ?, 
                    imagem_url = ?, 
                    duracao = ?, 
                    local_partida = ?, 
                    lugares_disponiveis = ?, 
                    descricao = ?, 
                    video_url = ?
                  WHERE id = ?
            `;

            const parametros = [
                pacote.nome,
                pacote.data_partida,
                pacote.preco,
                pacote.total,
                pacote.transporte,
                pacote.hospedagem,
                pacote.alimentacao,
                pacote.passeios,
                pacote.pagamento,
                pacote.imagem_url,
                pacote.duracao,
                pacote.local_partida,
                pacote.lugares_disponiveis,
                pacote.descricao,
                pacote.video_url,
                pacote.id
            ];

            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }
    async excluir(pacote) {
        if (pacote instanceof PacoteViagem) {
            const conexao = await conectar(); // Supondo que você tenha uma função conectar()

            const sql = `DELETE FROM PacoteViagem WHERE id = ?`;

            await conexao.execute(sql, [pacote.id]);
            await conexao.release();
        }
    }
    async consultar(pacote) {
        if (pacote instanceof PacoteViagem) {
            const conexao = await conectar();

            const sql = `SELECT * FROM PacoteViagem ORDER by nome`;
            const [linhas, campos] = await conexao.execute(sql);
            const listaPacotes = []
            for (const linha of linhas) {
                const pacote = new PacoteViagem(
                    linha.id,
                    linha.nome,
                    linha.data_partida,
                    linha.preco,
                    linha.total,
                    linha.transporte,
                    linha.hospedagem,
                    linha.alimentacao,
                    linha.passeios,
                    linha.pagamento,
                    linha.imagem_url,
                    linha.duracao,
                    linha.local_partida,
                    linha.lugares_disponiveis,
                    linha.descricao,
                    linha.video_url,
                )
                listaPacotes.push(pacote)
            }
            return listaPacotes
        }
    }
}