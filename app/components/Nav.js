import React from 'react';

export default function Nav() {
    return(
        <nav className='navigation-container p-2'>
            <div className='is-flex navigation-content'>
                <div>
                    <i className="fas fa-bars"></i>
                </div>
                <div className='logo-name-container'>
                    <h2>Fluid Contacts</h2>
                </div>
                <div className='search-container'>
                    <i class="fas fa-search search-icon"></i>
                    <input 
                        className='input-effect'
                        type="text"
                        placeholder='Search'
                    />
                </div>
                <div className='profile-image-container'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvkaW9bECavuVwt8eAXz4jZ4iFEuBJMhxr6EpPxK0NrlBe70nH" alt="my-profile-pic"
                    />
                </div>
            </div>
        </nav>
        
    )
}