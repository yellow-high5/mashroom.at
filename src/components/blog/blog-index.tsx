import {
  Box,
  BoxProps,
  chakra,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { IoLinkOutline } from 'react-icons/io5';
import { sanitizeBlogIndex } from 'utils/format';

type Props = {
  slug?: string | null;
  frontmatter?: Gatsby.MdxFrontmatter | null;
  headings?: (Gatsby.MdxHeadingMdx | null)[] | null;
} & BoxProps;

const BlogIndex: React.FC<Props> = (props: Props) => {
  const { slug, frontmatter, headings, ...boxProps } = props;

  return (
    <Box {...boxProps}>
      {frontmatter?.thumbnail && (
        <chakra.img
          w="240px"
          mb={6}
          style={{ aspectRatio: '16 / 9' }}
          src={frontmatter.thumbnail}
        />
      )}

      <Box ml={4}>
        <Heading size="sm">Index</Heading>
        <List mt={4} spacing={4}>
          {headings?.map((heading, index) => (
            <ListItem key={`index-${index}`}>
              <Flex>
                <ListIcon as={IoLinkOutline} />
                <AnchorLink to={`/blog/${slug}#${sanitizeBlogIndex(heading?.value as string)}`}>
                  <Text fontSize="xs" _hover={{ color: 'yellow.400', textDecoration: 'underline' }}>
                    {heading?.value}
                  </Text>
                </AnchorLink>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default BlogIndex;
