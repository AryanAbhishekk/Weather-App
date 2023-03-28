import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Form from '../components/Form';
import Information from '../components/Information';

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '30%',
    
    
})



const Home = () => {
    
    const [result, setResult] = useState({})

    return (
        <Component>
           
            <Box >
                <Form setResult={setResult} />
                <Information result={result} />
            </Box>
        </Component>
    )
}

export default Home;