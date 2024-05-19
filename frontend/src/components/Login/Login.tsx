// Redux
import { useSelector } from 'react-redux';
// Components
import { Button, Input, Modal } from "antd";
// Styles
import "./styles.css";
import { useContext, useEffect, useState } from "react";
// Selectors
import { selectUser, selectLoading, selectError, login } from "../../redux/features/userSlice/userSlice";
// Types
import { UserLogin } from 'redux/features/userSlice/types/UserLogin';
// Hooks
import { useAppDispatch } from 'hooks/useAppDispatch';
// Context
import { GlobalContext } from 'context/GlobalContext';
import { getClients } from '../../redux/features/clientsSlice/clientsSlice';

interface Props {
  openModal: boolean;
  handleOpenModal: (open: boolean) => void;
}

const Login = ({
  openModal,
  handleOpenModal,
}: Props) => {
  const dispatch = useAppDispatch();
  const { setUser } = useContext(GlobalContext)
  const [canClose, setCanClose] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const isLoading = loading === 'loading';
  const error = useSelector(selectError);

  const handleChange = (setState: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }

  const handleCanClose = (state: boolean) => {
    setCanClose(state);
  }

  const handleSendLogin = async () => {
    console.log('handleSendLogin')
    const data: UserLogin = {
      email,
      password,
    }
    await dispatch(login(data));
    handleCanClose(true);
  }

  useEffect(() => {
    if (!isLoading && !error && user && canClose) {
      handleOpenModal(false);
      setUser(user);
      dispatch(getClients(user.token))
    } else {
      setCanClose(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, error, user, canClose])

  return (
    <Modal
      open={openModal}
      title="Login"
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
      closable={false}
    >
      <div className="login-container">
        <Input
          placeholder="Email"
          value={email}
          onChange={handleChange(setEmail)}
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={handleChange(setPassword)}
        />
        <Button
          type="primary"
          onClick={() => handleSendLogin()}
          loading={isLoading}
        >
          Login
        </Button>
      </div>
    </Modal>
  );
}

export default Login;