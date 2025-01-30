import React from 'react';
import { render, screen } from '@testing-library/react';
import CustUp, {TCustUp} from '../';


export const CustUpTestComp = () => {
  const first_instance_ref = React.useRef<TCustUp | null>(null);
  React.useEffect(() => {
    first_instance_ref.current?.setOptions({
      allowed_file_types: [],
    });

    test('setOptions test', () => {
      // @ts-ignore
      expect(first_instance_ref.current?.options.allowed_file_types.length).toBe(0);
    });

  }, [first_instance_ref.current])
  return (
    <div>
      <CustUp 
        id='first-instance' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the first instance'
        allowed_file_types={['jpeg', 'pdf', 'mp3', 'mp4', 'png']}
        // @ts-ignore
        on={[
          {
            type: 'library.init',
            callbackFn(e: any) {
              test('Event subscription with props test', () => {
                // @ts-ignore
                expect(typeof e.target).toBe('object');
              });

              test('Check if options were updated', () => {
                // @ts-ignore
                expect(first_instance_ref.current?.options._custupDefaultUploadSentence).toBe('this is the first instance');
              });

              test('Screen display test', () => {
                const firstInstanceHintText = screen.getByText("this is the first instance");
                expect(firstInstanceHintText).toBeInTheDocument();
              });

              test('Initialization test', () => {
                const firstInstanceId = document.getElementById('first-instance');
                expect(firstInstanceId).toBeInTheDocument();
              });
            },
          }
        ]}
      />
    </div>
  )
}

export const CustUpTest4Comp = () => {
  const first_instance_ref = React.useRef<TCustUp | null>(null);
  
  return (
    <div>
      <CustUp 
        id='test-comp-4' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the test component 4 instance'
        allowed_file_types={['jpeg', 'pdf', 'mp3', 'mp4', 'png']}
      />
    </div>
  )
}

export const CustUpTest2Comp = () => {
  const first_instance_ref = React.useRef<TCustUp | null>(null);

  React.useEffect(() => {
    test('Ref test', () => {
      expect(typeof first_instance_ref).toBe("object");
    });
  }, []);

  return (
    <div>
      <CustUp 
        id='first-instance-for-sec' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the second instance'
      />
    </div>
  )
}

export const CustUpTest3Comp = () => {
  const first_instance_ref = React.useRef<TCustUp | null>(null);
  const second_instance_ref = React.useRef<TCustUp | null>(null);
  const third_instance_ref = React.useRef<TCustUp | null>(null);
  const fourth_instance_ref = React.useRef<TCustUp | null>(null);
  const fifth_instance_ref = React.useRef<TCustUp | null>(null);
  const sixth_instance_ref = React.useRef<TCustUp | null>(null);

  React.useEffect(() => {
    test('First instance test', () => {
      expect(typeof first_instance_ref.current).toBe("object");
    });
    test('Second instance test', () => {
      expect(typeof second_instance_ref.current).toBe("object");
    });
    test('Third instance test', () => {
      expect(typeof third_instance_ref.current).toBe("object");
    });
    test('Fourth instance test', () => {
      expect(typeof fourth_instance_ref.current).toBe("object");
    });
    test('Fifth instance test', () => {
      expect(typeof fifth_instance_ref.current).toBe("object");
    });
    test('Sixth instance test', () => {
      expect(typeof sixth_instance_ref.current).toBe("object");
    });
  }, [])

  return (
    <div>
      <CustUp 
        id='instance-1' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the instance-1 of multiple instances'
      />
      <CustUp 
        id='instance-2' 
        ui_type='bare'
        ref={second_instance_ref}
      />
      <CustUp 
        id='instance-3' 
        ui_type='detached'
        ref={third_instance_ref}
      />
      <CustUp 
        id='instance-4' 
        ui_type='profilePicture'
        ref={fourth_instance_ref}
      />
      <CustUp 
        id='instance-5' 
        ui_type='resumeUploaderUI'
        ref={fifth_instance_ref}
      />
      <CustUp 
        id='instance-6' 
        ui_type='elegant'
        ref={sixth_instance_ref}
      />
    </div>
  )
}

render(
  <div>
    <CustUpTestComp />
    <CustUpTest2Comp />
    <CustUpTest3Comp />
  </div>
);


test('Initialization and screen test', () => {
  render(
    <div>
      <CustUpTest4Comp />
    </div>);

  const firstInstanceHintText = screen.getByText("this is the test component 4 instance");
  expect(firstInstanceHintText).toBeInTheDocument();

  const firstInstanceId = document.getElementById('test-comp-4');
  expect(firstInstanceId).toBeInTheDocument();
  
});
