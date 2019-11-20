import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 35px 18px 40px;
    box-sizing: border-box;
    background-color: white;
`

const FooterText = styled.p`
    font-size: 13px;
    font-family: arial;
    color: #38DCC8;
    margin-bottom: 18px;
    margin-top: 0;
    line-height: 20px;
`

export default () => {
    return (
        <Container>
            <FooterText>
                The Provibers LTD
                <br />
                London | England | United Kingdom
            </FooterText>
            <FooterText>
            Photos from Snowbombing by FANATIC
            <br />
            Photos from Fieldview by the FVF Media Team
            </FooterText>
        </Container>
    )
}