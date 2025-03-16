import { Router } from "express"
import PacoteCtrl from "../controller/pacoteCtrl.js";

const rotaPacote = Router();
const pacCtrl = new PacoteCtrl()

rotaPacote.get('/:cpf', pacCtrl.consultar)
rotaPacote.post('/', pacCtrl.gravar)
rotaPacote.put('/', pacCtrl.alterar)
rotaPacote.patch('/', pacCtrl.alterar)
rotaPacote.delete('/', pacCtrl.excluir)

export default rotaPacote;
