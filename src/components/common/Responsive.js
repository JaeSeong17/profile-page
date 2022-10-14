import styled from "styled-components";

const ResponsiveBlock = styled.div`
    width: 1024px;
    margin: 0 auto;

    @media (max-width > 1024px) {
        width: 768px;
        .responsive {
            display: flex;
        }
    }
    @media (max-width : 1024px) {
        width: 100%;
        justify-content: center;
        .responsive {
            display: block;
            justify-content: center;
            margin: 0 auto;

            & > * {
                width: 80%;
            }
        }
    }
`;

const Responsive = ({ children, ...rest}) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;