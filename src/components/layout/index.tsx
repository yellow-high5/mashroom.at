import { Grid, GridItem } from '@chakra-ui/react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Analytics } from '@vercel/analytics/react';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import Sidebar from 'components/layout/sidebar';
import React, { useState } from 'react';
import AppProvider from 'store';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [hideHeader, setHideHeader] = useState(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y > -20) {
      setHideHeader(false);
      return;
    }
    const hidden = currPos.y < prevPos.y;
    setHideHeader(hidden);
  }, []);

  return (
    <AppProvider>
      <Analytics />
      <Header isHide={hideHeader} />

      <Grid templateColumns="repeat(4, 1fr)" gap={4} maxW="62em" pt={28} m="auto">
        <GridItem colSpan={[4, 4, 3, 3]}>{children}</GridItem>
        <GridItem colSpan={[4, 4, 1, 1]}>
          <Sidebar />
        </GridItem>
      </Grid>

      <Footer />
    </AppProvider>
  );
};

export default Layout;
