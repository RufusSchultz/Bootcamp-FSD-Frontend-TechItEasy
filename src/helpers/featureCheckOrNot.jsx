import check_icon from "../assets/check.png";
import not_icon from "../assets/minus.png";

export function featureCheckOrNot(feature) {
    if (feature === true) {
        return <span className="featured_features_icon">
            <img src={check_icon} alt=""/>
        </span>
    } else {
        return <span className="featured_features_icon">
            <img src={not_icon} alt=""/>
        </span>
    }
}