import { useContext, useEffect, useState } from 'react';
// Context
import { GlobalContext } from 'context/GlobalContext';
import { Clients, Login, Header as CustomHeader, Detail } from 'components';
import { Flex, Layout } from 'antd';
// Styles
import './App.css';
import { contentStyle, headerStyle, layoutStyle, siderStyle } from 'styles';

const { Header, Sider, Content } = Layout;

const App = () => {
  const { user } = useContext(GlobalContext);
  const [openModal, setOpenModal] = useState(true);

  const handleOpenModal = (state: boolean) => {
    setOpenModal(state);
  }

  useEffect(() => {
    if (!user) {
      handleOpenModal(true);
    } else {
      handleOpenModal(false);
    }
  }, [user])

  return (
    <>
      {<Login openModal={openModal} handleOpenModal={handleOpenModal} />}
      <Flex
        style={{
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <Clients />
          </Sider>
          <Layout>
            <Header style={headerStyle}><CustomHeader /></Header>
            <Content style={contentStyle}><Detail /></Content>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
}

export default App;