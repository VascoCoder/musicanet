import { Button } from '@mui/material';

import{Routes, Route, Navigate} from 'react-router-dom';
import { useAppThemeContext } from '../pages';

export const  AppRoutes =() =>{
  const { toggleTheme} = useAppThemeContext ();

    return (
  
      <Routes> 
            
            <Route path="/pagina-inicial" element={ <Button variant='contained' color='primary' onClick={ toggleTheme}>Alterar o fundo</Button>} /> 
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />  
            
      </Routes> 
    );
  }