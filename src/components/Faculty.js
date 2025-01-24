import React from 'react';
import './Faculty.css';

const Faculty = () => {
  // ข้อมูลของอาจารย์ที่มีรูปภาพ, ชื่อ และตำแหน่ง
  const facultyMembers = [
    { name: 'น.ส.มยุลีย์ พงษ์บุพศิริกุล', position: 'หัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ', image: '10402.jpg' },
    { name: 'น.ส.ณัฐกานต์ ภิรมณ์', position: 'รองหัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ', image: '10439.jpg' },
    { name: 'น.ส.สวิตตา ประทุม', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10409.jpg' },
    { name: 'น.ส.ธัญญลักษณ์ กันธะ', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10421.jpg' },
    { name: 'นายไพศาล ณ ลำปาง', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10426.jpg' },
    { name: 'น.ส.นาริน พรมมี', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10462.jpg' },
    { name: 'นายเทวฤทธิ์ วงค์ฉายา', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10466.jpg' },
    { name: 'น.ส.วรัญญา อินชัย', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10476.jpg' },
    { name: 'นายณัฐพงษ์ นามคำ', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10477.jpg' },
    { name: 'น.ส.ธนัตชนก แก้วยศ', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10478.jpg' },
    { name: 'นายศรายุทธ ผ่องแผ้ว', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10485.jpg' },
    { name: 'นายสุรชัย เจริญศรี', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10486.jpg' },
    { name: 'น.ส.ธัญญรัตน์ มาลา', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10488.jpg' },
    { name: 'นายสุรเวศม์ สุวรรณดำรงผล', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10489.jpg' },
    { name: 'ว่าที่ร้อยตรีเมธาวิณทร์ เมษาเทียนจันทร์', position: 'ครูเทคโนโลยีสารสนเทศ', image: '10490.jpg' },
    { name: 'นายจิรวัฒน์ จอมมณี', position: 'นักศึกษาฝึกประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศ', image: '13730.jpg' },
    { name: 'นายภคพล กองทุม', position: 'นักศึกษาฝึกประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศ', image: '13731.jpg' },
  ];

  return (
    <section id="faculty" className="faculty">
      <h2>รูปภาพบุคลากร</h2>
      <div className="faculty-list">
        {facultyMembers.map((member, index) => (
          <div key={index} className="faculty-member">
            <img
              className="faculty-member-image"
              src={`./images/${member.image}`}  // เส้นทางของรูปภาพ
              alt={member.name}
            />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
