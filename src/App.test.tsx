import React from 'react';
import { render, screen } from '@testing-library/react';
import CustUp from '../';


export const CustUpTestComp = () => {
  const first_instance_ref = React.useRef();
  return (
    <div>
      <CustUp 
        id='first-instance' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the first instance'
      />
    </div>
  )
}

export const CustUpTest2Comp = () => {
  const first_instance_ref = React.useRef();

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
  const first_instance_ref = React.useRef();

  return (
    <div>
      <CustUp 
        id='instance-1' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the instance-1 of multiple instances'
      />
      <CustUp 
        id='instance-2' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the instance-2 of multiple instances'
      />
      <CustUp 
        id='instance-3' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the instance-3 of multiple instances'
      />
      <CustUp 
        id='instance-4' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the instance-4 of multiple instances'
      />
      <CustUp 
        id='instance-5' 
        ref={first_instance_ref}
        _custupDefaultUploadSentence='this is the instance-5 of multiple instances'
      />
    </div>
  )
}



test('Initialization test', () => {
  render(
    <div>
      <CustUpTestComp />
    </div>);
  const firstInstanceId = document.getElementById('first-instance')
  expect(firstInstanceId).toBeInTheDocument();
});

test('Screen display test', () => {
  render(
    <div>
      <CustUpTestComp />
    </div>);
  const firstInstanceHintText = screen.getByText("this is the first instance");
  expect(firstInstanceHintText).toBeInTheDocument();
});


render(
  <div>
    <CustUpTest2Comp />
  </div>
);

test('Multiple instances Screen display test', () => {
  render(
    <div>
      <CustUpTest3Comp />
    </div>);
  const firstInstanceHintText = screen.getByText("this is the instance-1 of multiple instances");
  expect(firstInstanceHintText).toBeInTheDocument();
  const secondInstanceHintText = screen.getByText("this is the instance-2 of multiple instances");
  expect(secondInstanceHintText).toBeInTheDocument();
  const thirdInstanceHintText = screen.getByText("this is the instance-3 of multiple instances");
  expect(thirdInstanceHintText).toBeInTheDocument();
  const fourthInstanceHintText = screen.getByText("this is the instance-4 of multiple instances");
  expect(fourthInstanceHintText).toBeInTheDocument();
  const fifthInstanceHintText = screen.getByText("this is the instance-5 of multiple instances");
  expect(fifthInstanceHintText).toBeInTheDocument();
});
