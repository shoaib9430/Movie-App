import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className="nav">
                    <div className="title">Sahi Movie</div>
                    <div className="cartContainer">
                        <img className="cartIcon" alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/3082/3082351.png"></img>
                        <span className="cartCount">4</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;
