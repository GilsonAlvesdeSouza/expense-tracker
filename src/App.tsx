import { useEffect, useState } from "react";
import * as St from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import * as helpers from "./helpers/dateFilter"
import { TableArea } from "./components/tableArea";
import { InfoArea } from "./components/IfoArea";

const App = () => {

  const [list] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(helpers.getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(helpers.filtrtListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string): void => {
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    let incomeCount= 0;
    let expenseCount = 0;

    for (const i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount+= filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  return (
    <St.Container>
      <St.Header>
        <St.HeaderText>Sistema Financeiro</St.HeaderText>
      </St.Header>
      <St.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Area de Inserção */}
        <TableArea list={filteredList} />
      </St.Body>
    </St.Container>
  );
};

export default App;