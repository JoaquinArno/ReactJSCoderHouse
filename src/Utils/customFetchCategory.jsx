const customFetchCategory = (product, stallTime = 0, idCategoria) => {
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
  
  export default customFetchCategory;
  