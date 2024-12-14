// Seleciona os elementos do DOM
const btnGerar = document.getElementById('gerar');
const radios = document.querySelectorAll('input[name="number"]');
const checkNumeros = document.querySelectorAll('input[type="checkbox"]')[0];
const checkLetras = document.querySelectorAll('input[type="checkbox"]')[1];
const checkMaiusculas = document.querySelectorAll('input[type="checkbox"]')[2];
const checkEspeciais = document.querySelectorAll('input[type="checkbox"]')[3];
const spanSenha = document.querySelector('.pass');

// Função para gerar a senha
function gerarSenha() {
    let caracteres = '';
    let senha = '';

    // Adiciona tipos de caracteres conforme as opções selecionadas
    if (checkNumeros.checked) caracteres += '0123456789';
    if (checkLetras.checked) caracteres += 'abcdefghijklmnopqrstuvwxyz';
    if (checkMaiusculas.checked) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (checkEspeciais.checked) caracteres += '!@#$%^&*()_+[]{}|;:,.<>?';

    // Caso nenhum checkbox esteja selecionado
    if (caracteres === '') {
        alert('Selecione pelo menos uma opção de caractere!');
        return;
    }

    // Obtém o valor selecionado no rádio
    let quantidade = 6; // Padrão
    radios.forEach(radio => {
        if (radio.checked) quantidade = parseInt(radio.value);
    });

    // Gera a senha aleatória
    for (let i = 0; i < quantidade; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    // Exibe a senha no HTML
    spanSenha.textContent = senha;
}

// Adiciona o evento ao botão
btnGerar.addEventListener('click', gerarSenha);
