import Page from './page.js';

class ProductPage extends Page {
    get backButton() { return $('~Navigate up'); }
    get publishButton() { return $('//android.widget.Button[@text="PUBLISH"]'); }
    get productsButton() { return $('~Products'); }
    get addProductButton() { return $('~Add products'); }
    get simpleProduct() { return $('//android.widget.TextView[@text="Simple physical product"]'); }
    get publishedToast() { return $('//android.widget.TextView[@text="Product published"]'); }
    get enterProductTitleInput() { return $('//android.widget.EditText[@text="Enter Product Title"]'); }
    get addProductDescriptionButton() { return $('(//android.widget.ImageView[@content-desc="Edit product"])[1]'); }
    get productDescriptionInput() { return $('//android.widget.EditText[@resource-id="com.woocommerce.android:id/visualEditor"]'); }
    get addProductPriceButton() { return $('(//android.widget.ImageView[@content-desc="Edit product"])[3]'); }
    get regularPriceInput() { return $('//android.widget.EditText[@text="Regular price"]'); }
    get salePriceInput() { return $('//android.widget.EditText[@text="Sale price"]'); }
    get taxableSelection() { return $('//android.widget.EditText[@text="Taxable"]'); }
    get taxableOption() { return $('//android.widget.CheckedTextView[@text="Taxable"]'); }
    get taxClass() { return $('//android.widget.LinearLayout[@resource-id="com.woocommerce.android:id/product_tax_class"]'); }
    get taxOption() { return $('//android.widget.CheckedTextView[@text="Zero rate"]'); }
    get addProductInventoryButton() { return $('(//android.widget.ImageView[@content-desc="Edit product"])[5]'); }
    get skuInput() { return $('//android.widget.EditText[@text="SKU"]'); }
    get stockSwitch() { return $('//android.widget.Switch[@text="Manage stock"]'); }
    get quantityInput() { return $('//android.widget.EditText[@text="0"]'); }
    get backorders() { return $('//android.widget.EditText[@text="Backorders"]'); }
    get backordersOption() { return $('//android.widget.CheckedTextView[@text="Do not allow"]'); }

    async goToProductPage() {
        await this.click(this.productsButton);
        await this.click(this.addProductButton);
        await this.click(this.simpleProduct);
    }

    async addProductDescription(title, description) {
        await this.sendText(this.enterProductTitleInput, title);
        await this.click(this.addProductDescriptionButton);
        await this.sendText(this.productDescriptionInput, description);
        await this.click(this.backButton);
    }

    async addProductPrice(price, salePrice) {
        await this.click(this.addProductPriceButton);
        await this.sendText(this.regularPriceInput, price);
        await this.sendText(this.salePriceInput, salePrice);
        await this.click(this.taxableSelection);
        await this.click(this.taxableOption);
        await this.click(this.taxClass);
        await this.click(this.taxOption);
        await this.click(this.backButton);
    }

    async addProductInventory(sku, stock) {
        await this.click(this.addProductInventoryButton);
        await this.sendText(this.skuInput, sku);
        await this.click(this.stockSwitch);
        await this.sendText(this.quantityInput, stock);
        await this.click(this.backorders);
        await this.click(this.backordersOption);
        await this.click(this.backButton);
    }

    async publishProduct() {
        await this.click(this.publishButton);
    }
}

const productPageInstance = new ProductPage();
export default productPageInstance;
