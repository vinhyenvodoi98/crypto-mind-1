import React from 'react';
import { Row, Col, Avatar, Button, Layout } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import './home.css';

const { Header, Content, Footer } = Layout;

function Home() {
  let history = useHistory();

  return (
    <div>
      <Layout>
        <Header>
          <Row type='flex' justify='space-between'>
            <Col xs={4} />
            <Col xs={4}>
              <Link to='/profile' onClick={() => history.push('/')}>
                <Avatar style={{ backgroundColor: '#87d068' }} icon='user' size='large' />
              </Link>
            </Col>
          </Row>
        </Header>

        <Content>
          <Row gutter={[0, 16]} type='flex' justify='center'>
            <Col xs={24}>
              <Button type='primary' size='large'>
                <Link
                  to={{
                    pathname: '/training',
                    state: { isTraining: true }
                  }}
                >
                  Training Mode
                </Link>
              </Button>
            </Col>

            <Col xs={24}>
              <Button type='danger' size='large'>
                <Link to='/battle'>Battle Mode</Link>
              </Button>
            </Col>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default Home;
