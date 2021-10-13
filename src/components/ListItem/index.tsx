import { Container } from './styles';
import { Item } from '../../types/Item'

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void,
    onRemove: (id: number) => void

}

export const ListItem = ({ item, onChange, onRemove }: Props) => {

    return (
        <Container done={item.done}>
            <div>
                <input
                    type="checkbox"
                    checked={item.done}
                    onChange={e => onChange(item.id, e.target.checked)}
                />
                <label>
                    {item.name}{item.done}
                </label>
            </div>
            <div>
                <button onClick={e => onRemove(item.id)}><span>▬</span></button>
            </div>
        </Container>
    );
}
