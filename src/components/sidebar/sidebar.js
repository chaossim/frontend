import React from 'react';

const Sidebar = () => {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-menu">
                    <li className="header">MENU</li>
                    <li className="active"><a href="#">Dashboard</a></li>
                    <li><a href="#">Users</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </section>
        </aside>
    );
}

export default Sidebar;
