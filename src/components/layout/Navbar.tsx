import { useIsMobile } from '@/hooks/use-is-mobile';
import { DesktopNavbar } from '@/components/layout/DesktopNavbar';
import { MobileNavbar } from '@/components/layout/MobileNavbar';

export const Navbar = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
