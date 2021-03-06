import { useState } from 'react';
import { Container, Area, Header } from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { EmptyList } from './components/EmptyList';

const App = () => {

  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  const handleTaskRemove = (id: number) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>To Do List</Header>
        <AddArea onEnter={handleAddTask} />

        {list.length > 0 ? list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
            onRemove={handleTaskRemove}
          />
        )) : (
          <EmptyList />
        )}

      </Area>
    </Container>
  );
}

export default App;
