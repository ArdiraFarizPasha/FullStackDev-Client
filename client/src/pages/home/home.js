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
import Translate from 'i18n/translate'


function Home() {

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
                  {Translate("header")}
                </HomeHeader>
              </HomeHeaderContainer>
              <HomeTextParagraph>
                {Translate("home-text")}
              </HomeTextParagraph>
              <HomeTextListRules>
                <li>
                  {Translate("home-list-rules-1")}
                </li>
                <li>
                  {Translate("home-list-rules-2")}
                </li>
                <li>
                  {Translate("home-list-rules-3")}
                </li>
                <li>
                  {Translate("home-list-rules-4")}
                </li>
              </HomeTextListRules>
              <HomeTextParagraph>
                {Translate("home-queue")}
              </HomeTextParagraph>
              <HomeTextListHospital>
                <li>
                  {Translate("home-list-hospital-1")}
                </li>
                <li>
                  {Translate("home-list-hospital-2")}
                </li>
                <li>
                  {Translate("home-list-hospital-3")}
                </li>
              </HomeTextListHospital>
              <HomeTextParagraph>
                {Translate("home-end-footer")}
              </HomeTextParagraph>
              <HomeTextParagraph>
                {Translate("references")} :
                <div>
                  <a
                    href="https://res.cloudinary.com/siloam/image/upload/v1594282668/Diabetic/assets/Health%20Declaration/REV-04_Pedoman_P2_COVID-19__27_Maret2020_Tanpa_TTD.pdf.pdf"
                  >
                    Ministry of Health Republic of Indonesia
                  </a>
                </div>
                <div>
                  <a
                    href='#'
                  >
                    CDC
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                  >
                    WHO
                  </a>
                </div>
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
            {Translate("start")}
          </HomeButtonStart>
        </HomeButtonContainer>
      </HomeContentContainer>
    </Container>
  );
}

export default Home;

