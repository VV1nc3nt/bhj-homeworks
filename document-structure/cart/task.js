const controlsMinus = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
const controlsPlus = Array.from(document.getElementsByClassName('product__quantity-control_inc'));
const quantity = Array.from(document.getElementsByClassName('product__quantity-value'));
const addBtn = Array.from(document.getElementsByClassName('product__add'));
const product = Array.from(document.getElementsByClassName('product'));
const productImg = Array.from(document.getElementsByClassName('product__image'));
const cart = document.getElementsByClassName('cart__products')[0];

for (let index = 0; index < quantity.length; index++) {
  controlsMinus[index].addEventListener('click', () => {
    if (quantity[index].textContent > 1) {
      quantity[index].textContent -= 1;
    }
  });
  controlsPlus[index].addEventListener('click', () => {
    ++quantity[index].textContent;
  });
  addBtn[index].addEventListener('click', () => {
    let cartTmp = Array.from(cart.children);
    let cartQnt = Array.from(document.getElementsByClassName('cart__product-count'));
    if (cartTmp.includes(cartTmp[index])) {
      cartQnt[index].textContent = Number(cartQnt[index].textContent) + Number(quantity[index].textContent);
    } else {
      cart.innerHTML += `<div class="cart__product" data-id="` + product[index].getAttribute('data-id') + `">
        <img class="cart__product-image" src="` + productImg[index].getAttribute('src') + `">
        <div class="cart__product-count">` + quantity[index].textContent + `</div>
      </div>`;
    }
  });
}
