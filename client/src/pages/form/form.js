import axios from 'axios'
import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import {
  ButtonContainer,
  Container, FormContainer, MainTitle, PersonalFormContainer, TitleContainer, TitleForm
} from 'pages/personal/personalStyle'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { replace } from 'connected-react-router'
import './form.css'
import { setSymptoms, setTestResult, setUserId } from './slice'

function TestForm() {

  const dispatch = useDispatch()
  const { form } = useSelector((state => state))

  const handleSubmitTestResult = (values, dispatch) => {
    // values => testResult : 'yes'
    dispatch(setTestResult(values))
    dispatch(replace('/form'))
  }

  useEffect(() => {
    console.log(form, "<< form use effect");
  }, [form])

  const handleSubmitSymptomsTest = async (values, dispatch) => {
    // values => semua isi symptoms "yes"/"no"
    let temp = values
    temp = {
      ...temp,
      testResult: form.symptoms.testResult,
      userId: form.symptoms.userId
    }
    await axios({
      method: 'post',
      url: 'http://localhost:5000/form',
      data: temp
    })
      .then(({ data }) => {
        console.log(data, "<< data");
        dispatch(replace('/complete'))
      })
      .catch(err => {
        alert(err)
      })
  }

  return (
    <div>
      {!form.symptoms.testResult && !form.symptoms.fever ?
        <Form
          onSubmit={values => {
            handleSubmitTestResult(values, dispatch)
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
              <div style={{
                padding: '2rem'
              }}>
                <FormattedMessage
                  id="form-antigen"
                />
              </div>
              <Field
                name="testResult"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="buttonYes" name="testResult" value="yes" />
                    <label for="buttonYes">Yes</label>

                    <input {...input} type="radio" id="buttonNo" name="testResult" value="no" />
                    <label for="buttonNo">No</label>
                  </div>
                )}
              />

              <div
                style={{
                  padding: '2rem'
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
        : null}
      {form.symptoms.testResult && !form.symptoms.fever ?
        <Form
          onSubmit={values => {
            handleSubmitSymptomsTest(values, dispatch)
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
              <div style={{
                paddingBottom: '3rem'
              }}>
                <FormattedMessage
                  id="symptoms-14-day"
                />
              </div>
              <br />
              <FormattedMessage
                id="fever"
              />
              <Field
                name="fever"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesFever" name="fever" value="yes" />
                    <label for="YesFever">Yes</label>

                    <input {...input} type="radio" id="NoFever" name="fever" value="no" />
                    <label for="NoFever">No</label>
                  </div>
                )}
              />
              <FormattedMessage
                id="breath"
              />
              <Field
                name="breathingDifficulty"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesBreath" name="breathingDifficulty" value="yes" />
                    <label for="YesBreath">Yes</label>

                    <input {...input} type="radio" id="NoBreath" name="breathingDifficulty" value="no" />
                    <label for="NoBreath">No</label>
                  </div>
                )}
              />
              <FormattedMessage
                id="cough"
              />
              <Field
                name="cough"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesCough" name="cough" value="yes" />
                    <label for="YesCough">Yes</label>

                    <input {...input} type="radio" id="NoCough" name="cough" value="no" />
                    <label for="NoCough">No</label>
                  </div>
                )}
              />
              <FormattedMessage
                id="runnyNose"
              />
              <Field
                name="runnyNose"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesRunnyNose" name="runnyNose" value="yes" />
                    <label for="YesRunnyNose">Yes</label>

                    <input {...input} type="radio" id="NoRunnyNose" name="runnyNose" value="no" />
                    <label for="NoRunnyNose">No</label>
                  </div>
                )}
              />
              <FormattedMessage
                id="loseSmell"
              />
              <Field
                name="losingSenseSmell"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesSmell" name="losingSenseSmell" value="yes" />
                    <label for="YesSmell">Yes</label>

                    <input {...input} type="radio" id="NoSmell" name="losingSenseSmell" value="no" />
                    <label for="NoSmell">No</label>
                  </div>
                )}
              />
              <FormattedMessage
                id="loseTaste"
              />
              <Field
                name="losingSenseTaste"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesTaste" name="losingSenseTaste" value="yes" />
                    <label for="YesTaste">Yes</label>

                    <input {...input} type="radio" id="NoTaste" name="losingSenseTaste" value="no" />
                    <label for="NoTaste">No</label>
                  </div>
                )}
              />
              <FormattedMessage
                id="bodyAches"
              />
              <Field
                name="bodyAches"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesBodyAches" name="bodyAches" value="yes" />
                    <label for="YesBodyAches">Yes</label>

                    <input {...input} type="radio" id="NoBodyAches" name="bodyAches" value="no" />
                    <label for="NoBodyAches">No</label>
                  </div>
                )}
              />
              <FormattedMessage
                id="vomit"
              />
              <Field
                name="vomitDiarrhea"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesVomit" name="vomitDiarrhea" value="yes" />
                    <label for="YesVomit">Yes</label>

                    <input {...input} type="radio" id="NoVomit" name="vomitDiarrhea" value="no" />
                    <label for="NoVomit">No</label>
                  </div>
                )}
              />

              <div>
                <input type="checkbox" id="checkbox" name="checkbox" />
                <label for="vehicle1">
                  <FormattedMessage
                    id="checkbox"
                  />
                </label>
              </div>

              <div
                style={{
                  padding: '1rem'
                }}
              >
                <button>
                  Submit
                </button>
              </div>
            </form>
          )}
        />
        : null}
    </div>

  );
}

export default TestForm;

