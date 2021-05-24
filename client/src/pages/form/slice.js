import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    testResult: '',
    symptoms: {
      userId: '',
      fever: '',
      breathingDifficulty: '',
      cough: '',
      runnyNose: '',
      losingSenseSmell: '',
      losingSenseTaste: '',
      bodyAches: '',
      vomitDiarrhea: ''
    }
  },
  reducers: {
    setTestResult: (state, action) => {
      state.testResult = action.payload.testResult
    },
    setSymptoms: (state, action) => {
      state.symptoms = {
        ...state.symptoms,
        fever : action.payload.fever,
        breathingDifficulty : action.payload.breathingDifficulty,
        cough : action.payload.cough,
        runnyNose : action.payload.runnyNose,
        losingSenseSmell : action.payload.losingSenseSmell,
        losingSenseTaste : action.payload.losingSenseTaste,
        bodyAches : action.payload.bodyAches,
        vomitDiarrhea : action.payload.vomitDiarrhea
      }
    },
    setUserId: (state, action) => {
      state.symptoms = {
        ...state.symptoms,
        userId : action.payload
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  setTestResult,
  setSymptoms,
  setUserId
} = formSlice.actions

export default formSlice.reducer