import { useNavigate } from "react-router";
const Header = (props) => {
    const{text, handleSearchText} = props;

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/search");
    };

    return (
        <header className="flex bg-[#131921] p-4 justify-between">
            <div>
                <p className="text-amber-300">Shopping App</p>
            </div>
        
            <div>
                <input className="border-1 border-[#ffff] p-1 text-white" 
                onChange={(e) => {
                    handleSearchText(e.target.value);
                }}
                value={text}
                />
                <button className="border-1 border-[#ffff] p-1 text-white" onClick={handleSearch}>Search</button>
            </div>
        
            <div>
                <div className="h-8 w-8 rounded-full bg-purple-700"></div>
            </div>
        </header>
    );
};

export {Header};