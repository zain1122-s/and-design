import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { Card, Row, Col, Spin } from 'antd';
import MainLayout from '../Layout';
function Profile() {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, [id]);
  if (loading) return <Spin size="large" />;
  if (error) return <p>{error}</p>;
  return (
    <MainLayout>
      <div className="card">
        <Link to="/" className="go-back-link">
           Back to HomePage
        </Link>
        <Card
          hoverable
          style={{ width: 240, marginTop: 20 }}
          cover={<img alt={profileData.name} src={profileData.image } />}
        >
          <Row gutter={[16, 16]}>
            <Col span={12}><strong>Name:</strong></Col>
            <Col span={12}>{profileData.name}</Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}><strong>Status:</strong></Col>
            <Col span={12}>{profileData.status}</Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}><strong>Species:</strong></Col>
            <Col span={12}>{profileData.species}</Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}><strong>Gender:</strong></Col>
            <Col span={12}>{profileData.gender}</Col>
          </Row>
        </Card>
      </div>
    </MainLayout>
  );
}
export default Profile;






