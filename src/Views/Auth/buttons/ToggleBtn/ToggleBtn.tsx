import './ToggleBtn.css';
import { useLocation } from 'react-router-dom';
  import { ROUTES_CONFIG } from '../../../../Shared/Constants';

interface ToggleBtnProps {
  name: string;
  handleClick: () => void;
}
function ToggleBtn({ name, handleClick }: ToggleBtnProps) {
  const location = useLocation();

  function assignClassName() {
    if (location.pathname == ROUTES_CONFIG.LOGIN.path && name == 'Sign In')
      return 'toggle-btn toggle-btn-color';
    else if (location.pathname == ROUTES_CONFIG.REGISTER.path && name == 'Sign Up')
      return 'toggle-btn toggle-btn-color';
    else return 'toggle-btn';
  } 

  return (
    <>
      <button
        className={assignClassName()}
        onClick={handleClick}
      >
        {name}
      </button>
    </>
  );
}
export default ToggleBtn;
