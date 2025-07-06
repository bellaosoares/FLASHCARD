function criaCartao (tema, pergunta, resposta) { 
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>Geografia</h3>
    <div class="cartao__conteudo__pergunta">
        <p>Qual e o menor e o maior pais do mundo?</p>
    </div>
    <div class="cartao__conteudo__resposta">
           <p>Vaticano e Russia.</p>
         </div>
    </div>
    `
    container.appendChild(cartao)

}