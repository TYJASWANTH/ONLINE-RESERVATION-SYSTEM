
import "./hotel.css";
import Header from '../../Componets/Header/Head'
import NavBar from '../../Componets/Navabar/Nav'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";

 const hotel = () => {

    const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ];




    return(
        <dev>
            <NavBar/>
        <Header type="list"/>
              <div className="hotelContainer">
                <div className="hotelWrapper">
                 
                    <h1 className="hotelTitle">Towers of tow Land</h1>
                    <button className="bookNow">Reserve or book now</button>
                    <div className="hotelAddress">
                      < FontAwesomeIcon icon={faLocationDot }/>
                      <span>Elton St 125 New Delhi</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location 500m from center
                    </span>
                    <span className="hotelPrice">
                        Book a stake in this Hotel and get free taxi
                    </span>
                    <div className="hotelImages">
                           {photos.map((photo) => (
                               <div className="hotelImgWraper">
                                <img src={photo.src} alt="" 
                                 className="hotelImg" />
                               </div>
                           ))}
                    </div>
                    <div className="hotelDetails">
                      <div className="hotelTexts">
                        <h1 className="hotelTitle">Stay in the hotel</h1>
                        <p className="hotelDesc">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, quas unde. Illo eaque tempora repudiandae, necessitatibus saepe quam ut non, maxime et dolorem animi odit officia repellat? Iure, vitae. Aut et laborum, voluptates quia odit velit, harum nulla, ipsam necessitatibus amet molestias beatae dolores sunt quasi temporibus excepturi quis. Doloremque rerum eos deleniti mollitia reiciendis, error explicabo minus veniam quia adipisci animi excepturi saepe earum consequuntur repellat fuga, ab quidem est tenetur rem. Itaque hic libero eveniet porro explicabo aut exercitationem mollitia, assumenda tenetur doloremque temporibus sit labore dolorem quia?
                        </p>
                      </div>
                      <div className="hotelPricing">
                        <h1 className="priceTile">Perfect for a 9-stand night</h1>
                        <p className="priceDesc">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis sit sapiente debitis et iure assumenda at 
                          laudantium inventore pariatur. Impedit.
                        </p>
                        <span><b>$896</b>(9 nights)</span>
                        <button className="priceBtn">Reserve or Book Now</button>
                      </div>
                
                    </div>
                </div>
              </div>
        </dev>
    )
 }
 
 export default hotel