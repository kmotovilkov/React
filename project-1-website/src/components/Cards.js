import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>We know where every bean comes from!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/coffee1.jpg"
                            text="Bali blue moon roast coffee beans"
                            text2="has a fragrant toffee aroma with flavors of
                             walnuts and semi-sweet chocolate, with a crisp black cherry finish.
                             This whole bean coffee has a dark & distinctive roast and comes from
                              the Kintamani Highlands in North Bali, Indonesia."
                            lable="Dark"
                            path="/coffee"/>
                        <CardItem
                            src="images/coffee2.jpg"
                            text="Costa Rica La Cascada tarrazu roast coffee beans"
                            text2="is balanced, clean, and mild. Prized for bright,
                            crisp taste, Costa Rica La Cascada comes from the high altitude farms in the Tarrazu
                             region where rich soils produce some of the best coffees in the land. Costa Rica La
                             Cascada Tarrazu is medium-bodied with a fragrant aroma and bright crisp flavor. "
                            lable="Medium"
                            path="/coffee"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/tea1.jpg"
                            text="Apricot Ceylon Black Tea"
                            text2="combines the mellow taste
                            of Bogawantalawa Estate Ceylon whole leaf black tea with
                            the delicate flavor of apricot to produce this well-balanced tea."
                            lable="Black"
                            path="/tea"/>

                        <CardItem
                            src="images/tea3.jpg"
                            text="Cherry Blossom Green Tea"
                            text2="combines pomegranate flowers
                             and natural cherry flavor to create this perfect medium-bodied blend."
                            lable="Green"
                            path="/tea"/>
                        <CardItem
                            src="images/tea2.jpg"
                            text="English Breakfast Tea"
                            text2="is a blend of black teas from Sri Lankan Ceylon,
                            Taiwanese Black Tea, and Chinese Keemun Black Tea. "
                            lable="Black"
                            path="/tea"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/coffee3.jpg"
                            text="Ethiopian Yirgacheffe roast coffee beans"
                            text2="We offer Ethiopian Yirgacheffe light roast coffee beans,
                            picked by hand on a farm in the mountains high above the town of Sidamo. There,
                            the coffee beans are washed, and then soaked up to 72 hours in fermentation tanks. This wet process method produces intensely flavorful beans, with an intensely floral aroma, and mellow,
                            smooth taste."
                            lable="Light"
                            path="/coffee"/>
                        <CardItem
                            src="images/tea4.jpg"
                            text=" Darjeeling Black Tea"
                            text2="Since 1963 we have traveled the world in search of the finest teas.
                             Our quest for quality doesn't stop with our single serve tea products.
                             Darjeeling Black Tea Single Serve KCups have a medium-bodied bold flavor with floral notes."

                            lable="Black"
                            path="/tea"/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;