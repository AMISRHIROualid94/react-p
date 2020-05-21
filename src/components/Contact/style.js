import styled from 'styled-components';
/*
    ===============================
            Drop Styles
    ===============================
*/

export const DropPage = styled.div`
    padding-top: 150px;
    padding-bottom:110px;
    text-align: center;
`
export const DropTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
    @media (max-width:575px) {
        font-size: 40px;
    }
`

export const Span = styled.span`
    font-weight: normal;
`

export const Form = styled.form`
    width: 70%;
    margin: auto;
    @media (max-width:575px) {
        width: 90%
    }
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    @media (max-width:575px) {
        width:100%;
    }
`
export const InputForm = styled(Input)`
    width: 49%;
    float: ${props => props.dir === "left"?"left":"right"};
`
export const InputSub = styled(Input)`
    width: 100%;
`
export const InputSubmit = styled(Input)`
   width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
`
export const FormInput = styled.div`
    overflow: hidden;
`
export const Textarea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc;
`

