import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../App.constants';
import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography';

const NoSuchPageHandler = ({ isLoading }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (location.pathname !== ROUTES.home) {
        toast.warn('You have followed an invalid link');
      }
      navigate(ROUTES.home);
    }
  }, [isLoading]);

  return (
    <div className={'text-center'}>
      <Typography variant="h6">Page not found. You have followed an invalid link</Typography>
    </div>
  );
};

export default NoSuchPageHandler;
