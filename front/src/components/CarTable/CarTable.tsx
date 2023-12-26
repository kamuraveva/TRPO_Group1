import { CarRow } from "../CarRow";
import { Car } from "../../shared/types";

export interface CarTableProps {
  cars: Car[];
  onDelete: (id: number) => void;
}

export const CarTable = (props: CarTableProps) => {
  const { cars, onDelete } = props;

  if (!cars.length) return <h3>В центре нет авто</h3>;

  return (
    <table>
      <thead>
        <tr>
          <th>Номер в салоне</th>
          <th>Марка</th>
          <th>Модель бренда</th>
          <th>ВИН</th>
          <th>Год выпуска</th>
          <th>Цвет</th>
          <th>Цена</th>
          <th>Номер создателя</th>
          <th>Номер редактора</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <CarRow car={car} key={car.id} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};
