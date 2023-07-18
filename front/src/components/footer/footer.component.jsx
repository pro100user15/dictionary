import React from 'react';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../App.constants';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <Typography variant="h4" style={styles.heading}>
            Contacts
          </Typography>
          <Typography>Phone: +380 97 255 3992</Typography>
          <Typography>Address: Chernivtsi, Nebesnoyi Sotni 5B</Typography>
          <Typography>Email: info@dictionary.com</Typography>
          <div className={'pt-2 flex justify-between w-1/2'}>
            <a href="https://www.facebook.com">
              <FaFacebook size={24} style={styles.icon} />
            </a>
            <a href="https://web.telegram.org">
              <FaTelegram size={24} style={styles.icon} />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram size={24} style={styles.icon} />
            </a>
          </div>
        </div>
        <div style={styles.column}>
          <Typography variant="h4" style={styles.heading}>
            About service
          </Typography>
          <ul style={styles.linkList}>
            <li>
              <NavLink to={ROUTES.home} className={'no-underline text-[18px] text-white'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.about} className={'no-underline text-[18px] text-white'}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Typography style={styles.copyRight}>© 2023 Dictionary. All rights reserved.</Typography>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#006cc7',
    color: '#ffffff',
    padding: '20px 0'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '0 200px'
  },
  column: {
    marginBottom: '20px'
  },
  heading: {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  socialList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  copyRight: {
    textAlign: 'center'
  }
};

export default Footer;
