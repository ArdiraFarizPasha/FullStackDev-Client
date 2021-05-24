import React from 'react'
import 'pages/personal/personal.css'

export const TextInput = (props) => {
  // console.log(props, "<< props");
  const { input } = props
  return (
    <div style={{
      padding: '1rem'
    }}>
      <input
        {...input}
        style={{
          width: '100%'
        }}
        // type={props.input.type}
        // name={props.input.name}
        minLength={props.minLength}
        placeholder={props.placeholder}
        max={new Date().toISOString().split("T")[0]}
      />
    </div>
  )
}

export const Dropdown = (props) => {
  let realData = []
  for(let i = 1; i < props.options.length; i++){
    realData.push(props.options[i])
  }
  return (
    <div
      style={{
        padding: '1rem'
      }}
    >
      <select name={props.name} onChange={props.onChange}>
        <option disabled selected>{props.options[0].text}</option>

        {realData.map((x) => {
          return (
            <option key={x.key} value={x.value}>{x.text}</option>
          )
        })}

      </select>
    </div >
  )
};
