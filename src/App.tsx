import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          target='_blank'
        >Link Btn</Button>
        <Button
          btnType={ButtonType.Link}
          href="https:www.baidu.com"
          disabled
        >Disabled Link</Button>
      </header>
    </div>
  );
}

export default App;
