import React from "react";
import "./styles.css";
// import Shopify from "../assets/Shopify.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import ClimbWild from '../assets/SVG/ClimbWild.svg';
import ColoradoCraft from '../assets/SVG/ColoradoCraft.svg';
import Skarsgardfarms from '../assets/SVG/Skarsgardfarms.svg';
import ZiradLabs from '../assets/SVG/ZiradLabs.svg';



const dataportfolio = [
  // {
  //   img: Asset4,
  //   description: "Gongs Market - Your one-stop shop for fresh produce.",
  //   link: "https://www.gongsmarket.com/",
  // },
  {
    img: " src/assets/shopify/crosvickfarms_logo.avif",
    description: "Creswick Farms - Fresh local produce and meats.",
    link: "https://www.creswickfarms.com/",
  },
  {
    img: "https://www.creswickfarms.com/cdn/shop/files/CF_LOGO_wo_verbage__white_01062019a_280x_2x_c78be48c-b4a3-44e7-a7f8-e0629aaf3f10.jpg",
    description: "Creswick Farms Shopify - Online shop for farm products.",
    link: "https://creswickfarms.myshopify.com",
  },
  {
    img: "https://grocerist-demo.myshopify.com/cdn/shop/files/Grocerist_Favicon_Blue_RGB.png?v=1667499046&width=50",
    description: "Grocerist - Demo site for grocery products.",
    link: "https://grocerist-demo.myshopify.com/",
  },
  {
    img: "https://foodandmeatcoop.com/cdn/shop/files/food-meat-co-op-logo_2.jpg?v=1712001708&width=260",
    description: "Food and Meat Cooperative - Quality meat products.",
    link: "https://foodandmeatcoop.com/",
  },
  {
    img: ColoradoCraft,
    description: "Colorado Craft Beef - Premium beef products.",
    link: "https://coloradocraftbeef.com",
  },
  {
    img: "https://martinscountrystore.com/cdn/shop/files/MCS_Logo_-_Transparent.png?v=1714394462&width=260",
    description: "Martin's Country Store - Shop for local goods.",
    link: "https://martinscountrystore.myshopify.com",
  },
  {
    img: "https://hoaglandmeat.com/cdn/shop/files/HoaglandMeatLogoFull.webp?v=1678529802&width=160",
    description: "Hoagland Meat - Premium meat products.",
    link: "https://hoaglandmeat.com",
  },
  {
    img: "https://farmstead-wine.myshopify.com/cdn/shop/files/logo_150-1.jpg?v=1714739364&width=100",
    description: "Farmstead Wine - Curated wine selections.",
    link: "https://farmstead-wine.myshopify.com",
  },
  {
    img: Skarsgardfarms,
    description: "Skarsgard Farms - Sustainable farming products.",
    link: "https://skarsgardfarms.myshopify.com/",
  },
  {
    img: "https://localbutchershop.myshopify.com/cdn/shop/files/logo.png?v=1716193093&width=500",
    description: "Local Butcher Shop - Fresh and local meats.",
    link: "https://localbutchershop.myshopify.com",
  },
  {
    img: "https://africangroceryonline.myshopify.com/cdn/shop/files/African_Grocery_Online_Logo_ed252177-21a2-4f84-8708-182001ef2d46.png?v=1721678208&width=220",
    description: "African Grocery Online - African grocery items.",
    link: "https://africangroceryonline.myshopify.com",
  },
  {
    img: "https://www.mrmarcel.com/cdn/shop/files/MonsieurMarcel-Gourmet-Blue.png?v=1704747417&width=600",
    description: "Monsieur Marcel - Fine French foods and wines.",
    link: "https://www.mrmarcel.com/",
  },
  {
    img: "https://louisiana.topboxfoods.com/cdn/shop/files/TBF_logo_Green_and_White.png?v=1714510759&width=500",
    description: "Top Box Foods Louisiana - Affordable, fresh groceries.",
    link: "https://louisiana.topboxfoods.com",
  },

  {
    img: "https://yvonneexclusive.com/cdn/shop/files/Screenshot_2024-06-25_232654.png?v=1719338249&width=300",
    description: "Yvonne Exclusive - Elegant women's fashion.",
    link: "https://yvonneexclusive.com/",
  },
  {
    img: "https://dudebites.com/cdn/shop/files/1000179917-removebg-preview-removebg-preview.png?v=1721335634&width=250",
    description: "Dude Bites - Delicious, hearty meals delivered.",
    link: "https://dudebites.com/",
  },
  {
    img: "https://www.northforkchaico.com/cdn/shop/articles/IMG_6542-905763_640x640_crop_center.jpg?v=1704768647",
    description: "North Fork Chai Co - Specialty chai beverages.",
    link: "https://northforkchaico.com",
  },
  {
    img: "https://torinrichards.com/cdn/shop/files/IMG_8428.heic?v=1725224262&width=360",
    description: "Torin Richards - Men's premium fashion.",
    link: "https://torinrichards.com",
  },
  {
    img: "https://thespiritualoasis.com/cdn/shop/files/FAVE_TSO_logo_1.png?v=1725853319&width=210",
    description: "The Spiritual Oasis - Wellness and spiritual products.",
    link: "https://thespiritualoasis.com/",
  },
  {
    img: "https://doublekickz.com/cdn/shop/files/Untitled_design_27.svg?v=1708955033&width=300",
    description: "Double Kickz - Custom-designed sneakers.",
    link: "https://doublekickz.com/",
  },
  {
    img: "https://lorient.at/cdn/shop/files/logo_2021_540x.png?v=1633256456",
    description: "Nova Lumi - Innovative lighting solutions.",
    link: "https://novalumi.co",
  },
  {
    img: "https://lorient.at/cdn/shop/files/logo_2021_540x.png?v=1633256456",
    description: "L'Orient - Exquisite artisan goods.",
    link: "https://www.lorient.at",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/66cd39abea809c07ce3c43d3/fe040ec0-09a2-4f46-aa7a-92f5eef3108b/da_mario_logotype_white+copy.png?format=1500w",
    description: "Da Mario - Authentic Italian dining experience.",
    link: "https://damario.com.au",
  },
  {
    img: "https://devineliteny.com/cdn/shop/files/white_and_gold_logo_180x.jpg?v=1682643259",
    description: "Devine Elite NY - Luxury fashion and accessories.",
    link: "https://devineliteny.com",
  },
  {
    img: "https://adamabcosmetiques.fr/cdn/shop/files/683bc0_415a04ec9ff447f69657757a6ea2c7e2_mv2.webp?v=1712926977&width=90",
    description: "Adama B Cosmetics - French skincare and beauty products.",
    link: "https://www.adamabcosmetiques.fr",
  },
  {
    img: "https://carve1sports.com/cdn/shop/files/6667381E-C66B-4C06-BEA2-D2C5953E6B12-removebg-preview_Large_7ab8777e-987f-4896-9412-bce71d415ea1_200x.png",
    description: "Carve1 Sports - High-quality sports gear.",
    link: "https://carve1sports.com/",
  },
  {
    img: ClimbWild,
    description: "Climb Wild - Climbing gear and accessories.",
    link: "https://climbwild.shop/",
  },
  
  {
    img: "https://benboulter.com/cdn/shop/files/BB_Logo_Trimmed_white.png?v=1685024145&width=100",
    description: "Ben Boulter - Portfolio of creative works.",
    link: "https://benboulter.com",
  },
  {
    img: ZiradLabs,
    description: "Zirad Labs - Advanced technological solutions.",
    link: "https://zirad.com",
  },
  {
    img: "https://haaghoek.com/cdn/shop/files/Ontwerpzondertitel_71.png?v=1724922548&width=360",
    description: "Haag Hoek - Exquisite European wines.",
    link: "https://www.haaghoek.com",
  },
  
  {
    img: "https://www.lotticards.de/bilder/intern/shoplogo/LottiCards_Logo1.png",
    description: "Lotti Cards - Unique handmade cards.",
    link: "https://www.lotticards.de",
  },
  {
    img: "https://rppoutdoorapparel.com/cdn/shop/files/RPPtransparentlogo_dcae4727-dc53-4dfb-bc23-cfd292289d27_180x.png",
    description: "RPP Outdoor Apparel - Gear for outdoor adventures.",
    link: "https://www.rppoutdoorapparel.com",
  }
];



export const Portfolio = () => {
  return (
    <>
      {/* Banner Image
      <div className="relative w-full h-80">
        <img src={Shopify} alt="Shopify Banner" className="object-cover w-full h-full" />
      </div> */}

     
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-5">
            {dataportfolio.map((data, i) => (
              <div key={i} className="po_item bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow">
                <img src={data.img} alt={data.description} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="content mt-3">
                  <p className="text-lg">{data.description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
       
     
    </>
  );
};
