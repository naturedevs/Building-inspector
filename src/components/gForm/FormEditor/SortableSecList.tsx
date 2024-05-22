import { useAppDispatch } from "../../../redux/hooks"
import { functionForSorting } from "../../../redux/features/form/formSlice"
import { IAllFormSections } from "../../../redux/types"
import QuestionFormElement from "./edit-question/index"
import SectionEditor from "./SectionEditor"
import { DndItem, DndList } from "./react-sortable-hoc"

const SortableSecList = ({ secSeq, allSections, selectedKey, selectSectionRef }: {
    secSeq: {
        id: string;
        index?: number | undefined;
    }[],
    allSections: IAllFormSections,
    selectedKey: string | undefined,
    selectSectionRef: React.MutableRefObject<HTMLDivElement | null>
}) => {

    const dispatch = useAppDispatch()
    const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }): void => {
        dispatch(functionForSorting({ oldIndex, newIndex }))
    }

    return (

        <DndList
            lockAxis="y"
            lockToContainerEdges={true}
            useDragHandle
            onSortEnd={onSortEnd}
            className="itemsContainer"
        >
            {secSeq.map((ele, index: number) => {
                let isSelected = (selectedKey === ele.id.toString()) ? 'true' : 'false'
                if (!allSections[ele.id.toString()]) return <></>

                return (
                    <DndItem key={ele.id} index={index} className="item my-2">
                        <SectionEditor
                            key={ele.id}
                            isSelected={isSelected}
                            selectQuestionRef={selectSectionRef}
                        />
                    </DndItem>
                )
            })}
        </DndList>

    )
}

export default SortableSecList