import React from 'react';
import { Card, Row, Col, Flex } from 'antd';
import { CSSProperties } from 'react';
import { TitleBar } from '@src/components/shared';

interface CardData {
  title: string;
  value: number;
  unit: string;
}
const cardData: CardData[] = [
  { title: 'จำนวนผู้เข้าแข่งขัน', value: 150, unit: '' },
  { title: 'จำนวนรายการแข่งขัน', value: 25, unit: 'คน' },
  { title: 'รายการที่ลง', value: 24, unit: '' },
];
const cardStyle: CSSProperties = {
  textAlign: 'center',
  borderRadius: '16px',
  backgroundColor: '#f8f9fa',
  minHeight: '170px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
const titleStyle: CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
};
const valueStyle: CSSProperties = {
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#000',
};

const Analytic: React.FC = () => {
  return (
    <Flex vertical>
      <TitleBar title={'ภาพรวม'} subTitle={'สวัสดีตอนเที่ยง!'} />

      <div style={{ height: '25px' }} />
      <Row gutter={16} justify="space-between">
        {cardData.map((data, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <Card style={cardStyle} bodyStyle={{ padding: '20px' }}>
              <div style={titleStyle}>{data.title}</div>
              <div style={valueStyle}>
                {data.value} {data.unit}
              </div>
            </Card>
          </Col>
        ))}
        <Col xs={24} sm={12} md={6}></Col>
        <Col xs={24} sm={12} md={6}></Col>
        {/* <Col xs={24} sm={12} md={6}>
          <TaskCard />
        </Col> */}
      </Row>
    </Flex>
  );
};
export default Analytic;
