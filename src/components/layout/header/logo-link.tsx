import { Box, Link, useColorMode } from '@chakra-ui/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useLogoLink } from 'hooks';
import React from 'react';

const LogoLink = () => {
  const { colorMode } = useColorMode();

  const { site, allFile } = useLogoLink();

  const logoLight = getImage(allFile?.nodes?.[0].childrenImageSharp?.[0]?.gatsbyImageData);
  const logoDark = getImage(allFile?.nodes?.[1].childrenImageSharp?.[0]?.gatsbyImageData);

  return (
    <Link href={site?.siteMetadata?.siteUrl || undefined}>
      <Box>
        {logoLight && logoDark && (
          <GatsbyImage
            image={colorMode === 'light' ? logoLight : logoDark}
            alt="m@shroom logo title"
          />
        )}
      </Box>
    </Link>
  );
};

export default LogoLink;
