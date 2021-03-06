import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FormField from './FormField'
import { Button } from '../../elements'

/**
 * Sugar for <Form.Field control={Button} />
 * @see Button
 * @see Form
 */
function FormButton(props) {
  const { control } = props
  const rest = getUnhandledProps(FormButton, props)
  const ElementType = getElementType(FormButton, props)
  return <ElementType {...rest} control={control} />
}

FormButton._meta = {
  name: 'FormButton',
  parent: 'Form',
  type: META.TYPES.COLLECTION,
}

FormButton.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A FormField control prop */
  control: FormField.propTypes.control,
}

FormButton.defaultProps = {
  as: FormField,
  control: Button,
}

export default FormButton
