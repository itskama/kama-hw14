import { Button } from './Button';
import { usePasswordStore } from '../store/passwordStore';

export const Keypad = () => {
  const { handleAdd, handleRemove, handleCheck } = usePasswordStore();

  const buttons = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['<', '0', 'E'],
  ];

  const handleClick = (value: string) => {
    if (value === '<') {
      handleRemove();
    } else if (value === 'E') {
      handleCheck();
    } else {
      handleAdd(value);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {buttons.map((row, index) => (
        <div key={index} style={{ display: 'flex' }}>
          {row.map((value) => (
            <Button key={value} value={value} onClick={handleClick} />
          ))}
        </div>
      ))}
    </div>
  );
};