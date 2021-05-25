import React from 'react'
import { FormattedMessage } from 'react-intl'

function Translate(id) {
  return (
    <FormattedMessage id={id} />
  )
}

export default Translate