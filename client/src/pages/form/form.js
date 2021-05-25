import axios from 'axios'
import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { replace } from 'connected-react-router'
import './form.css'
import { setSymptoms, setTestResult } from './slice'
import Translate from 'i18n/translate'

function TestForm() {

  const dispatch = useDispatch()
  const { form } = useSelector((state => state))

  const handleSubmitTestResult = (values, dispatch) => {
    // values => testResult : 'yes'
    dispatch(setTestResult(values))
    dispatch(replace('/form'))
  }

  useEffect(() => {
  }, [form])

  const handleSubmitSymptomsTest = async (values, dispatch) => {
    // values => semua isi symptoms "yes"/"no"
    dispatch(setSymptoms(values))
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
          validate={values => {
            const errors = {};
            if (!values.testResult) {
              errors.testResult = "Required";
            }
            return errors;
          }}
          render={({ handleSubmit, values, submitting }) => (
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
                    <label for="buttonYes">{Translate('yes')}</label>

                    <input {...input} type="radio" id="buttonNo" name="testResult" value="no" />
                    <label for="buttonNo">{Translate('no')}</label>
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
                  disabled={submitting}
                >
                  {Translate('submit')}
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
          validate={values => {
            const errors = {};
            if (!values.fever) {
              errors.fever = "Required";
            }
            if (!values.breathingDifficulty) {
              errors.breathingDifficulty = "Required";
            }
            if (!values.cough) {
              errors.cough = "Required";
            }
            if (!values.runnyNose) {
              errors.runnyNose = "Required";
            }
            if (!values.losingSenseSmell) {
              errors.losingSenseSmell = "Required";
            }
            if (!values.losingSenseTaste) {
              errors.losingSenseTaste = "Required";
            }
            if (!values.bodyAches) {
              errors.bodyAches = "Required";
            }
            if (!values.vomitDiarrhea) {
              errors.vomitDiarrhea = "Required";
            }
            return errors;
          }}
          render={({ handleSubmit, submitting }) => (
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
                  id="symptoms-14-day"
                />
              </div>
              <br />
              <div style={{
                paddingLeft: '2rem',
              }}>
                <FormattedMessage
                  id="fever"
                />
              </div>
              <Field
                name="fever"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesFever" name="fever" value="yes" />
                    <label for="YesFever">{Translate('yes')}</label>

                    <input {...input} type="radio" id="NoFever" name="fever" value="no" />
                    <label for="NoFever">{Translate('no')}</label>
                  </div>
                )}
              />
              <div style={{
                paddingLeft: '2rem'
              }}>
                <FormattedMessage
                  id="breathingDifficulty"
                />
              </div>
              <Field
                name="breathingDifficulty"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesBreath" name="breathingDifficulty" value="yes" />
                    <label for="YesBreath">{Translate('yes')}</label>

                    <input {...input} type="radio" id="NoBreath" name="breathingDifficulty" value="no" />
                    <label for="NoBreath">{Translate('no')}</label>
                  </div>
                )}
              />
              <div style={{
                paddingLeft: '2rem'
              }}>
                <FormattedMessage
                  id="cough"
                />
              </div>
              <Field
                name="cough"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesCough" name="cough" value="yes" />
                    <label for="YesCough">{Translate('yes')}</label>

                    <input {...input} type="radio" id="NoCough" name="cough" value="no" />
                    <label for="NoCough">{Translate('no')}</label>
                  </div>
                )}
              />
              <div style={{
                paddingLeft: '2rem'
              }}>
                <FormattedMessage
                  id="runnyNose"
                />
              </div>
              <Field
                name="runnyNose"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesRunnyNose" name="runnyNose" value="yes" />
                    <label for="YesRunnyNose">{Translate('yes')}</label>

                    <input {...input} type="radio" id="NoRunnyNose" name="runnyNose" value="no" />
                    <label for="NoRunnyNose">{Translate('no')}</label>
                  </div>
                )}
              />
              <div style={{
                paddingLeft: '2rem'
              }}>
                <FormattedMessage
                  id="losingSenseSmell"
                />
              </div>
              <Field
                name="losingSenseSmell"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesSmell" name="losingSenseSmell" value="yes" />
                    <label for="YesSmell">{Translate('yes')}</label>

                    <input {...input} type="radio" id="NoSmell" name="losingSenseSmell" value="no" />
                    <label for="NoSmell">{Translate('no')}</label>
                  </div>
                )}
              />
              <div style={{
                paddingLeft: '2rem'
              }}>
                <FormattedMessage
                  id="losingSenseTaste"
                />
              </div>
              <Field
                name="losingSenseTaste"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesTaste" name="losingSenseTaste" value="yes" />
                    <label for="YesTaste">{Translate('yes')}</label>

                    <input {...input} type="radio" id="NoTaste" name="losingSenseTaste" value="no" />
                    <label for="NoTaste">{Translate('no')}</label>
                  </div>
                )}
              />
              <div style={{
                paddingLeft: '2rem'
              }}>
                <FormattedMessage
                  id="bodyAches"
                />
              </div>
              <Field
                name="bodyAches"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesBodyAches" name="bodyAches" value="yes" />
                    <label for="YesBodyAches">{Translate('yes')}</label>

                    <input {...input} type="radio" id="NoBodyAches" name="bodyAches" value="no" />
                    <label for="NoBodyAches">{Translate('no')}</label>
                  </div>
                )}
              />
              <div style={{
                paddingLeft: '2rem'
              }}>
                <FormattedMessage
                  id="vomitDiarrhea"
                />
              </div>
              <Field
                name="vomitDiarrhea"
                render={({ input, meta }) => (
                  <div className="radio-toolbar">
                    <input {...input} type="radio" id="YesVomit" name="vomitDiarrhea" value="yes" />
                    <label for="YesVomit">{Translate('yes')}</label>

                    <input {...input} type="radio" id="NoVomit" name="vomitDiarrhea" value="no" />
                    <label for="NoVomit">{Translate('no')}</label>
                  </div>
                )}
              />

              <div style={{
                paddingLeft: '2rem'
              }}>
                <input type="checkbox" id="checkbox" name="checkbox" />
                <FormattedMessage
                  id="checkbox"
                />
              </div>

              <div
                style={{
                  padding: '2rem'
                }}
              >
                <button
                  type="submit"
                  disabled={submitting}
                >
                  {Translate('submit')}
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

