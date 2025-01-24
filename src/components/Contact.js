import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>ติดต่อเรา</h2>
      <p>ที่อยู่: 2 ถนน สุขเกษม ตำบลช้างเผือก เมือง เชียงใหม่ 50300</p>
      <p>เบอร์โทรศัพท์: 05-213-061</p>
      <img src="images/QR.jpg" alt="QR Code" className="qr-code" />
    </section>
  );
};

export default Contact;
