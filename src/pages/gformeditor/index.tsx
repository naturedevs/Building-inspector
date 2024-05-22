import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Button, Modal, Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap';
import Select from 'react-select';

import { GFormI } from "../gform/types";
import { API_ROUTES } from "../../utils/constants"

const Multipleselectdata=[
    {name:'Choice 1', _id:"asdf"},
    {name:'Choice 2'},
    {name:'Choice 3'},
    {name:'Choice 4'},
    {name:'Choice 5'},
    {name:'Choice 6'},
];

export default function GFormEditor(){
    const { formId } = useParams();
    const [gForm, setGForm] = useState<GFormI>({
        _id: '0',
        name:'default'
    });

    useEffect(() => {

    }, []);

    const handleChange = (d:any) => {
        console.log('handleChange', d);
        setGForm(d);
    }

    return (
        <div className="">
            <div className="flex mb-0 items-center justify-between w-[200px]">
                <Form.Label htmlFor="form-password1" className="mb-0 fs-14 text-dark">
                    GForm : 
                </Form.Label>
                <InputGroup>
                    {/* <InputGroup.Text className=""><i className="bx bx-user-check"></i></InputGroup.Text>                         */}
                    <Select name="colors" options={Multipleselectdata.map(d=>{
                        return {
                            ...d,
                            value: d.name,
                            label: d.name
                        }
                    })} value={gForm} onChange={handleChange} className="flex-grow-1 flex" id="choices-multiple-default"
                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                    />
                </InputGroup>
            </div>
        </div>
    )
}