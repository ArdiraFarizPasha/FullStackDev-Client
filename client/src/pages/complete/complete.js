
import React from 'react'
import { useIntl } from 'react-intl'
import { useSelector } from 'react-redux'
import Translate from 'i18n/translate'
import MsgLogo from 'assets/msg.svg'

function CompletePage() {

    const { form } = useSelector((state => state))
    const intl = useIntl()

    var obj = form.symptoms
    let temp = []
    for (const prop in obj) {
        if (obj[prop] === 'yes') {
            temp.push(prop)
        }
    }

    const { dateOfBirth, email, fullName, gender, visitedHospital } = form.userData

    return (
        <div>
            <div>
                <div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                src={MsgLogo}
                                style={{
                                    height: '10%',
                                    width: '10%'
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <h1>{Translate('thank-you')}</h1>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <p>{Translate('show-questionnaire')}</p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <p>{Translate('test-result')}</p>
                        </div>
                    </div>
                    <div
                        className="container-data"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'whitesmoke'
                        }}
                    >
                        {/* isi box */}
                        <div
                            style={{
                                padding: '0.5rem',
                                display: 'grid',
                                flexWrap: 'wrap',
                                gridTemplateColumns: '500px 500px 500px'
                            }}
                        >
                            <div
                                style={{
                                    padding: '0.5rem',
                                    paddingLeft: '0.5rem'
                                }}
                            >
                                <div>
                                    <p><b>{intl.formatMessage({ id: 'fullname-final' })}</b></p>
                                </div>
                                <div>
                                    <p>{fullName}</p>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '0.5rem',
                                    paddingLeft: '0.5rem'
                                }}
                            >
                                <div>
                                    <p><b>{intl.formatMessage({ id: 'gender-final' })}</b></p>
                                </div>
                                <div>
                                    <p>{gender}</p>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '0.5rem',
                                    paddingLeft: '0.5rem'
                                }}
                            >
                                <div>
                                    <p><b>{intl.formatMessage({ id: 'date-of-birth-final' })}</b></p>
                                </div>
                                <div>
                                    <p>{dateOfBirth}</p>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '0.5rem',
                                    paddingLeft: '0.5rem'
                                }}
                            >
                                <div>
                                    <p><b>{intl.formatMessage({ id: 'email' })}</b></p>
                                </div>
                                <div>
                                    <p>{email} </p>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '0.5rem',
                                    paddingLeft: '0.5rem'
                                }}
                            >
                                <div>
                                    <p><b>{intl.formatMessage({ id: 'visited-hospital-final' })}</b></p>
                                </div>
                                <div>
                                    <p>{visitedHospital}</p>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                padding: '0.5rem',
                                display: 'grid',
                                flexWrap: 'wrap',
                            }}
                        >
                            <div
                                style={{
                                    padding: '0.5rem',
                                }}
                            >
                                <div>
                                    {Translate('evidence')}
                                </div>
                                <div>
                                    <p><b>{Translate(form.symptoms.testResult)}</b></p>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '0.5rem',
                                }}
                            >
                                <div>
                                    {Translate('symptoms-14day')}
                                </div>
                                <div>
                                    {
                                        temp.map(symptom => {
                                            if (symptom !== 'testResult') {
                                                return (
                                                    <p><b>{Translate(symptom)}</b></p>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '0.5rem',
                                }}
                            >
                                <div>
                                    {Translate('contact-with-covid')}
                                </div>
                                <div>
                                    <p><b>{Translate(form.symptoms.testResult)}</b></p>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: '0.5rem',
                                }}
                            >
                                <div>
                                    {Translate('medical-support')}
                                </div>
                                <div>
                                    <p><b>{Translate(form.symptoms.testResult)}</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default CompletePage;

