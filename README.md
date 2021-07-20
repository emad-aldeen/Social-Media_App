# Social-Media_App
Small Social-Media_App using MERN Stack + GRaphQl

////////////////////////////////////////////

## Steps:
* Back-end Server:

    1. ***[setUp](https://github.com/3madov-77/Social-Media_App/tree/setUp)***: setup all requierd tools to start bulding the Server:
        * creating the Project [Repo](https://github.com/3madov-77/Social-Media_App)
        * create the requierd files
        * create the NPM init
        * installing requierd dependencys: (ApolloServer - graphql - mongoose)
        * create graphQL test init
        * create the mongo Db Atlas account
        * confirm & add connection code to MDB
        * conecting GQL Queries with MDB
        * creating Schema for MDB
    2. ***[login-register](https://github.com/3madov-77/Social-Media_App/tree/login-register)***: implemnt the popular 2 fetures (register & login) to have users auth..
        * update README with previous steps
        * re-structuring files
        * adding nodemon dependency
        * adding bcryptjs & jsonwebtoken libraries
        * added register new user feture
        * added validate function for user inputs in new register
        * added login feture
        * added validate function for user input in login
    3. ***[create-del_posts](https://github.com/3madov-77/Social-Media_App/tree/create-del_posts)***: implemnt (create & delete) posts
        * update README with previous steps
        * added new mutation for create posts
        * implementing get (specific, all & create) posts methods
        * added check auth function using jwt
        * using req as callback to controle req headers
        * implementing delete specific post method
    4. ***[likes-comments-sub](https://github.com/3madov-77/Social-Media_App/tree/likes-comments-sub)***: implemnt (create & delete comments, like & unlike posts, subscribe to specific post) methods, also implemnted new fields in posts (likes & comments count)
        * update README with last steps
        * added validtors for post user input
        * implementing create comment for each post
        * added validator for comment user input
        * implementing delete comment for any post
        * added like,unlike for specifc post
        * added Pub & Sub library
        * added Subscription type
        * implement Subscription method
        * added likes & comments counter
* Front-end Server:
    1. ***[setUp_front-end](https://github.com/3madov-77/Social-Media_App/tree/setUp_front-end)***: setup all requierd tools to start bulding the Client-App:
        * update README with last steps
        * set up react-app
        * installing requierd dependencys: (@apollo/react-hooks apollo-cache-inmemory apollo-link-http apollo-client)
        * setup apollo environment with react
    2. ***[semanticUI_routes](https://github.com/3madov-77/Social-Media_App/tree/semanticUI_routes)***: adding and using Semantic UI techology..
        * update README with last steps
        * installing more requierd dependencys: (react-router-dom semantic-ui-css semantic-ui-react)
        * create Home, Login, Register page
        * creating MenuBar using Semantic UI
    3. ***[login-register_pages](https://github.com/3madov-77/Social-Media_App/tree/login-register_pages)***: implemnt Login & Register pages with forms and error handler for worng inputs
        * update README with last steps
        * added register method with form
        * added hook to mange gql data
        * some styling for form
        * added login method with form
        * added handle erros methods
    4. ***[Authentication_Context](https://github.com/3madov-77/Social-Media_App/tree/Authentication_Context)***: make sure that user are logedin already and create context Data-Mangment system
        * update README with last steps
        * added context hook to save user login
        * implement check the context as parent component
        * merge login & register with context
        * create dynamic Menu Bar in logedin || not cases
        * added jwt-decode dependency
        * added check method if user are logedin after refresh the page
        * create Auth for Routs
