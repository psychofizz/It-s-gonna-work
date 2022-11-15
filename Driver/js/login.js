class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validarEnSubmit();
    }    
    validarEnSubmit(){
        let self = this;
        this.form.addEventListener('submit', => {
            e.preventDefault();
            console.log() 
        }
    }
}

const form = document.querySelector(".loginDriver");
if (form) {
    const fields = ["usuario", "contrasena"];
    const validar = new Login(form, fields);
}
