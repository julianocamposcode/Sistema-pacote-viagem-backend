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
    // "2",
    // "Pacote para Cancun, México",
    // "20 de julho de 2025",
    // "5.200",
    // "5.200",
    // "Voo ida e volta com traslado do aeroporto ao hotel",
    // "Resort all-inclusive 5 estrelas",
    // "Todas as refeições inclusas (café da manhã, almoço, jantar, bebidas)",
    // "Tulum, Isla Mujeres, mergulho em recifes de corais",
    // "Condições de Pagamento: Entrada de 30% + parcelamento em até 12x sem juros",
    // "https://images.unsplash.com/photo-1579493933703-70473cdf84f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FuY3VtJTIwbSVDMyVBOXhpY298ZW58MHx8MHx8fDA%3D",
    // "6 dias",
    // "Rio de Janeiro",
    // "8",
    // "Aproveite as praias paradisíacas de Cancun com águas cristalinas e areia branca. O pacote inclui hospedagem luxuosa, passeios guiados e experiências incríveis no Caribe..",
    // "https://www.youtube.com/embed/6Xo2doDCzjI",
)


// pacote.gravar().then(() => {
//     console.log('Pacote gravado no banco de dados com sucesso!');
// }).catch(error => {
//     console.log(error);
// });

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

pacote.excluir().then(() => {
    console.log('Pacote excluido com sucesso')
}).catch(error => {
    console.log(error)
})