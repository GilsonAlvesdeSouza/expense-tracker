import * as St from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";

type Props = {
    currentMonth: string,
    onMonthChange: (newMonth: string) => void,
    income: number,
    expense: number,
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };

    const handleNexMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    };


    return (
        <St.Container>
            <St.MonthArea>
                <St.MonthArrow onClick={() => handlePrevMonth()}>⬅️</St.MonthArrow>
                <St.MonthTitle>{formatCurrentMonth(currentMonth)}</St.MonthTitle>
                <St.MonthArrow onClick={() => handleNexMonth()}>➡️</St.MonthArrow>
            </St.MonthArea>
            <St.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem
                    title="Balanço"
                    value={income - expense}
                    color={(income - expense) < 0 ? "red" : "green"} 
                    />
            </St.ResumeArea>
        </St.Container>
    );
};