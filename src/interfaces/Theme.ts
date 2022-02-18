export default interface Theme {
  body: string;
  surface: {
    background: string;
    boxShadow: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
};
