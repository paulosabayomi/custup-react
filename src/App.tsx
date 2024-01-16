import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustUp from './lib'
import { TCustUp } from './lib';

function App() {
  const ref1 = React.useRef<TCustUp | undefined>()
  const ref2 = React.useRef<TCustUp | undefined>()

  React.useEffect(() => {

    ref1.current?.on("file.afterAdded", (e: any) => {
      console.log("hehehe file added", ref1.current);
    });

    ref2.current?.on("file.afterAdded", (e: any) => {
      console.log("hehehe file added", ref1.current);
    });
    
  }, [ref1.current, ref2.current]);

  const handleClick = React.useCallback(() => {
    ref1.current!.launch_dropbox_source()
    ref2.current?.launch_dalle_source()
  }, [ref1.current, ref2.current])

  return (
    <div className="App" style={{backgroundColor: "yellow", display: "flex", justifyContent: "center", flexDirection: 'column'}}>
      <div>
        <button onClick={handleClick}>hello click</button>
      </div>
      <CustUp 
        id='first-instance' 
        maximumAllowedFileSize={4000000}
        ui_type="default"
        ref={ref1}
      />
      <div>Hello second el</div>
      <CustUp 
        id='second-instance' 
        maximumAllowedFileSize={4000000}
        ui_type="default"
        ref={ref2}
      />
      <CustUp 
        id='third-instance' 
        maximumAllowedFileSize={4000000}
        ui_type="default"
      />
      <CustUp 
        id='fourth-instance' 
        ui_type="default"
      />
    </div>
  );
}

export default App;
