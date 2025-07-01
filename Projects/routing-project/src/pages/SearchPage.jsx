import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";

const SearchPage = (params) => {
    const {text, handleSearchText} = params;

    return(
        <div>
            <Header text={text} handleSearchText={handleSearchText}/>
            <Footer />
        </div>
    );
};

export {SearchPage};