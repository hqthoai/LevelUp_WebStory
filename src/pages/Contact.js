import React from 'react';
import AboutUs from './AboutUs';
import MailBox from '../components/MailBox';

function Contact() {
  return (
    <div>
      <div>
        <AboutUs title="Contact Us" />
      </div>

      <MailBox />
    </div>
  );
}

export default Contact;
