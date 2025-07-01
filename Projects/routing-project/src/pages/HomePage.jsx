import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { CategoryList } from "../components/CategoryList.jsx";

const HomePage = (props) => {
    const {text, handleSearchText} = props;
    return(
        <div>
            <Header text={text} handleSearchText = {handleSearchText}/>
            <main className="p-8">
                <div>
                    <CategoryList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export {HomePage};