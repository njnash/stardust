import React from 'react'
import { Button, Divider, Form } from 'stardust'

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const FormSizeExample = () => (
  <div>
    {sizes.map(size => (
      <Form size={size} key={size}>
        <Form.Group widths='equal'>
          <Form.Field label='First name' control='input' placeholder='First name' />
          <Form.Field label='Last name' control='input' placeholder='Last name' />
        </Form.Group>
        <Button type='submit'>Submit</Button>
        <Divider hidden />
      </Form>
    ))}
  </div>
)
export default FormSizeExample
