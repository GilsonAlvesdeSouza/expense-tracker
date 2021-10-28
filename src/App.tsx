import { useEffect, useState } from "react";
import * as St from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import * as helpers from "./helpers/dateFilter"
import { TableArea } from "./components/tableArea";

const App = () => {

  const [list, settList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMOnth] = useState(helpers.getCurrentMonth());

  useEffect(() => {
    setFilteredList(helpers.filtrtListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <St.Container>
      <St.Header>
        <St.HeaderText>Sistema Financeiro</St.HeaderText>
      </St.Header>
      <St.Body>
        {/* Area de Informções */}
        {/* Area de Inserção */}
        <TableArea list={filteredList}/>
      </St.Body>
    </St.Container>
  );
};

export default App;