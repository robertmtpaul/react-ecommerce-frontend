let BASE_URL;

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  BASE_URL = 'http://localhost:1337' // 
} else {
  BASE_URL = 'https://node-ecommerce-backend.herokuapp.com' // 
} // if else
module.exports = {
  PRODUCTS_URL: BASE_URL + '/products',
  LOGIN_URL: BASE_URL + '/login'
}