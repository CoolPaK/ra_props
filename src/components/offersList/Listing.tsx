import Offer from "./Offer";
import './Listing.css';
import { ICards } from "./models";

interface IListingProps {
    items: ICards[]
}

function Listing(props: IListingProps) {
    const { items } = props;
    return (
        <div className="item-list">
            { items.map(el => <Offer offer={ el } key={el.listing_id}/>) }
        </div>
    )
}

export default Listing;