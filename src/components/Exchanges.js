import React, {useEffect, useState} from 'react'
import { server } from '..'
import axios from 'axios'
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
// import CoinCard from './CoinCard'


const Exchanges = () => {
    const [ exchanges, setExchanges ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`)
                setExchanges(data)
                setLoading(false)    
            } catch (error) {
                setError(true)
                setLoading(false)
            }
            
        }
        fetchExchanges()
    }, [])

    // console.log(exchanges)

    if(error) return <ErrorComponent message={"Error While Fetching Exchanges"} />

  return (
    <>
    <Container maxW={"container.xl"} pt={"100px"} >
        {loading ? <Loader /> : <>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        { exchanges.map((curElem) => (
                <ExchangeCard 
                key={curElem.id}
                    name={curElem.name}
                    img={curElem.image}
                    rank={curElem.trust_score_rank}
                    url={curElem.url}
                />
            ))}
        </HStack>
        </>}
    </Container>
    </>
  )
}

const ExchangeCard = ({ name, img, rank, url }) => (
    <a href={url} target={"blank"}>
        <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} css={{ "&:hover":{ transform: "scale(1.1)" } }} >    
            <Image src={img} w={"10"} objectFit={"contain"} />
        <Heading size={"md"} noOfLines={1}>
            {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        </VStack>
    </a>
);


export default Exchanges


// { coins.map((curElem, index) => (
//     <ExchangeCard 
//     key={curElem.id}
//         name={curElem.name}
//         img={curElem.image}
//         rank={curElem.trust_score_rank}
//         url={curElem.url}
//     />
// ))}