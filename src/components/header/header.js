import React from 'react';

const Header = () => {
    return (
        <header className="main-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>Page Title</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Page Title</li>
                        </ol>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
