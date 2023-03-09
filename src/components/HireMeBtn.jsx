import React from 'react'
import styled from 'styled-components';

const HireMeBtn = () => {
  return (
    <StyledBtn>
        <button className='hire-me-btn'>Hire Me</button>
    </StyledBtn>
  )
}

export default HireMeBtn

const StyledBtn = styled.div`
    .hire-me-btn{
    font-size: 14px;
    color: #0d2840;
    background-color: #ffffff;
    padding: 10px 30px;
    border: solid #0d2840 2px;
    border-radius: 50px;
    transition : 390ms;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
}

.hire-me-btn:hover{
    transition : 390ms;
    transform : translateY(-0px);
    background-color: #fff;
    color: #9d754e;
    border: solid 2px #9d754e;
}
`