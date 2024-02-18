export const clearHTMLTags = (strToSanitize: string):string => {
  return strToSanitize.replace(/(<([^>]+)>)/gi, '');
};
