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
  const products = repoContext.products.findAllProducts();
  return res.send(products);
});

// GET product by id
//httip://localhost:5005/products/:id
app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const products = repoContext.products.findProductById(id);
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

// Starting a server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server running! On PORT: ${PORT}`);
});
