import styled from 'styled-components';

function App(): JSX.Element {
  return <AppBox>으악</AppBox>;
}

export default App;

const AppBox = styled.div`
  font-size: ${({ theme }) => theme.size.lg};
  color: ${({ theme }) => theme.color.black};
`;
