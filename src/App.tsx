import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';
import Alert from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menu-item';


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
        {/*Alert*/}
        <section>
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
        </section>
        {/* Menu*/}
        <section>
          <Menu mode={'vertical'} defaultIndex={0}>
            <MenuItem index={0}>Cool Link</MenuItem>
            <MenuItem index={1} disabled>Cool Link 2</MenuItem>
            <MenuItem index={2}>Cool Link 3</MenuItem>
          </Menu>
          <Menu defaultIndex={0} onSelect={(index) => {
            alert(index);
          }}>
            <MenuItem index={0}>Cool Link</MenuItem>
            <MenuItem index={1} disabled>Cool Link 2</MenuItem>
            <MenuItem index={2}>Cool Link 3</MenuItem>
          </Menu>
        </section>
      </main>
    </div>
  );
}

export default App;
