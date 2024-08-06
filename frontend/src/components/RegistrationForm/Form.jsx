import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const moveUpAnimation = keyframes`
  from {
    transform: translateY(0);
    font-size: 16px;
  }
  to {
    transform: translateY(-25px);
    font-size: 14px;
    color: #D726D9;
    font-weight: bold;
  }
`;

const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  display: flex;
  background-image: url(/utils/background-form.jpg);
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  font-weight: bold;
  color: purple;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    align-items: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  padding-right: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const UpperLogos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const TnLogo = styled.img`
  max-width: 175px;
  height: auto;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

const ManitLogo = styled.img`
  width: 225px;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const LogoBlack = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    width: 140px;
  }
`;

const ThemeLogo = styled.img`
  max-width: 500px;
  height: auto;
  margin: 20px auto;
  animation: ${rotateAnimation} 15s linear infinite;

  @media (max-width: 768px) {
    max-width: 300px;
    display: none;
  }
`;



const FormSection = styled.div`
  width: 40%;
  height: 90vh;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    background-image: url('/utils/theme-logo.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    // animation: ${rotateAnimation} 15s linear infinite;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  background-color: rgba(73, 158, 184, 0.6);
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box; 
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
    height: auto;
    background-color: rgba(73, 158, 184, 0.8); // Increased opacity for better readability
  }
`;

const StyledTitle = styled.div`
    font-weight: 1000;
    font-size: 30px;
    margin: 30px auto;
    width: 30%;
    opacity: 0.9;
    background: #D726D9;
    border-radius: 10px;
    color: white;
    padding: 10px;

    @media (max-width: 768px) {
        font-size: 19px;
    }
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 2em;
  font-size: 1.3em;
  padding: 1%;
  margin-bottom: 2em;
  border: none;

  border-bottom: 3px solid #D7B3D7;
  color: red;
  background: rgba(999,999,999,0.9);

  &hover{
    border-bottom: 3px solid gold; 
  }

  &:focus {
    outline: none;
    border-color: #D726D9;
;
  }

  &:focus + label, &:not(:placeholder-shown) + label {
    animation: ${moveUpAnimation} 0.3s forwards;
  }
    @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
    margin-bottom: 1.5em;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 10px;
  transition: all 0.3s;
  pointer-events: none;
  background:  rgba(999,999,999,0.8);
  padding: 0 5px;
  color: purple;
  border-radius: 2em;
  font-size: 1.3em;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 20px;
//   color: gold;

  @media (max-width: 768px) {
    margin: 50px 10px;
  }
`;

const CustomCheckbox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => props.checked ? '#D726D9' : 'white'};
  border: 2px solid #D726D9;
  border-radius: 3px;
  margin-right: 10px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    display: ${props => props.checked ? 'block' : 'none'};
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const CustomRadio = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: white;
  border: 2px solid #D726D9;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    display: ${props => props.checked ? 'block' : 'none'};
    left: 3px;
    top: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #D726D9;
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  margin-left: 30px;
  padding-left: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin-bottom: 15px;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const RadioLabel = styled(CheckboxLabel)``;

const CheckboxInput = styled.input`
  display: none;
`;

const SubmitButton = styled.button`
  background-color: #D726D9;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;  
  transform-origin: left;

  &:hover {
    background-color: gold;
    transform-origin: left;
    transition: all 0.5s;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const Form = () => {
  const [response, setResponse] = useState({
    name: "",
    college: "",
    email: "",
    contact: "",
    teamName: "",
    compete: {
      chhatraSansad: false,
      lekhan: false,
      bhashaSangam: false,
      abhivyaktiNritya: false,
      abhivyaktiGayan: false,
      abhivyaktiManch: false,
      chakravyuh: false,
      srijan: false,
      digitalSrijan: false,
      kaviSammelan: false,
      nukkadNatak: false,
      paridhanika: false,
      khichdi: false
    },
    type: ""
  });

  async function submitHandler(event) {
    event.preventDefault();
    console.log("Logging the form response: ");
    console.log(response);
    let comps = [];
    let i = 0;
    for (const competetion in response.compete) {
      if (response.compete[competetion] === true) {
        comps[i] = `${competetion}`;
        i++;
      }
    }
    
    let newResponse = {}

    if (response.type === "solo") {
      newResponse = {
        token: "123",
        name: response.name,
        email: response.email,
        contact: response.contact,
        college: response.college,
        competitions: comps,
      }
      // console.log(newResponse);

      let getRes = await fetch("http://localhost:8080/T_Reg24", {
        method: "POST",
        body: JSON.stringify(newResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((data) => {
          // console.log(data);
          if(data.status===403){
            alert("User alredy exist");
          }
          alert("Form Submitted Successfully");
        })
        .catch((err) => {
          // console.log(err);
        });
    }
    else {
      newResponse = {
        token: "1234",
        teamName: response.teamName,
        name: response.name,
        email: response.email,
        contact: response.contact,
        college: response.college,
        competitions: comps
      }
      
      let getRes = await fetch("http://localhost:8080/TG24_Reg", {
        method: "POST",
        body: JSON.stringify(newResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(async(data) => {
          console.log(await data.json());
          if(data.status===403){
            alert("User alredy exist");
          }
          alert("Form Submitted Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    
  }

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setResponse(prevData => {
      if (type === 'checkbox') {
        return {
          ...prevData,
          compete: {
            ...prevData.compete,
            [name]: checked
          }
        }
      }
      if (name === 'type') {
        // Clear checkboxes when switching between solo and group
        const clearedCompete = Object.keys(prevData.compete).reduce((acc, key) => {
          acc[key] = false;
          return acc;
        }, {});
        return {
          ...prevData,
          [name]: value,
          compete: clearedCompete,
          teamName: value === 'solo' ? '' : prevData.teamName
        }
      }
      return {
        ...prevData,
        [name]: value
      }
    });
  }

  return (
    <Container>
      <LogoSection>
        <UpperLogos>
          <TnLogo src='/utils/logo-tn.png' alt='TN Logo' />
          <LogoBlack src='/utils/toorynaad-24.png' alt='Toorynaad Logo' />
          <ManitLogo src='/utils/logo-manit.png' alt='MANIT Logo' />
        </UpperLogos>
        <ThemeLogo src='/utils/theme-logo.png' alt='Theme Logo' />
      </LogoSection>

      <FormSection>
        <StyledForm onSubmit={submitHandler}>

          <StyledTitle>पंजीकरण</StyledTitle>
          <InputGroup>
            <StyledInput id='name' name='name' type='text' value={response.name} onChange={changeHandler} placeholder=" " />
            <StyledLabel htmlFor="name">नाम(Name)</StyledLabel>
          </InputGroup>

          <InputGroup>
            <StyledInput id='college' name='college' type='text' value={response.college} onChange={changeHandler} placeholder=" " />
            <StyledLabel htmlFor="college">महाविद्यालय का नाम(College Name)</StyledLabel>
          </InputGroup>

          <InputGroup>
            <StyledInput id='email' name='email' type='email' value={response.email} onChange={changeHandler} placeholder=" " />
            <StyledLabel htmlFor="email">ईमेल-पता(Email)</StyledLabel>
          </InputGroup>

          <InputGroup>
            <StyledInput id='phone' name='contact' type='text' value={response.contact} onChange={changeHandler} placeholder=" " />
            <StyledLabel htmlFor="phone">संपर्क सूत्र(Contact)</StyledLabel>
          </InputGroup>

          <h2>प्रतियोगिताएं</h2>
          <RadioGroup>
            <RadioLabel>
              <input
                type="radio"
                name='type'
                value="solo"
                checked={response.type === "solo"}
                onChange={changeHandler}
                style={{ display: 'none' }}
              />
              <CustomRadio checked={response.type === "solo"} />
              एकल
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name='type'
                value="group"
                checked={response.type === "group"}
                onChange={changeHandler}
                style={{ display: 'none' }}
              />
              <CustomRadio checked={response.type === "group"} />
              सामूहिक
            </RadioLabel>
          </RadioGroup>

          {response.type === "group" && (
            <InputGroup>
              <StyledInput id='teamName' name='teamName' type='text' value={response.teamName} onChange={changeHandler} placeholder=" " />
              <StyledLabel htmlFor="teamName">समूह का नाम(Group Name)</StyledLabel>
            </InputGroup>
          )}

          <CheckboxGroup>
            {response.type === "solo" && (
              <>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="chhatraSansad" checked={response.compete.chhatraSansad} onChange={changeHandler} className='custom-checkbox' />
                  <CustomCheckbox checked={response.compete.chhatraSansad} />
                  छात्र संसद
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="lekhan" checked={response.compete.lekhan} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.lekhan} />
                  लेखन
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="bhashaSangam" checked={response.compete.bhashaSangam} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.bhashaSangam} />
                  भाषा संगमम्
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="abhivyaktiNritya" checked={response.compete.abhivyaktiNritya} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.abhivyaktiNritya} />
                  अभिव्यक्ति नृत्य
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="abhivyaktiGayan" checked={response.compete.abhivyaktiGayan} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.abhivyaktiGayan} />
                  अभिव्यक्ति गायन
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="abhivyaktiManch" checked={response.compete.abhivyaktiManch} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.abhivyaktiManch} />
                  अभिव्यक्ति मंच
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="chakravyuh" checked={response.compete.chakravyuh} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.chakravyuh} />
                  चक्रव्यूह
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="srijan" checked={response.compete.srijan} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.srijan} />
                  सृजन
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="digitalSrijan" checked={response.compete.digitalSrijan} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.digitalSrijan} />
                  डिजिटल सृजन
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="kaviSammelan" checked={response.compete.kaviSammelan} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.kaviSammelan} />
                  कवि सम्मेलन
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="khichdi" checked={response.compete.khichdi} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.khichdi} />
                  खिचड़ी
                </CheckboxLabel>
              </>
            )}

            {response.type === "group" && (
              <>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="nukkadNatak" checked={response.compete.nukkadNatak} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.nukkadNatak} />
                  नुक्कड़ नाटक
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="paridhanika" checked={response.compete.paridhanika} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.paridhanika} />
                  परिधानिका
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="abhivyaktiNritya" checked={response.compete.abhivyaktiNritya} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.abhivyaktiNritya} />
                  अभिव्यक्ति नृत्य
                </CheckboxLabel>
                <CheckboxLabel>
                  <CheckboxInput type='checkbox' name="abhivyaktiGayan" checked={response.compete.abhivyaktiGayan} onChange={changeHandler} />
                  <CustomCheckbox checked={response.compete.abhivyaktiGayan} />
                  अभिव्यक्ति गायन
                </CheckboxLabel>
              </>
            )}
          </CheckboxGroup>

          <SubmitButton type='submit'>पंजियन करें </SubmitButton>
        </StyledForm>

      </FormSection>
    </Container>
  );
}

export default Form;