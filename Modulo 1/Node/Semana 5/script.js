// [M1S05] Ex 1 - Função deletar dados duplicados
function deletarDuplicados() {
    let list = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria','Luis','Danilo','José']

    console.log('lista original ', list);

    let listaUnica = [...new Set(list)]
    console.log('lista unica: ', listaUnica)

    let apagados = list.filter((item, i) => {
        return list.indexOf(item) !== i
    })
    console.log('final: ',apagados.join(','), listaUnica);
}

// [M1S05] Ex 2 - Função de exibir dados dos usuários
function concatenar() {
    let usuarios = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria']
    let frutas = ['Banana','Morango','Maçã','Uva','Pêra','Laranja']
    frutas.reverse()

    const novoArray = []
    for(i = 0; i< usuarios.length; i++) {
        novoArray.push(usuarios[i] + ' - ' + frutas[i])
    }
    console.log('resultado final: ',novoArray);
}

// [M1S05] Ex 3 - Função para adicionar novos usuários na lista
function adicionarNome(...nomes) {
    let lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
    let listaLowerCase = lista.map(el => el.toLowerCase())

    console.log('lista original: ', lista)
    try {
        nomes.forEach(nome =>  {
            if(typeof nome !== 'string') return console.warn('Nome deve ser string.')
            if(listaLowerCase.includes(nome.toLowerCase())) return console.warn(`${nome} já contém na lista.`)
    
            lista.push(nome)
            console.log(`Adicionando o nome: ${nome}`)
        })
    } catch (error) {
        console.error('erro encontrado: ', error.message)
    }
    console.log('lista atualizada: ', lista)
}