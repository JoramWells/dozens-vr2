import React from 'react'

export default function NavigationBar() {
    return (
        <div className="nav">
            <div className="nav__logo">Home</div>
            <div>
                <input placeholder="Search..." />
            </div>
            <nav>
                <ul>
                    <li>Login</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    )
}
