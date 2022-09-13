// import gql from 'graphql-tag';
import { gql } from '@apollo/client';

// const getPatient = gql`
// {
//     me{
//         firstName
//         lastName
//         email
//         address
//         gender
//         appointments{
//             status 
//             concern 
//             dateTime
//             doctor
//             patient
//         }
//         primarycareteam{
//             name
//             gender
//             email
//         }
//         history{
//             height
//             weight
//             allergies
//             medications
//             data
//         }
//     }
// }`

const GET_PATIENT_EMAIL_BY_ID = gql`
    query GetPatientEmailByID ($_id: String!) {
        getPatientEmailByID (_id: $_id) 
        {
            email
            username
            firstName
            lastName
            gender
            appointments {
                status
                concern
                dateTime
            }
            primarycareteam {
                email
                firstName
                lastName
            }
            history{
                allergies
            }
        }
    }
`

// const GET_PATIENT_EMAIL_BY_ID = gql`
// query GetPatientEmailByID {
//     getPatientEmailByID (_id: "631e428eba80966864550375") 
//     {
//         email
//     }
// }

const GET_DOCTOR_EMAIL_BY_ID = gql`
    query GetDoctorEmailByID ($_id: String!) {
        getDoctorEmailByID (_id: $_id) 
        {
            email
            username
            firstName
            lastName
            appointments {
                status
                concern
                dateTime
            }
        }
    }
`

const getDoctor = gql`
{
    me{
        firstName
        lastName
        email
        gender
        appointments {
            status 
            concern 
            dateTime
            doctor
            patient
        }
    }
}`

const GET_ALL_DOCTORS = gql`
    query GetDoctors{
        getDoctors{
            _id
            firstName
            lastName
            email
        }
    }
`

const GET_PATIENT = gql `
    query GetPatient($_id: String!){
        getPatient(_id: $_id){
            _id
            username
            email
            firstName
            lastName
        }
    }
`


export { getDoctor, GET_ALL_DOCTORS, GET_PATIENT_EMAIL_BY_ID, GET_PATIENT, GET_DOCTOR_EMAIL_BY_ID } 