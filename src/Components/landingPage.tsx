import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const [name, setName] = React.useState("")
  // const [nameData, setNameData] = React.useState("")
  const navigate = useNavigate()

  const addUser = () => {
    // setNameData(name);
    window.localStorage.setItem
    ("names", JSON.stringify
    (name));

    navigate("/hero")
  }

  // React.useEffect(() => {
  //   window.localStorage.setItem
  //   ("names", JSON.stringify
  //   (nameData))
  // }, [])

  return (
      <Container>
            <h2>Welcome to Task Tracker</h2>
            <p>CREATE TASKS, AND KEEP TRACK..</p>
            <br />

            <InputField placeholder="Please, enter your name"
              onChange={((e:any) => {
                setName(e.target.value)
              })}
             />

             {name !== "" ? <Button onClick={addUser} bg='black'>Let's Go</Button> 
              : 
             <Button disabled bg='silver'>Let's Go</Button> }

             <p style={{fontSize:"14px", color:"gray"}}>Developed by CodeLab (E-ben)</p>
            
            
      </Container>
          
          
          
  )
};

export default LandingScreen;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

const Button = styled.button<{bg: string}>`
height: 45px;
width: 320px;
margin-top: 20px;
border: none;
outline: none;
background-color: ${(props : any) => props.bg};
color: white;
border-radius: 20px;
transition: all 350ms;
cursor: Pointer;
font-weight: 600;
text-align: center;

:hover{
  transform: scale();
}
`;

const InputField = styled.input`
height: 40px;
width: 300px;
border: none;
padding-left: 10px;
border-radius: 5px;
outline-color: #dcd9f8;
box-shadow: 0 0 2px gray;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;

h1{
  font-size: 35px;
}

p{
  font-weight: 600;
}
`;

