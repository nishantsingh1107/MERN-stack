import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { SearchResults } from "../components/SearchResults.jsx";

const SearchPage = (params) => {
    const {text, handleSearchText} = params;

    return(
        <div>
            <Header text={text} handleSearchText={handleSearchText}/>
            <main>
                <p>Searh results for : <span className="text-black font-bold">{text}</span></p>
                <SearchResults searchQuery={text}/>
            </main>
            <Footer />
        </div>
    );
};

export {SearchPage};