var express=require('express');
var path=require('path');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var session =require('express-session');
var app=express();
var expressValidator=require('express-validator');
var fileUpload=require('express-fileupload');




 Schema=require('./models/page');
var Page= mongoose.model("Pages",Schema);


    Page.find({}).sort({sorting: 1}).exec(async function (err, pages) {
                        if (err) {
                            console.log(err);
                        } 
                        else {
                           app.locals.pages = pages;
                        }
                    });
 
               
      var Schema1=require('./models/category');
      var Category= mongoose.model("categories",Schema1);
      
    
      Category.find( async function (err, categories) {
          if (err) {
              console.log(err);
          } 
          else {
             app.locals.categories = categories;
          }
      });
                    



//set routes
var pages=require('./routes/pages.js');
var products=require('./routes/products.js');
var cart=require('./routes/cart.js');
var users=require('./routes/users.js');
var adminPages=require('./routes/admin_pages.js');
var adminCategories=require('./routes/admin_categories.js');
var adminProducts=require('./routes/admin_products.js');

app.use('/admin/pages',adminPages);
app.use('/admin/categories',adminCategories);
app.use('/admin/products',adminProducts);
app.use('/products',products);
app.use('/cart',cart);
app.use('/users',users);
app.use('/',pages);


app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

var port=8000;
app.listen(port,function(){
    console.log('server listening on ' +port  );
})
