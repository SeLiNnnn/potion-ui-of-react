import React, {useState} from 'react';
import classNames from 'classnames';

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface BaseAlertProps {
  className?: string;
  type?: AlertType;
  message?: React.ReactNode; // 提示内容
  description?: React.ReactNode; // 更多描述
  closable?: boolean;
  onClose?: Function;
  isShowAlert?: boolean;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    className,
    type,
    message,
    description,
    closable
  } = props;

  let [isShowAlert, setIsShowAlert] = useState(true);

  // alert alert-success alert-error
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
    [`alert-visible`]: !isShowAlert
  });


  function onClose() {
    console.log('内部触发关闭');
    setIsShowAlert(false);
  }


  return (
    <div className={classes}>
      {/*message closeable*/}
      <section className="alert-top">
        <div>{message}</div>
        <div className={closable ? 'alert-close-show' : 'alert-close-visible'} onClick={onClose}>x</div>
      </section>
      {/*description*/}
      <section className={description ? 'alert-description-show' : 'alert-description-visible'}>
        {description}
      </section>
    </div>
  );
};

Alert.defaultProps = {
  type: 'success',
  message: '成功',
  closable: false
};

export default Alert;

