# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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


Vistas:
    Home: 
        - Debe mostrar un listado de al menos 5 productos
            - Cada producto debe tener su propio boton de agregar al carrito
    Carrito de compras:
        - Debe mostrar un listado de los productos que el usuario agrego
            - Cada producto debe tener su propio boton de remover del carrito
    Checkout:
        - Mostrar un resumen de lo que se va a comprar

Componentes:
    Header:
        - Debe mostrar la navegacion y un indicador del carrito de compras que muestre cuantos productos

Hooks:
    - useContext
    - useReducer

Productos:
    - tomate
        - id: 1
        - img: https://media.istockphoto.com/photos/tomato-picture-id174930196?b=1&k=20&m=174930196&s=170667a&w=0&h=7Ayjl-bZSpI4vwYq5DvZhARmOhw1IiMzhdyjOswlhIs=
    - lechuga
        - id: 2
        - img: https://media.istockphoto.com/photos/butterhead-lettuce-picture-id537304934?b=1&k=20&m=537304934&s=170667a&w=0&h=MGmZXerLO71LRxs1_WP5PZuKE4B4BD_FbguhYQAVkz4=
    - cebolla
        - id: 3
        - img: https://media.istockphoto.com/photos/onion-picture-id183817051?b=1&k=20&m=183817051&s=170667a&w=0&h=b97_LJWLibQHgFs30xyUMfkq2dszVHoh1MHmue-I-ys=
    - chicharos
        - id: 4
        - img: https://media.istockphoto.com/photos/green-pea-picture-id155431404?b=1&k=20&m=155431404&s=170667a&w=0&h=qbEbKkUdRLaoWCg-KOA1Ji9ikXWlK99YjEEjA2jf9rU=
    - zanahorias
        - id: 5
        - img: https://media.istockphoto.com/photos/carrots-picture-id471359531?b=1&k=20&m=471359531&s=170667a&w=0&h=IqUxtzTtVnKyj0PhtePg6G0c4Z4qRT5Prsk9flpgeFM=