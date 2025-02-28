import { useState } from 'react';
import Star from './Star';
import './Stars.css';

interface ICount {
    count: number
    key: string
}

function Stars(props: ICount) {
    const { count } = props;
    let [stars, setStars] = useState(count);

    if(stars < 0) setStars(stars = 0);
    if(stars > 5) setStars(stars = 5);
    let res = [];
    for (let i = 0; i < stars; i++) { res.push(Star()); }    

    return (
        <>
            <div className="starsBtn">
                <button onClick={() => setStars(stars += 1)}>Добавить звезду</button>
                <button onClick={() => setStars(stars -= 1)}>Убрать звезду</button>
            </div>            
            <ul className="card-body-stars u-clearfix">
                { res.map(star => star) }
            </ul>
        </>        
    )
}

export default Stars;