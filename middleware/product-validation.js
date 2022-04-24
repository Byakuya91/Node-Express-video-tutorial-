function productValidate(req, res, next) {
  //  grabs the request data of client
  let product = req.body;
  // object meant to do checks on JSON key,value pairs in products.JSON.
  let properties = [
    { name: "name", type: "string" },
    { name: "description", type: "string" },
    { name: "category", type: "string" },
    { name: "price", type: "number" },
  ];
  //     looping through the array of objects
  for (const property in properties) {
    if (
      // checking if property name is equal to the property type.
      product.hasOwnProperty(property.name) &&
      typeof (product[property.name] === property.type)
    ) {
      // proceed with the request
      continue;
      //    kicks out and tells client their info was not accepted.
    } else {
      return res.status(403).send("Product body not valid!");
    }
  }
  return next();
}
module.exports = productValidate;
