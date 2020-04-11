import React from "react"

import { Text, Flex, Stack, PseudoBox } from "@chakra-ui/core"

const menus = [
  { name: "Blog" },
  { name: "Portfolio" },
  { name: "My Notebooks" },
  { name: "Videos" },
  { name: "About Me" },
]

const HeaderSection = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width="100%"
      bg="khaki"
      minHeight="300px"
    >
      <Text fontSize="2rem" my="30px" fontWeight="bold">
        KNOTNAPAT.DEV
      </Text>
      <Text mb="30px" w="50%" textAlign="center" fontSize="20px">
        Hi, I'm Knot Napat, Full stack JavaScript developer. I passionate in
        building reasonable software and codebase.
      </Text>
      <Stack isInline spacing="20px">
        {menus.map(menu => {
          return (
            <PseudoBox
              borderRadius="2px"
              p="5px"
              mx="10px"
              cursor="pointer"
              _hover={{
                border: "3px solid green",
                borderWidth: "0 0 5px 0",
              }}
            >
              {menu.name}
            </PseudoBox>
          )
        })}
      </Stack>
    </Flex>
  )
}

export default HeaderSection
