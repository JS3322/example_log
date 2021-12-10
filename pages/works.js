import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbInkdrop from '../public/images/work/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/work/inkdrop_eyecatch.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1,2,3]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem 
                        id="inkdrop" 
                        title="Inkdrop" 
                        thumbnail={thumbInkdrop}
                    >
                        markdown note-taking app
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
                        markdown2
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.4}>
                <Divider my={6}/>
                <Heading as="h3" fontSize={20}  mb={4}>
                    Old Works
                </Heading>
            </Section>
        </Container>
        </Layout>
    )
}

export default Works