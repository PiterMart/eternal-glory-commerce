# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

This is an E-commerce for Eternal Glory (clothing brand)

Components: -Welcome: Welcoming page with a button that links to the 'releases' route.
            -Notification: Displays a marquee that shows notifications coming from the NotificationContext.
            -NavBar: Navigation Bar wich contains the following links: image logo 'ETERNAL GLORY' -> Welcome page , Releases -> ItemListContainer, Winter and Summer -> only displays items that match each category, CartWidget -> Cart.
            -CartWidget: Shows an image of a shopping cart and  a text that displays the totalQuantity of items in the cart through the CartContext.
            -Item: Shows item name, image,and has a button that links to the 'detail/:paramId' that toggles its visibility if the cursor is above the component.
            -ItemList: maps all items onto a flexbox.
            -ItemListContainer: calls the firebase database and sets the products or its childs to use, and displays the hole ItemListContainer or it filters by category.
            -ItemDetail: Shows the selected item information, a counter (wich is programmed inside the component), and a button that adds the selected amount of that specific item to the cart through the cartContext aswell as sending a message through the NotificationContext . Also a link to 'Cart' (Go to Cart) and 'releases' (Back to catalogue).
            -ItemDetailContainer: calls the firebase database to fech the selected product by id for its child (ItemDetail) to use. Displays the ItemDetail component.
            -Cart: Maps a list of products inside the Cart from CartContext, showing an image, name, quantity (inside of cart) and price. Lets user delete items from cart with the (Delete) button using the removeItem function and clear the hole Cart with the cleanCart function from CartContext. Also Links to '/releases' with the (Keep Shopping) button.

Contexts:   -NotificationContext: This context sets the state 'message' with a  20000 ms timeout. That is then provided to  the marquee in the 'Notification' component.
            -CartContext: 



In the project directory, you can run:  

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
