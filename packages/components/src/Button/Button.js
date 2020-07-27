import React from "react";
import styled from "styled-components";

import Button from "@dtc-design-system/core/lib/Button";
import Theme from "../Theme/Theme.js";

const StyledButton = styled(Button)`
color: #03a9f4
`

const Button1 = ({ onClick, variant, primary, children }) => {
  return (
    <Theme>
      <StyledButton onClick={onClick} primary={primary} variant={variant}>{children}</StyledButton>
    </Theme>
  );
};

export default Button1;
