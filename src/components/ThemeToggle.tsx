import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { RootState } from '../redux/store';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="w-10 h-10 rounded-full text-lg border bg-gray-200 dark:bg-gray-800"
    >
      {themeMode === 'light' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;