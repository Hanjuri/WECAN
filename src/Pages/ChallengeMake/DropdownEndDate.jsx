import React, { useState } from 'react';
import styled from 'styled-components';
import toggleImg from '../../Assets/img/Icon.png';

const DropdownTotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 270px;
  margin-left: 130px;
  gap: 20px;
  position: relative;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  width: 70px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid gray;
  align-items: center;
`;

const ToggleButton = styled.button`
  color: black;
  background-color: white;
  border: none;
  margin-left: 5px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ToggleButtontitle = styled.div`
  width: 90px;
`;
const ToggleButtonImg = styled.img``;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 103%;
  width: 100%;
  background-color: #fff;
  color: gray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.li`
  z-index: 1;
  position: relative;
  padding: 10px;
  cursor: pointer;
  border-right: 1px gray solid;
  border-left: 1px gray solid;
  border-bottom: 1px gray solid;
  background-color: white;
  &:hover {
    background-color: pink;
  }
`;

////////////////////////////

const DropdownEndDate = ({ onTypeChange }) => {
  const [isfirstOpen, setIsfirstOpen] = useState(false);
  const [issecondOpen, setIssecondOpen] = useState(false);
  const [isthirdOpen, setIsthirdOpen] = useState(false);
  const [endyear, setEndYear] = useState();
  const [endmonth, setEndMonth] = useState();
  const [endday, setEndDay] = useState();
  ///////////////////////////////////////
  const years = [24, 25, 26, 27, 28, 29, 30];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const toggleFirstDropdown = () => {
    setIsfirstOpen(!isfirstOpen);
  };
  const toggleSecondDropdown = () => {
    setIssecondOpen(!issecondOpen);
  };
  const toggleThirdDropdown = () => {
    setIsthirdOpen(!isthirdOpen);
  };

  const handleFirstItemClick = (item) => {
    console.log(`payment_type: ${item}`);
    setEndYear(item);
    onTypeChange(endyear, endmonth, endday);
  };
  const handleSecondItemClick = (item) => {
    console.log(`payment_type: ${item}`);
    setEndMonth(item);
    onTypeChange(endyear, endmonth, endday);
  };
  const handleThirdItemClick = (item) => {
    console.log(`payment_type: ${item}`);
    setEndDay(item);
    onTypeChange(endyear, endmonth, endday);
  };
  console.log({ endyear, endmonth, endday });

  return (
    <DropdownTotalContainer>
      <DropdownContainer onClick={toggleFirstDropdown}>
        <ToggleButton>
          <ToggleButtontitle>{endyear}년</ToggleButtontitle>
          <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
        </ToggleButton>
        <DropdownMenu isOpen={isfirstOpen}>
          {years.map((number) => (
            <DropdownItem onClick={() => handleFirstItemClick(`${number}`)}>
              {number}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </DropdownContainer>
      <DropdownContainer onClick={toggleSecondDropdown}>
        <ToggleButton>
          <ToggleButtontitle>{endmonth}월</ToggleButtontitle>
          <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
        </ToggleButton>
        <DropdownMenu isOpen={issecondOpen}>
          {months.map((number) => (
            <DropdownItem onClick={() => handleSecondItemClick(`${number}`)}>
              {number}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </DropdownContainer>
      <DropdownContainer onClick={toggleThirdDropdown}>
        <ToggleButton>
          <ToggleButtontitle>{endday}일</ToggleButtontitle>
          <ToggleButtonImg src={toggleImg}></ToggleButtonImg>
        </ToggleButton>
        <DropdownMenu isOpen={isthirdOpen}>
          {Array(31)
            .fill()
            .map((_, index) => (
              <DropdownItem
                onClick={() => handleThirdItemClick(`${index + 1}`)}
              >
                {index + 1}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </DropdownContainer>
    </DropdownTotalContainer>
  );
};

export default DropdownEndDate;
