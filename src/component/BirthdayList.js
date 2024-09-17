import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const BirthdayList = ({ items }) => {
  console.log(items);
  const maxVisibleItems = 3;
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setShowScroll(items.length > maxVisibleItems);
  }, [items]);

  return (
    <Container>
      <div
        className={`birthday-list-container${showScroll ? " scrollable" : ""}`}
      >
        <ul className="birthday-list">
          {items.map((item, index) => (
            <li key={index}>
              <h6 className="mb-0 fw-bold" style={{ color: "#0066ff" }}>
                {item.name}
              </h6>
              <p className="m-0" style={{ color: "#dd6e18" }}>
                {item.sectionFullName}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default BirthdayList;

const Container = styled.div`
  .birthday-list-container {
    max-height: 150px; /* Set the desired maximum height */
    overflow: hidden;
  }

  .birthday-list {
    padding: 0;
    margin: 0;
  }

  .birthday-list-container.scrollable {
    overflow-y: scroll;
  }
`;
