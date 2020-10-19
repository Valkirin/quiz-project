import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const { alerts } = useSelector((state) => state.notifications);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [alerts]);

  const onClose = () => {
    setShow(false);
  };

  const color = alert.type === 'success' ? 'teal' : 'tomato';
  const iconUrl = alert.type === 'success' ? successIcon : errorIcon;

  return show ? (
    <div className={`${alert.type || 'error'}`}>
      <Content>
        <Icon icon={iconUrl} color={color} size='20px' />
        <Message>{alert.message || ''}</Message>
      </Content>
      <Icon
        icon={closeIcon}
        color={color}
        size='24px'
        onClick={onClose}
        style={{ cursor: 'pointer' }}
      />
    </div>
  ) : null;
};

export default Alert;
