import React from 'react'
import 'pages/personal/personal.css'
import { useIntl } from 'react-intl'
import './inputForm.css'

export const TextInput = (props) => {
  const { input } = props
  const intl = useIntl()
  return (
    <div style={{
      padding: '1rem'
    }}>

      <input
        {...input}
        style={{
          width: '100%',
          height: '50px',
          borderRadius: '1rem',
          borderColor: 'white'
        }}
        minLength={props.minLength}
        placeholder={intl.formatMessage({ id: props.placeholder })}
        max={new Date().toISOString().split("T")[0]}
      />
    </div>
  )
}

export const Dropdown = (props) => {
  let realData = []
  for (let i = 1; i < props.options.length; i++) {
    realData.push(props.options[i])
  }
  return (
    <div className="container">
      {props.name === 'gender' ?
        <select className="select1" name={props.name} onChange={props.onChange}>
          <option disabled selected>
            {props.options[0].text}
          </option>
          {realData.map((x) => {
            return (
              <option key={x.key} value={x.value}>
                {x.text}
              </option>
            )
          })}
        </select>
        :
        <select className="select2" name={props.name} onChange={props.onChange}>
          <option disabled selected>
            {props.options[0].text}
          </option>
          {realData.map((x) => {
            return (
              <option key={x.key} value={x.value}>
                {x.text}
              </option>
            )
          })}
        </select>}
    </div>
  )
};
