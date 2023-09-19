const totalElementos = document.getElementById('total');
const check = document.getElementById('checkout');
const adicionarTotal = document.querySelectorAll('.adicionarCarro');
const limparCarrinho = document.getElementById('limpar');
const checkout = document.getElementById('checkout');


let total = 0;

adicionarTotal.forEach(button => {
    button.addEventListener('click', () => {
        const preco = parseFloat(button.getAttribute('data-price'));
        total += preco;
        totalElementos.textContent = total.toFixed(2);
    });
});

limparCarrinho.addEventListener('click', () => {
    total = 0;
    totalElementos.textContent = '0.00';
});

checkout.addEventListener('click', () => {
    alert(`Total do Pedido: R$ ${total.toFixed(2)}. Pedido enviado com sucesso!`);
    total = 0;
    totalElementos.textContent = '0.00';
});
