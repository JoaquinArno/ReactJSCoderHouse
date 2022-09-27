const customFetchDetail = (product, stallTime = 0, id) => {
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

export default customFetchDetail;
