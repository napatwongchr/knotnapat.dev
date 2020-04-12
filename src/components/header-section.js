import React from "react"
import { Link } from "gatsby"
import { Text, Flex, Stack, PseudoBox } from "@chakra-ui/core"

const menus = [
  { name: "Blog" },
  { name: "Portfolio", uri: "portfolio" },
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
      height="100%"
      bg="khaki"
      pt="200px"
    >
      <Text fontSize="5rem" my="30px" fontWeight="bold">
        KNOTNAPAT.DEV
      </Text>
      <Text mb="30px" w="50%" textAlign="center" fontSize="1.5rem">
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
              <Link to={menu.uri} style={{ boxShadow: "none" }}>
                {menu.name}
              </Link>
            </PseudoBox>
          )
        })}
      </Stack>
    </Flex>
  )
}

export default HeaderSection
