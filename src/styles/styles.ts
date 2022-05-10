export const paperStyle = {
  marginTop: 2,
  backgroundColor: 'background.paper',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  padding: 2,
  textAlign: 'center',
  transition: 'transform .2s',
  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.02)',
  },
};

export const paperTitleStyle = {
  marginTop: 2,
  backgroundColor: 'primary.light',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  padding: 2,
  textAlign: 'center',
};

export const searchPaperStyle = (isHover: boolean) => [
  {
    display: 'flex',
    alignItems: 'center',
    width: { xs: '100%', sm: 150 },
    backgroundColor: 'background.paper',
    transition: 'width 0.5s',
  },
  isHover && { width: { sm: 200 }, transition: { sm: 'width 0.5s' } },
];

export const iconButtonStyle = {
  padding: '10px',
};

export const inputBaseStyle = {
  ml: 1,
  flex: 1,
  color: 'primary.main',
};

export const formControlStyle = {
  minWidth: 120,
  marginLeft: { xs: 0, sm: 2 },
  backgroundColor: 'background.paper',
};

export const menuItemStyle = {
  color: 'primary.main',
};

export const buttonStyle = [
  {
    backgroundColor: 'primary.light',
    transition: 'transform .2s',
  },
  {
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: 'primary.light',
    },
  },
];

export const skeletonStyle = {
  padding: 2,
};

export const containerStyle = {
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  marginTop: 10,
  backgroundColor: 'background.default',
  padding: { sm: 5, sx: 2 },
  borderRadius: 2,
  minHeight: '600px',
};

export const containerSinglePageStyle = {
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  marginTop: 10,
  backgroundColor: 'background.default',
  padding: { sm: 5, sx: 2 },
  borderRadius: 2,
  minHeight: '300px',
};

export const globalPaddingStyle = {
  padding: 2,
};

export const filterComponents = {
  padding: 2,
  display: { sm: 'flex' },
};

export const filterComponentsSmall = {
  marginTop: 2,
  display: 'flex',
};

export const bodyTextStyle = {
  color: 'primary.main',
  fontSize: { xs: 11, sm: 12 },
};

export const titleTextStyle = {
  color: 'white',
  fontSize: { xs: 12, sm: 14 },
};

export const singlePagePaperStyle = {
  marginTop: 2,
  backgroundColor: 'primary.light',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  padding: 2,
  textAlign: 'center',
  marginLeft: '50%',
  transform: 'translate(-50%)',
  width: { xs: '80%', sm: '50%' },
};

export const singlePageContentPaperStyle = {
  marginTop: 2,
  backgroundColor: 'white',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  padding: 2,
  textAlign: 'center',
};

export const displayFlexStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const contentTitleTextStyle = {
  color: 'primary.main',
  fontSize: { xs: 12, sm: 14 },
  marginRight: 1,
};
