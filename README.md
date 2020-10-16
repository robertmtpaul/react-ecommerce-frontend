# WeShop - React Frontend
Final project frontend at General Assembly Software Engineering Immersive

### 
This is an e-commerce web platform which displays products pulled from a Node.js/Express web server backend. 

### Features
- Users can sign in and create a session in browser 
- Users can view products and click to see more information on product details page
- Products can be added to a shopping cart
- Shopping cart icon updates in top right hand corner with number of products in cart
- Users can remove items from cart, and clear shopping cart

### Technologies
- React
- React router
- Material-UI for icons
- Node.js/Express backend server using Mongoose & MongoDB to access product and user data
- JWT/JSON Web Tokens for logging in users and creating user sessions
- HTML/CSS
- Axios for making server requests

### Setup

To view the site, simply visit https://robertmtpaul.github.io/react-ecommerce-frontend/#/login and use the following test login details: 
- username: `luke@ga.co`
- password: `chicken`

### Known bugs/issues
- Shopping cart doesn't clear until page is refreshed
- Log in page does not display when viewing the route page

### Future dev plans
- 💡 New user registration
- 💡 Refactor of cart using Context API and/or Redux
- 💡 Order route to be developed on backend to send product cart on successful payment as order
- 💡 Implementation of Stripe API for taking payment from user
