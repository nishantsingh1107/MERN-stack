import { Link } from "react-router";

const HomePage = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <a href="/view">_View_Page_anchor</a>
            <br/>
            <Link to="/view">_View_Page_Link</Link>
        </div>
    );
};

export {HomePage};