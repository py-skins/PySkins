import React, { useState, useEffect } from 'react';
import './caseLoopAnimation.scss';

const CaseLoopAnimation = () => {
  const [slotItems, setSlotItems] = useState([]);

  useEffect(() => {
    const slotImages = [
      'https://static.wikia.nocookie.net/cswikia/images/2/23/CSGO_AWP_Inventory.png/revision/latest?cb=20130813202700',
      'https://m.media-amazon.com/images/I/51n31OUjRuL.jpg',
      'https://static.wikia.nocookie.net/cswikia/images/2/23/CSGO_AWP_Inventory.png/revision/latest?cb=20130813202700',
      'https://cslabez.com/wp-content/uploads/2023/04/AWP-skin-Dragon-Lore.jpg',
      'image5.jpg',
    ]; // Replace with your image URLs
    const initialSlotItems = Array.from({ length: 5 }, () =>
      slotImages[Math.floor(Math.random() * slotImages.length)]
    );
    setSlotItems(initialSlotItems);
  }, []);

  return (
    <div className="csgo-slot-machine">
      <div className="slot-container">
        <div className="slot-reel">
          <div className="slot">
            <img src="image1.jpg" alt="Slot 1" />
          </div>
          <div className="slot">
            <img src="image2.jpg" alt="Slot 2" />
          </div>
          <div className="slot">
            <img src="image3.jpg" alt="Slot 3" />
          </div>
          <div className="slot">
            <img src="image4.jpg" alt="Slot 4" />
          </div>
          <div className="slot">
            <img src="image5.jpg" alt="Slot 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseLoopAnimation;
