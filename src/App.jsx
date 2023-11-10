import './App.css';
import {numberOfUnitsSold} from "./Helpers/numberOfUnitsSold.js";
import {totalStockPurchased} from "./Helpers/totalStockPurchased.js";
import {numberOfUnitsToSell} from "./Helpers/numberOfUnitsToSell.js";
import {bestSellingTvString} from "./Helpers/bestSellingTvString.js";
import {allUnitSizesString} from "./Helpers/allUnitSizesString.js";
import {numberToPricing} from "./Helpers/numberToPricing.js";
import {bestSellingTv} from "./constants/inventory.js";
import samsung_UHD55AU7040 from "./assets/samsung_ue55au7040.png"

function App() {

    //Opdracht 1a
    console.log(numberOfUnitsSold());

    //Opdracht 1c
    console.log(totalStockPurchased());

    return (
        <>
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>
            <main>
                <section>
                    <h2>Verkoopoverzicht</h2>
                    <div className="stockWrapper">
                        <article className="stockArticle" id="numberOfUnitsSold">
                            <p>Aantal verkochte producten</p>
                            <p className="importantNumber">{numberOfUnitsSold()}</p>
                        </article>
                        <article className="stockArticle" id="totalStockPurchased">
                            <p>Aantal ingekochte producten</p>
                            <p className="importantNumber">{totalStockPurchased()}</p>
                        </article>
                        <article className="stockArticle" id="numberOfUnitsToSell">
                            <p>Aantal te verkopen producten</p>
                            <p className="importantNumber">{numberOfUnitsToSell()}</p>
                        </article>
                    </div>
                </section>
                <section>
                    <h2>Best verkochte tv</h2>
                    <article>

                        <div>
                            <p>{bestSellingTvString(bestSellingTv)}</p>
                            <p className="importantNumber">{numberToPricing(bestSellingTv)}</p>
                            <p>{allUnitSizesString(bestSellingTv)}</p>
                        </div>
                    </article>


                </section>
            </main>
        </>
    )
}

export default App
