import React, { useEffect, useState } from 'react';
import { Link, Text, Box, VStack, Flex, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Gradient from '../Assets/Gradients/gradientbackground.svg'

const AllUnitsPage = () => {
    const navigate = useNavigate();
    const [numUnits, setNumUnits] = useState(0);
    const [unitsArr, setUnitsArr] = useState([] as number[]);

    useEffect(() => {
      getNumUnits();
    }, []);

    const getNumUnits = () => {
      const requireComponent = require.context('../curriculum', true, /.mdx$/);
      let count = 0;
      let a: number[] = new Array(numUnits);
      a = [];
      requireComponent.keys().forEach((fileName: string) => {
        if (fileName.slice(2, 6) === `unit` && !a.includes(parseInt(fileName.slice(6, 7)))) {
          count++;
          a.push(parseInt(fileName.slice(6, 7)))
          setNumUnits(count);
        }
      });
      setUnitsArr(a);
    };

    const EXTERNAL_NOTEBOOKS = [
      'https://colab.research.google.com/drive/1kCZrqqcEV0ehgotVwysDCcWIIOPrbC9R',
      'https://colab.research.google.com/drive/1AoBUAoT2PTX4P_FAJzUaUYCEXv9BUEbU',
      'https://colab.research.google.com/drive/15IvB-SGDB60ZqEowMk8dXsE6Xl9NaS3A'
    ];
    const TITLES = [
      'Altitude', 'Orientation', 'Life Support'
    ];

    // const nav = (unit : number) => {
    //     // const s = '/expedition' + unit
    //     const dest = EXTERNAL_NOTEBOOKS[unit - 1];
    //     navigate(dest);
    // }

    return (
      <Box
        style={{
          backgroundColor: '#121212',
        }} minHeight="80vh" bgImage={Gradient}>
        <Text variant='H2' pt='5%' pl='15%' color='#FFFFFF'>Curriculum</Text>
        <Flex direction="row" justifyContent='center'>
            { unitsArr.map((val) => {
            return (
                <>
                <Link
                  href={EXTERNAL_NOTEBOOKS[val - 1]}
                  target="_blank"
                  mt='2%' bg='smcblack' w='20%' h='420px' borderRadius='lg' mr="5%"
                  border='solid' borderColor="smclightblue" boxShadow="xl"
                  color='smclightblue'
                  _hover={{
                    bg: 'smcdarkblue',
                    color: 'smcwhite',
                    textShadow: '0 0 10px #91D8F6'
                  }}
                  _focus={{
                    bg: 'smcdarkblue',
                    color: 'smcwhite',
                    textShadow: '0 0 10px #91D8F6'
                  }}
                  _active={{
                      bg: 'smcblack',
                      transform: 'scale(0.98)',
                      borderBottomColor: 'smclightblue',

                  }} >
                  {/* // onClick={() => nav(val)} > */}
                  <VStack spacing='70px'>
                    <Image mt='20%' src={"images/Unit" + val + ".svg"} />
                    <Text variant='BodyLarge'>Expedition { val }:<br/>{TITLES[ val - 1]}</Text>
                  </VStack>
                </Link>
                </>
            )
            })
            }
        </Flex>
      </Box>
    );
  };

export default AllUnitsPage;
