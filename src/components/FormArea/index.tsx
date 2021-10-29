import { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import * as Yup from "yup";
import { Input } from "../Inputs";
import * as St from "./styles";
import { Item } from "../../types/Item";
import { getTransformeDataForm } from "../../helpers/dateFilter";
import { DateType } from "../../types/date";
import { number } from "yup/lib/locale";

interface FormData {
    id: string
    date: string
    category: string
    title: string
    value: string
}

type Props = {
    addItemList: (newList: Item[]) => void
    list: Item[]
};

export const FormArea = ({ addItemList, list }: Props) => {

    const formRef = useRef<FormHandles>(null)

    const save = (item: Item) => {
        const newList: Item[] = [];
        newList.push(...list, item);
        addItemList(newList);
    }

    const incrementItem = (list: Item[]): number => {
        let lastId: any = list[list.length - 1].id;
        lastId = lastId + 1
        return lastId
    }

    const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
        try {
            const schema = Yup.object().shape({
                date: Yup.string().
                    required('O campo data é obrigatório!'),
                category: Yup.string()
                    .min(3, 'O campo categoria deve conter pelo menos 3 caracters!')
                    .required('O campo categoria é obrigatório!'),
                title: Yup.string()
                    .required('O campo título é obrigatório'),
                value: Yup.string()
                    .required('O campo valor é obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            const dtFormat: DateType = getTransformeDataForm(data.date);

            const item: Item = {
                id: incrementItem(list),
                date: new Date(dtFormat.year, dtFormat.month, dtFormat.day),
                category: data.category,
                title: data.title,
                value: parseInt(data.value),
            }

            incrementItem(list)

            save(item);

            reset();

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                if (err instanceof Yup.ValidationError) {
                    err.inner.forEach(error => {
                        formRef.current?.setFieldError(`${error.path}`, error.message);
                    });
                }
            }
        }
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <St.Container>
                <h2>Cadastrar</h2>
                <St.Content>
                    <Input name="date" type='date' label='Data: ' />
                    <Input name="category" type='text' label='Categoria: ' />
                </St.Content>

                <St.Content>
                    <Input name="title" type='text' label='Tìtulo: ' />
                    <Input name="value" type='number' label='Valor: ' pattern="[0-9]+([,\.][0-9]+)?" min="0" step="any" />
                </St.Content>
                <button type='submit'>Enviar</button>
            </St.Container>
        </Form>
    );
};