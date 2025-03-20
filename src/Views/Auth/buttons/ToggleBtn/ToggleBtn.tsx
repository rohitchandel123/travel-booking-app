import './ToggleBtn.css';

interface ToggleBtnProps {
  name: string;
  handleClick: () => void;
}
function ToggleBtn({ name, handleClick }: ToggleBtnProps) {
  return (
    <>
      <button
        className={
          name == 'Sign Up' ? 'toggle-btn toggle-btn-color' : 'toggle-btn'
        }
        onClick={handleClick}
      >
        {name}
      </button>
    </>
  );
}
export default ToggleBtn;
