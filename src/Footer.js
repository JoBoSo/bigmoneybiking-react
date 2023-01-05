import instagram_logo from './images/instagram-logo.png'

const Footer = () => {
    return (
        <div className="container-fluid m-0 p-0">
            <div className="row no-gutters">
                <div className="col-12">
                    <div className="footer">
                        <div className="content">
                            <a href="https://www.instagram.com/big_money_biking/">
                                <img src={instagram_logo} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer