import {HOME_ROUTE,ABOUT_ROUTE,CONTACT_ROUTE,LOGIN_ROUTE,REGISTER_ROUTE,PRODUCTS_ROUTE}   from "./routes"

const navMenu=[
    {
        auth:true,
       route:HOME_ROUTE,
        label:"Home",


    },
    , {auth:true,
        route:PRODUCTS_ROUTE,
        label:"Products"
    },
    {auth:true,
        route:ABOUT_ROUTE,
        label:"About",
    

    },
    {auth:true,
        route:CONTACT_ROUTE,
        label:"Contact",
    

    },
    {auth:false,
        route:LOGIN_ROUTE,
        label:"Login"
    }
    , {auth:false,
        route:REGISTER_ROUTE,
        label:"Register"
    }
    
   


]
export default navMenu