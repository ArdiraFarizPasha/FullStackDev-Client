import axios from 'axios'
import React, { useState } from 'react'
import HomepageLogo from 'assets/home-cough-logo.png'
import { FormattedMessage } from 'react-intl'
import {
  Container,
  HomeContentContainer,
  HomeContent,
  InnerHomeContent,
  HomeImageContainer,
  HomeTextContainer,
  HomeHeaderContainer,
  HomeHeader,
  HomeTextParagraph,
  HomeTextListRules,
  HomeTextListHospital,
  HomeButtonContainer,
  HomeButtonStart
} from 'pages/home/homeStyle'
import { useDispatch } from 'react-redux'
import { replace } from 'connected-react-router'


function Home() {

  const [state, setState] = useState([])

  // GET USER
  // axios.get('http://localhost:5000/personal')
  // .then(({data}) => {
  //   // setState(data)
  //   console.log(data, "<<")
  // })

  const dispatch = useDispatch()

  return (
    <Container>
      <HomeContentContainer>
        <HomeContent>
          <InnerHomeContent>
            <HomeImageContainer>
              <img
                alt="homepage-background-logo"
                src={HomepageLogo}
                style={{
                  transform: "scaleX(-1)"
                }}
              />
            </HomeImageContainer>
            <HomeTextContainer>
              <HomeHeaderContainer>
                <HomeHeader>
                  <FormattedMessage id="header" />
                </HomeHeader>
              </HomeHeaderContainer>
              <HomeTextParagraph>
                <FormattedMessage id="home-text" />
              </HomeTextParagraph>
              <HomeTextListRules>
                <li>
                  <FormattedMessage
                    id="home-list-rules-1"
                  />
                </li>
                <li>
                  <FormattedMessage
                    id="home-list-rules-2"
                  />
                </li>
                <li>
                  <FormattedMessage
                    id="home-list-rules-3"
                  />
                </li>
                <li>
                  <FormattedMessage
                    id="home-list-rules-4"
                  />
                </li>
              </HomeTextListRules>
              <HomeTextParagraph>
                <FormattedMessage id="home-queue" />
              </HomeTextParagraph>
              <HomeTextListHospital>
                <li>
                  <FormattedMessage
                    id="home-list-hospital-1"
                  />
                </li>
                <li>
                  <FormattedMessage
                    id="home-list-hospital-2"
                  />
                </li>
                <li>
                  <FormattedMessage
                    id="home-list-hospital-3"
                  />
                </li>
              </HomeTextListHospital>
              <HomeTextParagraph>
                <FormattedMessage id="home-end-footer" />
              </HomeTextParagraph>
              <HomeTextParagraph>
                <FormattedMessage id="references" /> :
                <a
                  href="https://res.cloudinary.com/siloam/image/upload/v1594282668/Diabetic/assets/Health%20Declaration/REV-04_Pedoman_P2_COVID-19__27_Maret2020_Tanpa_TTD.pdf.pdf"
                >
                  Ministry of Health Republic of Indonesia
                </a>
                <a
                  href="res.cloudinary.com/siloam/image/upload/v1594282661/Diabetic/assets/Health%20Declaration/Symptoms_of_Coronavirus___CDC.pdf"
                >
                  CDC
                </a>
                <a
                  href="res.cloudinary.com/siloam/image/upload/v1594282662/Diabetic/assets/Health%20Declaration/WHO-2019-nCoV-HCF_operations-2020.1-eng.pdf"
                >
                  WHO
                </a>
              </HomeTextParagraph>
            </HomeTextContainer>
          </InnerHomeContent>
        </HomeContent>
        <HomeButtonContainer>
          <HomeButtonStart
            onClick={() => {
              dispatch(replace('/personal'))
            }}
          >
            <FormattedMessage 
              id="start"
            />
          </HomeButtonStart>
        </HomeButtonContainer>
      </HomeContentContainer>
    </Container>
  );
}

export default Home;

