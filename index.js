//imports
const express = require("express");
const repoContext = require("./repository/repository-wrapper");
// creating an app object of type express.
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Endpoint
//http://localhost:5005(BASE URL)

// GET all products
//httip://localhost:5005/products
app.get("/api/products", (req, res) => {
  // finding all the products
  const products = repoContext.products.findAllProducts();
  // returning that information to the client.
  return res.send(products);
});

// GET product by id
//httip://localhost:5005/products/:id
app.get("/api/products/:id", (req, res) => {
  //  grabbing the id from the the request
  const id = req.params.id;
  // finding the id within the products JSON file.
  const products = repoContext.products.findProductById(id);
  // returning that information.
  return res.send(products);
});

// POST new product
//httip://localhost:5005/products
app.post("/api/products", (req, res) => {
  //  accesses the request made by the user.
  const newProduct = req.body;
  // adds the item to the repo.
  const addedProduct = repoContext.products.createProduct(newProduct);
  // user sees item in repo has been added.
  return res.status(201).send(addedProduct);
});

// PUT existing product
// http://localhost:5005/api/products/:id
app.put("/api/products/:id", (req, res) => {
  // grabbing id of the object in product JSON
  const id = parseInt(req.params.id);
  // user sending the entire object with all its properties
  const productPropertiesToModify = req.body;
  //  updating the JSON file with the requested information from client.
  const productToUpdate = repoContext.products.updateProduct(
    id,
    productPropertiesToModify
  );
  //   returning the updated product back to the client, confirming it has been updated.
  return res.send(productToUpdate);
});

// DELETE an existing product
// http://localhost:5005/api/products/:id
app.delete("/api/products/:id", (req, res) => {
  //  grab the id from request
  const id = parseInt(req.params.id);
  // remove the product
  deletedProduct = repoContext.products.deleteProduct(id);
  //  return updated product removed to user
  return res.send(deletedProduct);
});

// Starting a server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server running! On PORT: ${PORT}`);
});
