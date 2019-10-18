import { useMediaQuery } from '@material-ui/core';
import CONSTANTS from '../Content/Constants';

export function useIsMobile(theme) {
  return useMediaQuery(theme.breakpoints.down(CONSTANTS.mobileBreakpoint));
}