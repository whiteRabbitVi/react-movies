import React from 'react';
function Movie({ title, img, year }) {
    return (
        <div className="card">
            <div className="card-image">
                { (img === 'N/A') ? 'https://placehold.co/600x400' : <img src={img} alt={title} /> }
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                <span className='right'>{year}</span>
            </div>
        </div>
    )
}

export { Movie };

//<div className="card-image">
                        
                            