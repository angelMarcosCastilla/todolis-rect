import styled from "styled-components"

function Avatar({ image }) {
  return (
    <ContainerAvatar>
      <AvatarImage src={image} alt="avatar del usuario" />
    </ContainerAvatar>
  )
}

const AvatarImage = styled.img`
  display: block;
  width: 45px;
  height: 45px;
  border-radius:50%;
`
const ContainerAvatar = styled.span`
  width: 48px;
  height: 48px;
  background: cyan;
  display: grid;
  place-content: center;
  border-radius: 25px;
  background: linear-gradient(red,green);
  background: #2193b0;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

export default Avatar
