# Social-Media_App
Small Social-Media_App using MERN Stack + GRaphQl

////////////////////////////////////////////

## Steps:
* Back-end Server:

   1. ***[setUp](https://github.com/3madov-77/Social-Media_App/tree/setUp)***: setup all requierd tools for start bulding the App:
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
