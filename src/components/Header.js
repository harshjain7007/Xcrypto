import { HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  console.log(location.pathname)
  const active = {
    color: "white",
    fontWeight: "700"
  }
  return (
    <>
    <HStack p={4} shadow={"base"} bgColor={"blackAlpha.900"} position={"fixed"} w={"full"} h={"60px"} zIndex={"1000"}>
    <Button variant={"unstyled"} color={"white"}>
    <Link style={location.pathname === "/" ? active : { color : "#afa5a5" }} to="/">Home</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
    <Link style={location.pathname === "/exchanges" ? active : { color : "#afa5a5" }} to="/exchanges">Exchanges</Link>
    </Button>
    <Button variant={"unstyled"} color={"white"}>
    <Link style={location.pathname === "/coins" ? active : { color : "#afa5a5" }} to="/coins">Coins</Link>
    </Button>
    </HStack>
    </>
  )
}

export default Header
