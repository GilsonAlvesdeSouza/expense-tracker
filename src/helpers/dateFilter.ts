import { DateType } from "../types/date";
import { Item } from "../types/Item";

export const getCurrentMonth = (): string => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filtrtListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];

    let [year, month] = date.split('-');

    newList = list.filter((item) => 
        
     (item.date.getFullYear() === parseInt(year) && (item.date.getMonth() + 1) === parseInt(month)) 
       
    );
    return newList
};

const addZeroToDate = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
}

export const formatDate = (date: Date): string => {
    let yaer = date.getFullYear();
    let month = addZeroToDate(date.getMonth() + 1);
    let day = addZeroToDate(date.getDate());

    return `${day}/${month}/${yaer}`;
}

export const formatCurrentMonth =(currentMonth:string): string=>{
    let [year, month] = currentMonth.split("-");
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${months[parseInt(month) -1]} de ${year}`;
}

export const getTransformeDataForm = (date: string): DateType => {
    let dateFormt: DateType = {
        year: 0,
        month: 0,
        day: 0
    };
    

    const [year, month, day] = date.split('-');

    dateFormt = {
        year: parseInt(year),
        month: parseInt(month)-1,
        day: parseInt(day)
    };

    return dateFormt
}