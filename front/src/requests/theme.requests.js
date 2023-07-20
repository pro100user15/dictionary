import { API_ROUTES } from '../App.constants';
import $api from './index';

export const getThemesRequest = async () => {
  return await $api.get(API_ROUTES.adminThemes);
};

export const getThemesByDictionaryIdRequest = async (dictionaryId) => {
  return await $api.get(API_ROUTES.themes(dictionaryId));
};
