import { useContext } from 'react';
// Components
import { DatePicker } from 'antd';
import { Typography } from 'antd';
// Style
import './style.css'
// Context
import { GlobalContext } from 'context/GlobalContext';
// Dayjs
import dayjs, { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;
const DATE_FORMAT = 'DD/MM/YYYY';

const Header = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(GlobalContext);

  const titleStyle = {
    marginBlockStart: '0',
    marginBlockEnd: '0',
  }

  const handleDateChange = (dates: Dayjs[]) => {
    const formatStartDate = dayjs(dates[0]);
    const formatEndDate = dayjs(dates[1]);
    setStartDate(formatStartDate);
    setEndDate(formatEndDate);
  }

  return (
    <div className="header-container">
      <div className='header-title'>
        <Typography.Title style={titleStyle} level={5}>Detalle</Typography.Title>
        <Typography.Title style={titleStyle} level={5} type='secondary'>Dashboards</Typography.Title>
      </div>
      <RangePicker
        format={DATE_FORMAT}
        style={{ width: '20rem' }}
        value={[startDate, endDate]}
        onChange={handleDateChange}
      />
    </div>
  )
}

export default Header;