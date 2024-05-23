import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAllFormQuestions, IQuestionForm, IAllFormSections, ISectionForm } from '../../types'

const defaultQuestion: IQuestionForm = {
  _id: "newQueId" + (new Date()).getTime(),
  formId: undefined,
  title: 'Untitled Question',
  'required': false,
  ans_type: 'mcq',
  ordId:0,
  optionsArray: ['Option 1'],
  correct_ans: undefined
}
const defaultSection: ISectionForm = {
  _id: "newSecId" + (new Date()).getTime(),
  f_Id: undefined,
  title: 'Untitled Section',
  ordId:0,
  'required': true,
  questionsArray: { },
  // questionsArray: { ["newQueId" + (new Date()).getTime()]: defaultQuestion },
  // questionsArray: { ["newQueId" ]: defaultQuestion },
}

interface FormSlice {
  formId?: string,
  aboutForm: {
    title: string,
    desc: string,
  },

  queSeq: { id: string, index?: number }[],
  secSeq: { id: string, index?: number }[],
  allQuestions: IAllFormQuestions,
  allSections: IAllFormSections,
  selectedKey: string | undefined,
  selectedSKey: string | undefined,
}

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formId: undefined,
    aboutForm: {
      title: 'Untitled Form',
      desc: '',
    },
    queSeq: [{ id: "newQueId" + (new Date()).getTime() }],
    secSeq: [{ id: "newSecId" + (new Date()).getTime() }],
    allQuestions: { },
    // allQuestions: { ["newQueId" + (new Date()).getTime()]: defaultQuestion },
    allSections: { ["newSecId" + (new Date()).getTime()]: defaultSection },
    selectedKey: "newQueId" + (new Date()).getTime(),
    selectedSKey: "newSecId" + (new Date()).getTime(),
  } as FormSlice,
  reducers: {
    setFormId: (state, action: PayloadAction<string>) => {
      state.formId = action.payload
    },
    setAboutForm: (state, action: PayloadAction<{ title?: string, desc?: string }>) => {
      if (action.payload.title) {
        state.aboutForm.title = action.payload.title
      }
      if (action.payload.desc) {
        state.aboutForm.desc = action.payload.desc
      }
    },
    setSectionTitle: (state, action: PayloadAction<string>) => {
      if(state.selectedSKey)
        state.allSections[state.selectedSKey].title = action.payload
      state.allQuestions = {
        ...state.allQuestions
      }
    },
    setSectionDesc: (state, action: PayloadAction<string>) => {
      if(state.selectedSKey)
        state.allSections[state.selectedSKey].desc = action.payload
      state.allQuestions = {
        ...state.allQuestions
      }
    },
    setQueSeq: (state, action: PayloadAction<{ id: string, index: number }[]>) => {
      state.queSeq = action.payload
    },
    setSecSeq: (state, action: PayloadAction<{ id: string, index: number }[]>) => {
      state.secSeq = action.payload
    },
    setAllQuestions: (state, action: PayloadAction<IAllFormQuestions>) => {
      state.allQuestions = action.payload
    },
    setAllSections: (state, action: PayloadAction<IAllFormSections>) => {
      state.allSections = action.payload
    },
    setSelectedKey: (state, action: PayloadAction<string>) => {
      state.selectedKey = action.payload
    },
    setSelectedSKey: (state, action: PayloadAction<string>) => {
      // let allQuestions = {...state.allQuestions}
      // console.log(state.queSeq)
      // for(let i = 0; i < state.queSeq.length; i++) {
      //   if(allQuestions[state.queSeq[i].id]){
      //     allQuestions[state.queSeq[i].id].ordId = i;
      //     console.log(allQuestions[state.queSeq[i].id.toString()])
      //     console.log(state.queSeq[i].id)
      //     console.log(state.queSeq)
      //   }
      // }
      // state.allQuestions = allQuestions;

      state.selectedSKey = action.payload
      state.allQuestions = state.allSections[action.payload].questionsArray
      // let size = Object.keys(state.allQuestions).length
      // let arr_ = new Array.from({length: size}, () => {id:"",});
      // let arr_ = new Array(size).fill({id:"", index:0});
      // let arr_:{id:string, index:number}[] = new Array(Object.keys(state.allQuestions).length);
      // console.log(state.allQuestions);
      // Object.keys(state.allQuestions).forEach((key, i) => {
      //   console.log(state.allQuestions[key].ordId)
      //   console.log(key)
      //   // arr_[state.allQuestions[key].ordId] = {id:key, index:i}
      //   arr_[state.allQuestions[key].ordId].id = key
      // })
      // state.queSeq = arr_;
    },

    addQuestion: (state, action: PayloadAction<{ prev_id?: string, newQue?: IQuestionForm }>) => {
      // if (state.queSeq.length > 20) return;
      const uniqueId = 'newQueId' + (new Date()).getTime();

      console.log('add Question');

      //  changing all questions
      state.allQuestions = {
        ...state.allQuestions,
        [uniqueId]: {
          ...((action.payload.newQue) ? action.payload.newQue : defaultQuestion),
          _id: uniqueId,
          formId: state.formId,
        }
      }
      //  changing the question sequance
      let newSeq = state.queSeq
      if (action.payload.prev_id || state.selectedKey) {
        let index_ = newSeq.findIndex((ele) => (ele.id === (action.payload.prev_id || state.selectedKey)))
        if (index_ === -1) {
          state.queSeq = newSeq.concat([{ id: uniqueId, index: state.queSeq.length }])
        } else {
          state.queSeq = newSeq.slice(0, index_ + 1).concat([{ id: uniqueId, index: state.queSeq.length }, ...newSeq.slice(index_ + 1)])
        }
      } else {
        state.queSeq = newSeq.concat([{ id: uniqueId, index: state.queSeq.length }])
      }

      // let allQuestions = {...state.allQuestions}
      // console.log(state.queSeq)
      // var index = 0;
      // for(let i = 0; i < state.queSeq.length; i++) {
      //   if(allQuestions[state.queSeq[i].id]){
      //     allQuestions[state.queSeq[i].id].ordId = index++;
      //     // console.log(allQuestions[state.queSeq[i].id.toString()])
      //     // console.log(state.queSeq[i].id)
      //     // console.log(state.queSeq)
      //   }
      // }
      // state.allQuestions = allQuestions;
      if(state.selectedSKey)
        state.allSections[state.selectedSKey].questionsArray = state.allQuestions

      // chaging selectedKey
      state.selectedKey = uniqueId
    },

    addSection: (state, action: PayloadAction<{ prev_id?: string, newSec?: ISectionForm }>) => {
      // if (state.queSeq.length > 20) return;
      const uniqueId = 'newSecId' + (new Date()).getTime();


      //  changing all questions
      state.allSections = {
        ...state.allSections,
        [uniqueId]: {
          ...((action.payload.newSec) ? action.payload.newSec : defaultSection),
          _id: uniqueId,
          f_Id: state.formId
        }
      }
      //  changing the question sequance
      let newSeq = state.secSeq
      if (action.payload.prev_id || state.selectedSKey) {
        let index_ = newSeq.findIndex((ele) => (ele.id === (action.payload.prev_id || state.selectedSKey)))
        if (index_ === -1) {
          state.secSeq = newSeq.concat([{ id: uniqueId, index: state.secSeq.length }])
        } else {
          state.secSeq = newSeq.slice(0, index_ + 1).concat([{ id: uniqueId, index: state.secSeq.length }, ...newSeq.slice(index_ + 1)])
        }
      } else {
        state.secSeq = newSeq.concat([{ id: uniqueId, index: state.secSeq.length }])
      }

      // chaging selectedKey
      state.selectedSKey = uniqueId
      state.allQuestions = {}
    },
    editQuestion: (state, action: PayloadAction<{ queKey: string, newQue: IQuestionForm }>) => {
      state.allQuestions = {
        ...state.allQuestions,
        [action.payload.queKey]: action.payload.newQue
      }
      if(state.selectedSKey)
        state.allSections[state.selectedSKey].questionsArray = state.allQuestions
    },
    deleteQuestion: (state, action: PayloadAction<{ queKey: string }>) => {
      let x = state.queSeq.findIndex((ele) => ele.id === action.payload.queKey)

      if (x > 0) {
        state.queSeq = state.queSeq.slice(0, x).concat(state.queSeq.slice(x + 1))
      } else if (x == 0) {
        state.queSeq = state.queSeq.slice(1)
      } else return;

      let allQuestions_ = { ...state.allQuestions }
      delete allQuestions_[action.payload.queKey]
      state.allQuestions = allQuestions_

      let selectedKey = state.selectedKey
      if (state.queSeq.length > 0) {
        if (x === state.queSeq.length) {
          if (x === 1) {
            selectedKey = undefined
          } else {
            selectedKey = state.queSeq[x - 1].id
          }
        } else {
          selectedKey = state.queSeq[x].id
        }
      }
      state.selectedKey = selectedKey
      if(state.selectedSKey)
        state.allSections[state.selectedSKey].questionsArray = state.allQuestions
    },
    functionForSorting: (state, action: PayloadAction<{ oldIndex: number, newIndex: number, questionId?: string }>) => {

      if (action.payload.questionId) {
        if (state.allQuestions[action.payload.questionId] && state.allQuestions[action.payload.questionId].optionsArray) {
          let optionsArray = state.allQuestions[action.payload.questionId].optionsArray
          if (optionsArray) {
            if (action.payload.oldIndex < 0 || action.payload.newIndex < 0 ||
              action.payload.newIndex > optionsArray.length - 1 || action.payload.oldIndex > optionsArray.length - 1) return;
            let value = optionsArray[action.payload.oldIndex]
            let arr_ = optionsArray.slice(0, action.payload.oldIndex).concat(optionsArray.slice(action.payload.oldIndex + 1))
            optionsArray = arr_.slice(0, action.payload.newIndex).concat([value, ...arr_.slice(action.payload.newIndex)])

            state.allQuestions[action.payload.questionId].optionsArray = optionsArray
          }
        }
      } else {
        if (action.payload.oldIndex < 0 || action.payload.newIndex < 0 ||
          action.payload.newIndex > state.queSeq.length - 1 || action.payload.oldIndex > state.queSeq.length - 1) return;
        let value = state.queSeq[action.payload.oldIndex]
        let arr_ = state.queSeq.slice(0, action.payload.oldIndex).concat(state.queSeq.slice(action.payload.oldIndex + 1))
        state.queSeq = arr_.slice(0, action.payload.newIndex).concat([value, ...arr_.slice(action.payload.newIndex)])
        // let allQuestions = {...state.allQuestions}
        // // console.log(state.queSeq)
        // let index = 0;
        // for(let i = 0; i < state.queSeq.length; i++) {
        //   if(allQuestions[state.queSeq[i].id]){
        //     allQuestions[state.queSeq[i].id].ordId = index++;
        //     // console.log(allQuestions[state.queSeq[i].id.toString()])
        //     // console.log(state.queSeq[i].id)
        //     // console.log(state.queSeq)
        //   }
        // }
        // state.allQuestions = allQuestions;
      }
    },
    functionForSortingS: (state, action: PayloadAction<{ oldIndex: number, newIndex: number }>) => {
      if (action.payload.oldIndex < 0 || action.payload.newIndex < 0 ||
        action.payload.newIndex > state.secSeq.length - 1 || action.payload.oldIndex > state.secSeq.length - 1) return;
      let value = state.secSeq[action.payload.oldIndex]
      let arr_ = state.secSeq.slice(0, action.payload.oldIndex).concat(state.secSeq.slice(action.payload.oldIndex + 1))
      state.secSeq = arr_.slice(0, action.payload.newIndex).concat([value, ...arr_.slice(action.payload.newIndex)])
      for(let i = 0; i < arr_.length; i++) {
        state.allSections[arr_[i].id].ordId = i;
      }
    },
    functionForOptionEdit: (state, action: PayloadAction<{ index?: number, text?: string, queKey: string, newOpt? : true, delOpt?:true }>) => {
      // console.log(state.allQuestions[action.payload.queKey].optionsArray[action.payload.index], index)
      // console.log(action.payload.index,action.payload.text,action.payload.queKey,action.payload.newOpt)
      if(action.payload.newOpt){
        if(state.allQuestions[action.payload.queKey]){
          let optArray = state.allQuestions[action.payload.queKey].optionsArray
          if(optArray && Array.isArray(optArray) ){
            let text = action.payload.text || `Option ${optArray.length + 1}`
            state.allQuestions[action.payload.queKey].optionsArray = [...optArray, text]
          }else{
            state.allQuestions[action.payload.queKey].optionsArray = ['Option 1']
          }
        }
      }else if(action.payload.delOpt){
        let optArray = state.allQuestions[action.payload.queKey].optionsArray
        if(optArray && Array.isArray(optArray) && typeof action.payload.index === 'number'){
          if(action.payload.index === 0){
            optArray = optArray.slice(1)
          }else{
            optArray = optArray.slice(0,action.payload.index).concat(optArray.slice(action.payload.index+1))
          }
          state.allQuestions[action.payload.queKey].optionsArray = optArray
        }

      } else if(typeof action.payload.index === 'number'){
        // console.log(action.payload.queKey, state.allQuestions[action.payload.queKey],state.allQuestions[action.payload.queKey].optionsArray,action.payload.index ,(state.allQuestions[action.payload.queKey].optionsArray?.length || -1))
        if (action.payload.queKey && state.allQuestions[action.payload.queKey] &&
          state.allQuestions[action.payload.queKey].optionsArray &&
          action.payload.index < (state.allQuestions[action.payload.queKey].optionsArray?.length || -1)
        ) {
          // console.log(action.payload.index,action.payload.text,action.payload.queKey,action.payload.newOpt)
          //@ts-ignore
          state.allQuestions[action.payload.queKey].optionsArray[action.payload.index] = action.payload.text
          
        }
      }
      if(state.selectedSKey)
        state.allSections[state.selectedSKey].questionsArray = state.allQuestions
    }
  }
})

export const {
  setFormId,
  setAboutForm,
  setQueSeq,
  setSecSeq,
  setSelectedKey,
  setSelectedSKey,
  setAllQuestions,
  setAllSections,
  setSectionTitle,
  setSectionDesc,

  addQuestion,
  addSection,
  deleteQuestion,
  editQuestion,
  functionForSorting,
  functionForSortingS,
  functionForOptionEdit,
} = formSlice.actions

export const selectedKey = (state: FormSlice) => state.selectedKey
export const selectedSKey = (state: FormSlice) => state.selectedSKey
export const queSeq = (state: FormSlice) => state.queSeq
export const secSeq = (state: FormSlice) => state.secSeq
export const allQuestions = (state: FormSlice) => state.allQuestions
export const allSections = (state: FormSlice) => state.allSections

export default formSlice.reducer






/**
 

get for

axios.get(`${import.meta.env.VITE_API_URL}/f/${formId}?withQuestions=true`, { withCredentials: true })
      .then((res) => {
        const { data } = res
        if (data) {
          const formInfo: IForm = data.form
          const allQ: IAllFormQuestions = data.questions
          // console.log("Form data", formId, data)

          const allQueList_ = formInfo.questions.map((queKey) => { return { id: queKey.toString() } })
          setQueListState(allQueList_)
          for (let ques in allQ) {
            allQ[ques].savedChanges = true
          }
          setAllQues(allQ)
          setAboutForm({ title: formInfo.title, desc: formInfo.desc })
        }
      }).catch((err) => {
        //@ts-ignore
        let { msg } = err.response?.data
        // console.log(msg)
        setErrMsg(msg || "Some error occured while getting questions and form!")
      })




const saveQuestion = async (queKey: string, newQuestion: IQuestionForm) => {
    await axios.put(`${import.meta.env.VITE_API_URL}/f/${formId}/q/${queKey}`, {
      ...newQuestion
    }, { withCredentials: true })
      .then((value) => {
        // console.log("Updaing Question", value)
        setAllQues((prev) => {
          if (!prev) return null
          const que = prev[queKey.toString()]
          return {
            ...prev,
            [queKey.toString()]: { ...que, savedChanges: true },
          }
        })
      })
      .catch((err: AxiosError) => {
        //@ts-ignore
        let { msg } = err.response?.data
        // console.log(msg)
        setErrMsg(msg || "Some error occured while saving question!")
      })
  }
  const saveForm = async (queSeq: (string | Types.ObjectId)[], allQuestions: IAllFormQuestions | null, aboutForm: { title: string, desc?: string | undefined }) => {
    if (!allQuestions || queSeq.length === 0) {
      // console.log("No queSeq or questions to submit")
      return
    };
    let questions: (string | null)[] = []
    let new_questions: IQuestionForm[] = []

    let areUnsavedChanges: boolean | undefined = false
    queSeq.forEach((qId, index) => {
      let currQ = allQuestions[qId.toString()]
      delete currQ['_id']
      if (qId.toString().slice(0, 3) === "new") {
        if (currQ) {
          questions.push(null);
          new_questions.push(currQ);
        }
      } else {
        questions.push(qId.toString());
        if (!currQ.savedChanges) {
          areUnsavedChanges = undefined;
        };
      }
    })
    if (areUnsavedChanges) {
      setErrMsg("Please save all the questions!")
      // console.log("Their are some unsaved questions first!")
      return

    }
    // console.log("questions : ", questions)
    // console.log("New Questions : ", new_questions)

    await axios.put(`${import.meta.env.VITE_API_URL}/f/${formId}`, {
      title: aboutForm.title,
      desc: aboutForm.desc,
      questions,
      new_questions,
      delete_questions: []
    }, { withCredentials: true })
      .then((value) => {
        // console.log("Updaing Form", value)
        const { data } = value
        const { questions: new_questions } = data

        let newQuestions_ = { ...allQuestions }
        queSeq.forEach((qId, index) => {
          if (qId.toString().slice(0, 3) === "new") {
            newQuestions_[new_questions[index]] = { ...newQuestions_[qId.toString()], savedChanges: true }
            delete newQuestions_[qId.toString()]
          }
        })
        setQueSeq(new_questions)
        setAllQues(newQuestions_)
        setSuccessMsg("Sucesfully saved the changes!")
      })
      .catch((err: AxiosError) => {
        //@ts-ignore
        let { msg } = err.response?.data
        // console.log(msg)
        setErrMsg(msg || "Some error occured while saving form!")
      })
  }      
 */