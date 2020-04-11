import React from "react"

import {
  ThemeProvider,
  Text,
  Flex,
  CSSReset,
  Stack,
  PseudoBox,
} from "@chakra-ui/core"

const posts = [
  { title: "Blog post #1", description: "Post description" },
  { title: "Blog post #2", description: "Post description" },
  { title: "Blog post #3", description: "Post description" },
  { title: "Blog post #4", description: "Post description" },
]

const BlogSection = () => {
  return (
    <Flex width="50%" position="relative" bg="khali">
      <Flex
        flexDirection="column"
        p="25px"
        width="120%"
        bg="white"
        borderRadius="10px"
        position="absolute"
        top="-30px"
      >
        <Text fontSize="25px" fontWeight="bold" mb="20px">
          Blog
        </Text>
        <Stack spacing="15px" mb="30px">
          {posts.map(post => {
            return (
              <Flex
                bg="khaki"
                p="20px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex flexDirection="column">
                  <Text fontWeight="bold" fontSize="20px">
                    {post.title}
                  </Text>
                  <Text fontSize="20px">{post.description}</Text>
                </Flex>
                <Text fontWeight="bold" fontSize="20px" cursor="pointer">
                  Read more
                </Text>
              </Flex>
            )
          })}
        </Stack>
        <Flex justifyContent="center">
          <Text fontSize="25px" fontWeight="bold" mb="20px">
            View all posts
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BlogSection
