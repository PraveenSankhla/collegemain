// import React from 'react';
// import {Route, Navigate} from 'react-router-dom';
// import { Component } from 'react/cjs/react.production.min';


// const ProtectedRoutes = ({auth, component : component, ...rest}) =>{
//     return(
//         <Route
//         {...rest}
//         render={(props)=>{
//             if(auth) return <Component {...props} />;
//             if(!auth) return <Navigate to={{path:"/", state: {from : props.location}}}/>
//         }}
//     />
//     )
// }

// export default ProtectedRoutes;