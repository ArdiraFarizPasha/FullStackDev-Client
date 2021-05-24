import axios from 'axios'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
    ButtonContainer,
    Container, FormContainer, MainTitle, PersonalFormContainer, TitleContainer, TitleForm
} from 'pages/personal/personalStyle'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { replace } from 'connected-react-router'

function CompletePage() {
    const { form } = useSelector((state => state))
    console.log(form, "<<< form");
    return (
        <div>
            halo complete
        </div>
    )
}

export default CompletePage;

