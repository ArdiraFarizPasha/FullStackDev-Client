import axios from 'axios'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
  ButtonContainer,
  Container, FormContainer, MainTitle, PersonalFormContainer, TitleContainer, TitleForm
} from 'pages/personal/personalStyle'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { TextInput, Dropdown } from './components/inputForm'
import './personalStyle'
import { replace } from 'connected-react-router'
import { setUserId } from 'pages/form/slice'






function PersonalForm() {

  const dispatch = useDispatch()
  const handleSubmit = (values, dispatch) => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/personal',
      data: values
    })
    .then(({data}) => {
      dispatch(setUserId(data.id))
      dispatch(replace('/form'))
    })
    .catch(err => {
      alert(err)
    })
  }

  const hospitalDropdown = [
    { key: 'none', text: 'Select Hospital', value: '' },
    { key: 'kuta', text: 'BIMC Hospital Kuta', value: 'BIMC Hospital Kuta' },
    { key: 'nusa', text: 'BIMC Hospital Nusa Dua', value: 'BIMC Hospital Nusa Dua' },
    { key: 'smg', text: 'MRCCC Siloam Hospital Semanggi', value: 'MRCCC Siloam Hospital Semanggi' },
    { key: 'syu', text: 'RSU Syubbanul Wathon', value: 'RSU Syubbanul Wathon' }
  ];

  const gender = [
    { key: 'none', text: 'Select Gender', value: '' },
    { key: 'male', text: 'Male', value: 'Male' },
    { key: 'female', text: 'Female', value: 'Female' }
  ]

  return (
    <Container>
      <PersonalFormContainer>
        <FormContainer>
          <TitleContainer>
            <MainTitle>
              <FormattedMessage
                id="header"
              />
            </MainTitle>
            <TitleForm>
              <FormattedMessage
                id="personal-form-title"
              />
            </TitleForm>
          </TitleContainer>
          <div>
            <Form
              onSubmit={values => {
                handleSubmit(values, dispatch)
              }}
              render={({ handleSubmit }) => (
                <form
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                  onSubmit={handleSubmit}
                >
                  {/* <div> */}
                  <Field
                    name="fullName"
                    component={TextInput}
                    placeholder="Full Name*"
                    type="text"
                    minLength='3'
                  />
                  {/* </div> */}
                  {/* <div> */}
                  <Field name="gender" options={gender} >
                    {({ input, meta, options }) => {
                      return (
                        <Dropdown
                          options={options}
                          name={input.name}
                          onChange={(value) => input.onChange(value)}
                        />
                      )
                    }}
                  </Field>
                  {/* </div> */}
                  {/* <div> */}
                  <Field
                    name="dateOfBirth"
                    placeholder="Date of Birth (dd/mm/yyyy)*"
                    component={TextInput}
                    type="date"
                    max={new Date()}
                  />
                  {/* </div>
                  <div> */}
                  <Field
                    name="email"
                    component={TextInput}
                    placeholder="Email"
                    type="text"
                  />
                  {/* </div>
                  <div> */}
                  <Field
                    name="phoneNumber"
                    component={TextInput}
                    placeholder="Handphone number*"
                    type="number"
                  />
                  {/* </div>
                  <div> */}
                  <Field name="visitedHospital" options={hospitalDropdown} >
                    {({ input, meta, options }) => {
                      return (
                        <Dropdown
                          options={options}
                          name={input.name}
                          onChange={(value) => input.onChange(value)}
                        />
                      )
                    }}
                  </Field>
                  {/* </div> */}
                  <div
                    style={{
                      padding: '1rem'
                    }}
                  >
                    <button
                      type="submit"
                    >
                      Submit
                      </button>
                  </div>
                </form>
              )}
            />
          </div>
        </FormContainer>

      </PersonalFormContainer>
    </Container>
  );
}

export default PersonalForm;

