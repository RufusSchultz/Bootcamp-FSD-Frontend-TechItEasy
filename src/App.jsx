import './App.css';
import {numberOfUnitsSold} from "./Helpers/numberOfUnitsSold.js";
import {totalStockPurchased} from "./Helpers/totalStockPurchased.js";
import {numberOfUnitsToSell} from "./Helpers/numberOfUnitsToSell.js";
import {bestSellingTvString} from "./Helpers/bestSellingTvString.js";
import {allUnitSizesString} from "./Helpers/allUnitSizesString.js";
import {numberToPricing} from "./Helpers/numberToPricing.js";
import {bestSellingTv} from "./constants/inventory.js";
import samsung_UHD55AU7040 from "./assets/samsung_ue55au7040.png";
import check_icon from "./assets/check.png";
import not_icon from "./assets/minus.png";
import logo from "./assets/tech_it_easy.png";

function App() {

    //Opdracht 1a
    console.log(numberOfUnitsSold());

    //Opdracht 1c
    console.log(totalStockPurchased());

    function bestSellerFirst() {
        console.log("Meest verkocht eerst");
    }

    function cheapestFirst() {
        console.log("Goedkoopste eerst");
    }

    function bestForSportsFirst() {
        console.log("Meest geschikt voor sport eerst");
    }

    return (
        <>
            <header>
                <h1>Te<span id="special_letter">c</span>h it easy dashboard</h1>
                <span id="logo">
                    <img src={logo} alt="Tech It Easy"/>
                </span>
            </header>
            <main>
                <section>
                    <h2>Verkoopoverzicht</h2>
                    <div className="stock_wrapper">
                        <article className="stock_article" id="number_of_units_sold">
                            <p>Aantal verkochte producten</p>
                            <p className="important_number">{numberOfUnitsSold()}</p>
                        </article>
                        <article className="stock_article" id="total_stock_purchased">
                            <p>Aantal ingekochte producten</p>
                            <p className="important_number">{totalStockPurchased()}</p>
                        </article>
                        <article className="stock_article" id="number_of_units_to_sell">
                            <p>Aantal te verkopen producten</p>
                            <p className="important_number">{numberOfUnitsToSell()}</p>
                        </article>
                    </div>
                </section>
                <section>
                    <h2>Best verkochte tv</h2>
                    <article className="best_selling_unit_article">
                        <span id="best_selling_unit_image_wrapper">
                            <img src={samsung_UHD55AU7040} alt="Samsung UHD 55AU7040"/>
                        </span>

                        <div className="best_selling_unit_wrapper">
                            <p>{bestSellingTvString(bestSellingTv)}</p>
                            <p className="important_number">{numberToPricing(bestSellingTv)}</p>
                            <p>{allUnitSizesString(bestSellingTv)}</p>
                            <p id="best_selling_unit_features">
                                <span className="featured_features_best_selling_unit">
                                    <img src={check_icon} alt=""/>
                                </span>
                                wifi
                                <span className="featured_features_best_selling_unit">
                                    <img src={not_icon} alt=""/>
                                </span>
                                speech
                                <span className="featured_features_best_selling_unit">
                                    <img src={check_icon} alt=""/>
                                </span>
                                hdr
                                <span className="featured_features_best_selling_unit">
                                    <img src={check_icon} alt=""/>
                                </span>
                                bluetooth
                                <span className="featured_features_best_selling_unit">
                                    <img src={not_icon} alt=""/>
                                </span>
                                ambilight
                            </p>
                        </div>
                    </article>
                </section>
                <section>
                    <div id="buttons">
                        <button type="button" onClick={bestSellerFirst}>Meest verkocht eerst</button>
                        <button type="button" onClick={cheapestFirst}>Goedkoopste eerst</button>
                        <button type="button" onClick={bestForSportsFirst}>Meest geschikt voor sport eerst</button>
                    </div>

                </section>
            </main>
        </>
    )
}

export default App
