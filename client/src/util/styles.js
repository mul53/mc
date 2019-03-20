const red = '#d22f2f';

export const blueButton = {
  textTransform: 'inherit',
  marginRight: '16px',
  backgroundColor: '#2196f3',
  color: 'white',
  '&:hover': {
    backgroundColor: '#2196f3',
  },
};

export const redButton = {
  textTransform: 'inherit',
  marginRight: '16px',
  backgroundColor: red,
  color: 'white',
  '&:hover': {
    backgroundColor: red,
  },
};

export const whiteInput = {
  cssLabel: {
    color: 'white !important',
    fontWeight: '500',
  },
  cssUnderline: {
    marginBottom: '16px',
    width: '450px',
    borderColor: 'white',
    color: 'white',
    '&:before': {
      borderBottom: '1px solid white',
    },
    '&:after': {
      borderBottom: '2px solid white',
    },
    '&:hover:before': {
      borderBottom: '2px solid white !important',
    },
  },
};
