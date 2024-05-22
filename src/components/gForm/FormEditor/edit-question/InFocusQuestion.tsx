import { Types } from 'mongoose'
import React, { useState } from 'react'

import QuestionFooter from './QuestionFooter'
import { useAppDispatch } from '../../../../redux/hooks'
import { IAnsTypes, IQuestionForm } from '../../../../redux/types'
import MultipleChoice from './QueAnsComponents/MultipleChoice'
import { editQuestion } from '../../../../redux/features/form/formSlice'
import SelectQueTypeList, { ansTypesStates } from './SelectQueTypeList'
import { ImageUploadModal } from './ImageUploadModal'

const InFocusQuestion = ({ queKey, question, isSelected, setErrors }: {
  queKey: string | Types.ObjectId,
  question: IQuestionForm,
  isSelected: string,
  setErrors: React.Dispatch<React.SetStateAction<{
    titleLen: boolean;
    optionsLen: boolean;
    optionsNum: boolean;
    numUploads: boolean;
  }>>
}) => {

  const dispatch = useAppDispatch()
  const [chooseAnsTypeToggle, setChooseAnsTypeToggle] = useState<boolean>(false)
  const [showImgUploadModal, setShowImgUploadModal] = useState<boolean>(false)

  const changeAnsType = (prevType: IAnsTypes, selectedType: IAnsTypes) => {
    setChooseAnsTypeToggle(false)
    if (prevType === selectedType) return;
    if (selectedType === 'checkbox' || selectedType === 'mcq' || selectedType === 'dropdown') {
      if (!(prevType === 'checkbox' || prevType === 'mcq' || prevType === 'dropdown')) {
        // editQuestion(queKey, { ...question, ans_type: selectedType, optionsArray: ['Option 1'], correct_ans: undefined })
        dispatch(editQuestion({
          queKey: queKey.toString(),
          newQue: {
            ...question,
            ans_type: selectedType,
            optionsArray: ['Option 1'],
            correct_ans: undefined
          }
        }))
      } else {
        dispatch(editQuestion({
          queKey: queKey.toString(),
          newQue: {
            ...question,
            ans_type: selectedType,
          }
        }))
      }
    } else if (selectedType === 'short_ans' || selectedType === 'long_ans') {
      dispatch(editQuestion({
        queKey: queKey.toString(),
        newQue: {
          ...question,
          ans_type: selectedType,
          optionsArray: undefined,
          correct_ans: undefined
        }
      }))
    } else {

    }
  }

  const UpdateImageLink = () => {
    console.log("UpdateImageLink")
  }
  return (
    <>
      <div className='flex flex-col space-y-3 w-full '>

        <div className='flex w-full  items-center justify-between space-x-4'>
          <input
            onFocus={(event) => { event.target.select() }}
            className='py-3 pl-3 font-normal text-sm w-full bg-gray-100 border-b-2 border-gray-200  outline-none focus:outline-none focus:ease-in focus:duration-300 focus:border-purple-900 '
            placeholder={'Question'}
            value={question.title}
            onChange={(event) => {
              event.preventDefault();

              dispatch(editQuestion({
                queKey: queKey.toString(),
                newQue: {
                  ...question,
                  title: event.target.value
                }
              }))
              if (event.target.value.length > 50 || event.target.value.length < 3) {
                setErrors((prev) => {
                  return { ...prev, titleLen: true }
                })
              } else {
                setErrors((prev) => {
                  return { ...prev, titleLen: false }
                })
              }
            }}
          />
          <button
              onClick={(event) => {
                console.log("I am here")
                setShowImgUploadModal(true)
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          {/* after sm mode this will be visible */}
          {/* Select ans type */}
          <div className='relative w-48 hidden sm:block'>
            {
              !chooseAnsTypeToggle &&
              <button
                onClick={(event) => { event.preventDefault(); setChooseAnsTypeToggle(true) }}
                className='w-full items-center flex border border-gray-300 p-2  justify-between'>

                {ansTypesStates[question.ans_type].svg}

                <span className='w-full text-xs text-left pl-2'>{ansTypesStates[question.ans_type].text}</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            }
            {
              chooseAnsTypeToggle &&
              <SelectQueTypeList ansType={question.ans_type} changeAnsType={changeAnsType} />
            }
          </div>
        </div>
        {/* in sm mode this will be visible */}
        {/* Select ans type */}
        <div className='relative w-40 text-xs block sm:hidden'>
          {
            !chooseAnsTypeToggle &&
            <button
              onClick={(event) => { event.preventDefault(); setChooseAnsTypeToggle(true) }}
              className='w-full items-center flex border border-gray-300 p-2  justify-between'>

              {ansTypesStates[question.ans_type].svg}

              <span className='w-full text-xs text-left pl-2'>{ansTypesStates[question.ans_type].text}</span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          }
          {
            chooseAnsTypeToggle &&
            <SelectQueTypeList ansType={question.ans_type} changeAnsType={changeAnsType} />
          }
        </div>

        {
          question.desc &&
          <input
            onFocus={(event) => { event.target.select() }}
            className='text-xs border-b-2 border-gray-200  outline-none focus:outline-none focus:ease-in focus:duration-300 focus:border-purple-900 py-1 '
            placeholder={'Description'}
            value={question.desc}
            onChange={(event) => {
              event.preventDefault();
              dispatch(editQuestion({
                queKey: queKey.toString(),
                newQue: {
                  ...question,
                  desc: event.target.value
                }
              }))
            }} />
        }
      </div>
      
      {question.img !==""?(
          <div>
            <img src={question.img} width="400px" height="auto" /><br></br><br></br>
          </div>
        ): "" }



      {/*------------------------------------ Ans as per type -------------------------------------------------------- */}
      <div className='w-full flex flex-col space-y-2'>
        {
          (question.ans_type === 'mcq' || question.ans_type === 'checkbox' || question.ans_type === 'dropdown') &&
          <MultipleChoice queKey={queKey} question={question} isSelected={(isSelected === 'true')} />
        }
        {
          (question.ans_type === 'short_ans' || question.ans_type === 'long_ans') &&
          <div className=' w-80 mt-2 mb-3  px-4'>
            <input
              disabled
              onFocus={(event) => { event.target.select() }}
              className='text-xs bg-white  w-full border-b-2  border-b-gray-200 text-gray-700  outline-none focus:outline-none focus:ease-in focus:duration-300 focus:border-purple-900 py-1 '
              defaultValue={(question.ans_type === 'short_ans') ? '  Short Answer' : '  Long Answer'} />
          </div>
        }
      </div>

      <QuestionFooter
        queKey={queKey}
        question={question}
      />
      <ImageUploadModal UpdateImgLink={UpdateImageLink} modalShow={showImgUploadModal} setModalShow={setShowImgUploadModal}/>
    </>
  )
}

export default InFocusQuestion