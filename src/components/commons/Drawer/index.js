import React from 'react';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const StyledDrawer = styled(Drawer)`
  ${({ theme }) => `
    & .MuiDrawer-paper {
      border-right: 2px solid ${theme.palette.common.border};
      width: 240px;
      background-color: ${theme.palette.secondary.main};
      color: ${theme.palette.primary.contrastText};
      & .MuiTypography-body1 {
        // text-transform: uppercase;
      }
      & .MuiListItemIcon-root {
        color: ${theme.palette.common.gray};
      }
      & .MuiListItem-button {
        &:hover {
          background-color: ${theme.palette.common.hover};
        }
      }
      & .MuiDivider-root {
        background-color: ${theme.palette.common.gray};
      }
    }
  `}
`;

export default function SDrawer({ children, ...props }) {
  const classes = useStyles();
  return (
    <>
      <StyledDrawer {...props}>
        <div className={classes.toolbar} />
        {children}
      </StyledDrawer>
    </>
  );
}
