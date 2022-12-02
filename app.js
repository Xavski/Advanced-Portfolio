//template_7p2f9t9
//service_ojiv7bw
//zzMmEp0C1_4reNut4



function contact(event){
    event.preventDefault();
    
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_ojiv7bw',
            'template_7p2f9t9',
            event.target,
            'zzMmEp0C1_4reNut4'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on xavioursaveski1@gmail.com"
            );
        })
}

let isModalOpen = false;

function toggleModal(){
    
    //toggle modal
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}



