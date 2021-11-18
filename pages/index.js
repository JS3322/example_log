import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a developer JS
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexFrow={1}>
                    <Heading as="h2" variant="page-title">
                        JS
                    </Heading>
                    <p>Skill (Developer / DevOps / Design)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page