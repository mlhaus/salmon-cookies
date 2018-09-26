'use strict';

var product_list = [];

var Product = function(product){
    this.title = product.title;
    this.price = product.price;
    this.sizes = product.sizes;
    this.description = product.description;
    this.colors = product.colors;
    this.materials = product.materials;
    this.brand = product.brand;
    this.categories = product.categories;
    this.product_id = product.product_id;
};

products.forEach(function(product){
    product_list.push(new Product(product));
});