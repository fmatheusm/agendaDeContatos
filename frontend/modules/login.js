import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const element = e.target;
        let error = this.validaCampos(element);
        if (!error) element.submit();

    }

    criaParagrafo(cssClass, msg) {
        const p = document.createElement('p');
        p.classList.add(cssClass);
        p.innerText = msg;
        return p;
    }

    removeErro(element) {
        element?.remove();
    }

    validaCampos(element) {
        let error = false;

        const inputEmail = element.querySelector('input[name="email"]');
        const inputPassword = element.querySelector('input[name="password"]');

        this.removeErro(inputEmail.nextElementSibling);
        this.removeErro(inputPassword.nextElementSibling);

        if (!validator.isEmail(inputEmail.value)) {
            const pEmail = this.criaParagrafo('bad', 'E-mail invalido');
            inputEmail.insertAdjacentElement('afterend', pEmail);
            error = true;
        };
        if ((inputPassword.value.length < 3 || inputPassword.value.length > 50)) {
            const pPassword = this.criaParagrafo('bad', 'A senha precisa ter entre 3 e 50 caracteres');
            inputPassword.insertAdjacentElement('afterend', pPassword);
            error = true;
        };

        return error;
    }
}