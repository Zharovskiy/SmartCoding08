export class LocalStorage {
    constructor () {
        this.keyName = 'bookList';
    }
    
    // Повертає пустий массив якщо сховище пусте. Або повертає массив обьектів з книгами
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    // Перевіряє чи книга є в локальному сховищі
    // Повертає true якщо є книга чи false якщо немає
    checkProduct({id}) {
        let products = this.getProducts();
        let index = products.findIndex(item => item._id == id);
        const obj = {
            hasProd: false,
            index: index,
            arrProd: products
        }
        if(index !== -1) {
            obj.hasProd = true;
        }
            return obj;
    }

    // Додає/видаляє книгу з сховища
    // З модалки передавати обєкт з інфо про книгу
    // З shoppingList для видалення передавати обєкт з id типу {id: '155451558'}
    putProducts(books) {
        const resp = this.checkProduct(books);
        const {hasProd, index, arrProd} = resp;

        if(hasProd !== true) {
            arrProd.push(books);
        } else {
            arrProd.splice(index, 1);
        } 
        localStorage.setItem(this.keyName, JSON.stringify(arrProd));
    }
}