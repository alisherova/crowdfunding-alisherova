import { styled } from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";

export const sharedStyles = `
  width: 250px;
  padding: 3px;
  margin-bottom: 15px;
  background-color: #f5f5f5;
  border: none;
  outline: none;
`;

export const Form = styled.form`
  font-family: "Poppins", sans-serif;
  width: 500px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Input = styled.input`
  ${sharedStyles};
  font-size: 16px;
  padding-left: 10px;
  margin-bottom: 8px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="date"]:required:invalid::-webkit-datetime-edit {
    color: transparent;
  }
  &[type="date"]:focus::-webkit-datetime-edit {
    color: black !important;
  }

  /* For Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const ImgInput = styled.input.attrs({
  type: "file"
})`
  display: none;
`;

export const ChosenImg = styled.img`
  margin-bottom: 10px;
  width: 200px;
  height: 200px;
  background-size: cover;
`;

export const UploadIcon = styled(AiOutlineCloudUpload)`
  margin: 0 10px 0 15px;
  font-size: 25px;
  color: #5c6260;
`;

export const SelectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "none",
    boxShadow: state.isFocused ? "none" : baseStyles.boxShadow,
    backgroundColor: "#f5f5f5",
    width: "265px",
    "&:hover": {
      border: "none" // Set border to none on hover
    },
    marginBottom: "20px"
  }),
  menu: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#f0f0f0" : base.backgroundColor,
    color: state.isFocused ? "#333" : base.color,
    width: "265px"
  }),
  option: base => ({
    ...base,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#39a686" // Set the background color on hover
    }
  })
};

export const Summary = styled.textarea`
  ${sharedStyles};
  width: 330px;
  height: 80px;
  box-sizing: border-box;
  font-size: 1rem;
  padding-left: 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;

  &.imgLabel {
    ${sharedStyles};
    margin-bottom: 15px;
    display: flex;
    word-spacing: 2px;
    background-color: #fff;
    outline: 1px solid #39a686;
    border-radius: 5px;
    align-items: center;
    justify-content: flex-start;
    color: #39a686;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #39a686;
      outline: 1px solid #fff;
      color: #fff;
      transition: all 0.2s ease-in;

      & .uploadIcon
    }

    &:hover .uploadIcon {
      color: #fff;
      transition: all 0.2s ease-in;
    }
  }
`;

export const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-right: 70px;
  padding: 8px 15px;
  border-radius: 7px;
  color: #fff;
  background-color: #39a686;
  cursor: pointer;
  border: none;
  font-size: 16px;

  ${props =>
    props.disabled &&
    `
      opacity: 0.5;
      pointer-events: none;
    `}

  &:hover {
    background-color: #fff;
    color: #39a686;
    outline: 2px solid #39a686;
    transition: all 0.3s ease-in;
  }
`;
