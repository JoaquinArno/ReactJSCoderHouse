export const customFetchCategory = (product, stallTime = 0, idCategoria) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          if (product) {
            if (idCategoria) {
              const category = product.filter((product) => product.categoria === idCategoria);
              resolve(category);
            } else {
              resolve(product);
            }
          }
        } catch (err) {
          reject(err);
        }
      }, stallTime),
    );
  };

  export const customFetchDetail = (product, stallTime = 0, id) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          if (product) {
            if (id) {
              const book = product.find((product) => product.id === id);
              resolve(book);
            } else {
              resolve(product);
            }
          }
        } catch (err) {
          reject(err);
        }
      }, stallTime),
    );
  };

  