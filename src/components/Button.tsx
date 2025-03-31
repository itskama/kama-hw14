interface ButtonProps {
    value: string;
    onClick: (value: string) => void;
  }
  
  export const Button = ({ value, onClick }: ButtonProps) => {
    return (
      <button
        style={{
          width: '50px',
          height: '50px',
          margin: '5px',
        }}
        onClick={() => onClick(value)}
      >
        {value}
      </button>
    );
  };