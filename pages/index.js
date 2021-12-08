import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link,useColorModeValue } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a developer JS
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        JS
                    </Heading>
                    <p>Skill (Develop / Design)</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/poster.png" alt="myImage" />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Paragraph TEST 1 | OOOOOOOOOOOOOOOOOO 
                    <NextLink href="/works/inkdrop">
                        <Link>InkDrop
                        </Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as='h3' variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1987</BioYear>
                    Born in JEJU, KOREA.
                </BioSection>
                <BioSection>
                    <BioYear>2014</BioYear>
                    Worked at Sangsaeng law firm
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Worked at GritIT Company
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Worked as a Freelance
                </BioSection>
            </Section>

            <Section delay={0.1}>
                <Heading as='h3' variant="section-title">
                    hobby
                </Heading>
                <Paragraph>
                    Travel, {' '}
                    <Link href="https://github.com/JS3322">
                        Coding
                    </Link>
                    , Dance, {' '}
                    <Link href="https://www.behance.net/js3322">
                        Design
                    </Link>
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page