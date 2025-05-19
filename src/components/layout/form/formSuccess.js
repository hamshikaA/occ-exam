import styled from "styled-components";

const StyledSuccess = styled.div`
  max-height: 35rem;
  height: 35rem;
  background-color: var(--clr-light-normal);
  border-radius: var(--soft-curve);
  padding: 1rem;
  display: grid;
  place-items: center;
`;

const FormSuccess = () => {
  return (
    <StyledSuccess>
      <p>This message was sent successfully</p>
    </StyledSuccess>
  );
};

export default FormSuccess;
