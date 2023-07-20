import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getThemesThunk, selectThemes } from '../../redux/theme';

const HomePage = () => {
  const themes = useSelector(selectThemes);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getThemesThunk()), []);

  return (
    <div>
      <div className={'text-center'}>
        <Typography variant="h4" className={'m-5'}>
          Dictionary Home Page
        </Typography>
      </div>
      <Typography variant="h5" className={'m-5'}>
        Themes
      </Typography>
      {themes &&
        themes.map((theme) => (
          <Box key={theme.id} sx={{ border: '1px solid blue', borderRadius: 5, p: 3, m: 3 }}>
            <Box className={'flex justify-between'}>
              <Typography variant="h6">id: {theme.id}</Typography>
              <Typography variant="h6">name: {theme.name}</Typography>
              <Typography variant="h6">dictionary id: {theme.dictionary_id}</Typography>
            </Box>
            <Box className={'flex justify-between'}>
              <Typography variant="h6" className={'m-5'}>
                created at: {theme.created_at}
              </Typography>
              <Typography variant="h6" className={'m-5'}>
                updated at: {theme.updated_at}
              </Typography>
            </Box>
          </Box>
        ))}
    </div>
  );
};

export default HomePage;
