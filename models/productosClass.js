const fs = require('fs');

class Productos {
    constructor(filename) {
        this.filename = filename;
    };

    async getProductos() {
        try {
            const file = await fs.promises.readFile(this.filename, 'utf-8');
            const data = JSON.parse(file);
            return data;
        } catch(err) {
            return err
        }
    };

    async addProducto(obj) {
        try {
            const file = await fs.promises.readFile(this.filename, 'utf-8');
            const data = JSON.parse(file);
            const lastItem = data[data.length - 1];

            data.push({
                id: lastItem.id + 1,
                ...obj
            });

            await fs.prommises.writeFile(this.filename, JSON.stringify(data, null, 2));
            const newFile = await fs.promises.writeFile(this.filename, 'utf-8');
            const parsedNewFile = JSON.parse(newFile);
            const addedProduct = parsedNewFile[parsedNewFile.length - 1];
            console.log(addedProduct);
            return addedProduct;
        } catch(err) {
            console.log(err);
        }
    }
};

module.exports = Productos;