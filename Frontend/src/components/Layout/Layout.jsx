import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({children,title,description, keywords, author}) => {
  return (
    <div> 
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content= {keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>          
      </Helmet>
      <Header/>
        <main style={{minHeight:"71vh", flex:1}}>
          <Toaster/>
         {children}
        </main>
      <Footer/>
    </div>
  )
}
//Layout.defaultProps = {
 // title:"EcommerceApp-Shop Now",
  //description:"Mern stack project",
 // keywords:"mongodb,express,react,nodejs",
 // author:"Roma chakradhari"
//}

export default Layout