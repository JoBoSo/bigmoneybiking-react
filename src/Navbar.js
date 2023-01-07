import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/"><b>BIKE TOURS</b></Link>
            <Link to="/hikes"><b>HIKES</b></Link>
            <Link to="/blog"><b>BLOG</b></Link>
            <Link id="left-align" to="/subscribe"><i><b>SUBSCRIBE</b></i></Link>
        </div>
    );
}

export default Navbar