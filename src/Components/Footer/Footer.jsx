import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';
import logo from "../../Assets/Logo.png"
import "./Footer.css"

export const Footer = () => {
  return (
    <CDBFooter className="shadow footer">
      <CDBBox display="flex" justifyContent="between" alignItems="center" className="mx-auto py-4 flex-wrap" style={{ width: '80%' }}>
        <CDBBox display="flex" alignItems="center">
          <img alt="logo" src={logo} width="30px"/>
          <small className="ml-2">&copy; Parsifal, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;