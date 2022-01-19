
import { Quotes } from "../components/Quotes/Quotes";
function Home({ quotesDB }) {
    return (
        <Quotes quotesDB = {quotesDB} />

      );
}

export {Home};