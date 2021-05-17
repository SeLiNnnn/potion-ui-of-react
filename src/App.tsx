import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';
import Alert from './components/Alert/alert';


function App() {

  function handleCloseAlert() {

  }

  return (
    <div className="App">
      <header className="App-header">
        {/*Button*/}
        <Button
          autoFocus
          onClick={(e) => {
            e.preventDefault();
            alert(123);
          }}
          className="custom"
        >Hello Btn</Button>
        <Button
          disabled
        >Disabled Btn</Button>
        <Button
          size={ButtonSize.Large}
          btnType={ButtonType.Primary}
        >Large Primary</Button>
        <Button
          size={ButtonSize.Small}
          btnType={ButtonType.Danger}
        >Small Danger</Button>
        <Button
          btnType={ButtonType.Link}
          href="https:www.baidu.com"
          target="_blank"
        >Link Btn</Button>
        <Button
          btnType={ButtonType.Link}
          href="https:www.baidu.com"
          disabled
        >Disabled Link</Button>
      </header>
      <main>
        <Alert
          message="提示：操作成功"
          type="success"
          closable={true}
          description="这里是描述内容，表示操作真的成功了"
          onClose={handleCloseAlert}
        />
        <Alert
          className="alert-custom"
          message="失败！操作错误"
          type="danger"
          description="这里是描述内容，表示操作真的失败了"
        />
        <Alert
          className="alert-custom"
          message="警告⚠️"
          type="warning"
        />
        <Alert
          className="alert-custom"
          message="默认"
          type="default"
        />
      </main>
    </div>
  );
}

export default App;
