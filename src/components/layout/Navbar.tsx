import { useIsMobile } from '../../hooks/use-is-mobile';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';

export const Navbar = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
