/* eslint-disable @typescript-eslint/no-unused-vars */
import GetImg from "./GetImg"
import { ICards } from "./models";

interface IOfferProps {
    offer: ICards
}

function Offer(props: IOfferProps) {
    const { url, url_570xN, title, currency_code, price, quantity } = props.offer;

    let mytitle;
    if(title?.length > 50) {
        mytitle = title.slice(50) + '...';
    } else {
        mytitle = title
    }

    let priceStr = '';
    const currency = {
        USD: '$',
        EUR: '€'
    }
    if(currency_code === 'USD' || currency_code === 'EUR') {
        priceStr += currency[currency_code] + ' ' + price;
    } else {
        priceStr += price + ' ' + currency_code;
    }

    let quantityClasses = 'quantity level-medium';
    if(quantity <= 10) quantityClasses += ' level-low';
    if(quantity > 10 && quantity <= 20) quantityClasses += ' level-medium';
    if(quantity > 20) quantityClasses += ' level-high';
    
    return (
        <div className="item">
            <div className="item-image">
            <a href={ url }>
                <GetImg src={ url_570xN } alt={ title } />
            </a>
            </div>
            <div className="item-details">
            <p className="item-title">{ mytitle }</p>
            <p className="item-price">{ priceStr }</p>
            <p className="item-quantity level-medium">{ quantity } left</p>
            </div>
        </div>
    )
}

export default Offer;