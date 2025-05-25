import { useSelector, useDispatch } from 'react-redux';
import { hideSnackbar } from '@/features/ui/uiSlice';
import { Snackbar, Alert } from '@mui/material';
import { RootState } from '@/app/store';

const AppSnackbar = () => {
  const dispatch = useDispatch();
  const { open, message } = useSelector((state: RootState) => state.ui.snackbar);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => dispatch(hideSnackbar())}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={() => dispatch(hideSnackbar())} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
