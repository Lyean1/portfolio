import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="tel:09677633375" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiFillPhone/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Phone</DropDownItemTitle>
        <DropDownItemDesc>Let's get together and have a chat?'</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="mailto:contact@saylyean@gmail.com" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <AiOutlineMail/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>If you want to talk jus send a message and I'll get back</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown
