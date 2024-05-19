import { useContext, useEffect, useState } from 'react';
// Slice
import { selectClients, selectError, selectLoading } from '../../redux/features/clientsSlice/clientsSlice';
// Styles
import "./style.css";
import { useSelector } from 'react-redux';
import { List, Spin, Typography } from 'antd';
import { Client } from 'types/Client';
// Context
import { GlobalContext } from 'context/GlobalContext';

const Clients = () => {
  const { setClientSelected, clientSelected } = useContext(GlobalContext);
  const clients = useSelector(selectClients);
  const loading = useSelector(selectLoading);
  const isLoading = loading === 'loading';
  const error = useSelector(selectError);
  const [clientList, setClientList] = useState<Client[]>([]);

  const handleSelectClient = (client: Client) => {
    setClientSelected(client);
  }

  useEffect(() => {
    if (clients && !isLoading && !error) {
      setClientList(clients);
    }
  }, [clients, isLoading, error])

  return (
    <div className="clients-container">
      {
        isLoading ? (
          <Spin
            size="large"
            tip="Loading..."
            style={{ marginTop: '20px' }}
          />
        ) : (
          <div
            className="clients-list-container"
          >
            <Typography.Title level={3}>Clientes</Typography.Title>
            <List
              size="small"
              bordered
              dataSource={clientList}
              renderItem={(item) => <List.Item
                onClick={() => handleSelectClient(item)}
                className="clients-list-item"
                style={{
                  backgroundColor: clientSelected && clientSelected.id === item.id ? '#dbdbdb' : 'transparent'
                }}
              >
                {item.name}
              </List.Item>
              }
              className='clients-list'
            />
          </div>
        )
      }
    </div>
  );
}

export default Clients;