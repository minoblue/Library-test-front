import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 30px 30px;
  .cardWrapper {
    max-width: 850px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    @media (max-width: 800px) {
      justify-content: center;
    }
  }
`;

const Home = () => {
  // const [data, setData] = useState({ cards: [] });
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     const result = await get(apiHost);
  //     setData(result.data);
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return (
    <Wrapper>
      <h5>Welcome to the Home Page!</h5>
    </Wrapper>
  );
};

export default Home;
