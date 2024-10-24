import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const CustomStyledButton = styled(Button)({
    width: 150,
    color: "#E5E5CB",
    border: "1px solid white",
    fontSize: "small",
    marginTop: "5px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#E5E5CB",
      color: "#000",
    },
  });

function StyledButton(props) {
  return (
    <CustomStyledButton {...props}>
      {props.children} 
    </CustomStyledButton>
  )
}

export default StyledButton