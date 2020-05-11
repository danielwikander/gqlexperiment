const faker = require("faker");

// that way data is consistent
faker.seed(4321);

function genData() {
  const categories = [];
  for (let i = 0; i < 20; i++) {
    const products = [];

    for (let k = 0; k < 3; k++) {
      products.push({
        id: faker.random.uuid(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence()
      });
    }

    categories.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      products
    });
  }

  return categories;
}

module.exports.data = genData();
