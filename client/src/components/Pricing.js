import React from "react";
import "./Pricing.css";
import PriceCard from "./PriceCard";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from '../image/BajajCT100@3x.jpg';
import img2 from '../image/HondaNavi@3x.jpg';
import img3 from '../image/BajajPulsar135@3x.jpg';
import img4 from '../image/BajajAvengerCruise220@3x.jpg';
import img5 from '../image/BajajAvengerStreet220@3x.jpg';
import img6 from '../image/BajajPulsarNS220@3x.jpg';
import img7 from '../image/RoyalEnfieldThunderbird350@3x.jpg';
import img8 from '../image/RoyalEnfieldClassic350@3x.jpg';
import img9 from '../image/HondaCBR150@3x.jpg';
import img10 from '../image/RoyalEnfieldContinentalGT500@3x.jpg';
import img11 from '../image/RoyalEnfieldHimalayan@3x.jpg';
import img12 from '../image/KTMDuke250@3x.jpg';


const Pricing = () => {
  return (
    <div className="pricing" id="pricing">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mainHeading">PRICING</h3>
          </div>
        </div>
        <div className="row priceBox">
          <div className="col-12">
            <Carousel interval="5000000" indicators="false" pause="true">
              <Carousel.Item>
                <div className="w-100 slide">
                  <PriceCard img="https://th.bing.com/th/id/R.dd82e73ed1cffe8b90e02f4abb2b0147?rik=lCV27XWSWUteCQ&riu=http%3a%2f%2fv4-upload.goalsites.com%2f136%2fimage_1521704620_NHJ-600-%e2%85%a1-Meat-Tender.jpg&ehk=tHqUcFMlPWVqzMzRJBH4uTCCaKeioxhPncwasEwEW0c%3d&risl=&pid=ImgRaw&r=0" id="0" title="ELECTRONIC" subtitle="CT 100" l1="₹199/Daily(24 hrs)" l2="₹849/Weekly(Mon-Fri)" l3="₹4699/Monthly(30 days)"/>

                  <PriceCard img="https://www.chicagopartsnetwork.com/By-County-/Cook-/Welding-Machines-and-MIG-/Bevles-tender-select-roast-hold-oven-imgpic.jpg" id="1" title="REFRIGERATOR" subtitle="NAVI" l1="₹229/Daily(24 hrs)" l2="₹949/Weekly(Mon-Fri)" l3="₹4249/Monthly(30 days)"/>

                  <PriceCard img="https://th.bing.com/th/id/R.f2e317f25a737a460de4cea6b55c631b?rik=jH%2brLOtuHbcLVQ&riu=http%3a%2f%2fep.yimg.com%2fay%2fyhst-59523690850641%2fbushkill-twp-vol-fire-co-m35a2-water-tender-1.jpg&ehk=m%2fwzlwGcZ7Jmok9105nYDBpWOKN4tFpT6%2b%2bZQvS8w9E%3d&risl=&pid=ImgRaw&r=0" id="2" title="TRUCK" subtitle="PULSAR 135 LS" l1="₹459/Daily(24 hrs)" l2="₹1849/Weekly(Mon-Fri)" l3="₹4949/Monthly(30 days)"/>

                  <PriceCard img="https://th.bing.com/th/id/OIP.RM0sk1pq8EjAndKSD791WwHaGE?pid=ImgDet&rs=1" id="3" title="STUDY TABLE" subtitle="AVENGER 220 CRUISE" l1="₹679/Daily(24 hrs)" l2="₹2799/Weekly(Mon-Fri)" l3="₹9649/Monthly(30 days)"/>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="w-100 slide">
                <PriceCard img="https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/cars-other-vehicles/bicycles/medium/20181220062529-1330.jpeg" id="4" title="CYCLE" subtitle="AVENGER 220 STREET" l1="₹679/Daily(24 hrs)" l2="₹2799/Weekly(Mon-Fri)" l3="₹9649/Monthly(30 days)"/>

                <PriceCard img={img6} id="5" title="BAJAJ" subtitle="PULSAR NS 220" l1="₹829/Daily(24 hrs)" l2="₹3349/Weekly(Mon-Fri)" l3="₹9399/Monthly(30 days)"/>

                <PriceCard img="https://5.imimg.com/data5/JC/NG/GLADMIN-62188832/renault-duster-used-car-for-sale.jpg" id="6" title="RENAULT DUSTER CAR" subtitle="350 THUNDERBIRD" l1="₹1039/Daily(24 hrs)" l2="₹4199/Weekly(Mon-Fri)" l3="₹12549/Monthly(30 days)"/>

                <PriceCard img={img8} id="7" title="ROYAL ENFIELD" subtitle="350 CLASSIC" l1="₹1049/Daily(24 hrs)" l2="₹4249/Weekly(Mon-Fri)" l3="₹12549/Monthly(30 days)"/>
                </div>
              </Carousel.Item>  

              <Carousel.Item>
                <div className="w-100 slide">
                <PriceCard img={img9} id="8" title="HONDA" subtitle="CBR 150" l1="₹1109/Daily(24 hrs)" l2="₹4499/Weekly(Mon-Fri)" l3="₹14899/Monthly(30 days)"/>

                <PriceCard img={img10} id="9" title="ROYAL ENFIELD" subtitle="CONTINENTAL GT 500" l1="₹1249/Daily(24 hrs)" l2="₹5099/Weekly(Mon-Fri)" l3="₹17099/Monthly(30 days)"/>

                <PriceCard img={img11} id="10" title="ROYAL ENFIELD" subtitle="HIMALAYAN 411 CC" l1="₹1249/Daily(24 hrs)" l2="₹5049/Weekly(Mon-Fri)" l3="₹14749/Monthly(30 days)"/>

                <PriceCard img={img12} id="11" title="KTM" subtitle="DUKE 250" l1="₹1389/Daily(24 hrs)" l2="₹5649/Weekly(Mon-Fri)" l3="₹17599/Monthly(30 days)"/>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
