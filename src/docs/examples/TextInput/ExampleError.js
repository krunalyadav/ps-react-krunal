import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        label="First Name"
        name="firstName"
        onChange={() => {}}
        required
        error="First Name is required"
      />
    );
  }
}
