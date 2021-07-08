import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

function ContactMe () {
    return (
        <>
        <Title id="contactMe">
            Contact Me
        </Title>
        <Text>
            Email me at: tommy_rigas@outlook.com
        </Text>
        <Icons>
            <SocialIcon className="socialIcon" url="https://www.linkedin.com/in/tommy-rigas/" />
            <SocialIcon className="github" url="https://github.com/AthanasiosR" bgColor="white" />
            <SocialIcon className="socialIcon" url="mailto:tommy_rigas@outlook.com" network="email" />
        </Icons>
        </>
    );
};

const Title = styled.div`
margin-top: 30px;
font-size: 30px;
margin-left: 50px;
`;

const Text = styled.p`
font-size: 20px;
margin-left: 50px;
`;

const Icons = styled.div`
margin-left: 30px; 
margin-bottom: 50px;
`;



export default ContactMe;