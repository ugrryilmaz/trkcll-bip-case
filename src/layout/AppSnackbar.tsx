import { useSelector, useDispatch } from 'react-redux';
import { hideSnackbar } from '@/features/ui/uiSlice';
import { Snackbar, Alert } from '@mui/material';
import { RootState } from '@/app/store';
import { useMemo } from 'react';

const AppSnackbar = () => {
  const dispatch = useDispatch();
  const { open, message } = useSelector((state: RootState) => state.ui.snackbar);

  // Her yeni mesajda benzersiz bir key oluştur
  const snackbarKey = useMemo(() => `${message}-${Date.now()}`, [message]);

  return (
    <Snackbar
      key={snackbarKey}
      open={open}
      autoHideDuration={3000}
      onClose={() => dispatch(hideSnackbar())}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert onClose={() => dispatch(hideSnackbar())} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
