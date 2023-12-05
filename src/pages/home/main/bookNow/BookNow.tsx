import React from "react";
import "./index.css";
import Button from "../../../../Component/Button";
import BookNowPhoto from "../../../../img/BookNowPhoto.png";

const BookNow: React.FC = () => {
  const BookNowBtn = "Book now";
  return (
    <div className="bookNow">
      <div className="bookNow__container">
        <div className="bookNow__content">
          <div className="bookNow__text-elements">
            <h2 className="bookNow__heading">
              Get 15-Minutes Complimentary online session.
            </h2>
            <span className="bookNow__text">
              Limited Period Offer. Claim Now.
            </span>
          </div>
          <Button className="bookNow__btn" text={BookNowBtn} />
        </div>
        <img src={BookNowPhoto} alt="book now photo" />
      </div>
    </div>
  );
};

export default BookNow;
