import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';
import Alert from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menu-item';
import SubMenu from './components/Menu/sub-menu';


function App() {

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
            onClose={(status:boolean) => {
              console.log(status, '执行了嘛');
            }}
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
          <Menu mode={'vertical'} defaultIndex={'0'} defaultOpenMenus={['2']}>
            <MenuItem index={'1'}>Cool Link</MenuItem>
            <MenuItem index={'2'} disabled>Cool Link 2</MenuItem>
            <SubMenu title="dropdown">
              <MenuItem index={'3-0'}>dropdown 1</MenuItem>
              <MenuItem index={'3-1'}>dropdown 2</MenuItem>
            </SubMenu>
            <MenuItem index={'2'}>Cool Link 3</MenuItem>
            {/*<div>cool link 4</div>*/}
          </Menu>
          <Menu onSelect={(index) => {
            alert(index);
          }}>
            <MenuItem>Cool Link</MenuItem>
            <MenuItem disabled>Cool Link 2</MenuItem>
            <SubMenu title="dropdown">
              <MenuItem>dropdown 1</MenuItem>
              <MenuItem>dropdown 2</MenuItem>
            </SubMenu>
            <MenuItem>Cool Link 3</MenuItem>
          </Menu>
        </section>
      </main>
    </div>
  );
}

export default App;
