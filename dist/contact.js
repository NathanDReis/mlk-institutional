"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const namesForm = [
    'Carlos Azevedo',
    'Maria Silva',
    'João Pereira',
    'Ana Costa',
    'Pedro Santos',
    'Luís Oliveira',
    'Fernanda Rocha',
    'Sofia Martins',
    'Ricardo Almeida',
    'Patrícia Gomes',
    'Tiago Ferreira',
    'Cláudia Dias',
    'Bruno Cardoso',
    'Isabel Moreira',
    'André Sousa',
    'Raquel Pires',
    'Fábio Nunes',
    'Helena Teixeira',
    'Gustavo Lima',
    'Catarina Ribeiro',
    'Vítor Correia',
    'Marta Costa',
    'Sérgio Pinto',
    'Joana Martins',
    'Rui Mendes',
    'Inês Silva',
    'Diogo Araújo',
    'Lúcia Barros',
    'Nuno Carvalho',
    'Sara Rocha',
    'Miguel Costa',
    'Ana Paula',
    'Paulo Martins',
    'Elisabete Santos',
    'Ricardo Silva',
    'João Costa',
    'Mariana Pereira',
    'Tiago Martins',
    'Cláudia Silva',
    'Bruno Costa',
    'Isabel Santos',
    'André Martins',
    'Raquel Costa',
    'Fábio Silva',
    'Helena Martins',
    'Gustavo Santos',
    'Catarina Costa',
    'Vítor Martins',
    'Marta Silva',
    'Sérgio Costa',
    'Joana Silva',
    'Rui Costa',
    'Inês Martins',
    'Diogo Silva',
    'Lúcia Costa',
    'Nuno Silva',
    'Sara Martins',
    'Miguel Silva',
    'Ana Costa',
    'Paulo Silva',
    'Elisabete Costa',
    'Ricardo Costa',
    'João Silva',
    'Mariana Costa',
    'Tiago Silva',
    'Cláudia Costa',
    'Bruno Silva',
    'Isabel Costa',
    'André Silva',
    'Raquel Silva',
    'Fábio Costa',
    'Helena Silva',
    'Gustavo Costa',
    'Catarina Silva',
    'Vítor Costa',
    'Marta Costa',
];
function getRandomName() {
    const randomIndex = Math.floor(Math.random() * namesForm.length);
    return namesForm[randomIndex];
}
const formName = document.querySelector('#form-name');
const formEmail = document.querySelector('#form-email');
if (formName && formEmail) {
    const randomName = getRandomName();
    formName.placeholder = randomName;
    formEmail.placeholder = randomName.toLowerCase().replace(' ', '.') + '@email.com';
}
const emailButton = document.querySelector('#email-button');
const emailButtonSvgs = emailButton.querySelectorAll('svg');
emailButton.onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = 'atendimentos@mlktecnologia.com.br';
        yield navigator.clipboard.writeText(email);
        emailButtonSvgs.forEach((svg) => svg.classList.toggle('hidden'));
        setTimeout(() => {
            emailButtonSvgs.forEach((svg) => svg.classList.toggle('hidden'));
        }, 1000);
    }
    catch (error) {
        console.error('Erro ao copiar o e-mail: ', error);
        alert('Erro ao copiar o e-mail. Tente novamente.');
    }
});
const whatsappButton = document.querySelector('#whatsapp-button');
whatsappButton.onclick = () => {
    const phoneNumber = '5531992502904';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
};
//# sourceMappingURL=contact.js.map