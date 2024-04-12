import { IProductData } from "../interfaces/IProductData";
import { selectColor } from "../utills/helpers.ts";
import "./Card.css";

const Card: React.FC<IProductData> = ({
  title,
  price,
  image,
  description,
  category,
}) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="product-card product-card-wrap">
        <div className="product-card-title">
          <h3 className="text-truncate-2">{title}</h3>
        </div>
        <div className="product-card-body">
          <figure>
            <img src={image} className="product-card-image" alt={title} />
          </figure>
          <div
            className="product-card-content"
            style={{ backgroundColor: selectColor(category) }}
          >
            <p className="product-card-price text-blue">Rs {price}</p>
            <p className="product-card-text text-truncate-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
