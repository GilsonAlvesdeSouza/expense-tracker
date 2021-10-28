import { Item } from "../../types/Item";
import * as St from "./styles"
import { formatDate } from "../../helpers/dateFilter"
import { formatCurrency } from "../../helpers/formatCurrency";
import { categories } from "../../data/categories";

type Props = {
    item: Item,
}

export const TableItem = ({ item }: Props) => {

    return (
        <St.TableLine>
            <St.TableColumn>{formatDate(item.date)}</St.TableColumn>
            <St.TableColumn>
                <St.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </St.Category>
            </St.TableColumn>
            <St.TableColumn>{item.title}</St.TableColumn>
            <St.TableColumn>
                <St.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    {formatCurrency(item.value)}
                </St.Value>
            </St.TableColumn>

        </St.TableLine >
    );
};