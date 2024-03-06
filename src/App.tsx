import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustUp from './lib'
import { TCustUp } from '../';

function App() {
  const ref1 = React.useRef<TCustUp | undefined>();
  const ref2 = React.useRef<TCustUp | undefined>();

  React.useEffect(() => {

    // ref1.current?.addEventListener("library.init", (e: any) => {
    //   console.log("custup inited 000", e);
    // });

    ref1.current?.addEventListener("file.afterAdded", (e: any) => {
      console.log("hehehe file added instance1", e);
    }, true);

    ref2.current?.setOptions({_custupDefaultUploadSentence: 'hello'})

    ref2.current?.addEventListener("file.afterAdded", (e: any) => {
      console.log("hehehe file added instance2", e);
    });
    
  }, []);

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
        _custupDefaultUploadSentence='this is the first instance'
        ref={ref1}
        on={[
          {
            type: 'library.init',
            callbackFn: (e: any) => {
              console.log("000 custup inited", e);
            }
          },
          {
            type: 'file.beforeAdded',
            callbackFn(e) {
                console.log("file added 000", e);
                
            },
          }
        ]}
      />
      <div>Hello second el</div>
      <CustUp 
        id='second-instance' 
        maximumAllowedFileSize={4000000}
        ui_type="elegant"
        ref={ref2}
      />
      <CustUp 
        id='third-instance' 
        maximumAllowedFileSize={4000000}
        ui_type="default"
      />
      <CustUp 
        id='fourth-instance' 
        ui_type="elegant"
        
        on={[
          {
            type: 'library.init',
            callbackFn (e) {
              console.log("custup before init", e);
            },
          },
          {
            type: 'file.afterAdded',
            callbackFn(e) {
              console.log("hehehe file added instance3", e.detail);
            },
          }
        ]}
      />
    </div>
  );
}

export default App;
