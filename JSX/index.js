
const section = document.createElement('section');
    section.classList.add('vh-100', 'bg-image');
    section.style.backgroundImage = "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')";

const div_1 = document.createElement('div');
    div_1.classList.add('mask', 'd-flex', 'align-items-center', 'h-100', 'gradient-custom-3');

const div_2 = document.createElement('div');
    div_2.classList.add('container', 'h-100');

const div_3 = document.createElement('div');
    div_3.classList.add('row', 'd-flex', 'justify-content-center', 'align-items-center', 'h-100');

const div_4 = document.createElement('div');
    div_4.classList.add('col-12', 'col-md-9', 'col-lg-7', 'col-xl-6');

const div_5 = document.createElement('div');
    div_5.classList.add('card');
    div_5.style.borderRadius = "15px";

const div_6 = document.createElement('div');
    div_6.classList.add('card-body', 'p-5');

    const h2 = document.createElement('h2');
        h2.classList.add('text-uppercase', 'text-center', 'mb-3');
        h2.innerText = "Create an account";

    const form = document.createElement('form');

        const div_name = document.createElement('div');
            div_name.classList.add('form-outline', 'mb-4');

            const input_name = document.createElement('input');
                input_name.type = "text";
                input_name.classList.add('form-control', 'form-control-lg');
                input_name.id = "form3Example1cg";
            
            const label_name = document.createElement('label');
                label_name.className = 'form-label';
                label_name.htmlFor = "form3Example1cg";
                label_name.innerText = "Your Name"
        div_name.appendChild(label_name);
        div_name.appendChild(input_name);

        const div_email = document.createElement('div');
            div_email.classList.add('form-outline', 'mb-3');

            const input_email = document.createElement('input');
                input_email.type = "email";
                input_email.classList.add('form-control', 'form-control-lg');
                input_email.id = "form3Example3cg";
            
            const label_email = document.createElement('label');
                label_email.className = 'form-label';
                label_email.htmlFor = "form3Example3cg";
                label_email.innerText = "Your Email"
        div_email.appendChild(label_email);
        div_email.appendChild(input_email);

        const div_password = document.createElement('div');
            div_password.classList.add('form-outline', 'mb-3');

            const input_password = document.createElement('input');
                input_password.type = "password";
                input_password.classList.add('form-control', 'form-control-lg');
                input_password.id = "form3Example4cg";
            
            const label_password = document.createElement('label');
                label_password.className = 'form-label';
                label_password.htmlFor = "form3Example4cg";
                label_password.innerText = "Password"
        div_password.appendChild(label_password);
        div_password.appendChild(input_password);

        const div_rePass = document.createElement('div');
            div_rePass.classList.add('form-outline', 'mb-3');

            const input_rePass = document.createElement('input');
                input_rePass.type = "password";
                input_rePass.classList.add('form-control', 'form-control-lg');
                input_rePass.id = "form3Example4cdg";
            
            const label_rePass = document.createElement('label');
                label_rePass.className = 'form-label';
                label_rePass.htmlFor = "form3Example4cdg";
                label_rePass.innerText = "Repeat your password"
        div_rePass.appendChild(label_rePass);
        div_rePass.appendChild(input_rePass);

        const div_check = document.createElement('div');
            div_check.classList.add('form-check', 'd-flex', 'justify-content-center', 'mb-4');

            const input_check = document.createElement('input');
                input_check.type = "checkbox";
                input_check.classList.add('form-check-input', 'me-2');
                input_check.id = "form2Example3cg";
            
            const label_check = document.createElement('label');
                label_check.className = 'form-check-label';
                label_check.htmlFor = "form2Example3cg";
                label_check.innerText = "I agree all statements in"
                    const anchor = document.createElement('a');
                    anchor.href = "#!";
                    anchor.className = "text-body";

                    const underline = document.createElement('u');

                    underline.textContent = "Terms of service";

                    anchor.appendChild(underline);

                    label_check.appendChild(anchor);

        div_check.appendChild(input_check);
        div_check.appendChild(label_check);

        const div_bt = document.createElement('div');
        div_bt.className = "d-flex justify-content-center";

            const button = document.createElement('button');
            button.type = "button";
            button.className = "btn btn-success btn-block btn-lg gradient-custom-4 text-body";
            button.textContent = "Register";

        div_bt.appendChild(button);

        const paragraph = document.createElement('p');
        paragraph.className = "text-center text-muted mt-5 mb-0";
            const anchorP = document.createElement('a');
            anchorP.href = "#!";
            anchorP.className = "fw-bold text-body";

            
            const underlineP = document.createElement('u');

            underlineP.textContent = "Login here";

            anchorP.appendChild(underlineP);

        paragraph.innerHTML = "Have already an account? ";
        paragraph.appendChild(anchorP);

    form.appendChild(div_name);
    form.appendChild(div_email);
    form.appendChild(div_password);
    form.appendChild(div_rePass);
    form.appendChild(div_check);
    form.appendChild(div_bt);
    form.appendChild(paragraph);

div_6.appendChild(h2);
div_6.appendChild(form);

div_5.appendChild(div_6);
div_4.appendChild(div_5);
div_3.appendChild(div_4);
div_2.appendChild(div_3);
div_1.appendChild(div_2);
section.appendChild(div_1);

document.getElementById('root').appendChild(section);