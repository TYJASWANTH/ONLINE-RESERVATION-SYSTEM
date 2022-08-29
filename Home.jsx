import Head from "../../Componets/Header/Head"
import Nav from "../../Componets/Navabar/Nav"
import Featured from "../../Componets/Features/featured"
import PropertyList from "../../Componets/PropertyList/PropertyList"
import FeaturedP from "../../Componets/Featuredroperties/FeaturedP"
import "./Home.css"
import MailList from "../../Componets/mailList/MailList"
import Footer from "../../Componets/Footer/Footer"

const Home = () =>{
    return(
        <div className="home">
               <Nav/>
               <Head/>
            <div className="homeContainer"> 
                 <Featured/>
                 <h1 className="homeTitle">Browse by property type</h1>
                 <PropertyList/>
                 <h1 className="homeTitle">Homes guests love</h1>
                 <FeaturedP/>
                 <MailList/>
                 <Footer/>
            </div>
        </div>
        )
}

export default  Home