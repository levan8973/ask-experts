import React, { useState } from "react";
import "./index.css";
import AccordionContent from "./AccordionContent";
import Button from "../../../Component/Button";
import { ReactComponent as Plus } from "../../../icon/plus-circle.svg";
import { ReactComponent as Minus } from "../../../icon/minus-circle.svg";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const AccordionBtn = "Get in touch";

  return (
    <div className="accordion__container">
      <div className="accordion__text-elements">
        <h2 className="accordion__heading">Good to know.</h2>
        <span className="accordion__text">
          Everything you need to know about the my services.
        </span>
      </div>
      <div className="accordion__items">
        <div
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => handleAccordionClick(0)}>
          <div className="accordion__item">
            <h2 className="accordion__title">
              How long does the coaching process take?
            </h2>
            {activeIndex === 0 ? <Minus /> : <Plus />}
          </div>
          {activeIndex === 0 && <AccordionContent />}
        </div>
        <div
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => handleAccordionClick(1)}>
          <div className="accordion__item">
            <h2 className="accordion__title">
              What if I wanted to end my coaching engagement?
            </h2>
            {activeIndex === 1 ? <Minus /> : <Plus />}
          </div>
          {activeIndex === 1 && <AccordionContent />}
        </div>
        <div
          className={activeIndex === 2 ? "active" : ""}
          onClick={() => handleAccordionClick(2)}>
          <div className="accordion__item">
            <h2 className="accordion__title">Can I change through coaching?</h2>
            {activeIndex === 2 ? <Minus /> : <Plus />}
          </div>
          {activeIndex === 2 && <AccordionContent />}
        </div>
        <div
          className={activeIndex === 3 ? "active" : ""}
          onClick={() => handleAccordionClick(3)}>
          <div className="accordion__item">
            <h2 className="accordion__title">How often do we meet?</h2>
            {activeIndex === 3 ? <Minus /> : <Plus />}
          </div>
          {activeIndex === 3 && <AccordionContent />}
        </div>
      </div>
      <div className="accordion__footer">
        <div className="accordion__footer-elements">
          <span className="accordion__footer-title">Still have questions?</span>
          <span className="accordion__footer-text">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </span>
        </div>
        <Button className="accordion__btn" text={AccordionBtn} />
      </div>
    </div>
  );
};

export default Accordion;
