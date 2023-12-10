import loginPage from "../pages/login.page.js";
import productPage from "../pages/product.page.js";
import { faker } from '@faker-js/faker';

const url = 'http://lojaebac.ebaconline.art.br/';
const username = 'lojaebacqe@gmail.com';
const password = 'GD*peToHNJ1#c$sgk08EaYJQ';

const geradorDeProduto = () => ({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    salePrice: faker.commerce.price(),
    sku: faker.string.alphanumeric(10),
    stock: faker.number.int()
});

describe('Cadastrar de produto', () => {
    before(() => {
        driver.launchApp();
    });

    it('Deve cadastrar um produto', async () => {
        const produto = geradorDeProduto();

        await loginPage.login(url, username, password);
        await loginPage.dismissNotifications();
        await productPage.goToProductPage();
        await productPage.addProductDescription(produto.title, produto.description);
        await productPage.addProductPrice(produto.price, produto.salePrice);
        await productPage.addProductInventory(produto.sku, produto.stock);
        await productPage.publishProduct();

        await expect(productPage.publishedToast).toExist();
    });
});

