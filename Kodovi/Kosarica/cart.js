document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn = document.querySelector('.btnCart');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const nameElement = document.querySelector('h1 > b');
            const priceElement = document.getElementById('articlePrice');
            const imageElement = document.querySelector('.articleImageCont img');
            const quantityElement = document.getElementById('amount');

            if (!nameElement || !priceElement || !imageElement || !quantityElement) {
                alert('Neki elementi nisu pronađeni.');
                return;
            }

            const product = {
                name: nameElement.innerText.trim(),
                price: priceElement.innerText.trim(),
                image: imageElement.getAttribute('src'),
                quantity: quantityElement.value
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            showConfirmation("Dodano u košaricu!");
        });
    }

    function showConfirmation(message) {
        const confirmDiv = document.createElement('div');
        confirmDiv.textContent = message;
        confirmDiv.style.position = 'fixed';
        confirmDiv.style.top = '80%';
        confirmDiv.style.left = '50%';
        confirmDiv.style.transform = 'translateX(-50%)';
        confirmDiv.style.backgroundColor = '#43615f';
        confirmDiv.style.color = 'white';   
        confirmDiv.style.padding = '1rem 2rem';
        confirmDiv.style.borderRadius = '8px';
        confirmDiv.style.zIndex = '9999';
        document.body.appendChild(confirmDiv);

        setTimeout(() => confirmDiv.remove(), 2000);
    }
});
