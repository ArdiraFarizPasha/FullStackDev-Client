import axios from 'axios'
import React from 'react'
import { useIntl } from 'react-intl'
import {
  Container, FormContainer, MainTitle, PersonalFormContainer, TitleContainer, TitleForm
} from 'pages/personal/personalStyle'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { TextInput, Dropdown } from './components/inputForm'
import './personalStyle'
import { replace } from 'connected-react-router'
import { setUserId, setUserData } from 'pages/form/slice'
import Translate from 'i18n/translate'





function PersonalForm() {

  const dispatch = useDispatch()
  const intl = useIntl()
  const handleSubmit = (values, dispatch) => {
    dispatch(setUserData(values))
    axios({
      method: 'post',
      url: 'http://localhost:5000/personal',
      data: values
    })
      .then(({ data }) => {
        dispatch(setUserId(data.id))
        dispatch(replace('/form'))
      })
      .catch(err => {
        alert(err)
      })
  }

  const hospitalDropdown = [
    { key: 'none', text: intl.formatMessage({ id: 'visited-hospital' }), value: '' },
    { key: 'kuta', text: 'BIMC Hospital Kuta', value: 'BIMC Hospital Kuta' },
    { key: 'nusa', text: 'BIMC Hospital Nusa Dua', value: 'BIMC Hospital Nusa Dua' },
    { key: 'smg', text: 'MRCCC Siloam Hospital Semanggi', value: 'MRCCC Siloam Hospital Semanggi' },
    { key: 'syu', text: 'RSU Syubbanul Wathon', value: 'RSU Syubbanul Wathon' }
  ];

  const gender = [
    { key: 'none', text: intl.formatMessage({ id: 'gender' }), value: '' },
    { key: 'male', text: intl.formatMessage({ id: 'male' }), value: 'Male' },
    { key: 'female', text: intl.formatMessage({ id: 'female' }), value: 'Female' }
  ]

  // const getValidator = isRequired =>
  // isRequired ? value => (value ? undefined : "Required") : () => {};

  return (
    <Container>
      <PersonalFormContainer>
        <FormContainer>
          <TitleContainer>
            <MainTitle>
              {Translate("header")}
            </MainTitle>
            <TitleForm>
              {Translate("personal-form-title")}
            </TitleForm>
          </TitleContainer>
          <div>
            <Form
              onSubmit={values => {
                handleSubmit(values, dispatch)
              }}
              validate={values => {
                const errors = {};
                if (!values.fullName) {
                  errors.fullName = "Required";
                }
                if (!values.phoneNumber) {
                  errors.phoneNumber = "Required";
                }
                if (!values.visitedHospital) {
                  errors.visitedHospital = "Required";
                }
                if (!values.gender) {
                  errors.gender = "Required";
                }
                if (!values.dateOfBirth) {
                  errors.dateOfBirth = "Required";
                }
                return errors;
              }}
              render={({ handleSubmit, submitting, values }) => (
                <form
                  onSubmit={handleSubmit}
                >
                  <div
                    style={{
                      display: 'grid',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      gridTemplateColumns: '700px 700px'
                    }}
                  >
                    <div>
                      <Field
                        name="fullName"
                        component={TextInput}
                        placeholder='fullname'
                        type="text"
                        minLength='3'
                        allowNull='false'
                        // validate={getValidator(values.fullName)}
                        // key={values.fullName ? 1 : 0}
                      />
                    </div>
                    <div>
                      <Field name="gender" options={gender} allowNull='false' >
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
                    </div>
                    <div>
                      <Field
                        allowNull='false'
                        name="dateOfBirth"
                        placeholder='date-of-birth'
                        component={TextInput}
                        type="date"
                        max={new Date()}
                      />
                    </div>
                    <div>
                      <Field
                        name="email"
                        component={TextInput}
                        placeholder='email'
                        type="text"
                      />
                    </div>
                    <div>
                      <Field
                        allowNull='false'
                        name="phoneNumber"
                        component={TextInput}
                        placeholder='handphone-number'
                        type="number"
                      />
                    </div>
                    <div>
                      <Field name="visitedHospital" options={hospitalDropdown} allowNull='false' >
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
                    </div>
                    <div
                      style={{
                        padding: '1rem'
                      }}
                    >
                      <button
                        type="submit"
                        disabled={submitting}
                      >
                        {Translate('submit')}
                      </button>
                    </div>
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

