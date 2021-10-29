import { useRef } from "react";
import { Form } from "@unform/web";
import { Input } from "../Inputs";
import * as St from "./styles";
import { FormHandles, SubmitHandler } from "@unform/core";

export const FormArea = () => {

    // const formRef = useRef(null);
    const formRef = useRef<FormHandles>(null)

    const handleSubmit: SubmitHandler<FormData> = (data) => {
        console.log(formRef.current);
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <St.Container>
                <St.Content>
                    <Input name="date" type='date' label='Data: '/>
                    <Input name="category" type='text' label='Categoria: ' />
                </St.Content>

                <St.Content>
                    <Input name="title" type='text' label='Tìtulo: '/>
                    <Input name="value" type='number' label='Valor: '/>
                </St.Content>
                <button type='submit'>Enviar</button>
            </St.Container>
        </Form>
    );
};