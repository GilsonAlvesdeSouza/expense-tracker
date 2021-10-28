
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import * as St from "./styles";

type Props = {
    list: Item[],
}

export const TableArea = ({ list }: Props) => {

    const handleList = () => {

        return list.map((item, index) =>
        (
            <TableItem key={`tableArea-${index}`} item={item}/>
        )
        );
    }

    return (
        <St.Table>
            <thead>
                <tr>
                    <St.TableHeadColumn width={150}>Data</St.TableHeadColumn>
                    <St.TableHeadColumn width={150}>Categoria</St.TableHeadColumn>
                    <St.TableHeadColumn>Título</St.TableHeadColumn>
                    <St.TableHeadColumn width={150}>Valor</St.TableHeadColumn>
                </tr>
            </thead>

            <tbody>
                {handleList()}
            </tbody>
        </St.Table>
    );
};