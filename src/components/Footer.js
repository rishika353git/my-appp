import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-4 text-start">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Products</h5>
                        <ul className="list-unstyled">
                            <li>T-Shirts</li>
                            <li>Mugs</li>
                            <li>Hoodies</li>
                            <li>Tote Bags</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li>Help Center</li>
                            <li>Contact Us</li>
                            <li>Shipping Info</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
                <hr style={{ borderColor: 'grey' }} />
                <p className="mt-3 text-center">© 2024 Custom Merchandise Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
