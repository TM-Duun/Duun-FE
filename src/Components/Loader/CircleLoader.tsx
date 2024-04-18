import { SyncLoader } from 'react-spinners';
import styled from 'styled-components';

const CircleDiv=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const LoaderComponent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'60vh'}}>
      <CircleDiv>
        <SyncLoader size={15} color={"#7C9DEF"} loading={true} />
      </CircleDiv>
    </div>
  );
};

export default LoaderComponent;
