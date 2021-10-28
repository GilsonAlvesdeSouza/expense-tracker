import { formatCurrency } from "../../helpers/formatCurrency";
import * as St from "./styles"

type Props = {
    title: string,
    value: number,
    color?: string
}

export const ResumeItem = ({title, value, color}: Props) => {
      return (
        <St.Container>
            <St.Title>{title}</St.Title>
            <St.Info color={color}>{formatCurrency(value)}</St.Info>
        </St.Container>
    );
};