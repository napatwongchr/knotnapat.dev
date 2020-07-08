import React from "react"

import { Box, Text, Flex, Grid, Icon, Image } from "@chakra-ui/core"

const posts = [
  {
    title: "Blog post #1",
    cover: "https://via.placeholder.com/350x200",
    description:
      "Post description aasdfasdfaasd fasdfaasdfasdfaasdfa sdfaasdfasd faasdfasdf",
  },
  {
    title: "Blog post #2",
    cover: "https://via.placeholder.com/350x200",
    description: "Post description",
  },
  {
    title: "Blog post #3",
    cover: "https://via.placeholder.com/350x200",
    description: "Post description",
  },
  {
    title: "Blog post #4",
    cover: "https://via.placeholder.com/350x200",
    description: "Post description",
  },
]

const BlogSection = () => {
  return (
    <Flex flexDirection="column" p="25px" width="100%" borderRadius="10px">
      <Text fontSize="30px" fontWeight="bold" mb="20px">
        KNOTNAPAT.DEV's Blog
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap="5">
        {posts.map(post => {
          return (
            <Flex
              bg="#ffffff"
              borderRadius="10px"
              direction="column"
              align="center"
              cursor="pointer"
              position="relative"
            >
              <Text fontWeight="bold" fontSize="25px" pt="20px">
                {post.title}
              </Text>
              <Image src={post.cover} />
              <Text fontWeight="bold" fontSize="20px" p="0 15px 15px 15px">
                {post.description}
              </Text>
              <Flex
                position="absolute"
                bottom="-10px"
                right="-10px"
                w="50px"
                h="50px"
                justify="center"
                align="center"
                borderRadius="100%"
                bg="brand.700"
              >
                <Icon name="copy" color="#ffffff" />
              </Flex>
            </Flex>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default BlogSection
