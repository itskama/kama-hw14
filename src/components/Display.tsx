import { usePasswordStore } from '../store/passwordStore';

export const Display = () => {
  const { password, isAccessGranted } = usePasswordStore();
  
  const displayStyle = {
    backgroundColor: isAccessGranted === null 
      ? 'white' 
      : (isAccessGranted ? 'green' : 'red'),
    padding: '10px',
    margin: '10px auto',
    textAlign: 'center' as const,
    minHeight: '20px',
    border: '2px solid black',
    borderRadius: '5px',
    width: '150px',
  };

  return (
    <div>
      <div style={displayStyle}>
        {password.split('').map((_, index) => (
          <span key={index}>*</span>
        ))}
      </div>
      {isAccessGranted !== null && password.length > 0 && (
        <div style={{ textAlign: 'center' }}>
          {isAccessGranted ? 'Доступ разрешен' : 'Доступ запрещен!'}
        </div>
      )}
    </div>
  );
};