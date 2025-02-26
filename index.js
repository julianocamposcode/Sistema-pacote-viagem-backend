import PacoteViagem from "./model/pacote.js";

const pacote = new PacoteViagem(
    "1",
    "Pacote para Paris, França",
    "10 de abril de 2025",
    "3.500",
    "3.500",
    "Voo de ida e volta com bagagem despachada incluída",
    "Hotel 4 estrelas com café da manhã incluso",
    "Café da manhã incluso + jantar especial na Torre Eiffel",
    "Museu do Louvre, Torre Eiffel, passeio pelo Rio Sena, Catedral de Notre-Dame",
    "Entrada de 20% + parcelamento em até 10x sem juros",
    "images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXMlMjBmcmFuJUMzJUE3YXxlbnwwfHwwfHx8MA%3D%3D",
    "7 dias",
    "São Paulo",
    "12",
    "Desfrute de uma viagem inesquecível pela cidade do amor! Conheça a Torre Eiffel, o Museu do Louvre e faça passeios românticos pelo Rio Sena.",
    "https://www.youtube.com/embed/WdUzB1NyWVY",
)


pacote.gravar().then(() => {
    console.log('Pacote gravado no banco de dados com sucesso!');
}).catch(error => {
    console.log(error);
});

// pacote.editar().then(() => {
//     console.log('Pacote editado com sucesso!');
// }).catch(error => {
//     console.log(error);
// });


// pacote.consultar().then((listaPacotes) => {
//     for (const pacote of listaPacotes) {
//         console.log(pacote.toJson())
//     }
// }).catch(error => {
//     console.log(error)
// })

// pacote.excluir().then(() => {
//     console.log('Pacote excluido com sucesso')
// }).catch(error => {
//     console.log(error)
// })